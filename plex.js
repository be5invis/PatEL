var patel_default = require('./index');
var esmangle = require('esmangle');

function generateLineAndColumnMap(input) {
	var lines = [];
	var columns = [];
	var line = 1;
	var col = 0
	for (var j = 0; j < input.length; j++) {
		lines[j] = line;
		columns[j] = col;
		if (input[j] === '\n') { line += 1; col = 0 }
		else { col += 1 }
	};
	return {
		line: lines,
		column: columns
	}
}
exports.generateLineAndColumnMap = generateLineAndColumnMap

function printSourceLines(stream, lines, firstLineNumber) {
	stream.write(lines.map(function(line, k) { return '  ' + (firstLineNumber + k) + '\t| ' + line }).join('\n') + '\n')
}
function reportError(ex, _stderr) {
	var stderr = _stderr || process.stderr
	if (ex.begins >= 0 && ex.ends >= 0) {
		console.error(ex.message);
		if (ex.within && ex.within.input) {
			var lcmap = generateLineAndColumnMap(ex.within.input);
			var lines = ex.within.input.split("\n");
			var ljBegins = lcmap.line[ex.begins] - 1;
			var ljEnds = lcmap.line[ex.ends] - 1;
			if (ex.within.file) {
				stderr.write(ex.within.file + "\n")
			}
			if (ljEnds - ljBegins < 3) {
				printSourceLines(stderr, lines.slice(ljBegins, ljEnds + 1), ljBegins + 1);
			} else {
				printSourceLines(stderr, lines.slice(ljBegins, ljBegins + 2), ljBegins + 1);
				stderr.write("......\n");
				printSourceLines(stderr, lines.slice(ljEnds - 1, ljEnds + 1), ljEnds);
			}
		}
	} else {
		console.error(ex.stack || ex);
	}
}
exports.reportError = reportError

function compile(_input, _options, callback) {
	var input = _input + '\n\n\n';
	var options = _options || {};
	var patel = options.patel || patel_default;

	var lcmap = generateLineAndColumnMap(input);

	if (options['dump-input']) {
		return callback(null, null, input)
	}

	var gs0 = options.externScope || patel.globals();
	gs0.options = options;
	var isStrict = options.strict;
	options.strict = false;

	function getComeFrom() {
		if (options.from && options.from.argv) return '<ARGV>'
		if (options.from && options.from.file) return '' + options.from.file
		return '<STDIN>'
	}

	gs0.macros.put("input-path", function() { return ['.quote', getComeFrom()] });

	var gs = new patel.Scope(gs0);

	try {
		var parseOptions = { within: { file: getComeFrom(), input: input } }
		var ast = patel.parse(input, parseOptions);
	} catch (ex) {
		if (ex.offset >= 0) {
			ex.begins = ex.ends = ex.offset;
			ex.within = parseOptions.within;
		}
		return callback(ex)
	}

	try {
		if (options['dump-ast']) { return callback(null, null, ast) }

		var xastP = patel.ex(patel.prepareAST, gs);

		gs0.options.trace = true;
		var xast = ['.begin', xastP, patel.ex(ast, gs)];
		patel.checkEvaluated(xast);
		if (options['dump-expanded']) { return callback(null, null, xast) }

		options.strict = options.strict || isStrict;

		var rast = patel.regularize(xast, gs);
		if (options['dump-regularized']) { return callback(null, null, rast) }

		var tast = patel.pat2esc(rast, gs, lcmap);
		if (tast.type === "BlockStatement") {
			tast.type = "Program"
		} else {
			tast = {
				type: "Program",
				body: [tast]
			}
		}
		if (options.strict) tast.body.unshift({
			type: 'ExpressionStatement',
			expression: {
				type: 'Literal',
				value: 'use strict'
			}
		});
		if (options['dump-transformed']) { return callback(null, null, tast) }

		if (options.optimize) {
			tast = esmangle.optimize(tast);
		} else {
			tast = esmangle.optimize(tast, [[
				require('esmangle/lib/pass/drop-variable-definition'),
				require('esmangle/lib/pass/remove-side-effect-free-expressions'),
				require('esmangle/lib/pass/dead-code-elimination'),
				require('esmangle/lib/pass/remove-unreachable-branch'),
				require('esmangle/lib/pass/remove-empty-statement'),
				require('esmangle/lib/pass/remove-wasted-blocks')
			]])
		}
		if (options.mangle) tast = esmangle.mangle(tast);
		var codegenOptions = { sourceMap: getComeFrom(), sourceMapWithCode: true };
		if (options.ugly) {
			codegenOptions.format = {
				renumber: true,
				hexadecimal: true,
				escapeless: false,
				compact: true,
				semicolons: false,
				parentheses: false
			}
		}
		return callback(null, patel.generateCode(tast, codegenOptions))
	} catch (ex) {
		return callback(ex);
	}
}
exports.compile = compile;