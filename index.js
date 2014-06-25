var parse = require('./src/syntax').parse;
var fs = require('fs');
var util = require('util');
var patrisika = require('patrisika');
var escodegen = require('escodegen');
var ex = require('./src/ex.js').pass;
var exm = require('./src/externs');

function trace(s){ process.stderr.write(s + '\n') }

var st = new Date();
var input = fs.readFileSync(process.argv[2], 'utf-8');
var ast = parse(input);
var et = new Date();
trace(et - st);

var globals = new patrisika.Scope(exm.Create());

var xast = ex(ast, globals);
trace(util.inspect(xast, {depth: null}))
trace('##############################################')

var rast = patrisika.generate(xast, globals);
//console.log(util.inspect(rast, {depth: null}))

console.log(escodegen.generate(rast));