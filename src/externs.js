var s1_patrisika, s1_atom, s1_prim, s1_Scope, s1_Create;

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
    }, s4_externs.declare("require"), s4_externs.declare("exports"), s4_externs.declare("Error"), 
    s4_operatorRename = function(s6_op) {
        var s6_op;
        return function(s7_ex, s7_form, s7_env) {
            var s7_ex, s7_form, s7_env;
            return s7_ex([ s6_op ].concat(s7_form.slice(1)), s7_env);
        };
    }, s4_externs.macros.put("lambda", s4_operatorRename(".lambda")), s4_externs.macros.put("begin", s4_operatorRename(".begin")), 
    s4_externs.macros.put("if", s4_operatorRename(".if")), s4_externs.macros.put("while", s4_operatorRename(".while")), 
    s4_externs.macros.put("try", s4_operatorRename(".try")), s4_externs.macros.put("is", s4_operatorRename(".is")), 
    s4_externs.macros.put("<@", s4_operatorRename(".is")), s4_externs.macros.put("new", s4_operatorRename(".new")), 
    s4_externs.macros.put("this", s4_operatorRename(".thisp")), s4_externs.macros.put("arguments", s4_operatorRename(".argsp")), 
    s4_externs.macros.put("and", s4_operatorRename("&&")), s4_externs.macros.put("or", s4_operatorRename("||")), 
    s4_externs.macros.put("not", s4_operatorRename("!")), s4_externs.macros.put("return", s4_operatorRename(".return")), 
    s4_externs.macros.put("yield", s4_operatorRename(".yield")), s4_externs.macros.put("throw", s4_operatorRename(".throw")), 
    s4_externs.macros.put("list", s4_operatorRename(".list")), s4_externs.macros.put("typeof", s4_operatorRename(".typeof")), 
    s4_externs.macros.put(".conslist", function(s8_ex, s8_form, s8_env) {
        var s8_ex, s8_form, s8_env;
        return [ [ ".", s8_ex([ ".list" ].concat(s8_form.slice(1, -1)), s8_env), [ ".quote", "concat" ] ], s8_ex(s8_form[s8_form.length - 1], s8_env) ];
    }), s4_externs.macros.put("let", function(s9_ex, s9_form, s9_env) {
        var s9_ex, s9_form, s9_env, s9_pairs, s9_args, s9_paras;
        return s9_pairs = s9_form.slice(1, -1), s9_args = s9_pairs.map(function(s10_pair) {
            var s10_pair;
            return s10_pair[0];
        }), s9_paras = s9_pairs.map(function(s11_pair) {
            var s11_pair;
            return s11_pair[1];
        }), s9_ex([ ".beta", s9_args, s9_form[s9_form.length - 1] ].concat(s9_paras), s9_env);
    }), s4_externs.macros.put("object", function(s12_ex, s12_form, s12_env) {
        var s12_ex, s12_form, s12_env, s12_pairs;
        return s12_pairs = s12_form.slice(1).map(function(s13_pair) {
            var s13_pair;
            return [ s13_pair[0], s12_ex(s13_pair[1], s12_env) ];
        }), [ ".hash" ].concat(s12_pairs);
    }), s4_externs.macros.put("piecewise", function(s14_ex, s14_form, s14_env) {
        var s14_ex, s14_form, s14_env, s14_pairs, s14_f, s14_j, _s14_t0;
        if (_s14_t0 = s14_form, _s14_t0 instanceof Array && _s14_t0.length >= 1 && "piecewise" === _s14_t0[0]) {
            for (s14_pairs = _s14_t0.slice(1), s14_f = [ ".unit" ], s14_j = s14_pairs.length - 1; s14_j >= 0; ) s14_f = [ ".if", s14_ex(s14_pairs[s14_j][0], s14_env), s14_ex(s14_pairs[s14_j][1], s14_env), s14_f ], 
            s14_j -= 1;
            return s14_f;
        }
        return void 0;
    }), s4_Assign = function(s15_ex, s15_left, s15_right, s15_env, s15_locallyQ) {
        var s15_ex, s15_left, s15_right, s15_env, s15_locallyQ, s15_any, s15_callee, s15_paras, s15_items, s15_t, s15_assignments, s15_j, s15_id, s15_SyntaxError, _s15_t0;
        if (_s15_t0 = s15_left, s15_id = _s15_t0, s1_atom(s15_id)) return s15_locallyQ ? [ ".set", s15_ex([ ".local", s15_id ], s15_env), s15_ex(s15_right, s15_env) ] : [ ".set", s15_ex(s15_left, s15_env), s15_ex(s15_right, s15_env) ];
        if (_s15_t0 instanceof Array && _s15_t0.length >= 1 && ".list" === _s15_t0[0]) {
            for (s15_items = _s15_t0.slice(1), s15_t = s15_env.newt(), s15_assignments = [ ".begin", [ ".set", s15_t, s15_ex(s15_right, s15_env) ] ], 
            s15_j = 0; s15_j < s15_items.length; ) s15_assignments.push(s4_Assign(s15_ex, s15_items[s15_j], [ ".", s15_t, [ ".quote", s15_j ] ], s15_env, s15_locallyQ)), 
            s15_j += 1;
            return s15_assignments.push(s15_t), s15_assignments;
        }
        if (_s15_t0 instanceof Array && _s15_t0.length >= 1 && ".hash" === _s15_t0[0]) {
            for (s15_items = _s15_t0.slice(1), s15_t = s15_env.newt(), s15_assignments = [ ".begin", [ ".set", s15_t, s15_ex(s15_right, s15_env) ] ], 
            s15_j = 0; s15_j < s15_items.length; ) s15_assignments.push(s4_Assign(s15_ex, s15_items[s15_j][1], [ ".", s15_t, [ ".quote", s15_items[s15_j][0] ] ], s15_env, s15_locallyQ)), 
            s15_j += 1;
            return s15_assignments.push(s15_t), s15_assignments;
        }
        if (_s15_t0 instanceof Array && _s15_t0.length >= 1) return s15_callee = _s15_t0[0], 
        s15_paras = _s15_t0.slice(1), s1_prim(s15_callee) ? [ ".set", s15_ex(s15_left, s15_env), s15_ex(s15_right, s15_env) ] : s1_atom(s15_callee) && s15_locallyQ ? [ ".set", s15_ex([ ".local", s15_callee ], s15_env), s15_ex([ ".lambda", [].concat(s15_paras), s15_right ], s15_env) ] : [ ".set", s15_ex(s15_callee, s15_env), s15_ex([ ".lambda", [].concat(s15_paras), s15_right ], s15_env) ];
        throw s15_any = _s15_t0, new s15_SyntaxError("Invalid Assignment");
    }, s4_externs.macros.put("define", function(s16_ex, s16_form, s16_env) {
        var s16_ex, s16_form, s16_env, s16_any, s16_op, s16_left, s16_right, s16_SyntaxError, _s16_t0, _s16_t1, _s16_t3, _s16_t4;
        if (_s16_t0 = s16_form, _s16_t0 instanceof Array && 3 === _s16_t0.length) return s16_op = _s16_t0[0], 
        s16_left = _s16_t0[1], s16_right = _s16_t0[2], s4_Assign(s16_ex, s16_left, s16_right, s16_env, !0);
        if (_s16_t1 = !1, _s16_t0 instanceof Array && 2 === _s16_t0.length ? (s16_op = _s16_t0[0], 
        s16_left = _s16_t0[1], _s16_t4 = _s16_t1 = s1_atom(s16_left) ? !0 : !1, _s16_t3 = _s16_t4) : _s16_t3 = void 0, 
        _s16_t1) return [ ".local", s16_left ];
        throw s16_any = _s16_t0, new s16_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("local", s4_externs.macros.get("define")), s4_externs.macros.put("set", function(s17_ex, s17_form, s17_env) {
        var s17_ex, s17_form, s17_env, s17_any, s17_op, s17_left, s17_right, s17_SyntaxError, _s17_t0;
        if (_s17_t0 = s17_form, _s17_t0 instanceof Array && 3 === _s17_t0.length) return s17_op = _s17_t0[0], 
        s17_left = _s17_t0[1], s17_right = _s17_t0[2], s4_Assign(s17_ex, s17_left, s17_right, s17_env, !1);
        throw s17_any = _s17_t0, new s17_SyntaxError("Invalid Assignment");
    }), s4_externs.macros.put("inc", function(s18_ex, s18_form, s18_env) {
        var s18_ex, s18_form, s18_env;
        return [ ".set", s18_ex(s18_form[1], s18_env), [ "+", s18_ex(s18_form[1], s18_env), [ ".quote", 1 ] ] ];
    }), s4_externs.macros.put("dec", function(s19_ex, s19_form, s19_env) {
        var s19_ex, s19_form, s19_env;
        return [ ".set", s19_ex(s19_form[1], s19_env), [ "-", s19_ex(s19_form[1], s19_env), [ ".quote", 1 ] ] ];
    }), s4_externs.macros.put("for", function(s20_ex, s20_form, s20_env) {
        var s20_ex, s20_form, s20_env, s20_init, s20_test, s20_step, s20_body, _s20_t0;
        return _s20_t0 = s20_form, _s20_t0 instanceof Array && 5 === _s20_t0.length && "for" === _s20_t0[0] ? (s20_init = _s20_t0[1], 
        s20_test = _s20_t0[2], s20_step = _s20_t0[3], s20_body = _s20_t0[4], [ ".begin", s20_ex(s20_init, s20_env), [ ".while", s20_ex(s20_test, s20_env), [ ".begin", s20_ex(s20_body, s20_env), s20_ex(s20_step, s20_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("foreach", function(s21_ex, s21_form, s21_env) {
        var s21_ex, s21_form, s21_env, s21_varid, s21_range, s21_body, s21_tR, s21_t, _s21_t0, _s21_t1, _s21_t2, _s21_t3;
        return _s21_t0 = s21_form, _s21_t1 = !1, _s21_t0 instanceof Array && 4 === _s21_t0.length && "foreach" === _s21_t0[0] ? (s21_varid = _s21_t0[1], 
        s21_range = _s21_t0[2], s21_body = _s21_t0[3], _s21_t3 = _s21_t1 = s1_atom(s21_varid) ? !0 : !1, 
        _s21_t2 = _s21_t3) : _s21_t2 = void 0, _s21_t1 ? (s21_env.declare(s21_varid), s21_tR = s21_env.newt(), 
        s21_t = s21_env.newt(), [ ".begin", [ ".set", s21_tR, s21_ex(s21_range, s21_env) ], [ ".while", [ "!", [ ".", [ ".set", s21_t, [ [ ".", s21_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", [ ".set", s21_varid, [ ".", s21_t, [ ".quote", "value" ] ] ], s21_ex(s21_body, s21_env) ] ] ]) : void 0;
    }), s4_externs.macros.put("this", [ ".thisp" ]), s4_externs.macros.put("arguments", [ ".argsp" ]), 
    s4_externs.macros.put("nothing", [ ".unit" ]), s4_externs.macros.put("undefined", [ ".unit" ]), 
    s4_externs.macros.put("null", [ ".quote", null ]), s4_externs.macros.put("true", [ ".quote", !0 ]), 
    s4_externs.macros.put("false", [ ".quote", !1 ]), s4_boole = function(s22_x) {
        var s22_x;
        return !!s22_x;
    }, s4_externs.macros.put("match", function(s23_ex, s23_form, s23_env) {
        var s23_ex, s23_form, s23_env, s23_pairs, s23_t, s23_matchQ, s23_f, s23_j, s23_any, s23_pattern, s23_guard, s23_body, s23_pat, s23_cond, s23_tc, _s23_t0, _s23_t1, _s23_t2, _s23_t3, _s23_t4, _s23_t5, _s23_t6;
        for (s23_pairs = s23_form.slice(2), s23_t = s23_env.newt(), s23_matchQ = function(s24_pattern) {
            var s24_pattern, s24_callee, s24_subpatterns, s24_ms, s24_t, s24_final, s24_whatever, s24_x, s24_id, _s24_t0;
            return _s24_t0 = s24_pattern, s24_id = _s24_t0, s1_atom(s24_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s26_x) {
                    var s26_x;
                    return [ ".set", s23_ex([ ".local", s24_pattern ], s23_env), s26_x ];
                }
            } : _s24_t0 instanceof Array && 2 === _s24_t0.length && ".quote" === _s24_t0[0] ? (s24_x = _s24_t0[1], 
            {
                whether: function(s27_x) {
                    var s27_x;
                    return [ "===", s24_pattern, s27_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s24_t0 instanceof Array && _s24_t0.length >= 1 && "." === _s24_t0[0] ? (s24_whatever = _s24_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s30_x) {
                    var s30_x;
                    return [ ".set", s23_ex(s24_pattern, s23_env), s30_x ];
                }
            }) : _s24_t0 instanceof Array && _s24_t0.length >= 1 && ".list" === _s24_t0[0] ? (s24_subpatterns = _s24_t0.slice(1), 
            s24_ms = s24_subpatterns.map(s23_matchQ), {
                whether: function(s31_x) {
                    var s31_x;
                    return [ "&&", [ ".is", s31_x, s4_externs.use("Array") ], [ "===", [ ".", s31_x, [ ".quote", "length" ] ], [ ".quote", s24_ms.length ] ] ].concat(s24_ms.map(function(s32_p, s32_j) {
                        var s32_p, s32_j;
                        return s32_p.whether([ ".", s31_x, [ ".quote", s32_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function(s33_x) {
                    var s33_x;
                    return [ ".begin" ].concat(s24_ms.map(function(s34_p, s34_j) {
                        var s34_p, s34_j;
                        return s34_p.assign([ ".", s33_x, [ ".quote", s34_j ] ]);
                    }));
                }
            }) : _s24_t0 instanceof Array && _s24_t0.length >= 1 && ".conslist" === _s24_t0[0] ? (s24_subpatterns = _s24_t0.slice(1), 
            s24_ms = s24_pattern.slice(1, -1).map(s23_matchQ), s24_final = s23_matchQ(s24_pattern[s24_pattern.length - 1]), 
            {
                whether: function(s35_x) {
                    var s35_x;
                    return [ "&&", [ ".is", s35_x, s4_externs.use("Array") ], [ ">=", [ ".", s35_x, [ ".quote", "length" ] ], [ ".quote", s24_ms.length ] ] ].concat(s24_ms.map(function(s36_p, s36_j) {
                        var s36_p, s36_j;
                        return s36_p.whether([ ".", s35_x, [ ".quote", s36_j ] ]);
                    }).concat([ s24_final.whether([ [ ".", s35_x, [ ".quote", "slice" ] ], [ ".quote", s23_j ] ]) ])).filter(s4_boole);
                },
                assign: function(s37_x) {
                    var s37_x;
                    return [ ".begin" ].concat(s24_ms.map(function(s38_p, s38_j) {
                        var s38_p, s38_j;
                        return s38_p.assign([ ".", s37_x, [ ".quote", s38_j ] ]);
                    })).concat([ s24_final.assign([ [ ".", s37_x, [ ".quote", "slice" ] ], [ ".quote", s24_ms.length ] ]) ]);
                }
            }) : _s24_t0 instanceof Array && _s24_t0.length >= 1 ? (s24_callee = _s24_t0[0], 
            s24_subpatterns = _s24_t0.slice(1), s24_ms = s24_subpatterns.map(s23_matchQ), s24_t = s23_env.newt(), 
            {
                whether: function(s39_x) {
                    var s39_x;
                    return [ "&&", [ ".set", s24_t, [ [ ".", s23_ex(s24_callee, s23_env), [ ".quote", "unapply" ] ], s39_x, [ ".quote", s24_ms.length ] ] ] ].concat(s24_ms.map(function(s40_p, s40_j) {
                        var s40_p, s40_j;
                        return s40_p.whether([ ".", s24_t, [ ".quote", s40_j ] ]);
                    })).filter(s4_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s24_ms.map(function(s42_p, s42_j) {
                        var s42_p, s42_j;
                        return s42_p.assign([ ".", s24_t, [ ".quote", s42_j ] ]);
                    }));
                }
            }) : void 0;
        }, s23_f = [ ".unit" ], s23_j = s23_pairs.length - 1; s23_j >= 0; ) _s23_t0 = s23_pairs[s23_j], 
        _s23_t0 instanceof Array && 2 === _s23_t0.length ? (s23_pattern = _s23_t0[0], s23_body = _s23_t0[1], 
        s23_pat = s23_matchQ(s23_pattern), s23_cond = s23_pat.whether(s23_t), s23_cond ? _s23_t2 = [ ".if", s23_cond, [ ".begin", s23_pat.assign(s23_t), s23_ex(s23_body, s23_env) ], s23_f ] : (_s23_t3 = [ ".begin", s23_pat.assign(s23_t), s23_ex(s23_body, s23_env) ], 
        _s23_t2 = _s23_t3), _s23_t1 = _s23_t2) : (_s23_t0 instanceof Array && 3 === _s23_t0.length ? (s23_pattern = _s23_t0[0], 
        s23_guard = _s23_t0[1], s23_body = _s23_t0[2], s23_pat = s23_matchQ(s23_pattern), 
        s23_cond = s23_pat.whether(s23_t), s23_cond ? (s23_tc = s23_env.newt(), _s23_t5 = [ ".begin", [ ".set", s23_tc, [ ".quote", !1 ] ], [ ".if", s23_cond, [ ".begin", s23_pat.assign(s23_t), [ ".if", s23_ex(s23_guard, s23_env), [ ".set", s23_tc, [ ".quote", !0 ] ], [ ".set", s23_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s23_tc, s23_ex(s23_body, s23_env), s23_f ] ]) : (_s23_t6 = [ ".begin", s23_pat.assign(s23_t), [ ".if", s23_ex(s23_guard, s23_env), s23_ex(s23_body, s23_env), s23_f ] ], 
        _s23_t5 = _s23_t6), _s23_t4 = _s23_t5) : (s23_any = _s23_t0, _s23_t4 = s23_f), _s23_t1 = _s23_t4), 
        s23_f = _s23_t1, s23_j -= 1;
        return [ ".begin", [ ".set", s23_t, s23_ex(s23_form[1], s23_env) ], s23_f ];
    }), s4_externs.macros.put("regex", function(s43_ex, s43_form) {
        var s43_form, s43_args, s43_s, s43_flag, _s43_t0;
        return _s43_t0 = s43_form, _s43_t0 instanceof Array && 2 === _s43_t0.length && "regex" === _s43_t0[0] && _s43_t0[1] instanceof Array && 2 === _s43_t0[1].length && ".quote" === _s43_t0[1][0] ? (s43_s = _s43_t0[1][1], 
        [ ".quote", new RegExp(s43_s) ]) : _s43_t0 instanceof Array && 3 === _s43_t0.length && "regex" === _s43_t0[0] && _s43_t0[1] instanceof Array && 2 === _s43_t0[1].length && ".quote" === _s43_t0[1][0] && _s43_t0[2] instanceof Array && 2 === _s43_t0[2].length && ".quote" === _s43_t0[2][0] ? (s43_s = _s43_t0[1][1], 
        s43_flag = _s43_t0[2][1], [ ".quote", new RegExp(s43_s, s43_flag) ]) : _s43_t0 instanceof Array && _s43_t0.length >= 1 && "regex" === _s43_t0[0] ? (s43_args = _s43_t0.slice(1), 
        [ ".new", s4_externs.use("RegExp") ].concat(s43_args)) : void 0;
    }), s4_externs;
}, exports.Create = s1_Create;