var s2_atom, s2_Scope, s2_prim, s2_ex;

s2_atom = require("../commons/match").atom, s2_Scope = require("patrisika").Scope, 
s2_prim = require("../commons/match").prim, s2_ex = function(e, r) {
    var e, r, s, n, t, a, o, c, i, l, f, _, h, m, u, g, p;
    if (u = e, u instanceof Array && u.length >= 1 && ".quote" === u[0]) return n = u.slice(1), 
    e;
    if (u instanceof Array && u.length >= 1 && ".id" === u[0]) return n = u.slice(1), 
    e;
    if (u instanceof Array && 3 === u.length && ".lambda" === u[0] && u[1] instanceof Array && u[1].length >= 0) {
        for (a = u[1].slice(0), _ = u[2], m = new s2_Scope(r), c = 0; c < a.length; ) m.declare(a[c], !0), 
        a[c] = m.use(a[c]), c += 1;
        return [ ".lambda.scoped", a, s2_ex(_, m), m ];
    }
    if (u instanceof Array && u.length >= 3 && ".beta" === u[0] && u[1] instanceof Array && u[1].length >= 0) {
        for (a = u[1].slice(0), _ = u[2], h = u.slice(3), m = new s2_Scope(r), c = 0; c < a.length; ) m.declare(a[c], !0), 
        a[c] = m.use(a[c]), c += 1;
        for (c = 0; c < a.length; ) h[c] = s2_ex(h[c], r), c += 1;
        return [ ".beta.scoped", a, s2_ex(_, m), m ].concat(h);
    }
    if (u instanceof Array && 4 === u.length && ".try" === u[0] && u[2] instanceof Array && 1 === u[2].length) return i = u[1], 
    l = u[2][0], f = u[3], r.declare(l), [ ".try", s2_ex(i, r), [ r.use(l) ], s2_ex(f, r) ];
    if (u instanceof Array && u.length >= 1 && ".hash" === u[0]) {
        for (a = u.slice(1), o = [ ".hash" ], c = 1; c < e.length; ) o[c] = [ e[c][0], s2_ex(e[c][1], r) ], 
        c += 1;
        return o;
    }
    if (u instanceof Array && 2 === u.length && ".local" === u[0]) return n = u[1], 
    r.declare(n), r.use(n);
    if (u instanceof Array && u.length >= 1) {
        if (t = u[0], a = u.slice(1), s2_atom(t) && r.macros.has(t)) return r.macros.get(t)(s2_ex, e, r);
        for (g = void 0, p = s2_prim(t) ? void 0 : t = s2_ex(t, r), o = [ t ], c = 1; c < e.length; ) o[c] = s2_ex(e[c], r), 
        c += 1;
        return o;
    }
    return n = u, !s2_atom(n) || !r.macros.has(n) || r.macros.get(n) instanceof Function ? (n = u, 
    s2_prim(n) ? n : (n = u, s2_atom(n) ? r.use(n) : s = u)) : r.macros.get(n);
}, exports.pass = function(e, r) {
    var e, r;
    return s2_ex(e, r);
};