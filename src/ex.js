[ "ex", "form", "env" ].globalScope;

var s2_atom, s2_Scope, s2_prim, s2_ex;

s2_atom = require("../commons/match").atom, s2_Scope = require("patrisika").Scope, 
s2_prim = require("../commons/match").prim, s2_ex = function(e, r) {
    var e, r, s, n, t, a, o, c, i, l, f, m, _, h, u, g, p;
    if (u = e, u instanceof Array && u.length >= 1 && ".quote" === u[0]) return o = u.slice(1), 
    e;
    if (u instanceof Array && u.length >= 1 && ".id" === u[0]) return o = u.slice(1), 
    e;
    if (u instanceof Array && 3 === u.length && ".lambda" === u[0] && u[1] instanceof Array && u[1].length >= 0) {
        for (i = u[1].slice(0), _ = u[2], t = new s2_Scope(r), n = 0; n < i.length; ) t.declare(i[n], !0), 
        i[n] = t.use(i[n]), n += 1;
        return [ ".lambda.scoped", i, s2_ex(_, t), t ];
    }
    if (u instanceof Array && u.length >= 3 && ".beta" === u[0] && u[1] instanceof Array && u[1].length >= 0) {
        for (i = u[1].slice(0), _ = u[2], h = u.slice(3), t = new s2_Scope(r), n = 0; n < i.length; ) t.declare(i[n], !0), 
        i[n] = t.use(i[n]), n += 1;
        for (n = 0; n < i.length; ) h[n] = s2_ex(h[n], r), n += 1;
        return [ ".beta.scoped", i, s2_ex(_, t), t ].concat(h);
    }
    if (u instanceof Array && 4 === u.length && ".try" === u[0] && u[2] instanceof Array && 1 === u[2].length) return l = u[1], 
    f = u[2][0], m = u[3], r.declare(f), [ ".try", s2_ex(l, r), r.use(f), s2_ex(m, r) ];
    if (u instanceof Array && u.length >= 1 && ".hash" === u[0]) {
        for (i = u.slice(1), s = [ ".hash" ], n = 1; n < e.length; ) s[n] = [ e[n][0], s2_ex(e[n][1], r) ], 
        n += 1;
        return s;
    }
    if (u instanceof Array && 2 === u.length && ".local" === u[0]) return o = u[1], 
    r.declare(o), r.use(o);
    if (u instanceof Array && u.length >= 1) {
        if (c = u[0], i = u.slice(1), s2_atom(c) && r.macros.has(c)) return r.macros.get(c)(s2_ex, e, r);
        for (g = void 0, p = s2_prim(c) ? void 0 : c = s2_ex(c, r), s = [ c ], n = 1; n < e.length; ) s[n] = s2_ex(e[n], r), 
        n += 1;
        return s;
    }
    return o = u, !s2_atom(o) || !r.macros.has(o) || r.macros.get(o) instanceof Function ? (o = u, 
    s2_prim(o) ? o : (o = u, s2_atom(o) ? r.use(o) : a = u)) : r.macros.get(o);
}, exports.pass = function(e, r) {
    var e, r;
    return s2_ex(e, r);
};