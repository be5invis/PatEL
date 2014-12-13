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
        var s13_form, s13_env, s13_pairs, s13_args, s13_paras;
        return s13_pairs = s13_form.slice(1, -1), s13_args = s13_pairs.map(function(s14_pair) {
            var s14_pair;
            return s14_pair[0];
        }), s13_paras = s13_pairs.map(function(s15_pair) {
            var s15_pair;
            return s15_pair[1];
        }), s1_ex([ ".beta", s13_args, s13_form[s13_form.length - 1] ].concat(s13_paras), s13_env);
    }), s5_externs.macros.put("object", function(s16_form, s16_env) {
        var s16_form, s16_env, s16_pairs;
        return s16_pairs = s16_form.slice(1).map(function(s17_pair) {
            var s17_pair;
            return [ s17_pair[0], s1_ex(s17_pair[1], s16_env) ];
        }), [ ".hash" ].concat(s16_pairs);
    }), s5_externs.macros.put("piecewise", function(s18_form, s18_env) {
        var s18_form, s18_env, s18_pairs, s18_f, s18_j, _s18_t0;
        if (_s18_t0 = s18_form, _s18_t0 instanceof Array && _s18_t0.length >= 1 && "piecewise" === _s18_t0[0]) {
            for (s18_pairs = _s18_t0.slice(1), s18_f = [ ".unit" ], s18_j = s18_pairs.length - 1; s18_j >= 0; ) s18_f = [ ".if", s1_ex(s18_pairs[s18_j][0], s18_env), s1_ex(s18_pairs[s18_j][1], s18_env), s18_f ], 
            s18_j -= 1;
            return s18_f;
        }
        return void 0;
    }), s5_AssignWithMod = function(s19_left, s19_right, s19_mod, s19_env, s19_locallyQ) {
        var s19_left, s19_right, s19_mod, s19_env, s19_locallyQ, s19_any, s19_callee, s19_paras, s19_items, s19_a, _s19_t0;
        return _s19_t0 = s19_left, _s19_t0 instanceof Array && 2 === _s19_t0.length && "local" === _s19_t0[0] ? (s19_a = _s19_t0[1], 
        s5_AssignWithMod(s19_a, s19_left, s19_right, s19_mod, s19_env, !0)) : _s19_t0 instanceof Array && 2 === _s19_t0.length && ".local" === _s19_t0[0] ? (s19_a = _s19_t0[1], 
        s5_AssignWithMod(s19_a, s19_left, s19_right, s19_mod, s19_env, !0)) : _s19_t0 instanceof Array && _s19_t0.length >= 1 && ".list" === _s19_t0[0] ? (s19_items = _s19_t0.slice(1), 
        s5_Assign(s19_left, [ s19_mod, s19_right ], s19_env, s19_locallyQ)) : _s19_t0 instanceof Array && _s19_t0.length >= 1 && ".hash" === _s19_t0[0] ? (s19_items = _s19_t0.slice(1), 
        s5_Assign(s19_left, [ s19_mod, s19_right ], s19_env, s19_locallyQ)) : _s19_t0 instanceof Array && _s19_t0.length >= 1 ? (s19_callee = _s19_t0[0], 
        s19_paras = _s19_t0.slice(1), s1_prim(s19_callee) ? [ ".set", s1_ex(s19_left, s19_env), s1_ex([ s19_mod, s19_right ], s19_env) ] : s1_atom(s19_callee) && s19_locallyQ ? [ ".set", s1_ex([ ".local", s19_callee ], s19_env), s1_ex([ s19_mod, [ ".lambda", [].concat(s19_paras), s19_right ] ], s19_env) ] : [ ".set", s1_ex(s19_callee, s19_env), s1_ex([ s19_mod, [ ".lambda", [].concat(s19_paras), s19_right ] ], s19_env) ]) : (s19_any = _s19_t0, 
        s5_Assign(s1_ex, s19_left, [ s19_mod, s19_right ], s19_env, s19_locallyQ));
    }, s5_Assign = function(s20_left, s20_right, s20_env, s20_locallyQ) {
        var s20_left, s20_right, s20_env, s20_locallyQ, s20_any, s20_callee, s20_paras, s20_items, s20_t, s20_assignments, s20_j, s20_a, s20_id, s20_SyntaxError, _s20_t0;
        if (_s20_t0 = s20_left, s20_id = _s20_t0, s1_atom(s20_id)) return s20_locallyQ ? [ ".set", s1_ex([ ".local", s20_id ], s20_env), s1_ex(s20_right, s20_env) ] : [ ".set", s1_ex(s20_left, s20_env), s1_ex(s20_right, s20_env) ];
        if (_s20_t0 instanceof Array && 2 === _s20_t0.length && "local" === _s20_t0[0]) return s20_a = _s20_t0[1], 
        s5_Assign(s20_a, s20_right, s20_env, !0);
        if (_s20_t0 instanceof Array && 2 === _s20_t0.length && ".local" === _s20_t0[0]) return s20_a = _s20_t0[1], 
        s5_Assign(s20_a, s20_right, s20_env, !0);
        if (_s20_t0 instanceof Array && _s20_t0.length >= 1 && ".list" === _s20_t0[0]) {
            for (s20_items = _s20_t0.slice(1), s20_t = s20_env.newt(), s20_assignments = [ ".begin", [ ".set", s20_t, s1_ex(s20_right, s20_env) ] ], 
            s20_j = 0; s20_j < s20_items.length; ) s20_assignments.push(s5_Assign(s20_items[s20_j], [ ".", s20_t, [ ".quote", s20_j ] ], s20_env, s20_locallyQ)), 
            s20_j += 1;
            return s20_assignments.push(s20_t), s20_assignments;
        }
        if (_s20_t0 instanceof Array && _s20_t0.length >= 1 && ".hash" === _s20_t0[0]) {
            for (s20_items = _s20_t0.slice(1), s20_t = s20_env.newt(), s20_assignments = [ ".begin", [ ".set", s20_t, s1_ex(s20_right, s20_env) ] ], 
            s20_j = 0; s20_j < s20_items.length; ) s20_assignments.push(s5_Assign(s20_items[s20_j][1], [ ".", s20_t, [ ".quote", s20_items[s20_j][0] ] ], s20_env, s20_locallyQ)), 
            s20_j += 1;
            return s20_assignments.push(s20_t), s20_assignments;
        }
        if (_s20_t0 instanceof Array && _s20_t0.length >= 1) return s20_callee = _s20_t0[0], 
        s20_paras = _s20_t0.slice(1), s1_prim(s20_callee) ? [ ".set", s1_ex(s20_left, s20_env), s1_ex(s20_right, s20_env) ] : s1_atom(s20_callee) && s20_locallyQ ? [ ".set", s1_ex([ ".local", s20_callee ], s20_env), s1_ex([ ".lambda", [].concat(s20_paras), s20_right ], s20_env) ] : [ ".set", s1_ex(s20_callee, s20_env), s1_ex([ ".lambda", [].concat(s20_paras), s20_right ], s20_env) ];
        throw s20_any = _s20_t0, new s20_SyntaxError("Invalid Assignment");
    }, s5_externs.macros.put("define", function(s21_form, s21_env) {
        var s21_form, s21_env, s21_any, s21_op, s21_left, s21_right, s21_modifer, s21_SyntaxError, _s21_t0, _s21_t1, _s21_t4, _s21_t5;
        if (_s21_t0 = s21_form, _s21_t0 instanceof Array && 4 === _s21_t0.length) return s21_op = _s21_t0[0], 
        s21_modifer = _s21_t0[1], s21_left = _s21_t0[2], s21_right = _s21_t0[3], s5_AssignWithMod(s21_left, s21_right, s21_modifer, s21_env, !0);
        if (_s21_t0 instanceof Array && 3 === _s21_t0.length) return s21_op = _s21_t0[0], 
        s21_left = _s21_t0[1], s21_right = _s21_t0[2], s5_Assign(s21_left, s21_right, s21_env, !0);
        if (_s21_t1 = !1, _s21_t0 instanceof Array && 2 === _s21_t0.length ? (s21_op = _s21_t0[0], 
        s21_left = _s21_t0[1], _s21_t5 = _s21_t1 = s1_atom(s21_left) ? !0 : !1, _s21_t4 = _s21_t5) : _s21_t4 = void 0, 
        _s21_t1) return [ ".local", s21_left ];
        throw s21_any = _s21_t0, new s21_SyntaxError("Invalid Assignment");
    }), s5_externs.macros.put("local", s5_externs.macros.get("define")), s5_externs.macros.put("set", function(s22_form, s22_env) {
        var s22_form, s22_env, s22_any, s22_op, s22_left, s22_right, s22_SyntaxError, _s22_t0;
        if (_s22_t0 = s22_form, _s22_t0 instanceof Array && 3 === _s22_t0.length) return s22_op = _s22_t0[0], 
        s22_left = _s22_t0[1], s22_right = _s22_t0[2], s5_Assign(s22_left, s22_right, s22_env, !1);
        throw s22_any = _s22_t0, new s22_SyntaxError("Invalid Assignment");
    }), s5_externs.macros.put("inc", function(s23_form, s23_env) {
        var s23_form, s23_env, s23_op, s23_id, s23_shift, _s23_t0;
        return _s23_t0 = s23_form, _s23_t0 instanceof Array && 2 === _s23_t0.length ? (s23_op = _s23_t0[0], 
        s23_id = _s23_t0[1], s5_Assign(s23_id, [ "+", s23_id, [ ".quote", 1 ] ], s23_env, !1)) : _s23_t0 instanceof Array && 3 === _s23_t0.length ? (s23_op = _s23_t0[0], 
        s23_id = _s23_t0[1], s23_shift = _s23_t0[2], s5_Assign(s23_id, [ "+", s23_id, s23_shift ], s23_env, !1)) : _s23_t0 instanceof Array && 4 === _s23_t0.length && "by" === _s23_t0[2] ? (s23_op = _s23_t0[0], 
        s23_id = _s23_t0[1], s23_shift = _s23_t0[3], s5_Assign(s23_id, [ "+", s23_id, s23_shift ], s23_env, !1)) : void 0;
    }), s5_externs.macros.put("dec", function(s24_form, s24_env) {
        var s24_form, s24_env, s24_op, s24_id, s24_shift, _s24_t0;
        return _s24_t0 = s24_form, _s24_t0 instanceof Array && 2 === _s24_t0.length ? (s24_op = _s24_t0[0], 
        s24_id = _s24_t0[1], s5_Assign(s24_id, [ "-", s24_id, [ ".quote", 1 ] ], s24_env, !1)) : _s24_t0 instanceof Array && 3 === _s24_t0.length ? (s24_op = _s24_t0[0], 
        s24_id = _s24_t0[1], s24_shift = _s24_t0[2], s5_Assign(s24_id, [ "-", s24_id, s24_shift ], s24_env, !1)) : _s24_t0 instanceof Array && 4 === _s24_t0.length && "by" === _s24_t0[2] ? (s24_op = _s24_t0[0], 
        s24_id = _s24_t0[1], s24_shift = _s24_t0[3], s5_Assign(s24_id, [ "-", s24_id, s24_shift ], s24_env, !1)) : void 0;
    }), s5_externs.macros.put("for", function(s25_form, s25_env) {
        var s25_form, s25_env, s25_init, s25_test, s25_step, s25_body, _s25_t0;
        return _s25_t0 = s25_form, _s25_t0 instanceof Array && 5 === _s25_t0.length && "for" === _s25_t0[0] ? (s25_init = _s25_t0[1], 
        s25_test = _s25_t0[2], s25_step = _s25_t0[3], s25_body = _s25_t0[4], [ ".begin", s1_ex(s25_init, s25_env), [ ".while", s1_ex(s25_test, s25_env), [ ".begin", s1_ex(s25_body, s25_env), s1_ex(s25_step, s25_env) ] ] ]) : void 0;
    }), s5_externs.macros.put("foreach", function(s26_form, s26_env) {
        var s26_form, s26_env, s26_varid, s26_range, s26_body, s26_tR, s26_t, _s26_t0;
        return _s26_t0 = s26_form, _s26_t0 instanceof Array && 4 === _s26_t0.length && "foreach" === _s26_t0[0] ? (s26_varid = _s26_t0[1], 
        s26_range = _s26_t0[2], s26_body = _s26_t0[3], s26_tR = s26_env.newt(), s26_t = s26_env.newt(), 
        [ ".begin", [ ".set", s26_tR, s1_ex(s26_range, s26_env) ], [ ".while", [ "!", [ ".", [ ".set", s26_t, [ [ ".", s26_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", s5_Assign(s1_ex, s26_varid, [ ".", s26_t, [ ".quote", "value" ] ], s26_env, !1), s1_ex(s26_body, s26_env) ] ] ]) : void 0;
    }), s5_externs.macros.put("this", [ ".thisp" ]), s5_externs.macros.put("arguments", [ ".argsp" ]), 
    s5_externs.macros.put("nothing", [ ".unit" ]), s5_externs.macros.put("undefined", [ ".unit" ]), 
    s5_externs.macros.put("null", [ ".quote", null ]), s5_externs.macros.put("true", [ ".quote", !0 ]), 
    s5_externs.macros.put("false", [ ".quote", !1 ]), s5_boole = function(s27_x) {
        var s27_x;
        return !!s27_x;
    }, s5_externs.macros.put("match", function(s28_form, s28_env) {
        var s28_form, s28_env, s28_pairs, s28_t, s28_matchQ, s28_f, s28_j, s28_any, s28_pattern, s28_guard, s28_body, s28_pat, s28_cond, s28_tc, _s28_t0, _s28_t2, _s28_t3, _s28_t4, _s28_t5, _s28_t6, _s28_t7;
        for (s28_pairs = s28_form.slice(2), s28_t = s28_env.newt(), s28_matchQ = function(s29_pattern) {
            var s29_pattern, s29_callee, s29_subpatterns, s29_ms, s29_t, s29_final, s29_whatever, s29_x, s29_id, _s29_t0;
            return _s29_t0 = s29_pattern, s29_id = _s29_t0, s1_atom(s29_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s31_x) {
                    var s31_x;
                    return [ ".set", s1_ex([ ".local", s29_pattern ], s28_env), s31_x ];
                }
            } : _s29_t0 instanceof Array && 2 === _s29_t0.length && ".quote" === _s29_t0[0] ? (s29_x = _s29_t0[1], 
            {
                whether: function(s32_x) {
                    var s32_x;
                    return [ "===", s29_pattern, s32_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s29_t0 instanceof Array && _s29_t0.length >= 1 && "." === _s29_t0[0] ? (s29_whatever = _s29_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s35_x) {
                    var s35_x;
                    return [ ".set", s1_ex(s29_pattern, s28_env), s35_x ];
                }
            }) : _s29_t0 instanceof Array && _s29_t0.length >= 1 && ".list" === _s29_t0[0] ? (s29_subpatterns = _s29_t0.slice(1), 
            s29_ms = s29_subpatterns.map(s28_matchQ), {
                whether: function(s36_x) {
                    var s36_x;
                    return [ "&&", [ ".is", s36_x, s5_externs.use("Array") ], [ "===", [ ".", s36_x, [ ".quote", "length" ] ], [ ".quote", s29_ms.length ] ] ].concat(s29_ms.map(function(s37_p, s37_j) {
                        var s37_p, s37_j;
                        return s37_p.whether([ ".", s36_x, [ ".quote", s37_j ] ]);
                    })).filter(s5_boole);
                },
                assign: function(s38_x) {
                    var s38_x;
                    return [ ".begin" ].concat(s29_ms.map(function(s39_p, s39_j) {
                        var s39_p, s39_j;
                        return s39_p.assign([ ".", s38_x, [ ".quote", s39_j ] ]);
                    }));
                }
            }) : _s29_t0 instanceof Array && _s29_t0.length >= 1 && ".conslist" === _s29_t0[0] ? (s29_subpatterns = _s29_t0.slice(1), 
            s29_ms = s29_pattern.slice(1, -1).map(s28_matchQ), s29_final = s28_matchQ(s29_pattern[s29_pattern.length - 1]), 
            {
                whether: function(s40_x) {
                    var s40_x;
                    return [ "&&", [ ".is", s40_x, s5_externs.use("Array") ], [ ">=", [ ".", s40_x, [ ".quote", "length" ] ], [ ".quote", s29_ms.length ] ] ].concat(s29_ms.map(function(s41_p, s41_j) {
                        var s41_p, s41_j;
                        return s41_p.whether([ ".", s40_x, [ ".quote", s41_j ] ]);
                    }).concat([ s29_final.whether([ [ ".", s40_x, [ ".quote", "slice" ] ], [ ".quote", s28_j ] ]) ])).filter(s5_boole);
                },
                assign: function(s42_x) {
                    var s42_x;
                    return [ ".begin" ].concat(s29_ms.map(function(s43_p, s43_j) {
                        var s43_p, s43_j;
                        return s43_p.assign([ ".", s42_x, [ ".quote", s43_j ] ]);
                    })).concat([ s29_final.assign([ [ ".", s42_x, [ ".quote", "slice" ] ], [ ".quote", s29_ms.length ] ]) ]);
                }
            }) : _s29_t0 instanceof Array && _s29_t0.length >= 1 ? (s29_callee = _s29_t0[0], 
            s29_subpatterns = _s29_t0.slice(1), s29_ms = s29_subpatterns.map(s28_matchQ), s29_t = s28_env.newt(), 
            {
                whether: function(s44_x) {
                    var s44_x;
                    return [ "&&", [ ".set", s29_t, [ [ ".", s1_ex(s29_callee, s28_env), [ ".quote", "unapply" ] ], s44_x, [ ".quote", s29_ms.length ] ] ] ].concat(s29_ms.map(function(s45_p, s45_j) {
                        var s45_p, s45_j;
                        return s45_p.whether([ ".", s29_t, [ ".quote", s45_j ] ]);
                    })).filter(s5_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s29_ms.map(function(s47_p, s47_j) {
                        var s47_p, s47_j;
                        return s47_p.assign([ ".", s29_t, [ ".quote", s47_j ] ]);
                    }));
                }
            }) : void 0;
        }, s28_f = [ ".unit" ], s28_j = s28_pairs.length - 1; s28_j >= 0; ) _s28_t0 = s28_pairs[s28_j], 
        _s28_t0 instanceof Array && 2 === _s28_t0.length ? (s28_pattern = _s28_t0[0], s28_body = _s28_t0[1], 
        s28_pat = s28_matchQ(s28_pattern), s28_cond = s28_pat.whether(s28_t), s28_cond ? _s28_t3 = [ ".if", s28_cond, [ ".begin", s28_pat.assign(s28_t), s1_ex(s28_body, s28_env) ], s28_f ] : (_s28_t4 = [ ".begin", s28_pat.assign(s28_t), s1_ex(s28_body, s28_env) ], 
        _s28_t3 = _s28_t4), _s28_t2 = _s28_t3) : (_s28_t0 instanceof Array && 3 === _s28_t0.length ? (s28_pattern = _s28_t0[0], 
        s28_guard = _s28_t0[1], s28_body = _s28_t0[2], s28_pat = s28_matchQ(s28_pattern), 
        s28_cond = s28_pat.whether(s28_t), s28_cond ? (s28_tc = s28_env.newt(), _s28_t6 = [ ".begin", [ ".set", s28_tc, [ ".quote", !1 ] ], [ ".if", s28_cond, [ ".begin", s28_pat.assign(s28_t), [ ".if", s1_ex(s28_guard, s28_env), [ ".set", s28_tc, [ ".quote", !0 ] ], [ ".set", s28_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s28_tc, s1_ex(s28_body, s28_env), s28_f ] ]) : (_s28_t7 = [ ".begin", s28_pat.assign(s28_t), [ ".if", s1_ex(s28_guard, s28_env), s1_ex(s28_body, s28_env), s28_f ] ], 
        _s28_t6 = _s28_t7), _s28_t5 = _s28_t6) : (s28_any = _s28_t0, _s28_t5 = s28_f), _s28_t2 = _s28_t5), 
        s28_f = _s28_t2, s28_j -= 1;
        return [ ".begin", [ ".set", s28_t, s1_ex(s28_form[1], s28_env) ], s28_f ];
    }), s5_externs.macros.put("regex", function(s48_form) {
        var s48_form, s48_args, s48_s, s48_flag, _s48_t0;
        return _s48_t0 = s48_form, _s48_t0 instanceof Array && 2 === _s48_t0.length && "regex" === _s48_t0[0] && _s48_t0[1] instanceof Array && 2 === _s48_t0[1].length && ".quote" === _s48_t0[1][0] ? (s48_s = _s48_t0[1][1], 
        [ ".quote", new RegExp(s48_s) ]) : _s48_t0 instanceof Array && 3 === _s48_t0.length && "regex" === _s48_t0[0] && _s48_t0[1] instanceof Array && 2 === _s48_t0[1].length && ".quote" === _s48_t0[1][0] && _s48_t0[2] instanceof Array && 2 === _s48_t0[2].length && ".quote" === _s48_t0[2][0] ? (s48_s = _s48_t0[1][1], 
        s48_flag = _s48_t0[2][1], [ ".quote", new RegExp(s48_s, s48_flag) ]) : _s48_t0 instanceof Array && _s48_t0.length >= 1 && "regex" === _s48_t0[0] ? (s48_args = _s48_t0.slice(1), 
        [ ".new", s5_externs.use("RegExp") ].concat(s48_args)) : void 0;
    }), s5_externs.macros.put("with-semantics", function(s49_form, s49_env) {
        var s49_form, s49_env, s49_body, s49_derived, s49_j, s49_macroBodyScope, s49_macroName, s49_macroBody, s49_bodyCode, s49_macroFn;
        for (s49_body = s49_form[s49_form.length - 1], s49_derived = new s1_Scope(s49_env), 
        s49_j = 1; s49_j < s49_form.length - 1; ) s49_macroBodyScope = new s1_Scope(s1_Create()), 
        s49_macroBodyScope.declare("Assign", !0), s49_macroBodyScope.declare("externalMacros", !0), 
        s49_macroBodyScope.declare("atom", !0), s49_macroBodyScope.declare("prim", !0), 
        s49_macroBodyScope.declare("top", !0), s49_macroName = s49_form[s49_j][0], s49_macroBody = s49_form[s49_j][1], 
        s49_bodyCode = s1_escodegen.generate(s1_patrisika.generate([ ".return", s1_ex(s49_macroBody, s49_macroBodyScope) ], s49_macroBodyScope, function(s50_form) {
            var s50_form;
            return [ ".return", s50_form ];
        })), s49_macroFn = new Function(s49_macroBodyScope.castName("Assign"), s49_macroBodyScope.castName("externalMacros"), s49_macroBodyScope.castName("atom"), s49_macroBodyScope.castName("prim"), s49_macroBodyScope.castName("top"), s49_bodyCode), 
        s49_derived.macros.put(s49_macroName, s49_macroFn(s5_Assign, s49_env.macros, s1_atom, s1_prim, s5_externs)), 
        s49_j += 1;
        return s1_ex(s49_body, s49_derived);
    }), s5_externs;
}, exports.Create = s1_Create;