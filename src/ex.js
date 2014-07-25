var s1_Scope, s1_atom, s1_prim, s1_ex;

s1_Scope = require("patrisika").Scope, s1_atom = function(s2_x) {
    var s2_x;
    return "string" == typeof s2_x;
}, s1_prim = function(s3_x) {
    var s3_x;
    return s1_atom(s3_x) && "&" !== s3_x && "&!" !== s3_x && ("." === s3_x[0] || /^\W+/.test(s3_x));
}, s1_ex = function(s4_form, s4_env) {
    var s4_form, s4_env, s4_any, s4_x, s4_callee, s4_args, s4_a, s4_j, s4_block, s4_param, s4_handler, s4_body, s4_params, s4_derived, _s4_t0, _s4_t10, _s4_t11;
    if (_s4_t0 = s4_form, _s4_t0 instanceof Array && _s4_t0.length >= 1 && ".quote" === _s4_t0[0]) return s4_x = _s4_t0.slice(1), 
    s4_form;
    if (_s4_t0 instanceof Array && _s4_t0.length >= 1 && ".id" === _s4_t0[0]) return s4_x = _s4_t0.slice(1), 
    s4_form;
    if (_s4_t0 instanceof Array && _s4_t0.length >= 1 && ".t" === _s4_t0[0]) return s4_x = _s4_t0.slice(1), 
    s4_form;
    if (_s4_t0 instanceof Array && 3 === _s4_t0.length && ".lambda" === _s4_t0[0] && _s4_t0[1] instanceof Array && _s4_t0[1].length >= 0) {
        for (s4_args = _s4_t0[1].slice(0), s4_body = _s4_t0[2], s4_derived = new s1_Scope(s4_env), 
        s4_j = 0; s4_j < s4_args.length; ) s4_derived.declare(s4_args[s4_j], !0), s4_args[s4_j] = s4_derived.use(s4_args[s4_j]), 
        s4_j += 1;
        return [ ".lambda.scoped", s4_args, s1_ex(s4_body, s4_derived), s4_derived ];
    }
    if (_s4_t0 instanceof Array && _s4_t0.length >= 3 && ".beta" === _s4_t0[0] && _s4_t0[1] instanceof Array && _s4_t0[1].length >= 0) {
        for (s4_args = _s4_t0[1].slice(0), s4_body = _s4_t0[2], s4_params = _s4_t0.slice(3), 
        s4_derived = new s1_Scope(s4_env), s4_j = 0; s4_j < s4_args.length; ) s4_derived.declare(s4_args[s4_j], !0), 
        s4_args[s4_j] = s4_derived.use(s4_args[s4_j]), s4_j += 1;
        for (s4_j = 0; s4_j < s4_args.length; ) s4_params[s4_j] = s1_ex(s4_params[s4_j], s4_env), 
        s4_j += 1;
        return [ ".beta.scoped", s4_args, s1_ex(s4_body, s4_derived), s4_derived ].concat(s4_params);
    }
    if (_s4_t0 instanceof Array && 4 === _s4_t0.length && ".try" === _s4_t0[0] && _s4_t0[2] instanceof Array && 1 === _s4_t0[2].length) return s4_block = _s4_t0[1], 
    s4_param = _s4_t0[2][0], s4_handler = _s4_t0[3], s4_env.declare(s4_param), [ ".try", s1_ex(s4_block, s4_env), [ s4_env.use(s4_param) ], s1_ex(s4_handler, s4_env) ];
    if (_s4_t0 instanceof Array && _s4_t0.length >= 1 && ".hash" === _s4_t0[0]) {
        for (s4_args = _s4_t0.slice(1), s4_a = [ ".hash" ], s4_j = 1; s4_j < s4_form.length; ) s4_a[s4_j] = [ s4_form[s4_j][0], s1_ex(s4_form[s4_j][1], s4_env) ], 
        s4_j += 1;
        return s4_a;
    }
    if (_s4_t0 instanceof Array && 2 === _s4_t0.length && ".local" === _s4_t0[0]) return s4_x = _s4_t0[1], 
    s4_env.declare(s4_x), s4_env.use(s4_x);
    if (_s4_t0 instanceof Array && _s4_t0.length >= 1) {
        if (s4_callee = _s4_t0[0], s4_args = _s4_t0.slice(1), s1_atom(s4_callee) && s4_env.macros.has(s4_callee)) return s4_env.macros.get(s4_callee)(s1_ex, s4_form, s4_env);
        for (_s4_t10 = void 0, _s4_t11 = s1_prim(s4_callee) ? void 0 : s4_callee = s1_ex(s4_callee, s4_env), 
        s4_a = [ s4_callee ], s4_j = 1; s4_j < s4_form.length; ) s4_a[s4_j] = s1_ex(s4_form[s4_j], s4_env), 
        s4_j += 1;
        return s4_a;
    }
    return s4_x = _s4_t0, !s1_atom(s4_x) || !s4_env.macros.has(s4_x) || s4_env.macros.get(s4_x) instanceof Function ? (s4_x = _s4_t0, 
    s1_prim(s4_x) ? s4_x : (s4_x = _s4_t0, s1_atom(s4_x) ? s4_env.use(s4_x) : s4_any = _s4_t0)) : s4_env.macros.get(s4_x);
}, exports.pass = function(s5_form, s5_globalScope) {
    var s5_form, s5_globalScope;
    return s1_ex(s5_form, s5_globalScope);
};