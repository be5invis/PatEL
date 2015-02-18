var s1_Scope, s1_atom, s1_prim, s1_FormInvalidError, s1_NodeTranslation, s1_deQuasiquote, s1_ex, s1_checkEvaluated, _s1_t0, _s1_t1, _s1_t2, _s1_t3, _s1_t4, _s1_t5, _s1_t6, _s1_t7;

s1_Scope = require("patrisika").Scope, s1_atom = function(s2_x) {
    var s2_x;
    return "string" == typeof s2_x;
}, s1_prim = function(s3_x) {
    var s3_x;
    return s1_atom(s3_x) && "&" !== s3_x && "&!" !== s3_x && ("." === s3_x[0] || /^\W+/.test(s3_x));
}, s1_FormInvalidError = function(s4_form, s4_reason) {
    var s4_form, s4_reason, _s4_t0, _s4_t1;
    return _s4_t0 = this, _s4_t0.reason = s4_reason, _s4_t0.message = s4_reason, _s4_t0.relatedForm = s4_form, 
    s4_form && s4_form.begins >= 0 && s4_form.ends >= 0 ? (_s4_t0.begins = s4_form.begins, 
    _s4_t0.ends = s4_form.ends, _s4_t1 = _s4_t0.message = _s4_t0.message + ("\nAround (" + _s4_t0.begins + " -- " + _s4_t0.ends + ")")) : _s4_t1 = void 0, 
    null;
}, s1_FormInvalidError.prototype = Object.create(Error.prototype), s1_NodeTranslation = function(s5_fn) {
    var s5_fn;
    return function(s6_form) {
        var s6_form, s6_res, _s6_t0, _s6_t1, _s6_t2, _s6_t3;
        return _s6_t1 = arguments, _s6_t0 = this, s6_res = s5_fn.apply(_s6_t0, _s6_t1), 
        _s6_t2 = s6_form && s6_res && s6_form.begins >= 0 ? s6_res.begins = s6_form.begins : void 0, 
        _s6_t3 = s6_form && s6_res && s6_form.ends >= 0 ? s6_res.ends = s6_form.ends : void 0, 
        s6_res;
    };
}, s1_deQuasiquote = function(s7_form) {
    var s7_form, s7_otherwise, s7_xs, s7_x, s7_c, _s7_t0, _s7_t1;
    return _s7_t0 = s7_form, _s7_t0 instanceof Array && 2 === _s7_t0.length && ".unquote" === _s7_t0[0] ? s7_c = _s7_t0[1] : _s7_t0 instanceof Array && _s7_t0.length >= 0 ? (s7_xs = _s7_t0.slice(0), 
    _s7_t1 = s7_xs[s7_xs.length - 1], _s7_t1 instanceof Array && 2 === _s7_t1.length && ".sliceunquote" === _s7_t1[0] ? (s7_x = _s7_t1[1], 
    [ ".conslist" ].concat(s7_xs.slice(0, -1).map(s1_deQuasiquote), [ s7_x ])) : (s7_otherwise = _s7_t1, 
    [ ".list" ].concat(s7_xs.map(s1_deQuasiquote)))) : (s7_otherwise = _s7_t0, [ ".quote", s7_otherwise ]);
}, s1_ex = s1_NodeTranslation(function(s8_form, s8_env) {
    var s8_form, s8_env, s8_any, s8_x, s8_callee, s8_args, s8_a, s8_j, s8_allKeysAreQuotes, s8_key, s8_value, s8_otherwise, s8_block, s8_param, s8_handler, s8_body, s8_params, s8_derived, s8_c, s8_e, _s8_t0, _s8_t1, _s8_t14, _s8_t15, _s8_t16, _s8_t21, _s8_t22;
    if (_s8_t16 = arguments, _s8_t15 = this, _s8_t0 = s8_form, _s8_t0 instanceof Array && _s8_t0.length >= 1 && ".quote" === _s8_t0[0]) return s8_x = _s8_t0.slice(1), 
    [ ".quote" ].concat(s8_x);
    if (_s8_t0 instanceof Array && 2 === _s8_t0.length && ".quasiquote" === _s8_t0[0]) return s8_x = _s8_t0[1], 
    s1_ex(s1_deQuasiquote(s8_x), s8_env);
    if (_s8_t0 instanceof Array && 2 === _s8_t0.length && ".unquote" === _s8_t0[0]) return s8_x = _s8_t0[1], 
    s1_ex(s8_x, s8_env);
    if (_s8_t0 instanceof Array && _s8_t0.length >= 1 && ".id" === _s8_t0[0]) return s8_x = _s8_t0.slice(1), 
    [ ".id" ].concat(s8_x);
    if (_s8_t0 instanceof Array && _s8_t0.length >= 1 && ".t" === _s8_t0[0]) return s8_x = _s8_t0.slice(1), 
    [ ".t" ].concat(s8_x);
    if (_s8_t0 instanceof Array && 3 === _s8_t0.length && ".lambda" === _s8_t0[0] && _s8_t0[1] instanceof Array && _s8_t0[1].length >= 0) {
        for (s8_args = _s8_t0[1].slice(0), s8_body = _s8_t0[2], s8_derived = new s1_Scope(s8_env), 
        s8_j = 0; s8_j < s8_args.length; s8_j += 1) s8_derived.declare(s8_args[s8_j], !0), 
        s8_args[s8_j] = s8_derived.use(s8_args[s8_j]);
        return [ ".lambda.scoped", s8_args, s1_ex(s8_body, s8_derived), s8_derived ];
    }
    if (_s8_t0 instanceof Array && 3 === _s8_t0.length && ".syntactic-closure" === _s8_t0[0]) return s8_c = _s8_t0[1], 
    s8_e = _s8_t0[2], s1_ex(s8_c, s8_e);
    if (_s8_t0 instanceof Array && _s8_t0.length >= 3 && ".beta" === _s8_t0[0] && _s8_t0[1] instanceof Array && _s8_t0[1].length >= 0) {
        for (s8_args = _s8_t0[1].slice(0), s8_body = _s8_t0[2], s8_params = _s8_t0.slice(3), 
        s8_derived = new s1_Scope(s8_env), s8_j = 0; s8_j < s8_args.length; s8_j += 1) s8_derived.declare(s8_args[s8_j], !0), 
        s8_args[s8_j] = s8_derived.use(s8_args[s8_j]);
        for (s8_j = 0; s8_j < s8_args.length; s8_j += 1) s8_params[s8_j] = s1_ex(s8_params[s8_j], s8_env);
        return [ ".beta.scoped", s8_args, s1_ex(s8_body, s8_derived), s8_derived ].concat(s8_params);
    }
    if (_s8_t0 instanceof Array && 4 === _s8_t0.length && ".try" === _s8_t0[0] && _s8_t0[2] instanceof Array && 1 === _s8_t0[2].length) return s8_block = _s8_t0[1], 
    s8_param = _s8_t0[2][0], s8_handler = _s8_t0[3], s8_env.declare(s8_param), [ ".try", s1_ex(s8_block, s8_env), [ s8_env.use(s8_param) ], s1_ex(s8_handler, s8_env) ];
    if (_s8_t0 instanceof Array && _s8_t0.length >= 1 && ".hash" === _s8_t0[0]) {
        for (s8_args = _s8_t0.slice(1), s8_a = [], s8_allKeysAreQuotes = !0, s8_j = 1; s8_j < s8_form.length; s8_j += 1) s8_key = s1_ex(s8_form[s8_j][0], s8_env), 
        s8_value = s1_ex(s8_form[s8_j][1], s8_env), _s8_t1 = s8_key, _s8_t1 instanceof Array && 2 === _s8_t1.length && ".quote" === _s8_t1[0] ? s8_x = _s8_t1[1] : (s8_otherwise = _s8_t1, 
        s8_allKeysAreQuotes = !1), s8_a.push([ s8_key, s8_value ]);
        return s8_allKeysAreQuotes ? [ ".hash" ].concat(s8_a.map(function(s9_pair) {
            var s9_pair;
            return [ s9_pair[0][1], s9_pair[1] ];
        })) : (_s8_t14 = s8_env.newt(), function(s10_t) {
            var s10_t;
            return [ ".begin", [ ".set", s10_t, [ ".hash" ] ] ].concat(s8_a.map(function(s11_pair) {
                var s11_pair;
                return [ ".set", [ ".", s10_t, s11_pair[0] ], s11_pair[1] ];
            }).concat([ s10_t ]));
        }(_s8_t14));
    }
    if (_s8_t0 instanceof Array && 2 === _s8_t0.length && ".local" === _s8_t0[0]) return s8_x = _s8_t0[1], 
    s8_env.declare(s8_x), s8_env.use(s8_x);
    if (_s8_t0 instanceof Array && _s8_t0.length >= 1) {
        if (s8_callee = _s8_t0[0], s8_args = _s8_t0.slice(1), s1_atom(s8_callee) && s8_env.macros.has(s8_callee)) return s8_env.macros.get(s8_callee)(s8_form, s8_env);
        for (_s8_t21 = void 0, _s8_t22 = s1_prim(s8_callee) ? void 0 : s8_callee = s1_ex(s8_callee, s8_env), 
        s8_a = [ s8_callee ], s8_j = 1; s8_j < s8_form.length; s8_j += 1) s8_a[s8_j] = s1_ex(s8_form[s8_j], s8_env);
        return s8_a;
    }
    return s8_x = _s8_t0, !s1_atom(s8_x) || !s8_env.macros.has(s8_x) || s8_env.macros.get(s8_x) instanceof Function ? (s8_x = _s8_t0, 
    s1_prim(s8_x) ? s8_x : (s8_x = _s8_t0, s1_atom(s8_x) ? s8_env.use(s8_x) : s8_any = _s8_t0)) : s8_env.macros.get(s8_x);
}), s1_checkEvaluated = function(s12_form) {
    var s12_form, _s12_t1;
    if (s12_form && s12_form instanceof Array) {
        if (s12_form.unevaluated) throw new s1_FormInvalidError(s12_form, "Unevaluated subform");
        return _s12_t1 = void 0, s12_form.forEach(s1_checkEvaluated);
    }
    return void 0;
}, exports.pass = function(s13_form, s13_globalScope) {
    var s13_form, s13_globalScope;
    return s1_ex(s13_form, s13_globalScope);
}, exports.ex = s1_ex, exports.checkEvaluated = s1_checkEvaluated, exports.deQuasiquote = s1_deQuasiquote;