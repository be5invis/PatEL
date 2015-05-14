var r0_patrisika, r0_atom, r0_prim, r0_Scope, r0_escodegen, r0_util, r0_ex, r0_deQuasiquote, r0_FormInvalidError, r0_wrapForSyntacticClosure, r0_Create, _r0_t0, _r0_t1, _r0_t2, _r0_t3;

r0_patrisika = require("patrisika"), r0_atom = function(r1_x) {
    var r1_x;
    return "string" == typeof r1_x;
}, r0_prim = function(r2_x) {
    var r2_x;
    return r0_atom(r2_x) && "&" !== r2_x && "&!" !== r2_x && ("." === r2_x[0] || /^\W+/.test(r2_x));
}, r0_Scope = require("patrisika").Scope, r0_escodegen = require("escodegen"), r0_util = require("util"), 
r0_ex = require("./ex").ex, r0_deQuasiquote = require("./ex").deQuasiquote, r0_FormInvalidError = r0_patrisika.FormInvalidError, 
r0_wrapForSyntacticClosure = function(r3_fn) {
    var r3_fn;
    return function(r4_x) {
        var r4_x, r4_otherwise, r4_c, r4_e, _r4_t0;
        return _r4_t0 = r4_x, _r4_t0 instanceof Array && 3 === _r4_t0.length && ".syntactic-closure" === _r4_t0[0] ? (r4_c = _r4_t0[1], 
        r4_e = _r4_t0[2], r3_fn(r4_c)) : (r4_otherwise = _r4_t0, r3_fn(r4_x));
    };
}, r0_Create = function() {
    var r5_externs, r5_operatorRename, r5_reportInvalid, r5_AssignWithMod, r5_Assign, r5_boole;
    return r5_externs = r0_patrisika.DefaultExterns(), r5_externs.castName = function(r6_name) {
        var r6_name;
        return r6_name;
    }, r5_externs.declare("require"), r5_externs.declare("exports"), r5_externs.declare("process"), 
    r5_externs.declare("module"), r5_externs.declare("Error"), r5_operatorRename = function(r7_op) {
        var r7_op;
        return function(r8_form, r8_env) {
            var r8_form, r8_env;
            return r0_ex([ r7_op ].concat(r8_form.slice(1)), r8_env);
        };
    }, r5_reportInvalid = function(r9_form, r9_reason) {
        var r9_form, r9_reason;
        throw new r0_FormInvalidError(r9_form, r9_reason);
    }, r5_externs.macros.put("begin", r5_operatorRename(".begin")), r5_externs.macros.put("then", r5_operatorRename(".begin")), 
    r5_externs.macros.put("else", r5_operatorRename(".begin")), r5_externs.macros.put("while", r5_operatorRename(".while")), 
    r5_externs.macros.put("try", r5_operatorRename(".try")), r5_externs.macros.put("is", r5_operatorRename(".is")), 
    r5_externs.macros.put("<@", r5_operatorRename(".is")), r5_externs.macros.put("new", r5_operatorRename(".new")), 
    r5_externs.macros.put("this", r5_operatorRename(".thisp")), r5_externs.macros.put("arguments", r5_operatorRename(".argsp")), 
    r5_externs.macros.put("and", r5_operatorRename("&&")), r5_externs.macros.put("or", r5_operatorRename("||")), 
    r5_externs.macros.put("not", r5_operatorRename("!")), r5_externs.macros.put("return", r5_operatorRename(".return")), 
    r5_externs.macros.put("yield", r5_operatorRename(".yield")), r5_externs.macros.put("throw", r5_operatorRename(".throw")), 
    r5_externs.macros.put("list", r5_operatorRename(".list")), r5_externs.macros.put("typeof", r5_operatorRename(".typeof")), 
    r5_externs.macros.put("quasiquote", r5_operatorRename(".quasiquote")), r5_externs.macros.put("syntax", r5_operatorRename(".quasiquote")), 
    r5_externs.macros.put("lambda", function(r10_form, r10_env) {
        var r10_form, r10_env, r10_otherwise, r10_car, r10_body, r10_parameters, _r10_t0, _r10_t1, _r10_t2, _r10_t3;
        return _r10_t0 = r10_form, _r10_t1 = !1, _r10_t0 instanceof Array && 3 === _r10_t0.length ? (r10_car = _r10_t0[0], 
        r10_parameters = _r10_t0[1], r10_body = _r10_t0[2], _r10_t3 = _r10_t1 = r0_atom(r10_parameters) ? !0 : !1, 
        _r10_t2 = _r10_t3) : _r10_t2 = void 0, _r10_t1 ? r0_ex([ ".lambda", [ r10_parameters ], r10_body ], r10_env) : _r10_t0 instanceof Array && 3 === _r10_t0.length ? (r10_car = _r10_t0[0], 
        r10_parameters = _r10_t0[1], r10_body = _r10_t0[2], r0_ex([ ".lambda", r10_parameters, r10_body ], r10_env)) : _r10_t0 instanceof Array && 2 === _r10_t0.length ? (r10_car = _r10_t0[0], 
        r10_body = _r10_t0[1], r0_ex([ ".lambda", [], r10_body ], r10_env)) : _r10_t0 instanceof Array && 1 === _r10_t0.length ? (r10_car = _r10_t0[0], 
        r0_ex([ ".lambda", [], [ ".unit" ] ], r10_body)) : (r10_otherwise = _r10_t0, r5_reportInvalid(r10_otherwise, "Invalid Lambda Formation"));
    }), r5_externs.macros.put("function", r5_externs.macros.get("lambda")), r5_externs.macros.put("->", r5_externs.macros.get("lambda")), 
    r5_externs.macros.put("if", function(r11_form, r11_env) {
        var r11_form, r11_env, r11_otherwise, r11_test, r11_consequents, r11_alternates, r11_consequent, r11_alternate, _r11_t0;
        return _r11_t0 = r11_form, _r11_t0 instanceof Array && 3 === _r11_t0.length && "if" === _r11_t0[0] ? (r11_test = _r11_t0[1], 
        r11_consequent = _r11_t0[2], r0_ex([ ".if", r11_test, r11_consequent ], r11_env)) : _r11_t0 instanceof Array && 4 === _r11_t0.length && "if" === _r11_t0[0] ? (r11_test = _r11_t0[1], 
        r11_consequent = _r11_t0[2], r11_alternate = _r11_t0[3], r0_ex([ ".if", r11_test, r11_consequent, r11_alternate ], r11_env)) : _r11_t0 instanceof Array && 3 === _r11_t0.length && "if" === _r11_t0[0] && _r11_t0[2] instanceof Array && _r11_t0[2].length >= 1 && "then" === _r11_t0[2][0] ? (r11_test = _r11_t0[1], 
        r11_consequents = _r11_t0[2].slice(1), r0_ex([ ".if", r11_test, [ ".begin" ].concat(r11_consequents) ], r11_env)) : _r11_t0 instanceof Array && 4 === _r11_t0.length && "if" === _r11_t0[0] && _r11_t0[2] instanceof Array && _r11_t0[2].length >= 1 && "then" === _r11_t0[2][0] && _r11_t0[3] instanceof Array && _r11_t0[3].length >= 1 && "else" === _r11_t0[3][0] ? (r11_test = _r11_t0[1], 
        r11_consequents = _r11_t0[2].slice(1), r11_alternates = _r11_t0[3].slice(1), r0_ex([ ".if", r11_test, [ ".begin" ].concat(r11_consequents), [ ".begin" ].concat(r11_alternates) ], r11_env)) : (r11_otherwise = _r11_t0, 
        r5_reportInvalid(r11_otherwise, "Invalid Conditional Form"));
    }), r5_externs.macros.put(".conslist", function(r12_form, r12_env) {
        var r12_form, r12_env;
        return [ [ ".", r0_ex([ ".list" ].concat(r12_form.slice(1, -1)), r12_env), [ ".quote", "concat" ] ], r0_ex(r12_form[r12_form.length - 1], r12_env) ];
    }), r5_externs.macros.put("let", function(r13_form, r13_env) {
        var r13_form, r13_env, r13_pairs, r13_args, r13_paras, r13_j, r13_arg, r13_param, r13_useless, _r13_t0, _r13_t1, _r13_t2, _r13_t3;
        for (r13_pairs = r13_form.slice(1, -1), r13_args = [], r13_paras = [], r13_j = 0; r13_j < r13_pairs.length; r13_j += 1) _r13_t0 = r13_pairs[r13_j], 
        _r13_t0 instanceof Array && _r13_t0.length >= 2 ? (r13_arg = _r13_t0[0], r13_param = _r13_t0[1], 
        r13_useless = _r13_t0.slice(2), r13_args.push(r13_arg), r13_paras.push(r13_param)) : _r13_t0 instanceof Array && 2 === _r13_t0.length ? (r13_arg = _r13_t0[0], 
        r13_param = _r13_t0[1], r13_args.push(r13_arg), r13_paras.push(r13_param)) : (_r13_t1 = !1, 
        _r13_t0 instanceof Array && 1 === _r13_t0.length ? (r13_arg = _r13_t0[0], _r13_t3 = _r13_t1 = r0_atom(r13_arg) ? !0 : !1, 
        _r13_t2 = _r13_t3) : _r13_t2 = void 0, _r13_t1 && (r13_args.push(r13_arg), r13_paras.push(r13_env.use(r13_arg))));
        return r0_ex([ ".beta", r13_args, r13_form[r13_form.length - 1] ].concat(r13_paras), r13_env);
    }), r5_externs.macros.put("object", function(r14_form, r14_env) {
        var r14_form, r14_env, r14_pairs;
        return r14_pairs = r14_form.slice(1).map(function(r15_pair) {
            var r15_pair, r15_property, r15_value, r15_useless, _r15_t0, _r15_t1, _r15_t4, _r15_t5;
            return _r15_t0 = r15_pair, _r15_t0 instanceof Array && _r15_t0.length >= 2 ? (r15_property = _r15_t0[0], 
            r15_value = _r15_t0[1], r15_useless = _r15_t0.slice(2), [ r15_property, r0_ex(r15_value, r14_env) ]) : _r15_t0 instanceof Array && 2 === _r15_t0.length ? (r15_property = _r15_t0[0], 
            r15_value = _r15_t0[1], [ r15_property, r0_ex(r15_value, r14_env) ]) : (_r15_t1 = !1, 
            _r15_t0 instanceof Array && 1 === _r15_t0.length ? (r15_property = _r15_t0[0], _r15_t5 = _r15_t1 = r0_atom(r15_property) ? !0 : !1, 
            _r15_t4 = _r15_t5) : _r15_t4 = void 0, _r15_t1 ? [ r15_property, r14_env.use(r15_property) ] : void 0);
        }), [ ".hash" ].concat(r14_pairs);
    }), r5_externs.macros.put("piecewise", function(r16_form, r16_env) {
        var r16_form, r16_env, r16_pairs, r16_f, r16_j, _r16_t0;
        if (_r16_t0 = r16_form, _r16_t0 instanceof Array && _r16_t0.length >= 1 && "piecewise" === _r16_t0[0]) {
            for (r16_pairs = _r16_t0.slice(1), r16_f = [ ".unit" ], r16_j = r16_pairs.length - 1; r16_j >= 0; r16_j -= 1) r16_f = [ ".if", r0_ex(r16_pairs[r16_j][0], r16_env), r0_ex(r16_pairs[r16_j][1], r16_env), r16_f ];
            return r16_f;
        }
        return void 0;
    }), r5_AssignWithMod = function(r17_left, r17_right, r17_mod, r17_env, r17_locallyQ) {
        var r17_left, r17_right, r17_mod, r17_env, r17_locallyQ, r17_any, r17_callee, r17_paras, r17_whatever, r17_items, r17_t, r17_assignments, r17_j, r17_a, r17_id, _r17_t0;
        if (_r17_t0 = r17_left, r17_id = _r17_t0, r0_atom(r17_id)) return r17_locallyQ ? [ ".set", r0_ex([ ".local", r17_id ], r17_env), r0_ex([ r17_mod, r17_right ], r17_env) ] : [ ".set", r0_ex(r17_left, r17_env), r0_ex([ r17_mod, r17_right ], r17_env) ];
        if (_r17_t0 instanceof Array && 2 === _r17_t0.length && ".local" === _r17_t0[0]) return r17_a = _r17_t0[1], 
        r5_AssignWithMod(r17_a, r17_right, r17_mod, r17_env, !0);
        if (_r17_t0 instanceof Array && _r17_t0.length >= 1 && ".list" === _r17_t0[0]) {
            for (r17_items = _r17_t0.slice(1), r17_t = r17_env.newt(), r17_assignments = [ ".begin", [ ".set", r17_t, r0_ex([ r17_mod, r17_right ], r17_env) ] ], 
            r17_j = 0; r17_j < r17_items.length; r17_j += 1) r17_assignments.push(r5_Assign(r17_items[r17_j], [ ".", r17_t, [ ".quote", r17_j ] ], r17_env, r17_locallyQ));
            return r17_assignments.push(r17_t), r17_assignments;
        }
        if (_r17_t0 instanceof Array && _r17_t0.length >= 1 && ".hash" === _r17_t0[0]) {
            for (r17_items = _r17_t0.slice(1), r17_t = r17_env.newt(), r17_assignments = [ ".begin", [ ".set", r17_t, r0_ex([ r17_mod, r17_right ], r17_env) ] ], 
            r17_j = 0; r17_j < r17_items.length; r17_j += 1) r17_assignments.push(r5_Assign(r17_items[r17_j][1], [ ".", r17_t, r17_items[r17_j][0] ], r17_env, r17_locallyQ));
            return r17_assignments.push(r17_t), r17_assignments;
        }
        if (_r17_t0 instanceof Array && _r17_t0.length >= 1 && ".revcall" === _r17_t0[0]) return r17_whatever = _r17_t0.slice(1), 
        r5_AssignWithMod([].concat(r17_whatever), r17_right, r17_mod, r17_env, r17_locallyQ);
        if (_r17_t0 instanceof Array && _r17_t0.length >= 1) return r17_callee = _r17_t0[0], 
        r17_paras = _r17_t0.slice(1), r0_atom(r17_callee) && r17_env.macros.has(r17_callee) ? r5_AssignWithMod(r0_ex([ r17_callee ].concat(r17_paras), r17_env), r17_right, r17_mod, r17_env, r17_locallyQ) : r0_prim(r17_callee) ? [ ".set", r0_ex(r17_left, r17_env), r0_ex([ r17_mod, r17_right ], r17_env) ] : r0_atom(r17_callee) && r17_locallyQ ? [ ".set", r0_ex([ ".local", r17_callee ], r17_env), r0_ex([ r17_mod, [ ".lambda", [].concat(r17_paras), r17_right ] ], r17_env) ] : [ ".set", r0_ex(r17_callee, r17_env), r0_ex([ r17_mod, [ ".lambda", [].concat(r17_paras), r17_right ] ], r17_env) ];
        throw r17_any = _r17_t0, new r0_FormInvalidError(r17_left, "Invalid Assignment Left-hand Side");
    }, r5_Assign = function(r18_left, r18_right, r18_env, r18_locallyQ) {
        var r18_left, r18_right, r18_env, r18_locallyQ;
        return r5_AssignWithMod(r18_left, r18_right, ".unquote", r18_env, r18_locallyQ);
    }, r5_externs.macros.put("define", function(r19_form, r19_env) {
        var r19_form, r19_env, r19_any, r19_op, r19_left, r19_right, r19_modifer, _r19_t0, _r19_t1, _r19_t4, _r19_t5;
        if (_r19_t0 = r19_form, _r19_t0 instanceof Array && 4 === _r19_t0.length) return r19_op = _r19_t0[0], 
        r19_modifer = _r19_t0[1], r19_left = _r19_t0[2], r19_right = _r19_t0[3], r5_AssignWithMod(r19_left, r19_right, r19_modifer, r19_env, !0);
        if (_r19_t0 instanceof Array && 3 === _r19_t0.length) return r19_op = _r19_t0[0], 
        r19_left = _r19_t0[1], r19_right = _r19_t0[2], r5_Assign(r19_left, r19_right, r19_env, !0);
        if (_r19_t1 = !1, _r19_t0 instanceof Array && 2 === _r19_t0.length ? (r19_op = _r19_t0[0], 
        r19_left = _r19_t0[1], _r19_t5 = _r19_t1 = r0_atom(r19_left) ? !0 : !1, _r19_t4 = _r19_t5) : _r19_t4 = void 0, 
        _r19_t1) return [ ".local", r19_left ];
        throw r19_any = _r19_t0, new r0_FormInvalidError(r19_any, "Invalid Assignment");
    }), r5_externs.macros.put("local", r5_externs.macros.get("define")), r5_externs.macros.put("set", function(r20_form, r20_env) {
        var r20_form, r20_env, r20_any, r20_op, r20_left, r20_right, _r20_t0;
        if (_r20_t0 = r20_form, _r20_t0 instanceof Array && 3 === _r20_t0.length) return r20_op = _r20_t0[0], 
        r20_left = _r20_t0[1], r20_right = _r20_t0[2], r5_Assign(r20_left, r20_right, r20_env, !1);
        throw r20_any = _r20_t0, new r0_FormInvalidError(r20_any, "Invalid Assignment");
    }), r5_externs.macros.put("=", r5_externs.macros.get("set")), r5_externs.macros.put("inc", function(r21_form, r21_env) {
        var r21_form, r21_env, r21_op, r21_id, r21_shift, _r21_t0;
        return _r21_t0 = r21_form, _r21_t0 instanceof Array && 2 === _r21_t0.length ? (r21_op = _r21_t0[0], 
        r21_id = _r21_t0[1], r5_Assign(r21_id, [ "+", r21_id, [ ".quote", 1 ] ], r21_env, !1)) : _r21_t0 instanceof Array && 3 === _r21_t0.length ? (r21_op = _r21_t0[0], 
        r21_id = _r21_t0[1], r21_shift = _r21_t0[2], r5_Assign(r21_id, [ "+", r21_id, r21_shift ], r21_env, !1)) : _r21_t0 instanceof Array && 4 === _r21_t0.length && "by" === _r21_t0[2] ? (r21_op = _r21_t0[0], 
        r21_id = _r21_t0[1], r21_shift = _r21_t0[3], r5_Assign(r21_id, [ "+", r21_id, r21_shift ], r21_env, !1)) : void 0;
    }), r5_externs.macros.put("dec", function(r22_form, r22_env) {
        var r22_form, r22_env, r22_op, r22_id, r22_shift, _r22_t0;
        return _r22_t0 = r22_form, _r22_t0 instanceof Array && 2 === _r22_t0.length ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r5_Assign(r22_id, [ "-", r22_id, [ ".quote", 1 ] ], r22_env, !1)) : _r22_t0 instanceof Array && 3 === _r22_t0.length ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r22_shift = _r22_t0[2], r5_Assign(r22_id, [ "-", r22_id, r22_shift ], r22_env, !1)) : _r22_t0 instanceof Array && 4 === _r22_t0.length && "by" === _r22_t0[2] ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r22_shift = _r22_t0[3], r5_Assign(r22_id, [ "-", r22_id, r22_shift ], r22_env, !1)) : void 0;
    }), r5_externs.macros.put("for", function(r23_form, r23_env) {
        var r23_form, r23_env, r23_init, r23_test, r23_step, r23_body, _r23_t0;
        return _r23_t0 = r23_form, _r23_t0 instanceof Array && 5 === _r23_t0.length && "for" === _r23_t0[0] ? (r23_init = _r23_t0[1], 
        r23_test = _r23_t0[2], r23_step = _r23_t0[3], r23_body = _r23_t0[4], [ ".begin", r0_ex(r23_init, r23_env), [ ".while", r0_ex(r23_test, r23_env), [ ".begin", r0_ex(r23_body, r23_env), r0_ex(r23_step, r23_env) ] ] ]) : void 0;
    }), r5_externs.macros.put("foreach", function(r24_form, r24_env) {
        var r24_form, r24_env, r24_varid, r24_range, r24_body, r24_tR, r24_t, _r24_t0;
        return _r24_t0 = r24_form, _r24_t0 instanceof Array && 4 === _r24_t0.length && "foreach" === _r24_t0[0] ? (r24_varid = _r24_t0[1], 
        r24_range = _r24_t0[2], r24_body = _r24_t0[3], r24_tR = r24_env.newt(), r24_t = r24_env.newt(), 
        [ ".begin", [ ".set", r24_tR, r0_ex(r24_range, r24_env) ], [ ".while", [ "!", [ ".", [ ".set", r24_t, [ [ ".", r24_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", r5_Assign(r24_varid, [ ".", r24_t, [ ".quote", "value" ] ], r24_env, !1), r0_ex(r24_body, r24_env) ] ] ]) : void 0;
    }), r5_externs.macros.put("this", [ ".thisp" ]), r5_externs.macros.put("arguments", [ ".argsp" ]), 
    r5_externs.macros.put("nothing", [ ".unit" ]), r5_externs.macros.put("undefined", [ ".unit" ]), 
    r5_externs.macros.put("null", [ ".quote", null ]), r5_externs.macros.put("true", [ ".quote", !0 ]), 
    r5_externs.macros.put("false", [ ".quote", !1 ]), r5_boole = function(r25_x) {
        var r25_x;
        return !!r25_x;
    }, r5_externs.macros.put("match", function(r26_form, r26_env, r26_wrapper) {
        var r26_form, r26_env, r26_wrapper, r26_pairs, r26_t, r26_matchQ, r26_f, r26_j, r26_any, r26_pattern, r26_guard, r26_body, r26_pat, r26_cond, r26_tc, _r26_t0, _r26_t2, _r26_t3, _r26_t4, _r26_t5, _r26_t6, _r26_t7;
        for (r26_pairs = r26_form.slice(2), r26_t = r26_env.newt(), r26_matchQ = function(r27_pattern) {
            var r27_pattern, r27_callee, r27_subpatterns, r27_ms, r27_t, r27_final, r27_whatever, r27_x, r27_id, _r27_t0;
            return _r27_t0 = r27_pattern, r27_id = _r27_t0, r0_atom(r27_id) ? {
                whether: function(r44_x) {
                    return null;
                },
                assign: function(r45_x, r45_flag) {
                    var r45_x, r45_flag, _r45_t0, _r45_t1, _r45_t2;
                    return _r45_t0 = ".set", _r45_t1 = r0_ex([ ".local", r27_pattern ], r26_env), _r45_t2 = r26_wrapper && !r45_flag ? [ r26_wrapper, r45_x ] : r45_x, 
                    [ _r45_t0, _r45_t1, _r45_t2 ];
                }
            } : _r27_t0 instanceof Array && 2 === _r27_t0.length && ".quote" === _r27_t0[0] ? (r27_x = _r27_t0[1], 
            {
                whether: function(r42_x) {
                    var r42_x;
                    return [ "===", r0_ex(r27_pattern, r26_env), r42_x ];
                },
                assign: function(r43_x, r43_flag) {
                    return [ ".unit" ];
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && "." === _r27_t0[0] ? (r27_whatever = _r27_t0.slice(1), 
            {
                whether: function(r40_x) {
                    return null;
                },
                assign: function(r41_x, r41_flag) {
                    var r41_x, r41_flag, _r41_t0, _r41_t1, _r41_t2;
                    return _r41_t0 = ".set", _r41_t1 = r0_ex(r27_pattern, r26_env), _r41_t2 = r26_wrapper && !r41_flag ? [ r26_wrapper, r41_x ] : r41_x, 
                    [ _r41_t0, _r41_t1, _r41_t2 ];
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && ".list" === _r27_t0[0] ? (r27_subpatterns = _r27_t0.slice(1), 
            r27_ms = r27_subpatterns.map(r26_matchQ), {
                whether: function(r36_x) {
                    var r36_x;
                    return [ "&&", [ ".is", r36_x, r5_externs.use("Array") ], [ "===", [ ".", r36_x, [ ".quote", "length" ] ], [ ".quote", r27_ms.length ] ] ].concat(r27_ms.map(function(r37_p, r37_j) {
                        var r37_p, r37_j;
                        return r37_p.whether([ ".", r36_x, [ ".quote", r37_j ] ]);
                    })).filter(r5_boole);
                },
                assign: function(r38_x, r38_flag) {
                    var r38_x, r38_flag;
                    return [ ".begin" ].concat(r27_ms.map(function(r39_p, r39_j) {
                        var r39_p, r39_j;
                        return r39_p.assign([ ".", r38_x, [ ".quote", r39_j ] ], r38_flag);
                    }));
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && ".conslist" === _r27_t0[0] ? (r27_subpatterns = _r27_t0.slice(1), 
            r27_ms = r27_pattern.slice(1, -1).map(r26_matchQ), r27_final = r26_matchQ(r27_pattern[r27_pattern.length - 1]), 
            {
                whether: function(r32_x) {
                    var r32_x;
                    return [ "&&", [ ".is", r32_x, r5_externs.use("Array") ], [ ">=", [ ".", r32_x, [ ".quote", "length" ] ], [ ".quote", r27_ms.length ] ] ].concat(r27_ms.map(function(r33_p, r33_j) {
                        var r33_p, r33_j;
                        return r33_p.whether([ ".", r32_x, [ ".quote", r33_j ] ]);
                    }).concat([ r27_final.whether([ [ ".", r32_x, [ ".quote", "slice" ] ], [ ".quote", r26_j ] ]) ])).filter(r5_boole);
                },
                assign: function(r34_x, r34_flag) {
                    var r34_x, r34_flag, _r34_t1, _r34_t2, _r34_t3, _r34_t4, _r34_t5, _r34_t6, _r34_t7, _r34_t8;
                    return _r34_t1 = [ ".begin" ].concat(r27_ms.map(function(r35_p, r35_j) {
                        var r35_p, r35_j;
                        return r35_p.assign([ ".", r34_x, [ ".quote", r35_j ] ]);
                    })), _r34_t2 = _r34_t1.concat, _r34_t3 = r27_final, _r34_t4 = _r34_t3.assign, _r34_t5 = r26_wrapper && !r34_flag ? [ [ ".", [ [ ".", r34_x, [ ".quote", "slice" ] ], [ ".quote", r27_ms.length ] ], [ ".quote", "map" ] ], r26_wrapper ] : [ [ ".", r34_x, [ ".quote", "slice" ] ], [ ".quote", r27_ms.length ] ], 
                    _r34_t6 = !0, _r34_t7 = _r34_t4.call(_r34_t3, _r34_t5, _r34_t6), _r34_t8 = [ _r34_t7 ], 
                    _r34_t2.call(_r34_t1, _r34_t8);
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && ".quasiquote" === _r27_t0[0] ? (r27_subpatterns = _r27_t0.slice(1), 
            r26_matchQ(r0_deQuasiquote(r27_pattern[1], 0))) : _r27_t0 instanceof Array && _r27_t0.length >= 1 ? (r27_callee = _r27_t0[0], 
            r27_subpatterns = _r27_t0.slice(1), r27_ms = r27_subpatterns.map(r26_matchQ), r27_t = r26_env.newt(), 
            {
                whether: function(r28_x) {
                    var r28_x;
                    return [ "&&", [ ".set", r27_t, [ [ ".", r0_ex(r27_callee, r26_env), [ ".quote", "unapply" ] ], r28_x, [ ".quote", r27_ms.length ] ] ] ].concat(r27_ms.map(function(r29_p, r29_j) {
                        var r29_p, r29_j;
                        return r29_p.whether([ ".", r27_t, [ ".quote", r29_j ] ]);
                    })).filter(r5_boole);
                },
                assign: function(r30_x, r30_flag) {
                    var r30_flag;
                    return [ ".begin" ].concat(r27_ms.map(function(r31_p, r31_j) {
                        var r31_p, r31_j;
                        return r31_p.assign([ ".", r27_t, [ ".quote", r31_j ] ], r30_flag);
                    }));
                }
            }) : void 0;
        }, r26_f = [ ".unit" ], r26_j = r26_pairs.length - 1; r26_j >= 0; r26_j -= 1) _r26_t0 = r26_pairs[r26_j], 
        _r26_t0 instanceof Array && 2 === _r26_t0.length ? (r26_pattern = _r26_t0[0], r26_body = _r26_t0[1], 
        r26_pat = r26_matchQ(r26_pattern), r26_cond = r26_pat.whether(r26_t), r26_cond ? _r26_t3 = [ ".if", r26_cond, [ ".begin", r26_pat.assign(r26_t), r0_ex(r26_body, r26_env) ], r26_f ] : (_r26_t4 = [ ".begin", r26_pat.assign(r26_t), r0_ex(r26_body, r26_env) ], 
        _r26_t3 = _r26_t4), _r26_t2 = _r26_t3) : (_r26_t0 instanceof Array && 3 === _r26_t0.length ? (r26_pattern = _r26_t0[0], 
        r26_guard = _r26_t0[1], r26_body = _r26_t0[2], r26_pat = r26_matchQ(r26_pattern), 
        r26_cond = r26_pat.whether(r26_t), r26_cond ? (r26_tc = r26_env.newt(), _r26_t6 = [ ".begin", [ ".set", r26_tc, [ ".quote", !1 ] ], [ ".if", r26_cond, [ ".begin", r26_pat.assign(r26_t), [ ".if", r0_ex(r26_guard, r26_env), [ ".set", r26_tc, [ ".quote", !0 ] ], [ ".set", r26_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", r26_tc, r0_ex(r26_body, r26_env), r26_f ] ]) : (_r26_t7 = [ ".begin", r26_pat.assign(r26_t), [ ".if", r0_ex(r26_guard, r26_env), r0_ex(r26_body, r26_env), r26_f ] ], 
        _r26_t6 = _r26_t7), _r26_t5 = _r26_t6) : (r26_any = _r26_t0, _r26_t5 = r26_f), _r26_t2 = _r26_t5), 
        r26_f = _r26_t2;
        return [ ".begin", [ ".set", r26_t, r0_ex(r26_form[1], r26_env) ], r26_f ];
    }), r5_externs.macros.put("regex", function(r46_form, r46_env) {
        var r46_form, r46_args, r46_s, r46_flag, _r46_t0;
        return _r46_t0 = r46_form, _r46_t0 instanceof Array && 2 === _r46_t0.length && "regex" === _r46_t0[0] && _r46_t0[1] instanceof Array && 2 === _r46_t0[1].length && ".quote" === _r46_t0[1][0] ? (r46_s = _r46_t0[1][1], 
        [ ".quote", new RegExp(r46_s) ]) : _r46_t0 instanceof Array && 3 === _r46_t0.length && "regex" === _r46_t0[0] && _r46_t0[1] instanceof Array && 2 === _r46_t0[1].length && ".quote" === _r46_t0[1][0] && _r46_t0[2] instanceof Array && 2 === _r46_t0[2].length && ".quote" === _r46_t0[2][0] ? (r46_s = _r46_t0[1][1], 
        r46_flag = _r46_t0[2][1], [ ".quote", new RegExp(r46_s, r46_flag) ]) : _r46_t0 instanceof Array && _r46_t0.length >= 1 && "regex" === _r46_t0[0] ? (r46_args = _r46_t0.slice(1), 
        [ ".new", r5_externs.use("RegExp") ].concat(r46_args)) : void 0;
    }), r5_externs.macros.put("define-macro", function(r47_form, r47_env) {
        var r47_form, r47_env, r47_otherwise, r47_op, r47_name, r47_body, r47_ds, r47_macroG, r47_macroFn, _r47_t0, _r47_t1, _r47_t2, _r47_t3;
        return _r47_t0 = r47_form, _r47_t1 = !1, _r47_t0 instanceof Array && 3 === _r47_t0.length ? (r47_op = _r47_t0[0], 
        r47_name = _r47_t0[1], r47_body = _r47_t0[2], _r47_t3 = _r47_t1 = r0_atom(r47_name) ? !0 : !1, 
        _r47_t2 = _r47_t3) : _r47_t2 = void 0, _r47_t1 ? (r47_ds = new r0_Scope(r47_env), 
        r47_ds.declare("atom", !0), r47_ds.declare("prim", !0), r47_ds.declare("formOf", !0), 
        r47_ds.declare("scopeOf", !0), r47_macroG = new Function(r47_ds.castName("atom"), r47_ds.castName("prim"), r47_ds.castName("formOf"), r47_ds.castName("scopeOf"), r0_escodegen.generate(r0_patrisika.generate([ ".return", r0_ex(r47_body, r47_ds) ], r47_ds, function(r48_form) {
            var r48_form;
            return [ ".return", r48_form ];
        }))), r47_macroFn = r47_macroG(r0_wrapForSyntacticClosure(r0_atom), r0_wrapForSyntacticClosure(r0_prim), function(r49_x) {
            var r49_x;
            return r49_x[1];
        }, function(r50_x) {
            var r50_x;
            return r50_x[2];
        }), r47_env.macros.put(r47_name, function(r51_c, r51_e) {
            var r51_c, r51_e, r51_result, r51_s;
            return r51_result = r47_macroFn(r51_c, r51_e), r51_s = new r0_Scope(r47_env), r51_s.hanging = r51_e, 
            r51_s.semiparent = r51_e, r0_ex(r51_result, r51_s);
        }), [ ".unit" ]) : (r47_otherwise = _r47_t0, [ ".unit" ]);
    }), r5_externs.macros.put("macro-match", function(r52_form, r52_env) {
        var r52_form, r52_env, r52_otherwise, r52_c, r52_e, r52_patterns, r52_t, r52_tx, r52_tw, _r52_t0;
        return _r52_t0 = r52_form, _r52_t0 instanceof Array && _r52_t0.length >= 3 && "macro-match" === _r52_t0[0] ? (r52_c = _r52_t0[1], 
        r52_e = _r52_t0[2], r52_patterns = _r52_t0.slice(3), r52_t = r52_env.newt(), r52_tx = r52_env.newt(), 
        r52_tw = r52_env.newt(), [ ".begin", [ ".set", r52_t, r52_e ], [ ".set", r52_tw, [ ".lambda", [ r52_tx ], [ ".return", [ ".list", [ ".quote", ".syntactic-closure" ], r52_tx, r52_t ] ] ] ], r5_externs.macros.get("match")([ "match", r52_c ].concat(r52_patterns), r52_env, r52_tw) ]) : (r52_otherwise = _r52_t0, 
        [ ".unit" ]);
    }), r0_ex(require("./essential-macros.json"), r5_externs), r5_externs.pFamily = "r", 
    r5_externs;
}, exports.Create = r0_Create;