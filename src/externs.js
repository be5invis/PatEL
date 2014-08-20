var s1_patrisika, s1_atom, s1_prim, s1_Scope, s1_Create, _s1_t0, _s1_t1, _s1_t2;

s1_patrisika = require("patrisika"), s1_atom = function(s2_x) {
    var s2_x;
    return "string" == typeof s2_x;
}, s1_prim = function(s3_x) {
    var s3_x;
    return s1_atom(s3_x) && "&" !== s3_x && "&!" !== s3_x && ("." === s3_x[0] || /^\W+/.test(s3_x));
}, s1_Scope = require("patrisika").Scope, s1_Create = function() {
    var s4_externs, s4_operatorRename, s4_Assign, s4_boole;
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
    }), s4_Assign = function(s16_ex, s16_left, s16_right, s16_env, s16_locallyQ) {
        var s16_ex, s16_left, s16_right, s16_env, s16_locallyQ, s16_any, s16_callee, s16_paras, s16_items, s16_t, s16_assignments, s16_j, s16_a, s16_id, s16_SyntaxError, _s16_t0;
        if (_s16_t0 = s16_left, s16_id = _s16_t0, s1_atom(s16_id)) return s16_locallyQ ? [ ".set", s16_ex([ ".local", s16_id ], s16_env), s16_ex(s16_right, s16_env) ] : [ ".set", s16_ex(s16_left, s16_env), s16_ex(s16_right, s16_env) ];
        if (_s16_t0 instanceof Array && 2 === _s16_t0.length && "local" === _s16_t0[0]) return s16_a = _s16_t0[1], 
        s4_Assign(s16_ex, s16_a, s16_right, s16_env, !0);
        if (_s16_t0 instanceof Array && 2 === _s16_t0.length && ".local" === _s16_t0[0]) return s16_a = _s16_t0[1], 
        s4_Assign(s16_ex, s16_a, s16_right, s16_env, !0);
        if (_s16_t0 instanceof Array && _s16_t0.length >= 1 && ".list" === _s16_t0[0]) {
            for (s16_items = _s16_t0.slice(1), s16_t = s16_env.newt(), s16_assignments = [ ".begin", [ ".set", s16_t, s16_ex(s16_right, s16_env) ] ], 
            s16_j = 0; s16_j < s16_items.length; ) s16_assignments.push(s4_Assign(s16_ex, s16_items[s16_j], [ ".", s16_t, [ ".quote", s16_j ] ], s16_env, s16_locallyQ)), 
            s16_j += 1;
            return s16_assignments.push(s16_t), s16_assignments;
        }
        if (_s16_t0 instanceof Array && _s16_t0.length >= 1 && ".hash" === _s16_t0[0]) {
            for (s16_items = _s16_t0.slice(1), s16_t = s16_env.newt(), s16_assignments = [ ".begin", [ ".set", s16_t, s16_ex(s16_right, s16_env) ] ], 
            s16_j = 0; s16_j < s16_items.length; ) s16_assignments.push(s4_Assign(s16_ex, s16_items[s16_j][1], [ ".", s16_t, [ ".quote", s16_items[s16_j][0] ] ], s16_env, s16_locallyQ)), 
            s16_j += 1;
            return s16_assignments.push(s16_t), s16_assignments;
        }
        if (_s16_t0 instanceof Array && _s16_t0.length >= 1) return s16_callee = _s16_t0[0], 
        s16_paras = _s16_t0.slice(1), s1_prim(s16_callee) ? [ ".set", s16_ex(s16_left, s16_env), s16_ex(s16_right, s16_env) ] : s1_atom(s16_callee) && s16_locallyQ ? [ ".set", s16_ex([ ".local", s16_callee ], s16_env), s16_ex([ ".lambda", [].concat(s16_paras), s16_right ], s16_env) ] : [ ".set", s16_ex(s16_callee, s16_env), s16_ex([ ".lambda", [].concat(s16_paras), s16_right ], s16_env) ];
        throw s16_any = _s16_t0, new s16_SyntaxError("Invalid Assignment");
    }, s4_externs.macros.put("define", function(s17_ex, s17_form, s17_env) {
        var s17_ex, s17_form, s17_env, s17_any, s17_op, s17_left, s17_right, s17_SyntaxError, _s17_t0, _s17_t1, _s17_t3, _s17_t4;
        if (_s17_t0 = s17_form, _s17_t0 instanceof Array && 3 === _s17_t0.length) return s17_op = _s17_t0[0], 
        s17_left = _s17_t0[1], s17_right = _s17_t0[2], s4_Assign(s17_ex, s17_left, s17_right, s17_env, !0);
        if (_s17_t1 = !1, _s17_t0 instanceof Array && 2 === _s17_t0.length ? (s17_op = _s17_t0[0], 
        s17_left = _s17_t0[1], _s17_t4 = _s17_t1 = s1_atom(s17_left) ? !0 : !1, _s17_t3 = _s17_t4) : _s17_t3 = void 0, 
        _s17_t1) return [ ".local", s17_left ];
        throw s17_any = _s17_t0, new s17_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("local", s4_externs.macros.get("define")), s4_externs.macros.put("set", function(s18_ex, s18_form, s18_env) {
        var s18_ex, s18_form, s18_env, s18_any, s18_op, s18_left, s18_right, s18_SyntaxError, _s18_t0;
        if (_s18_t0 = s18_form, _s18_t0 instanceof Array && 3 === _s18_t0.length) return s18_op = _s18_t0[0], 
        s18_left = _s18_t0[1], s18_right = _s18_t0[2], s4_Assign(s18_ex, s18_left, s18_right, s18_env, !1);
        throw s18_any = _s18_t0, new s18_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("inc", function(s19_ex, s19_form, s19_env) {
        var s19_ex, s19_form, s19_env;
        return [ ".set", s19_ex(s19_form[1], s19_env), [ "+", s19_ex(s19_form[1], s19_env), [ ".quote", 1 ] ] ];
    }), s4_externs.macros.put("dec", function(s20_ex, s20_form, s20_env) {
        var s20_ex, s20_form, s20_env;
        return [ ".set", s20_ex(s20_form[1], s20_env), [ "-", s20_ex(s20_form[1], s20_env), [ ".quote", 1 ] ] ];
    }), s4_externs.macros.put("for", function(s21_ex, s21_form, s21_env) {
        var s21_ex, s21_form, s21_env, s21_init, s21_test, s21_step, s21_body, _s21_t0;
        return _s21_t0 = s21_form, _s21_t0 instanceof Array && 5 === _s21_t0.length && "for" === _s21_t0[0] ? (s21_init = _s21_t0[1], 
        s21_test = _s21_t0[2], s21_step = _s21_t0[3], s21_body = _s21_t0[4], [ ".begin", s21_ex(s21_init, s21_env), [ ".while", s21_ex(s21_test, s21_env), [ ".begin", s21_ex(s21_body, s21_env), s21_ex(s21_step, s21_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("foreach", function(s22_ex, s22_form, s22_env) {
        var s22_ex, s22_form, s22_env, s22_varid, s22_range, s22_body, s22_tR, s22_t, _s22_t0;
        return _s22_t0 = s22_form, _s22_t0 instanceof Array && 4 === _s22_t0.length && "foreach" === _s22_t0[0] ? (s22_varid = _s22_t0[1], 
        s22_range = _s22_t0[2], s22_body = _s22_t0[3], s22_tR = s22_env.newt(), s22_t = s22_env.newt(), 
        [ ".begin", [ ".set", s22_tR, s22_ex(s22_range, s22_env) ], [ ".while", [ "!", [ ".", [ ".set", s22_t, [ [ ".", s22_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", s4_Assign(s22_ex, s22_varid, [ ".", s22_t, [ ".quote", "value" ] ], s22_env, !1), s22_ex(s22_body, s22_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("this", [ ".thisp" ]), s4_externs.macros.put("arguments", [ ".argsp" ]), 
    s4_externs.macros.put("nothing", [ ".unit" ]), s4_externs.macros.put("undefined", [ ".unit" ]), 
    s4_externs.macros.put("null", [ ".quote", null ]), s4_externs.macros.put("true", [ ".quote", !0 ]), 
    s4_externs.macros.put("false", [ ".quote", !1 ]), s4_boole = function(s23_x) {
        var s23_x;
        return !!s23_x;
    }, s4_externs.macros.put("match", function(s24_ex, s24_form, s24_env) {
        var s24_ex, s24_form, s24_env, s24_pairs, s24_t, s24_matchQ, s24_f, s24_j, s24_any, s24_pattern, s24_guard, s24_body, s24_pat, s24_cond, s24_tc, _s24_t0, _s24_t2, _s24_t3, _s24_t4, _s24_t5, _s24_t6, _s24_t7;
        for (s24_pairs = s24_form.slice(2), s24_t = s24_env.newt(), s24_matchQ = function(s25_pattern) {
            var s25_pattern, s25_callee, s25_subpatterns, s25_ms, s25_t, s25_final, s25_whatever, s25_x, s25_id, _s25_t0;
            return _s25_t0 = s25_pattern, s25_id = _s25_t0, s1_atom(s25_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s27_x) {
                    var s27_x;
                    return [ ".set", s24_ex([ ".local", s25_pattern ], s24_env), s27_x ];
                }
            } : _s25_t0 instanceof Array && 2 === _s25_t0.length && ".quote" === _s25_t0[0] ? (s25_x = _s25_t0[1], 
            {
                whether: function(s28_x) {
                    var s28_x;
                    return [ "===", s25_pattern, s28_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s25_t0 instanceof Array && _s25_t0.length >= 1 && "." === _s25_t0[0] ? (s25_whatever = _s25_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s31_x) {
                    var s31_x;
                    return [ ".set", s24_ex(s25_pattern, s24_env), s31_x ];
                }
            }) : _s25_t0 instanceof Array && _s25_t0.length >= 1 && ".list" === _s25_t0[0] ? (s25_subpatterns = _s25_t0.slice(1), 
            s25_ms = s25_subpatterns.map(s24_matchQ), {
                whether: function(s32_x) {
                    var s32_x;
                    return [ "&&", [ ".is", s32_x, s4_externs.use("Array") ], [ "===", [ ".", s32_x, [ ".quote", "length" ] ], [ ".quote", s25_ms.length ] ] ].concat(s25_ms.map(function(s33_p, s33_j) {
                        var s33_p, s33_j;
                        return s33_p.whether([ ".", s32_x, [ ".quote", s33_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function(s34_x) {
                    var s34_x;
                    return [ ".begin" ].concat(s25_ms.map(function(s35_p, s35_j) {
                        var s35_p, s35_j;
                        return s35_p.assign([ ".", s34_x, [ ".quote", s35_j ] ]);
                    }));
                }
            }) : _s25_t0 instanceof Array && _s25_t0.length >= 1 && ".conslist" === _s25_t0[0] ? (s25_subpatterns = _s25_t0.slice(1), 
            s25_ms = s25_pattern.slice(1, -1).map(s24_matchQ), s25_final = s24_matchQ(s25_pattern[s25_pattern.length - 1]), 
            {
                whether: function(s36_x) {
                    var s36_x;
                    return [ "&&", [ ".is", s36_x, s4_externs.use("Array") ], [ ">=", [ ".", s36_x, [ ".quote", "length" ] ], [ ".quote", s25_ms.length ] ] ].concat(s25_ms.map(function(s37_p, s37_j) {
                        var s37_p, s37_j;
                        return s37_p.whether([ ".", s36_x, [ ".quote", s37_j ] ]);
                    }).concat([ s25_final.whether([ [ ".", s36_x, [ ".quote", "slice" ] ], [ ".quote", s24_j ] ]) ])).filter(s4_boole);
                },
                assign: function(s38_x) {
                    var s38_x;
                    return [ ".begin" ].concat(s25_ms.map(function(s39_p, s39_j) {
                        var s39_p, s39_j;
                        return s39_p.assign([ ".", s38_x, [ ".quote", s39_j ] ]);
                    })).concat([ s25_final.assign([ [ ".", s38_x, [ ".quote", "slice" ] ], [ ".quote", s25_ms.length ] ]) ]);
                }
            }) : _s25_t0 instanceof Array && _s25_t0.length >= 1 ? (s25_callee = _s25_t0[0], 
            s25_subpatterns = _s25_t0.slice(1), s25_ms = s25_subpatterns.map(s24_matchQ), s25_t = s24_env.newt(), 
            {
                whether: function(s40_x) {
                    var s40_x;
                    return [ "&&", [ ".set", s25_t, [ [ ".", s24_ex(s25_callee, s24_env), [ ".quote", "unapply" ] ], s40_x, [ ".quote", s25_ms.length ] ] ] ].concat(s25_ms.map(function(s41_p, s41_j) {
                        var s41_p, s41_j;
                        return s41_p.whether([ ".", s25_t, [ ".quote", s41_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s25_ms.map(function(s43_p, s43_j) {
                        var s43_p, s43_j;
                        return s43_p.assign([ ".", s25_t, [ ".quote", s43_j ] ]);
                    }));
                }
            }) : void 0;
        }, s24_f = [ ".unit" ], s24_j = s24_pairs.length - 1; s24_j >= 0; ) _s24_t0 = s24_pairs[s24_j], 
        _s24_t0 instanceof Array && 2 === _s24_t0.length ? (s24_pattern = _s24_t0[0], s24_body = _s24_t0[1], 
        s24_pat = s24_matchQ(s24_pattern), s24_cond = s24_pat.whether(s24_t), s24_cond ? _s24_t3 = [ ".if", s24_cond, [ ".begin", s24_pat.assign(s24_t), s24_ex(s24_body, s24_env) ], s24_f ] : (_s24_t4 = [ ".begin", s24_pat.assign(s24_t), s24_ex(s24_body, s24_env) ], 
        _s24_t3 = _s24_t4), _s24_t2 = _s24_t3) : (_s24_t0 instanceof Array && 3 === _s24_t0.length ? (s24_pattern = _s24_t0[0], 
        s24_guard = _s24_t0[1], s24_body = _s24_t0[2], s24_pat = s24_matchQ(s24_pattern), 
        s24_cond = s24_pat.whether(s24_t), s24_cond ? (s24_tc = s24_env.newt(), _s24_t6 = [ ".begin", [ ".set", s24_tc, [ ".quote", !1 ] ], [ ".if", s24_cond, [ ".begin", s24_pat.assign(s24_t), [ ".if", s24_ex(s24_guard, s24_env), [ ".set", s24_tc, [ ".quote", !0 ] ], [ ".set", s24_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s24_tc, s24_ex(s24_body, s24_env), s24_f ] ]) : (_s24_t7 = [ ".begin", s24_pat.assign(s24_t), [ ".if", s24_ex(s24_guard, s24_env), s24_ex(s24_body, s24_env), s24_f ] ], 
        _s24_t6 = _s24_t7), _s24_t5 = _s24_t6) : (s24_any = _s24_t0, _s24_t5 = s24_f), _s24_t2 = _s24_t5), 
        s24_f = _s24_t2, s24_j -= 1;
        return [ ".begin", [ ".set", s24_t, s24_ex(s24_form[1], s24_env) ], s24_f ];
    }), s4_externs.macros.put("regex", function(s44_ex, s44_form) {
        var s44_form, s44_args, s44_s, s44_flag, _s44_t0;
        return _s44_t0 = s44_form, _s44_t0 instanceof Array && 2 === _s44_t0.length && "regex" === _s44_t0[0] && _s44_t0[1] instanceof Array && 2 === _s44_t0[1].length && ".quote" === _s44_t0[1][0] ? (s44_s = _s44_t0[1][1], 
        [ ".quote", new RegExp(s44_s) ]) : _s44_t0 instanceof Array && 3 === _s44_t0.length && "regex" === _s44_t0[0] && _s44_t0[1] instanceof Array && 2 === _s44_t0[1].length && ".quote" === _s44_t0[1][0] && _s44_t0[2] instanceof Array && 2 === _s44_t0[2].length && ".quote" === _s44_t0[2][0] ? (s44_s = _s44_t0[1][1], 
        s44_flag = _s44_t0[2][1], [ ".quote", new RegExp(s44_s, s44_flag) ]) : _s44_t0 instanceof Array && _s44_t0.length >= 1 && "regex" === _s44_t0[0] ? (s44_args = _s44_t0.slice(1), 
        [ ".new", s4_externs.use("RegExp") ].concat(s44_args)) : void 0;
    }), s4_externs;
}, exports.Create = s1_Create;