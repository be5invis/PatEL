{
    var r0_patrisika, r0_atom, r0_prim, r0_Scope, r0_escodegen, r0_util, r0_ex, r0_deQuasiquote, r0_FormInvalidError, r0_wrapForSyntacticClosure, r0_Create, _r0_t0, _r0_t1, _r0_t2, _r0_t3;
    r0_patrisika = require('patrisika');
    r0_atom = function _r0_t0(r1_x) {
        var r1_x;
        return typeof r1_x === 'string';
    };
    r0_prim = function _r0_t1(r2_x) {
        var r2_x;
        return r0_atom(r2_x) && r2_x !== '&' && r2_x !== '&!' && (r2_x[0] === '.' || /^\W+/['test'](r2_x));
    };
    r0_Scope = require('patrisika')['Scope'];
    r0_escodegen = require('escodegen');
    r0_util = require('util');
    r0_ex = require('./ex')['ex'];
    r0_deQuasiquote = require('./ex')['deQuasiquote'];
    r0_FormInvalidError = r0_patrisika['FormInvalidError'];
    r0_wrapForSyntacticClosure = function _r0_t2(r3_fn) {
        var r3_fn, _r3_t0;
        return function _r3_t0(r4_x) {
            var r4_x, r4_otherwise, r4_c, r4_e, _r4_t0, _r4_t1;
            _r4_t0 = r4_x;
            if (_r4_t0 instanceof Array && _r4_t0['length'] === 3 && '.syntactic-closure' === _r4_t0[0]) {
                r4_c = _r4_t0[1];
                r4_e = _r4_t0[2];
                return r3_fn(r4_c);
            } else {
                r4_otherwise = _r4_t0;
                return r3_fn(r4_x);
            }
        };
    };
    r0_Create = function _r0_t3() {
        var r5_externs, r5_operatorRename, r5_reportInvalid, r5_AssignWithMod, r5_Assign, r5_boole, _r5_t0, _r5_t1, _r5_t2, _r5_t3, _r5_t4, _r5_t5, _r5_t6, _r5_t7, _r5_t8, _r5_t9, _r5_t10, _r5_t11, _r5_t12, _r5_t13, _r5_t14, _r5_t15, _r5_t16, _r5_t17, _r5_t18, _r5_t19, _r5_t20;
        r5_externs = r0_patrisika['DefaultExterns']();
        r5_externs['castName'] = function _r5_t0(r6_name) {
            var r6_name;
            return r6_name;
        };
        r5_externs['declare']('require');
        r5_externs['declare']('exports');
        r5_externs['declare']('process');
        r5_externs['declare']('module');
        r5_externs['declare']('Error');
        r5_operatorRename = function _r5_t1(r7_op) {
            var r7_op, _r7_t0;
            return function _r7_t0(r8_form, r8_env) {
                var r8_form, r8_env;
                return r0_ex([r7_op]['concat'](r8_form['slice'](1)), r8_env);
            };
        };
        r5_reportInvalid = function _r5_t2(r9_form, r9_reason) {
            var r9_form, r9_reason;
            throw new r0_FormInvalidError(r9_form, r9_reason);
        };
        r5_externs['macros']['put']('begin', r5_operatorRename('.begin'));
        r5_externs['macros']['put']('then', r5_operatorRename('.begin'));
        r5_externs['macros']['put']('else', r5_operatorRename('.begin'));
        r5_externs['macros']['put']('while', r5_operatorRename('.while'));
        r5_externs['macros']['put']('try', r5_operatorRename('.try'));
        r5_externs['macros']['put']('is', r5_operatorRename('.is'));
        r5_externs['macros']['put']('<@', r5_operatorRename('.is'));
        r5_externs['macros']['put']('new', r5_operatorRename('.new'));
        r5_externs['macros']['put']('this', r5_operatorRename('.thisp'));
        r5_externs['macros']['put']('arguments', r5_operatorRename('.argsp'));
        r5_externs['macros']['put']('and', r5_operatorRename('&&'));
        r5_externs['macros']['put']('or', r5_operatorRename('||'));
        r5_externs['macros']['put']('not', r5_operatorRename('!'));
        r5_externs['macros']['put']('return', r5_operatorRename('.return'));
        r5_externs['macros']['put']('yield', r5_operatorRename('.yield'));
        r5_externs['macros']['put']('throw', r5_operatorRename('.throw'));
        r5_externs['macros']['put']('list', r5_operatorRename('.list'));
        r5_externs['macros']['put']('typeof', r5_operatorRename('.typeof'));
        r5_externs['macros']['put']('quasiquote', r5_operatorRename('.quasiquote'));
        r5_externs['macros']['put']('syntax', r5_operatorRename('.quasiquote'));
        r5_externs['macros']['put']('lambda', function _r5_t3(r10_form, r10_env) {
            var r10_form, r10_env, r10_otherwise, r10_car, r10_body, r10_parameters, _r10_t0, _r10_t1, _r10_t2, _r10_t3, _r10_t4, _r10_t5, _r10_t6, _r10_t7;
            _r10_t0 = r10_form;
            _r10_t1 = false;
            if (_r10_t0 instanceof Array && _r10_t0['length'] === 3) {
                r10_car = _r10_t0[0];
                r10_parameters = _r10_t0[1];
                r10_body = _r10_t0[2];
                if (r0_atom(r10_parameters))
                    _r10_t3 = _r10_t1 = true;
                else
                    _r10_t3 = _r10_t1 = false;
                _r10_t2 = _r10_t3;
            } else
                _r10_t2 = void 0;
            if (_r10_t1)
                return r0_ex([
                    '.lambda',
                    [r10_parameters],
                    r10_body
                ], r10_env);
            else if (_r10_t0 instanceof Array && _r10_t0['length'] === 3) {
                r10_car = _r10_t0[0];
                r10_parameters = _r10_t0[1];
                r10_body = _r10_t0[2];
                return r0_ex([
                    '.lambda',
                    r10_parameters,
                    r10_body
                ], r10_env);
            } else if (_r10_t0 instanceof Array && _r10_t0['length'] === 2) {
                r10_car = _r10_t0[0];
                r10_body = _r10_t0[1];
                return r0_ex([
                    '.lambda',
                    [],
                    r10_body
                ], r10_env);
            } else if (_r10_t0 instanceof Array && _r10_t0['length'] === 1) {
                r10_car = _r10_t0[0];
                return r0_ex([
                    '.lambda',
                    [],
                    ['.unit']
                ], r10_body);
            } else {
                r10_otherwise = _r10_t0;
                return r5_reportInvalid(r10_otherwise, 'Invalid Lambda Formation');
            }
        });
        r5_externs['macros']['put']('function', r5_externs['macros']['get']('lambda'));
        r5_externs['macros']['put']('->', r5_externs['macros']['get']('lambda'));
        r5_externs['macros']['put']('if', function _r5_t4(r11_form, r11_env) {
            var r11_form, r11_env, r11_otherwise, r11_test, r11_consequents, r11_alternates, r11_consequent, r11_alternate, _r11_t0, _r11_t1, _r11_t2, _r11_t3, _r11_t4;
            _r11_t0 = r11_form;
            if (_r11_t0 instanceof Array && _r11_t0['length'] === 3 && 'if' === _r11_t0[0]) {
                r11_test = _r11_t0[1];
                r11_consequent = _r11_t0[2];
                return r0_ex([
                    '.if',
                    r11_test,
                    r11_consequent
                ], r11_env);
            } else if (_r11_t0 instanceof Array && _r11_t0['length'] === 4 && 'if' === _r11_t0[0]) {
                r11_test = _r11_t0[1];
                r11_consequent = _r11_t0[2];
                r11_alternate = _r11_t0[3];
                return r0_ex([
                    '.if',
                    r11_test,
                    r11_consequent,
                    r11_alternate
                ], r11_env);
            } else if (_r11_t0 instanceof Array && _r11_t0['length'] === 3 && 'if' === _r11_t0[0] && (_r11_t0[2] instanceof Array && _r11_t0[2]['length'] >= 1 && 'then' === _r11_t0[2][0])) {
                r11_test = _r11_t0[1];
                r11_consequents = _r11_t0[2]['slice'](1);
                return r0_ex([
                    '.if',
                    r11_test,
                    ['.begin']['concat'](r11_consequents)
                ], r11_env);
            } else if (_r11_t0 instanceof Array && _r11_t0['length'] === 4 && 'if' === _r11_t0[0] && (_r11_t0[2] instanceof Array && _r11_t0[2]['length'] >= 1 && 'then' === _r11_t0[2][0]) && (_r11_t0[3] instanceof Array && _r11_t0[3]['length'] >= 1 && 'else' === _r11_t0[3][0])) {
                r11_test = _r11_t0[1];
                r11_consequents = _r11_t0[2]['slice'](1);
                r11_alternates = _r11_t0[3]['slice'](1);
                return r0_ex([
                    '.if',
                    r11_test,
                    ['.begin']['concat'](r11_consequents),
                    ['.begin']['concat'](r11_alternates)
                ], r11_env);
            } else {
                r11_otherwise = _r11_t0;
                return r5_reportInvalid(r11_otherwise, 'Invalid Conditional Form');
            }
        });
        r5_externs['macros']['put']('.conslist', function _r5_t5(r12_form, r12_env) {
            var r12_form, r12_env;
            return [
                [
                    '.',
                    r0_ex(['.list']['concat'](r12_form['slice'](1, -1)), r12_env),
                    [
                        '.quote',
                        'concat'
                    ]
                ],
                r0_ex(r12_form[r12_form['length'] - 1], r12_env)
            ];
        });
        r5_externs['macros']['put']('let', function _r5_t6(r13_form, r13_env) {
            var r13_form, r13_env, r13_pairs, r13_args, r13_paras, r13_j, r13_arg, r13_param, r13_useless, _r13_t0, _r13_t1, _r13_t2, _r13_t3;
            r13_pairs = r13_form['slice'](1, 0 - 1);
            r13_args = [];
            r13_paras = [];
            r13_j = 0;
            for (; r13_j < r13_pairs['length']; r13_j = r13_j + 1) {
                _r13_t0 = r13_pairs[r13_j];
                if (_r13_t0 instanceof Array && _r13_t0['length'] >= 2) {
                    r13_arg = _r13_t0[0];
                    r13_param = _r13_t0[1];
                    r13_useless = _r13_t0['slice'](2);
                    r13_args['push'](r13_arg);
                    r13_paras['push'](r13_param);
                } else if (_r13_t0 instanceof Array && _r13_t0['length'] === 2) {
                    r13_arg = _r13_t0[0];
                    r13_param = _r13_t0[1];
                    r13_args['push'](r13_arg);
                    r13_paras['push'](r13_param);
                } else {
                    _r13_t1 = false;
                    if (_r13_t0 instanceof Array && _r13_t0['length'] === 1) {
                        r13_arg = _r13_t0[0];
                        if (r0_atom(r13_arg))
                            _r13_t3 = _r13_t1 = true;
                        else
                            _r13_t3 = _r13_t1 = false;
                        _r13_t2 = _r13_t3;
                    } else
                        _r13_t2 = void 0;
                    if (_r13_t1) {
                        r13_args['push'](r13_arg);
                        r13_paras['push'](r13_env['use'](r13_arg));
                    } else
                        void 0;
                }
            }
            return r0_ex([
                '.beta',
                r13_args,
                r13_form[r13_form['length'] - 1]
            ]['concat'](r13_paras), r13_env);
        });
        r5_externs['macros']['put']('object', function _r5_t7(r14_form, r14_env) {
            var r14_form, r14_env, r14_pairs, _r14_t0;
            r14_pairs = r14_form['slice'](1)['map'](function _r14_t0(r15_pair) {
                var r15_pair, r15_property, r15_value, r15_useless, _r15_t0, _r15_t1, _r15_t2, _r15_t3, _r15_t4, _r15_t5, _r15_t6;
                _r15_t0 = r15_pair;
                if (_r15_t0 instanceof Array && _r15_t0['length'] >= 2) {
                    r15_property = _r15_t0[0];
                    r15_value = _r15_t0[1];
                    r15_useless = _r15_t0['slice'](2);
                    return [
                        r15_property,
                        r0_ex(r15_value, r14_env)
                    ];
                } else if (_r15_t0 instanceof Array && _r15_t0['length'] === 2) {
                    r15_property = _r15_t0[0];
                    r15_value = _r15_t0[1];
                    return [
                        r15_property,
                        r0_ex(r15_value, r14_env)
                    ];
                } else {
                    _r15_t1 = false;
                    if (_r15_t0 instanceof Array && _r15_t0['length'] === 1) {
                        r15_property = _r15_t0[0];
                        if (r0_atom(r15_property))
                            _r15_t5 = _r15_t1 = true;
                        else
                            _r15_t5 = _r15_t1 = false;
                        _r15_t4 = _r15_t5;
                    } else
                        _r15_t4 = void 0;
                    if (_r15_t1)
                        return [
                            r15_property,
                            r14_env['use'](r15_property)
                        ];
                    else
                        return void 0;
                }
            });
            return ['.hash']['concat'](r14_pairs);
        });
        r5_externs['macros']['put']('piecewise', function _r5_t8(r16_form, r16_env) {
            var r16_form, r16_env, r16_pairs, r16_f, r16_j, _r16_t0, _r16_t1;
            _r16_t0 = r16_form;
            if (_r16_t0 instanceof Array && _r16_t0['length'] >= 1 && 'piecewise' === _r16_t0[0]) {
                r16_pairs = _r16_t0['slice'](1);
                r16_f = ['.unit'];
                r16_j = r16_pairs['length'] - 1;
                for (; r16_j >= 0; r16_j = r16_j - 1) {
                    r16_f = [
                        '.if',
                        r0_ex(r16_pairs[r16_j][0], r16_env),
                        r0_ex(r16_pairs[r16_j][1], r16_env),
                        r16_f
                    ];
                }
                return r16_f;
            } else
                return void 0;
        });
        r5_AssignWithMod = function _r5_t9(r17_left, r17_right, r17_mod, r17_env, r17_locallyQ) {
            var r17_left, r17_right, r17_mod, r17_env, r17_locallyQ, r17_any, r17_callee, r17_paras, r17_whatever, r17_items, r17_t, r17_assignments, r17_j, r17_a, r17_id, _r17_t0, _r17_t1, _r17_t2, _r17_t3, _r17_t4, _r17_t5, _r17_t6, _r17_t7, _r17_t8, _r17_t9, _r17_t10, _r17_t11, _r17_t12, _r17_t13, _r17_t14;
            _r17_t0 = r17_left;
            r17_id = _r17_t0;
            if (r0_atom(r17_id))
                if (r17_locallyQ)
                    return [
                        '.set',
                        r0_ex([
                            '.local',
                            r17_id
                        ], r17_env),
                        r0_ex([
                            r17_mod,
                            r17_right
                        ], r17_env)
                    ];
                else if (true)
                    return [
                        '.set',
                        r0_ex(r17_left, r17_env),
                        r0_ex([
                            r17_mod,
                            r17_right
                        ], r17_env)
                    ];
                else
                    return void 0;
            else if (_r17_t0 instanceof Array && _r17_t0['length'] === 2 && '.local' === _r17_t0[0]) {
                r17_a = _r17_t0[1];
                return r5_AssignWithMod(r17_a, r17_right, r17_mod, r17_env, true);
            } else if (_r17_t0 instanceof Array && _r17_t0['length'] >= 1 && '.list' === _r17_t0[0]) {
                r17_items = _r17_t0['slice'](1);
                r17_t = r17_env['newt']();
                r17_assignments = [
                    '.begin',
                    [
                        '.set',
                        r17_t,
                        r0_ex([
                            r17_mod,
                            r17_right
                        ], r17_env)
                    ]
                ];
                r17_j = 0;
                for (; r17_j < r17_items['length']; r17_j = r17_j + 1) {
                    r17_assignments['push'](r5_Assign(r17_items[r17_j], [
                        '.',
                        r17_t,
                        [
                            '.quote',
                            r17_j
                        ]
                    ], r17_env, r17_locallyQ));
                }
                r17_assignments['push'](r17_t);
                return r17_assignments;
            } else if (_r17_t0 instanceof Array && _r17_t0['length'] >= 1 && '.hash' === _r17_t0[0]) {
                r17_items = _r17_t0['slice'](1);
                r17_t = r17_env['newt']();
                r17_assignments = [
                    '.begin',
                    [
                        '.set',
                        r17_t,
                        r0_ex([
                            r17_mod,
                            r17_right
                        ], r17_env)
                    ]
                ];
                r17_j = 0;
                for (; r17_j < r17_items['length']; r17_j = r17_j + 1) {
                    r17_assignments['push'](r5_Assign(r17_items[r17_j][1], [
                        '.',
                        r17_t,
                        r17_items[r17_j][0]
                    ], r17_env, r17_locallyQ));
                }
                r17_assignments['push'](r17_t);
                return r17_assignments;
            } else if (_r17_t0 instanceof Array && _r17_t0['length'] >= 1 && '.revcall' === _r17_t0[0]) {
                r17_whatever = _r17_t0['slice'](1);
                return r5_AssignWithMod([]['concat'](r17_whatever), r17_right, r17_mod, r17_env, r17_locallyQ);
            } else if (_r17_t0 instanceof Array && _r17_t0['length'] >= 1) {
                r17_callee = _r17_t0[0];
                r17_paras = _r17_t0['slice'](1);
                if (r0_atom(r17_callee) && r17_env['macros']['has'](r17_callee))
                    return r5_AssignWithMod(r0_ex([r17_callee]['concat'](r17_paras), r17_env), r17_right, r17_mod, r17_env, r17_locallyQ);
                else if (r0_prim(r17_callee))
                    return [
                        '.set',
                        r0_ex(r17_left, r17_env),
                        r0_ex([
                            r17_mod,
                            r17_right
                        ], r17_env)
                    ];
                else if (r0_atom(r17_callee))
                    if (r17_locallyQ)
                        return [
                            '.set',
                            r0_ex([
                                '.local',
                                r17_callee
                            ], r17_env),
                            r0_ex([
                                r17_mod,
                                [
                                    '.lambda',
                                    []['concat'](r17_paras),
                                    r17_right
                                ]
                            ], r17_env)
                        ];
                    else if (true)
                        return [
                            '.set',
                            r0_ex(r17_callee, r17_env),
                            r0_ex([
                                r17_mod,
                                [
                                    '.lambda',
                                    []['concat'](r17_paras),
                                    r17_right
                                ]
                            ], r17_env)
                        ];
                    else
                        return void 0;
                else if (true)
                    return [
                        '.set',
                        r0_ex(r17_callee, r17_env),
                        r0_ex([
                            r17_mod,
                            [
                                '.lambda',
                                []['concat'](r17_paras),
                                r17_right
                            ]
                        ], r17_env)
                    ];
                else
                    return void 0;
            } else {
                r17_any = _r17_t0;
                throw new r0_FormInvalidError(r17_left, 'Invalid Assignment Left-hand Side');
            }
        };
        r5_Assign = function _r5_t10(r18_left, r18_right, r18_env, r18_locallyQ) {
            var r18_left, r18_right, r18_env, r18_locallyQ;
            return r5_AssignWithMod(r18_left, r18_right, '.unquote', r18_env, r18_locallyQ);
        };
        r5_externs['macros']['put']('define', function _r5_t11(r19_form, r19_env) {
            var r19_form, r19_env, r19_any, r19_op, r19_left, r19_right, r19_modifer, _r19_t0, _r19_t1, _r19_t2, _r19_t3, _r19_t4, _r19_t5, _r19_t6;
            _r19_t0 = r19_form;
            if (_r19_t0 instanceof Array && _r19_t0['length'] === 4) {
                r19_op = _r19_t0[0];
                r19_modifer = _r19_t0[1];
                r19_left = _r19_t0[2];
                r19_right = _r19_t0[3];
                return r5_AssignWithMod(r19_left, r19_right, r19_modifer, r19_env, true);
            } else if (_r19_t0 instanceof Array && _r19_t0['length'] === 3) {
                r19_op = _r19_t0[0];
                r19_left = _r19_t0[1];
                r19_right = _r19_t0[2];
                return r5_Assign(r19_left, r19_right, r19_env, true);
            } else {
                _r19_t1 = false;
                if (_r19_t0 instanceof Array && _r19_t0['length'] === 2) {
                    r19_op = _r19_t0[0];
                    r19_left = _r19_t0[1];
                    if (r0_atom(r19_left))
                        _r19_t5 = _r19_t1 = true;
                    else
                        _r19_t5 = _r19_t1 = false;
                    _r19_t4 = _r19_t5;
                } else
                    _r19_t4 = void 0;
                if (_r19_t1)
                    return [
                        '.local',
                        r19_left
                    ];
                else {
                    r19_any = _r19_t0;
                    throw new r0_FormInvalidError(r19_any, 'Invalid Assignment');
                }
            }
        });
        r5_externs['macros']['put']('local', r5_externs['macros']['get']('define'));
        r5_externs['macros']['put']('set', function _r5_t12(r20_form, r20_env) {
            var r20_form, r20_env, r20_any, r20_op, r20_left, r20_right, _r20_t0, _r20_t1;
            _r20_t0 = r20_form;
            if (_r20_t0 instanceof Array && _r20_t0['length'] === 3) {
                r20_op = _r20_t0[0];
                r20_left = _r20_t0[1];
                r20_right = _r20_t0[2];
                return r5_Assign(r20_left, r20_right, r20_env, false);
            } else {
                r20_any = _r20_t0;
                throw new r0_FormInvalidError(r20_any, 'Invalid Assignment');
            }
        });
        r5_externs['macros']['put']('=', r5_externs['macros']['get']('set'));
        r5_externs['macros']['put']('inc', function _r5_t13(r21_form, r21_env) {
            var r21_form, r21_env, r21_op, r21_id, r21_shift, _r21_t0, _r21_t1, _r21_t2, _r21_t3;
            _r21_t0 = r21_form;
            if (_r21_t0 instanceof Array && _r21_t0['length'] === 2) {
                r21_op = _r21_t0[0];
                r21_id = _r21_t0[1];
                return r5_Assign(r21_id, [
                    '+',
                    r21_id,
                    [
                        '.quote',
                        1
                    ]
                ], r21_env, false);
            } else if (_r21_t0 instanceof Array && _r21_t0['length'] === 3) {
                r21_op = _r21_t0[0];
                r21_id = _r21_t0[1];
                r21_shift = _r21_t0[2];
                return r5_Assign(r21_id, [
                    '+',
                    r21_id,
                    r21_shift
                ], r21_env, false);
            } else if (_r21_t0 instanceof Array && _r21_t0['length'] === 4 && 'by' === _r21_t0[2]) {
                r21_op = _r21_t0[0];
                r21_id = _r21_t0[1];
                r21_shift = _r21_t0[3];
                return r5_Assign(r21_id, [
                    '+',
                    r21_id,
                    r21_shift
                ], r21_env, false);
            } else
                return void 0;
        });
        r5_externs['macros']['put']('dec', function _r5_t14(r22_form, r22_env) {
            var r22_form, r22_env, r22_op, r22_id, r22_shift, _r22_t0, _r22_t1, _r22_t2, _r22_t3;
            _r22_t0 = r22_form;
            if (_r22_t0 instanceof Array && _r22_t0['length'] === 2) {
                r22_op = _r22_t0[0];
                r22_id = _r22_t0[1];
                return r5_Assign(r22_id, [
                    '-',
                    r22_id,
                    [
                        '.quote',
                        1
                    ]
                ], r22_env, false);
            } else if (_r22_t0 instanceof Array && _r22_t0['length'] === 3) {
                r22_op = _r22_t0[0];
                r22_id = _r22_t0[1];
                r22_shift = _r22_t0[2];
                return r5_Assign(r22_id, [
                    '-',
                    r22_id,
                    r22_shift
                ], r22_env, false);
            } else if (_r22_t0 instanceof Array && _r22_t0['length'] === 4 && 'by' === _r22_t0[2]) {
                r22_op = _r22_t0[0];
                r22_id = _r22_t0[1];
                r22_shift = _r22_t0[3];
                return r5_Assign(r22_id, [
                    '-',
                    r22_id,
                    r22_shift
                ], r22_env, false);
            } else
                return void 0;
        });
        r5_externs['macros']['put']('for', function _r5_t15(r23_form, r23_env) {
            var r23_form, r23_env, r23_init, r23_test, r23_step, r23_body, _r23_t0, _r23_t1;
            _r23_t0 = r23_form;
            if (_r23_t0 instanceof Array && _r23_t0['length'] === 5 && 'for' === _r23_t0[0]) {
                r23_init = _r23_t0[1];
                r23_test = _r23_t0[2];
                r23_step = _r23_t0[3];
                r23_body = _r23_t0[4];
                return [
                    '.begin',
                    r0_ex(r23_init, r23_env),
                    [
                        '.while',
                        r0_ex(r23_test, r23_env),
                        [
                            '.begin',
                            r0_ex(r23_body, r23_env),
                            r0_ex(r23_step, r23_env)
                        ]
                    ]
                ];
            } else
                return void 0;
        });
        r5_externs['macros']['put']('this', ['.thisp']);
        r5_externs['macros']['put']('arguments', ['.argsp']);
        r5_externs['macros']['put']('nothing', ['.unit']);
        r5_externs['macros']['put']('undefined', ['.unit']);
        r5_externs['macros']['put']('null', [
            '.quote',
            null
        ]);
        r5_externs['macros']['put']('true', [
            '.quote',
            true
        ]);
        r5_externs['macros']['put']('false', [
            '.quote',
            false
        ]);
        r5_boole = function _r5_t16(r24_x) {
            var r24_x;
            return !!r24_x;
        };
        r5_externs['macros']['put']('match', function _r5_t17(r25_form, r25_env, r25_wrapper) {
            var r25_form, r25_env, r25_wrapper, r25_pairs, r25_t, r25_matchQ, r25_f, r25_j, r25_any, r25_pattern, r25_guard, r25_body, r25_pat, r25_cond, r25_tc, _r25_t0, _r25_t1, _r25_t2, _r25_t3, _r25_t4, _r25_t5, _r25_t6, _r25_t7;
            r25_pairs = r25_form['slice'](2);
            r25_t = r25_env['newt']();
            r25_matchQ = function _r25_t1(r26_pattern) {
                var r26_pattern, r26_callee, r26_subpatterns, r26_ms, r26_t, r26_final, r26_whatever, r26_x, r26_id, _r26_t0, _r26_t1, _r26_t2, _r26_t3, _r26_t4, _r26_t5, _r26_t6, _r26_t7, _r26_t8, _r26_t9, _r26_t10, _r26_t11, _r26_t12, _r26_t13, _r26_t14, _r26_t15, _r26_t16, _r26_t17, _r26_t18, _r26_t19;
                _r26_t0 = r26_pattern;
                r26_id = _r26_t0;
                if (r0_atom(r26_id))
                    return {
                        'whether': function _r26_t2(r43_x) {
                            var r43_x;
                            return null;
                        },
                        'assign': function _r26_t3(r44_x, r44_flag) {
                            var r44_x, r44_flag, _r44_t0, _r44_t1, _r44_t2;
                            _r44_t0 = '.set';
                            _r44_t1 = r0_ex([
                                '.local',
                                r26_pattern
                            ], r25_env);
                            if (r25_wrapper && !r44_flag)
                                _r44_t2 = [
                                    r25_wrapper,
                                    r44_x
                                ];
                            else
                                _r44_t2 = r44_x;
                            return [
                                _r44_t0,
                                _r44_t1,
                                _r44_t2
                            ];
                        }
                    };
                else if (_r26_t0 instanceof Array && _r26_t0['length'] === 2 && '.quote' === _r26_t0[0]) {
                    r26_x = _r26_t0[1];
                    return {
                        'whether': function _r26_t5(r41_x) {
                            var r41_x;
                            return [
                                '===',
                                r0_ex(r26_pattern, r25_env),
                                r41_x
                            ];
                        },
                        'assign': function _r26_t6(r42_x, r42_flag) {
                            var r42_x, r42_flag;
                            return ['.unit'];
                        }
                    };
                } else if (_r26_t0 instanceof Array && _r26_t0['length'] >= 1 && '.' === _r26_t0[0]) {
                    r26_whatever = _r26_t0['slice'](1);
                    return {
                        'whether': function _r26_t8(r39_x) {
                            var r39_x;
                            return null;
                        },
                        'assign': function _r26_t9(r40_x, r40_flag) {
                            var r40_x, r40_flag, _r40_t0, _r40_t1, _r40_t2;
                            _r40_t0 = '.set';
                            _r40_t1 = r0_ex(r26_pattern, r25_env);
                            if (r25_wrapper && !r40_flag)
                                _r40_t2 = [
                                    r25_wrapper,
                                    r40_x
                                ];
                            else
                                _r40_t2 = r40_x;
                            return [
                                _r40_t0,
                                _r40_t1,
                                _r40_t2
                            ];
                        }
                    };
                } else if (_r26_t0 instanceof Array && _r26_t0['length'] >= 1 && '.list' === _r26_t0[0]) {
                    r26_subpatterns = _r26_t0['slice'](1);
                    r26_ms = r26_subpatterns['map'](r25_matchQ);
                    return {
                        'whether': function _r26_t11(r35_x) {
                            var r35_x, _r35_t0;
                            return [
                                '&&',
                                [
                                    '.is',
                                    r35_x,
                                    r5_externs['use']('Array')
                                ],
                                [
                                    '===',
                                    [
                                        '.',
                                        r35_x,
                                        [
                                            '.quote',
                                            'length'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r26_ms['length']
                                    ]
                                ]
                            ]['concat'](r26_ms['map'](function _r35_t0(r36_p, r36_j) {
                                var r36_p, r36_j;
                                return r36_p['whether']([
                                    '.',
                                    r35_x,
                                    [
                                        '.quote',
                                        r36_j
                                    ]
                                ]);
                            }))['filter'](r5_boole);
                        },
                        'assign': function _r26_t12(r37_x, r37_flag) {
                            var r37_x, r37_flag, _r37_t0;
                            return ['.begin']['concat'](r26_ms['map'](function _r37_t0(r38_p, r38_j) {
                                var r38_p, r38_j;
                                return r38_p['assign']([
                                    '.',
                                    r37_x,
                                    [
                                        '.quote',
                                        r38_j
                                    ]
                                ], r37_flag);
                            }));
                        }
                    };
                } else if (_r26_t0 instanceof Array && _r26_t0['length'] >= 1 && '.conslist' === _r26_t0[0]) {
                    r26_subpatterns = _r26_t0['slice'](1);
                    r26_ms = r26_pattern['slice'](1, 0 - 1)['map'](r25_matchQ);
                    r26_final = r25_matchQ(r26_pattern[r26_pattern['length'] - 1]);
                    return {
                        'whether': function _r26_t14(r31_x) {
                            var r31_x, _r31_t0;
                            return [
                                '&&',
                                [
                                    '.is',
                                    r31_x,
                                    r5_externs['use']('Array')
                                ],
                                [
                                    '>=',
                                    [
                                        '.',
                                        r31_x,
                                        [
                                            '.quote',
                                            'length'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r26_ms['length']
                                    ]
                                ]
                            ]['concat'](r26_ms['map'](function _r31_t0(r32_p, r32_j) {
                                var r32_p, r32_j;
                                return r32_p['whether']([
                                    '.',
                                    r31_x,
                                    [
                                        '.quote',
                                        r32_j
                                    ]
                                ]);
                            })['concat']([r26_final['whether']([
                                    [
                                        '.',
                                        r31_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r25_j
                                    ]
                                ])]))['filter'](r5_boole);
                        },
                        'assign': function _r26_t15(r33_x, r33_flag) {
                            var r33_x, r33_flag, _r33_t0, _r33_t1, _r33_t2, _r33_t3, _r33_t4, _r33_t5, _r33_t6, _r33_t7, _r33_t8;
                            _r33_t1 = ['.begin']['concat'](r26_ms['map'](function _r33_t0(r34_p, r34_j) {
                                var r34_p, r34_j;
                                return r34_p['assign']([
                                    '.',
                                    r33_x,
                                    [
                                        '.quote',
                                        r34_j
                                    ]
                                ]);
                            }));
                            _r33_t2 = _r33_t1['concat'];
                            _r33_t3 = r26_final;
                            _r33_t4 = _r33_t3['assign'];
                            if (r25_wrapper && !r33_flag)
                                _r33_t5 = [
                                    [
                                        '.',
                                        [
                                            [
                                                '.',
                                                r33_x,
                                                [
                                                    '.quote',
                                                    'slice'
                                                ]
                                            ],
                                            [
                                                '.quote',
                                                r26_ms['length']
                                            ]
                                        ],
                                        [
                                            '.quote',
                                            'map'
                                        ]
                                    ],
                                    r25_wrapper
                                ];
                            else
                                _r33_t5 = [
                                    [
                                        '.',
                                        r33_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r26_ms['length']
                                    ]
                                ];
                            _r33_t6 = true;
                            _r33_t7 = _r33_t4['call'](_r33_t3, _r33_t5, _r33_t6);
                            _r33_t8 = [_r33_t7];
                            return _r33_t2['call'](_r33_t1, _r33_t8);
                        }
                    };
                } else if (_r26_t0 instanceof Array && _r26_t0['length'] >= 1 && '.quasiquote' === _r26_t0[0]) {
                    r26_subpatterns = _r26_t0['slice'](1);
                    return r25_matchQ(r0_deQuasiquote(r26_pattern[1], 0));
                } else if (_r26_t0 instanceof Array && _r26_t0['length'] >= 1) {
                    r26_callee = _r26_t0[0];
                    r26_subpatterns = _r26_t0['slice'](1);
                    r26_ms = r26_subpatterns['map'](r25_matchQ);
                    r26_t = r25_env['newt']();
                    return {
                        'whether': function _r26_t18(r27_x) {
                            var r27_x, _r27_t0;
                            return [
                                '&&',
                                [
                                    '.set',
                                    r26_t,
                                    [
                                        [
                                            '.',
                                            r0_ex(r26_callee, r25_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r27_x,
                                        [
                                            '.quote',
                                            r26_ms['length']
                                        ]
                                    ]
                                ]
                            ]['concat'](r26_ms['map'](function _r27_t0(r28_p, r28_j) {
                                var r28_p, r28_j;
                                return r28_p['whether']([
                                    '.',
                                    r26_t,
                                    [
                                        '.quote',
                                        r28_j
                                    ]
                                ]);
                            }))['filter'](r5_boole);
                        },
                        'assign': function _r26_t19(r29_x, r29_flag) {
                            var r29_x, r29_flag, _r29_t0;
                            return ['.begin']['concat'](r26_ms['map'](function _r29_t0(r30_p, r30_j) {
                                var r30_p, r30_j;
                                return r30_p['assign']([
                                    '.',
                                    r26_t,
                                    [
                                        '.quote',
                                        r30_j
                                    ]
                                ], r29_flag);
                            }));
                        }
                    };
                } else
                    return void 0;
            };
            r25_f = ['.unit'];
            r25_j = r25_pairs['length'] - 1;
            for (; r25_j >= 0; r25_j = r25_j - 1) {
                _r25_t0 = r25_pairs[r25_j];
                if (_r25_t0 instanceof Array && _r25_t0['length'] === 2) {
                    r25_pattern = _r25_t0[0];
                    r25_body = _r25_t0[1];
                    r25_pat = r25_matchQ(r25_pattern);
                    r25_cond = r25_pat['whether'](r25_t);
                    if (r25_cond)
                        _r25_t3 = [
                            '.if',
                            r25_cond,
                            [
                                '.begin',
                                r25_pat['assign'](r25_t),
                                r0_ex(r25_body, r25_env)
                            ],
                            r25_f
                        ];
                    else {
                        if (true)
                            _r25_t4 = [
                                '.begin',
                                r25_pat['assign'](r25_t),
                                r0_ex(r25_body, r25_env)
                            ];
                        else
                            _r25_t4 = void 0;
                        _r25_t3 = _r25_t4;
                    }
                    _r25_t2 = _r25_t3;
                } else {
                    if (_r25_t0 instanceof Array && _r25_t0['length'] === 3) {
                        r25_pattern = _r25_t0[0];
                        r25_guard = _r25_t0[1];
                        r25_body = _r25_t0[2];
                        r25_pat = r25_matchQ(r25_pattern);
                        r25_cond = r25_pat['whether'](r25_t);
                        if (r25_cond) {
                            r25_tc = r25_env['newt']();
                            _r25_t6 = [
                                '.begin',
                                [
                                    '.set',
                                    r25_tc,
                                    [
                                        '.quote',
                                        false
                                    ]
                                ],
                                [
                                    '.if',
                                    r25_cond,
                                    [
                                        '.begin',
                                        r25_pat['assign'](r25_t),
                                        [
                                            '.if',
                                            r0_ex(r25_guard, r25_env),
                                            [
                                                '.set',
                                                r25_tc,
                                                [
                                                    '.quote',
                                                    true
                                                ]
                                            ],
                                            [
                                                '.set',
                                                r25_tc,
                                                [
                                                    '.quote',
                                                    false
                                                ]
                                            ]
                                        ]
                                    ]
                                ],
                                [
                                    '.if',
                                    r25_tc,
                                    r0_ex(r25_body, r25_env),
                                    r25_f
                                ]
                            ];
                        } else {
                            if (true)
                                _r25_t7 = [
                                    '.begin',
                                    r25_pat['assign'](r25_t),
                                    [
                                        '.if',
                                        r0_ex(r25_guard, r25_env),
                                        r0_ex(r25_body, r25_env),
                                        r25_f
                                    ]
                                ];
                            else
                                _r25_t7 = void 0;
                            _r25_t6 = _r25_t7;
                        }
                        _r25_t5 = _r25_t6;
                    } else {
                        r25_any = _r25_t0;
                        _r25_t5 = r25_f;
                    }
                    _r25_t2 = _r25_t5;
                }
                r25_f = _r25_t2;
            }
            return [
                '.begin',
                [
                    '.set',
                    r25_t,
                    r0_ex(r25_form[1], r25_env)
                ],
                r25_f
            ];
        });
        r5_externs['macros']['put']('regex', function _r5_t18(r45_form, r45_env) {
            var r45_form, r45_env, r45_args, r45_s, r45_flag, _r45_t0, _r45_t1, _r45_t2, _r45_t3;
            _r45_t0 = r45_form;
            if (_r45_t0 instanceof Array && _r45_t0['length'] === 2 && 'regex' === _r45_t0[0] && (_r45_t0[1] instanceof Array && _r45_t0[1]['length'] === 2 && '.quote' === _r45_t0[1][0])) {
                r45_s = _r45_t0[1][1];
                return [
                    '.quote',
                    new RegExp(r45_s)
                ];
            } else if (_r45_t0 instanceof Array && _r45_t0['length'] === 3 && 'regex' === _r45_t0[0] && (_r45_t0[1] instanceof Array && _r45_t0[1]['length'] === 2 && '.quote' === _r45_t0[1][0]) && (_r45_t0[2] instanceof Array && _r45_t0[2]['length'] === 2 && '.quote' === _r45_t0[2][0])) {
                r45_s = _r45_t0[1][1];
                r45_flag = _r45_t0[2][1];
                return [
                    '.quote',
                    new RegExp(r45_s, r45_flag)
                ];
            } else if (_r45_t0 instanceof Array && _r45_t0['length'] >= 1 && 'regex' === _r45_t0[0]) {
                r45_args = _r45_t0['slice'](1);
                return [
                    '.new',
                    r5_externs['use']('RegExp')
                ]['concat'](r45_args);
            } else
                return void 0;
        });
        r5_externs['macros']['put']('define-macro', function _r5_t19(r46_form, r46_env) {
            var r46_form, r46_env, r46_otherwise, r46_op, r46_name, r46_body, r46_ds, r46_macroG, r46_macroFn, r46_str, _r46_t0, _r46_t1, _r46_t2, _r46_t3, _r46_t4, _r46_t5, _r46_t6, _r46_t7, _r46_t8, _r46_t9;
            _r46_t0 = r46_form;
            if (_r46_t0 instanceof Array && _r46_t0['length'] === 3 && (_r46_t0[1] instanceof Array && _r46_t0[1]['length'] === 2 && '.quote' === _r46_t0[1][0])) {
                r46_op = _r46_t0[0];
                r46_str = _r46_t0[1][1];
                r46_body = _r46_t0[2];
                return r0_ex([
                    r46_op,
                    r46_str,
                    r46_body
                ], r46_env);
            } else {
                _r46_t1 = false;
                if (_r46_t0 instanceof Array && _r46_t0['length'] === 3) {
                    r46_op = _r46_t0[0];
                    r46_name = _r46_t0[1];
                    r46_body = _r46_t0[2];
                    if (r0_atom(r46_name))
                        _r46_t4 = _r46_t1 = true;
                    else
                        _r46_t4 = _r46_t1 = false;
                    _r46_t3 = _r46_t4;
                } else
                    _r46_t3 = void 0;
                if (_r46_t1) {
                    r46_ds = new r0_Scope(r46_env);
                    r46_ds['declare']('atom', true);
                    r46_ds['declare']('prim', true);
                    r46_ds['declare']('formOf', true);
                    r46_ds['declare']('scopeOf', true);
                    r46_ds['declare']('definingEnv', true);
                    r46_macroG = new Function(r46_ds['castName']('atom'), r46_ds['castName']('prim'), r46_ds['castName']('formOf'), r46_ds['castName']('scopeOf'), r46_ds['castName']('definingEnv'), r0_escodegen['generate'](r0_patrisika['generate']([
                        '.return',
                        r0_ex(r46_body, r46_ds)
                    ], r46_ds, function _r46_t6(r47_form) {
                        var r47_form;
                        return [
                            '.return',
                            r47_form
                        ];
                    })));
                    r46_macroFn = r46_macroG(r0_wrapForSyntacticClosure(r0_atom), r0_wrapForSyntacticClosure(r0_prim), function _r46_t7(r48_x) {
                        var r48_x;
                        return r48_x[1];
                    }, function _r46_t8(r49_x) {
                        var r49_x;
                        return r49_x[2];
                    }, r46_env);
                    r46_env['macros']['put'](r46_name, function _r46_t9(r50_c, r50_e) {
                        var r50_c, r50_e, r50_result, r50_s;
                        r50_result = r46_macroFn(r50_c, r50_e);
                        r50_s = new r0_Scope(r46_env);
                        r50_s['hanging'] = r50_e;
                        r50_s['semiparent'] = r50_e;
                        return r0_ex(r50_result, r50_s);
                    });
                    return ['.unit'];
                } else {
                    r46_otherwise = _r46_t0;
                    return ['.unit'];
                }
            }
        });
        r5_externs['macros']['put']('macro-match', function _r5_t20(r51_form, r51_env) {
            var r51_form, r51_env, r51_otherwise, r51_c, r51_e, r51_patterns, r51_t, r51_tx, r51_tw, _r51_t0, _r51_t1;
            _r51_t0 = r51_form;
            if (_r51_t0 instanceof Array && _r51_t0['length'] >= 3 && 'macro-match' === _r51_t0[0]) {
                r51_c = _r51_t0[1];
                r51_e = _r51_t0[2];
                r51_patterns = _r51_t0['slice'](3);
                r51_t = r51_env['newt']();
                r51_tx = r51_env['newt']();
                r51_tw = r51_env['newt']();
                return [
                    '.begin',
                    [
                        '.set',
                        r51_t,
                        r51_e
                    ],
                    [
                        '.set',
                        r51_tw,
                        [
                            '.lambda',
                            [r51_tx],
                            [
                                '.return',
                                [
                                    '.list',
                                    [
                                        '.quote',
                                        '.syntactic-closure'
                                    ],
                                    r51_tx,
                                    r51_t
                                ]
                            ]
                        ]
                    ],
                    r5_externs['macros']['get']('match')([
                        'match',
                        r51_c
                    ]['concat'](r51_patterns), r51_env, r51_tw)
                ];
            } else {
                r51_otherwise = _r51_t0;
                return ['.unit'];
            }
        });
        r0_ex(require('./essential-macros.json'), r5_externs);
        r5_externs['pFamily'] = 'r';
        return r5_externs;
    };
    exports['Create'] = r0_Create;
}
