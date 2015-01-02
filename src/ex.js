var s1_Scope, s1_atom, s1_prim, s1_FormInvalidError, s1_NodeTranslation, s1_ex, s1_checkEvaluated, _s1_t0, _s1_t1, _s1_t2, _s1_t3, _s1_t4, _s1_t5, _s1_t6;

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
        _s6_t2 = s6_form && s6_form.begins >= 0 ? s6_res.begins = s6_form.begins : void 0, 
        _s6_t3 = s6_form && s6_form.ends >= 0 ? s6_res.ends = s6_form.ends : void 0, s6_res;
    };
}, s1_ex = s1_NodeTranslation(function(s7_form, s7_env) {
    var s7_form, s7_env, s7_any, s7_x, s7_callee, s7_args, s7_a, s7_j, s7_block, s7_param, s7_handler, s7_body, s7_params, s7_derived, _s7_t0, _s7_t10, _s7_t11;
    if (_s7_t0 = s7_form, _s7_t0 instanceof Array && _s7_t0.length >= 1 && ".quote" === _s7_t0[0]) return s7_x = _s7_t0.slice(1), 
    [ ".quote" ].concat(s7_x);
    if (_s7_t0 instanceof Array && _s7_t0.length >= 1 && ".id" === _s7_t0[0]) return s7_x = _s7_t0.slice(1), 
    [ ".id" ].concat(s7_x);
    if (_s7_t0 instanceof Array && _s7_t0.length >= 1 && ".t" === _s7_t0[0]) return s7_x = _s7_t0.slice(1), 
    [ ".t" ].concat(s7_x);
    if (_s7_t0 instanceof Array && 3 === _s7_t0.length && ".lambda" === _s7_t0[0] && _s7_t0[1] instanceof Array && _s7_t0[1].length >= 0) {
        for (s7_args = _s7_t0[1].slice(0), s7_body = _s7_t0[2], s7_derived = new s1_Scope(s7_env), 
        s7_j = 0; s7_j < s7_args.length; ) s7_derived.declare(s7_args[s7_j], !0), s7_args[s7_j] = s7_derived.use(s7_args[s7_j]), 
        s7_j += 1;
        return [ ".lambda.scoped", s7_args, s1_ex(s7_body, s7_derived), s7_derived ];
    }
    if (_s7_t0 instanceof Array && _s7_t0.length >= 3 && ".beta" === _s7_t0[0] && _s7_t0[1] instanceof Array && _s7_t0[1].length >= 0) {
        for (s7_args = _s7_t0[1].slice(0), s7_body = _s7_t0[2], s7_params = _s7_t0.slice(3), 
        s7_derived = new s1_Scope(s7_env), s7_j = 0; s7_j < s7_args.length; ) s7_derived.declare(s7_args[s7_j], !0), 
        s7_args[s7_j] = s7_derived.use(s7_args[s7_j]), s7_j += 1;
        for (s7_j = 0; s7_j < s7_args.length; ) s7_params[s7_j] = s1_ex(s7_params[s7_j], s7_env), 
        s7_j += 1;
        return [ ".beta.scoped", s7_args, s1_ex(s7_body, s7_derived), s7_derived ].concat(s7_params);
    }
    if (_s7_t0 instanceof Array && 4 === _s7_t0.length && ".try" === _s7_t0[0] && _s7_t0[2] instanceof Array && 1 === _s7_t0[2].length) return s7_block = _s7_t0[1], 
    s7_param = _s7_t0[2][0], s7_handler = _s7_t0[3], s7_env.declare(s7_param), [ ".try", s1_ex(s7_block, s7_env), [ s7_env.use(s7_param) ], s1_ex(s7_handler, s7_env) ];
    if (_s7_t0 instanceof Array && _s7_t0.length >= 1 && ".hash" === _s7_t0[0]) {
        for (s7_args = _s7_t0.slice(1), s7_a = [ ".hash" ], s7_j = 1; s7_j < s7_form.length; ) s7_a[s7_j] = [ s7_form[s7_j][0], s1_ex(s7_form[s7_j][1], s7_env) ], 
        s7_j += 1;
        return s7_a;
    }
    if (_s7_t0 instanceof Array && 2 === _s7_t0.length && ".local" === _s7_t0[0]) return s7_x = _s7_t0[1], 
    s7_env.declare(s7_x), s7_env.use(s7_x);
    if (_s7_t0 instanceof Array && _s7_t0.length >= 1) {
        if (s7_callee = _s7_t0[0], s7_args = _s7_t0.slice(1), s1_atom(s7_callee) && s7_env.macros.has(s7_callee)) return s7_env.macros.get(s7_callee)(s7_form, s7_env);
        for (_s7_t10 = void 0, _s7_t11 = s1_prim(s7_callee) ? void 0 : s7_callee = s1_ex(s7_callee, s7_env), 
        s7_a = [ s7_callee ], s7_j = 1; s7_j < s7_form.length; ) s7_a[s7_j] = s1_ex(s7_form[s7_j], s7_env), 
        s7_j += 1;
        return s7_a;
    }
    return s7_x = _s7_t0, !s1_atom(s7_x) || !s7_env.macros.has(s7_x) || s7_env.macros.get(s7_x) instanceof Function ? (s7_x = _s7_t0, 
    s1_prim(s7_x) ? s7_x : (s7_x = _s7_t0, s1_atom(s7_x) ? s7_env.use(s7_x) : s7_any = _s7_t0)) : s7_env.macros.get(s7_x);
}), s1_checkEvaluated = function(s8_form) {
    var s8_form, _s8_t1;
    if (s8_form && s8_form instanceof Array) {
        if (s8_form.unevaluated) throw new s1_FormInvalidError(s8_form, "Unevaluated subform");
        return _s8_t1 = void 0, s8_form.forEach(s1_checkEvaluated);
    }
    return void 0;
}, exports.pass = function(s9_form, s9_globalScope) {
    var s9_form, s9_globalScope;
    return s1_ex(s9_form, s9_globalScope);
}, exports.ex = s1_ex, exports.checkEvaluated = s1_checkEvaluated;