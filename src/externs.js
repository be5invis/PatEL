var s1_patrisika, s1_atom, s1_prim, s1_Scope, s1_Create, _s1_t0, _s1_t1, _s1_t2;

s1_patrisika = require("patrisika"), s1_atom = function(s2_x) {
    var s2_x;
    return "string" == typeof s2_x;
}, s1_prim = function(s3_x) {
    var s3_x;
    return s1_atom(s3_x) && "&" !== s3_x && "&!" !== s3_x && ("." === s3_x[0] || /^\W+/.test(s3_x));
}, s1_Scope = require("patrisika").Scope, s1_Create = function() {
    var s4_externs, s4_operatorRename, s4_AssignWithMod, s4_Assign, s4_boole;
    return s4_externs = s1_patrisika.DefaultExterns(), s4_externs.castName = function(s5_name) {
        var s5_name;
        return s5_name;
    }, s4_externs.declare("require"), s4_externs.declare("exports"), s4_externs.declare("process"), 
    s4_externs.declare("module"), s4_externs.declare("Error"), s4_operatorRename = function(s6_op) {
        var s6_op;
        return function(s7_ex, s7_form, s7_env) {
            var s7_ex, s7_form, s7_env;
            return s7_ex([ s6_op ].concat(s7_form.slice(1)), s7_env);
        };
    }, s4_externs.macros.put("begin", s4_operatorRename(".begin")), s4_externs.macros.put("then", s4_operatorRename(".begin")), 
    s4_externs.macros.put("else", s4_operatorRename(".begin")), s4_externs.macros.put("while", s4_operatorRename(".while")), 
    s4_externs.macros.put("try", s4_operatorRename(".try")), s4_externs.macros.put("is", s4_operatorRename(".is")), 
    s4_externs.macros.put("<@", s4_operatorRename(".is")), s4_externs.macros.put("new", s4_operatorRename(".new")), 
    s4_externs.macros.put("this", s4_operatorRename(".thisp")), s4_externs.macros.put("arguments", s4_operatorRename(".argsp")), 
    s4_externs.macros.put("and", s4_operatorRename("&&")), s4_externs.macros.put("or", s4_operatorRename("||")), 
    s4_externs.macros.put("not", s4_operatorRename("!")), s4_externs.macros.put("return", s4_operatorRename(".return")), 
    s4_externs.macros.put("yield", s4_operatorRename(".yield")), s4_externs.macros.put("throw", s4_operatorRename(".throw")), 
    s4_externs.macros.put("list", s4_operatorRename(".list")), s4_externs.macros.put("typeof", s4_operatorRename(".typeof")), 
    s4_externs.macros.put("lambda", function(s8_ex, s8_form, s8_env) {
        var s8_ex, s8_form, s8_env, s8_car, s8_body, s8_parameters, _s8_t0;
        return _s8_t0 = s8_form, _s8_t0 instanceof Array && 3 === _s8_t0.length ? (s8_car = _s8_t0[0], 
        s8_parameters = _s8_t0[1], s8_body = _s8_t0[2], s8_ex([ ".lambda", s8_parameters, s8_body ], s8_env)) : _s8_t0 instanceof Array && 2 === _s8_t0.length ? (s8_car = _s8_t0[0], 
        s8_body = _s8_t0[1], s8_ex([ ".lambda", [], s8_body ], s8_env)) : _s8_t0 instanceof Array && 1 === _s8_t0.length ? (s8_car = _s8_t0[0], 
        s8_ex([ ".lambda", [], [ ".unit" ] ], s8_body)) : void 0;
    }), s4_externs.macros.put("function", s4_externs.macros.get("lambda")), s4_externs.macros.put("if", function(s9_ex, s9_form, s9_env) {
        var s9_ex, s9_form, s9_env, s9_test, s9_consequents, s9_alternates, s9_consequent, s9_alternate, _s9_t0;
        return _s9_t0 = s9_form, _s9_t0 instanceof Array && 3 === _s9_t0.length && "if" === _s9_t0[0] ? (s9_test = _s9_t0[1], 
        s9_consequent = _s9_t0[2], s9_ex([ ".if", s9_test, s9_consequent ], s9_env)) : _s9_t0 instanceof Array && 4 === _s9_t0.length && "if" === _s9_t0[0] ? (s9_test = _s9_t0[1], 
        s9_consequent = _s9_t0[2], s9_alternate = _s9_t0[3], s9_ex([ ".if", s9_test, s9_consequent, s9_alternate ], s9_env)) : _s9_t0 instanceof Array && 3 === _s9_t0.length && "if" === _s9_t0[0] && _s9_t0[2] instanceof Array && _s9_t0[2].length >= 1 && "then" === _s9_t0[2][0] ? (s9_test = _s9_t0[1], 
        s9_consequents = _s9_t0[2].slice(1), s9_ex([ ".if", s9_test, [ ".begin" ].concat(s9_consequents) ], s9_env)) : _s9_t0 instanceof Array && 4 === _s9_t0.length && "if" === _s9_t0[0] && _s9_t0[2] instanceof Array && _s9_t0[2].length >= 1 && "then" === _s9_t0[2][0] && _s9_t0[3] instanceof Array && _s9_t0[3].length >= 1 && "else" === _s9_t0[3][0] ? (s9_test = _s9_t0[1], 
        s9_consequents = _s9_t0[2].slice(1), s9_alternates = _s9_t0[3].slice(1), s9_ex([ ".if", s9_test, [ ".begin" ].concat(s9_consequents), [ ".begin" ].concat(s9_alternates) ], s9_env)) : void 0;
    }), s4_externs.macros.put(".conslist", function(s10_ex, s10_form, s10_env) {
        var s10_ex, s10_form, s10_env;
        return [ [ ".", s10_ex([ ".list" ].concat(s10_form.slice(1, -1)), s10_env), [ ".quote", "concat" ] ], s10_ex(s10_form[s10_form.length - 1], s10_env) ];
    }), s4_externs.macros.put("let", function(s11_ex, s11_form, s11_env) {
        var s11_ex, s11_form, s11_env, s11_pairs, s11_args, s11_paras;
        return s11_pairs = s11_form.slice(1, -1), s11_args = s11_pairs.map(function(s12_pair) {
            var s12_pair;
            return s12_pair[0];
        }), s11_paras = s11_pairs.map(function(s13_pair) {
            var s13_pair;
            return s13_pair[1];
        }), s11_ex([ ".beta", s11_args, s11_form[s11_form.length - 1] ].concat(s11_paras), s11_env);
    }), s4_externs.macros.put("object", function(s14_ex, s14_form, s14_env) {
        var s14_ex, s14_form, s14_env, s14_pairs;
        return s14_pairs = s14_form.slice(1).map(function(s15_pair) {
            var s15_pair;
            return [ s15_pair[0], s14_ex(s15_pair[1], s14_env) ];
        }), [ ".hash" ].concat(s14_pairs);
    }), s4_externs.macros.put("piecewise", function(s16_ex, s16_form, s16_env) {
        var s16_ex, s16_form, s16_env, s16_pairs, s16_f, s16_j, _s16_t0;
        if (_s16_t0 = s16_form, _s16_t0 instanceof Array && _s16_t0.length >= 1 && "piecewise" === _s16_t0[0]) {
            for (s16_pairs = _s16_t0.slice(1), s16_f = [ ".unit" ], s16_j = s16_pairs.length - 1; s16_j >= 0; ) s16_f = [ ".if", s16_ex(s16_pairs[s16_j][0], s16_env), s16_ex(s16_pairs[s16_j][1], s16_env), s16_f ], 
            s16_j -= 1;
            return s16_f;
        }
        return void 0;
    }), s4_AssignWithMod = function(s17_ex, s17_left, s17_right, s17_mod, s17_env, s17_locallyQ) {
        var s17_ex, s17_left, s17_right, s17_mod, s17_env, s17_locallyQ, s17_any, s17_callee, s17_paras, s17_items, s17_a, _s17_t0;
        return _s17_t0 = s17_left, _s17_t0 instanceof Array && 2 === _s17_t0.length && "local" === _s17_t0[0] ? (s17_a = _s17_t0[1], 
        s4_AssignWithMod(s17_ex, s17_a, s17_left, s17_right, s17_mod, s17_env, !0)) : _s17_t0 instanceof Array && 2 === _s17_t0.length && ".local" === _s17_t0[0] ? (s17_a = _s17_t0[1], 
        s4_AssignWithMod(s17_ex, s17_a, s17_left, s17_right, s17_mod, s17_env, !0)) : _s17_t0 instanceof Array && _s17_t0.length >= 1 && ".list" === _s17_t0[0] ? (s17_items = _s17_t0.slice(1), 
        s4_Assign(s17_ex, s17_left, [ s17_mod, s17_right ], s17_env, s17_locallyQ)) : _s17_t0 instanceof Array && _s17_t0.length >= 1 && ".hash" === _s17_t0[0] ? (s17_items = _s17_t0.slice(1), 
        s4_Assign(s17_ex, s17_left, [ s17_mod, s17_right ], s17_env, s17_locallyQ)) : _s17_t0 instanceof Array && _s17_t0.length >= 1 ? (s17_callee = _s17_t0[0], 
        s17_paras = _s17_t0.slice(1), s1_prim(s17_callee) ? [ ".set", s17_ex(s17_left, s17_env), s17_ex([ s17_mod, s17_right ], s17_env) ] : s1_atom(s17_callee) && s17_locallyQ ? [ ".set", s17_ex([ ".local", s17_callee ], s17_env), s17_ex([ s17_mod, [ ".lambda", [].concat(s17_paras), s17_right ] ], s17_env) ] : [ ".set", s17_ex(s17_callee, s17_env), s17_ex([ s17_mod, [ ".lambda", [].concat(s17_paras), s17_right ] ], s17_env) ]) : (s17_any = _s17_t0, 
        s4_Assign(s17_ex, s17_left, [ s17_mod, s17_right ], s17_env, s17_locallyQ));
    }, s4_Assign = function(s18_ex, s18_left, s18_right, s18_env, s18_locallyQ) {
        var s18_ex, s18_left, s18_right, s18_env, s18_locallyQ, s18_any, s18_callee, s18_paras, s18_items, s18_t, s18_assignments, s18_j, s18_a, s18_id, s18_SyntaxError, _s18_t0;
        if (_s18_t0 = s18_left, s18_id = _s18_t0, s1_atom(s18_id)) return s18_locallyQ ? [ ".set", s18_ex([ ".local", s18_id ], s18_env), s18_ex(s18_right, s18_env) ] : [ ".set", s18_ex(s18_left, s18_env), s18_ex(s18_right, s18_env) ];
        if (_s18_t0 instanceof Array && 2 === _s18_t0.length && "local" === _s18_t0[0]) return s18_a = _s18_t0[1], 
        s4_Assign(s18_ex, s18_a, s18_right, s18_env, !0);
        if (_s18_t0 instanceof Array && 2 === _s18_t0.length && ".local" === _s18_t0[0]) return s18_a = _s18_t0[1], 
        s4_Assign(s18_ex, s18_a, s18_right, s18_env, !0);
        if (_s18_t0 instanceof Array && _s18_t0.length >= 1 && ".list" === _s18_t0[0]) {
            for (s18_items = _s18_t0.slice(1), s18_t = s18_env.newt(), s18_assignments = [ ".begin", [ ".set", s18_t, s18_ex(s18_right, s18_env) ] ], 
            s18_j = 0; s18_j < s18_items.length; ) s18_assignments.push(s4_Assign(s18_ex, s18_items[s18_j], [ ".", s18_t, [ ".quote", s18_j ] ], s18_env, s18_locallyQ)), 
            s18_j += 1;
            return s18_assignments.push(s18_t), s18_assignments;
        }
        if (_s18_t0 instanceof Array && _s18_t0.length >= 1 && ".hash" === _s18_t0[0]) {
            for (s18_items = _s18_t0.slice(1), s18_t = s18_env.newt(), s18_assignments = [ ".begin", [ ".set", s18_t, s18_ex(s18_right, s18_env) ] ], 
            s18_j = 0; s18_j < s18_items.length; ) s18_assignments.push(s4_Assign(s18_ex, s18_items[s18_j][1], [ ".", s18_t, [ ".quote", s18_items[s18_j][0] ] ], s18_env, s18_locallyQ)), 
            s18_j += 1;
            return s18_assignments.push(s18_t), s18_assignments;
        }
        if (_s18_t0 instanceof Array && _s18_t0.length >= 1) return s18_callee = _s18_t0[0], 
        s18_paras = _s18_t0.slice(1), s1_prim(s18_callee) ? [ ".set", s18_ex(s18_left, s18_env), s18_ex(s18_right, s18_env) ] : s1_atom(s18_callee) && s18_locallyQ ? [ ".set", s18_ex([ ".local", s18_callee ], s18_env), s18_ex([ ".lambda", [].concat(s18_paras), s18_right ], s18_env) ] : [ ".set", s18_ex(s18_callee, s18_env), s18_ex([ ".lambda", [].concat(s18_paras), s18_right ], s18_env) ];
        throw s18_any = _s18_t0, new s18_SyntaxError("Invalid Assignment");
    }, s4_externs.macros.put("define", function(s19_ex, s19_form, s19_env) {
        var s19_ex, s19_form, s19_env, s19_any, s19_op, s19_left, s19_right, s19_modifer, s19_SyntaxError, _s19_t0, _s19_t1, _s19_t4, _s19_t5;
        if (_s19_t0 = s19_form, _s19_t0 instanceof Array && 4 === _s19_t0.length) return s19_op = _s19_t0[0], 
        s19_modifer = _s19_t0[1], s19_left = _s19_t0[2], s19_right = _s19_t0[3], s4_AssignWithMod(s19_ex, s19_left, s19_right, s19_modifer, s19_env, !0);
        if (_s19_t0 instanceof Array && 3 === _s19_t0.length) return s19_op = _s19_t0[0], 
        s19_left = _s19_t0[1], s19_right = _s19_t0[2], s4_Assign(s19_ex, s19_left, s19_right, s19_env, !0);
        if (_s19_t1 = !1, _s19_t0 instanceof Array && 2 === _s19_t0.length ? (s19_op = _s19_t0[0], 
        s19_left = _s19_t0[1], _s19_t5 = _s19_t1 = s1_atom(s19_left) ? !0 : !1, _s19_t4 = _s19_t5) : _s19_t4 = void 0, 
        _s19_t1) return [ ".local", s19_left ];
        throw s19_any = _s19_t0, new s19_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("local", s4_externs.macros.get("define")), s4_externs.macros.put("set", function(s20_ex, s20_form, s20_env) {
        var s20_ex, s20_form, s20_env, s20_any, s20_op, s20_left, s20_right, s20_SyntaxError, _s20_t0;
        if (_s20_t0 = s20_form, _s20_t0 instanceof Array && 3 === _s20_t0.length) return s20_op = _s20_t0[0], 
        s20_left = _s20_t0[1], s20_right = _s20_t0[2], s4_Assign(s20_ex, s20_left, s20_right, s20_env, !1);
        throw s20_any = _s20_t0, new s20_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("inc", function(s21_ex, s21_form, s21_env) {
        var s21_ex, s21_form, s21_env, s21_op, s21_id, s21_shift, _s21_t0;
        return _s21_t0 = s21_form, _s21_t0 instanceof Array && 2 === _s21_t0.length ? (s21_op = _s21_t0[0], 
        s21_id = _s21_t0[1], s4_Assign(s21_ex, s21_id, [ "+", s21_id, [ ".quote", 1 ] ], s21_env, !1)) : _s21_t0 instanceof Array && 3 === _s21_t0.length ? (s21_op = _s21_t0[0], 
        s21_id = _s21_t0[1], s21_shift = _s21_t0[2], s4_Assign(s21_ex, s21_id, [ "+", s21_id, s21_shift ], s21_env, !1)) : _s21_t0 instanceof Array && 4 === _s21_t0.length && "by" === _s21_t0[2] ? (s21_op = _s21_t0[0], 
        s21_id = _s21_t0[1], s21_shift = _s21_t0[3], s4_Assign(s21_ex, s21_id, [ "+", s21_id, s21_shift ], s21_env, !1)) : void 0;
    }), s4_externs.macros.put("dec", function(s22_ex, s22_form, s22_env) {
        var s22_ex, s22_form, s22_env, s22_op, s22_id, s22_shift, _s22_t0;
        return _s22_t0 = s22_form, _s22_t0 instanceof Array && 2 === _s22_t0.length ? (s22_op = _s22_t0[0], 
        s22_id = _s22_t0[1], s4_Assign(s22_ex, s22_id, [ "-", s22_id, [ ".quote", 1 ] ], s22_env, !1)) : _s22_t0 instanceof Array && 3 === _s22_t0.length ? (s22_op = _s22_t0[0], 
        s22_id = _s22_t0[1], s22_shift = _s22_t0[2], s4_Assign(s22_ex, s22_id, [ "-", s22_id, s22_shift ], s22_env, !1)) : _s22_t0 instanceof Array && 4 === _s22_t0.length && "by" === _s22_t0[2] ? (s22_op = _s22_t0[0], 
        s22_id = _s22_t0[1], s22_shift = _s22_t0[3], s4_Assign(s22_ex, s22_id, [ "-", s22_id, s22_shift ], s22_env, !1)) : void 0;
    }), s4_externs.macros.put("for", function(s23_ex, s23_form, s23_env) {
        var s23_ex, s23_form, s23_env, s23_init, s23_test, s23_step, s23_body, _s23_t0;
        return _s23_t0 = s23_form, _s23_t0 instanceof Array && 5 === _s23_t0.length && "for" === _s23_t0[0] ? (s23_init = _s23_t0[1], 
        s23_test = _s23_t0[2], s23_step = _s23_t0[3], s23_body = _s23_t0[4], [ ".begin", s23_ex(s23_init, s23_env), [ ".while", s23_ex(s23_test, s23_env), [ ".begin", s23_ex(s23_body, s23_env), s23_ex(s23_step, s23_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("foreach", function(s24_ex, s24_form, s24_env) {
        var s24_ex, s24_form, s24_env, s24_varid, s24_range, s24_body, s24_tR, s24_t, _s24_t0;
        return _s24_t0 = s24_form, _s24_t0 instanceof Array && 4 === _s24_t0.length && "foreach" === _s24_t0[0] ? (s24_varid = _s24_t0[1], 
        s24_range = _s24_t0[2], s24_body = _s24_t0[3], s24_tR = s24_env.newt(), s24_t = s24_env.newt(), 
        [ ".begin", [ ".set", s24_tR, s24_ex(s24_range, s24_env) ], [ ".while", [ "!", [ ".", [ ".set", s24_t, [ [ ".", s24_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", s4_Assign(s24_ex, s24_varid, [ ".", s24_t, [ ".quote", "value" ] ], s24_env, !1), s24_ex(s24_body, s24_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("this", [ ".thisp" ]), s4_externs.macros.put("arguments", [ ".argsp" ]), 
    s4_externs.macros.put("nothing", [ ".unit" ]), s4_externs.macros.put("undefined", [ ".unit" ]), 
    s4_externs.macros.put("null", [ ".quote", null ]), s4_externs.macros.put("true", [ ".quote", !0 ]), 
    s4_externs.macros.put("false", [ ".quote", !1 ]), s4_boole = function(s25_x) {
        var s25_x;
        return !!s25_x;
    }, s4_externs.macros.put("match", function(s26_ex, s26_form, s26_env) {
        var s26_ex, s26_form, s26_env, s26_pairs, s26_t, s26_matchQ, s26_f, s26_j, s26_any, s26_pattern, s26_guard, s26_body, s26_pat, s26_cond, s26_tc, _s26_t0, _s26_t2, _s26_t3, _s26_t4, _s26_t5, _s26_t6, _s26_t7;
        for (s26_pairs = s26_form.slice(2), s26_t = s26_env.newt(), s26_matchQ = function(s27_pattern) {
            var s27_pattern, s27_callee, s27_subpatterns, s27_ms, s27_t, s27_final, s27_whatever, s27_x, s27_id, _s27_t0;
            return _s27_t0 = s27_pattern, s27_id = _s27_t0, s1_atom(s27_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s29_x) {
                    var s29_x;
                    return [ ".set", s26_ex([ ".local", s27_pattern ], s26_env), s29_x ];
                }
            } : _s27_t0 instanceof Array && 2 === _s27_t0.length && ".quote" === _s27_t0[0] ? (s27_x = _s27_t0[1], 
            {
                whether: function(s30_x) {
                    var s30_x;
                    return [ "===", s27_pattern, s30_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 && "." === _s27_t0[0] ? (s27_whatever = _s27_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s33_x) {
                    var s33_x;
                    return [ ".set", s26_ex(s27_pattern, s26_env), s33_x ];
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 && ".list" === _s27_t0[0] ? (s27_subpatterns = _s27_t0.slice(1), 
            s27_ms = s27_subpatterns.map(s26_matchQ), {
                whether: function(s34_x) {
                    var s34_x;
                    return [ "&&", [ ".is", s34_x, s4_externs.use("Array") ], [ "===", [ ".", s34_x, [ ".quote", "length" ] ], [ ".quote", s27_ms.length ] ] ].concat(s27_ms.map(function(s35_p, s35_j) {
                        var s35_p, s35_j;
                        return s35_p.whether([ ".", s34_x, [ ".quote", s35_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function(s36_x) {
                    var s36_x;
                    return [ ".begin" ].concat(s27_ms.map(function(s37_p, s37_j) {
                        var s37_p, s37_j;
                        return s37_p.assign([ ".", s36_x, [ ".quote", s37_j ] ]);
                    }));
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 && ".conslist" === _s27_t0[0] ? (s27_subpatterns = _s27_t0.slice(1), 
            s27_ms = s27_pattern.slice(1, -1).map(s26_matchQ), s27_final = s26_matchQ(s27_pattern[s27_pattern.length - 1]), 
            {
                whether: function(s38_x) {
                    var s38_x;
                    return [ "&&", [ ".is", s38_x, s4_externs.use("Array") ], [ ">=", [ ".", s38_x, [ ".quote", "length" ] ], [ ".quote", s27_ms.length ] ] ].concat(s27_ms.map(function(s39_p, s39_j) {
                        var s39_p, s39_j;
                        return s39_p.whether([ ".", s38_x, [ ".quote", s39_j ] ]);
                    }).concat([ s27_final.whether([ [ ".", s38_x, [ ".quote", "slice" ] ], [ ".quote", s26_j ] ]) ])).filter(s4_boole);
                },
                assign: function(s40_x) {
                    var s40_x;
                    return [ ".begin" ].concat(s27_ms.map(function(s41_p, s41_j) {
                        var s41_p, s41_j;
                        return s41_p.assign([ ".", s40_x, [ ".quote", s41_j ] ]);
                    })).concat([ s27_final.assign([ [ ".", s40_x, [ ".quote", "slice" ] ], [ ".quote", s27_ms.length ] ]) ]);
                }
            }) : _s27_t0 instanceof Array && _s27_t0.length >= 1 ? (s27_callee = _s27_t0[0], 
            s27_subpatterns = _s27_t0.slice(1), s27_ms = s27_subpatterns.map(s26_matchQ), s27_t = s26_env.newt(), 
            {
                whether: function(s42_x) {
                    var s42_x;
                    return [ "&&", [ ".set", s27_t, [ [ ".", s26_ex(s27_callee, s26_env), [ ".quote", "unapply" ] ], s42_x, [ ".quote", s27_ms.length ] ] ] ].concat(s27_ms.map(function(s43_p, s43_j) {
                        var s43_p, s43_j;
                        return s43_p.whether([ ".", s27_t, [ ".quote", s43_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s27_ms.map(function(s45_p, s45_j) {
                        var s45_p, s45_j;
                        return s45_p.assign([ ".", s27_t, [ ".quote", s45_j ] ]);
                    }));
                }
            }) : void 0;
        }, s26_f = [ ".unit" ], s26_j = s26_pairs.length - 1; s26_j >= 0; ) _s26_t0 = s26_pairs[s26_j], 
        _s26_t0 instanceof Array && 2 === _s26_t0.length ? (s26_pattern = _s26_t0[0], s26_body = _s26_t0[1], 
        s26_pat = s26_matchQ(s26_pattern), s26_cond = s26_pat.whether(s26_t), s26_cond ? _s26_t3 = [ ".if", s26_cond, [ ".begin", s26_pat.assign(s26_t), s26_ex(s26_body, s26_env) ], s26_f ] : (_s26_t4 = [ ".begin", s26_pat.assign(s26_t), s26_ex(s26_body, s26_env) ], 
        _s26_t3 = _s26_t4), _s26_t2 = _s26_t3) : (_s26_t0 instanceof Array && 3 === _s26_t0.length ? (s26_pattern = _s26_t0[0], 
        s26_guard = _s26_t0[1], s26_body = _s26_t0[2], s26_pat = s26_matchQ(s26_pattern), 
        s26_cond = s26_pat.whether(s26_t), s26_cond ? (s26_tc = s26_env.newt(), _s26_t6 = [ ".begin", [ ".set", s26_tc, [ ".quote", !1 ] ], [ ".if", s26_cond, [ ".begin", s26_pat.assign(s26_t), [ ".if", s26_ex(s26_guard, s26_env), [ ".set", s26_tc, [ ".quote", !0 ] ], [ ".set", s26_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s26_tc, s26_ex(s26_body, s26_env), s26_f ] ]) : (_s26_t7 = [ ".begin", s26_pat.assign(s26_t), [ ".if", s26_ex(s26_guard, s26_env), s26_ex(s26_body, s26_env), s26_f ] ], 
        _s26_t6 = _s26_t7), _s26_t5 = _s26_t6) : (s26_any = _s26_t0, _s26_t5 = s26_f), _s26_t2 = _s26_t5), 
        s26_f = _s26_t2, s26_j -= 1;
        return [ ".begin", [ ".set", s26_t, s26_ex(s26_form[1], s26_env) ], s26_f ];
    }), s4_externs.macros.put("regex", function(s46_ex, s46_form) {
        var s46_form, s46_args, s46_s, s46_flag, _s46_t0;
        return _s46_t0 = s46_form, _s46_t0 instanceof Array && 2 === _s46_t0.length && "regex" === _s46_t0[0] && _s46_t0[1] instanceof Array && 2 === _s46_t0[1].length && ".quote" === _s46_t0[1][0] ? (s46_s = _s46_t0[1][1], 
        [ ".quote", new RegExp(s46_s) ]) : _s46_t0 instanceof Array && 3 === _s46_t0.length && "regex" === _s46_t0[0] && _s46_t0[1] instanceof Array && 2 === _s46_t0[1].length && ".quote" === _s46_t0[1][0] && _s46_t0[2] instanceof Array && 2 === _s46_t0[2].length && ".quote" === _s46_t0[2][0] ? (s46_s = _s46_t0[1][1], 
        s46_flag = _s46_t0[2][1], [ ".quote", new RegExp(s46_s, s46_flag) ]) : _s46_t0 instanceof Array && _s46_t0.length >= 1 && "regex" === _s46_t0[0] ? (s46_args = _s46_t0.slice(1), 
        [ ".new", s4_externs.use("RegExp") ].concat(s46_args)) : void 0;
    }), s4_externs;
}, exports.Create = s1_Create;