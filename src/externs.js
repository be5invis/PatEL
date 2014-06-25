{
    var s3_patrisika, s3_atom, s3_Scope, s3_prim, s3_Create;
    s3_patrisika = require("patrisika");
    s3_atom = require("../commons/match")["atom"];
    s3_Scope = require("patrisika")["Scope"];
    s3_prim = require("../commons/match")["prim"];
    s3_Create = function() {
        var s4_externs, s4_operatorRename, s4_Assign, s4_boole;
        s4_externs = s3_patrisika["DefaultExterns"]();
        s4_externs["castName"] = function(s5_name) {
            var s5_name;
            return s5_name;
        };
        s4_externs["declare"]("require");
        s4_externs["declare"]("exports");
        s4_externs["declare"]("Error");
        s4_operatorRename = function(s6_op) {
            var s6_op;
            return function(s7_ex, s7_form, s7_env) {
                var s7_ex, s7_form, s7_env;
                return s7_ex([ s6_op ]["concat"](s7_form["slice"](1)), s7_env);
            };
        };
        s4_externs["macros"]["put"]("lambda", s4_operatorRename(".lambda"));
        s4_externs["macros"]["put"]("begin", s4_operatorRename(".begin"));
        s4_externs["macros"]["put"]("if", s4_operatorRename(".if"));
        s4_externs["macros"]["put"]("while", s4_operatorRename(".while"));
        s4_externs["macros"]["put"]("try", s4_operatorRename(".try"));
        s4_externs["macros"]["put"]("is", s4_operatorRename(".is"));
        s4_externs["macros"]["put"]("<@", s4_operatorRename(".is"));
        s4_externs["macros"]["put"]("new", s4_operatorRename(".new"));
        s4_externs["macros"]["put"]("this", s4_operatorRename(".thisp"));
        s4_externs["macros"]["put"]("arguments", s4_operatorRename(".argsp"));
        s4_externs["macros"]["put"]("and", s4_operatorRename("&&"));
        s4_externs["macros"]["put"]("or", s4_operatorRename("||"));
        s4_externs["macros"]["put"]("not", s4_operatorRename("!"));
        s4_externs["macros"]["put"]("return", s4_operatorRename(".return"));
        s4_externs["macros"]["put"]("yield", s4_operatorRename(".yield"));
        s4_externs["macros"]["put"]("throw", s4_operatorRename(".throw"));
        s4_externs["macros"]["put"]("list", s4_operatorRename(".list"));
        s4_externs["macros"]["put"](".conslist", function(s8_ex, s8_form, s8_env) {
            var s8_ex, s8_form, s8_env;
            return [ [ ".", s8_ex([ ".list" ]["concat"](s8_form["slice"](1, 0 - 1)), s8_env), [ ".quote", "concat" ] ], s8_ex(s8_form[s8_form["length"] - 1], s8_env) ];
        });
        s4_externs["macros"]["put"]("let", function(s9_ex, s9_form, s9_env) {
            var s9_ex, s9_form, s9_env, s9_pairs, s9_args, s9_paras;
            s9_pairs = s9_form["slice"](1, 0 - 1);
            s9_args = s9_pairs["map"](function(s10_pair) {
                var s10_pair;
                return s10_pair[0];
            });
            s9_paras = s9_pairs["map"](function(s11_pair) {
                var s11_pair;
                return s11_pair[1];
            });
            return s9_ex([ ".beta", s9_args, s9_form[s9_form["length"] - 1] ]["concat"](s9_paras), s9_env);
        });
        s4_externs["macros"]["put"]("object", function(s12_ex, s12_form, s12_env) {
            var s12_ex, s12_form, s12_env, s12_pairs;
            s12_pairs = s12_form["slice"](1)["map"](function(s13_pair) {
                var s13_pair;
                return [ s13_pair[0], s12_ex(s13_pair[1], s12_env) ];
            });
            return [ ".hash" ]["concat"](s12_pairs);
        });
        s4_externs["macros"]["put"]("piecewise", function(s14_ex, s14_form, s14_env) {
            var s14_ex, s14_form, s14_env, s14_pairs, s14_f, s14_j, _s14_t0, _s14_t1;
            _s14_t0 = s14_form;
            if (_s14_t0 instanceof Array && _s14_t0["length"] >= 1 && "piecewise" === _s14_t0[0]) {
                s14_pairs = _s14_t0["slice"](1);
                s14_f = [ ".unit" ];
                s14_j = s14_pairs["length"] - 1;
                while (s14_j >= 0) {
                    s14_f = [ ".if", s14_ex(s14_pairs[s14_j][0], s14_env), s14_ex(s14_pairs[s14_j][1], s14_env), s14_f ];
                    s14_j = s14_j - 1;
                    void 0;
                }
                return s14_f;
            } else return void 0;
        });
        s4_Assign = function(s15_ex, s15_left, s15_right, s15_env, s15_locallyQ) {
            var s15_ex, s15_left, s15_right, s15_env, s15_locallyQ, s15_any, s15_callee, s15_paras, s15_id, s15_SyntaxError, _s15_t0, _s15_t1, _s15_t2, _s15_t3, _s15_t4, _s15_t5, _s15_t6, _s15_t7, _s15_t8, _s15_t9;
            _s15_t0 = s15_left;
            s15_id = _s15_t0;
            if (s3_atom(s15_id)) if (s15_locallyQ) return [ ".set", s15_ex([ ".local", s15_id ], s15_env), s15_ex(s15_right, s15_env) ]; else if (true) return [ ".set", s15_ex(s15_left, s15_env), s15_ex(s15_right, s15_env) ]; else return void 0; else if (_s15_t0 instanceof Array && _s15_t0["length"] >= 1) {
                s15_callee = _s15_t0[0];
                s15_paras = _s15_t0["slice"](1);
                if (s3_prim(s15_callee)) return [ ".set", s15_ex(s15_left, s15_env), s15_ex(s15_right, s15_env) ]; else if (s3_atom(s15_callee)) if (s15_locallyQ) return [ ".set", s15_ex([ ".local", s15_callee ], s15_env), s15_ex([ ".lambda", []["concat"](s15_paras), s15_right ], s15_env) ]; else if (true) return [ ".set", s15_ex(s15_callee, s15_env), s15_ex([ ".lambda", []["concat"](s15_paras), s15_right ], s15_env) ]; else return void 0; else if (true) return [ ".set", s15_ex(s15_callee, s15_env), s15_ex([ ".lambda", []["concat"](s15_paras), s15_right ], s15_env) ]; else return void 0;
            } else {
                s15_any = _s15_t0;
                throw new s15_SyntaxError("Invalid Assignment");
            }
        };
        s4_externs["macros"]["put"]("define", function(s16_ex, s16_form, s16_env) {
            var s16_ex, s16_form, s16_env, s16_any, s16_op, s16_left, s16_right, s16_SyntaxError, _s16_t0, _s16_t1, _s16_t2, _s16_t3, _s16_t4;
            _s16_t0 = s16_form;
            if (_s16_t0 instanceof Array && _s16_t0["length"] === 3) {
                s16_op = _s16_t0[0];
                s16_left = _s16_t0[1];
                s16_right = _s16_t0[2];
                return s4_Assign(s16_ex, s16_left, s16_right, s16_env, true);
            } else {
                _s16_t1 = false;
                if (_s16_t0 instanceof Array && _s16_t0["length"] === 2) {
                    s16_op = _s16_t0[0];
                    s16_left = _s16_t0[1];
                    if (s3_atom(s16_left)) _s16_t1 = true; else _s16_t1 = false;
                    _s16_t3 = _s16_t1 = false;
                } else _s16_t3 = void 0;
                if (_s16_t1) return [ ".local", s16_left ]; else {
                    s16_any = _s16_t0;
                    throw new s16_SyntaxError("Invalid Assignment");
                }
            }
        });
        s4_externs["macros"]["put"]("local", s4_externs["macros"]["get"]("define"));
        s4_externs["macros"]["put"]("set", function(s17_ex, s17_form, s17_env) {
            var s17_ex, s17_form, s17_env, s17_any, s17_op, s17_left, s17_right, s17_SyntaxError, _s17_t0, _s17_t1;
            _s17_t0 = s17_form;
            if (_s17_t0 instanceof Array && _s17_t0["length"] === 3) {
                s17_op = _s17_t0[0];
                s17_left = _s17_t0[1];
                s17_right = _s17_t0[2];
                return s4_Assign(s17_ex, s17_left, s17_right, s17_env, false);
            } else {
                s17_any = _s17_t0;
                throw new s17_SyntaxError("Invalid Assignment");
            }
        });
        s4_externs["macros"]["put"]("inc", function(s18_ex, s18_form, s18_env) {
            var s18_ex, s18_form, s18_env;
            return [ ".set", s18_ex(s18_form[1], s18_env), [ "+", s18_ex(s18_form[1], s18_env), [ ".quote", 1 ] ] ];
        });
        s4_externs["macros"]["put"]("dec", function(s19_ex, s19_form, s19_env) {
            var s19_ex, s19_form, s19_env;
            return [ ".set", s19_ex(s19_form[1], s19_env), [ "-", s19_ex(s19_form[1], s19_env), [ ".quote", 1 ] ] ];
        });
        s4_externs["macros"]["put"]("for", function(s20_ex, s20_form, s20_env) {
            var s20_ex, s20_form, s20_env, s20_init, s20_test, s20_step, s20_body, _s20_t0, _s20_t1;
            _s20_t0 = s20_form;
            if (_s20_t0 instanceof Array && _s20_t0["length"] === 5 && "for" === _s20_t0[0]) {
                s20_init = _s20_t0[1];
                s20_test = _s20_t0[2];
                s20_step = _s20_t0[3];
                s20_body = _s20_t0[4];
                return [ ".begin", s20_ex(s20_init, s20_env), [ ".while", s20_ex(s20_test, s20_env), [ ".begin", s20_ex(s20_body, s20_env), s20_ex(s20_step, s20_env) ] ] ];
            } else return void 0;
        });
        s4_externs["macros"]["put"]("this", [ ".thisp" ]);
        s4_externs["macros"]["put"]("arguments", [ ".argsp" ]);
        s4_externs["macros"]["put"]("nothing", [ ".unit" ]);
        s4_externs["macros"]["put"]("undefined", [ ".unit" ]);
        s4_externs["macros"]["put"]("null", [ ".quote", null ]);
        s4_externs["macros"]["put"]("true", [ ".quote", true ]);
        s4_externs["macros"]["put"]("false", [ ".quote", false ]);
        s4_boole = function(s21_x) {
            var s21_x;
            return !!s21_x;
        };
        s4_externs["macros"]["put"]("match", function(s22_ex, s22_form, s22_env) {
            var s22_ex, s22_form, s22_env, s22_pairs, s22_t, s22_matchQ, s22_f, s22_j, s22_pattern, s22_guard, s22_body, s22_pat, s22_cond, s22_tc, _s22_t0;
            s22_pairs = s22_form["slice"](2);
            s22_t = s22_env["newt"]();
            s22_matchQ = function(s23_pattern) {
                var s23_pattern, s23_callee, s23_subpatterns, s23_ms, s23_t, s23_final, s23_whatever, s23_x, s23_id, _s23_t0, _s23_t1, _s23_t2, _s23_t3, _s23_t4, _s23_t5, _s23_t6;
                _s23_t0 = s23_pattern;
                s23_id = _s23_t0;
                if (s3_atom(s23_id)) return {
                    whether: function(s40_x) {
                        return null;
                    },
                    assign: function(s41_x) {
                        var s41_x;
                        return [ ".set", s22_ex([ ".local", s23_pattern ], s22_env), s41_x ];
                    }
                }; else if (_s23_t0 instanceof Array && _s23_t0["length"] === 2 && ".quote" === _s23_t0[0]) {
                    s23_x = _s23_t0[1];
                    return {
                        whether: function(s38_x) {
                            var s38_x;
                            return [ "===", s23_pattern, s38_x ];
                        },
                        assign: function(s39_x) {
                            return [ ".unit" ];
                        }
                    };
                } else if (_s23_t0 instanceof Array && _s23_t0["length"] >= 1 && "." === _s23_t0[0]) {
                    s23_whatever = _s23_t0["slice"](1);
                    return {
                        whether: function(s36_x) {
                            return null;
                        },
                        assign: function(s37_x) {
                            var s37_x;
                            return [ ".set", s22_ex(s23_pattern, s22_env), s37_x ];
                        }
                    };
                } else if (_s23_t0 instanceof Array && _s23_t0["length"] >= 1 && ".list" === _s23_t0[0]) {
                    s23_subpatterns = _s23_t0["slice"](1);
                    s23_ms = s23_subpatterns["map"](s22_matchQ);
                    return {
                        whether: function(s32_x) {
                            var s32_x;
                            return [ "&&", [ ".is", s32_x, s4_externs["use"]("Array") ], [ "===", [ ".", s32_x, [ ".quote", "length" ] ], [ ".quote", s23_ms["length"] ] ] ]["concat"](s23_ms["map"](function(s33_p, s33_j) {
                                var s33_p, s33_j;
                                return s33_p["whether"]([ ".", s32_x, [ ".quote", s33_j ] ]);
                            }))["filter"](s4_boole);
                        },
                        assign: function(s34_x) {
                            var s34_x;
                            return [ ".begin" ]["concat"](s23_ms["map"](function(s35_p, s35_j) {
                                var s35_p, s35_j;
                                return s35_p["assign"]([ ".", s34_x, [ ".quote", s35_j ] ]);
                            }));
                        }
                    };
                } else if (_s23_t0 instanceof Array && _s23_t0["length"] >= 1 && ".conslist" === _s23_t0[0]) {
                    s23_subpatterns = _s23_t0["slice"](1);
                    s23_ms = s23_pattern["slice"](1, 0 - 1)["map"](s22_matchQ);
                    s23_final = s22_matchQ(s23_pattern[s23_pattern["length"] - 1]);
                    return {
                        whether: function(s28_x) {
                            var s28_x;
                            return [ "&&", [ ".is", s28_x, s4_externs["use"]("Array") ], [ ">=", [ ".", s28_x, [ ".quote", "length" ] ], [ ".quote", s23_ms["length"] ] ] ]["concat"](s23_ms["map"](function(s29_p, s29_j) {
                                var s29_p, s29_j;
                                return s29_p["whether"]([ ".", s28_x, [ ".quote", s29_j ] ]);
                            })["concat"]([ s23_final["whether"]([ [ ".", s28_x, [ ".quote", "slice" ] ], [ ".quote", s22_j ] ]) ]))["filter"](s4_boole);
                        },
                        assign: function(s30_x) {
                            var s30_x;
                            return [ ".begin" ]["concat"](s23_ms["map"](function(s31_p, s31_j) {
                                var s31_p, s31_j;
                                return s31_p["assign"]([ ".", s30_x, [ ".quote", s31_j ] ]);
                            }))["concat"]([ s23_final["assign"]([ [ ".", s30_x, [ ".quote", "slice" ] ], [ ".quote", s23_ms["length"] ] ]) ]);
                        }
                    };
                } else if (_s23_t0 instanceof Array && _s23_t0["length"] >= 1) {
                    s23_callee = _s23_t0[0];
                    s23_subpatterns = _s23_t0["slice"](1);
                    s23_ms = s23_subpatterns["map"](s22_matchQ);
                    s23_t = s22_env["newt"]();
                    return {
                        whether: function(s24_x) {
                            var s24_x;
                            return [ "&&", [ ".set", s23_t, [ [ ".", s22_ex(s23_callee, s22_env), [ ".quote", "unapply" ] ], s24_x, [ ".quote", s23_ms["length"] ] ] ] ]["concat"](s23_ms["map"](function(s25_p, s25_j) {
                                var s25_p, s25_j;
                                return s25_p["whether"]([ ".", s23_t, [ ".quote", s25_j ] ]);
                            }))["filter"](s4_boole);
                        },
                        assign: function(s26_x) {
                            var s26_x;
                            return [ ".begin" ]["concat"](s23_ms["map"](function(s27_p, s27_j) {
                                var s27_p, s27_j;
                                return s27_p["assign"]([ ".", s23_t, [ ".quote", s27_j ] ]);
                            }));
                        }
                    };
                } else return void 0;
            };
            s22_f = [ ".unit" ];
            s22_j = s22_pairs["length"] - 1;
            while (s22_j >= 0) {
                _s22_t0 = s22_pairs[s22_j];
                if (_s22_t0 instanceof Array && _s22_t0["length"] === 2) {
                    s22_pattern = _s22_t0[0];
                    s22_body = _s22_t0[1];
                    s22_pat = s22_matchQ(s22_pattern);
                    s22_cond = s22_pat["whether"](s22_t);
                    if (s22_cond) s22_f = [ ".if", s22_cond, [ ".begin", s22_pat["assign"](s22_t), s22_ex(s22_body, s22_env) ], s22_f ]; else if (true) s22_f = [ ".begin", s22_pat["assign"](s22_t), s22_ex(s22_body, s22_env) ]; else void 0;
                    void 0;
                } else if (_s22_t0 instanceof Array && _s22_t0["length"] === 3) {
                    s22_pattern = _s22_t0[0];
                    s22_guard = _s22_t0[1];
                    s22_body = _s22_t0[2];
                    s22_pat = s22_matchQ(s22_pattern);
                    s22_cond = s22_pat["whether"](s22_t);
                    if (s22_cond) {
                        s22_tc = s22_env["newt"]();
                        s22_f = [ ".begin", [ ".set", s22_tc, [ ".quote", false ] ], [ ".if", s22_cond, [ ".begin", s22_pat["assign"](s22_t), [ ".if", s22_ex(s22_guard, s22_env), [ ".set", s22_tc, [ ".quote", true ] ], [ ".set", s22_tc, [ ".quote", false ] ] ], [ ".set", s22_tc, [ ".quote", false ] ] ] ], [ ".if", s22_tc, s22_ex(s22_body, s22_env), s22_f ] ];
                        void 0;
                    } else if (true) s22_f = [ ".begin", s22_pat["assign"](s22_t), [ ".if", s22_ex(s22_guard, s22_env), s22_ex(s22_body, s22_env), s22_f ] ]; else void 0;
                    void 0;
                } else void 0;
                s22_j = s22_j - 1;
                void 0;
            }
            return [ ".begin", [ ".set", s22_t, s22_ex(s22_form[1], s22_env) ], s22_f ];
        });
        s4_externs["macros"]["put"]("regex", function(s42_ex, s42_form, s42_env) {
            var s42_ex, s42_form, s42_env, s42_args, s42_s, s42_flag, _s42_t0, _s42_t1, _s42_t2, _s42_t3;
            _s42_t0 = s42_form;
            if (_s42_t0 instanceof Array && _s42_t0["length"] === 2 && "regex" === _s42_t0[0] && (_s42_t0[1] instanceof Array && _s42_t0[1]["length"] === 2 && ".quote" === _s42_t0[1][0])) {
                s42_s = _s42_t0[1][1];
                return [ ".quote", new RegExp(s42_s) ];
            } else if (_s42_t0 instanceof Array && _s42_t0["length"] === 3 && "regex" === _s42_t0[0] && (_s42_t0[1] instanceof Array && _s42_t0[1]["length"] === 2 && ".quote" === _s42_t0[1][0]) && (_s42_t0[2] instanceof Array && _s42_t0[2]["length"] === 2 && ".quote" === _s42_t0[2][0])) {
                s42_s = _s42_t0[1][1];
                s42_flag = _s42_t0[2][1];
                return [ ".quote", new RegExp(s42_s, s42_flag) ];
            } else if (_s42_t0 instanceof Array && _s42_t0["length"] >= 1 && "regex" === _s42_t0[0]) {
                s42_args = _s42_t0["slice"](1);
                return [ ".new", s4_externs["use"]("RegExp") ]["concat"](s42_args);
            } else return void 0;
        });
        return s4_externs;
    };
    exports["Create"] = s3_Create;
    void 0;
}