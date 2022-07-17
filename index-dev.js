var patrisika = require("patrisika");
var escodegen = require("escodegen");
var parserLib = require("./src/syntax.js");
var exLib = require("./src/ex");
var externsLib = require("./src/externs");
var prepareAST = require("./src/essential-macros.json");

process.stderr.write("Using in-development PatEL components.\n");

var parse = function () {
    return parserLib.parse.apply(this, arguments);
};
var ex = function () {
    return exLib.ex.apply(this, arguments);
};
var checkEvaluated = function () {
    return exLib.checkEvaluated.apply(this, arguments);
};

var globals = function () {
    return new patrisika.Scope(externsLib.Create());
};

exports.Scope = patrisika.Scope;
exports.globals = globals;
exports.parse = parse;
exports.ex = ex;
exports.regularize = patrisika.regularize;
exports.pat2esc = patrisika.pat2esc;
exports.generateCode = escodegen.generate;
exports.checkEvaluated = checkEvaluated;
exports.prepareAST = prepareAST;
