var s1_patrisika, s1_atom, s1_Scope, s1_prim, s1_Create;

s1_patrisika = require("patrisika"), s1_atom = require("../commons/match").atom, 
s1_Scope = require("patrisika").Scope, s1_prim = require("../commons/match").prim, 
s1_Create = function() {
    var s2_externs, s2_operatorRename, s2_Assign, s2_boole;
    return s2_externs = s1_patrisika.DefaultExterns(), s2_externs.castName = function(s3_name) {
        var s3_name;
        return s3_name;
    }, s2_externs.declare("require"), s2_externs.declare("exports"), s2_externs.declare("Error"), 
    s2_operatorRename = function(s4_op) {
        var s4_op;
        return function(s5_ex, s5_form, s5_env) {
            var s5_ex, s5_form, s5_env;
            return s5_ex([ s4_op ].concat(s5_form.slice(1)), s5_env);
        };
    }, s2_externs.macros.put("lambda", s2_operatorRename(".lambda")), s2_externs.macros.put("begin", s2_operatorRename(".begin")), 
    s2_externs.macros.put("if", s2_operatorRename(".if")), s2_externs.macros.put("while", s2_operatorRename(".while")), 
    s2_externs.macros.put("try", s2_operatorRename(".try")), s2_externs.macros.put("is", s2_operatorRename(".is")), 
    s2_externs.macros.put("<@", s2_operatorRename(".is")), s2_externs.macros.put("new", s2_operatorRename(".new")), 
    s2_externs.macros.put("this", s2_operatorRename(".thisp")), s2_externs.macros.put("arguments", s2_operatorRename(".argsp")), 
    s2_externs.macros.put("and", s2_operatorRename("&&")), s2_externs.macros.put("or", s2_operatorRename("||")), 
    s2_externs.macros.put("not", s2_operatorRename("!")), s2_externs.macros.put("return", s2_operatorRename(".return")), 
    s2_externs.macros.put("yield", s2_operatorRename(".yield")), s2_externs.macros.put("throw", s2_operatorRename(".throw")), 
    s2_externs.macros.put("list", s2_operatorRename(".list")), s2_externs.macros.put(".conslist", function(s6_ex, s6_form, s6_env) {
        var s6_ex, s6_form, s6_env;
        return [ [ ".", s6_ex([ ".list" ].concat(s6_form.slice(1, -1)), s6_env), [ ".quote", "concat" ] ], s6_ex(s6_form[s6_form.length - 1], s6_env) ];
    }), s2_externs.macros.put("let", function(s7_ex, s7_form, s7_env) {
        var s7_ex, s7_form, s7_env, s7_pairs, s7_args, s7_paras;
        return s7_pairs = s7_form.slice(1, -1), s7_args = s7_pairs.map(function(s8_pair) {
            var s8_pair;
            return s8_pair[0];
        }), s7_paras = s7_pairs.map(function(s9_pair) {
            var s9_pair;
            return s9_pair[1];
        }), s7_ex([ ".beta", s7_args, s7_form[s7_form.length - 1] ].concat(s7_paras), s7_env);
    }), s2_externs.macros.put("object", function(s10_ex, s10_form, s10_env) {
        var s10_ex, s10_form, s10_env, s10_pairs;
        return s10_pairs = s10_form.slice(1).map(function(s11_pair) {
            var s11_pair;
            return [ s11_pair[0], s10_ex(s11_pair[1], s10_env) ];
        }), [ ".hash" ].concat(s10_pairs);
    }), s2_externs.macros.put("piecewise", function(s12_ex, s12_form, s12_env) {
        var s12_ex, s12_form, s12_env, s12_pairs, s12_f, s12_j, _s12_t0;
        if (_s12_t0 = s12_form, _s12_t0 instanceof Array && _s12_t0.length >= 1 && "piecewise" === _s12_t0[0]) {
            for (s12_pairs = _s12_t0.slice(1), s12_f = [ ".unit" ], s12_j = s12_pairs.length - 1; s12_j >= 0; ) s12_f = [ ".if", s12_ex(s12_pairs[s12_j][0], s12_env), s12_ex(s12_pairs[s12_j][1], s12_env), s12_f ], 
            s12_j -= 1;
            return s12_f;
        }
        return void 0;
    }), s2_Assign = function(s13_ex, s13_left, s13_right, s13_env, s13_locallyQ) {
        var s13_ex, s13_left, s13_right, s13_env, s13_locallyQ, s13_any, s13_callee, s13_paras, s13_id, s13_SyntaxError, _s13_t0;
        if (_s13_t0 = s13_left, s13_id = _s13_t0, s1_atom(s13_id)) return s13_locallyQ ? [ ".set", s13_ex([ ".local", s13_id ], s13_env), s13_ex(s13_right, s13_env) ] : [ ".set", s13_ex(s13_left, s13_env), s13_ex(s13_right, s13_env) ];
        if (_s13_t0 instanceof Array && _s13_t0.length >= 1) return s13_callee = _s13_t0[0], 
        s13_paras = _s13_t0.slice(1), s1_prim(s13_callee) ? [ ".set", s13_ex(s13_left, s13_env), s13_ex(s13_right, s13_env) ] : s1_atom(s13_callee) && s13_locallyQ ? [ ".set", s13_ex([ ".local", s13_callee ], s13_env), s13_ex([ ".lambda", [].concat(s13_paras), s13_right ], s13_env) ] : [ ".set", s13_ex(s13_callee, s13_env), s13_ex([ ".lambda", [].concat(s13_paras), s13_right ], s13_env) ];
        throw s13_any = _s13_t0, new s13_SyntaxError("Invalid Assignment");
    }, s2_externs.macros.put("define", function(s14_ex, s14_form, s14_env) {
        var s14_ex, s14_form, s14_env, s14_any, s14_op, s14_left, s14_right, s14_SyntaxError, _s14_t0, _s14_t1, _s14_t3;
        if (_s14_t0 = s14_form, _s14_t0 instanceof Array && 3 === _s14_t0.length) return s14_op = _s14_t0[0], 
        s14_left = _s14_t0[1], s14_right = _s14_t0[2], s2_Assign(s14_ex, s14_left, s14_right, s14_env, !0);
        if (_s14_t1 = !1, _s14_t0 instanceof Array && 2 === _s14_t0.length ? (s14_op = _s14_t0[0], 
        s14_left = _s14_t0[1], _s14_t1 = s1_atom(s14_left) ? !0 : !1, _s14_t3 = _s14_t1 = !1) : _s14_t3 = void 0, 
        _s14_t1) return [ ".local", s14_left ];
        throw s14_any = _s14_t0, new s14_SyntaxError("Invalid Assignment");
    }), s2_externs.macros.put("local", s2_externs.macros.get("define")), s2_externs.macros.put("set", function(s15_ex, s15_form, s15_env) {
        var s15_ex, s15_form, s15_env, s15_any, s15_op, s15_left, s15_right, s15_SyntaxError, _s15_t0;
        if (_s15_t0 = s15_form, _s15_t0 instanceof Array && 3 === _s15_t0.length) return s15_op = _s15_t0[0], 
        s15_left = _s15_t0[1], s15_right = _s15_t0[2], s2_Assign(s15_ex, s15_left, s15_right, s15_env, !1);
        throw s15_any = _s15_t0, new s15_SyntaxError("Invalid Assignment");
    }), s2_externs.macros.put("inc", function(s16_ex, s16_form, s16_env) {
        var s16_ex, s16_form, s16_env;
        return [ ".set", s16_ex(s16_form[1], s16_env), [ "+", s16_ex(s16_form[1], s16_env), [ ".quote", 1 ] ] ];
    }), s2_externs.macros.put("dec", function(s17_ex, s17_form, s17_env) {
        var s17_ex, s17_form, s17_env;
        return [ ".set", s17_ex(s17_form[1], s17_env), [ "-", s17_ex(s17_form[1], s17_env), [ ".quote", 1 ] ] ];
    }), s2_externs.macros.put("for", function(s18_ex, s18_form, s18_env) {
        var s18_ex, s18_form, s18_env, s18_init, s18_test, s18_step, s18_body, _s18_t0;
        return _s18_t0 = s18_form, _s18_t0 instanceof Array && 5 === _s18_t0.length && "for" === _s18_t0[0] ? (s18_init = _s18_t0[1], 
        s18_test = _s18_t0[2], s18_step = _s18_t0[3], s18_body = _s18_t0[4], [ ".begin", s18_ex(s18_init, s18_env), [ ".while", s18_ex(s18_test, s18_env), [ ".begin", s18_ex(s18_body, s18_env), s18_ex(s18_step, s18_env) ] ] ]) : void 0;
    }), s2_externs.macros.put("foreach", function(s19_ex, s19_form, s19_env) {
        var s19_ex, s19_form, s19_env, s19_varid, s19_range, s19_body, s19_tR, s19_t, _s19_t0, _s19_t1, _s19_t2;
        return _s19_t0 = s19_form, _s19_t1 = !1, _s19_t0 instanceof Array && 4 === _s19_t0.length && "foreach" === _s19_t0[0] ? (s19_varid = _s19_t0[1], 
        s19_range = _s19_t0[2], s19_body = _s19_t0[3], _s19_t1 = s1_atom(s19_varid) ? !0 : !1, 
        _s19_t2 = _s19_t1 = !1) : _s19_t2 = void 0, _s19_t1 ? (s19_env.declare(s19_varid), 
        s19_tR = s19_env.newt(), s19_t = s19_env.newt(), [ ".begin", [ ".set", s19_tR, s19_ex(s19_range, s19_env) ], [ ".while", [ "!", [ ".", [ ".set", s19_t, [ [ ".", s19_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", [ ".set", s19_varid, [ ".", s19_t, [ ".quote", "value" ] ] ], s19_ex(s19_body, s19_env) ] ] ]) : void 0;
    }), s2_externs.macros.put("this", [ ".thisp" ]), s2_externs.macros.put("arguments", [ ".argsp" ]), 
    s2_externs.macros.put("nothing", [ ".unit" ]), s2_externs.macros.put("undefined", [ ".unit" ]), 
    s2_externs.macros.put("null", [ ".quote", null ]), s2_externs.macros.put("true", [ ".quote", !0 ]), 
    s2_externs.macros.put("false", [ ".quote", !1 ]), s2_boole = function(s20_x) {
        var s20_x;
        return !!s20_x;
    }, s2_externs.macros.put("match", function(s21_ex, s21_form, s21_env) {
        var s21_ex, s21_form, s21_env, s21_pairs, s21_t, s21_matchQ, s21_f, s21_j, s21_any, s21_pattern, s21_guard, s21_body, s21_pat, s21_cond, s21_tc, _s21_t0, _s21_t1, _s21_t2, _s21_t3, _s21_t4, _s21_t5, _s21_t6;
        for (s21_pairs = s21_form.slice(2), s21_t = s21_env.newt(), s21_matchQ = function(s22_pattern) {
            var s22_pattern, s22_callee, s22_subpatterns, s22_ms, s22_t, s22_final, s22_whatever, s22_x, s22_id, _s22_t0;
            return _s22_t0 = s22_pattern, s22_id = _s22_t0, s1_atom(s22_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s24_x) {
                    var s24_x;
                    return [ ".set", s21_ex([ ".local", s22_pattern ], s21_env), s24_x ];
                }
            } : _s22_t0 instanceof Array && 2 === _s22_t0.length && ".quote" === _s22_t0[0] ? (s22_x = _s22_t0[1], 
            {
                whether: function(s25_x) {
                    var s25_x;
                    return [ "===", s22_pattern, s25_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s22_t0 instanceof Array && _s22_t0.length >= 1 && "." === _s22_t0[0] ? (s22_whatever = _s22_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s28_x) {
                    var s28_x;
                    return [ ".set", s21_ex(s22_pattern, s21_env), s28_x ];
                }
            }) : _s22_t0 instanceof Array && _s22_t0.length >= 1 && ".list" === _s22_t0[0] ? (s22_subpatterns = _s22_t0.slice(1), 
            s22_ms = s22_subpatterns.map(s21_matchQ), {
                whether: function(s29_x) {
                    var s29_x;
                    return [ "&&", [ ".is", s29_x, s2_externs.use("Array") ], [ "===", [ ".", s29_x, [ ".quote", "length" ] ], [ ".quote", s22_ms.length ] ] ].concat(s22_ms.map(function(s30_p, s30_j) {
                        var s30_p, s30_j;
                        return s30_p.whether([ ".", s29_x, [ ".quote", s30_j ] ]);
                    })).filter(s2_boole);
                },
                assign: function(s31_x) {
                    var s31_x;
                    return [ ".begin" ].concat(s22_ms.map(function(s32_p, s32_j) {
                        var s32_p, s32_j;
                        return s32_p.assign([ ".", s31_x, [ ".quote", s32_j ] ]);
                    }));
                }
            }) : _s22_t0 instanceof Array && _s22_t0.length >= 1 && ".conslist" === _s22_t0[0] ? (s22_subpatterns = _s22_t0.slice(1), 
            s22_ms = s22_pattern.slice(1, -1).map(s21_matchQ), s22_final = s21_matchQ(s22_pattern[s22_pattern.length - 1]), 
            {
                whether: function(s33_x) {
                    var s33_x;
                    return [ "&&", [ ".is", s33_x, s2_externs.use("Array") ], [ ">=", [ ".", s33_x, [ ".quote", "length" ] ], [ ".quote", s22_ms.length ] ] ].concat(s22_ms.map(function(s34_p, s34_j) {
                        var s34_p, s34_j;
                        return s34_p.whether([ ".", s33_x, [ ".quote", s34_j ] ]);
                    }).concat([ s22_final.whether([ [ ".", s33_x, [ ".quote", "slice" ] ], [ ".quote", s21_j ] ]) ])).filter(s2_boole);
                },
                assign: function(s35_x) {
                    var s35_x;
                    return [ ".begin" ].concat(s22_ms.map(function(s36_p, s36_j) {
                        var s36_p, s36_j;
                        return s36_p.assign([ ".", s35_x, [ ".quote", s36_j ] ]);
                    })).concat([ s22_final.assign([ [ ".", s35_x, [ ".quote", "slice" ] ], [ ".quote", s22_ms.length ] ]) ]);
                }
            }) : _s22_t0 instanceof Array && _s22_t0.length >= 1 ? (s22_callee = _s22_t0[0], 
            s22_subpatterns = _s22_t0.slice(1), s22_ms = s22_subpatterns.map(s21_matchQ), s22_t = s21_env.newt(), 
            {
                whether: function(s37_x) {
                    var s37_x;
                    return [ "&&", [ ".set", s22_t, [ [ ".", s21_ex(s22_callee, s21_env), [ ".quote", "unapply" ] ], s37_x, [ ".quote", s22_ms.length ] ] ] ].concat(s22_ms.map(function(s38_p, s38_j) {
                        var s38_p, s38_j;
                        return s38_p.whether([ ".", s22_t, [ ".quote", s38_j ] ]);
                    })).filter(s2_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s22_ms.map(function(s40_p, s40_j) {
                        var s40_p, s40_j;
                        return s40_p.assign([ ".", s22_t, [ ".quote", s40_j ] ]);
                    }));
                }
            }) : void 0;
        }, s21_f = [ ".unit" ], s21_j = s21_pairs.length - 1; s21_j >= 0; ) _s21_t0 = s21_pairs[s21_j], 
        _s21_t0 instanceof Array && 2 === _s21_t0.length ? (s21_pattern = _s21_t0[0], s21_body = _s21_t0[1], 
        s21_pat = s21_matchQ(s21_pattern), s21_cond = s21_pat.whether(s21_t), s21_cond ? _s21_t2 = [ ".if", s21_cond, [ ".begin", s21_pat.assign(s21_t), s21_ex(s21_body, s21_env) ], s21_f ] : (_s21_t3 = [ ".begin", s21_pat.assign(s21_t), s21_ex(s21_body, s21_env) ], 
        _s21_t2 = _s21_t3), _s21_t1 = _s21_t2) : (_s21_t0 instanceof Array && 3 === _s21_t0.length ? (s21_pattern = _s21_t0[0], 
        s21_guard = _s21_t0[1], s21_body = _s21_t0[2], s21_pat = s21_matchQ(s21_pattern), 
        s21_cond = s21_pat.whether(s21_t), s21_cond ? (s21_tc = s21_env.newt(), _s21_t5 = [ ".begin", [ ".set", s21_tc, [ ".quote", !1 ] ], [ ".if", s21_cond, [ ".begin", s21_pat.assign(s21_t), [ ".if", s21_ex(s21_guard, s21_env), [ ".set", s21_tc, [ ".quote", !0 ] ], [ ".set", s21_tc, [ ".quote", !1 ] ] ], [ ".set", s21_tc, [ ".quote", !1 ] ] ] ], [ ".if", s21_tc, s21_ex(s21_body, s21_env), s21_f ] ]) : (_s21_t6 = [ ".begin", s21_pat.assign(s21_t), [ ".if", s21_ex(s21_guard, s21_env), s21_ex(s21_body, s21_env), s21_f ] ], 
        _s21_t5 = _s21_t6), _s21_t4 = _s21_t5) : (s21_any = _s21_t0, _s21_t4 = s21_f), _s21_t1 = _s21_t4), 
        s21_f = _s21_t1, s21_j -= 1;
        return [ ".begin", [ ".set", s21_t, s21_ex(s21_form[1], s21_env) ], s21_f ];
    }), s2_externs.macros.put("regex", function(s41_ex, s41_form) {
        var s41_form, s41_args, s41_s, s41_flag, _s41_t0;
        return _s41_t0 = s41_form, _s41_t0 instanceof Array && 2 === _s41_t0.length && "regex" === _s41_t0[0] && _s41_t0[1] instanceof Array && 2 === _s41_t0[1].length && ".quote" === _s41_t0[1][0] ? (s41_s = _s41_t0[1][1], 
        [ ".quote", new RegExp(s41_s) ]) : _s41_t0 instanceof Array && 3 === _s41_t0.length && "regex" === _s41_t0[0] && _s41_t0[1] instanceof Array && 2 === _s41_t0[1].length && ".quote" === _s41_t0[1][0] && _s41_t0[2] instanceof Array && 2 === _s41_t0[2].length && ".quote" === _s41_t0[2][0] ? (s41_s = _s41_t0[1][1], 
        s41_flag = _s41_t0[2][1], [ ".quote", new RegExp(s41_s, s41_flag) ]) : _s41_t0 instanceof Array && _s41_t0.length >= 1 && "regex" === _s41_t0[0] ? (s41_args = _s41_t0.slice(1), 
        [ ".new", s2_externs.use("RegExp") ].concat(s41_args)) : void 0;
    }), s2_externs;
}, exports.Create = s1_Create;