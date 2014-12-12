var s1_Scope, s1_atom, s1_prim, s1_NodeTranslation, s1_ex, _s1_t0, _s1_t1, _s1_t2, _s1_t3, _s1_t4;

s1_Scope = require("patrisika").Scope, s1_atom = function(s2_x) {
    var s2_x;
    return "string" == typeof s2_x;
}, s1_prim = function(s3_x) {
    var s3_x;
    return s1_atom(s3_x) && "&" !== s3_x && "&!" !== s3_x && ("." === s3_x[0] || /^\W+/.test(s3_x));
}, s1_NodeTranslation = function(s4_fn) {
    var s4_fn;
    return function(s5_form) {
        var s5_form, s5_res, _s5_t0, _s5_t1, _s5_t2, _s5_t3;
        return _s5_t1 = arguments, _s5_t0 = this, s5_res = s4_fn.apply(_s5_t0, _s5_t1), 
        _s5_t2 = s5_form && s5_form.begins >= 0 ? s5_res.begins = s5_form.begins : void 0, 
        _s5_t3 = s5_form && s5_form.ends >= 0 ? s5_res.ends = s5_form.ends : void 0, s5_res;
    };
}, s1_ex = s1_NodeTranslation(function(s6_form, s6_env) {
    var s6_form, s6_env, s6_any, s6_x, s6_callee, s6_args, s6_a, s6_j, s6_block, s6_param, s6_handler, s6_body, s6_params, s6_derived, _s6_t0, _s6_t10, _s6_t11;
    if (_s6_t0 = s6_form, _s6_t0 instanceof Array && _s6_t0.length >= 1 && ".quote" === _s6_t0[0]) return s6_x = _s6_t0.slice(1), 
    s6_form;
    if (_s6_t0 instanceof Array && _s6_t0.length >= 1 && ".id" === _s6_t0[0]) return s6_x = _s6_t0.slice(1), 
    s6_form;
    if (_s6_t0 instanceof Array && _s6_t0.length >= 1 && ".t" === _s6_t0[0]) return s6_x = _s6_t0.slice(1), 
    s6_form;
    if (_s6_t0 instanceof Array && 3 === _s6_t0.length && ".lambda" === _s6_t0[0] && _s6_t0[1] instanceof Array && _s6_t0[1].length >= 0) {
        for (s6_args = _s6_t0[1].slice(0), s6_body = _s6_t0[2], s6_derived = new s1_Scope(s6_env), 
        s6_j = 0; s6_j < s6_args.length; ) s6_derived.declare(s6_args[s6_j], !0), s6_args[s6_j] = s6_derived.use(s6_args[s6_j]), 
        s6_j += 1;
        return [ ".lambda.scoped", s6_args, s1_ex(s6_body, s6_derived), s6_derived ];
    }
    if (_s6_t0 instanceof Array && _s6_t0.length >= 3 && ".beta" === _s6_t0[0] && _s6_t0[1] instanceof Array && _s6_t0[1].length >= 0) {
        for (s6_args = _s6_t0[1].slice(0), s6_body = _s6_t0[2], s6_params = _s6_t0.slice(3), 
        s6_derived = new s1_Scope(s6_env), s6_j = 0; s6_j < s6_args.length; ) s6_derived.declare(s6_args[s6_j], !0), 
        s6_args[s6_j] = s6_derived.use(s6_args[s6_j]), s6_j += 1;
        for (s6_j = 0; s6_j < s6_args.length; ) s6_params[s6_j] = s1_ex(s6_params[s6_j], s6_env), 
        s6_j += 1;
        return [ ".beta.scoped", s6_args, s1_ex(s6_body, s6_derived), s6_derived ].concat(s6_params);
    }
    if (_s6_t0 instanceof Array && 4 === _s6_t0.length && ".try" === _s6_t0[0] && _s6_t0[2] instanceof Array && 1 === _s6_t0[2].length) return s6_block = _s6_t0[1], 
    s6_param = _s6_t0[2][0], s6_handler = _s6_t0[3], s6_env.declare(s6_param), [ ".try", s1_ex(s6_block, s6_env), [ s6_env.use(s6_param) ], s1_ex(s6_handler, s6_env) ];
    if (_s6_t0 instanceof Array && _s6_t0.length >= 1 && ".hash" === _s6_t0[0]) {
        for (s6_args = _s6_t0.slice(1), s6_a = [ ".hash" ], s6_j = 1; s6_j < s6_form.length; ) s6_a[s6_j] = [ s6_form[s6_j][0], s1_ex(s6_form[s6_j][1], s6_env) ], 
        s6_j += 1;
        return s6_a;
    }
    if (_s6_t0 instanceof Array && 2 === _s6_t0.length && ".local" === _s6_t0[0]) return s6_x = _s6_t0[1], 
    s6_env.declare(s6_x), s6_env.use(s6_x);
    if (_s6_t0 instanceof Array && _s6_t0.length >= 1) {
        if (s6_callee = _s6_t0[0], s6_args = _s6_t0.slice(1), s1_atom(s6_callee) && s6_env.macros.has(s6_callee)) return s6_env.macros.get(s6_callee)(s1_ex, s6_form, s6_env);
        for (_s6_t10 = void 0, _s6_t11 = s1_prim(s6_callee) ? void 0 : s6_callee = s1_ex(s6_callee, s6_env), 
        s6_a = [ s6_callee ], s6_j = 1; s6_j < s6_form.length; ) s6_a[s6_j] = s1_ex(s6_form[s6_j], s6_env), 
        s6_j += 1;
        return s6_a;
    }
    return s6_x = _s6_t0, !s1_atom(s6_x) || !s6_env.macros.has(s6_x) || s6_env.macros.get(s6_x) instanceof Function ? (s6_x = _s6_t0, 
    s1_prim(s6_x) ? s6_x : (s6_x = _s6_t0, s1_atom(s6_x) ? s6_env.use(s6_x) : s6_any = _s6_t0)) : s6_env.macros.get(s6_x);
}), exports.pass = function(s7_form, s7_globalScope) {
    var s7_form, s7_globalScope;
    return s1_ex(s7_form, s7_globalScope);
};