var patrisika = require("patrisika");
var astring = require("astring");
var parserLib = require("./active/syntax.js");
var exLib = require("./active/ex");
var externsLib = require("./active/externs");
var prepareAST = require("./active/essential-macros.json");

var parse = function (input, options) {
    try {
        return parserLib.parse.apply(this, arguments);
    } catch (e) {
        if (e.location) {
            var wrappedParseError = new SyntaxError(e.message);
            wrappedParseError.begins = e.location.start.offset;
            wrappedParseError.ends = e.location.end.offset;
            wrappedParseError.within = options.within;
            throw wrappedParseError;
        } else {
            throw e;
        }
    }
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
exports.generateCode = astring.generate;
exports.checkEvaluated = checkEvaluated;
exports.prepareAST = prepareAST;
