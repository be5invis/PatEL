var s1_patrisika, s1_atom, s1_prim, s1_Scope, s1_escodegen, s1_util, s1_ex, s1_FormInvalidError, s1_Create, _s1_t0, _s1_t1, _s1_t2, _s1_t3;

s1_patrisika = require("patrisika"), s1_atom = function(s2_x) {
    var s2_x;
    return "string" == typeof s2_x;
}, s1_prim = function(s3_x) {
    var s3_x;
    return s1_atom(s3_x) && "&" !== s3_x && "&!" !== s3_x && ("." === s3_x[0] || /^\W+/.test(s3_x));
}, s1_Scope = require("patrisika").Scope, s1_escodegen = require("escodegen"), s1_util = require("util"), 
s1_ex = require("./ex").ex, s1_FormInvalidError = function(s4_form, s4_reason) {
    var s4_form, s4_reason, _s4_t0, _s4_t1;
    return _s4_t0 = this, _s4_t0.reason = s4_reason, _s4_t0.message = s4_reason, _s4_t0.relatedForm = s4_form, 
    s4_form && s4_form.begins >= 0 && s4_form.ends >= 0 ? (_s4_t0.begins = s4_form.begins, 
    _s4_t0.ends = s4_form.ends, _s4_t1 = _s4_t0.message = _s4_t0.message + ("\nAround (" + _s4_t0.begins + " -- " + _s4_t0.ends + ")")) : _s4_t1 = void 0, 
    null;
}, s1_FormInvalidError.prototype = Object.create(Error.prototype), s1_Create = function() {
    var s5_externs, s5_operatorRename, s5_reportInvalid, s5_AssignWithMod, s5_Assign, s5_boole;
    return s5_externs = s1_patrisika.DefaultExterns(), s5_externs.castName = function(s6_name) {
        var s6_name;
        return s6_name;
    }, s5_externs.declare("require"), s5_externs.declare("exports"), s5_externs.declare("process"), 
    s5_externs.declare("module"), s5_externs.declare("Error"), s5_operatorRename = function(s7_op) {
        var s7_op;
        return function(s8_form, s8_env) {
            var s8_form, s8_env;
            return s1_ex([ s7_op ].concat(s8_form.slice(1)), s8_env);
        };
    }, s5_reportInvalid = function(s9_form, s9_reason) {
        var s9_form, s9_reason;
        throw new s1_FormInvalidError(s9_form, s9_reason);
    }, s5_externs.macros.put("begin", s5_operatorRename(".begin")), s5_externs.macros.put("then", s5_operatorRename(".begin")), 
    s5_externs.macros.put("else", s5_operatorRename(".begin")), s5_externs.macros.put("while", s5_operatorRename(".while")), 
    s5_externs.macros.put("try", s5_operatorRename(".try")), s5_externs.macros.put("is", s5_operatorRename(".is")), 
    s5_externs.macros.put("<@", s5_operatorRename(".is")), s5_externs.macros.put("new", s5_operatorRename(".new")), 
    s5_externs.macros.put("this", s5_operatorRename(".thisp")), s5_externs.macros.put("arguments", s5_operatorRename(".argsp")), 
    s5_externs.macros.put("and", s5_operatorRename("&&")), s5_externs.macros.put("or", s5_operatorRename("||")), 
    s5_externs.macros.put("not", s5_operatorRename("!")), s5_externs.macros.put("return", s5_operatorRename(".return")), 
    s5_externs.macros.put("yield", s5_operatorRename(".yield")), s5_externs.macros.put("throw", s5_operatorRename(".throw")), 
    s5_externs.macros.put("list", s5_operatorRename(".list")), s5_externs.macros.put("typeof", s5_operatorRename(".typeof")), 
    s5_externs.macros.put("lambda", function(s10_form, s10_env) {
        var s10_form, s10_env, s10_otherwise, s10_car, s10_body, s10_parameters, _s10_t0;
        return _s10_t0 = s10_form, _s10_t0 instanceof Array && 3 === _s10_t0.length ? (s10_car = _s10_t0[0], 
        s10_parameters = _s10_t0[1], s10_body = _s10_t0[2], s1_ex([ ".lambda", s10_parameters, s10_body ], s10_env)) : _s10_t0 instanceof Array && 2 === _s10_t0.length ? (s10_car = _s10_t0[0], 
        s10_body = _s10_t0[1], s1_ex([ ".lambda", [], s10_body ], s10_env)) : _s10_t0 instanceof Array && 1 === _s10_t0.length ? (s10_car = _s10_t0[0], 
        s1_ex([ ".lambda", [], [ ".unit" ] ], s10_body)) : (s10_otherwise = _s10_t0, s5_reportInvalid(s10_otherwise, "Invalid Lambda Formation"));
    }), s5_externs.macros.put("function", s5_externs.macros.get("lambda")), s5_externs.macros.put("if", function(s11_form, s11_env) {
        var s11_form, s11_env, s11_test, s11_consequents, s11_alternates, s11_consequent, s11_alternate, _s11_t0;
        return _s11_t0 = s11_form, _s11_t0 instanceof Array && 3 === _s11_t0.length && "if" === _s11_t0[0] ? (s11_test = _s11_t0[1], 
        s11_consequent = _s11_t0[2], s1_ex([ ".if", s11_test, s11_consequent ], s11_env)) : _s11_t0 instanceof Array && 4 === _s11_t0.length && "if" === _s11_t0[0] ? (s11_test = _s11_t0[1], 
        s11_consequent = _s11_t0[2], s11_alternate = _s11_t0[3], s1_ex([ ".if", s11_test, s11_consequent, s11_alternate ], s11_env)) : _s11_t0 instanceof Array && 3 === _s11_t0.length && "if" === _s11_t0[0] && _s11_t0[2] instanceof Array && _s11_t0[2].length >= 1 && "then" === _s11_t0[2][0] ? (s11_test = _s11_t0[1], 
        s11_consequents = _s11_t0[2].slice(1), s1_ex([ ".if", s11_test, [ ".begin" ].concat(s11_consequents) ], s11_env)) : _s11_t0 instanceof Array && 4 === _s11_t0.length && "if" === _s11_t0[0] && _s11_t0[2] instanceof Array && _s11_t0[2].length >= 1 && "then" === _s11_t0[2][0] && _s11_t0[3] instanceof Array && _s11_t0[3].length >= 1 && "else" === _s11_t0[3][0] ? (s11_test = _s11_t0[1], 
        s11_consequents = _s11_t0[2].slice(1), s11_alternates = _s11_t0[3].slice(1), s1_ex([ ".if", s11_test, [ ".begin" ].concat(s11_consequents), [ ".begin" ].concat(s11_alternates) ], s11_env)) : void 0;
    }), s5_externs.macros.put(".conslist", function(s12_form, s12_env) {
        var s12_form, s12_env;
        return [ [ ".", s1_ex([ ".list" ].concat(s12_form.slice(1, -1)), s12_env), [ ".quote", "concat" ] ], s1_ex(s12_form[s12_form.length - 1], s12_env) ];
    }), s5_externs.macros.put("let", function(s13_form, s13_env) {
        var s13_form, s13_env, s13_pairs, s13_args, s13_paras, s13_j, s13_arg, s13_param, s13_useless, _s13_t0, _s13_t1, _s13_t2, _s13_t3;
        for (s13_pairs = s13_form.slice(1, -1), s13_args = [], s13_paras = [], s13_j = 0; s13_j < s13_pairs.length; s13_j += 1) _s13_t0 = s13_pairs[s13_j], 
        _s13_t0 instanceof Array && _s13_t0.length >= 2 ? (s13_arg = _s13_t0[0], s13_param = _s13_t0[1], 
        s13_useless = _s13_t0.slice(2), s13_args.push(s13_arg), s13_paras.push(s13_param)) : _s13_t0 instanceof Array && 2 === _s13_t0.length ? (s13_arg = _s13_t0[0], 
        s13_param = _s13_t0[1], s13_args.push(s13_arg), s13_paras.push(s13_param)) : (_s13_t1 = !1, 
        _s13_t0 instanceof Array && 1 === _s13_t0.length ? (s13_arg = _s13_t0[0], _s13_t3 = _s13_t1 = s1_atom(s13_arg) ? !0 : !1, 
        _s13_t2 = _s13_t3) : _s13_t2 = void 0, _s13_t1 && (s13_args.push(s13_arg), s13_paras.push(s13_env.use(s13_arg))));
        return s1_ex([ ".beta", s13_args, s13_form[s13_form.length - 1] ].concat(s13_paras), s13_env);
    }), s5_externs.macros.put("object", function(s14_form, s14_env) {
        var s14_form, s14_env, s14_pairs;
        return s14_pairs = s14_form.slice(1).map(function(s15_pair) {
            var s15_pair, s15_property, s15_value, s15_useless, _s15_t0, _s15_t1, _s15_t4, _s15_t5;
            return _s15_t0 = s15_pair, _s15_t0 instanceof Array && _s15_t0.length >= 2 ? (s15_property = _s15_t0[0], 
            s15_value = _s15_t0[1], s15_useless = _s15_t0.slice(2), [ s15_property, s1_ex(s15_value, s14_env) ]) : _s15_t0 instanceof Array && 2 === _s15_t0.length ? (s15_property = _s15_t0[0], 
            s15_value = _s15_t0[1], [ s15_property, s1_ex(s15_value, s14_env) ]) : (_s15_t1 = !1, 
            _s15_t0 instanceof Array && 1 === _s15_t0.length ? (s15_property = _s15_t0[0], _s15_t5 = _s15_t1 = s1_atom(s15_property) ? !0 : !1, 
            _s15_t4 = _s15_t5) : _s15_t4 = void 0, _s15_t1 ? [ s15_property, s14_env.use(s15_property) ] : void 0);
        }), [ ".hash" ].concat(s14_pairs);
    }), s5_externs.macros.put("piecewise", function(s16_form, s16_env) {
        var s16_form, s16_env, s16_pairs, s16_f, s16_j, _s16_t0;
        if (_s16_t0 = s16_form, _s16_t0 instanceof Array && _s16_t0.length >= 1 && "piecewise" === _s16_t0[0]) {
            for (s16_pairs = _s16_t0.slice(1), s16_f = [ ".unit" ], s16_j = s16_pairs.length - 1; s16_j >= 0; s16_j -= 1) s16_f = [ ".if", s1_ex(s16_pairs[s16_j][0], s16_env), s1_ex(s16_pairs[s16_j][1], s16_env), s16_f ];
            return s16_f;
        }
        return void 0;
    }), s5_AssignWithMod = function(s17_left, s17_right, s17_mod, s17_env, s17_locallyQ) {
        var s17_left, s17_right, s17_mod, s17_env, s17_locallyQ, s17_any, s17_callee, s17_paras, s17_items, s17_a, _s17_t0;
        return _s17_t0 = s17_left, _s17_t0 instanceof Array && 2 === _s17_t0.length && "local" === _s17_t0[0] ? (s17_a = _s17_t0[1], 
        s5_AssignWithMod(s17_a, s17_left, s17_right, s17_mod, s17_env, !0)) : _s17_t0 instanceof Array && 2 === _s17_t0.length && ".local" === _s17_t0[0] ? (s17_a = _s17_t0[1], 
        s5_AssignWithMod(s17_a, s17_left, s17_right, s17_mod, s17_env, !0)) : _s17_t0 instanceof Array && _s17_t0.length >= 1 && ".list" === _s17_t0[0] ? (s17_items = _s17_t0.slice(1), 
        s5_Assign(s17_left, [ s17_mod, s17_right ], s17_env, s17_locallyQ)) : _s17_t0 instanceof Array && _s17_t0.length >= 1 && ".hash" === _s17_t0[0] ? (s17_items = _s17_t0.slice(1), 
        s5_Assign(s17_left, [ s17_mod, s17_right ], s17_env, s17_locallyQ)) : _s17_t0 instanceof Array && _s17_t0.length >= 1 ? (s17_callee = _s17_t0[0], 
        s17_paras = _s17_t0.slice(1), s1_prim(s17_callee) ? [ ".set", s1_ex(s17_left, s17_env), s1_ex([ s17_mod, s17_right ], s17_env) ] : s1_atom(s17_callee) && s17_locallyQ ? [ ".set", s1_ex([ ".local", s17_callee ], s17_env), s1_ex([ s17_mod, [ ".lambda", [].concat(s17_paras), s17_right ] ], s17_env) ] : [ ".set", s1_ex(s17_callee, s17_env), s1_ex([ s17_mod, [ ".lambda", [].concat(s17_paras), s17_right ] ], s17_env) ]) : (s17_any = _s17_t0, 
        s5_Assign(s1_ex, s17_left, [ s17_mod, s17_right ], s17_env, s17_locallyQ));
    }, s5_Assign = function(s18_left, s18_right, s18_env, s18_locallyQ) {
        var s18_left, s18_right, s18_env, s18_locallyQ, s18_any, s18_callee, s18_paras, s18_items, s18_t, s18_assignments, s18_j, s18_a, s18_id, _s18_t0;
        if (_s18_t0 = s18_left, s18_id = _s18_t0, s1_atom(s18_id)) return s18_locallyQ ? [ ".set", s1_ex([ ".local", s18_id ], s18_env), s1_ex(s18_right, s18_env) ] : [ ".set", s1_ex(s18_left, s18_env), s1_ex(s18_right, s18_env) ];
        if (_s18_t0 instanceof Array && 2 === _s18_t0.length && "local" === _s18_t0[0]) return s18_a = _s18_t0[1], 
        s5_Assign(s18_a, s18_right, s18_env, !0);
        if (_s18_t0 instanceof Array && 2 === _s18_t0.length && ".local" === _s18_t0[0]) return s18_a = _s18_t0[1], 
        s5_Assign(s18_a, s18_right, s18_env, !0);
        if (_s18_t0 instanceof Array && _s18_t0.length >= 1 && ".list" === _s18_t0[0]) {
            for (s18_items = _s18_t0.slice(1), s18_t = s18_env.newt(), s18_assignments = [ ".begin", [ ".set", s18_t, s1_ex(s18_right, s18_env) ] ], 
            s18_j = 0; s18_j < s18_items.length; s18_j += 1) s18_assignments.push(s5_Assign(s18_items[s18_j], [ ".", s18_t, [ ".quote", s18_j ] ], s18_env, s18_locallyQ));
            return s18_assignments.push(s18_t), s18_assignments;
        }
        if (_s18_t0 instanceof Array && _s18_t0.length >= 1 && ".hash" === _s18_t0[0]) {
            for (s18_items = _s18_t0.slice(1), s18_t = s18_env.newt(), s18_assignments = [ ".begin", [ ".set", s18_t, s1_ex(s18_right, s18_env) ] ], 
            s18_j = 0; s18_j < s18_items.length; s18_j += 1) s18_assignments.push(s5_Assign(s18_items[s18_j][1], [ ".", s18_t, [ ".quote", s18_items[s18_j][0] ] ], s18_env, s18_locallyQ));
            return s18_assignments.push(s18_t), s18_assignments;
        }
        if (_s18_t0 instanceof Array && _s18_t0.length >= 1) return s18_callee = _s18_t0[0], 
        s18_paras = _s18_t0.slice(1), s1_prim(s18_callee) ? [ ".set", s1_ex(s18_left, s18_env), s1_ex(s18_right, s18_env) ] : s1_atom(s18_callee) && s18_locallyQ ? [ ".set", s1_ex([ ".local", s18_callee ], s18_env), s1_ex([ ".lambda", [].concat(s18_paras), s18_right ], s18_env) ] : [ ".set", s1_ex(s18_callee, s18_env), s1_ex([ ".lambda", [].concat(s18_paras), s18_right ], s18_env) ];
        throw s18_any = _s18_t0, new s1_FormInvalidError(s18_left, "Invalid Assignment Left-hand Side");
    }, s5_externs.macros.put("define", function(s19_form, s19_env) {
        var s19_form, s19_env, s19_any, s19_op, s19_left, s19_right, s19_modifer, _s19_t0, _s19_t1, _s19_t4, _s19_t5;
        if (_s19_t0 = s19_form, _s19_t0 instanceof Array && 4 === _s19_t0.length) return s19_op = _s19_t0[0], 
        s19_modifer = _s19_t0[1], s19_left = _s19_t0[2], s19_right = _s19_t0[3], s5_AssignWithMod(s19_left, s19_right, s19_modifer, s19_env, !0);
        if (_s19_t0 instanceof Array && 3 === _s19_t0.length) return s19_op = _s19_t0[0], 
        s19_left = _s19_t0[1], s19_right = _s19_t0[2], s5_Assign(s19_left, s19_right, s19_env, !0);
        if (_s19_t1 = !1, _s19_t0 instanceof Array && 2 === _s19_t0.length ? (s19_op = _s19_t0[0], 
        s19_left = _s19_t0[1], _s19_t5 = _s19_t1 = s1_atom(s19_left) ? !0 : !1, _s19_t4 = _s19_t5) : _s19_t4 = void 0, 
        _s19_t1) return [ ".local", s19_left ];
        throw s19_any = _s19_t0, new s1_FormInvalidError(s19_any, "Invalid Assignment");
    }), s5_externs.macros.put("local", s5_externs.macros.get("define")), s5_externs.macros.put("set", function(s20_form, s20_env) {
        var s20_form, s20_env, s20_any, s20_op, s20_left, s20_right, _s20_t0;
        if (_s20_t0 = s20_form, _s20_t0 instanceof Array && 3 === _s20_t0.length) return s20_op = _s20_t0[0], 
        s20_left = _s20_t0[1], s20_right = _s20_t0[2], s5_Assign(s20_left, s20_right, s20_env, !1);
        throw s20_any = _s20_t0, new s1_FormInvalidError(s20_any, "Invalid Assignment");
    }), s5_externs.macros.put("inc", function(s21_form, s21_env) {
        var s21_form, s21_env, s21_op, s21_id, s21_shift, _s21_t0;
        return _s21_t0 = s21_form, _s21_t0 instanceof Array && 2 === _s21_t0.length ? (s21_op = _s21_t0[0], 
        s21_id = _s21_t0[1], s5_Assign(s21_id, [ "+", s21_id, [ ".quote", 1 ] ], s21_env, !1)) : _s21_t0 instanceof Array && 3 === _s21_t0.length ? (s21_op = _s21_t0[0], 
        s21_id = _s21_t0[1], s21_shift = _s21_t0[2], s5_Assign(s21_id, [ "+", s21_id, s21_shift ], s21_env, !1)) : _s21_t0 instanceof Array && 4 === _s21_t0.length && "by" === _s21_t0[2] ? (s21_op = _s21_t0[0], 
        s21_id = _s21_t0[1], s21_shift = _s21_t0[3], s5_Assign(s21_id, [ "+", s21_id, s21_shift ], s21_env, !1)) : void 0;
    }), s5_externs.macros.put("dec", function(s22_form, s22_env) {
        var s22_form, s22_env, s22_op, s22_id, s22_shift, _s22_t0;
        return _s22_t0 = s22_form, _s22_t0 instanceof Array && 2 === _s22_t0.length ? (s22_op = _s22_t0[0], 
        s22_id = _s22_t0[1], s5_Assign(s22_id, [ "-", s22_id, [ ".quote", 1 ] ], s22_env, !1)) : _s22_t0 instanceof Array && 3 === _s22_t0.length ? (s22_op = _s22_t0[0], 
        s22_id = _s22_t0[1], s22_shift = _s22_t0[2], s5_Assign(s22_id, [ "-", s22_id, s22_shift ], s22_env, !1)) : _s22_t0 instanceof Array && 4 === _s22_t0.length && "by" === _s22_t0[2] ? (s22_op = _s22_t0[0], 
        s22_id = _s22_t0[1], s22_shift = _s22_t0[3], s5_Assign(s22_id, [ "-", s22_id, s22_shift ], s22_env, !1)) : void 0;
    }), s5_externs.macros.put("for", function(s23_form, s23_env) {
        var s23_form, s23_env, s23_init, s23_test, s23_step, s23_body, _s23_t0;
        return _s23_t0 = s23_form, _s23_t0 instanceof Array && 5 === _s23_t0.length && "for" === _s23_t0[0] ? (s23_init = _s23_t0[1], 
        s23_test = _s23_t0[2], s23_step = _s23_t0[3], s23_body = _s23_t0[4], [ ".begin", s1_ex(s23_init, s23_env), [ ".while", s1_ex(s23_test, s23_env), [ ".begin", s1_ex(s23_body, s23_env), s1_ex(s23_step, s23_env) ] ] ]) : void 0;
    }), s5_externs.macros.put("foreach", function(s24_form, s24_env) {
        var s24_form, s24_env, s24_varid, s24_range, s24_body, s24_tR, s24_t, _s24_t0;
        return _s24_t0 = s24_form, _s24_t0 instanceof Array && 4 === _s24_t0.length && "foreach" === _s24_t0[0] ? (s24_varid = _s24_t0[1], 
        s24_range = _s24_t0[2], s24_body = _s24_t0[3], s24_tR = s24_env.newt(), s24_t = s24_env.newt(), 
        [ ".begin", [ ".set", s24_tR, s1_ex(s24_range, s24_env) ], [ ".while", [ "!", [ ".", [ ".set", s24_t, [ [ ".", s24_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", s5_Assign(s24_varid, [ ".", s24_t, [ ".quote", "value" ] ], s24_env, !1), s1_ex(s24_body, s24_env) ] ] ]) : void 0;
    }), s5_externs.macros.put("this", [ ".thisp" ]), s5_externs.macros.put("arguments", [ ".argsp" ]), 
    s5_externs.macros.put("nothing", [ ".unit" ]), s5_externs.macros.put("undefined", [ ".unit" ]), 
    s5_externs.macros.put("null", [ ".quote", null ]), s5_externs.macros.put("true", [ ".quote", !0 ]), 
    s5_externs.macros.put("false", [ ".quote", !1 ]), s5_boole = function(s25_x) {
        var s25_x;
        return !!s25_x;
    }, s5_externs.macros.put("match", function(s26_form, s26_env) {
        var s26_form, s26_env, s26_pairs, s26_t, s26_matchQ, s26_f, s26_j, s26_any, s26_pattern, s26_guard, s26_body, s26_pat, s26_cond, s26_tc, _s26_t0, _s26_t2, _s26_t3, _s26_t4, _s26_t5, _s26_t6, _s26_t7;
        for (s26_pairs = s26_form.slice(2), s26_t = s26_env.newt(), s26_matchQ = function(s27_pattern) {
            var s27_pattern, s27_callee, s27_subpatterns, s27_ms, s27_t, s27_final, s27_whatever, s27_x, s27_id, _s27_t0;
            return _s27_t0 = s27_pattern, s27_id = _s27_t0, s1_atom(s27_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s45_x) {
                    var s45_x;
                    return [ ".set", s1_ex([ ".local", s27_pattern ], s26_env), s45_x ];
                }
            } : _s27_t0 instanceof Array && 2 === _s27_t0.length && ".quote" === _s27_t0[0] ? (s27_x = _s27_t0[1], 
            {
                whether: function(s42_x) {
                    var s42_x;
                    return [ "===", s1_ex(s27_pattern, s26_env), s42_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 && "." === _s27_t0[0] ? (s27_whatever = _s27_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s41_x) {
                    var s41_x;
                    return [ ".set", s1_ex(s27_pattern, s26_env), s41_x ];
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 && ".list" === _s27_t0[0] ? (s27_subpatterns = _s27_t0.slice(1), 
            s27_ms = s27_subpatterns.map(s26_matchQ), {
                whether: function(s36_x) {
                    var s36_x;
                    return [ "&&", [ ".is", s36_x, s5_externs.use("Array") ], [ "===", [ ".", s36_x, [ ".quote", "length" ] ], [ ".quote", s27_ms.length ] ] ].concat(s27_ms.map(function(s37_p, s37_j) {
                        var s37_p, s37_j;
                        return s37_p.whether([ ".", s36_x, [ ".quote", s37_j ] ]);
                    })).filter(s5_boole);
                },
                assign: function(s38_x) {
                    var s38_x;
                    return [ ".begin" ].concat(s27_ms.map(function(s39_p, s39_j) {
                        var s39_p, s39_j;
                        return s39_p.assign([ ".", s38_x, [ ".quote", s39_j ] ]);
                    }));
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 && ".conslist" === _s27_t0[0] ? (s27_subpatterns = _s27_t0.slice(1), 
            s27_ms = s27_pattern.slice(1, -1).map(s26_matchQ), s27_final = s26_matchQ(s27_pattern[s27_pattern.length - 1]), 
            {
                whether: function(s32_x) {
                    var s32_x;
                    return [ "&&", [ ".is", s32_x, s5_externs.use("Array") ], [ ">=", [ ".", s32_x, [ ".quote", "length" ] ], [ ".quote", s27_ms.length ] ] ].concat(s27_ms.map(function(s33_p, s33_j) {
                        var s33_p, s33_j;
                        return s33_p.whether([ ".", s32_x, [ ".quote", s33_j ] ]);
                    }).concat([ s27_final.whether([ [ ".", s32_x, [ ".quote", "slice" ] ], [ ".quote", s26_j ] ]) ])).filter(s5_boole);
                },
                assign: function(s34_x) {
                    var s34_x;
                    return [ ".begin" ].concat(s27_ms.map(function(s35_p, s35_j) {
                        var s35_p, s35_j;
                        return s35_p.assign([ ".", s34_x, [ ".quote", s35_j ] ]);
                    })).concat([ s27_final.assign([ [ ".", s34_x, [ ".quote", "slice" ] ], [ ".quote", s27_ms.length ] ]) ]);
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 ? (s27_callee = _s27_t0[0], 
            s27_subpatterns = _s27_t0.slice(1), s27_ms = s27_subpatterns.map(s26_matchQ), s27_t = s26_env.newt(), 
            {
                whether: function(s28_x) {
                    var s28_x;
                    return [ "&&", [ ".set", s27_t, [ [ ".", s1_ex(s27_callee, s26_env), [ ".quote", "unapply" ] ], s28_x, [ ".quote", s27_ms.length ] ] ] ].concat(s27_ms.map(function(s29_p, s29_j) {
                        var s29_p, s29_j;
                        return s29_p.whether([ ".", s27_t, [ ".quote", s29_j ] ]);
                    })).filter(s5_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s27_ms.map(function(s31_p, s31_j) {
                        var s31_p, s31_j;
                        return s31_p.assign([ ".", s27_t, [ ".quote", s31_j ] ]);
                    }));
                }
            }) : void 0;
        }, s26_f = [ ".unit" ], s26_j = s26_pairs.length - 1; s26_j >= 0; s26_j -= 1) _s26_t0 = s26_pairs[s26_j], 
        _s26_t0 instanceof Array && 2 === _s26_t0.length ? (s26_pattern = _s26_t0[0], s26_body = _s26_t0[1], 
        s26_pat = s26_matchQ(s26_pattern), s26_cond = s26_pat.whether(s26_t), s26_cond ? _s26_t3 = [ ".if", s26_cond, [ ".begin", s26_pat.assign(s26_t), s1_ex(s26_body, s26_env) ], s26_f ] : (_s26_t4 = [ ".begin", s26_pat.assign(s26_t), s1_ex(s26_body, s26_env) ], 
        _s26_t3 = _s26_t4), _s26_t2 = _s26_t3) : (_s26_t0 instanceof Array && 3 === _s26_t0.length ? (s26_pattern = _s26_t0[0], 
        s26_guard = _s26_t0[1], s26_body = _s26_t0[2], s26_pat = s26_matchQ(s26_pattern), 
        s26_cond = s26_pat.whether(s26_t), s26_cond ? (s26_tc = s26_env.newt(), _s26_t6 = [ ".begin", [ ".set", s26_tc, [ ".quote", !1 ] ], [ ".if", s26_cond, [ ".begin", s26_pat.assign(s26_t), [ ".if", s1_ex(s26_guard, s26_env), [ ".set", s26_tc, [ ".quote", !0 ] ], [ ".set", s26_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s26_tc, s1_ex(s26_body, s26_env), s26_f ] ]) : (_s26_t7 = [ ".begin", s26_pat.assign(s26_t), [ ".if", s1_ex(s26_guard, s26_env), s1_ex(s26_body, s26_env), s26_f ] ], 
        _s26_t6 = _s26_t7), _s26_t5 = _s26_t6) : (s26_any = _s26_t0, _s26_t5 = s26_f), _s26_t2 = _s26_t5), 
        s26_f = _s26_t2;
        return [ ".begin", [ ".set", s26_t, s1_ex(s26_form[1], s26_env) ], s26_f ];
    }), s5_externs.macros.put("regex", function(s46_form) {
        var s46_form, s46_args, s46_s, s46_flag, _s46_t0;
        return _s46_t0 = s46_form, _s46_t0 instanceof Array && 2 === _s46_t0.length && "regex" === _s46_t0[0] && _s46_t0[1] instanceof Array && 2 === _s46_t0[1].length && ".quote" === _s46_t0[1][0] ? (s46_s = _s46_t0[1][1], 
        [ ".quote", new RegExp(s46_s) ]) : _s46_t0 instanceof Array && 3 === _s46_t0.length && "regex" === _s46_t0[0] && _s46_t0[1] instanceof Array && 2 === _s46_t0[1].length && ".quote" === _s46_t0[1][0] && _s46_t0[2] instanceof Array && 2 === _s46_t0[2].length && ".quote" === _s46_t0[2][0] ? (s46_s = _s46_t0[1][1], 
        s46_flag = _s46_t0[2][1], [ ".quote", new RegExp(s46_s, s46_flag) ]) : _s46_t0 instanceof Array && _s46_t0.length >= 1 && "regex" === _s46_t0[0] ? (s46_args = _s46_t0.slice(1), 
        [ ".new", s5_externs.use("RegExp") ].concat(s46_args)) : void 0;
    }), s5_externs.macros.put("with-semantics", function(s47_form, s47_env) {
        var s47_form, s47_env, s47_body, s47_derived, s47_j, s47_macroBodyScope, s47_macroName, s47_macroBody, s47_bodyCode, s47_macroFn;
        for (s47_body = s47_form[s47_form.length - 1], s47_derived = new s1_Scope(s47_env), 
        s47_j = 1; s47_j < s47_form.length - 1; s47_j += 1) s47_macroBodyScope = new s1_Scope(s1_Create()), 
        s47_macroBodyScope.declare("evaluate", !0), s47_macroBodyScope.declare("Assign", !0), 
        s47_macroBodyScope.declare("externalMacros", !0), s47_macroBodyScope.declare("atom", !0), 
        s47_macroBodyScope.declare("prim", !0), s47_macroBodyScope.declare("top", !0), s47_macroName = s47_form[s47_j][0], 
        s47_macroBody = s47_form[s47_j][1], s47_bodyCode = s1_escodegen.generate(s1_patrisika.generate([ ".return", s1_ex(s47_macroBody, s47_macroBodyScope) ], s47_macroBodyScope, function(s48_form) {
            var s48_form;
            return [ ".return", s48_form ];
        })), s47_macroFn = new Function(s47_macroBodyScope.castName("evaluate"), s47_macroBodyScope.castName("Assign"), s47_macroBodyScope.castName("externalMacros"), s47_macroBodyScope.castName("atom"), s47_macroBodyScope.castName("prim"), s47_macroBodyScope.castName("top"), s47_bodyCode), 
        s47_derived.macros.put(s47_macroName, s47_macroFn(s1_ex, s5_Assign, s47_env.macros, s1_atom, s1_prim, s5_externs));
        return s1_ex(s47_body, s47_derived);
    }), s5_externs;
}, exports.Create = s1_Create;