var s1_atom, s1_Scope, s1_prim, s1_ex;

s1_atom = require("../commons/match").atom, s1_Scope = require("patrisika").Scope, 
s1_prim = require("../commons/match").prim, s1_ex = function(s2_form, s2_env) {
    var s2_form, s2_env, s2_any, s2_x, s2_callee, s2_args, s2_a, s2_j, s2_block, s2_param, s2_handler, s2_body, s2_params, s2_derived, _s2_t0, _s2_t9, _s2_t10;
    if (_s2_t0 = s2_form, _s2_t0 instanceof Array && _s2_t0.length >= 1 && ".quote" === _s2_t0[0]) return s2_x = _s2_t0.slice(1), 
    s2_form;
    if (_s2_t0 instanceof Array && _s2_t0.length >= 1 && ".id" === _s2_t0[0]) return s2_x = _s2_t0.slice(1), 
    s2_form;
    if (_s2_t0 instanceof Array && 3 === _s2_t0.length && ".lambda" === _s2_t0[0] && _s2_t0[1] instanceof Array && _s2_t0[1].length >= 0) {
        for (s2_args = _s2_t0[1].slice(0), s2_body = _s2_t0[2], s2_derived = new s1_Scope(s2_env), 
        s2_j = 0; s2_j < s2_args.length; ) s2_derived.declare(s2_args[s2_j], !0), s2_args[s2_j] = s2_derived.use(s2_args[s2_j]), 
        s2_j += 1;
        return [ ".lambda.scoped", s2_args, s1_ex(s2_body, s2_derived), s2_derived ];
    }
    if (_s2_t0 instanceof Array && _s2_t0.length >= 3 && ".beta" === _s2_t0[0] && _s2_t0[1] instanceof Array && _s2_t0[1].length >= 0) {
        for (s2_args = _s2_t0[1].slice(0), s2_body = _s2_t0[2], s2_params = _s2_t0.slice(3), 
        s2_derived = new s1_Scope(s2_env), s2_j = 0; s2_j < s2_args.length; ) s2_derived.declare(s2_args[s2_j], !0), 
        s2_args[s2_j] = s2_derived.use(s2_args[s2_j]), s2_j += 1;
        for (s2_j = 0; s2_j < s2_args.length; ) s2_params[s2_j] = s1_ex(s2_params[s2_j], s2_env), 
        s2_j += 1;
        return [ ".beta.scoped", s2_args, s1_ex(s2_body, s2_derived), s2_derived ].concat(s2_params);
    }
    if (_s2_t0 instanceof Array && 4 === _s2_t0.length && ".try" === _s2_t0[0] && _s2_t0[2] instanceof Array && 1 === _s2_t0[2].length) return s2_block = _s2_t0[1], 
    s2_param = _s2_t0[2][0], s2_handler = _s2_t0[3], s2_env.declare(s2_param), [ ".try", s1_ex(s2_block, s2_env), [ s2_env.use(s2_param) ], s1_ex(s2_handler, s2_env) ];
    if (_s2_t0 instanceof Array && _s2_t0.length >= 1 && ".hash" === _s2_t0[0]) {
        for (s2_args = _s2_t0.slice(1), s2_a = [ ".hash" ], s2_j = 1; s2_j < s2_form.length; ) s2_a[s2_j] = [ s2_form[s2_j][0], s1_ex(s2_form[s2_j][1], s2_env) ], 
        s2_j += 1;
        return s2_a;
    }
    if (_s2_t0 instanceof Array && 2 === _s2_t0.length && ".local" === _s2_t0[0]) return s2_x = _s2_t0[1], 
    s2_env.declare(s2_x), s2_env.use(s2_x);
    if (_s2_t0 instanceof Array && _s2_t0.length >= 1) {
        if (s2_callee = _s2_t0[0], s2_args = _s2_t0.slice(1), s1_atom(s2_callee) && s2_env.macros.has(s2_callee)) return s2_env.macros.get(s2_callee)(s1_ex, s2_form, s2_env);
        for (_s2_t9 = void 0, _s2_t10 = s1_prim(s2_callee) ? void 0 : s2_callee = s1_ex(s2_callee, s2_env), 
        s2_a = [ s2_callee ], s2_j = 1; s2_j < s2_form.length; ) s2_a[s2_j] = s1_ex(s2_form[s2_j], s2_env), 
        s2_j += 1;
        return s2_a;
    }
    return s2_x = _s2_t0, !s1_atom(s2_x) || !s2_env.macros.has(s2_x) || s2_env.macros.get(s2_x) instanceof Function ? (s2_x = _s2_t0, 
    s1_prim(s2_x) ? s2_x : (s2_x = _s2_t0, s1_atom(s2_x) ? s2_env.use(s2_x) : s2_any = _s2_t0)) : s2_env.macros.get(s2_x);
}, exports.pass = function(s3_form, s3_globalScope) {
    var s3_form, s3_globalScope;
    return s1_ex(s3_form, s3_globalScope);
};