var patel_default = require('./index');
var esmangle = require('esmangle');

function generateLineAndColumnMap(input){
	var lines = [];
	var columns = [];
	var line = 1;
	var col = 0
	for(var j = 0; j < input.length; j++) {
		lines[j] = line;
		columns[j] = col;
		if(input[j] === '\n') { line += 1; col = 0 }
		else { col += 1 }
	};
	return {
		line: lines,
		column: columns
	}
}
exports.generateLineAndColumnMap = generateLineAndColumnMap
function compile(_input, _options, callback){
	var input = _input + '\n\n\n';
	var options = _options || {};
	var patel = options.patel || patel_default;
	
	var lcmap = generateLineAndColumnMap(input);
	
	if(options['dump-input']){
		return callback(null, null, input)
	}
	
	var gs0 = options.externScope || patel.globals();
	gs0.strict = options.strict;

	function getComeFrom(){
		if(options.from && options.from.argv) return '<ARGV>'
		if(options.from && options.from.file) return '' + options.from.file
		return '<STDIN>'
	}
	
	gs0.macros.put("input-path", function(){ return ['.quote', getComeFrom()] });
	
	var gs = new patel.Scope(gs0);
	gs.strict = gs0.strict;
	
	try {
		var parseOptions = {within: { file: getComeFrom(), input: input }}
		var ast = patel.parse(input, parseOptions);
	} catch(ex) {
		if(ex.offset >= 0){
			ex.begins = ex.ends = ex.offset;
			ex.within = parseOptions.within;
		}
		return callback(ex)
	}
	
	try {
		if(options['dump-ast']) { return callback(null, null, ast)}
		
		var xastP = patel.ex(patel.prepareAST, gs0);
		var xast = ['.begin', xastP, patel.ex(ast, gs)];
		patel.checkEvaluated(xast);
		if(options['dump-expanded']) { return callback(null, null, xast)}
		
		var rast = patel.regularize(xast, gs);
		if(options['dump-regularized']) { return callback(null, null, rast)}
		
		var tast = patel.pat2esc(rast, gs, lcmap);
		if(tast.type === "BlockStatement") {
			tast.type = "Program"
		} else {
			tast = {
				type: "Program",
				body: [tast]
			}
		}
		if(options.strict) tast.body.unshift({
			type: 'ExpressionStatement',
			expression: {
				type: 'Literal',
				value: 'use strict'
			}
		});
		if(options['dump-transformed']) { return callback(null, null, tast)}
		
		if(options.optimize) tast = esmangle.optimize(tast);
		if(options.mangle) tast = esmangle.mangle(tast);		
		var codegenOptions = {sourceMap: getComeFrom(), sourceMapWithCode: true};
		if(options.ugly) {
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
	} catch(ex) {
		return callback(ex);
	}
}
exports.compile = compile;