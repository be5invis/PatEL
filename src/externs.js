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
    }, s4_externs.macros.put("lambda", s4_operatorRename(".lambda")), s4_externs.macros.put("begin", s4_operatorRename(".begin")), 
    s4_externs.macros.put("then", s4_operatorRename(".begin")), s4_externs.macros.put("else", s4_operatorRename(".begin")), 
    s4_externs.macros.put("while", s4_operatorRename(".while")), s4_externs.macros.put("try", s4_operatorRename(".try")), 
    s4_externs.macros.put("is", s4_operatorRename(".is")), s4_externs.macros.put("<@", s4_operatorRename(".is")), 
    s4_externs.macros.put("new", s4_operatorRename(".new")), s4_externs.macros.put("this", s4_operatorRename(".thisp")), 
    s4_externs.macros.put("arguments", s4_operatorRename(".argsp")), s4_externs.macros.put("and", s4_operatorRename("&&")), 
    s4_externs.macros.put("or", s4_operatorRename("||")), s4_externs.macros.put("not", s4_operatorRename("!")), 
    s4_externs.macros.put("return", s4_operatorRename(".return")), s4_externs.macros.put("yield", s4_operatorRename(".yield")), 
    s4_externs.macros.put("throw", s4_operatorRename(".throw")), s4_externs.macros.put("list", s4_operatorRename(".list")), 
    s4_externs.macros.put("typeof", s4_operatorRename(".typeof")), s4_externs.macros.put("if", function(s8_ex, s8_form, s8_env) {
        var s8_ex, s8_form, s8_env, s8_test, s8_consequents, s8_alternates, s8_consequent, s8_alternate, _s8_t0;
        return _s8_t0 = s8_form, _s8_t0 instanceof Array && 3 === _s8_t0.length && "if" === _s8_t0[0] ? (s8_test = _s8_t0[1], 
        s8_consequent = _s8_t0[2], s8_ex([ ".if", s8_test, s8_consequent ], s8_env)) : _s8_t0 instanceof Array && 4 === _s8_t0.length && "if" === _s8_t0[0] ? (s8_test = _s8_t0[1], 
        s8_consequent = _s8_t0[2], s8_alternate = _s8_t0[3], s8_ex([ ".if", s8_test, s8_consequent, s8_alternate ], s8_env)) : _s8_t0 instanceof Array && 3 === _s8_t0.length && "if" === _s8_t0[0] && _s8_t0[2] instanceof Array && _s8_t0[2].length >= 1 && "then" === _s8_t0[2][0] ? (s8_test = _s8_t0[1], 
        s8_consequents = _s8_t0[2].slice(1), s8_ex([ ".if", s8_test, [ ".begin" ].concat(s8_consequents) ], s8_env)) : _s8_t0 instanceof Array && 4 === _s8_t0.length && "if" === _s8_t0[0] && _s8_t0[2] instanceof Array && _s8_t0[2].length >= 1 && "then" === _s8_t0[2][0] && _s8_t0[3] instanceof Array && _s8_t0[3].length >= 1 && "else" === _s8_t0[3][0] ? (s8_test = _s8_t0[1], 
        s8_consequents = _s8_t0[2].slice(1), s8_alternates = _s8_t0[3].slice(1), s8_ex([ ".if", s8_test, [ ".begin" ].concat(s8_consequents), [ ".begin" ].concat(s8_alternates) ], s8_env)) : void 0;
    }), s4_externs.macros.put(".conslist", function(s9_ex, s9_form, s9_env) {
        var s9_ex, s9_form, s9_env;
        return [ [ ".", s9_ex([ ".list" ].concat(s9_form.slice(1, -1)), s9_env), [ ".quote", "concat" ] ], s9_ex(s9_form[s9_form.length - 1], s9_env) ];
    }), s4_externs.macros.put("let", function(s10_ex, s10_form, s10_env) {
        var s10_ex, s10_form, s10_env, s10_pairs, s10_args, s10_paras;
        return s10_pairs = s10_form.slice(1, -1), s10_args = s10_pairs.map(function(s11_pair) {
            var s11_pair;
            return s11_pair[0];
        }), s10_paras = s10_pairs.map(function(s12_pair) {
            var s12_pair;
            return s12_pair[1];
        }), s10_ex([ ".beta", s10_args, s10_form[s10_form.length - 1] ].concat(s10_paras), s10_env);
    }), s4_externs.macros.put("object", function(s13_ex, s13_form, s13_env) {
        var s13_ex, s13_form, s13_env, s13_pairs;
        return s13_pairs = s13_form.slice(1).map(function(s14_pair) {
            var s14_pair;
            return [ s14_pair[0], s13_ex(s14_pair[1], s13_env) ];
        }), [ ".hash" ].concat(s13_pairs);
    }), s4_externs.macros.put("piecewise", function(s15_ex, s15_form, s15_env) {
        var s15_ex, s15_form, s15_env, s15_pairs, s15_f, s15_j, _s15_t0;
        if (_s15_t0 = s15_form, _s15_t0 instanceof Array && _s15_t0.length >= 1 && "piecewise" === _s15_t0[0]) {
            for (s15_pairs = _s15_t0.slice(1), s15_f = [ ".unit" ], s15_j = s15_pairs.length - 1; s15_j >= 0; ) s15_f = [ ".if", s15_ex(s15_pairs[s15_j][0], s15_env), s15_ex(s15_pairs[s15_j][1], s15_env), s15_f ], 
            s15_j -= 1;
            return s15_f;
        }
        return void 0;
    }), s4_AssignWithMod = function(s16_ex, s16_left, s16_right, s16_mod, s16_env, s16_locallyQ) {
        var s16_ex, s16_left, s16_right, s16_mod, s16_env, s16_locallyQ, s16_any, s16_callee, s16_paras, s16_items, s16_a, _s16_t0;
        return _s16_t0 = s16_left, _s16_t0 instanceof Array && 2 === _s16_t0.length && "local" === _s16_t0[0] ? (s16_a = _s16_t0[1], 
        s4_AssignWithMod(s16_ex, s16_a, s16_left, s16_right, s16_mod, s16_env, !0)) : _s16_t0 instanceof Array && 2 === _s16_t0.length && ".local" === _s16_t0[0] ? (s16_a = _s16_t0[1], 
        s4_AssignWithMod(s16_ex, s16_a, s16_left, s16_right, s16_mod, s16_env, !0)) : _s16_t0 instanceof Array && _s16_t0.length >= 1 && ".list" === _s16_t0[0] ? (s16_items = _s16_t0.slice(1), 
        s4_Assign(s16_ex, s16_left, [ s16_mod, s16_right ], s16_env, s16_locallyQ)) : _s16_t0 instanceof Array && _s16_t0.length >= 1 && ".hash" === _s16_t0[0] ? (s16_items = _s16_t0.slice(1), 
        s4_Assign(s16_ex, s16_left, [ s16_mod, s16_right ], s16_env, s16_locallyQ)) : _s16_t0 instanceof Array && _s16_t0.length >= 1 ? (s16_callee = _s16_t0[0], 
        s16_paras = _s16_t0.slice(1), s1_prim(s16_callee) ? [ ".set", s16_ex(s16_left, s16_env), s16_ex([ s16_mod, s16_right ], s16_env) ] : s1_atom(s16_callee) && s16_locallyQ ? [ ".set", s16_ex([ ".local", s16_callee ], s16_env), s16_ex([ s16_mod, [ ".lambda", [].concat(s16_paras), s16_right ] ], s16_env) ] : [ ".set", s16_ex(s16_callee, s16_env), s16_ex([ s16_mod, [ ".lambda", [].concat(s16_paras), s16_right ] ], s16_env) ]) : (s16_any = _s16_t0, 
        s4_Assign(s16_ex, s16_left, [ s16_mod, s16_right ], s16_env, s16_locallyQ));
    }, s4_Assign = function(s17_ex, s17_left, s17_right, s17_env, s17_locallyQ) {
        var s17_ex, s17_left, s17_right, s17_env, s17_locallyQ, s17_any, s17_callee, s17_paras, s17_items, s17_t, s17_assignments, s17_j, s17_a, s17_id, s17_SyntaxError, _s17_t0;
        if (_s17_t0 = s17_left, s17_id = _s17_t0, s1_atom(s17_id)) return s17_locallyQ ? [ ".set", s17_ex([ ".local", s17_id ], s17_env), s17_ex(s17_right, s17_env) ] : [ ".set", s17_ex(s17_left, s17_env), s17_ex(s17_right, s17_env) ];
        if (_s17_t0 instanceof Array && 2 === _s17_t0.length && "local" === _s17_t0[0]) return s17_a = _s17_t0[1], 
        s4_Assign(s17_ex, s17_a, s17_right, s17_env, !0);
        if (_s17_t0 instanceof Array && 2 === _s17_t0.length && ".local" === _s17_t0[0]) return s17_a = _s17_t0[1], 
        s4_Assign(s17_ex, s17_a, s17_right, s17_env, !0);
        if (_s17_t0 instanceof Array && _s17_t0.length >= 1 && ".list" === _s17_t0[0]) {
            for (s17_items = _s17_t0.slice(1), s17_t = s17_env.newt(), s17_assignments = [ ".begin", [ ".set", s17_t, s17_ex(s17_right, s17_env) ] ], 
            s17_j = 0; s17_j < s17_items.length; ) s17_assignments.push(s4_Assign(s17_ex, s17_items[s17_j], [ ".", s17_t, [ ".quote", s17_j ] ], s17_env, s17_locallyQ)), 
            s17_j += 1;
            return s17_assignments.push(s17_t), s17_assignments;
        }
        if (_s17_t0 instanceof Array && _s17_t0.length >= 1 && ".hash" === _s17_t0[0]) {
            for (s17_items = _s17_t0.slice(1), s17_t = s17_env.newt(), s17_assignments = [ ".begin", [ ".set", s17_t, s17_ex(s17_right, s17_env) ] ], 
            s17_j = 0; s17_j < s17_items.length; ) s17_assignments.push(s4_Assign(s17_ex, s17_items[s17_j][1], [ ".", s17_t, [ ".quote", s17_items[s17_j][0] ] ], s17_env, s17_locallyQ)), 
            s17_j += 1;
            return s17_assignments.push(s17_t), s17_assignments;
        }
        if (_s17_t0 instanceof Array && _s17_t0.length >= 1) return s17_callee = _s17_t0[0], 
        s17_paras = _s17_t0.slice(1), s1_prim(s17_callee) ? [ ".set", s17_ex(s17_left, s17_env), s17_ex(s17_right, s17_env) ] : s1_atom(s17_callee) && s17_locallyQ ? [ ".set", s17_ex([ ".local", s17_callee ], s17_env), s17_ex([ ".lambda", [].concat(s17_paras), s17_right ], s17_env) ] : [ ".set", s17_ex(s17_callee, s17_env), s17_ex([ ".lambda", [].concat(s17_paras), s17_right ], s17_env) ];
        throw s17_any = _s17_t0, new s17_SyntaxError("Invalid Assignment");
    }, s4_externs.macros.put("define", function(s18_ex, s18_form, s18_env) {
        var s18_ex, s18_form, s18_env, s18_any, s18_op, s18_left, s18_right, s18_modifer, s18_SyntaxError, _s18_t0, _s18_t1, _s18_t4, _s18_t5;
        if (_s18_t0 = s18_form, _s18_t0 instanceof Array && 4 === _s18_t0.length) return s18_op = _s18_t0[0], 
        s18_modifer = _s18_t0[1], s18_left = _s18_t0[2], s18_right = _s18_t0[3], s4_AssignWithMod(s18_ex, s18_left, s18_right, s18_modifer, s18_env, !0);
        if (_s18_t0 instanceof Array && 3 === _s18_t0.length) return s18_op = _s18_t0[0], 
        s18_left = _s18_t0[1], s18_right = _s18_t0[2], s4_Assign(s18_ex, s18_left, s18_right, s18_env, !0);
        if (_s18_t1 = !1, _s18_t0 instanceof Array && 2 === _s18_t0.length ? (s18_op = _s18_t0[0], 
        s18_left = _s18_t0[1], _s18_t5 = _s18_t1 = s1_atom(s18_left) ? !0 : !1, _s18_t4 = _s18_t5) : _s18_t4 = void 0, 
        _s18_t1) return [ ".local", s18_left ];
        throw s18_any = _s18_t0, new s18_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("local", s4_externs.macros.get("define")), s4_externs.macros.put("set", function(s19_ex, s19_form, s19_env) {
        var s19_ex, s19_form, s19_env, s19_any, s19_op, s19_left, s19_right, s19_SyntaxError, _s19_t0;
        if (_s19_t0 = s19_form, _s19_t0 instanceof Array && 3 === _s19_t0.length) return s19_op = _s19_t0[0], 
        s19_left = _s19_t0[1], s19_right = _s19_t0[2], s4_Assign(s19_ex, s19_left, s19_right, s19_env, !1);
        throw s19_any = _s19_t0, new s19_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("inc", function(s20_ex, s20_form, s20_env) {
        var s20_ex, s20_form, s20_env;
        return [ ".set", s20_ex(s20_form[1], s20_env), [ "+", s20_ex(s20_form[1], s20_env), [ ".quote", 1 ] ] ];
    }), s4_externs.macros.put("dec", function(s21_ex, s21_form, s21_env) {
        var s21_ex, s21_form, s21_env;
        return [ ".set", s21_ex(s21_form[1], s21_env), [ "-", s21_ex(s21_form[1], s21_env), [ ".quote", 1 ] ] ];
    }), s4_externs.macros.put("for", function(s22_ex, s22_form, s22_env) {
        var s22_ex, s22_form, s22_env, s22_init, s22_test, s22_step, s22_body, _s22_t0;
        return _s22_t0 = s22_form, _s22_t0 instanceof Array && 5 === _s22_t0.length && "for" === _s22_t0[0] ? (s22_init = _s22_t0[1], 
        s22_test = _s22_t0[2], s22_step = _s22_t0[3], s22_body = _s22_t0[4], [ ".begin", s22_ex(s22_init, s22_env), [ ".while", s22_ex(s22_test, s22_env), [ ".begin", s22_ex(s22_body, s22_env), s22_ex(s22_step, s22_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("foreach", function(s23_ex, s23_form, s23_env) {
        var s23_ex, s23_form, s23_env, s23_varid, s23_range, s23_body, s23_tR, s23_t, _s23_t0;
        return _s23_t0 = s23_form, _s23_t0 instanceof Array && 4 === _s23_t0.length && "foreach" === _s23_t0[0] ? (s23_varid = _s23_t0[1], 
        s23_range = _s23_t0[2], s23_body = _s23_t0[3], s23_tR = s23_env.newt(), s23_t = s23_env.newt(), 
        [ ".begin", [ ".set", s23_tR, s23_ex(s23_range, s23_env) ], [ ".while", [ "!", [ ".", [ ".set", s23_t, [ [ ".", s23_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", s4_Assign(s23_ex, s23_varid, [ ".", s23_t, [ ".quote", "value" ] ], s23_env, !1), s23_ex(s23_body, s23_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("this", [ ".thisp" ]), s4_externs.macros.put("arguments", [ ".argsp" ]), 
    s4_externs.macros.put("nothing", [ ".unit" ]), s4_externs.macros.put("undefined", [ ".unit" ]), 
    s4_externs.macros.put("null", [ ".quote", null ]), s4_externs.macros.put("true", [ ".quote", !0 ]), 
    s4_externs.macros.put("false", [ ".quote", !1 ]), s4_boole = function(s24_x) {
        var s24_x;
        return !!s24_x;
    }, s4_externs.macros.put("match", function(s25_ex, s25_form, s25_env) {
        var s25_ex, s25_form, s25_env, s25_pairs, s25_t, s25_matchQ, s25_f, s25_j, s25_any, s25_pattern, s25_guard, s25_body, s25_pat, s25_cond, s25_tc, _s25_t0, _s25_t2, _s25_t3, _s25_t4, _s25_t5, _s25_t6, _s25_t7;
        for (s25_pairs = s25_form.slice(2), s25_t = s25_env.newt(), s25_matchQ = function(s26_pattern) {
            var s26_pattern, s26_callee, s26_subpatterns, s26_ms, s26_t, s26_final, s26_whatever, s26_x, s26_id, _s26_t0;
            return _s26_t0 = s26_pattern, s26_id = _s26_t0, s1_atom(s26_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s28_x) {
                    var s28_x;
                    return [ ".set", s25_ex([ ".local", s26_pattern ], s25_env), s28_x ];
                }
            } : _s26_t0 instanceof Array && 2 === _s26_t0.length && ".quote" === _s26_t0[0] ? (s26_x = _s26_t0[1], 
            {
                whether: function(s29_x) {
                    var s29_x;
                    return [ "===", s26_pattern, s29_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s26_t0 instanceof Array && _s26_t0.length >= 1 && "." === _s26_t0[0] ? (s26_whatever = _s26_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s32_x) {
                    var s32_x;
                    return [ ".set", s25_ex(s26_pattern, s25_env), s32_x ];
                }
            }) : _s26_t0 instanceof Array && _s26_t0.length >= 1 && ".list" === _s26_t0[0] ? (s26_subpatterns = _s26_t0.slice(1), 
            s26_ms = s26_subpatterns.map(s25_matchQ), {
                whether: function(s33_x) {
                    var s33_x;
                    return [ "&&", [ ".is", s33_x, s4_externs.use("Array") ], [ "===", [ ".", s33_x, [ ".quote", "length" ] ], [ ".quote", s26_ms.length ] ] ].concat(s26_ms.map(function(s34_p, s34_j) {
                        var s34_p, s34_j;
                        return s34_p.whether([ ".", s33_x, [ ".quote", s34_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function(s35_x) {
                    var s35_x;
                    return [ ".begin" ].concat(s26_ms.map(function(s36_p, s36_j) {
                        var s36_p, s36_j;
                        return s36_p.assign([ ".", s35_x, [ ".quote", s36_j ] ]);
                    }));
                }
            }) : _s26_t0 instanceof Array && _s26_t0.length >= 1 && ".conslist" === _s26_t0[0] ? (s26_subpatterns = _s26_t0.slice(1), 
            s26_ms = s26_pattern.slice(1, -1).map(s25_matchQ), s26_final = s25_matchQ(s26_pattern[s26_pattern.length - 1]), 
            {
                whether: function(s37_x) {
                    var s37_x;
                    return [ "&&", [ ".is", s37_x, s4_externs.use("Array") ], [ ">=", [ ".", s37_x, [ ".quote", "length" ] ], [ ".quote", s26_ms.length ] ] ].concat(s26_ms.map(function(s38_p, s38_j) {
                        var s38_p, s38_j;
                        return s38_p.whether([ ".", s37_x, [ ".quote", s38_j ] ]);
                    }).concat([ s26_final.whether([ [ ".", s37_x, [ ".quote", "slice" ] ], [ ".quote", s25_j ] ]) ])).filter(s4_boole);
                },
                assign: function(s39_x) {
                    var s39_x;
                    return [ ".begin" ].concat(s26_ms.map(function(s40_p, s40_j) {
                        var s40_p, s40_j;
                        return s40_p.assign([ ".", s39_x, [ ".quote", s40_j ] ]);
                    })).concat([ s26_final.assign([ [ ".", s39_x, [ ".quote", "slice" ] ], [ ".quote", s26_ms.length ] ]) ]);
                }
            }) : _s26_t0 instanceof Array && _s26_t0.length >= 1 ? (s26_callee = _s26_t0[0], 
            s26_subpatterns = _s26_t0.slice(1), s26_ms = s26_subpatterns.map(s25_matchQ), s26_t = s25_env.newt(), 
            {
                whether: function(s41_x) {
                    var s41_x;
                    return [ "&&", [ ".set", s26_t, [ [ ".", s25_ex(s26_callee, s25_env), [ ".quote", "unapply" ] ], s41_x, [ ".quote", s26_ms.length ] ] ] ].concat(s26_ms.map(function(s42_p, s42_j) {
                        var s42_p, s42_j;
                        return s42_p.whether([ ".", s26_t, [ ".quote", s42_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s26_ms.map(function(s44_p, s44_j) {
                        var s44_p, s44_j;
                        return s44_p.assign([ ".", s26_t, [ ".quote", s44_j ] ]);
                    }));
                }
            }) : void 0;
        }, s25_f = [ ".unit" ], s25_j = s25_pairs.length - 1; s25_j >= 0; ) _s25_t0 = s25_pairs[s25_j], 
        _s25_t0 instanceof Array && 2 === _s25_t0.length ? (s25_pattern = _s25_t0[0], s25_body = _s25_t0[1], 
        s25_pat = s25_matchQ(s25_pattern), s25_cond = s25_pat.whether(s25_t), s25_cond ? _s25_t3 = [ ".if", s25_cond, [ ".begin", s25_pat.assign(s25_t), s25_ex(s25_body, s25_env) ], s25_f ] : (_s25_t4 = [ ".begin", s25_pat.assign(s25_t), s25_ex(s25_body, s25_env) ], 
        _s25_t3 = _s25_t4), _s25_t2 = _s25_t3) : (_s25_t0 instanceof Array && 3 === _s25_t0.length ? (s25_pattern = _s25_t0[0], 
        s25_guard = _s25_t0[1], s25_body = _s25_t0[2], s25_pat = s25_matchQ(s25_pattern), 
        s25_cond = s25_pat.whether(s25_t), s25_cond ? (s25_tc = s25_env.newt(), _s25_t6 = [ ".begin", [ ".set", s25_tc, [ ".quote", !1 ] ], [ ".if", s25_cond, [ ".begin", s25_pat.assign(s25_t), [ ".if", s25_ex(s25_guard, s25_env), [ ".set", s25_tc, [ ".quote", !0 ] ], [ ".set", s25_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s25_tc, s25_ex(s25_body, s25_env), s25_f ] ]) : (_s25_t7 = [ ".begin", s25_pat.assign(s25_t), [ ".if", s25_ex(s25_guard, s25_env), s25_ex(s25_body, s25_env), s25_f ] ], 
        _s25_t6 = _s25_t7), _s25_t5 = _s25_t6) : (s25_any = _s25_t0, _s25_t5 = s25_f), _s25_t2 = _s25_t5), 
        s25_f = _s25_t2, s25_j -= 1;
        return [ ".begin", [ ".set", s25_t, s25_ex(s25_form[1], s25_env) ], s25_f ];
    }), s4_externs.macros.put("regex", function(s45_ex, s45_form) {
        var s45_form, s45_args, s45_s, s45_flag, _s45_t0;
        return _s45_t0 = s45_form, _s45_t0 instanceof Array && 2 === _s45_t0.length && "regex" === _s45_t0[0] && _s45_t0[1] instanceof Array && 2 === _s45_t0[1].length && ".quote" === _s45_t0[1][0] ? (s45_s = _s45_t0[1][1], 
        [ ".quote", new RegExp(s45_s) ]) : _s45_t0 instanceof Array && 3 === _s45_t0.length && "regex" === _s45_t0[0] && _s45_t0[1] instanceof Array && 2 === _s45_t0[1].length && ".quote" === _s45_t0[1][0] && _s45_t0[2] instanceof Array && 2 === _s45_t0[2].length && ".quote" === _s45_t0[2][0] ? (s45_s = _s45_t0[1][1], 
        s45_flag = _s45_t0[2][1], [ ".quote", new RegExp(s45_s, s45_flag) ]) : _s45_t0 instanceof Array && _s45_t0.length >= 1 && "regex" === _s45_t0[0] ? (s45_args = _s45_t0.slice(1), 
        [ ".new", s4_externs.use("RegExp") ].concat(s45_args)) : void 0;
    }), s4_externs;
}, exports.Create = s1_Create;