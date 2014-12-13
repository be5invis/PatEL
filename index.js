var parse = require('./active/syntax.js').parse;
var fs = require('fs');
var util = require('util');
var patrisika = require('patrisika');
var escodegen = require('escodegen');
var ex = require('./active/ex').pass;
var checkEvaluated = require('./active/ex').checkEvaluated;
var exm = require('./active/externs');

function trace(s){ process.stderr.write(s + '\n') };

var globals = function(){ return new patrisika.Scope(exm.Create()) };
var compile = function(ast, globals){ 
	var xast = ex(ast, globals);
	var rast = patrisika.generate(xast, globals)
	return escodegen.generate(rast) 
};

exports.globals = globals;
exports.parse = parse;
exports.ex = ex;
exports.regularize = patrisika.regularize;
exports.pat2esc = patrisika.pat2esc;
exports.generateCode = escodegen.generate;
exports.compile = compile;
exports.checkEvaluated = checkEvaluated;