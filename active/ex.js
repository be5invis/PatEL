var r0_Scope, r0_atom, r0_prim, r0_FormInvalidError, r0_NodeTranslation, r0_deQuasiquote, r0_ex, r0_checkEvaluated, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6;

r0_Scope = require("patrisika").Scope, r0_atom = function(r1_x) {
    var r1_x;
    return "string" == typeof r1_x;
}, r0_prim = function(r2_x) {
    var r2_x;
    return r0_atom(r2_x) && "&" !== r2_x && "&!" !== r2_x && ("." === r2_x[0] || /^\W+/.test(r2_x));
}, r0_FormInvalidError = require("patrisika").FormInvalidError, r0_NodeTranslation = function(r3_fn) {
    var r3_fn;
    return function(r4_form) {
        var r4_form, r4_res, _r4_t0, _r4_t1, _r4_t2, _r4_t3;
        return _r4_t1 = arguments, _r4_t0 = this, r4_res = r3_fn.apply(_r4_t0, _r4_t1), 
        _r4_t2 = r4_form && r4_res && r4_form.begins >= 0 ? r4_res.begins = r4_form.begins : void 0, 
        _r4_t3 = r4_form && r4_res && r4_form.ends >= 0 ? r4_res.ends = r4_form.ends : void 0, 
        r4_res;
    };
}, r0_deQuasiquote = function(r5_form, r5_level) {
    var r5_form, r5_level, r5_otherwise, r5_xs, r5_x, r5_commonParts, r5_c, _r5_t0, _r5_t1;
    return _r5_t0 = r5_form, _r5_t0 instanceof Array && 2 === _r5_t0.length && ".unquote" === _r5_t0[0] ? (r5_c = _r5_t0[1], 
    r5_level ? [ ".list", [ ".quote", ".unquote" ], r0_deQuasiquote(r5_c, r5_level - 1) ] : r5_c) : _r5_t0 instanceof Array && 2 === _r5_t0.length && ".quasiquote" === _r5_t0[0] ? (r5_c = _r5_t0[1], 
    [ ".list", [ ".quote", ".quasiquote" ], r0_deQuasiquote(r5_c, r5_level + 1) ]) : _r5_t0 instanceof Array && _r5_t0.length >= 0 ? (r5_xs = _r5_t0.slice(0), 
    _r5_t1 = r5_xs[r5_xs.length - 1], _r5_t1 instanceof Array && 2 === _r5_t1.length && ".sliceunquote" === _r5_t1[0] ? (r5_x = _r5_t1[1], 
    r5_commonParts = r5_xs.slice(0, -1).map(function(r7_c) {
        var r7_c;
        return r0_deQuasiquote(r7_c, r5_level);
    }), r5_level ? [ ".list" ].concat(r5_commonParts, [ [ ".list", [ ".quote", ".sliceunquote" ], r0_deQuasiquote(r5_x, r5_level - 1) ] ]) : [ ".conslist" ].concat(r5_commonParts, [ r5_x ])) : (r5_otherwise = _r5_t1, 
    [ ".list" ].concat(r5_xs.map(function(r6_c) {
        var r6_c;
        return r0_deQuasiquote(r6_c, r5_level);
    })))) : (r5_otherwise = _r5_t0, [ ".quote", r5_otherwise ]);
}, r0_ex = r0_NodeTranslation(function(r8_form, r8_env) {
    var r8_form, r8_env, r8_any, r8_x, r8_callee, r8_args, r8_a, r8_j, r8_arg0, r8_args1, r8_t, r8_allKeysAreQuotes, r8_key, r8_value, r8_otherwise, r8_block, r8_param, r8_handler, r8_body, r8_params, r8_derived, r8_c, r8_e, _r8_t0, _r8_t1, _r8_t14, _r8_t15, _r8_t16, _r8_t21, _r8_t23, _r8_t24;
    if (_r8_t16 = arguments, _r8_t15 = this, _r8_t0 = r8_form, _r8_t0 instanceof Array && _r8_t0.length >= 1 && ".quote" === _r8_t0[0]) return r8_x = _r8_t0.slice(1), 
    [ ".quote" ].concat(r8_x);
    if (_r8_t0 instanceof Array && 2 === _r8_t0.length && ".quasiquote" === _r8_t0[0]) return r8_x = _r8_t0[1], 
    r0_ex(r0_deQuasiquote(r8_x, 0), r8_env);
    if (_r8_t0 instanceof Array && 2 === _r8_t0.length && ".unquote" === _r8_t0[0]) return r8_x = _r8_t0[1], 
    r0_ex(r8_x, r8_env);
    if (_r8_t0 instanceof Array && _r8_t0.length >= 1 && ".id" === _r8_t0[0]) return r8_x = _r8_t0.slice(1), 
    [ ".id" ].concat(r8_x);
    if (_r8_t0 instanceof Array && _r8_t0.length >= 1 && ".t" === _r8_t0[0]) return r8_x = _r8_t0.slice(1), 
    [ ".t" ].concat(r8_x);
    if (_r8_t0 instanceof Array && 3 === _r8_t0.length && ".lambda" === _r8_t0[0] && _r8_t0[1] instanceof Array && _r8_t0[1].length >= 0) {
        for (r8_args = _r8_t0[1].slice(0), r8_body = _r8_t0[2], r8_derived = new r0_Scope(r8_env), 
        r8_j = 0; r8_j < r8_args.length; r8_j += 1) r8_derived.declare(r8_args[r8_j], !0), 
        r8_args[r8_j] = r8_derived.use(r8_args[r8_j]);
        return [ ".lambda.scoped", r8_args, r0_ex(r8_body, r8_derived), r8_derived ];
    }
    if (_r8_t0 instanceof Array && 3 === _r8_t0.length && ".syntactic-closure" === _r8_t0[0]) return r8_c = _r8_t0[1], 
    r8_e = _r8_t0[2], r0_ex(r8_c, r8_e);
    if (_r8_t0 instanceof Array && _r8_t0.length >= 3 && ".beta" === _r8_t0[0] && _r8_t0[1] instanceof Array && _r8_t0[1].length >= 0) {
        for (r8_args = _r8_t0[1].slice(0), r8_body = _r8_t0[2], r8_params = _r8_t0.slice(3), 
        r8_derived = new r0_Scope(r8_env), r8_j = 0; r8_j < r8_args.length; r8_j += 1) r8_derived.declare(r8_args[r8_j], !0), 
        r8_args[r8_j] = r8_derived.use(r8_args[r8_j]);
        for (r8_j = 0; r8_j < r8_args.length; r8_j += 1) r8_params[r8_j] = r0_ex(r8_params[r8_j], r8_env);
        return [ ".beta.scoped", r8_args, r0_ex(r8_body, r8_derived), r8_derived ].concat(r8_params);
    }
    if (_r8_t0 instanceof Array && 4 === _r8_t0.length && ".try" === _r8_t0[0] && _r8_t0[2] instanceof Array && 1 === _r8_t0[2].length) return r8_block = _r8_t0[1], 
    r8_param = _r8_t0[2][0], r8_handler = _r8_t0[3], r8_env.declare(r8_param), [ ".try", r0_ex(r8_block, r8_env), [ r8_env.use(r8_param) ], r0_ex(r8_handler, r8_env) ];
    if (_r8_t0 instanceof Array && _r8_t0.length >= 1 && ".hash" === _r8_t0[0]) {
        for (r8_args = _r8_t0.slice(1), r8_a = [], r8_allKeysAreQuotes = !0, r8_j = 1; r8_j < r8_form.length; r8_j += 1) r8_key = r0_ex(r8_form[r8_j][0], r8_env), 
        r8_value = r0_ex(r8_form[r8_j][1], r8_env), _r8_t1 = r8_key, _r8_t1 instanceof Array && 2 === _r8_t1.length && ".quote" === _r8_t1[0] ? r8_x = _r8_t1[1] : (r8_otherwise = _r8_t1, 
        r8_allKeysAreQuotes = !1), r8_a.push([ r8_key, r8_value ]);
        return r8_allKeysAreQuotes ? [ ".hash" ].concat(r8_a.map(function(r9_pair) {
            var r9_pair;
            return [ r9_pair[0][1], r9_pair[1] ];
        })) : (_r8_t14 = r8_env.newt(), function(r10_t) {
            var r10_t;
            return [ ".begin", [ ".set", r10_t, [ ".hash" ] ] ].concat(r8_a.map(function(r11_pair) {
                var r11_pair;
                return [ ".set", [ ".", r10_t, r11_pair[0] ], r11_pair[1] ];
            }).concat([ r10_t ]));
        }(_r8_t14));
    }
    if (_r8_t0 instanceof Array && 2 === _r8_t0.length && ".local" === _r8_t0[0]) return r8_x = _r8_t0[1], 
    r8_env.declare(r8_x), r8_env.use(r8_x);
    if (_r8_t0 instanceof Array && _r8_t0.length >= 3 && ".revcall" === _r8_t0[0]) return r8_callee = _r8_t0[1], 
    r8_arg0 = _r8_t0[2], r8_args1 = _r8_t0.slice(3), r0_atom(r8_callee) && r8_env.macros.has(r8_callee) ? r8_env.macros.get(r8_callee)(r8_form.slice(1), r8_env) : (_r8_t21 = void 0, 
    r8_t = r8_env.newt(), [ ".begin", [ ".set", r8_t, r0_ex(r8_arg0, r8_env) ], r0_ex([ r8_callee, r8_t ].concat(r8_args1), r8_env) ]);
    if (_r8_t0 instanceof Array && _r8_t0.length >= 1) {
        if (r8_callee = _r8_t0[0], r8_args = _r8_t0.slice(1), r0_atom(r8_callee) && r8_env.macros.has(r8_callee)) return r8_env.macros.get(r8_callee)(r8_form, r8_env);
        for (_r8_t23 = void 0, _r8_t24 = r0_prim(r8_callee) ? void 0 : r8_callee = r0_ex(r8_callee, r8_env), 
        r8_a = [ r8_callee ], r8_j = 1; r8_j < r8_form.length; r8_j += 1) r8_a[r8_j] = r0_ex(r8_form[r8_j], r8_env);
        return r8_a;
    }
    return r8_x = _r8_t0, !r0_atom(r8_x) || !r8_env.macros.has(r8_x) || r8_env.macros.get(r8_x) instanceof Function ? (r8_x = _r8_t0, 
    r0_prim(r8_x) ? r8_x : (r8_x = _r8_t0, r0_atom(r8_x) ? r8_env.use(r8_x) : r8_any = _r8_t0)) : r8_env.macros.get(r8_x);
}), r0_checkEvaluated = function(r12_form) {
    var r12_form, _r12_t1;
    if (r12_form && r12_form instanceof Array && r12_form.length > 0) {
        if (r12_form.unevaluated) throw new r0_FormInvalidError(r12_form, "Unevaluated subform");
        return _r12_t1 = void 0, r12_form.forEach(r0_checkEvaluated);
    }
    return void 0;
}, exports.pass = function(r13_form, r13_globalScope) {
    var r13_form, r13_globalScope;
    return r0_ex(r13_form, r13_globalScope);
}, exports.ex = r0_ex, exports.checkEvaluated = r0_checkEvaluated, exports.deQuasiquote = r0_deQuasiquote;