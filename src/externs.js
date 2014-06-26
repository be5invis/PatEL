var s2_patrisika, s2_atom, s2_Scope, s2_prim, s2_Create;

s2_patrisika = require("patrisika"), s2_atom = require("../commons/match").atom, 
s2_Scope = require("patrisika").Scope, s2_prim = require("../commons/match").prim, 
s2_Create = function() {
    var s3_externs, s3_operatorRename, s3_Assign, s3_boole;
    return s3_externs = s2_patrisika.DefaultExterns(), s3_externs.castName = function(s4_name) {
        var s4_name;
        return s4_name;
    }, s3_externs.declare("require"), s3_externs.declare("exports"), s3_externs.declare("Error"), 
    s3_operatorRename = function(s5_op) {
        var s5_op;
        return function(s6_ex, s6_form, s6_env) {
            var s6_ex, s6_form, s6_env;
            return s6_ex([ s5_op ].concat(s6_form.slice(1)), s6_env);
        };
    }, s3_externs.macros.put("lambda", s3_operatorRename(".lambda")), s3_externs.macros.put("begin", s3_operatorRename(".begin")), 
    s3_externs.macros.put("if", s3_operatorRename(".if")), s3_externs.macros.put("while", s3_operatorRename(".while")), 
    s3_externs.macros.put("try", s3_operatorRename(".try")), s3_externs.macros.put("is", s3_operatorRename(".is")), 
    s3_externs.macros.put("<@", s3_operatorRename(".is")), s3_externs.macros.put("new", s3_operatorRename(".new")), 
    s3_externs.macros.put("this", s3_operatorRename(".thisp")), s3_externs.macros.put("arguments", s3_operatorRename(".argsp")), 
    s3_externs.macros.put("and", s3_operatorRename("&&")), s3_externs.macros.put("or", s3_operatorRename("||")), 
    s3_externs.macros.put("not", s3_operatorRename("!")), s3_externs.macros.put("return", s3_operatorRename(".return")), 
    s3_externs.macros.put("yield", s3_operatorRename(".yield")), s3_externs.macros.put("throw", s3_operatorRename(".throw")), 
    s3_externs.macros.put("list", s3_operatorRename(".list")), s3_externs.macros.put(".conslist", function(s7_ex, s7_form, s7_env) {
        var s7_ex, s7_form, s7_env;
        return [ [ ".", s7_ex([ ".list" ].concat(s7_form.slice(1, -1)), s7_env), [ ".quote", "concat" ] ], s7_ex(s7_form[s7_form.length - 1], s7_env) ];
    }), s3_externs.macros.put("let", function(s8_ex, s8_form, s8_env) {
        var s8_ex, s8_form, s8_env, s8_pairs, s8_args, s8_paras;
        return s8_pairs = s8_form.slice(1, -1), s8_args = s8_pairs.map(function(s9_pair) {
            var s9_pair;
            return s9_pair[0];
        }), s8_paras = s8_pairs.map(function(s10_pair) {
            var s10_pair;
            return s10_pair[1];
        }), s8_ex([ ".beta", s8_args, s8_form[s8_form.length - 1] ].concat(s8_paras), s8_env);
    }), s3_externs.macros.put("object", function(s11_ex, s11_form, s11_env) {
        var s11_ex, s11_form, s11_env, s11_pairs;
        return s11_pairs = s11_form.slice(1).map(function(s12_pair) {
            var s12_pair;
            return [ s12_pair[0], s11_ex(s12_pair[1], s11_env) ];
        }), [ ".hash" ].concat(s11_pairs);
    }), s3_externs.macros.put("piecewise", function(s13_ex, s13_form, s13_env) {
        var s13_ex, s13_form, s13_env, s13_pairs, s13_f, s13_j, _s13_t0;
        if (_s13_t0 = s13_form, _s13_t0 instanceof Array && _s13_t0.length >= 1 && "piecewise" === _s13_t0[0]) {
            for (s13_pairs = _s13_t0.slice(1), s13_f = [ ".unit" ], s13_j = s13_pairs.length - 1; s13_j >= 0; ) s13_f = [ ".if", s13_ex(s13_pairs[s13_j][0], s13_env), s13_ex(s13_pairs[s13_j][1], s13_env), s13_f ], 
            s13_j -= 1;
            return s13_f;
        }
        return void 0;
    }), s3_Assign = function(s14_ex, s14_left, s14_right, s14_env, s14_locallyQ) {
        var s14_ex, s14_left, s14_right, s14_env, s14_locallyQ, s14_any, s14_callee, s14_paras, s14_id, s14_SyntaxError, _s14_t0;
        if (_s14_t0 = s14_left, s14_id = _s14_t0, s2_atom(s14_id)) return s14_locallyQ ? [ ".set", s14_ex([ ".local", s14_id ], s14_env), s14_ex(s14_right, s14_env) ] : [ ".set", s14_ex(s14_left, s14_env), s14_ex(s14_right, s14_env) ];
        if (_s14_t0 instanceof Array && _s14_t0.length >= 1) return s14_callee = _s14_t0[0], 
        s14_paras = _s14_t0.slice(1), s2_prim(s14_callee) ? [ ".set", s14_ex(s14_left, s14_env), s14_ex(s14_right, s14_env) ] : s2_atom(s14_callee) && s14_locallyQ ? [ ".set", s14_ex([ ".local", s14_callee ], s14_env), s14_ex([ ".lambda", [].concat(s14_paras), s14_right ], s14_env) ] : [ ".set", s14_ex(s14_callee, s14_env), s14_ex([ ".lambda", [].concat(s14_paras), s14_right ], s14_env) ];
        throw s14_any = _s14_t0, new s14_SyntaxError("Invalid Assignment");
    }, s3_externs.macros.put("define", function(s15_ex, s15_form, s15_env) {
        var s15_ex, s15_form, s15_env, s15_any, s15_op, s15_left, s15_right, s15_SyntaxError, _s15_t0, _s15_t1, _s15_t3;
        if (_s15_t0 = s15_form, _s15_t0 instanceof Array && 3 === _s15_t0.length) return s15_op = _s15_t0[0], 
        s15_left = _s15_t0[1], s15_right = _s15_t0[2], s3_Assign(s15_ex, s15_left, s15_right, s15_env, !0);
        if (_s15_t1 = !1, _s15_t0 instanceof Array && 2 === _s15_t0.length ? (s15_op = _s15_t0[0], 
        s15_left = _s15_t0[1], _s15_t1 = s2_atom(s15_left) ? !0 : !1, _s15_t3 = _s15_t1 = !1) : _s15_t3 = void 0, 
        _s15_t1) return [ ".local", s15_left ];
        throw s15_any = _s15_t0, new s15_SyntaxError("Invalid Assignment");
    }), s3_externs.macros.put("local", s3_externs.macros.get("define")), s3_externs.macros.put("set", function(s16_ex, s16_form, s16_env) {
        var s16_ex, s16_form, s16_env, s16_any, s16_op, s16_left, s16_right, s16_SyntaxError, _s16_t0;
        if (_s16_t0 = s16_form, _s16_t0 instanceof Array && 3 === _s16_t0.length) return s16_op = _s16_t0[0], 
        s16_left = _s16_t0[1], s16_right = _s16_t0[2], s3_Assign(s16_ex, s16_left, s16_right, s16_env, !1);
        throw s16_any = _s16_t0, new s16_SyntaxError("Invalid Assignment");
    }), s3_externs.macros.put("inc", function(s17_ex, s17_form, s17_env) {
        var s17_ex, s17_form, s17_env;
        return [ ".set", s17_ex(s17_form[1], s17_env), [ "+", s17_ex(s17_form[1], s17_env), [ ".quote", 1 ] ] ];
    }), s3_externs.macros.put("dec", function(s18_ex, s18_form, s18_env) {
        var s18_ex, s18_form, s18_env;
        return [ ".set", s18_ex(s18_form[1], s18_env), [ "-", s18_ex(s18_form[1], s18_env), [ ".quote", 1 ] ] ];
    }), s3_externs.macros.put("for", function(s19_ex, s19_form, s19_env) {
        var s19_ex, s19_form, s19_env, s19_init, s19_test, s19_step, s19_body, _s19_t0;
        return _s19_t0 = s19_form, _s19_t0 instanceof Array && 5 === _s19_t0.length && "for" === _s19_t0[0] ? (s19_init = _s19_t0[1], 
        s19_test = _s19_t0[2], s19_step = _s19_t0[3], s19_body = _s19_t0[4], [ ".begin", s19_ex(s19_init, s19_env), [ ".while", s19_ex(s19_test, s19_env), [ ".begin", s19_ex(s19_body, s19_env), s19_ex(s19_step, s19_env) ] ] ]) : void 0;
    }), s3_externs.macros.put("foreach", function(s20_ex, s20_form, s20_env) {
        var s20_ex, s20_form, s20_env, s20_varid, s20_range, s20_body, s20_tR, s20_t, _s20_t0, _s20_t1, _s20_t2;
        return _s20_t0 = s20_form, _s20_t1 = !1, _s20_t0 instanceof Array && 4 === _s20_t0.length && "foreach" === _s20_t0[0] ? (s20_varid = _s20_t0[1], 
        s20_range = _s20_t0[2], s20_body = _s20_t0[3], _s20_t1 = s2_atom(s20_varid) ? !0 : !1, 
        _s20_t2 = _s20_t1 = !1) : _s20_t2 = void 0, _s20_t1 ? (s20_env.declare(s20_varid), 
        s20_tR = s20_env.newt(), s20_t = s20_env.newt(), [ ".begin", [ ".set", s20_tR, s20_ex(s20_range, s20_env) ], [ ".while", [ "!", [ ".", [ ".set", s20_t, [ [ ".", s20_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", [ ".set", s20_varid, [ ".", s20_t, [ ".quote", "value" ] ] ], s20_ex(s20_body, s20_env) ] ] ]) : void 0;
    }), s3_externs.macros.put("this", [ ".thisp" ]), s3_externs.macros.put("arguments", [ ".argsp" ]), 
    s3_externs.macros.put("nothing", [ ".unit" ]), s3_externs.macros.put("undefined", [ ".unit" ]), 
    s3_externs.macros.put("null", [ ".quote", null ]), s3_externs.macros.put("true", [ ".quote", !0 ]), 
    s3_externs.macros.put("false", [ ".quote", !1 ]), s3_boole = function(s21_x) {
        var s21_x;
        return !!s21_x;
    }, s3_externs.macros.put("match", function(s22_ex, s22_form, s22_env) {
        var s22_ex, s22_form, s22_env, s22_pairs, s22_t, s22_matchQ, s22_f, s22_j, s22_any, s22_pattern, s22_guard, s22_body, s22_pat, s22_cond, s22_tc, _s22_t0, _s22_t1, _s22_t2, _s22_t3, _s22_t4, _s22_t5, _s22_t6;
        for (s22_pairs = s22_form.slice(2), s22_t = s22_env.newt(), s22_matchQ = function(s23_pattern) {
            var s23_pattern, s23_callee, s23_subpatterns, s23_ms, s23_t, s23_final, s23_whatever, s23_x, s23_id, _s23_t0;
            return _s23_t0 = s23_pattern, s23_id = _s23_t0, s2_atom(s23_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s41_x) {
                    var s41_x;
                    return [ ".set", s22_ex([ ".local", s23_pattern ], s22_env), s41_x ];
                }
            } : _s23_t0 instanceof Array && 2 === _s23_t0.length && ".quote" === _s23_t0[0] ? (s23_x = _s23_t0[1], 
            {
                whether: function(s38_x) {
                    var s38_x;
                    return [ "===", s23_pattern, s38_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s23_t0 instanceof Array && _s23_t0.length >= 1 && "." === _s23_t0[0] ? (s23_whatever = _s23_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s37_x) {
                    var s37_x;
                    return [ ".set", s22_ex(s23_pattern, s22_env), s37_x ];
                }
            }) : _s23_t0 instanceof Array && _s23_t0.length >= 1 && ".list" === _s23_t0[0] ? (s23_subpatterns = _s23_t0.slice(1), 
            s23_ms = s23_subpatterns.map(s22_matchQ), {
                whether: function(s32_x) {
                    var s32_x;
                    return [ "&&", [ ".is", s32_x, s3_externs.use("Array") ], [ "===", [ ".", s32_x, [ ".quote", "length" ] ], [ ".quote", s23_ms.length ] ] ].concat(s23_ms.map(function(s33_p, s33_j) {
                        var s33_p, s33_j;
                        return s33_p.whether([ ".", s32_x, [ ".quote", s33_j ] ]);
                    })).filter(s3_boole);
                },
                assign: function(s34_x) {
                    var s34_x;
                    return [ ".begin" ].concat(s23_ms.map(function(s35_p, s35_j) {
                        var s35_p, s35_j;
                        return s35_p.assign([ ".", s34_x, [ ".quote", s35_j ] ]);
                    }));
                }
            }) : _s23_t0 instanceof Array && _s23_t0.length >= 1 && ".conslist" === _s23_t0[0] ? (s23_subpatterns = _s23_t0.slice(1), 
            s23_ms = s23_pattern.slice(1, -1).map(s22_matchQ), s23_final = s22_matchQ(s23_pattern[s23_pattern.length - 1]), 
            {
                whether: function(s28_x) {
                    var s28_x;
                    return [ "&&", [ ".is", s28_x, s3_externs.use("Array") ], [ ">=", [ ".", s28_x, [ ".quote", "length" ] ], [ ".quote", s23_ms.length ] ] ].concat(s23_ms.map(function(s29_p, s29_j) {
                        var s29_p, s29_j;
                        return s29_p.whether([ ".", s28_x, [ ".quote", s29_j ] ]);
                    }).concat([ s23_final.whether([ [ ".", s28_x, [ ".quote", "slice" ] ], [ ".quote", s22_j ] ]) ])).filter(s3_boole);
                },
                assign: function(s30_x) {
                    var s30_x;
                    return [ ".begin" ].concat(s23_ms.map(function(s31_p, s31_j) {
                        var s31_p, s31_j;
                        return s31_p.assign([ ".", s30_x, [ ".quote", s31_j ] ]);
                    })).concat([ s23_final.assign([ [ ".", s30_x, [ ".quote", "slice" ] ], [ ".quote", s23_ms.length ] ]) ]);
                }
            }) : _s23_t0 instanceof Array && _s23_t0.length >= 1 ? (s23_callee = _s23_t0[0], 
            s23_subpatterns = _s23_t0.slice(1), s23_ms = s23_subpatterns.map(s22_matchQ), s23_t = s22_env.newt(), 
            {
                whether: function(s24_x) {
                    var s24_x;
                    return [ "&&", [ ".set", s23_t, [ [ ".", s22_ex(s23_callee, s22_env), [ ".quote", "unapply" ] ], s24_x, [ ".quote", s23_ms.length ] ] ] ].concat(s23_ms.map(function(s25_p, s25_j) {
                        var s25_p, s25_j;
                        return s25_p.whether([ ".", s23_t, [ ".quote", s25_j ] ]);
                    })).filter(s3_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s23_ms.map(function(s27_p, s27_j) {
                        var s27_p, s27_j;
                        return s27_p.assign([ ".", s23_t, [ ".quote", s27_j ] ]);
                    }));
                }
            }) : void 0;
        }, s22_f = [ ".unit" ], s22_j = s22_pairs.length - 1; s22_j >= 0; ) _s22_t0 = s22_pairs[s22_j], 
        _s22_t0 instanceof Array && 2 === _s22_t0.length ? (s22_pattern = _s22_t0[0], s22_body = _s22_t0[1], 
        s22_pat = s22_matchQ(s22_pattern), s22_cond = s22_pat.whether(s22_t), s22_cond ? _s22_t2 = [ ".if", s22_cond, [ ".begin", s22_pat.assign(s22_t), s22_ex(s22_body, s22_env) ], s22_f ] : (_s22_t3 = [ ".begin", s22_pat.assign(s22_t), s22_ex(s22_body, s22_env) ], 
        _s22_t2 = _s22_t3), _s22_t1 = _s22_t2) : (_s22_t0 instanceof Array && 3 === _s22_t0.length ? (s22_pattern = _s22_t0[0], 
        s22_guard = _s22_t0[1], s22_body = _s22_t0[2], s22_pat = s22_matchQ(s22_pattern), 
        s22_cond = s22_pat.whether(s22_t), s22_cond ? (s22_tc = s22_env.newt(), _s22_t5 = [ ".begin", [ ".set", s22_tc, [ ".quote", !1 ] ], [ ".if", s22_cond, [ ".begin", s22_pat.assign(s22_t), [ ".if", s22_ex(s22_guard, s22_env), [ ".set", s22_tc, [ ".quote", !0 ] ], [ ".set", s22_tc, [ ".quote", !1 ] ] ], [ ".set", s22_tc, [ ".quote", !1 ] ] ] ], [ ".if", s22_tc, s22_ex(s22_body, s22_env), s22_f ] ]) : (_s22_t6 = [ ".begin", s22_pat.assign(s22_t), [ ".if", s22_ex(s22_guard, s22_env), s22_ex(s22_body, s22_env), s22_f ] ], 
        _s22_t5 = _s22_t6), _s22_t4 = _s22_t5) : (s22_any = _s22_t0, _s22_t4 = s22_f), _s22_t1 = _s22_t4), 
        s22_f = _s22_t1, s22_j -= 1;
        return [ ".begin", [ ".set", s22_t, s22_ex(s22_form[1], s22_env) ], s22_f ];
    }), s3_externs.macros.put("regex", function(s42_ex, s42_form) {
        var s42_form, s42_args, s42_s, s42_flag, _s42_t0;
        return _s42_t0 = s42_form, _s42_t0 instanceof Array && 2 === _s42_t0.length && "regex" === _s42_t0[0] && _s42_t0[1] instanceof Array && 2 === _s42_t0[1].length && ".quote" === _s42_t0[1][0] ? (s42_s = _s42_t0[1][1], 
        [ ".quote", new RegExp(s42_s) ]) : _s42_t0 instanceof Array && 3 === _s42_t0.length && "regex" === _s42_t0[0] && _s42_t0[1] instanceof Array && 2 === _s42_t0[1].length && ".quote" === _s42_t0[1][0] && _s42_t0[2] instanceof Array && 2 === _s42_t0[2].length && ".quote" === _s42_t0[2][0] ? (s42_s = _s42_t0[1][1], 
        s42_flag = _s42_t0[2][1], [ ".quote", new RegExp(s42_s, s42_flag) ]) : _s42_t0 instanceof Array && _s42_t0.length >= 1 && "regex" === _s42_t0[0] ? (s42_args = _s42_t0.slice(1), 
        [ ".new", s3_externs.use("RegExp") ].concat(s42_args)) : void 0;
    }), s3_externs;
}, exports.Create = s2_Create;