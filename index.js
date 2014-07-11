var parse = require('./src/syntax').parse;
var fs = require('fs');
var util = require('util');
var patrisika = require('patrisika');
var escodegen = require('escodegen');
var ex = require('./src/ex').pass;
var exm = require('./src/externs');

function trace(s){ process.stderr.write(s + '\n') };

var globals = function(){ return new patrisika.Scope(exm.Create()) };
var compile = function(ast, globals){ 
	var xast = ex(ast, globals);
	var rast = patrisika.generate(xast, globals)
	return escodegen.generate(rast) 
};

exports.globals = globals;
exports.parse = parse;
exports.compile = compile;