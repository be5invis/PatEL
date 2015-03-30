var patrisika = require('patrisika');
var escodegen = require('escodegen');

var parserLib = require('./src/syntax.js');
var exLib = require('./src/ex');
var externsLib = require('./src/externs');
process.stderr.write("Using in-development PatEL components.\n")

var parse = function(){ return parserLib.parse.apply(this, arguments) };
var ex = function(){ return exLib.ex.apply(this, arguments) };
var checkEvaluated = function(){ return exLib.checkEvaluated.apply(this, arguments) };

var globals = function(){ return new patrisika.Scope(externsLib.Create()) };
var compile = function(ast, globals){ 
	var xast = ex(ast, globals);
	var rast = patrisika.generate(xast, globals)
	return escodegen.generate(rast) 
};

exports.Scope = patrisika.Scope;
exports.globals = globals;
exports.parse = parse;
exports.ex = ex;
exports.regularize = patrisika.regularize;
exports.pat2esc = patrisika.pat2esc;
exports.generateCode = escodegen.generate;
exports.compile = compile;
exports.checkEvaluated = checkEvaluated;