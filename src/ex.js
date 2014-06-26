var s2_atom, s2_Scope, s2_prim, s2_ex;

s2_atom = require("../commons/match").atom, s2_Scope = require("patrisika").Scope, 
s2_prim = require("../commons/match").prim, s2_ex = function(s3_form, s3_env) {
    var s3_form, s3_env, s3_any, s3_x, s3_callee, s3_args, s3_a, s3_j, s3_block, s3_param, s3_handler, s3_body, s3_params, s3_derived, _s3_t0, _s3_t9, _s3_t10;
    if (_s3_t0 = s3_form, _s3_t0 instanceof Array && _s3_t0.length >= 1 && ".quote" === _s3_t0[0]) return s3_x = _s3_t0.slice(1), 
    s3_form;
    if (_s3_t0 instanceof Array && _s3_t0.length >= 1 && ".id" === _s3_t0[0]) return s3_x = _s3_t0.slice(1), 
    s3_form;
    if (_s3_t0 instanceof Array && 3 === _s3_t0.length && ".lambda" === _s3_t0[0] && _s3_t0[1] instanceof Array && _s3_t0[1].length >= 0) {
        for (s3_args = _s3_t0[1].slice(0), s3_body = _s3_t0[2], s3_derived = new s2_Scope(s3_env), 
        s3_j = 0; s3_j < s3_args.length; ) s3_derived.declare(s3_args[s3_j], !0), s3_args[s3_j] = s3_derived.use(s3_args[s3_j]), 
        s3_j += 1;
        return [ ".lambda.scoped", s3_args, s2_ex(s3_body, s3_derived), s3_derived ];
    }
    if (_s3_t0 instanceof Array && _s3_t0.length >= 3 && ".beta" === _s3_t0[0] && _s3_t0[1] instanceof Array && _s3_t0[1].length >= 0) {
        for (s3_args = _s3_t0[1].slice(0), s3_body = _s3_t0[2], s3_params = _s3_t0.slice(3), 
        s3_derived = new s2_Scope(s3_env), s3_j = 0; s3_j < s3_args.length; ) s3_derived.declare(s3_args[s3_j], !0), 
        s3_args[s3_j] = s3_derived.use(s3_args[s3_j]), s3_j += 1;
        for (s3_j = 0; s3_j < s3_args.length; ) s3_params[s3_j] = s2_ex(s3_params[s3_j], s3_env), 
        s3_j += 1;
        return [ ".beta.scoped", s3_args, s2_ex(s3_body, s3_derived), s3_derived ].concat(s3_params);
    }
    if (_s3_t0 instanceof Array && 4 === _s3_t0.length && ".try" === _s3_t0[0] && _s3_t0[2] instanceof Array && 1 === _s3_t0[2].length) return s3_block = _s3_t0[1], 
    s3_param = _s3_t0[2][0], s3_handler = _s3_t0[3], s3_env.declare(s3_param), [ ".try", s2_ex(s3_block, s3_env), s3_env.use(s3_param), s2_ex(s3_handler, s3_env) ];
    if (_s3_t0 instanceof Array && _s3_t0.length >= 1 && ".hash" === _s3_t0[0]) {
        for (s3_args = _s3_t0.slice(1), s3_a = [ ".hash" ], s3_j = 1; s3_j < s3_form.length; ) s3_a[s3_j] = [ s3_form[s3_j][0], s2_ex(s3_form[s3_j][1], s3_env) ], 
        s3_j += 1;
        return s3_a;
    }
    if (_s3_t0 instanceof Array && 2 === _s3_t0.length && ".local" === _s3_t0[0]) return s3_x = _s3_t0[1], 
    s3_env.declare(s3_x), s3_env.use(s3_x);
    if (_s3_t0 instanceof Array && _s3_t0.length >= 1) {
        if (s3_callee = _s3_t0[0], s3_args = _s3_t0.slice(1), s2_atom(s3_callee) && s3_env.macros.has(s3_callee)) return s3_env.macros.get(s3_callee)(s2_ex, s3_form, s3_env);
        for (_s3_t9 = void 0, _s3_t10 = s2_prim(s3_callee) ? void 0 : s3_callee = s2_ex(s3_callee, s3_env), 
        s3_a = [ s3_callee ], s3_j = 1; s3_j < s3_form.length; ) s3_a[s3_j] = s2_ex(s3_form[s3_j], s3_env), 
        s3_j += 1;
        return s3_a;
    }
    return s3_x = _s3_t0, !s2_atom(s3_x) || !s3_env.macros.has(s3_x) || s3_env.macros.get(s3_x) instanceof Function ? (s3_x = _s3_t0, 
    s2_prim(s3_x) ? s3_x : (s3_x = _s3_t0, s2_atom(s3_x) ? s3_env.use(s3_x) : s3_any = _s3_t0)) : s3_env.macros.get(s3_x);
}, exports.pass = function(s4_form, s4_globalScope) {
    var s4_form, s4_globalScope;
    return s2_ex(s4_form, s4_globalScope);
};