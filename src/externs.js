var s4_patrisika, s4_atom, s4_prim, s4_Scope, s4_escodegen, s4_util, s4_ex, s4_deQuasiquote, s4_FormInvalidError, s4_wrapForSyntacticClosure, s4_Create, _s4_t0, _s4_t1, _s4_t2, _s4_t3, _s4_t4;

s4_patrisika = require("patrisika"), s4_atom = function(s5_x) {
    var s5_x;
    return "string" == typeof s5_x;
}, s4_prim = function(s6_x) {
    var s6_x;
    return s4_atom(s6_x) && "&" !== s6_x && "&!" !== s6_x && ("." === s6_x[0] || /^\W+/.test(s6_x));
}, s4_Scope = require("patrisika").Scope, s4_escodegen = require("escodegen"), s4_util = require("util"), 
s4_ex = require("./ex").ex, s4_deQuasiquote = require("./ex").deQuasiquote, s4_FormInvalidError = function(s7_form, s7_reason) {
    var s7_form, s7_reason, _s7_t0, _s7_t1;
    return _s7_t0 = this, _s7_t0.reason = s7_reason, _s7_t0.message = s7_reason, _s7_t0.relatedForm = s7_form, 
    s7_form && s7_form.begins >= 0 && s7_form.ends >= 0 ? (_s7_t0.begins = s7_form.begins, 
    _s7_t0.ends = s7_form.ends, _s7_t1 = _s7_t0.message = _s7_t0.message + ("\nAround (" + _s7_t0.begins + " -- " + _s7_t0.ends + ")")) : _s7_t1 = void 0, 
    null;
}, s4_FormInvalidError.prototype = Object.create(Error.prototype), s4_wrapForSyntacticClosure = function(s8_fn) {
    var s8_fn;
    return function(s9_x) {
        var s9_x, s9_otherwise, s9_c, s9_e, _s9_t0;
        return _s9_t0 = s9_x, _s9_t0 instanceof Array && 3 === _s9_t0.length && ".syntactic-closure" === _s9_t0[0] ? (s9_c = _s9_t0[1], 
        s9_e = _s9_t0[2], s8_fn(s9_c)) : (s9_otherwise = _s9_t0, s8_fn(s9_x));
    };
}, s4_Create = function() {
    var s10_externs, s10_operatorRename, s10_reportInvalid, s10_AssignWithMod, s10_Assign, s10_boole;
    return s10_externs = s4_patrisika.DefaultExterns(), s10_externs.castName = function(s11_name) {
        var s11_name;
        return s11_name;
    }, s10_externs.declare("require"), s10_externs.declare("exports"), s10_externs.declare("process"), 
    s10_externs.declare("module"), s10_externs.declare("Error"), s10_operatorRename = function(s12_op) {
        var s12_op;
        return function(s13_form, s13_env) {
            var s13_form, s13_env;
            return s4_ex([ s12_op ].concat(s13_form.slice(1)), s13_env);
        };
    }, s10_reportInvalid = function(s14_form, s14_reason) {
        var s14_form, s14_reason;
        throw new s4_FormInvalidError(s14_form, s14_reason);
    }, s10_externs.macros.put("begin", s10_operatorRename(".begin")), s10_externs.macros.put("then", s10_operatorRename(".begin")), 
    s10_externs.macros.put("else", s10_operatorRename(".begin")), s10_externs.macros.put("while", s10_operatorRename(".while")), 
    s10_externs.macros.put("try", s10_operatorRename(".try")), s10_externs.macros.put("is", s10_operatorRename(".is")), 
    s10_externs.macros.put("<@", s10_operatorRename(".is")), s10_externs.macros.put("new", s10_operatorRename(".new")), 
    s10_externs.macros.put("this", s10_operatorRename(".thisp")), s10_externs.macros.put("arguments", s10_operatorRename(".argsp")), 
    s10_externs.macros.put("and", s10_operatorRename("&&")), s10_externs.macros.put("or", s10_operatorRename("||")), 
    s10_externs.macros.put("not", s10_operatorRename("!")), s10_externs.macros.put("return", s10_operatorRename(".return")), 
    s10_externs.macros.put("yield", s10_operatorRename(".yield")), s10_externs.macros.put("throw", s10_operatorRename(".throw")), 
    s10_externs.macros.put("list", s10_operatorRename(".list")), s10_externs.macros.put("typeof", s10_operatorRename(".typeof")), 
    s10_externs.macros.put("quasiquote", s10_operatorRename(".quasiquote")), s10_externs.macros.put("syntax", s10_operatorRename(".quasiquote")), 
    s10_externs.macros.put("lambda", function(s15_form, s15_env) {
        var s15_form, s15_env, s15_otherwise, s15_car, s15_body, s15_parameters, _s15_t0;
        return _s15_t0 = s15_form, _s15_t0 instanceof Array && 3 === _s15_t0.length ? (s15_car = _s15_t0[0], 
        s15_parameters = _s15_t0[1], s15_body = _s15_t0[2], s4_ex([ ".lambda", s15_parameters, s15_body ], s15_env)) : _s15_t0 instanceof Array && 2 === _s15_t0.length ? (s15_car = _s15_t0[0], 
        s15_body = _s15_t0[1], s4_ex([ ".lambda", [], s15_body ], s15_env)) : _s15_t0 instanceof Array && 1 === _s15_t0.length ? (s15_car = _s15_t0[0], 
        s4_ex([ ".lambda", [], [ ".unit" ] ], s15_body)) : (s15_otherwise = _s15_t0, s10_reportInvalid(s15_otherwise, "Invalid Lambda Formation"));
    }), s10_externs.macros.put("function", s10_externs.macros.get("lambda")), s10_externs.macros.put("if", function(s16_form, s16_env) {
        var s16_form, s16_env, s16_otherwise, s16_test, s16_consequents, s16_alternates, s16_consequent, s16_alternate, _s16_t0;
        return _s16_t0 = s16_form, _s16_t0 instanceof Array && 3 === _s16_t0.length && "if" === _s16_t0[0] ? (s16_test = _s16_t0[1], 
        s16_consequent = _s16_t0[2], s4_ex([ ".if", s16_test, s16_consequent ], s16_env)) : _s16_t0 instanceof Array && 4 === _s16_t0.length && "if" === _s16_t0[0] ? (s16_test = _s16_t0[1], 
        s16_consequent = _s16_t0[2], s16_alternate = _s16_t0[3], s4_ex([ ".if", s16_test, s16_consequent, s16_alternate ], s16_env)) : _s16_t0 instanceof Array && 3 === _s16_t0.length && "if" === _s16_t0[0] && _s16_t0[2] instanceof Array && _s16_t0[2].length >= 1 && "then" === _s16_t0[2][0] ? (s16_test = _s16_t0[1], 
        s16_consequents = _s16_t0[2].slice(1), s4_ex([ ".if", s16_test, [ ".begin" ].concat(s16_consequents) ], s16_env)) : _s16_t0 instanceof Array && 4 === _s16_t0.length && "if" === _s16_t0[0] && _s16_t0[2] instanceof Array && _s16_t0[2].length >= 1 && "then" === _s16_t0[2][0] && _s16_t0[3] instanceof Array && _s16_t0[3].length >= 1 && "else" === _s16_t0[3][0] ? (s16_test = _s16_t0[1], 
        s16_consequents = _s16_t0[2].slice(1), s16_alternates = _s16_t0[3].slice(1), s4_ex([ ".if", s16_test, [ ".begin" ].concat(s16_consequents), [ ".begin" ].concat(s16_alternates) ], s16_env)) : (s16_otherwise = _s16_t0, 
        s10_reportInvalid(s16_otherwise, "Invalid Conditional Form"));
    }), s10_externs.macros.put(".conslist", function(s17_form, s17_env) {
        var s17_form, s17_env;
        return [ [ ".", s4_ex([ ".list" ].concat(s17_form.slice(1, -1)), s17_env), [ ".quote", "concat" ] ], s4_ex(s17_form[s17_form.length - 1], s17_env) ];
    }), s10_externs.macros.put("let", function(s18_form, s18_env) {
        var s18_form, s18_env, s18_pairs, s18_args, s18_paras, s18_j, s18_arg, s18_param, s18_useless, _s18_t0, _s18_t1, _s18_t2, _s18_t3;
        for (s18_pairs = s18_form.slice(1, -1), s18_args = [], s18_paras = [], s18_j = 0; s18_j < s18_pairs.length; s18_j += 1) _s18_t0 = s18_pairs[s18_j], 
        _s18_t0 instanceof Array && _s18_t0.length >= 2 ? (s18_arg = _s18_t0[0], s18_param = _s18_t0[1], 
        s18_useless = _s18_t0.slice(2), s18_args.push(s18_arg), s18_paras.push(s18_param)) : _s18_t0 instanceof Array && 2 === _s18_t0.length ? (s18_arg = _s18_t0[0], 
        s18_param = _s18_t0[1], s18_args.push(s18_arg), s18_paras.push(s18_param)) : (_s18_t1 = !1, 
        _s18_t0 instanceof Array && 1 === _s18_t0.length ? (s18_arg = _s18_t0[0], _s18_t3 = _s18_t1 = s4_atom(s18_arg) ? !0 : !1, 
        _s18_t2 = _s18_t3) : _s18_t2 = void 0, _s18_t1 && (s18_args.push(s18_arg), s18_paras.push(s18_env.use(s18_arg))));
        return s4_ex([ ".beta", s18_args, s18_form[s18_form.length - 1] ].concat(s18_paras), s18_env);
    }), s10_externs.macros.put("object", function(s19_form, s19_env) {
        var s19_form, s19_env, s19_pairs;
        return s19_pairs = s19_form.slice(1).map(function(s20_pair) {
            var s20_pair, s20_property, s20_value, s20_useless, _s20_t0, _s20_t1, _s20_t4, _s20_t5;
            return _s20_t0 = s20_pair, _s20_t0 instanceof Array && _s20_t0.length >= 2 ? (s20_property = _s20_t0[0], 
            s20_value = _s20_t0[1], s20_useless = _s20_t0.slice(2), [ s20_property, s4_ex(s20_value, s19_env) ]) : _s20_t0 instanceof Array && 2 === _s20_t0.length ? (s20_property = _s20_t0[0], 
            s20_value = _s20_t0[1], [ s20_property, s4_ex(s20_value, s19_env) ]) : (_s20_t1 = !1, 
            _s20_t0 instanceof Array && 1 === _s20_t0.length ? (s20_property = _s20_t0[0], _s20_t5 = _s20_t1 = s4_atom(s20_property) ? !0 : !1, 
            _s20_t4 = _s20_t5) : _s20_t4 = void 0, _s20_t1 ? [ s20_property, s19_env.use(s20_property) ] : void 0);
        }), [ ".hash" ].concat(s19_pairs);
    }), s10_externs.macros.put("piecewise", function(s21_form, s21_env) {
        var s21_form, s21_env, s21_pairs, s21_f, s21_j, _s21_t0;
        if (_s21_t0 = s21_form, _s21_t0 instanceof Array && _s21_t0.length >= 1 && "piecewise" === _s21_t0[0]) {
            for (s21_pairs = _s21_t0.slice(1), s21_f = [ ".unit" ], s21_j = s21_pairs.length - 1; s21_j >= 0; s21_j -= 1) s21_f = [ ".if", s4_ex(s21_pairs[s21_j][0], s21_env), s4_ex(s21_pairs[s21_j][1], s21_env), s21_f ];
            return s21_f;
        }
        return void 0;
    }), s10_AssignWithMod = function(s22_left, s22_right, s22_mod, s22_env, s22_locallyQ) {
        var s22_left, s22_right, s22_mod, s22_env, s22_locallyQ, s22_any, s22_callee, s22_paras, s22_items, s22_a, _s22_t0;
        return _s22_t0 = s22_left, _s22_t0 instanceof Array && 2 === _s22_t0.length && "local" === _s22_t0[0] ? (s22_a = _s22_t0[1], 
        s10_AssignWithMod(s22_a, s22_left, s22_right, s22_mod, s22_env, !0)) : _s22_t0 instanceof Array && 2 === _s22_t0.length && ".local" === _s22_t0[0] ? (s22_a = _s22_t0[1], 
        s10_AssignWithMod(s22_a, s22_left, s22_right, s22_mod, s22_env, !0)) : _s22_t0 instanceof Array && _s22_t0.length >= 1 && ".list" === _s22_t0[0] ? (s22_items = _s22_t0.slice(1), 
        s10_Assign(s22_left, [ s22_mod, s22_right ], s22_env, s22_locallyQ)) : _s22_t0 instanceof Array && _s22_t0.length >= 1 && ".hash" === _s22_t0[0] ? (s22_items = _s22_t0.slice(1), 
        s10_Assign(s22_left, [ s22_mod, s22_right ], s22_env, s22_locallyQ)) : _s22_t0 instanceof Array && _s22_t0.length >= 1 ? (s22_callee = _s22_t0[0], 
        s22_paras = _s22_t0.slice(1), s4_prim(s22_callee) ? [ ".set", s4_ex(s22_left, s22_env), s4_ex([ s22_mod, s22_right ], s22_env) ] : s4_atom(s22_callee) && s22_locallyQ ? [ ".set", s4_ex([ ".local", s22_callee ], s22_env), s4_ex([ s22_mod, [ ".lambda", [].concat(s22_paras), s22_right ] ], s22_env) ] : [ ".set", s4_ex(s22_callee, s22_env), s4_ex([ s22_mod, [ ".lambda", [].concat(s22_paras), s22_right ] ], s22_env) ]) : (s22_any = _s22_t0, 
        s10_Assign(s4_ex, s22_left, [ s22_mod, s22_right ], s22_env, s22_locallyQ));
    }, s10_Assign = function(s23_left, s23_right, s23_env, s23_locallyQ) {
        var s23_left, s23_right, s23_env, s23_locallyQ, s23_any, s23_callee, s23_paras, s23_items, s23_t, s23_assignments, s23_j, s23_a, s23_id, _s23_t0;
        if (_s23_t0 = s23_left, s23_id = _s23_t0, s4_atom(s23_id)) return s23_locallyQ ? [ ".set", s4_ex([ ".local", s23_id ], s23_env), s4_ex(s23_right, s23_env) ] : [ ".set", s4_ex(s23_left, s23_env), s4_ex(s23_right, s23_env) ];
        if (_s23_t0 instanceof Array && 2 === _s23_t0.length && "local" === _s23_t0[0]) return s23_a = _s23_t0[1], 
        s10_Assign(s23_a, s23_right, s23_env, !0);
        if (_s23_t0 instanceof Array && 2 === _s23_t0.length && ".local" === _s23_t0[0]) return s23_a = _s23_t0[1], 
        s10_Assign(s23_a, s23_right, s23_env, !0);
        if (_s23_t0 instanceof Array && _s23_t0.length >= 1 && ".list" === _s23_t0[0]) {
            for (s23_items = _s23_t0.slice(1), s23_t = s23_env.newt(), s23_assignments = [ ".begin", [ ".set", s23_t, s4_ex(s23_right, s23_env) ] ], 
            s23_j = 0; s23_j < s23_items.length; s23_j += 1) s23_assignments.push(s10_Assign(s23_items[s23_j], [ ".", s23_t, [ ".quote", s23_j ] ], s23_env, s23_locallyQ));
            return s23_assignments.push(s23_t), s23_assignments;
        }
        if (_s23_t0 instanceof Array && _s23_t0.length >= 1 && ".hash" === _s23_t0[0]) {
            for (s23_items = _s23_t0.slice(1), s23_t = s23_env.newt(), s23_assignments = [ ".begin", [ ".set", s23_t, s4_ex(s23_right, s23_env) ] ], 
            s23_j = 0; s23_j < s23_items.length; s23_j += 1) s23_assignments.push(s10_Assign(s23_items[s23_j][1], [ ".", s23_t, s23_items[s23_j][0] ], s23_env, s23_locallyQ));
            return s23_assignments.push(s23_t), s23_assignments;
        }
        if (_s23_t0 instanceof Array && _s23_t0.length >= 1) return s23_callee = _s23_t0[0], 
        s23_paras = _s23_t0.slice(1), s4_prim(s23_callee) ? [ ".set", s4_ex(s23_left, s23_env), s4_ex(s23_right, s23_env) ] : s4_atom(s23_callee) && s23_locallyQ ? [ ".set", s4_ex([ ".local", s23_callee ], s23_env), s4_ex([ ".lambda", [].concat(s23_paras), s23_right ], s23_env) ] : [ ".set", s4_ex(s23_callee, s23_env), s4_ex([ ".lambda", [].concat(s23_paras), s23_right ], s23_env) ];
        throw s23_any = _s23_t0, new s4_FormInvalidError(s23_left, "Invalid Assignment Left-hand Side");
    }, s10_externs.macros.put("define", function(s24_form, s24_env) {
        var s24_form, s24_env, s24_any, s24_op, s24_left, s24_right, s24_modifer, _s24_t0, _s24_t1, _s24_t4, _s24_t5;
        if (_s24_t0 = s24_form, _s24_t0 instanceof Array && 4 === _s24_t0.length) return s24_op = _s24_t0[0], 
        s24_modifer = _s24_t0[1], s24_left = _s24_t0[2], s24_right = _s24_t0[3], s10_AssignWithMod(s24_left, s24_right, s24_modifer, s24_env, !0);
        if (_s24_t0 instanceof Array && 3 === _s24_t0.length) return s24_op = _s24_t0[0], 
        s24_left = _s24_t0[1], s24_right = _s24_t0[2], s10_Assign(s24_left, s24_right, s24_env, !0);
        if (_s24_t1 = !1, _s24_t0 instanceof Array && 2 === _s24_t0.length ? (s24_op = _s24_t0[0], 
        s24_left = _s24_t0[1], _s24_t5 = _s24_t1 = s4_atom(s24_left) ? !0 : !1, _s24_t4 = _s24_t5) : _s24_t4 = void 0, 
        _s24_t1) return [ ".local", s24_left ];
        throw s24_any = _s24_t0, new s4_FormInvalidError(s24_any, "Invalid Assignment");
    }), s10_externs.macros.put("local", s10_externs.macros.get("define")), s10_externs.macros.put("set", function(s25_form, s25_env) {
        var s25_form, s25_env, s25_any, s25_op, s25_left, s25_right, _s25_t0;
        if (_s25_t0 = s25_form, _s25_t0 instanceof Array && 3 === _s25_t0.length) return s25_op = _s25_t0[0], 
        s25_left = _s25_t0[1], s25_right = _s25_t0[2], s10_Assign(s25_left, s25_right, s25_env, !1);
        throw s25_any = _s25_t0, new s4_FormInvalidError(s25_any, "Invalid Assignment");
    }), s10_externs.macros.put("inc", function(s26_form, s26_env) {
        var s26_form, s26_env, s26_op, s26_id, s26_shift, _s26_t0;
        return _s26_t0 = s26_form, _s26_t0 instanceof Array && 2 === _s26_t0.length ? (s26_op = _s26_t0[0], 
        s26_id = _s26_t0[1], s10_Assign(s26_id, [ "+", s26_id, [ ".quote", 1 ] ], s26_env, !1)) : _s26_t0 instanceof Array && 3 === _s26_t0.length ? (s26_op = _s26_t0[0], 
        s26_id = _s26_t0[1], s26_shift = _s26_t0[2], s10_Assign(s26_id, [ "+", s26_id, s26_shift ], s26_env, !1)) : _s26_t0 instanceof Array && 4 === _s26_t0.length && "by" === _s26_t0[2] ? (s26_op = _s26_t0[0], 
        s26_id = _s26_t0[1], s26_shift = _s26_t0[3], s10_Assign(s26_id, [ "+", s26_id, s26_shift ], s26_env, !1)) : void 0;
    }), s10_externs.macros.put("dec", function(s27_form, s27_env) {
        var s27_form, s27_env, s27_op, s27_id, s27_shift, _s27_t0;
        return _s27_t0 = s27_form, _s27_t0 instanceof Array && 2 === _s27_t0.length ? (s27_op = _s27_t0[0], 
        s27_id = _s27_t0[1], s10_Assign(s27_id, [ "-", s27_id, [ ".quote", 1 ] ], s27_env, !1)) : _s27_t0 instanceof Array && 3 === _s27_t0.length ? (s27_op = _s27_t0[0], 
        s27_id = _s27_t0[1], s27_shift = _s27_t0[2], s10_Assign(s27_id, [ "-", s27_id, s27_shift ], s27_env, !1)) : _s27_t0 instanceof Array && 4 === _s27_t0.length && "by" === _s27_t0[2] ? (s27_op = _s27_t0[0], 
        s27_id = _s27_t0[1], s27_shift = _s27_t0[3], s10_Assign(s27_id, [ "-", s27_id, s27_shift ], s27_env, !1)) : void 0;
    }), s10_externs.macros.put("for", function(s28_form, s28_env) {
        var s28_form, s28_env, s28_init, s28_test, s28_step, s28_body, _s28_t0;
        return _s28_t0 = s28_form, _s28_t0 instanceof Array && 5 === _s28_t0.length && "for" === _s28_t0[0] ? (s28_init = _s28_t0[1], 
        s28_test = _s28_t0[2], s28_step = _s28_t0[3], s28_body = _s28_t0[4], [ ".begin", s4_ex(s28_init, s28_env), [ ".while", s4_ex(s28_test, s28_env), [ ".begin", s4_ex(s28_body, s28_env), s4_ex(s28_step, s28_env) ] ] ]) : void 0;
    }), s10_externs.macros.put("foreach", function(s29_form, s29_env) {
        var s29_form, s29_env, s29_varid, s29_range, s29_body, s29_tR, s29_t, _s29_t0;
        return _s29_t0 = s29_form, _s29_t0 instanceof Array && 4 === _s29_t0.length && "foreach" === _s29_t0[0] ? (s29_varid = _s29_t0[1], 
        s29_range = _s29_t0[2], s29_body = _s29_t0[3], s29_tR = s29_env.newt(), s29_t = s29_env.newt(), 
        [ ".begin", [ ".set", s29_tR, s4_ex(s29_range, s29_env) ], [ ".while", [ "!", [ ".", [ ".set", s29_t, [ [ ".", s29_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", s10_Assign(s29_varid, [ ".", s29_t, [ ".quote", "value" ] ], s29_env, !1), s4_ex(s29_body, s29_env) ] ] ]) : void 0;
    }), s10_externs.macros.put("this", [ ".thisp" ]), s10_externs.macros.put("arguments", [ ".argsp" ]), 
    s10_externs.macros.put("nothing", [ ".unit" ]), s10_externs.macros.put("undefined", [ ".unit" ]), 
    s10_externs.macros.put("null", [ ".quote", null ]), s10_externs.macros.put("true", [ ".quote", !0 ]), 
    s10_externs.macros.put("false", [ ".quote", !1 ]), s10_boole = function(s30_x) {
        var s30_x;
        return !!s30_x;
    }, s10_externs.macros.put("match", function(s31_form, s31_env, s31_wrapper) {
        var s31_form, s31_env, s31_wrapper, s31_pairs, s31_t, s31_matchQ, s31_f, s31_j, s31_any, s31_pattern, s31_guard, s31_body, s31_pat, s31_cond, s31_tc, _s31_t0, _s31_t2, _s31_t3, _s31_t4, _s31_t5, _s31_t6, _s31_t7;
        for (s31_pairs = s31_form.slice(2), s31_t = s31_env.newt(), s31_matchQ = function(s32_pattern) {
            var s32_pattern, s32_callee, s32_subpatterns, s32_ms, s32_t, s32_final, s32_whatever, s32_x, s32_id, _s32_t0;
            return _s32_t0 = s32_pattern, s32_id = _s32_t0, s4_atom(s32_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s50_x, s50_flag) {
                    var s50_x, s50_flag, _s50_t0, _s50_t1, _s50_t2;
                    return _s50_t0 = ".set", _s50_t1 = s4_ex([ ".local", s32_pattern ], s31_env), _s50_t2 = s31_wrapper && !s50_flag ? [ s31_wrapper, s50_x ] : s50_x, 
                    [ _s50_t0, _s50_t1, _s50_t2 ];
                }
            } : _s32_t0 instanceof Array && 2 === _s32_t0.length && ".quote" === _s32_t0[0] ? (s32_x = _s32_t0[1], 
            {
                whether: function(s47_x) {
                    var s47_x;
                    return [ "===", s4_ex(s32_pattern, s31_env), s47_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s32_t0 instanceof Array && _s32_t0.length >= 1 && "." === _s32_t0[0] ? (s32_whatever = _s32_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s46_x, s46_flag) {
                    var s46_x, s46_flag, _s46_t0, _s46_t1, _s46_t2;
                    return _s46_t0 = ".set", _s46_t1 = s4_ex(s32_pattern, s31_env), _s46_t2 = s31_wrapper && !s46_flag ? [ s31_wrapper, s46_x ] : s46_x, 
                    [ _s46_t0, _s46_t1, _s46_t2 ];
                }
            }) : _s32_t0 instanceof Array && _s32_t0.length >= 1 && ".list" === _s32_t0[0] ? (s32_subpatterns = _s32_t0.slice(1), 
            s32_ms = s32_subpatterns.map(s31_matchQ), {
                whether: function(s41_x) {
                    var s41_x;
                    return [ "&&", [ ".is", s41_x, s10_externs.use("Array") ], [ "===", [ ".", s41_x, [ ".quote", "length" ] ], [ ".quote", s32_ms.length ] ] ].concat(s32_ms.map(function(s42_p, s42_j) {
                        var s42_p, s42_j;
                        return s42_p.whether([ ".", s41_x, [ ".quote", s42_j ] ]);
                    })).filter(s10_boole);
                },
                assign: function(s43_x, s43_flag) {
                    var s43_x, s43_flag;
                    return [ ".begin" ].concat(s32_ms.map(function(s44_p, s44_j) {
                        var s44_p, s44_j;
                        return s44_p.assign([ ".", s43_x, [ ".quote", s44_j ] ], s43_flag);
                    }));
                }
            }) : _s32_t0 instanceof Array && _s32_t0.length >= 1 && ".conslist" === _s32_t0[0] ? (s32_subpatterns = _s32_t0.slice(1), 
            s32_ms = s32_pattern.slice(1, -1).map(s31_matchQ), s32_final = s31_matchQ(s32_pattern[s32_pattern.length - 1]), 
            {
                whether: function(s37_x) {
                    var s37_x;
                    return [ "&&", [ ".is", s37_x, s10_externs.use("Array") ], [ ">=", [ ".", s37_x, [ ".quote", "length" ] ], [ ".quote", s32_ms.length ] ] ].concat(s32_ms.map(function(s38_p, s38_j) {
                        var s38_p, s38_j;
                        return s38_p.whether([ ".", s37_x, [ ".quote", s38_j ] ]);
                    }).concat([ s32_final.whether([ [ ".", s37_x, [ ".quote", "slice" ] ], [ ".quote", s31_j ] ]) ])).filter(s10_boole);
                },
                assign: function(s39_x, s39_flag) {
                    var s39_x, s39_flag, _s39_t1, _s39_t2, _s39_t3, _s39_t4, _s39_t5, _s39_t6, _s39_t7, _s39_t8;
                    return _s39_t1 = [ ".begin" ].concat(s32_ms.map(function(s40_p, s40_j) {
                        var s40_p, s40_j;
                        return s40_p.assign([ ".", s39_x, [ ".quote", s40_j ] ]);
                    })), _s39_t2 = _s39_t1.concat, _s39_t3 = s32_final, _s39_t4 = _s39_t3.assign, _s39_t5 = s31_wrapper && !s39_flag ? [ [ ".", [ [ ".", s39_x, [ ".quote", "slice" ] ], [ ".quote", s32_ms.length ] ], [ ".quote", "map" ] ], s31_wrapper ] : [ [ ".", s39_x, [ ".quote", "slice" ] ], [ ".quote", s32_ms.length ] ], 
                    _s39_t6 = !0, _s39_t7 = _s39_t4.call(_s39_t3, _s39_t5, _s39_t6), _s39_t8 = [ _s39_t7 ], 
                    _s39_t2.call(_s39_t1, _s39_t8);
                }
            }) : _s32_t0 instanceof Array && _s32_t0.length >= 1 && ".quasiquote" === _s32_t0[0] ? (s32_subpatterns = _s32_t0.slice(1), 
            s31_matchQ(s4_deQuasiquote(s32_pattern[1]))) : _s32_t0 instanceof Array && _s32_t0.length >= 1 ? (s32_callee = _s32_t0[0], 
            s32_subpatterns = _s32_t0.slice(1), s32_ms = s32_subpatterns.map(s31_matchQ), s32_t = s31_env.newt(), 
            {
                whether: function(s33_x) {
                    var s33_x;
                    return [ "&&", [ ".set", s32_t, [ [ ".", s4_ex(s32_callee, s31_env), [ ".quote", "unapply" ] ], s33_x, [ ".quote", s32_ms.length ] ] ] ].concat(s32_ms.map(function(s34_p, s34_j) {
                        var s34_p, s34_j;
                        return s34_p.whether([ ".", s32_t, [ ".quote", s34_j ] ]);
                    })).filter(s10_boole);
                },
                assign: function(s35_x, s35_flag) {
                    var s35_flag;
                    return [ ".begin" ].concat(s32_ms.map(function(s36_p, s36_j) {
                        var s36_p, s36_j;
                        return s36_p.assign([ ".", s32_t, [ ".quote", s36_j ] ], s35_flag);
                    }));
                }
            }) : void 0;
        }, s31_f = [ ".unit" ], s31_j = s31_pairs.length - 1; s31_j >= 0; s31_j -= 1) _s31_t0 = s31_pairs[s31_j], 
        _s31_t0 instanceof Array && 2 === _s31_t0.length ? (s31_pattern = _s31_t0[0], s31_body = _s31_t0[1], 
        s31_pat = s31_matchQ(s31_pattern), s31_cond = s31_pat.whether(s31_t), s31_cond ? _s31_t3 = [ ".if", s31_cond, [ ".begin", s31_pat.assign(s31_t), s4_ex(s31_body, s31_env) ], s31_f ] : (_s31_t4 = [ ".begin", s31_pat.assign(s31_t), s4_ex(s31_body, s31_env) ], 
        _s31_t3 = _s31_t4), _s31_t2 = _s31_t3) : (_s31_t0 instanceof Array && 3 === _s31_t0.length ? (s31_pattern = _s31_t0[0], 
        s31_guard = _s31_t0[1], s31_body = _s31_t0[2], s31_pat = s31_matchQ(s31_pattern), 
        s31_cond = s31_pat.whether(s31_t), s31_cond ? (s31_tc = s31_env.newt(), _s31_t6 = [ ".begin", [ ".set", s31_tc, [ ".quote", !1 ] ], [ ".if", s31_cond, [ ".begin", s31_pat.assign(s31_t), [ ".if", s4_ex(s31_guard, s31_env), [ ".set", s31_tc, [ ".quote", !0 ] ], [ ".set", s31_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s31_tc, s4_ex(s31_body, s31_env), s31_f ] ]) : (_s31_t7 = [ ".begin", s31_pat.assign(s31_t), [ ".if", s4_ex(s31_guard, s31_env), s4_ex(s31_body, s31_env), s31_f ] ], 
        _s31_t6 = _s31_t7), _s31_t5 = _s31_t6) : (s31_any = _s31_t0, _s31_t5 = s31_f), _s31_t2 = _s31_t5), 
        s31_f = _s31_t2;
        return [ ".begin", [ ".set", s31_t, s4_ex(s31_form[1], s31_env) ], s31_f ];
    }), s10_externs.macros.put("regex", function(s51_form) {
        var s51_form, s51_args, s51_s, s51_flag, _s51_t0;
        return _s51_t0 = s51_form, _s51_t0 instanceof Array && 2 === _s51_t0.length && "regex" === _s51_t0[0] && _s51_t0[1] instanceof Array && 2 === _s51_t0[1].length && ".quote" === _s51_t0[1][0] ? (s51_s = _s51_t0[1][1], 
        [ ".quote", new RegExp(s51_s) ]) : _s51_t0 instanceof Array && 3 === _s51_t0.length && "regex" === _s51_t0[0] && _s51_t0[1] instanceof Array && 2 === _s51_t0[1].length && ".quote" === _s51_t0[1][0] && _s51_t0[2] instanceof Array && 2 === _s51_t0[2].length && ".quote" === _s51_t0[2][0] ? (s51_s = _s51_t0[1][1], 
        s51_flag = _s51_t0[2][1], [ ".quote", new RegExp(s51_s, s51_flag) ]) : _s51_t0 instanceof Array && _s51_t0.length >= 1 && "regex" === _s51_t0[0] ? (s51_args = _s51_t0.slice(1), 
        [ ".new", s10_externs.use("RegExp") ].concat(s51_args)) : void 0;
    }), s10_externs.macros.put("define-macro", function(s52_form, s52_env) {
        var s52_form, s52_env, s52_otherwise, s52_op, s52_name, s52_body, s52_ds, s52_macroG, s52_macroFn, _s52_t0, _s52_t1, _s52_t2, _s52_t3;
        return _s52_t0 = s52_form, _s52_t1 = !1, _s52_t0 instanceof Array && 3 === _s52_t0.length ? (s52_op = _s52_t0[0], 
        s52_name = _s52_t0[1], s52_body = _s52_t0[2], _s52_t3 = _s52_t1 = s4_atom(s52_name) ? !0 : !1, 
        _s52_t2 = _s52_t3) : _s52_t2 = void 0, _s52_t1 ? (s52_ds = new s4_Scope(s52_env), 
        s52_ds.declare("atom", !0), s52_ds.declare("prim", !0), s52_ds.declare("formOf", !0), 
        s52_ds.declare("scopeOf", !0), s52_macroG = new Function(s52_ds.castName("atom"), s52_ds.castName("prim"), s52_ds.castName("formOf"), s52_ds.castName("scopeOf"), s4_escodegen.generate(s4_patrisika.generate([ ".return", s4_ex(s52_body, s52_ds) ], s52_ds, function(s53_form) {
            var s53_form;
            return [ ".return", s53_form ];
        }))), s52_macroFn = s52_macroG(s4_wrapForSyntacticClosure(s4_atom), s4_wrapForSyntacticClosure(s4_prim), function(s54_x) {
            var s54_x;
            return s54_x[1];
        }, function(s55_x) {
            var s55_x;
            return s55_x[2];
        }), s52_env.macros.put(s52_name, function(s56_c, s56_e) {
            var s56_c, s56_e, s56_result;
            return s56_result = s52_macroFn(s56_c, s56_e), s4_ex(s56_result, new s4_Scope(s52_env));
        }), [ ".unit" ]) : (s52_otherwise = _s52_t0, [ ".unit" ]);
    }), s10_externs.macros.put("macro-match", function(s57_form, s57_env) {
        var s57_form, s57_env, s57_otherwise, s57_c, s57_e, s57_patterns, s57_t, s57_tx, s57_tw, _s57_t0;
        return _s57_t0 = s57_form, _s57_t0 instanceof Array && _s57_t0.length >= 3 && "macro-match" === _s57_t0[0] ? (s57_c = _s57_t0[1], 
        s57_e = _s57_t0[2], s57_patterns = _s57_t0.slice(3), s57_t = s57_env.newt(), s57_tx = s57_env.newt(), 
        s57_tw = s57_env.newt(), [ ".begin", [ ".set", s57_t, s57_e ], [ ".set", s57_tw, [ ".lambda", [ s57_tx ], [ ".return", [ ".list", [ ".quote", ".syntactic-closure" ], s57_tx, s57_t ] ] ] ], s10_externs.macros.get("match")([ "match", s57_c ].concat(s57_patterns), s57_env, s57_tw) ]) : (s57_otherwise = _s57_t0, 
        [ ".unit" ]);
    }), s10_externs.macros.get("define-macro")([ "define-macro", "syntax-rules", [ "lambda", [ "form", "env" ], [ "macro-match", "form", "env", [ [ ".quasiquote", [ "syntax-rules", [ ".sliceunquote", "patterns" ] ] ], [ ".quasiquote", [ "lambda", [ "form", "env" ], [ "macro-match", "form", "env", [ ".sliceunquote", [ [ ".", "patterns", [ ".quote", "map" ] ], "formOf" ] ] ] ] ] ] ] ] ], s10_externs), 
    s10_externs;
}, exports.Create = s4_Create;