var r0_patrisika, r0_atom, r0_prim, r0_Scope, r0_escodegen, r0_util, r0_ex, r0_deQuasiquote, r0_FormInvalidError, r0_wrapForSyntacticClosure, r0_Create, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4;

r0_patrisika = require("patrisika"), r0_atom = function(r1_x) {
    var r1_x;
    return "string" == typeof r1_x;
}, r0_prim = function(r2_x) {
    var r2_x;
    return r0_atom(r2_x) && "&" !== r2_x && "&!" !== r2_x && ("." === r2_x[0] || /^\W+/.test(r2_x));
}, r0_Scope = require("patrisika").Scope, r0_escodegen = require("escodegen"), r0_util = require("util"), 
r0_ex = require("./ex").ex, r0_deQuasiquote = require("./ex").deQuasiquote, r0_FormInvalidError = function(r3_form, r3_reason) {
    var r3_form, r3_reason, _r3_t0, _r3_t1;
    return _r3_t0 = this, _r3_t0.reason = r3_reason, _r3_t0.message = r3_reason, _r3_t0.relatedForm = r3_form, 
    r3_form && r3_form.begins >= 0 && r3_form.ends >= 0 ? (_r3_t0.begins = r3_form.begins, 
    _r3_t0.ends = r3_form.ends, _r3_t1 = _r3_t0.message = _r3_t0.message + ("\nAround (" + _r3_t0.begins + " -- " + _r3_t0.ends + ")")) : _r3_t1 = void 0, 
    null;
}, r0_FormInvalidError.prototype = Object.create(Error.prototype), r0_wrapForSyntacticClosure = function(r4_fn) {
    var r4_fn;
    return function(r5_x) {
        var r5_x, r5_otherwise, r5_c, r5_e, _r5_t0;
        return _r5_t0 = r5_x, _r5_t0 instanceof Array && 3 === _r5_t0.length && ".syntactic-closure" === _r5_t0[0] ? (r5_c = _r5_t0[1], 
        r5_e = _r5_t0[2], r4_fn(r5_c)) : (r5_otherwise = _r5_t0, r4_fn(r5_x));
    };
}, r0_Create = function() {
    var r6_externs, r6_operatorRename, r6_reportInvalid, r6_AssignWithMod, r6_Assign, r6_boole;
    return r6_externs = r0_patrisika.DefaultExterns(), r6_externs.castName = function(r7_name) {
        var r7_name;
        return r7_name;
    }, r6_externs.declare("require"), r6_externs.declare("exports"), r6_externs.declare("process"), 
    r6_externs.declare("module"), r6_externs.declare("Error"), r6_operatorRename = function(r8_op) {
        var r8_op;
        return function(r9_form, r9_env) {
            var r9_form, r9_env;
            return r0_ex([ r8_op ].concat(r9_form.slice(1)), r9_env);
        };
    }, r6_reportInvalid = function(r10_form, r10_reason) {
        var r10_form, r10_reason;
        throw new r0_FormInvalidError(r10_form, r10_reason);
    }, r6_externs.macros.put("begin", r6_operatorRename(".begin")), r6_externs.macros.put("then", r6_operatorRename(".begin")), 
    r6_externs.macros.put("else", r6_operatorRename(".begin")), r6_externs.macros.put("while", r6_operatorRename(".while")), 
    r6_externs.macros.put("try", r6_operatorRename(".try")), r6_externs.macros.put("is", r6_operatorRename(".is")), 
    r6_externs.macros.put("<@", r6_operatorRename(".is")), r6_externs.macros.put("new", r6_operatorRename(".new")), 
    r6_externs.macros.put("this", r6_operatorRename(".thisp")), r6_externs.macros.put("arguments", r6_operatorRename(".argsp")), 
    r6_externs.macros.put("and", r6_operatorRename("&&")), r6_externs.macros.put("or", r6_operatorRename("||")), 
    r6_externs.macros.put("not", r6_operatorRename("!")), r6_externs.macros.put("return", r6_operatorRename(".return")), 
    r6_externs.macros.put("yield", r6_operatorRename(".yield")), r6_externs.macros.put("throw", r6_operatorRename(".throw")), 
    r6_externs.macros.put("list", r6_operatorRename(".list")), r6_externs.macros.put("typeof", r6_operatorRename(".typeof")), 
    r6_externs.macros.put("quasiquote", r6_operatorRename(".quasiquote")), r6_externs.macros.put("syntax", r6_operatorRename(".quasiquote")), 
    r6_externs.macros.put("lambda", function(r11_form, r11_env) {
        var r11_form, r11_env, r11_otherwise, r11_car, r11_body, r11_parameters, _r11_t0;
        return _r11_t0 = r11_form, _r11_t0 instanceof Array && 3 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r11_parameters = _r11_t0[1], r11_body = _r11_t0[2], r0_ex([ ".lambda", r11_parameters, r11_body ], r11_env)) : _r11_t0 instanceof Array && 2 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r11_body = _r11_t0[1], r0_ex([ ".lambda", [], r11_body ], r11_env)) : _r11_t0 instanceof Array && 1 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r0_ex([ ".lambda", [], [ ".unit" ] ], r11_body)) : (r11_otherwise = _r11_t0, r6_reportInvalid(r11_otherwise, "Invalid Lambda Formation"));
    }), r6_externs.macros.put("function", r6_externs.macros.get("lambda")), r6_externs.macros.put("if", function(r12_form, r12_env) {
        var r12_form, r12_env, r12_otherwise, r12_test, r12_consequents, r12_alternates, r12_consequent, r12_alternate, _r12_t0;
        return _r12_t0 = r12_form, _r12_t0 instanceof Array && 3 === _r12_t0.length && "if" === _r12_t0[0] ? (r12_test = _r12_t0[1], 
        r12_consequent = _r12_t0[2], r0_ex([ ".if", r12_test, r12_consequent ], r12_env)) : _r12_t0 instanceof Array && 4 === _r12_t0.length && "if" === _r12_t0[0] ? (r12_test = _r12_t0[1], 
        r12_consequent = _r12_t0[2], r12_alternate = _r12_t0[3], r0_ex([ ".if", r12_test, r12_consequent, r12_alternate ], r12_env)) : _r12_t0 instanceof Array && 3 === _r12_t0.length && "if" === _r12_t0[0] && _r12_t0[2] instanceof Array && _r12_t0[2].length >= 1 && "then" === _r12_t0[2][0] ? (r12_test = _r12_t0[1], 
        r12_consequents = _r12_t0[2].slice(1), r0_ex([ ".if", r12_test, [ ".begin" ].concat(r12_consequents) ], r12_env)) : _r12_t0 instanceof Array && 4 === _r12_t0.length && "if" === _r12_t0[0] && _r12_t0[2] instanceof Array && _r12_t0[2].length >= 1 && "then" === _r12_t0[2][0] && _r12_t0[3] instanceof Array && _r12_t0[3].length >= 1 && "else" === _r12_t0[3][0] ? (r12_test = _r12_t0[1], 
        r12_consequents = _r12_t0[2].slice(1), r12_alternates = _r12_t0[3].slice(1), r0_ex([ ".if", r12_test, [ ".begin" ].concat(r12_consequents), [ ".begin" ].concat(r12_alternates) ], r12_env)) : (r12_otherwise = _r12_t0, 
        r6_reportInvalid(r12_otherwise, "Invalid Conditional Form"));
    }), r6_externs.macros.put(".conslist", function(r13_form, r13_env) {
        var r13_form, r13_env;
        return [ [ ".", r0_ex([ ".list" ].concat(r13_form.slice(1, -1)), r13_env), [ ".quote", "concat" ] ], r0_ex(r13_form[r13_form.length - 1], r13_env) ];
    }), r6_externs.macros.put("let", function(r14_form, r14_env) {
        var r14_form, r14_env, r14_pairs, r14_args, r14_paras, r14_j, r14_arg, r14_param, r14_useless, _r14_t0, _r14_t1, _r14_t2, _r14_t3;
        for (r14_pairs = r14_form.slice(1, -1), r14_args = [], r14_paras = [], r14_j = 0; r14_j < r14_pairs.length; r14_j += 1) _r14_t0 = r14_pairs[r14_j], 
        _r14_t0 instanceof Array && _r14_t0.length >= 2 ? (r14_arg = _r14_t0[0], r14_param = _r14_t0[1], 
        r14_useless = _r14_t0.slice(2), r14_args.push(r14_arg), r14_paras.push(r14_param)) : _r14_t0 instanceof Array && 2 === _r14_t0.length ? (r14_arg = _r14_t0[0], 
        r14_param = _r14_t0[1], r14_args.push(r14_arg), r14_paras.push(r14_param)) : (_r14_t1 = !1, 
        _r14_t0 instanceof Array && 1 === _r14_t0.length ? (r14_arg = _r14_t0[0], _r14_t3 = _r14_t1 = r0_atom(r14_arg) ? !0 : !1, 
        _r14_t2 = _r14_t3) : _r14_t2 = void 0, _r14_t1 && (r14_args.push(r14_arg), r14_paras.push(r14_env.use(r14_arg))));
        return r0_ex([ ".beta", r14_args, r14_form[r14_form.length - 1] ].concat(r14_paras), r14_env);
    }), r6_externs.macros.put("object", function(r15_form, r15_env) {
        var r15_form, r15_env, r15_pairs;
        return r15_pairs = r15_form.slice(1).map(function(r16_pair) {
            var r16_pair, r16_property, r16_value, r16_useless, _r16_t0, _r16_t1, _r16_t4, _r16_t5;
            return _r16_t0 = r16_pair, _r16_t0 instanceof Array && _r16_t0.length >= 2 ? (r16_property = _r16_t0[0], 
            r16_value = _r16_t0[1], r16_useless = _r16_t0.slice(2), [ r16_property, r0_ex(r16_value, r15_env) ]) : _r16_t0 instanceof Array && 2 === _r16_t0.length ? (r16_property = _r16_t0[0], 
            r16_value = _r16_t0[1], [ r16_property, r0_ex(r16_value, r15_env) ]) : (_r16_t1 = !1, 
            _r16_t0 instanceof Array && 1 === _r16_t0.length ? (r16_property = _r16_t0[0], _r16_t5 = _r16_t1 = r0_atom(r16_property) ? !0 : !1, 
            _r16_t4 = _r16_t5) : _r16_t4 = void 0, _r16_t1 ? [ r16_property, r15_env.use(r16_property) ] : void 0);
        }), [ ".hash" ].concat(r15_pairs);
    }), r6_externs.macros.put("piecewise", function(r17_form, r17_env) {
        var r17_form, r17_env, r17_pairs, r17_f, r17_j, _r17_t0;
        if (_r17_t0 = r17_form, _r17_t0 instanceof Array && _r17_t0.length >= 1 && "piecewise" === _r17_t0[0]) {
            for (r17_pairs = _r17_t0.slice(1), r17_f = [ ".unit" ], r17_j = r17_pairs.length - 1; r17_j >= 0; r17_j -= 1) r17_f = [ ".if", r0_ex(r17_pairs[r17_j][0], r17_env), r0_ex(r17_pairs[r17_j][1], r17_env), r17_f ];
            return r17_f;
        }
        return void 0;
    }), r6_AssignWithMod = function(r18_left, r18_right, r18_mod, r18_env, r18_locallyQ) {
        var r18_left, r18_right, r18_mod, r18_env, r18_locallyQ, r18_any, r18_callee, r18_paras, r18_items, r18_a, _r18_t0;
        return _r18_t0 = r18_left, _r18_t0 instanceof Array && 2 === _r18_t0.length && "local" === _r18_t0[0] ? (r18_a = _r18_t0[1], 
        r6_AssignWithMod(r18_a, r18_left, r18_right, r18_mod, r18_env, !0)) : _r18_t0 instanceof Array && 2 === _r18_t0.length && ".local" === _r18_t0[0] ? (r18_a = _r18_t0[1], 
        r6_AssignWithMod(r18_a, r18_left, r18_right, r18_mod, r18_env, !0)) : _r18_t0 instanceof Array && _r18_t0.length >= 1 && ".list" === _r18_t0[0] ? (r18_items = _r18_t0.slice(1), 
        r6_Assign(r18_left, [ r18_mod, r18_right ], r18_env, r18_locallyQ)) : _r18_t0 instanceof Array && _r18_t0.length >= 1 && ".hash" === _r18_t0[0] ? (r18_items = _r18_t0.slice(1), 
        r6_Assign(r18_left, [ r18_mod, r18_right ], r18_env, r18_locallyQ)) : _r18_t0 instanceof Array && _r18_t0.length >= 1 ? (r18_callee = _r18_t0[0], 
        r18_paras = _r18_t0.slice(1), r0_prim(r18_callee) ? [ ".set", r0_ex(r18_left, r18_env), r0_ex([ r18_mod, r18_right ], r18_env) ] : r0_atom(r18_callee) && r18_locallyQ ? [ ".set", r0_ex([ ".local", r18_callee ], r18_env), r0_ex([ r18_mod, [ ".lambda", [].concat(r18_paras), r18_right ] ], r18_env) ] : [ ".set", r0_ex(r18_callee, r18_env), r0_ex([ r18_mod, [ ".lambda", [].concat(r18_paras), r18_right ] ], r18_env) ]) : (r18_any = _r18_t0, 
        r6_Assign(r0_ex, r18_left, [ r18_mod, r18_right ], r18_env, r18_locallyQ));
    }, r6_Assign = function(r19_left, r19_right, r19_env, r19_locallyQ) {
        var r19_left, r19_right, r19_env, r19_locallyQ, r19_any, r19_callee, r19_paras, r19_items, r19_t, r19_assignments, r19_j, r19_a, r19_id, _r19_t0;
        if (_r19_t0 = r19_left, r19_id = _r19_t0, r0_atom(r19_id)) return r19_locallyQ ? [ ".set", r0_ex([ ".local", r19_id ], r19_env), r0_ex(r19_right, r19_env) ] : [ ".set", r0_ex(r19_left, r19_env), r0_ex(r19_right, r19_env) ];
        if (_r19_t0 instanceof Array && 2 === _r19_t0.length && "local" === _r19_t0[0]) return r19_a = _r19_t0[1], 
        r6_Assign(r19_a, r19_right, r19_env, !0);
        if (_r19_t0 instanceof Array && 2 === _r19_t0.length && ".local" === _r19_t0[0]) return r19_a = _r19_t0[1], 
        r6_Assign(r19_a, r19_right, r19_env, !0);
        if (_r19_t0 instanceof Array && _r19_t0.length >= 1 && ".list" === _r19_t0[0]) {
            for (r19_items = _r19_t0.slice(1), r19_t = r19_env.newt(), r19_assignments = [ ".begin", [ ".set", r19_t, r0_ex(r19_right, r19_env) ] ], 
            r19_j = 0; r19_j < r19_items.length; r19_j += 1) r19_assignments.push(r6_Assign(r19_items[r19_j], [ ".", r19_t, [ ".quote", r19_j ] ], r19_env, r19_locallyQ));
            return r19_assignments.push(r19_t), r19_assignments;
        }
        if (_r19_t0 instanceof Array && _r19_t0.length >= 1 && ".hash" === _r19_t0[0]) {
            for (r19_items = _r19_t0.slice(1), r19_t = r19_env.newt(), r19_assignments = [ ".begin", [ ".set", r19_t, r0_ex(r19_right, r19_env) ] ], 
            r19_j = 0; r19_j < r19_items.length; r19_j += 1) r19_assignments.push(r6_Assign(r19_items[r19_j][1], [ ".", r19_t, r19_items[r19_j][0] ], r19_env, r19_locallyQ));
            return r19_assignments.push(r19_t), r19_assignments;
        }
        if (_r19_t0 instanceof Array && _r19_t0.length >= 1) return r19_callee = _r19_t0[0], 
        r19_paras = _r19_t0.slice(1), r0_prim(r19_callee) ? [ ".set", r0_ex(r19_left, r19_env), r0_ex(r19_right, r19_env) ] : r0_atom(r19_callee) && r19_locallyQ ? [ ".set", r0_ex([ ".local", r19_callee ], r19_env), r0_ex([ ".lambda", [].concat(r19_paras), r19_right ], r19_env) ] : [ ".set", r0_ex(r19_callee, r19_env), r0_ex([ ".lambda", [].concat(r19_paras), r19_right ], r19_env) ];
        throw r19_any = _r19_t0, new r0_FormInvalidError(r19_left, "Invalid Assignment Left-hand Side");
    }, r6_externs.macros.put("define", function(r20_form, r20_env) {
        var r20_form, r20_env, r20_any, r20_op, r20_left, r20_right, r20_modifer, _r20_t0, _r20_t1, _r20_t4, _r20_t5;
        if (_r20_t0 = r20_form, _r20_t0 instanceof Array && 4 === _r20_t0.length) return r20_op = _r20_t0[0], 
        r20_modifer = _r20_t0[1], r20_left = _r20_t0[2], r20_right = _r20_t0[3], r6_AssignWithMod(r20_left, r20_right, r20_modifer, r20_env, !0);
        if (_r20_t0 instanceof Array && 3 === _r20_t0.length) return r20_op = _r20_t0[0], 
        r20_left = _r20_t0[1], r20_right = _r20_t0[2], r6_Assign(r20_left, r20_right, r20_env, !0);
        if (_r20_t1 = !1, _r20_t0 instanceof Array && 2 === _r20_t0.length ? (r20_op = _r20_t0[0], 
        r20_left = _r20_t0[1], _r20_t5 = _r20_t1 = r0_atom(r20_left) ? !0 : !1, _r20_t4 = _r20_t5) : _r20_t4 = void 0, 
        _r20_t1) return [ ".local", r20_left ];
        throw r20_any = _r20_t0, new r0_FormInvalidError(r20_any, "Invalid Assignment");
    }), r6_externs.macros.put("local", r6_externs.macros.get("define")), r6_externs.macros.put("set", function(r21_form, r21_env) {
        var r21_form, r21_env, r21_any, r21_op, r21_left, r21_right, _r21_t0;
        if (_r21_t0 = r21_form, _r21_t0 instanceof Array && 3 === _r21_t0.length) return r21_op = _r21_t0[0], 
        r21_left = _r21_t0[1], r21_right = _r21_t0[2], r6_Assign(r21_left, r21_right, r21_env, !1);
        throw r21_any = _r21_t0, new r0_FormInvalidError(r21_any, "Invalid Assignment");
    }), r6_externs.macros.put("inc", function(r22_form, r22_env) {
        var r22_form, r22_env, r22_op, r22_id, r22_shift, _r22_t0;
        return _r22_t0 = r22_form, _r22_t0 instanceof Array && 2 === _r22_t0.length ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r6_Assign(r22_id, [ "+", r22_id, [ ".quote", 1 ] ], r22_env, !1)) : _r22_t0 instanceof Array && 3 === _r22_t0.length ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r22_shift = _r22_t0[2], r6_Assign(r22_id, [ "+", r22_id, r22_shift ], r22_env, !1)) : _r22_t0 instanceof Array && 4 === _r22_t0.length && "by" === _r22_t0[2] ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r22_shift = _r22_t0[3], r6_Assign(r22_id, [ "+", r22_id, r22_shift ], r22_env, !1)) : void 0;
    }), r6_externs.macros.put("dec", function(r23_form, r23_env) {
        var r23_form, r23_env, r23_op, r23_id, r23_shift, _r23_t0;
        return _r23_t0 = r23_form, _r23_t0 instanceof Array && 2 === _r23_t0.length ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r6_Assign(r23_id, [ "-", r23_id, [ ".quote", 1 ] ], r23_env, !1)) : _r23_t0 instanceof Array && 3 === _r23_t0.length ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r23_shift = _r23_t0[2], r6_Assign(r23_id, [ "-", r23_id, r23_shift ], r23_env, !1)) : _r23_t0 instanceof Array && 4 === _r23_t0.length && "by" === _r23_t0[2] ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r23_shift = _r23_t0[3], r6_Assign(r23_id, [ "-", r23_id, r23_shift ], r23_env, !1)) : void 0;
    }), r6_externs.macros.put("for", function(r24_form, r24_env) {
        var r24_form, r24_env, r24_init, r24_test, r24_step, r24_body, _r24_t0;
        return _r24_t0 = r24_form, _r24_t0 instanceof Array && 5 === _r24_t0.length && "for" === _r24_t0[0] ? (r24_init = _r24_t0[1], 
        r24_test = _r24_t0[2], r24_step = _r24_t0[3], r24_body = _r24_t0[4], [ ".begin", r0_ex(r24_init, r24_env), [ ".while", r0_ex(r24_test, r24_env), [ ".begin", r0_ex(r24_body, r24_env), r0_ex(r24_step, r24_env) ] ] ]) : void 0;
    }), r6_externs.macros.put("foreach", function(r25_form, r25_env) {
        var r25_form, r25_env, r25_varid, r25_range, r25_body, r25_tR, r25_t, _r25_t0;
        return _r25_t0 = r25_form, _r25_t0 instanceof Array && 4 === _r25_t0.length && "foreach" === _r25_t0[0] ? (r25_varid = _r25_t0[1], 
        r25_range = _r25_t0[2], r25_body = _r25_t0[3], r25_tR = r25_env.newt(), r25_t = r25_env.newt(), 
        [ ".begin", [ ".set", r25_tR, r0_ex(r25_range, r25_env) ], [ ".while", [ "!", [ ".", [ ".set", r25_t, [ [ ".", r25_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", r6_Assign(r25_varid, [ ".", r25_t, [ ".quote", "value" ] ], r25_env, !1), r0_ex(r25_body, r25_env) ] ] ]) : void 0;
    }), r6_externs.macros.put("this", [ ".thisp" ]), r6_externs.macros.put("arguments", [ ".argsp" ]), 
    r6_externs.macros.put("nothing", [ ".unit" ]), r6_externs.macros.put("undefined", [ ".unit" ]), 
    r6_externs.macros.put("null", [ ".quote", null ]), r6_externs.macros.put("true", [ ".quote", !0 ]), 
    r6_externs.macros.put("false", [ ".quote", !1 ]), r6_boole = function(r26_x) {
        var r26_x;
        return !!r26_x;
    }, r6_externs.macros.put("match", function(r27_form, r27_env, r27_wrapper) {
        var r27_form, r27_env, r27_wrapper, r27_pairs, r27_t, r27_matchQ, r27_f, r27_j, r27_any, r27_pattern, r27_guard, r27_body, r27_pat, r27_cond, r27_tc, _r27_t0, _r27_t2, _r27_t3, _r27_t4, _r27_t5, _r27_t6, _r27_t7;
        for (r27_pairs = r27_form.slice(2), r27_t = r27_env.newt(), r27_matchQ = function(r28_pattern) {
            var r28_pattern, r28_callee, r28_subpatterns, r28_ms, r28_t, r28_final, r28_whatever, r28_x, r28_id, _r28_t0;
            return _r28_t0 = r28_pattern, r28_id = _r28_t0, r0_atom(r28_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(r46_x, r46_flag) {
                    var r46_x, r46_flag, _r46_t0, _r46_t1, _r46_t2;
                    return _r46_t0 = ".set", _r46_t1 = r0_ex([ ".local", r28_pattern ], r27_env), _r46_t2 = r27_wrapper && !r46_flag ? [ r27_wrapper, r46_x ] : r46_x, 
                    [ _r46_t0, _r46_t1, _r46_t2 ];
                }
            } : _r28_t0 instanceof Array && 2 === _r28_t0.length && ".quote" === _r28_t0[0] ? (r28_x = _r28_t0[1], 
            {
                whether: function(r43_x) {
                    var r43_x;
                    return [ "===", r0_ex(r28_pattern, r27_env), r43_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && "." === _r28_t0[0] ? (r28_whatever = _r28_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(r42_x, r42_flag) {
                    var r42_x, r42_flag, _r42_t0, _r42_t1, _r42_t2;
                    return _r42_t0 = ".set", _r42_t1 = r0_ex(r28_pattern, r27_env), _r42_t2 = r27_wrapper && !r42_flag ? [ r27_wrapper, r42_x ] : r42_x, 
                    [ _r42_t0, _r42_t1, _r42_t2 ];
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && ".list" === _r28_t0[0] ? (r28_subpatterns = _r28_t0.slice(1), 
            r28_ms = r28_subpatterns.map(r27_matchQ), {
                whether: function(r37_x) {
                    var r37_x;
                    return [ "&&", [ ".is", r37_x, r6_externs.use("Array") ], [ "===", [ ".", r37_x, [ ".quote", "length" ] ], [ ".quote", r28_ms.length ] ] ].concat(r28_ms.map(function(r38_p, r38_j) {
                        var r38_p, r38_j;
                        return r38_p.whether([ ".", r37_x, [ ".quote", r38_j ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r39_x, r39_flag) {
                    var r39_x, r39_flag;
                    return [ ".begin" ].concat(r28_ms.map(function(r40_p, r40_j) {
                        var r40_p, r40_j;
                        return r40_p.assign([ ".", r39_x, [ ".quote", r40_j ] ], r39_flag);
                    }));
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && ".conslist" === _r28_t0[0] ? (r28_subpatterns = _r28_t0.slice(1), 
            r28_ms = r28_pattern.slice(1, -1).map(r27_matchQ), r28_final = r27_matchQ(r28_pattern[r28_pattern.length - 1]), 
            {
                whether: function(r33_x) {
                    var r33_x;
                    return [ "&&", [ ".is", r33_x, r6_externs.use("Array") ], [ ">=", [ ".", r33_x, [ ".quote", "length" ] ], [ ".quote", r28_ms.length ] ] ].concat(r28_ms.map(function(r34_p, r34_j) {
                        var r34_p, r34_j;
                        return r34_p.whether([ ".", r33_x, [ ".quote", r34_j ] ]);
                    }).concat([ r28_final.whether([ [ ".", r33_x, [ ".quote", "slice" ] ], [ ".quote", r27_j ] ]) ])).filter(r6_boole);
                },
                assign: function(r35_x, r35_flag) {
                    var r35_x, r35_flag, _r35_t1, _r35_t2, _r35_t3, _r35_t4, _r35_t5, _r35_t6, _r35_t7, _r35_t8;
                    return _r35_t1 = [ ".begin" ].concat(r28_ms.map(function(r36_p, r36_j) {
                        var r36_p, r36_j;
                        return r36_p.assign([ ".", r35_x, [ ".quote", r36_j ] ]);
                    })), _r35_t2 = _r35_t1.concat, _r35_t3 = r28_final, _r35_t4 = _r35_t3.assign, _r35_t5 = r27_wrapper && !r35_flag ? [ [ ".", [ [ ".", r35_x, [ ".quote", "slice" ] ], [ ".quote", r28_ms.length ] ], [ ".quote", "map" ] ], r27_wrapper ] : [ [ ".", r35_x, [ ".quote", "slice" ] ], [ ".quote", r28_ms.length ] ], 
                    _r35_t6 = !0, _r35_t7 = _r35_t4.call(_r35_t3, _r35_t5, _r35_t6), _r35_t8 = [ _r35_t7 ], 
                    _r35_t2.call(_r35_t1, _r35_t8);
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && ".quasiquote" === _r28_t0[0] ? (r28_subpatterns = _r28_t0.slice(1), 
            r27_matchQ(r0_deQuasiquote(r28_pattern[1], 0))) : _r28_t0 instanceof Array && _r28_t0.length >= 1 ? (r28_callee = _r28_t0[0], 
            r28_subpatterns = _r28_t0.slice(1), r28_ms = r28_subpatterns.map(r27_matchQ), r28_t = r27_env.newt(), 
            {
                whether: function(r29_x) {
                    var r29_x;
                    return [ "&&", [ ".set", r28_t, [ [ ".", r0_ex(r28_callee, r27_env), [ ".quote", "unapply" ] ], r29_x, [ ".quote", r28_ms.length ] ] ] ].concat(r28_ms.map(function(r30_p, r30_j) {
                        var r30_p, r30_j;
                        return r30_p.whether([ ".", r28_t, [ ".quote", r30_j ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r31_x, r31_flag) {
                    var r31_flag;
                    return [ ".begin" ].concat(r28_ms.map(function(r32_p, r32_j) {
                        var r32_p, r32_j;
                        return r32_p.assign([ ".", r28_t, [ ".quote", r32_j ] ], r31_flag);
                    }));
                }
            }) : void 0;
        }, r27_f = [ ".unit" ], r27_j = r27_pairs.length - 1; r27_j >= 0; r27_j -= 1) _r27_t0 = r27_pairs[r27_j], 
        _r27_t0 instanceof Array && 2 === _r27_t0.length ? (r27_pattern = _r27_t0[0], r27_body = _r27_t0[1], 
        r27_pat = r27_matchQ(r27_pattern), r27_cond = r27_pat.whether(r27_t), r27_cond ? _r27_t3 = [ ".if", r27_cond, [ ".begin", r27_pat.assign(r27_t), r0_ex(r27_body, r27_env) ], r27_f ] : (_r27_t4 = [ ".begin", r27_pat.assign(r27_t), r0_ex(r27_body, r27_env) ], 
        _r27_t3 = _r27_t4), _r27_t2 = _r27_t3) : (_r27_t0 instanceof Array && 3 === _r27_t0.length ? (r27_pattern = _r27_t0[0], 
        r27_guard = _r27_t0[1], r27_body = _r27_t0[2], r27_pat = r27_matchQ(r27_pattern), 
        r27_cond = r27_pat.whether(r27_t), r27_cond ? (r27_tc = r27_env.newt(), _r27_t6 = [ ".begin", [ ".set", r27_tc, [ ".quote", !1 ] ], [ ".if", r27_cond, [ ".begin", r27_pat.assign(r27_t), [ ".if", r0_ex(r27_guard, r27_env), [ ".set", r27_tc, [ ".quote", !0 ] ], [ ".set", r27_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", r27_tc, r0_ex(r27_body, r27_env), r27_f ] ]) : (_r27_t7 = [ ".begin", r27_pat.assign(r27_t), [ ".if", r0_ex(r27_guard, r27_env), r0_ex(r27_body, r27_env), r27_f ] ], 
        _r27_t6 = _r27_t7), _r27_t5 = _r27_t6) : (r27_any = _r27_t0, _r27_t5 = r27_f), _r27_t2 = _r27_t5), 
        r27_f = _r27_t2;
        return [ ".begin", [ ".set", r27_t, r0_ex(r27_form[1], r27_env) ], r27_f ];
    }), r6_externs.macros.put("regex", function(r47_form) {
        var r47_form, r47_args, r47_s, r47_flag, _r47_t0;
        return _r47_t0 = r47_form, _r47_t0 instanceof Array && 2 === _r47_t0.length && "regex" === _r47_t0[0] && _r47_t0[1] instanceof Array && 2 === _r47_t0[1].length && ".quote" === _r47_t0[1][0] ? (r47_s = _r47_t0[1][1], 
        [ ".quote", new RegExp(r47_s) ]) : _r47_t0 instanceof Array && 3 === _r47_t0.length && "regex" === _r47_t0[0] && _r47_t0[1] instanceof Array && 2 === _r47_t0[1].length && ".quote" === _r47_t0[1][0] && _r47_t0[2] instanceof Array && 2 === _r47_t0[2].length && ".quote" === _r47_t0[2][0] ? (r47_s = _r47_t0[1][1], 
        r47_flag = _r47_t0[2][1], [ ".quote", new RegExp(r47_s, r47_flag) ]) : _r47_t0 instanceof Array && _r47_t0.length >= 1 && "regex" === _r47_t0[0] ? (r47_args = _r47_t0.slice(1), 
        [ ".new", r6_externs.use("RegExp") ].concat(r47_args)) : void 0;
    }), r6_externs.macros.put("define-macro", function(r48_form, r48_env) {
        var r48_form, r48_env, r48_otherwise, r48_op, r48_name, r48_body, r48_ds, r48_macroG, r48_macroFn, _r48_t0, _r48_t1, _r48_t2, _r48_t3;
        return _r48_t0 = r48_form, _r48_t1 = !1, _r48_t0 instanceof Array && 3 === _r48_t0.length ? (r48_op = _r48_t0[0], 
        r48_name = _r48_t0[1], r48_body = _r48_t0[2], _r48_t3 = _r48_t1 = r0_atom(r48_name) ? !0 : !1, 
        _r48_t2 = _r48_t3) : _r48_t2 = void 0, _r48_t1 ? (r48_ds = new r0_Scope(r48_env), 
        r48_ds.declare("atom", !0), r48_ds.declare("prim", !0), r48_ds.declare("formOf", !0), 
        r48_ds.declare("scopeOf", !0), r48_macroG = new Function(r48_ds.castName("atom"), r48_ds.castName("prim"), r48_ds.castName("formOf"), r48_ds.castName("scopeOf"), r0_escodegen.generate(r0_patrisika.generate([ ".return", r0_ex(r48_body, r48_ds) ], r48_ds, function(r49_form) {
            var r49_form;
            return [ ".return", r49_form ];
        }))), r48_macroFn = r48_macroG(r0_wrapForSyntacticClosure(r0_atom), r0_wrapForSyntacticClosure(r0_prim), function(r50_x) {
            var r50_x;
            return r50_x[1];
        }, function(r51_x) {
            var r51_x;
            return r51_x[2];
        }), r48_env.macros.put(r48_name, function(r52_c, r52_e) {
            var r52_c, r52_e, r52_result, r52_s;
            return r52_result = r48_macroFn(r52_c, r52_e), r52_s = new r0_Scope(r48_env), r52_s.hanging = r52_e, 
            r52_s.semiparent = r52_e, r0_ex(r52_result, r52_s);
        }), [ ".unit" ]) : (r48_otherwise = _r48_t0, [ ".unit" ]);
    }), r6_externs.macros.put("macro-match", function(r53_form, r53_env) {
        var r53_form, r53_env, r53_otherwise, r53_c, r53_e, r53_patterns, r53_t, r53_tx, r53_tw, _r53_t0;
        return _r53_t0 = r53_form, _r53_t0 instanceof Array && _r53_t0.length >= 3 && "macro-match" === _r53_t0[0] ? (r53_c = _r53_t0[1], 
        r53_e = _r53_t0[2], r53_patterns = _r53_t0.slice(3), r53_t = r53_env.newt(), r53_tx = r53_env.newt(), 
        r53_tw = r53_env.newt(), [ ".begin", [ ".set", r53_t, r53_e ], [ ".set", r53_tw, [ ".lambda", [ r53_tx ], [ ".return", [ ".list", [ ".quote", ".syntactic-closure" ], r53_tx, r53_t ] ] ] ], r6_externs.macros.get("match")([ "match", r53_c ].concat(r53_patterns), r53_env, r53_tw) ]) : (r53_otherwise = _r53_t0, 
        [ ".unit" ]);
    }), r0_ex(require("./essential-macros.json"), r6_externs), r6_externs.pFamily = "r", 
    r6_externs;
}, exports.Create = r0_Create;