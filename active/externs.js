var r0_patrisika, r0_atom, r0_identifier, r0_prim, r0_Scope, r0_escodegen, r0_util, r0_ex, r0_deQuasiquote, r0_FormInvalidError, r0_wrapForSyntacticClosure, r0_Create, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4;

r0_patrisika = require("patrisika"), r0_atom = function(r1_x) {
    var r1_x;
    return "string" == typeof r1_x;
}, r0_identifier = function(r2_x) {
    var r2_x;
    return r0_atom(r2_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r2_x);
}, r0_prim = function(r3_x) {
    var r3_x;
    return r0_atom(r3_x) && !r0_identifier(r3_x);
}, r0_Scope = require("patrisika").Scope, r0_escodegen = require("escodegen"), r0_util = require("util"), 
r0_ex = require("./ex").ex, r0_deQuasiquote = require("./ex").deQuasiquote, r0_FormInvalidError = r0_patrisika.FormInvalidError, 
r0_wrapForSyntacticClosure = function(r4_fn) {
    var r4_fn;
    return function(r5_x) {
        var r5_x, r5_otherwise, r5_c, r5_e, _r5_t0;
        return _r5_t0 = r5_x, _r5_t0 instanceof Array && 3 === _r5_t0.length && ".syntactic-closure" === _r5_t0[0] ? (r5_c = _r5_t0[1], 
        r5_e = _r5_t0[2], r4_fn(r5_c)) : (r5_otherwise = _r5_t0, r4_fn(r5_x));
    };
}, r0_Create = function() {
    var r6_externs, r6_operatorRename, r6_reportInvalid, r6_AssignWithMod, r6_Assign, r6_boole;
    return r6_externs = r0_patrisika.DefaultExterns(), r6_externs.castName = function(r7_name) {
        var r7_name;
        return r7_name;
    }, r6_externs.declare("require"), r6_externs.declare("exports"), r6_externs.declare("process"), 
    r6_externs.declare("module"), r6_externs.declare("Error"), r6_operatorRename = function(r8_op) {
        var r8_op;
        return function(r9_form, r9_env) {
            var r9_form, r9_env;
            return r0_ex([ r8_op ].concat(r9_form.slice(1)), r9_env);
        };
    }, r6_reportInvalid = function(r10_form, r10_reason) {
        var r10_form, r10_reason;
        throw new r0_FormInvalidError(r10_form, r10_reason);
    }, r6_externs.macros.put("begin", r6_operatorRename(".begin")), r6_externs.macros.put("then", r6_operatorRename(".begin")), 
    r6_externs.macros.put("else", r6_operatorRename(".begin")), r6_externs.macros.put("while", r6_operatorRename(".while")), 
    r6_externs.macros.put("try", r6_operatorRename(".try")), r6_externs.macros.put("is", r6_operatorRename(".is")), 
    r6_externs.macros.put("<@", r6_operatorRename(".is")), r6_externs.macros.put("new", r6_operatorRename(".new")), 
    r6_externs.macros.put("this", r6_operatorRename(".thisp")), r6_externs.macros.put("arguments", r6_operatorRename(".argsp")), 
    r6_externs.macros.put("and", r6_operatorRename("&&")), r6_externs.macros.put("or", r6_operatorRename("||")), 
    r6_externs.macros.put("not", r6_operatorRename("!")), r6_externs.macros.put("return", r6_operatorRename(".return")), 
    r6_externs.macros.put("yield", r6_operatorRename(".yield")), r6_externs.macros.put("throw", r6_operatorRename(".throw")), 
    r6_externs.macros.put("list", r6_operatorRename(".list")), r6_externs.macros.put("typeof", r6_operatorRename(".typeof")), 
    r6_externs.macros.put("quasiquote", r6_operatorRename(".quasiquote")), r6_externs.macros.put("syntax", r6_operatorRename(".quasiquote")), 
    r6_externs.macros.put("lambda", function(r11_form, r11_env) {
        var r11_form, r11_env, r11_otherwise, r11_car, r11_body, r11_parameters, _r11_t0, _r11_t1, _r11_t4, _r11_t9;
        return _r11_t0 = r11_form, _r11_t1 = !1, _r11_t0 instanceof Array && 3 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r11_parameters = _r11_t0[1], r11_body = _r11_t0[2], _r11_t9 = _r11_t1 = r0_atom(r11_parameters) ? !0 : !1, 
        _r11_t4 = _r11_t9) : _r11_t4 = void 0, _r11_t1 ? r0_ex([ ".lambda", [ r11_parameters ], r11_body ], r11_env) : _r11_t0 instanceof Array && 3 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r11_parameters = _r11_t0[1], r11_body = _r11_t0[2], r0_ex([ ".lambda", r11_parameters, r11_body ], r11_env)) : _r11_t0 instanceof Array && 2 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r11_body = _r11_t0[1], r0_ex([ ".lambda", [], r11_body ], r11_env)) : _r11_t0 instanceof Array && 1 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r0_ex([ ".lambda", [], [ ".unit" ] ], r11_body)) : (r11_otherwise = _r11_t0, r6_reportInvalid(r11_otherwise, "Invalid Lambda Formation"));
    }), r6_externs.macros.put("function", r6_externs.macros.get("lambda")), r6_externs.macros.put("->", r6_externs.macros.get("lambda")), 
    r6_externs.macros.put("if", function(r12_form, r12_env) {
        var r12_form, r12_env, r12_otherwise, r12_test, r12_consequents, r12_alternates, r12_consequent, r12_alternate, _r12_t0;
        return _r12_t0 = r12_form, _r12_t0 instanceof Array && 3 === _r12_t0.length && "if" === _r12_t0[0] ? (r12_test = _r12_t0[1], 
        r12_consequent = _r12_t0[2], r0_ex([ ".if", r12_test, r12_consequent ], r12_env)) : _r12_t0 instanceof Array && 4 === _r12_t0.length && "if" === _r12_t0[0] ? (r12_test = _r12_t0[1], 
        r12_consequent = _r12_t0[2], r12_alternate = _r12_t0[3], r0_ex([ ".if", r12_test, r12_consequent, r12_alternate ], r12_env)) : _r12_t0 instanceof Array && 3 === _r12_t0.length && "if" === _r12_t0[0] && _r12_t0[2] instanceof Array && _r12_t0[2].length >= 1 && "then" === _r12_t0[2][0] ? (r12_test = _r12_t0[1], 
        r12_consequents = _r12_t0[2].slice(1), r0_ex([ ".if", r12_test, [ ".begin" ].concat(r12_consequents) ], r12_env)) : _r12_t0 instanceof Array && 4 === _r12_t0.length && "if" === _r12_t0[0] && _r12_t0[2] instanceof Array && _r12_t0[2].length >= 1 && "then" === _r12_t0[2][0] && _r12_t0[3] instanceof Array && _r12_t0[3].length >= 1 && "else" === _r12_t0[3][0] ? (r12_test = _r12_t0[1], 
        r12_consequents = _r12_t0[2].slice(1), r12_alternates = _r12_t0[3].slice(1), r0_ex([ ".if", r12_test, [ ".begin" ].concat(r12_consequents), [ ".begin" ].concat(r12_alternates) ], r12_env)) : (r12_otherwise = _r12_t0, 
        r6_reportInvalid(r12_otherwise, "Invalid Conditional Form"));
    }), r6_externs.macros.put(".conslist", function(r13_form, r13_env) {
        var r13_form, r13_env;
        return [ [ ".", r0_ex([ ".list" ].concat(r13_form.slice(1, -1)), r13_env), [ ".quote", "concat" ] ], r0_ex(r13_form[r13_form.length - 1], r13_env) ];
    }), r6_externs.macros.put("let", function(r14_form, r14_env) {
        var r14_form, r14_env, r14_pairs, r14_args, r14_paras, r14_j, r14_arg, r14_param, r14_useless, _r14_t0, _r14_t1, _r14_t4, _r14_t5;
        for (r14_pairs = r14_form.slice(1, -1), r14_args = [], r14_paras = [], r14_j = 0; r14_j < r14_pairs.length; r14_j += 1) _r14_t0 = r14_pairs[r14_j], 
        _r14_t0 instanceof Array && _r14_t0.length >= 2 ? (r14_arg = _r14_t0[0], r14_param = _r14_t0[1], 
        r14_useless = _r14_t0.slice(2), r14_args.push(r14_arg), r14_paras.push(r14_param)) : _r14_t0 instanceof Array && 2 === _r14_t0.length ? (r14_arg = _r14_t0[0], 
        r14_param = _r14_t0[1], r14_args.push(r14_arg), r14_paras.push(r14_param)) : (_r14_t1 = !1, 
        _r14_t0 instanceof Array && 1 === _r14_t0.length ? (r14_arg = _r14_t0[0], _r14_t5 = _r14_t1 = r0_atom(r14_arg) ? !0 : !1, 
        _r14_t4 = _r14_t5) : _r14_t4 = void 0, _r14_t1 && (r14_args.push(r14_arg), r14_paras.push(r14_env.use(r14_arg))));
        return r0_ex([ ".beta", r14_args, r14_form[r14_form.length - 1] ].concat(r14_paras), r14_env);
    }), r6_externs.macros.put("object", function(r15_form, r15_env) {
        var r15_form, r15_env, r15_pairs;
        return r15_pairs = r15_form.slice(1).map(function(r16_pair) {
            var r16_pair, r16_property, r16_value, r16_useless, _r16_t0, _r16_t1, _r16_t6, _r16_t8;
            return _r16_t0 = r16_pair, _r16_t0 instanceof Array && _r16_t0.length >= 2 ? (r16_property = _r16_t0[0], 
            r16_value = _r16_t0[1], r16_useless = _r16_t0.slice(2), [ r16_property, r0_ex(r16_value, r15_env) ]) : _r16_t0 instanceof Array && 2 === _r16_t0.length ? (r16_property = _r16_t0[0], 
            r16_value = _r16_t0[1], [ r16_property, r0_ex(r16_value, r15_env) ]) : (_r16_t1 = !1, 
            _r16_t0 instanceof Array && 1 === _r16_t0.length ? (r16_property = _r16_t0[0], _r16_t8 = _r16_t1 = r0_atom(r16_property) ? !0 : !1, 
            _r16_t6 = _r16_t8) : _r16_t6 = void 0, _r16_t1 ? [ r16_property, r15_env.use(r16_property) ] : void 0);
        }), [ ".hash" ].concat(r15_pairs);
    }), r6_externs.macros.put("piecewise", function(r17_form, r17_env) {
        var r17_form, r17_env, r17_pairs, r17_f, r17_j, _r17_t0;
        if (_r17_t0 = r17_form, _r17_t0 instanceof Array && _r17_t0.length >= 1 && "piecewise" === _r17_t0[0]) {
            for (r17_pairs = _r17_t0.slice(1), r17_f = [ ".unit" ], r17_j = r17_pairs.length - 1; r17_j >= 0; r17_j -= 1) r17_f = [ ".if", r0_ex(r17_pairs[r17_j][0], r17_env), r0_ex(r17_pairs[r17_j][1], r17_env), r17_f ];
            return r17_f;
        }
        return void 0;
    }), r6_AssignWithMod = function(r18_left, r18_right, r18_mod, r18_env, r18_locallyQ) {
        var r18_left, r18_right, r18_mod, r18_env, r18_locallyQ, r18_any, r18_callee, r18_paras, r18_whatever, r18_items, r18_t, r18_assignments, r18_j, r18_a, r18_id, _r18_t0;
        if (_r18_t0 = r18_left, r18_id = _r18_t0, r0_atom(r18_id)) return r18_locallyQ ? [ ".set", r0_ex([ ".local", r18_id ], r18_env), r0_ex([ r18_mod, r18_right ], r18_env) ] : [ ".set", r0_ex(r18_left, r18_env), r0_ex([ r18_mod, r18_right ], r18_env) ];
        if (_r18_t0 instanceof Array && 2 === _r18_t0.length && ".local" === _r18_t0[0]) return r18_a = _r18_t0[1], 
        r6_AssignWithMod(r18_a, r18_right, r18_mod, r18_env, !0);
        if (_r18_t0 instanceof Array && _r18_t0.length >= 1 && ".list" === _r18_t0[0]) {
            for (r18_items = _r18_t0.slice(1), r18_t = r18_env.newt(), r18_assignments = [ ".begin", [ ".set", r18_t, r0_ex([ r18_mod, r18_right ], r18_env) ] ], 
            r18_j = 0; r18_j < r18_items.length; r18_j += 1) r18_assignments.push(r6_Assign(r18_items[r18_j], [ ".", r18_t, [ ".quote", r18_j ] ], r18_env, r18_locallyQ));
            return r18_assignments.push(r18_t), r18_assignments;
        }
        if (_r18_t0 instanceof Array && _r18_t0.length >= 1 && ".hash" === _r18_t0[0]) {
            for (r18_items = _r18_t0.slice(1), r18_t = r18_env.newt(), r18_assignments = [ ".begin", [ ".set", r18_t, r0_ex([ r18_mod, r18_right ], r18_env) ] ], 
            r18_j = 0; r18_j < r18_items.length; r18_j += 1) r18_assignments.push(r6_Assign(r18_items[r18_j][1], [ ".", r18_t, r18_items[r18_j][0] ], r18_env, r18_locallyQ));
            return r18_assignments.push(r18_t), r18_assignments;
        }
        if (_r18_t0 instanceof Array && _r18_t0.length >= 1 && ".revcall" === _r18_t0[0]) return r18_whatever = _r18_t0.slice(1), 
        r6_AssignWithMod([].concat(r18_whatever), r18_right, r18_mod, r18_env, r18_locallyQ);
        if (_r18_t0 instanceof Array && _r18_t0.length >= 1) return r18_callee = _r18_t0[0], 
        r18_paras = _r18_t0.slice(1), r0_atom(r18_callee) && r18_env.macros.has(r18_callee) ? r6_AssignWithMod(r0_ex([ r18_callee ].concat(r18_paras), r18_env), r18_right, r18_mod, r18_env, r18_locallyQ) : r0_prim(r18_callee) ? [ ".set", r0_ex(r18_left, r18_env), r0_ex([ r18_mod, r18_right ], r18_env) ] : r0_atom(r18_callee) && r18_locallyQ ? [ ".set", r0_ex([ ".local", r18_callee ], r18_env), r0_ex([ r18_mod, [ ".lambda", [].concat(r18_paras), r18_right ] ], r18_env) ] : [ ".set", r0_ex(r18_callee, r18_env), r0_ex([ r18_mod, [ ".lambda", [].concat(r18_paras), r18_right ] ], r18_env) ];
        throw r18_any = _r18_t0, new r0_FormInvalidError(r18_left, "Invalid Assignment Left-hand Side");
    }, r6_Assign = function(r19_left, r19_right, r19_env, r19_locallyQ) {
        var r19_left, r19_right, r19_env, r19_locallyQ;
        return r6_AssignWithMod(r19_left, r19_right, ".unquote", r19_env, r19_locallyQ);
    }, r6_externs.macros.put("define", function(r20_form, r20_env) {
        var r20_form, r20_env, r20_any, r20_op, r20_left, r20_right, r20_modifer, _r20_t0, _r20_t1, _r20_t6, _r20_t8;
        if (_r20_t0 = r20_form, _r20_t0 instanceof Array && 4 === _r20_t0.length) return r20_op = _r20_t0[0], 
        r20_modifer = _r20_t0[1], r20_left = _r20_t0[2], r20_right = _r20_t0[3], r6_AssignWithMod(r20_left, r20_right, r20_modifer, r20_env, !0);
        if (_r20_t0 instanceof Array && 3 === _r20_t0.length) return r20_op = _r20_t0[0], 
        r20_left = _r20_t0[1], r20_right = _r20_t0[2], r6_Assign(r20_left, r20_right, r20_env, !0);
        if (_r20_t1 = !1, _r20_t0 instanceof Array && 2 === _r20_t0.length ? (r20_op = _r20_t0[0], 
        r20_left = _r20_t0[1], _r20_t8 = _r20_t1 = r0_atom(r20_left) ? !0 : !1, _r20_t6 = _r20_t8) : _r20_t6 = void 0, 
        _r20_t1) return [ ".local", r20_left ];
        throw r20_any = _r20_t0, new r0_FormInvalidError(r20_any, "Invalid Assignment");
    }), r6_externs.macros.put("local", r6_externs.macros.get("define")), r6_externs.macros.put("set", function(r21_form, r21_env) {
        var r21_form, r21_env, r21_any, r21_op, r21_left, r21_right, _r21_t0;
        if (_r21_t0 = r21_form, _r21_t0 instanceof Array && 3 === _r21_t0.length) return r21_op = _r21_t0[0], 
        r21_left = _r21_t0[1], r21_right = _r21_t0[2], r6_Assign(r21_left, r21_right, r21_env, !1);
        throw r21_any = _r21_t0, new r0_FormInvalidError(r21_any, "Invalid Assignment");
    }), r6_externs.macros.put("=", r6_externs.macros.get("set")), r6_externs.macros.put("inc", function(r22_form, r22_env) {
        var r22_form, r22_env, r22_op, r22_id, r22_shift, _r22_t0;
        return _r22_t0 = r22_form, _r22_t0 instanceof Array && 2 === _r22_t0.length ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r6_Assign(r22_id, [ "+", r22_id, [ ".quote", 1 ] ], r22_env, !1)) : _r22_t0 instanceof Array && 3 === _r22_t0.length ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r22_shift = _r22_t0[2], r6_Assign(r22_id, [ "+", r22_id, r22_shift ], r22_env, !1)) : _r22_t0 instanceof Array && 4 === _r22_t0.length && "by" === _r22_t0[2] ? (r22_op = _r22_t0[0], 
        r22_id = _r22_t0[1], r22_shift = _r22_t0[3], r6_Assign(r22_id, [ "+", r22_id, r22_shift ], r22_env, !1)) : void 0;
    }), r6_externs.macros.put("dec", function(r23_form, r23_env) {
        var r23_form, r23_env, r23_op, r23_id, r23_shift, _r23_t0;
        return _r23_t0 = r23_form, _r23_t0 instanceof Array && 2 === _r23_t0.length ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r6_Assign(r23_id, [ "-", r23_id, [ ".quote", 1 ] ], r23_env, !1)) : _r23_t0 instanceof Array && 3 === _r23_t0.length ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r23_shift = _r23_t0[2], r6_Assign(r23_id, [ "-", r23_id, r23_shift ], r23_env, !1)) : _r23_t0 instanceof Array && 4 === _r23_t0.length && "by" === _r23_t0[2] ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r23_shift = _r23_t0[3], r6_Assign(r23_id, [ "-", r23_id, r23_shift ], r23_env, !1)) : void 0;
    }), r6_externs.macros.put("for", function(r24_form, r24_env) {
        var r24_form, r24_env, r24_init, r24_test, r24_step, r24_body, _r24_t0;
        return _r24_t0 = r24_form, _r24_t0 instanceof Array && 5 === _r24_t0.length && "for" === _r24_t0[0] ? (r24_init = _r24_t0[1], 
        r24_test = _r24_t0[2], r24_step = _r24_t0[3], r24_body = _r24_t0[4], [ ".begin", r0_ex(r24_init, r24_env), [ ".while", r0_ex(r24_test, r24_env), [ ".begin", r0_ex(r24_body, r24_env), r0_ex(r24_step, r24_env) ] ] ]) : void 0;
    }), r6_externs.macros.put("this", [ ".thisp" ]), r6_externs.macros.put("arguments", [ ".argsp" ]), 
    r6_externs.macros.put("nothing", [ ".unit" ]), r6_externs.macros.put("undefined", [ ".unit" ]), 
    r6_externs.macros.put("null", [ ".quote", null ]), r6_externs.macros.put("true", [ ".quote", !0 ]), 
    r6_externs.macros.put("false", [ ".quote", !1 ]), r6_boole = function(r25_x) {
        var r25_x;
        return !!r25_x;
    }, r6_externs.macros.put("match", function(r26_form, r26_env, r26_wrapper) {
        var r26_form, r26_env, r26_wrapper, r26_pairs, r26_t, r26_matchQ, r26_f, r26_j, r26_any, r26_pattern, r26_guard, r26_body, r26_pat, r26_cond, r26_tc, _r26_t0, _r26_t4, _r26_t5, _r26_t6, _r26_t7, _r26_t8, _r26_t9;
        for (r26_pairs = r26_form.slice(2), r26_t = r26_env.newt(), r26_matchQ = function(r27_pattern) {
            var r27_pattern, r27_callee, r27_subpatterns, r27_ms, r27_t, r27_final, r27_whatever, r27_x, r27_id, _r27_t0;
            return _r27_t0 = r27_pattern, r27_id = _r27_t0, r0_atom(r27_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(r45_x, r45_flag) {
                    var r45_x, r45_flag, _r45_t2, _r45_t3, _r45_t4;
                    return _r45_t2 = ".set", _r45_t3 = r0_ex([ ".local", r27_pattern ], r26_env), _r45_t4 = r26_wrapper && !r45_flag ? [ r26_wrapper, r45_x ] : r45_x, 
                    [ _r45_t2, _r45_t3, _r45_t4 ];
                }
            } : _r27_t0 instanceof Array && 2 === _r27_t0.length && ".quote" === _r27_t0[0] ? (r27_x = _r27_t0[1], 
            {
                whether: function(r42_x) {
                    var r42_x;
                    return [ "===", r0_ex(r27_pattern, r26_env), r42_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && "." === _r27_t0[0] ? (r27_whatever = _r27_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(r41_x, r41_flag) {
                    var r41_x, r41_flag, _r41_t2, _r41_t3, _r41_t4;
                    return _r41_t2 = ".set", _r41_t3 = r0_ex(r27_pattern, r26_env), _r41_t4 = r26_wrapper && !r41_flag ? [ r26_wrapper, r41_x ] : r41_x, 
                    [ _r41_t2, _r41_t3, _r41_t4 ];
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && ".list" === _r27_t0[0] ? (r27_subpatterns = _r27_t0.slice(1), 
            r27_ms = r27_subpatterns.map(r26_matchQ), {
                whether: function(r36_x) {
                    var r36_x;
                    return [ "&&", [ ".is", r36_x, r6_externs.use("Array") ], [ "===", [ ".", r36_x, [ ".quote", "length" ] ], [ ".quote", r27_ms.length ] ] ].concat(r27_ms.map(function(r37_p, r37_j) {
                        var r37_p, r37_j;
                        return r37_p.whether([ ".", r36_x, [ ".quote", r37_j ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r38_x, r38_flag) {
                    var r38_x, r38_flag;
                    return [ ".begin" ].concat(r27_ms.map(function(r39_p, r39_j) {
                        var r39_p, r39_j;
                        return r39_p.assign([ ".", r38_x, [ ".quote", r39_j ] ], r38_flag);
                    }));
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && ".conslist" === _r27_t0[0] ? (r27_subpatterns = _r27_t0.slice(1), 
            r27_ms = r27_pattern.slice(1, -1).map(r26_matchQ), r27_final = r26_matchQ(r27_pattern[r27_pattern.length - 1]), 
            {
                whether: function(r32_x) {
                    var r32_x;
                    return [ "&&", [ ".is", r32_x, r6_externs.use("Array") ], [ ">=", [ ".", r32_x, [ ".quote", "length" ] ], [ ".quote", r27_ms.length ] ] ].concat(r27_ms.map(function(r33_p, r33_j) {
                        var r33_p, r33_j;
                        return r33_p.whether([ ".", r32_x, [ ".quote", r33_j ] ]);
                    }).concat([ r27_final.whether([ [ ".", r32_x, [ ".quote", "slice" ] ], [ ".quote", r26_j ] ]) ])).filter(r6_boole);
                },
                assign: function(r34_x, r34_flag) {
                    var r34_x, r34_flag, _r34_t3, _r34_t4, _r34_t5, _r34_t6, _r34_t7, _r34_t8, _r34_t9, _r34_t10;
                    return _r34_t3 = [ ".begin" ].concat(r27_ms.map(function(r35_p, r35_j) {
                        var r35_p, r35_j;
                        return r35_p.assign([ ".", r34_x, [ ".quote", r35_j ] ]);
                    })), _r34_t4 = _r34_t3.concat, _r34_t5 = r27_final, _r34_t6 = _r34_t5.assign, _r34_t7 = r26_wrapper && !r34_flag ? [ [ ".", [ [ ".", r34_x, [ ".quote", "slice" ] ], [ ".quote", r27_ms.length ] ], [ ".quote", "map" ] ], r26_wrapper ] : [ [ ".", r34_x, [ ".quote", "slice" ] ], [ ".quote", r27_ms.length ] ], 
                    _r34_t8 = !0, _r34_t9 = _r34_t6.call(_r34_t5, _r34_t7, _r34_t8), _r34_t10 = [ _r34_t9 ], 
                    _r34_t4.call(_r34_t3, _r34_t10);
                }
            }) : _r27_t0 instanceof Array && _r27_t0.length >= 1 && ".quasiquote" === _r27_t0[0] ? (r27_subpatterns = _r27_t0.slice(1), 
            r26_matchQ(r0_deQuasiquote(r27_pattern[1], 0))) : _r27_t0 instanceof Array && _r27_t0.length >= 1 ? (r27_callee = _r27_t0[0], 
            r27_subpatterns = _r27_t0.slice(1), r27_ms = r27_subpatterns.map(r26_matchQ), r27_t = r26_env.newt(), 
            {
                whether: function(r28_x) {
                    var r28_x;
                    return [ "&&", [ ".set", r27_t, [ [ ".", r0_ex(r27_callee, r26_env), [ ".quote", "unapply" ] ], r28_x, [ ".quote", r27_ms.length ] ] ] ].concat(r27_ms.map(function(r29_p, r29_j) {
                        var r29_p, r29_j;
                        return r29_p.whether([ ".", r27_t, [ ".quote", r29_j ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r30_x, r30_flag) {
                    var r30_flag;
                    return [ ".begin" ].concat(r27_ms.map(function(r31_p, r31_j) {
                        var r31_p, r31_j;
                        return r31_p.assign([ ".", r27_t, [ ".quote", r31_j ] ], r30_flag);
                    }));
                }
            }) : void 0;
        }, r26_f = [ ".unit" ], r26_j = r26_pairs.length - 1; r26_j >= 0; r26_j -= 1) _r26_t0 = r26_pairs[r26_j], 
        _r26_t0 instanceof Array && 2 === _r26_t0.length ? (r26_pattern = _r26_t0[0], r26_body = _r26_t0[1], 
        r26_pat = r26_matchQ(r26_pattern), r26_cond = r26_pat.whether(r26_t), r26_cond ? _r26_t6 = [ ".if", r26_cond, [ ".begin", r26_pat.assign(r26_t), r0_ex(r26_body, r26_env) ], r26_f ] : (_r26_t7 = [ ".begin", r26_pat.assign(r26_t), r0_ex(r26_body, r26_env) ], 
        _r26_t6 = _r26_t7), _r26_t4 = _r26_t6) : (_r26_t0 instanceof Array && 3 === _r26_t0.length ? (r26_pattern = _r26_t0[0], 
        r26_guard = _r26_t0[1], r26_body = _r26_t0[2], r26_pat = r26_matchQ(r26_pattern), 
        r26_cond = r26_pat.whether(r26_t), r26_cond ? (r26_tc = r26_env.newt(), _r26_t8 = [ ".begin", [ ".set", r26_tc, [ ".quote", !1 ] ], [ ".if", r26_cond, [ ".begin", r26_pat.assign(r26_t), [ ".if", r0_ex(r26_guard, r26_env), [ ".set", r26_tc, [ ".quote", !0 ] ], [ ".set", r26_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", r26_tc, r0_ex(r26_body, r26_env), r26_f ] ]) : (_r26_t9 = [ ".begin", r26_pat.assign(r26_t), [ ".if", r0_ex(r26_guard, r26_env), r0_ex(r26_body, r26_env), r26_f ] ], 
        _r26_t8 = _r26_t9), _r26_t5 = _r26_t8) : (r26_any = _r26_t0, _r26_t5 = r26_f), _r26_t4 = _r26_t5), 
        r26_f = _r26_t4;
        return [ ".begin", [ ".set", r26_t, r0_ex(r26_form[1], r26_env) ], r26_f ];
    }), r6_externs.macros.put("regex", function(r46_form) {
        var r46_form, r46_args, r46_s, r46_flag, _r46_t0;
        return _r46_t0 = r46_form, _r46_t0 instanceof Array && 2 === _r46_t0.length && "regex" === _r46_t0[0] && _r46_t0[1] instanceof Array && 2 === _r46_t0[1].length && ".quote" === _r46_t0[1][0] ? (r46_s = _r46_t0[1][1], 
        [ ".quote", new RegExp(r46_s) ]) : _r46_t0 instanceof Array && 3 === _r46_t0.length && "regex" === _r46_t0[0] && _r46_t0[1] instanceof Array && 2 === _r46_t0[1].length && ".quote" === _r46_t0[1][0] && _r46_t0[2] instanceof Array && 2 === _r46_t0[2].length && ".quote" === _r46_t0[2][0] ? (r46_s = _r46_t0[1][1], 
        r46_flag = _r46_t0[2][1], [ ".quote", new RegExp(r46_s, r46_flag) ]) : _r46_t0 instanceof Array && _r46_t0.length >= 1 && "regex" === _r46_t0[0] ? (r46_args = _r46_t0.slice(1), 
        [ ".new", r6_externs.use("RegExp") ].concat(r46_args)) : void 0;
    }), r6_externs.macros.put("define-macro", function(r47_form, r47_env) {
        var r47_form, r47_env, r47_otherwise, r47_op, r47_name, r47_body, r47_ds, r47_macroG, r47_macroFn, r47_str, _r47_t0, _r47_t1, _r47_t5, _r47_t7;
        return _r47_t0 = r47_form, _r47_t0 instanceof Array && 3 === _r47_t0.length && _r47_t0[1] instanceof Array && 2 === _r47_t0[1].length && ".quote" === _r47_t0[1][0] ? (r47_op = _r47_t0[0], 
        r47_str = _r47_t0[1][1], r47_body = _r47_t0[2], r0_ex([ r47_op, r47_str, r47_body ], r47_env)) : (_r47_t1 = !1, 
        _r47_t0 instanceof Array && 3 === _r47_t0.length ? (r47_op = _r47_t0[0], r47_name = _r47_t0[1], 
        r47_body = _r47_t0[2], _r47_t7 = _r47_t1 = r0_atom(r47_name) ? !0 : !1, _r47_t5 = _r47_t7) : _r47_t5 = void 0, 
        _r47_t1 ? (r47_ds = new r0_Scope(r47_env), r47_ds.declare("atom", !0), r47_ds.declare("prim", !0), 
        r47_ds.declare("formOf", !0), r47_ds.declare("scopeOf", !0), r47_ds.declare("definingEnv", !0), 
        r47_ds.declare("externEnv", !0), r47_ds.declare("require", !0), r47_macroG = new Function(r47_ds.castName("atom"), r47_ds.castName("prim"), r47_ds.castName("formOf"), r47_ds.castName("scopeOf"), r47_ds.castName("definingEnv"), r47_ds.castName("externEnv"), r47_ds.castName("require"), r0_escodegen.generate(r0_patrisika.generate([ ".return", r0_ex(r47_body, r47_ds) ], r47_ds, function(r48_form) {
            var r48_form;
            return [ ".return", r48_form ];
        }))), r47_macroFn = r47_macroG(r0_wrapForSyntacticClosure(r0_atom), r0_wrapForSyntacticClosure(r0_prim), function(r49_x) {
            var r49_x;
            return r49_x[1];
        }, function(r50_x) {
            var r50_x;
            return r50_x[2];
        }, r47_env, r6_externs, require), r47_env.macros.put(r47_name, function(r51_c, r51_e) {
            var r51_c, r51_e, r51_result, r51_s;
            return r51_result = r47_macroFn(r51_c, r51_e), r51_s = new r0_Scope(r47_env), r51_s.hanging = r51_e, 
            r51_s.semiparent = r51_e, r0_ex(r51_result, r51_s);
        }), [ ".unit" ]) : (r47_otherwise = _r47_t0, [ ".unit" ]));
    }), r6_externs.macros.put("macro-match", function(r52_form, r52_env) {
        var r52_form, r52_env, r52_otherwise, r52_c, r52_e, r52_patterns, r52_t, r52_tx, r52_tw, _r52_t0;
        return _r52_t0 = r52_form, _r52_t0 instanceof Array && _r52_t0.length >= 3 && "macro-match" === _r52_t0[0] ? (r52_c = _r52_t0[1], 
        r52_e = _r52_t0[2], r52_patterns = _r52_t0.slice(3), r52_t = r52_env.newt(), r52_tx = r52_env.newt(), 
        r52_tw = r52_env.newt(), [ ".begin", [ ".set", r52_t, r52_e ], [ ".set", r52_tw, [ ".lambda", [ r52_tx ], [ ".return", [ ".list", [ ".quote", ".syntactic-closure" ], r52_tx, r52_t ] ] ] ], r6_externs.macros.get("match")([ "match", r52_c ].concat(r52_patterns), r52_env, r52_tw) ]) : (r52_otherwise = _r52_t0, 
        [ ".unit" ]);
    }), r0_ex(require("./essential-macros.json"), r6_externs), r6_externs.pFamily = "r", 
    r6_externs;
}, exports.Create = r0_Create;