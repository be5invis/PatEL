var r0_Scope, r0_atom, r0_prim, r0_FormInvalidError, r0_NodeTranslation, r0_deQuasiquote, r0_ex, r0_checkEvaluated, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7;

r0_Scope = require("patrisika").Scope, r0_atom = function(r1_x) {
    var r1_x;
    return "string" == typeof r1_x;
}, r0_prim = function(r2_x) {
    var r2_x;
    return r0_atom(r2_x) && "&" !== r2_x && "&!" !== r2_x && ("." === r2_x[0] || /^\W+/.test(r2_x));
}, r0_FormInvalidError = function(r3_form, r3_reason) {
    var r3_form, r3_reason, _r3_t0, _r3_t1;
    return _r3_t0 = this, _r3_t0.reason = r3_reason, _r3_t0.message = r3_reason, _r3_t0.relatedForm = r3_form, 
    r3_form && r3_form.begins >= 0 && r3_form.ends >= 0 ? (_r3_t0.begins = r3_form.begins, 
    _r3_t0.ends = r3_form.ends, _r3_t1 = _r3_t0.message = _r3_t0.message + ("\nAround (" + _r3_t0.begins + " -- " + _r3_t0.ends + ")")) : _r3_t1 = void 0, 
    null;
}, r0_FormInvalidError.prototype = Object.create(Error.prototype), r0_NodeTranslation = function(r4_fn) {
    var r4_fn;
    return function(r5_form) {
        var r5_form, r5_res, _r5_t0, _r5_t1, _r5_t2, _r5_t3;
        return _r5_t1 = arguments, _r5_t0 = this, r5_res = r4_fn.apply(_r5_t0, _r5_t1), 
        _r5_t2 = r5_form && r5_res && r5_form.begins >= 0 ? r5_res.begins = r5_form.begins : void 0, 
        _r5_t3 = r5_form && r5_res && r5_form.ends >= 0 ? r5_res.ends = r5_form.ends : void 0, 
        r5_res;
    };
}, r0_deQuasiquote = function(r6_form, r6_level) {
    var r6_form, r6_level, r6_otherwise, r6_xs, r6_x, r6_commonParts, r6_c, _r6_t0, _r6_t1;
    return _r6_t0 = r6_form, _r6_t0 instanceof Array && 2 === _r6_t0.length && ".unquote" === _r6_t0[0] ? (r6_c = _r6_t0[1], 
    r6_level ? [ ".list", [ ".quote", ".unquote" ], r0_deQuasiquote(r6_c, r6_level - 1) ] : r6_c) : _r6_t0 instanceof Array && 2 === _r6_t0.length && ".quasiquote" === _r6_t0[0] ? (r6_c = _r6_t0[1], 
    [ ".list", [ ".quote", ".quasiquote" ], r0_deQuasiquote(r6_c, r6_level + 1) ]) : _r6_t0 instanceof Array && _r6_t0.length >= 0 ? (r6_xs = _r6_t0.slice(0), 
    _r6_t1 = r6_xs[r6_xs.length - 1], _r6_t1 instanceof Array && 2 === _r6_t1.length && ".sliceunquote" === _r6_t1[0] ? (r6_x = _r6_t1[1], 
    r6_commonParts = r6_xs.slice(0, -1).map(function(r8_c) {
        var r8_c;
        return r0_deQuasiquote(r8_c, r6_level);
    }), r6_level ? [ ".list" ].concat(r6_commonParts, [ [ ".list", [ ".quote", ".sliceunquote" ], r0_deQuasiquote(r6_x, r6_level - 1) ] ]) : [ ".conslist" ].concat(r6_commonParts, [ r6_x ])) : (r6_otherwise = _r6_t1, 
    [ ".list" ].concat(r6_xs.map(function(r7_c) {
        var r7_c;
        return r0_deQuasiquote(r7_c, r6_level);
    })))) : (r6_otherwise = _r6_t0, [ ".quote", r6_otherwise ]);
}, r0_ex = r0_NodeTranslation(function(r9_form, r9_env) {
    var r9_form, r9_env, r9_any, r9_x, r9_callee, r9_args, r9_a, r9_j, r9_allKeysAreQuotes, r9_key, r9_value, r9_otherwise, r9_block, r9_param, r9_handler, r9_body, r9_params, r9_derived, r9_c, r9_e, _r9_t0, _r9_t1, _r9_t14, _r9_t15, _r9_t16, _r9_t21, _r9_t22;
    if (_r9_t16 = arguments, _r9_t15 = this, _r9_t0 = r9_form, _r9_t0 instanceof Array && _r9_t0.length >= 1 && ".quote" === _r9_t0[0]) return r9_x = _r9_t0.slice(1), 
    [ ".quote" ].concat(r9_x);
    if (_r9_t0 instanceof Array && 2 === _r9_t0.length && ".quasiquote" === _r9_t0[0]) return r9_x = _r9_t0[1], 
    r0_ex(r0_deQuasiquote(r9_x, 0), r9_env);
    if (_r9_t0 instanceof Array && 2 === _r9_t0.length && ".unquote" === _r9_t0[0]) return r9_x = _r9_t0[1], 
    r0_ex(r9_x, r9_env);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1 && ".id" === _r9_t0[0]) return r9_x = _r9_t0.slice(1), 
    [ ".id" ].concat(r9_x);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1 && ".t" === _r9_t0[0]) return r9_x = _r9_t0.slice(1), 
    [ ".t" ].concat(r9_x);
    if (_r9_t0 instanceof Array && 3 === _r9_t0.length && ".lambda" === _r9_t0[0] && _r9_t0[1] instanceof Array && _r9_t0[1].length >= 0) {
        for (r9_args = _r9_t0[1].slice(0), r9_body = _r9_t0[2], r9_derived = new r0_Scope(r9_env), 
        r9_j = 0; r9_j < r9_args.length; r9_j += 1) r9_derived.declare(r9_args[r9_j], !0), 
        r9_args[r9_j] = r9_derived.use(r9_args[r9_j]);
        return [ ".lambda.scoped", r9_args, r0_ex(r9_body, r9_derived), r9_derived ];
    }
    if (_r9_t0 instanceof Array && 3 === _r9_t0.length && ".syntactic-closure" === _r9_t0[0]) return r9_c = _r9_t0[1], 
    r9_e = _r9_t0[2], r0_ex(r9_c, r9_e);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 3 && ".beta" === _r9_t0[0] && _r9_t0[1] instanceof Array && _r9_t0[1].length >= 0) {
        for (r9_args = _r9_t0[1].slice(0), r9_body = _r9_t0[2], r9_params = _r9_t0.slice(3), 
        r9_derived = new r0_Scope(r9_env), r9_j = 0; r9_j < r9_args.length; r9_j += 1) r9_derived.declare(r9_args[r9_j], !0), 
        r9_args[r9_j] = r9_derived.use(r9_args[r9_j]);
        for (r9_j = 0; r9_j < r9_args.length; r9_j += 1) r9_params[r9_j] = r0_ex(r9_params[r9_j], r9_env);
        return [ ".beta.scoped", r9_args, r0_ex(r9_body, r9_derived), r9_derived ].concat(r9_params);
    }
    if (_r9_t0 instanceof Array && 4 === _r9_t0.length && ".try" === _r9_t0[0] && _r9_t0[2] instanceof Array && 1 === _r9_t0[2].length) return r9_block = _r9_t0[1], 
    r9_param = _r9_t0[2][0], r9_handler = _r9_t0[3], r9_env.declare(r9_param), [ ".try", r0_ex(r9_block, r9_env), [ r9_env.use(r9_param) ], r0_ex(r9_handler, r9_env) ];
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1 && ".hash" === _r9_t0[0]) {
        for (r9_args = _r9_t0.slice(1), r9_a = [], r9_allKeysAreQuotes = !0, r9_j = 1; r9_j < r9_form.length; r9_j += 1) r9_key = r0_ex(r9_form[r9_j][0], r9_env), 
        r9_value = r0_ex(r9_form[r9_j][1], r9_env), _r9_t1 = r9_key, _r9_t1 instanceof Array && 2 === _r9_t1.length && ".quote" === _r9_t1[0] ? r9_x = _r9_t1[1] : (r9_otherwise = _r9_t1, 
        r9_allKeysAreQuotes = !1), r9_a.push([ r9_key, r9_value ]);
        return r9_allKeysAreQuotes ? [ ".hash" ].concat(r9_a.map(function(r10_pair) {
            var r10_pair;
            return [ r10_pair[0][1], r10_pair[1] ];
        })) : (_r9_t14 = r9_env.newt(), function(r11_t) {
            var r11_t;
            return [ ".begin", [ ".set", r11_t, [ ".hash" ] ] ].concat(r9_a.map(function(r12_pair) {
                var r12_pair;
                return [ ".set", [ ".", r11_t, r12_pair[0] ], r12_pair[1] ];
            }).concat([ r11_t ]));
        }(_r9_t14));
    }
    if (_r9_t0 instanceof Array && 2 === _r9_t0.length && ".local" === _r9_t0[0]) return r9_x = _r9_t0[1], 
    r9_env.declare(r9_x), r9_env.use(r9_x);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1) {
        if (r9_callee = _r9_t0[0], r9_args = _r9_t0.slice(1), r0_atom(r9_callee) && r9_env.macros.has(r9_callee)) return r9_env.macros.get(r9_callee)(r9_form, r9_env);
        for (_r9_t21 = void 0, _r9_t22 = r0_prim(r9_callee) ? void 0 : r9_callee = r0_ex(r9_callee, r9_env), 
        r9_a = [ r9_callee ], r9_j = 1; r9_j < r9_form.length; r9_j += 1) r9_a[r9_j] = r0_ex(r9_form[r9_j], r9_env);
        return r9_a;
    }
    return r9_x = _r9_t0, !r0_atom(r9_x) || !r9_env.macros.has(r9_x) || r9_env.macros.get(r9_x) instanceof Function ? (r9_x = _r9_t0, 
    r0_prim(r9_x) ? r9_x : (r9_x = _r9_t0, r0_atom(r9_x) ? r9_env.use(r9_x) : r9_any = _r9_t0)) : r9_env.macros.get(r9_x);
}), r0_checkEvaluated = function(r13_form) {
    var r13_form, _r13_t1;
    if (r13_form && r13_form instanceof Array && r13_form.length > 0) {
        if (r13_form.unevaluated) throw new r0_FormInvalidError(r13_form, "Unevaluated subform");
        return _r13_t1 = void 0, r13_form.forEach(r0_checkEvaluated);
    }
    return void 0;
}, exports.pass = function(r14_form, r14_globalScope) {
    var r14_form, r14_globalScope;
    return r0_ex(r14_form, r14_globalScope);
}, exports.ex = r0_ex, exports.checkEvaluated = r0_checkEvaluated, exports.deQuasiquote = r0_deQuasiquote;