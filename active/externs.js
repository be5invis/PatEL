var s1_patrisika, s1_atom, s1_prim, s1_Scope, s1_escodegen, s1_util, s1_ex, s1_FormInvalidError, s1_wrapForSyntacticClosure, s1_Create, _s1_t0, _s1_t1, _s1_t2, _s1_t3, _s1_t4;

s1_patrisika = require("patrisika"), s1_atom = function(s2_x) {
    var s2_x;
    return "string" == typeof s2_x;
}, s1_prim = function(s3_x) {
    var s3_x;
    return s1_atom(s3_x) && "&" !== s3_x && "&!" !== s3_x && ("." === s3_x[0] || /^\W+/.test(s3_x));
}, s1_Scope = require("patrisika").Scope, s1_escodegen = require("escodegen"), s1_util = require("util"), 
s1_ex = require("./ex").ex, s1_FormInvalidError = function(s4_form, s4_reason) {
    var s4_form, s4_reason, _s4_t0, _s4_t1;
    return _s4_t0 = this, _s4_t0.reason = s4_reason, _s4_t0.message = s4_reason, _s4_t0.relatedForm = s4_form, 
    s4_form && s4_form.begins >= 0 && s4_form.ends >= 0 ? (_s4_t0.begins = s4_form.begins, 
    _s4_t0.ends = s4_form.ends, _s4_t1 = _s4_t0.message = _s4_t0.message + ("\nAround (" + _s4_t0.begins + " -- " + _s4_t0.ends + ")")) : _s4_t1 = void 0, 
    null;
}, s1_FormInvalidError.prototype = Object.create(Error.prototype), s1_wrapForSyntacticClosure = function(s5_fn) {
    var s5_fn;
    return function(s6_x) {
        var s6_x, s6_otherwise, s6_c, s6_e, _s6_t0;
        return _s6_t0 = s6_x, _s6_t0 instanceof Array && 3 === _s6_t0.length && ".syntactic-closure" === _s6_t0[0] ? (s6_c = _s6_t0[1], 
        s6_e = _s6_t0[2], s5_fn(s6_c)) : (s6_otherwise = _s6_t0, s5_fn(s6_x));
    };
}, s1_Create = function() {
    var s7_externs, s7_operatorRename, s7_reportInvalid, s7_AssignWithMod, s7_Assign, s7_boole;
    return s7_externs = s1_patrisika.DefaultExterns(), s7_externs.castName = function(s8_name) {
        var s8_name;
        return s8_name;
    }, s7_externs.declare("require"), s7_externs.declare("exports"), s7_externs.declare("process"), 
    s7_externs.declare("module"), s7_externs.declare("Error"), s7_operatorRename = function(s9_op) {
        var s9_op;
        return function(s10_form, s10_env) {
            var s10_form, s10_env;
            return s1_ex([ s9_op ].concat(s10_form.slice(1)), s10_env);
        };
    }, s7_reportInvalid = function(s11_form, s11_reason) {
        var s11_form, s11_reason;
        throw new s1_FormInvalidError(s11_form, s11_reason);
    }, s7_externs.macros.put("begin", s7_operatorRename(".begin")), s7_externs.macros.put("then", s7_operatorRename(".begin")), 
    s7_externs.macros.put("else", s7_operatorRename(".begin")), s7_externs.macros.put("while", s7_operatorRename(".while")), 
    s7_externs.macros.put("try", s7_operatorRename(".try")), s7_externs.macros.put("is", s7_operatorRename(".is")), 
    s7_externs.macros.put("<@", s7_operatorRename(".is")), s7_externs.macros.put("new", s7_operatorRename(".new")), 
    s7_externs.macros.put("this", s7_operatorRename(".thisp")), s7_externs.macros.put("arguments", s7_operatorRename(".argsp")), 
    s7_externs.macros.put("and", s7_operatorRename("&&")), s7_externs.macros.put("or", s7_operatorRename("||")), 
    s7_externs.macros.put("not", s7_operatorRename("!")), s7_externs.macros.put("return", s7_operatorRename(".return")), 
    s7_externs.macros.put("yield", s7_operatorRename(".yield")), s7_externs.macros.put("throw", s7_operatorRename(".throw")), 
    s7_externs.macros.put("list", s7_operatorRename(".list")), s7_externs.macros.put("typeof", s7_operatorRename(".typeof")), 
    s7_externs.macros.put("lambda", function(s12_form, s12_env) {
        var s12_form, s12_env, s12_otherwise, s12_car, s12_body, s12_parameters, _s12_t0;
        return _s12_t0 = s12_form, _s12_t0 instanceof Array && 3 === _s12_t0.length ? (s12_car = _s12_t0[0], 
        s12_parameters = _s12_t0[1], s12_body = _s12_t0[2], s1_ex([ ".lambda", s12_parameters, s12_body ], s12_env)) : _s12_t0 instanceof Array && 2 === _s12_t0.length ? (s12_car = _s12_t0[0], 
        s12_body = _s12_t0[1], s1_ex([ ".lambda", [], s12_body ], s12_env)) : _s12_t0 instanceof Array && 1 === _s12_t0.length ? (s12_car = _s12_t0[0], 
        s1_ex([ ".lambda", [], [ ".unit" ] ], s12_body)) : (s12_otherwise = _s12_t0, s7_reportInvalid(s12_otherwise, "Invalid Lambda Formation"));
    }), s7_externs.macros.put("function", s7_externs.macros.get("lambda")), s7_externs.macros.put("if", function(s13_form, s13_env) {
        var s13_form, s13_env, s13_otherwise, s13_test, s13_consequents, s13_alternates, s13_consequent, s13_alternate, _s13_t0;
        return _s13_t0 = s13_form, _s13_t0 instanceof Array && 3 === _s13_t0.length && "if" === _s13_t0[0] ? (s13_test = _s13_t0[1], 
        s13_consequent = _s13_t0[2], s1_ex([ ".if", s13_test, s13_consequent ], s13_env)) : _s13_t0 instanceof Array && 4 === _s13_t0.length && "if" === _s13_t0[0] ? (s13_test = _s13_t0[1], 
        s13_consequent = _s13_t0[2], s13_alternate = _s13_t0[3], s1_ex([ ".if", s13_test, s13_consequent, s13_alternate ], s13_env)) : _s13_t0 instanceof Array && 3 === _s13_t0.length && "if" === _s13_t0[0] && _s13_t0[2] instanceof Array && _s13_t0[2].length >= 1 && "then" === _s13_t0[2][0] ? (s13_test = _s13_t0[1], 
        s13_consequents = _s13_t0[2].slice(1), s1_ex([ ".if", s13_test, [ ".begin" ].concat(s13_consequents) ], s13_env)) : _s13_t0 instanceof Array && 4 === _s13_t0.length && "if" === _s13_t0[0] && _s13_t0[2] instanceof Array && _s13_t0[2].length >= 1 && "then" === _s13_t0[2][0] && _s13_t0[3] instanceof Array && _s13_t0[3].length >= 1 && "else" === _s13_t0[3][0] ? (s13_test = _s13_t0[1], 
        s13_consequents = _s13_t0[2].slice(1), s13_alternates = _s13_t0[3].slice(1), s1_ex([ ".if", s13_test, [ ".begin" ].concat(s13_consequents), [ ".begin" ].concat(s13_alternates) ], s13_env)) : (s13_otherwise = _s13_t0, 
        s7_reportInvalid(s13_otherwise, "Invalid Conditional Form"));
    }), s7_externs.macros.put(".conslist", function(s14_form, s14_env) {
        var s14_form, s14_env;
        return [ [ ".", s1_ex([ ".list" ].concat(s14_form.slice(1, -1)), s14_env), [ ".quote", "concat" ] ], s1_ex(s14_form[s14_form.length - 1], s14_env) ];
    }), s7_externs.macros.put("let", function(s15_form, s15_env) {
        var s15_form, s15_env, s15_pairs, s15_args, s15_paras, s15_j, s15_arg, s15_param, s15_useless, _s15_t0, _s15_t1, _s15_t2, _s15_t3;
        for (s15_pairs = s15_form.slice(1, -1), s15_args = [], s15_paras = [], s15_j = 0; s15_j < s15_pairs.length; s15_j += 1) _s15_t0 = s15_pairs[s15_j], 
        _s15_t0 instanceof Array && _s15_t0.length >= 2 ? (s15_arg = _s15_t0[0], s15_param = _s15_t0[1], 
        s15_useless = _s15_t0.slice(2), s15_args.push(s15_arg), s15_paras.push(s15_param)) : _s15_t0 instanceof Array && 2 === _s15_t0.length ? (s15_arg = _s15_t0[0], 
        s15_param = _s15_t0[1], s15_args.push(s15_arg), s15_paras.push(s15_param)) : (_s15_t1 = !1, 
        _s15_t0 instanceof Array && 1 === _s15_t0.length ? (s15_arg = _s15_t0[0], _s15_t3 = _s15_t1 = s1_atom(s15_arg) ? !0 : !1, 
        _s15_t2 = _s15_t3) : _s15_t2 = void 0, _s15_t1 && (s15_args.push(s15_arg), s15_paras.push(s15_env.use(s15_arg))));
        return s1_ex([ ".beta", s15_args, s15_form[s15_form.length - 1] ].concat(s15_paras), s15_env);
    }), s7_externs.macros.put("object", function(s16_form, s16_env) {
        var s16_form, s16_env, s16_pairs;
        return s16_pairs = s16_form.slice(1).map(function(s17_pair) {
            var s17_pair, s17_property, s17_value, s17_useless, _s17_t0, _s17_t1, _s17_t4, _s17_t5;
            return _s17_t0 = s17_pair, _s17_t0 instanceof Array && _s17_t0.length >= 2 ? (s17_property = _s17_t0[0], 
            s17_value = _s17_t0[1], s17_useless = _s17_t0.slice(2), [ s17_property, s1_ex(s17_value, s16_env) ]) : _s17_t0 instanceof Array && 2 === _s17_t0.length ? (s17_property = _s17_t0[0], 
            s17_value = _s17_t0[1], [ s17_property, s1_ex(s17_value, s16_env) ]) : (_s17_t1 = !1, 
            _s17_t0 instanceof Array && 1 === _s17_t0.length ? (s17_property = _s17_t0[0], _s17_t5 = _s17_t1 = s1_atom(s17_property) ? !0 : !1, 
            _s17_t4 = _s17_t5) : _s17_t4 = void 0, _s17_t1 ? [ s17_property, s16_env.use(s17_property) ] : void 0);
        }), [ ".hash" ].concat(s16_pairs);
    }), s7_externs.macros.put("piecewise", function(s18_form, s18_env) {
        var s18_form, s18_env, s18_pairs, s18_f, s18_j, _s18_t0;
        if (_s18_t0 = s18_form, _s18_t0 instanceof Array && _s18_t0.length >= 1 && "piecewise" === _s18_t0[0]) {
            for (s18_pairs = _s18_t0.slice(1), s18_f = [ ".unit" ], s18_j = s18_pairs.length - 1; s18_j >= 0; s18_j -= 1) s18_f = [ ".if", s1_ex(s18_pairs[s18_j][0], s18_env), s1_ex(s18_pairs[s18_j][1], s18_env), s18_f ];
            return s18_f;
        }
        return void 0;
    }), s7_AssignWithMod = function(s19_left, s19_right, s19_mod, s19_env, s19_locallyQ) {
        var s19_left, s19_right, s19_mod, s19_env, s19_locallyQ, s19_any, s19_callee, s19_paras, s19_items, s19_a, _s19_t0;
        return _s19_t0 = s19_left, _s19_t0 instanceof Array && 2 === _s19_t0.length && "local" === _s19_t0[0] ? (s19_a = _s19_t0[1], 
        s7_AssignWithMod(s19_a, s19_left, s19_right, s19_mod, s19_env, !0)) : _s19_t0 instanceof Array && 2 === _s19_t0.length && ".local" === _s19_t0[0] ? (s19_a = _s19_t0[1], 
        s7_AssignWithMod(s19_a, s19_left, s19_right, s19_mod, s19_env, !0)) : _s19_t0 instanceof Array && _s19_t0.length >= 1 && ".list" === _s19_t0[0] ? (s19_items = _s19_t0.slice(1), 
        s7_Assign(s19_left, [ s19_mod, s19_right ], s19_env, s19_locallyQ)) : _s19_t0 instanceof Array && _s19_t0.length >= 1 && ".hash" === _s19_t0[0] ? (s19_items = _s19_t0.slice(1), 
        s7_Assign(s19_left, [ s19_mod, s19_right ], s19_env, s19_locallyQ)) : _s19_t0 instanceof Array && _s19_t0.length >= 1 ? (s19_callee = _s19_t0[0], 
        s19_paras = _s19_t0.slice(1), s1_prim(s19_callee) ? [ ".set", s1_ex(s19_left, s19_env), s1_ex([ s19_mod, s19_right ], s19_env) ] : s1_atom(s19_callee) && s19_locallyQ ? [ ".set", s1_ex([ ".local", s19_callee ], s19_env), s1_ex([ s19_mod, [ ".lambda", [].concat(s19_paras), s19_right ] ], s19_env) ] : [ ".set", s1_ex(s19_callee, s19_env), s1_ex([ s19_mod, [ ".lambda", [].concat(s19_paras), s19_right ] ], s19_env) ]) : (s19_any = _s19_t0, 
        s7_Assign(s1_ex, s19_left, [ s19_mod, s19_right ], s19_env, s19_locallyQ));
    }, s7_Assign = function(s20_left, s20_right, s20_env, s20_locallyQ) {
        var s20_left, s20_right, s20_env, s20_locallyQ, s20_any, s20_callee, s20_paras, s20_items, s20_t, s20_assignments, s20_j, s20_a, s20_id, _s20_t0;
        if (_s20_t0 = s20_left, s20_id = _s20_t0, s1_atom(s20_id)) return s20_locallyQ ? [ ".set", s1_ex([ ".local", s20_id ], s20_env), s1_ex(s20_right, s20_env) ] : [ ".set", s1_ex(s20_left, s20_env), s1_ex(s20_right, s20_env) ];
        if (_s20_t0 instanceof Array && 2 === _s20_t0.length && "local" === _s20_t0[0]) return s20_a = _s20_t0[1], 
        s7_Assign(s20_a, s20_right, s20_env, !0);
        if (_s20_t0 instanceof Array && 2 === _s20_t0.length && ".local" === _s20_t0[0]) return s20_a = _s20_t0[1], 
        s7_Assign(s20_a, s20_right, s20_env, !0);
        if (_s20_t0 instanceof Array && _s20_t0.length >= 1 && ".list" === _s20_t0[0]) {
            for (s20_items = _s20_t0.slice(1), s20_t = s20_env.newt(), s20_assignments = [ ".begin", [ ".set", s20_t, s1_ex(s20_right, s20_env) ] ], 
            s20_j = 0; s20_j < s20_items.length; s20_j += 1) s20_assignments.push(s7_Assign(s20_items[s20_j], [ ".", s20_t, [ ".quote", s20_j ] ], s20_env, s20_locallyQ));
            return s20_assignments.push(s20_t), s20_assignments;
        }
        if (_s20_t0 instanceof Array && _s20_t0.length >= 1 && ".hash" === _s20_t0[0]) {
            for (s20_items = _s20_t0.slice(1), s20_t = s20_env.newt(), s20_assignments = [ ".begin", [ ".set", s20_t, s1_ex(s20_right, s20_env) ] ], 
            s20_j = 0; s20_j < s20_items.length; s20_j += 1) s20_assignments.push(s7_Assign(s20_items[s20_j][1], [ ".", s20_t, s20_items[s20_j][0] ], s20_env, s20_locallyQ));
            return s20_assignments.push(s20_t), s20_assignments;
        }
        if (_s20_t0 instanceof Array && _s20_t0.length >= 1) return s20_callee = _s20_t0[0], 
        s20_paras = _s20_t0.slice(1), s1_prim(s20_callee) ? [ ".set", s1_ex(s20_left, s20_env), s1_ex(s20_right, s20_env) ] : s1_atom(s20_callee) && s20_locallyQ ? [ ".set", s1_ex([ ".local", s20_callee ], s20_env), s1_ex([ ".lambda", [].concat(s20_paras), s20_right ], s20_env) ] : [ ".set", s1_ex(s20_callee, s20_env), s1_ex([ ".lambda", [].concat(s20_paras), s20_right ], s20_env) ];
        throw s20_any = _s20_t0, new s1_FormInvalidError(s20_left, "Invalid Assignment Left-hand Side");
    }, s7_externs.macros.put("define", function(s21_form, s21_env) {
        var s21_form, s21_env, s21_any, s21_op, s21_left, s21_right, s21_modifer, _s21_t0, _s21_t1, _s21_t4, _s21_t5;
        if (_s21_t0 = s21_form, _s21_t0 instanceof Array && 4 === _s21_t0.length) return s21_op = _s21_t0[0], 
        s21_modifer = _s21_t0[1], s21_left = _s21_t0[2], s21_right = _s21_t0[3], s7_AssignWithMod(s21_left, s21_right, s21_modifer, s21_env, !0);
        if (_s21_t0 instanceof Array && 3 === _s21_t0.length) return s21_op = _s21_t0[0], 
        s21_left = _s21_t0[1], s21_right = _s21_t0[2], s7_Assign(s21_left, s21_right, s21_env, !0);
        if (_s21_t1 = !1, _s21_t0 instanceof Array && 2 === _s21_t0.length ? (s21_op = _s21_t0[0], 
        s21_left = _s21_t0[1], _s21_t5 = _s21_t1 = s1_atom(s21_left) ? !0 : !1, _s21_t4 = _s21_t5) : _s21_t4 = void 0, 
        _s21_t1) return [ ".local", s21_left ];
        throw s21_any = _s21_t0, new s1_FormInvalidError(s21_any, "Invalid Assignment");
    }), s7_externs.macros.put("local", s7_externs.macros.get("define")), s7_externs.macros.put("set", function(s22_form, s22_env) {
        var s22_form, s22_env, s22_any, s22_op, s22_left, s22_right, _s22_t0;
        if (_s22_t0 = s22_form, _s22_t0 instanceof Array && 3 === _s22_t0.length) return s22_op = _s22_t0[0], 
        s22_left = _s22_t0[1], s22_right = _s22_t0[2], s7_Assign(s22_left, s22_right, s22_env, !1);
        throw s22_any = _s22_t0, new s1_FormInvalidError(s22_any, "Invalid Assignment");
    }), s7_externs.macros.put("inc", function(s23_form, s23_env) {
        var s23_form, s23_env, s23_op, s23_id, s23_shift, _s23_t0;
        return _s23_t0 = s23_form, _s23_t0 instanceof Array && 2 === _s23_t0.length ? (s23_op = _s23_t0[0], 
        s23_id = _s23_t0[1], s7_Assign(s23_id, [ "+", s23_id, [ ".quote", 1 ] ], s23_env, !1)) : _s23_t0 instanceof Array && 3 === _s23_t0.length ? (s23_op = _s23_t0[0], 
        s23_id = _s23_t0[1], s23_shift = _s23_t0[2], s7_Assign(s23_id, [ "+", s23_id, s23_shift ], s23_env, !1)) : _s23_t0 instanceof Array && 4 === _s23_t0.length && "by" === _s23_t0[2] ? (s23_op = _s23_t0[0], 
        s23_id = _s23_t0[1], s23_shift = _s23_t0[3], s7_Assign(s23_id, [ "+", s23_id, s23_shift ], s23_env, !1)) : void 0;
    }), s7_externs.macros.put("dec", function(s24_form, s24_env) {
        var s24_form, s24_env, s24_op, s24_id, s24_shift, _s24_t0;
        return _s24_t0 = s24_form, _s24_t0 instanceof Array && 2 === _s24_t0.length ? (s24_op = _s24_t0[0], 
        s24_id = _s24_t0[1], s7_Assign(s24_id, [ "-", s24_id, [ ".quote", 1 ] ], s24_env, !1)) : _s24_t0 instanceof Array && 3 === _s24_t0.length ? (s24_op = _s24_t0[0], 
        s24_id = _s24_t0[1], s24_shift = _s24_t0[2], s7_Assign(s24_id, [ "-", s24_id, s24_shift ], s24_env, !1)) : _s24_t0 instanceof Array && 4 === _s24_t0.length && "by" === _s24_t0[2] ? (s24_op = _s24_t0[0], 
        s24_id = _s24_t0[1], s24_shift = _s24_t0[3], s7_Assign(s24_id, [ "-", s24_id, s24_shift ], s24_env, !1)) : void 0;
    }), s7_externs.macros.put("for", function(s25_form, s25_env) {
        var s25_form, s25_env, s25_init, s25_test, s25_step, s25_body, _s25_t0;
        return _s25_t0 = s25_form, _s25_t0 instanceof Array && 5 === _s25_t0.length && "for" === _s25_t0[0] ? (s25_init = _s25_t0[1], 
        s25_test = _s25_t0[2], s25_step = _s25_t0[3], s25_body = _s25_t0[4], [ ".begin", s1_ex(s25_init, s25_env), [ ".while", s1_ex(s25_test, s25_env), [ ".begin", s1_ex(s25_body, s25_env), s1_ex(s25_step, s25_env) ] ] ]) : void 0;
    }), s7_externs.macros.put("foreach", function(s26_form, s26_env) {
        var s26_form, s26_env, s26_varid, s26_range, s26_body, s26_tR, s26_t, _s26_t0;
        return _s26_t0 = s26_form, _s26_t0 instanceof Array && 4 === _s26_t0.length && "foreach" === _s26_t0[0] ? (s26_varid = _s26_t0[1], 
        s26_range = _s26_t0[2], s26_body = _s26_t0[3], s26_tR = s26_env.newt(), s26_t = s26_env.newt(), 
        [ ".begin", [ ".set", s26_tR, s1_ex(s26_range, s26_env) ], [ ".while", [ "!", [ ".", [ ".set", s26_t, [ [ ".", s26_tR, [ ".quote", "next" ] ] ] ], [ ".quote", "done" ] ] ], [ ".begin", s7_Assign(s26_varid, [ ".", s26_t, [ ".quote", "value" ] ], s26_env, !1), s1_ex(s26_body, s26_env) ] ] ]) : void 0;
    }), s7_externs.macros.put("this", [ ".thisp" ]), s7_externs.macros.put("arguments", [ ".argsp" ]), 
    s7_externs.macros.put("nothing", [ ".unit" ]), s7_externs.macros.put("undefined", [ ".unit" ]), 
    s7_externs.macros.put("null", [ ".quote", null ]), s7_externs.macros.put("true", [ ".quote", !0 ]), 
    s7_externs.macros.put("false", [ ".quote", !1 ]), s7_boole = function(s27_x) {
        var s27_x;
        return !!s27_x;
    }, s7_externs.macros.put("match", function(s28_form, s28_env, s28_wrapper) {
        var s28_form, s28_env, s28_wrapper, s28_pairs, s28_t, s28_matchQ, s28_f, s28_j, s28_any, s28_pattern, s28_guard, s28_body, s28_pat, s28_cond, s28_tc, _s28_t0, _s28_t3, _s28_t4, _s28_t5, _s28_t6, _s28_t7, _s28_t8;
        for (s28_pairs = s28_form.slice(2), s28_t = s28_env.newt(), s28_wrapper = s28_wrapper || function(s29_x) {
            var s29_x;
            return s29_x;
        }, s28_matchQ = function(s30_pattern) {
            var s30_pattern, s30_callee, s30_subpatterns, s30_ms, s30_t, s30_final, s30_whatever, s30_x, s30_id, _s30_t0;
            return _s30_t0 = s30_pattern, s30_id = _s30_t0, s1_atom(s30_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(s48_x) {
                    var s48_x;
                    return [ ".set", s1_ex([ ".local", s30_pattern ], s28_env), s28_wrapper(s48_x) ];
                }
            } : _s30_t0 instanceof Array && 2 === _s30_t0.length && ".quote" === _s30_t0[0] ? (s30_x = _s30_t0[1], 
            {
                whether: function(s45_x) {
                    var s45_x;
                    return [ "===", s1_ex(s30_pattern, s28_env), s28_wrapper(s45_x) ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _s30_t0 instanceof Array && _s30_t0.length >= 1 && "." === _s30_t0[0] ? (s30_whatever = _s30_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(s44_x) {
                    var s44_x;
                    return [ ".set", s1_ex(s30_pattern, s28_env), s28_wrapper(s44_x) ];
                }
            }) : _s30_t0 instanceof Array && _s30_t0.length >= 1 && ".list" === _s30_t0[0] ? (s30_subpatterns = _s30_t0.slice(1), 
            s30_ms = s30_subpatterns.map(s28_matchQ), {
                whether: function(s39_x) {
                    var s39_x;
                    return [ "&&", [ ".is", s39_x, s7_externs.use("Array") ], [ "===", [ ".", s39_x, [ ".quote", "length" ] ], [ ".quote", s30_ms.length ] ] ].concat(s30_ms.map(function(s40_p, s40_j) {
                        var s40_p, s40_j;
                        return s40_p.whether([ ".", s39_x, [ ".quote", s40_j ] ]);
                    })).filter(s7_boole);
                },
                assign: function(s41_x) {
                    var s41_x;
                    return [ ".begin" ].concat(s30_ms.map(function(s42_p, s42_j) {
                        var s42_p, s42_j;
                        return s42_p.assign([ ".", s41_x, [ ".quote", s42_j ] ]);
                    }));
                }
            }) : _s30_t0 instanceof Array && _s30_t0.length >= 1 && ".conslist" === _s30_t0[0] ? (s30_subpatterns = _s30_t0.slice(1), 
            s30_ms = s30_pattern.slice(1, -1).map(s28_matchQ), s30_final = s28_matchQ(s30_pattern[s30_pattern.length - 1]), 
            {
                whether: function(s35_x) {
                    var s35_x;
                    return [ "&&", [ ".is", s35_x, s7_externs.use("Array") ], [ ">=", [ ".", s35_x, [ ".quote", "length" ] ], [ ".quote", s30_ms.length ] ] ].concat(s30_ms.map(function(s36_p, s36_j) {
                        var s36_p, s36_j;
                        return s36_p.whether([ ".", s35_x, [ ".quote", s36_j ] ]);
                    }).concat([ s30_final.whether([ [ ".", s35_x, [ ".quote", "slice" ] ], [ ".quote", s28_j ] ]) ])).filter(s7_boole);
                },
                assign: function(s37_x) {
                    var s37_x;
                    return [ ".begin" ].concat(s30_ms.map(function(s38_p, s38_j) {
                        var s38_p, s38_j;
                        return s38_p.assign([ ".", s37_x, [ ".quote", s38_j ] ]);
                    })).concat([ s30_final.assign([ [ ".", s37_x, [ ".quote", "slice" ] ], [ ".quote", s30_ms.length ] ]) ]);
                }
            }) : _s30_t0 instanceof Array && _s30_t0.length >= 1 ? (s30_callee = _s30_t0[0], 
            s30_subpatterns = _s30_t0.slice(1), s30_ms = s30_subpatterns.map(s28_matchQ), s30_t = s28_env.newt(), 
            {
                whether: function(s31_x) {
                    var s31_x;
                    return [ "&&", [ ".set", s30_t, [ [ ".", s1_ex(s30_callee, s28_env), [ ".quote", "unapply" ] ], s31_x, [ ".quote", s30_ms.length ] ] ] ].concat(s30_ms.map(function(s32_p, s32_j) {
                        var s32_p, s32_j;
                        return s32_p.whether([ ".", s30_t, [ ".quote", s32_j ] ]);
                    })).filter(s7_boole);
                },
                assign: function() {
                    return [ ".begin" ].concat(s30_ms.map(function(s34_p, s34_j) {
                        var s34_p, s34_j;
                        return s34_p.assign([ ".", s30_t, [ ".quote", s34_j ] ]);
                    }));
                }
            }) : void 0;
        }, s28_f = [ ".unit" ], s28_j = s28_pairs.length - 1; s28_j >= 0; s28_j -= 1) _s28_t0 = s28_pairs[s28_j], 
        _s28_t0 instanceof Array && 2 === _s28_t0.length ? (s28_pattern = _s28_t0[0], s28_body = _s28_t0[1], 
        s28_pat = s28_matchQ(s28_pattern), s28_cond = s28_pat.whether(s28_t), s28_cond ? _s28_t4 = [ ".if", s28_cond, [ ".begin", s28_pat.assign(s28_t), s1_ex(s28_body, s28_env) ], s28_f ] : (_s28_t5 = [ ".begin", s28_pat.assign(s28_t), s1_ex(s28_body, s28_env) ], 
        _s28_t4 = _s28_t5), _s28_t3 = _s28_t4) : (_s28_t0 instanceof Array && 3 === _s28_t0.length ? (s28_pattern = _s28_t0[0], 
        s28_guard = _s28_t0[1], s28_body = _s28_t0[2], s28_pat = s28_matchQ(s28_pattern), 
        s28_cond = s28_pat.whether(s28_t), s28_cond ? (s28_tc = s28_env.newt(), _s28_t7 = [ ".begin", [ ".set", s28_tc, [ ".quote", !1 ] ], [ ".if", s28_cond, [ ".begin", s28_pat.assign(s28_t), [ ".if", s1_ex(s28_guard, s28_env), [ ".set", s28_tc, [ ".quote", !0 ] ], [ ".set", s28_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", s28_tc, s1_ex(s28_body, s28_env), s28_f ] ]) : (_s28_t8 = [ ".begin", s28_pat.assign(s28_t), [ ".if", s1_ex(s28_guard, s28_env), s1_ex(s28_body, s28_env), s28_f ] ], 
        _s28_t7 = _s28_t8), _s28_t6 = _s28_t7) : (s28_any = _s28_t0, _s28_t6 = s28_f), _s28_t3 = _s28_t6), 
        s28_f = _s28_t3;
        return [ ".begin", [ ".set", s28_t, s1_ex(s28_form[1], s28_env) ], s28_f ];
    }), s7_externs.macros.put("regex", function(s49_form) {
        var s49_form, s49_args, s49_s, s49_flag, _s49_t0;
        return _s49_t0 = s49_form, _s49_t0 instanceof Array && 2 === _s49_t0.length && "regex" === _s49_t0[0] && _s49_t0[1] instanceof Array && 2 === _s49_t0[1].length && ".quote" === _s49_t0[1][0] ? (s49_s = _s49_t0[1][1], 
        [ ".quote", new RegExp(s49_s) ]) : _s49_t0 instanceof Array && 3 === _s49_t0.length && "regex" === _s49_t0[0] && _s49_t0[1] instanceof Array && 2 === _s49_t0[1].length && ".quote" === _s49_t0[1][0] && _s49_t0[2] instanceof Array && 2 === _s49_t0[2].length && ".quote" === _s49_t0[2][0] ? (s49_s = _s49_t0[1][1], 
        s49_flag = _s49_t0[2][1], [ ".quote", new RegExp(s49_s, s49_flag) ]) : _s49_t0 instanceof Array && _s49_t0.length >= 1 && "regex" === _s49_t0[0] ? (s49_args = _s49_t0.slice(1), 
        [ ".new", s7_externs.use("RegExp") ].concat(s49_args)) : void 0;
    }), s7_externs.macros.put("define-macro", function(s50_form, s50_env) {
        var s50_form, s50_env, s50_otherwise, s50_op, s50_name, s50_body, s50_ds, s50_macroG, s50_macroFn, _s50_t0, _s50_t1, _s50_t2, _s50_t3;
        return _s50_t0 = s50_form, _s50_t1 = !1, _s50_t0 instanceof Array && 3 === _s50_t0.length ? (s50_op = _s50_t0[0], 
        s50_name = _s50_t0[1], s50_body = _s50_t0[2], _s50_t3 = _s50_t1 = s1_atom(s50_name) ? !0 : !1, 
        _s50_t2 = _s50_t3) : _s50_t2 = void 0, _s50_t1 ? (s50_ds = new s1_Scope(s1_Create()), 
        s50_ds.declare("atom", !0), s50_ds.declare("prim", !0), s50_macroG = new Function(s50_ds.castName("atom"), s50_ds.castName("prim"), s1_escodegen.generate(s1_patrisika.generate([ ".return", s1_ex(s50_body, s50_ds) ], s50_ds, function(s51_form) {
            var s51_form;
            return [ ".return", s51_form ];
        }))), s50_macroFn = s50_macroG(s1_wrapForSyntacticClosure(s1_atom), s1_wrapForSyntacticClosure(s1_prim)), 
        s50_env.macros.put(s50_name, function(s52_c, s52_e) {
            var s52_c, s52_e, s52_result;
            return s52_result = s50_macroFn(s52_c, s52_e), s1_ex(s52_result, new s1_Scope(s50_env));
        }), [ ".unit" ]) : (s50_otherwise = _s50_t0, [ ".unit" ]);
    }), s7_externs.macros.put("macro-match", function(s53_form, s53_env) {
        var s53_form, s53_env, s53_otherwise, s53_c, s53_e, s53_patterns, s53_t, _s53_t0;
        return _s53_t0 = s53_form, _s53_t0 instanceof Array && _s53_t0.length >= 3 && "macro-match" === _s53_t0[0] ? (s53_c = _s53_t0[1], 
        s53_e = _s53_t0[2], s53_patterns = _s53_t0.slice(3), s53_t = s53_env.newt(), [ ".begin", [ ".set", s53_t, s53_e ], s7_externs.macros.get("match")([ "match", s53_c ].concat(s53_patterns), s53_env, function(s54_x) {
            var s54_x;
            return [ ".list", [ ".quote", ".syntactic-closure" ], s54_x, s53_t ];
        }) ]) : (s53_otherwise = _s53_t0, [ ".unit" ]);
    }), s7_externs;
}, exports.Create = s1_Create;