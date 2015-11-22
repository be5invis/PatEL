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
        var r11_form, r11_env, r11_otherwise, r11_car, r11_body, r11_parameters, _r11_t0, _r11_t1;
        return _r11_t0 = r11_form, _r11_t1 = !1, _r11_t0 instanceof Array && 3 === _r11_t0.length ? (r11_car = _r11_t0[0], 
        r11_parameters = _r11_t0[1], r11_body = _r11_t0[2], _r11_t1 = r0_atom(r11_parameters) ? !0 : !1) : void 0, 
        _r11_t1 ? r0_ex([ ".lambda", [ r11_parameters ], r11_body ], r11_env) : _r11_t0 instanceof Array && 3 === _r11_t0.length ? (r11_car = _r11_t0[0], 
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
        var r14_form, r14_env, r14_pairs, r14_args, r14_paras, r14_j, r14_arg, r14_param, r14_useless, _r14_t0, _r14_t1, _r14_t4;
        for (r14_pairs = r14_form.slice(1, -1), r14_args = [], r14_paras = [], r14_j = 0; r14_j < r14_pairs.length; r14_j += 1) _r14_t0 = r14_pairs[r14_j], 
        _r14_t0 instanceof Array && _r14_t0.length >= 2 ? (r14_arg = _r14_t0[0], r14_param = _r14_t0[1], 
        r14_useless = _r14_t0.slice(2), r14_args.push(r14_arg), r14_paras.push(r14_param)) : _r14_t0 instanceof Array && 2 === _r14_t0.length ? (r14_arg = _r14_t0[0], 
        r14_param = _r14_t0[1], r14_args.push(r14_arg), r14_paras.push(r14_param)) : (_r14_t1 = !1, 
        _r14_t0 instanceof Array && 1 === _r14_t0.length ? (r14_arg = _r14_t0[0], _r14_t4 = _r14_t1 = r0_atom(r14_arg) ? !0 : !1) : _r14_t4 = void 0, 
        _r14_t1 && (r14_args.push(r14_arg), r14_paras.push(r14_env.use(r14_arg))));
        return r0_ex([ ".beta", r14_args, r14_form[r14_form.length - 1] ].concat(r14_paras), r14_env);
    }), r6_externs.macros.put("object", function(r15_form, r15_env) {
        var r15_form, r15_env, r15_pairs;
        return r15_pairs = r15_form.slice(1).map(function(r16_pair) {
            var r16_pair, r16_method, r16_param, r16_value, r16_property, _r16_t0, _r16_t1, _r16_t2, _r16_t3, _r16_t4, _r16_t5, _r16_t8, _r16_t10, _r16_t12, _r16_t16, _r16_t18;
            return _r16_t0 = r16_pair, _r16_t5 = !1, _r16_t0 instanceof Array && 3 === _r16_t0.length && "=" === _r16_t0[0] ? (r16_property = _r16_t0[1], 
            r16_value = _r16_t0[2], _r16_t8 = _r16_t5 = r0_atom(r16_property) ? !0 : !1) : _r16_t8 = void 0, 
            _r16_t5 ? [ [ ".quote", r16_property ], r16_value ] : (_r16_t4 = !1, _r16_t0 instanceof Array && 2 === _r16_t0.length ? (r16_property = _r16_t0[0], 
            r16_value = _r16_t0[1], _r16_t10 = _r16_t4 = r0_atom(r16_property) ? !0 : !1) : _r16_t10 = void 0, 
            _r16_t4 ? [ [ ".quote", r16_property ], r16_value ] : (_r16_t3 = !1, _r16_t0 instanceof Array && 1 === _r16_t0.length ? (r16_property = _r16_t0[0], 
            _r16_t12 = _r16_t3 = r0_atom(r16_property) ? !0 : !1) : _r16_t12 = void 0, _r16_t3 ? [ [ ".quote", r16_property ], r16_value ] : _r16_t0 instanceof Array && 3 === _r16_t0.length && "=" === _r16_t0[0] && _r16_t0[1] instanceof Array && 2 === _r16_t0[1].length && ".quote" === _r16_t0[1][0] ? (r16_property = _r16_t0[1][1], 
            r16_value = _r16_t0[2], [ [ ".quote", r16_property ], r16_value ]) : _r16_t0 instanceof Array && 2 === _r16_t0.length && _r16_t0[0] instanceof Array && 2 === _r16_t0[0].length && ".quote" === _r16_t0[0][0] ? (r16_property = _r16_t0[0][1], 
            r16_value = _r16_t0[1], [ [ ".quote", r16_property ], r16_value ]) : (_r16_t2 = !1, 
            _r16_t0 instanceof Array && 3 === _r16_t0.length && "=" === _r16_t0[0] && _r16_t0[1] instanceof Array && _r16_t0[1].length >= 1 ? (r16_method = _r16_t0[1][0], 
            r16_param = _r16_t0[1].slice(1), r16_value = _r16_t0[2], _r16_t16 = _r16_t2 = r0_atom(r16_method) ? !0 : !1) : _r16_t16 = void 0, 
            _r16_t2 ? [ [ ".quote", r16_method ], [ ".lambda", r16_param, r16_value ] ] : (_r16_t1 = !1, 
            _r16_t0 instanceof Array && 2 === _r16_t0.length && _r16_t0[0] instanceof Array && _r16_t0[0].length >= 1 ? (r16_method = _r16_t0[0][0], 
            r16_param = _r16_t0[0].slice(1), r16_value = _r16_t0[1], _r16_t18 = _r16_t1 = r0_atom(r16_method) ? !0 : !1) : _r16_t18 = void 0, 
            _r16_t1 ? [ [ ".quote", r16_method ], [ ".lambda", r16_param, r16_value ] ] : void 0))));
        }), r0_ex([ ".hash" ].concat(r15_pairs.filter(function(r17_x) {
            var r17_x;
            return r17_x;
        })), r15_env);
    }), r6_externs.macros.put("piecewise", function(r18_form, r18_env) {
        var r18_form, r18_env, r18_pairs, r18_f, r18_j, r18_otherwise, r18_condition, r18_consequent, _r18_t0, _r18_t1;
        if (_r18_t0 = r18_form, _r18_t0 instanceof Array && _r18_t0.length >= 1 && "piecewise" === _r18_t0[0]) {
            for (r18_pairs = _r18_t0.slice(1), r18_f = [ ".unit" ], r18_j = r18_pairs.length - 1; r18_j >= 0; r18_j -= 1) {
                if (_r18_t1 = r18_pairs[r18_j], !(_r18_t1 instanceof Array && 2 === _r18_t1.length)) throw r18_otherwise = _r18_t1, 
                new r0_FormInvalidError(r18_otherwise, "Invalid Piecewise Segment");
                r18_condition = _r18_t1[0], r18_consequent = _r18_t1[1], r18_f = [ ".if", r0_ex(r18_condition, r18_env), r0_ex(r18_consequent, r18_env), r18_f ];
            }
            return r18_f;
        }
        return void 0;
    }), r6_AssignWithMod = function(r19_left, r19_right, r19_mod, r19_env, r19_locallyQ) {
        var r19_left, r19_right, r19_mod, r19_env, r19_locallyQ, r19_any, r19_callee, r19_paras, r19_whatever, r19_items, r19_t, r19_assignments, r19_j, r19_a, r19_id, _r19_t0;
        if (_r19_t0 = r19_left, r19_id = _r19_t0, r0_atom(r19_id)) return r19_locallyQ ? [ ".set", r0_ex([ ".local", r19_id ], r19_env), r0_ex([ r19_mod, r19_right ], r19_env) ] : [ ".set", r0_ex(r19_left, r19_env), r0_ex([ r19_mod, r19_right ], r19_env) ];
        if (_r19_t0 instanceof Array && 2 === _r19_t0.length && ".local" === _r19_t0[0]) return r19_a = _r19_t0[1], 
        r6_AssignWithMod(r19_a, r19_right, r19_mod, r19_env, !0);
        if (_r19_t0 instanceof Array && _r19_t0.length >= 1 && ".list" === _r19_t0[0]) {
            for (r19_items = _r19_t0.slice(1), r19_t = r19_env.newt(), r19_assignments = [ ".begin", [ ".set", r19_t, r0_ex([ r19_mod, r19_right ], r19_env) ] ], 
            r19_j = 0; r19_j < r19_items.length; r19_j += 1) r19_assignments.push(r6_Assign(r19_items[r19_j], [ ".", r19_t, [ ".quote", r19_j ] ], r19_env, r19_locallyQ));
            return r19_assignments.push(r19_t), r19_assignments;
        }
        if (_r19_t0 instanceof Array && _r19_t0.length >= 1 && ".hash" === _r19_t0[0]) {
            for (r19_items = _r19_t0.slice(1), r19_t = r19_env.newt(), r19_assignments = [ ".begin", [ ".set", r19_t, r0_ex([ r19_mod, r19_right ], r19_env) ] ], 
            r19_j = 0; r19_j < r19_items.length; r19_j += 1) r19_assignments.push(r6_Assign(r19_items[r19_j][1], [ ".", r19_t, r19_items[r19_j][0] ], r19_env, r19_locallyQ));
            return r19_assignments.push(r19_t), r19_assignments;
        }
        if (_r19_t0 instanceof Array && _r19_t0.length >= 1 && ".revcall" === _r19_t0[0]) return r19_whatever = _r19_t0.slice(1), 
        r6_AssignWithMod([].concat(r19_whatever), r19_right, r19_mod, r19_env, r19_locallyQ);
        if (_r19_t0 instanceof Array && _r19_t0.length >= 1) return r19_callee = _r19_t0[0], 
        r19_paras = _r19_t0.slice(1), r0_atom(r19_callee) && r19_env.macros.has(r19_callee) ? r6_AssignWithMod(r0_ex([ r19_callee ].concat(r19_paras), r19_env), r19_right, r19_mod, r19_env, r19_locallyQ) : r0_prim(r19_callee) ? [ ".set", r0_ex(r19_left, r19_env), r0_ex([ r19_mod, r19_right ], r19_env) ] : r0_atom(r19_callee) && r19_locallyQ ? [ ".set", r0_ex([ ".local", r19_callee ], r19_env), r0_ex([ r19_mod, [ ".lambda", [].concat(r19_paras), r19_right ] ], r19_env) ] : [ ".set", r0_ex(r19_callee, r19_env), r0_ex([ r19_mod, [ ".lambda", [].concat(r19_paras), r19_right ] ], r19_env) ];
        throw r19_any = _r19_t0, new r0_FormInvalidError(r19_left, "Invalid Assignment Left-hand Side");
    }, r6_Assign = function(r20_left, r20_right, r20_env, r20_locallyQ) {
        var r20_left, r20_right, r20_env, r20_locallyQ;
        return r6_AssignWithMod(r20_left, r20_right, ".unquote", r20_env, r20_locallyQ);
    }, r6_externs.macros.put("define", function(r21_form, r21_env) {
        var r21_form, r21_env, r21_any, r21_op, r21_left, r21_right, r21_modifer, _r21_t0, _r21_t1, _r21_t6;
        if (_r21_t0 = r21_form, _r21_t0 instanceof Array && 4 === _r21_t0.length) return r21_op = _r21_t0[0], 
        r21_modifer = _r21_t0[1], r21_left = _r21_t0[2], r21_right = _r21_t0[3], r6_AssignWithMod(r21_left, r21_right, r21_modifer, r21_env, !0);
        if (_r21_t0 instanceof Array && 3 === _r21_t0.length) return r21_op = _r21_t0[0], 
        r21_left = _r21_t0[1], r21_right = _r21_t0[2], r6_Assign(r21_left, r21_right, r21_env, !0);
        if (_r21_t1 = !1, _r21_t0 instanceof Array && 2 === _r21_t0.length ? (r21_op = _r21_t0[0], 
        r21_left = _r21_t0[1], _r21_t6 = _r21_t1 = r0_atom(r21_left) ? !0 : !1) : _r21_t6 = void 0, 
        _r21_t1) return [ ".local", r21_left ];
        throw r21_any = _r21_t0, new r0_FormInvalidError(r21_any, "Invalid Assignment");
    }), r6_externs.macros.put("local", r6_externs.macros.get("define")), r6_externs.macros.put("set", function(r22_form, r22_env) {
        var r22_form, r22_env, r22_any, r22_op, r22_left, r22_right, _r22_t0;
        if (_r22_t0 = r22_form, _r22_t0 instanceof Array && 3 === _r22_t0.length) return r22_op = _r22_t0[0], 
        r22_left = _r22_t0[1], r22_right = _r22_t0[2], r6_Assign(r22_left, r22_right, r22_env, !1);
        throw r22_any = _r22_t0, new r0_FormInvalidError(r22_any, "Invalid Assignment");
    }), r6_externs.macros.put("=", r6_externs.macros.get("set")), r6_externs.macros.put("inc", function(r23_form, r23_env) {
        var r23_form, r23_env, r23_op, r23_id, r23_shift, _r23_t0;
        return _r23_t0 = r23_form, _r23_t0 instanceof Array && 2 === _r23_t0.length ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r6_Assign(r23_id, [ "+", r23_id, [ ".quote", 1 ] ], r23_env, !1)) : _r23_t0 instanceof Array && 3 === _r23_t0.length ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r23_shift = _r23_t0[2], r6_Assign(r23_id, [ "+", r23_id, r23_shift ], r23_env, !1)) : _r23_t0 instanceof Array && 4 === _r23_t0.length && "by" === _r23_t0[2] ? (r23_op = _r23_t0[0], 
        r23_id = _r23_t0[1], r23_shift = _r23_t0[3], r6_Assign(r23_id, [ "+", r23_id, r23_shift ], r23_env, !1)) : void 0;
    }), r6_externs.macros.put("dec", function(r24_form, r24_env) {
        var r24_form, r24_env, r24_op, r24_id, r24_shift, _r24_t0;
        return _r24_t0 = r24_form, _r24_t0 instanceof Array && 2 === _r24_t0.length ? (r24_op = _r24_t0[0], 
        r24_id = _r24_t0[1], r6_Assign(r24_id, [ "-", r24_id, [ ".quote", 1 ] ], r24_env, !1)) : _r24_t0 instanceof Array && 3 === _r24_t0.length ? (r24_op = _r24_t0[0], 
        r24_id = _r24_t0[1], r24_shift = _r24_t0[2], r6_Assign(r24_id, [ "-", r24_id, r24_shift ], r24_env, !1)) : _r24_t0 instanceof Array && 4 === _r24_t0.length && "by" === _r24_t0[2] ? (r24_op = _r24_t0[0], 
        r24_id = _r24_t0[1], r24_shift = _r24_t0[3], r6_Assign(r24_id, [ "-", r24_id, r24_shift ], r24_env, !1)) : void 0;
    }), r6_externs.macros.put("for", function(r25_form, r25_env) {
        var r25_form, r25_env, r25_init, r25_test, r25_step, r25_body, _r25_t0;
        return _r25_t0 = r25_form, _r25_t0 instanceof Array && 5 === _r25_t0.length && "for" === _r25_t0[0] ? (r25_init = _r25_t0[1], 
        r25_test = _r25_t0[2], r25_step = _r25_t0[3], r25_body = _r25_t0[4], [ ".begin", r0_ex(r25_init, r25_env), [ ".while", r0_ex(r25_test, r25_env), [ ".begin", r0_ex(r25_body, r25_env), r0_ex(r25_step, r25_env) ] ] ]) : void 0;
    }), r6_externs.macros.put("this", [ ".thisp" ]), r6_externs.macros.put("arguments", [ ".argsp" ]), 
    r6_externs.macros.put("nothing", [ ".unit" ]), r6_externs.macros.put("undefined", [ ".unit" ]), 
    r6_externs.macros.put("null", [ ".quote", null ]), r6_externs.macros.put("true", [ ".quote", !0 ]), 
    r6_externs.macros.put("false", [ ".quote", !1 ]), r6_boole = function(r26_x) {
        var r26_x;
        return !!r26_x;
    }, r6_externs.macros.put("match", function(r27_form, r27_env, r27_wrapper) {
        var r27_form, r27_env, r27_wrapper, r27_pairs, r27_t, r27_matchQ, r27_f, r27_j, r27_any, r27_pattern, r27_guard, r27_body, r27_pat, r27_cond, r27_tc, _r27_t0;
        for (r27_pairs = r27_form.slice(2), r27_t = r27_env.newt(), r27_matchQ = function(r28_pattern) {
            var r28_pattern, r28_callee, r28_subpatterns, r28_ms, r28_t, r28_final, r28_whatever, r28_x, r28_id, _r28_t0;
            return _r28_t0 = r28_pattern, r28_id = _r28_t0, r0_atom(r28_id) ? {
                whether: function() {
                    return null;
                },
                assign: function(r46_x, r46_flag) {
                    var r46_x, r46_flag;
                    return [ ".set", r0_ex([ ".local", r28_pattern ], r27_env), r27_wrapper && !r46_flag ? [ r27_wrapper, r46_x ] : r46_x ];
                }
            } : _r28_t0 instanceof Array && 2 === _r28_t0.length && ".quote" === _r28_t0[0] ? (r28_x = _r28_t0[1], 
            {
                whether: function(r43_x) {
                    var r43_x;
                    return [ "===", r0_ex(r28_pattern, r27_env), r43_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && "." === _r28_t0[0] ? (r28_whatever = _r28_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(r42_x, r42_flag) {
                    var r42_x, r42_flag;
                    return [ ".set", r0_ex(r28_pattern, r27_env), r27_wrapper && !r42_flag ? [ r27_wrapper, r42_x ] : r42_x ];
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && ".list" === _r28_t0[0] ? (r28_subpatterns = _r28_t0.slice(1), 
            r28_ms = r28_subpatterns.map(r27_matchQ), {
                whether: function(r37_x) {
                    var r37_x;
                    return [ "&&", [ ".is", r37_x, r6_externs.use("Array") ], [ "===", [ ".", r37_x, [ ".quote", "length" ] ], [ ".quote", r28_ms.length ] ] ].concat(r28_ms.map(function(r38_p, r38_j) {
                        var r38_p, r38_j;
                        return r38_p.whether([ ".", r37_x, [ ".quote", r38_j ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r39_x, r39_flag) {
                    var r39_x, r39_flag;
                    return [ ".begin" ].concat(r28_ms.map(function(r40_p, r40_j) {
                        var r40_p, r40_j;
                        return r40_p.assign([ ".", r39_x, [ ".quote", r40_j ] ], r39_flag);
                    }));
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && ".conslist" === _r28_t0[0] ? (r28_subpatterns = _r28_t0.slice(1), 
            r28_ms = r28_pattern.slice(1, -1).map(r27_matchQ), r28_final = r27_matchQ(r28_pattern[r28_pattern.length - 1]), 
            {
                whether: function(r33_x) {
                    var r33_x;
                    return [ "&&", [ ".is", r33_x, r6_externs.use("Array") ], [ ">=", [ ".", r33_x, [ ".quote", "length" ] ], [ ".quote", r28_ms.length ] ] ].concat(r28_ms.map(function(r34_p, r34_j) {
                        var r34_p, r34_j;
                        return r34_p.whether([ ".", r33_x, [ ".quote", r34_j ] ]);
                    }).concat([ r28_final.whether([ [ ".", r33_x, [ ".quote", "slice" ] ], [ ".quote", r27_j ] ]) ])).filter(r6_boole);
                },
                assign: function(r35_x, r35_flag) {
                    var r35_x, r35_flag;
                    return [ ".begin" ].concat(r28_ms.map(function(r36_p, r36_j) {
                        var r36_p, r36_j;
                        return r36_p.assign([ ".", r35_x, [ ".quote", r36_j ] ]);
                    })).concat([ r28_final.assign(r27_wrapper && !r35_flag ? [ [ ".", [ [ ".", r35_x, [ ".quote", "slice" ] ], [ ".quote", r28_ms.length ] ], [ ".quote", "map" ] ], r27_wrapper ] : [ [ ".", r35_x, [ ".quote", "slice" ] ], [ ".quote", r28_ms.length ] ], !0) ]);
                }
            }) : _r28_t0 instanceof Array && _r28_t0.length >= 1 && ".quasiquote" === _r28_t0[0] ? (r28_subpatterns = _r28_t0.slice(1), 
            r27_matchQ(r0_deQuasiquote(r28_pattern[1], 0))) : _r28_t0 instanceof Array && _r28_t0.length >= 1 ? (r28_callee = _r28_t0[0], 
            r28_subpatterns = _r28_t0.slice(1), r28_ms = r28_subpatterns.map(r27_matchQ), r28_t = r27_env.newt(), 
            {
                whether: function(r29_x) {
                    var r29_x;
                    return [ "&&", [ ".set", r28_t, [ [ ".", r0_ex(r28_callee, r27_env), [ ".quote", "unapply" ] ], r29_x, [ ".quote", r28_ms.length ] ] ] ].concat(r28_ms.map(function(r30_p, r30_j) {
                        var r30_p, r30_j;
                        return r30_p.whether([ ".", r28_t, [ ".quote", r30_j ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r31_x, r31_flag) {
                    var r31_flag;
                    return [ ".begin" ].concat(r28_ms.map(function(r32_p, r32_j) {
                        var r32_p, r32_j;
                        return r32_p.assign([ ".", r28_t, [ ".quote", r32_j ] ], r31_flag);
                    }));
                }
            }) : void 0;
        }, r27_f = [ ".unit" ], r27_j = r27_pairs.length - 1; r27_j >= 0; r27_j -= 1) _r27_t0 = r27_pairs[r27_j], 
        r27_f = _r27_t0 instanceof Array && 2 === _r27_t0.length ? (r27_pattern = _r27_t0[0], 
        r27_body = _r27_t0[1], r27_pat = r27_matchQ(r27_pattern), r27_cond = r27_pat.whether(r27_t), 
        r27_cond ? [ ".if", r27_cond, [ ".begin", r27_pat.assign(r27_t), r0_ex(r27_body, r27_env) ], r27_f ] : [ ".begin", r27_pat.assign(r27_t), r0_ex(r27_body, r27_env) ]) : _r27_t0 instanceof Array && 3 === _r27_t0.length ? (r27_pattern = _r27_t0[0], 
        r27_guard = _r27_t0[1], r27_body = _r27_t0[2], r27_pat = r27_matchQ(r27_pattern), 
        r27_cond = r27_pat.whether(r27_t), r27_cond ? (r27_tc = r27_env.newt(), [ ".begin", [ ".set", r27_tc, [ ".quote", !1 ] ], [ ".if", r27_cond, [ ".begin", r27_pat.assign(r27_t), [ ".if", r0_ex(r27_guard, r27_env), [ ".set", r27_tc, [ ".quote", !0 ] ], [ ".set", r27_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", r27_tc, r0_ex(r27_body, r27_env), r27_f ] ]) : [ ".begin", r27_pat.assign(r27_t), [ ".if", r0_ex(r27_guard, r27_env), r0_ex(r27_body, r27_env), r27_f ] ]) : (r27_any = _r27_t0, 
        r27_f);
        return [ ".begin", [ ".set", r27_t, r0_ex(r27_form[1], r27_env) ], r27_f ];
    }), r6_externs.macros.put("regex", function(r47_form) {
        var r47_form, r47_args, r47_s, r47_flag, _r47_t0;
        return _r47_t0 = r47_form, _r47_t0 instanceof Array && 2 === _r47_t0.length && "regex" === _r47_t0[0] && _r47_t0[1] instanceof Array && 2 === _r47_t0[1].length && ".quote" === _r47_t0[1][0] ? (r47_s = _r47_t0[1][1], 
        [ ".quote", new RegExp(r47_s) ]) : _r47_t0 instanceof Array && 3 === _r47_t0.length && "regex" === _r47_t0[0] && _r47_t0[1] instanceof Array && 2 === _r47_t0[1].length && ".quote" === _r47_t0[1][0] && _r47_t0[2] instanceof Array && 2 === _r47_t0[2].length && ".quote" === _r47_t0[2][0] ? (r47_s = _r47_t0[1][1], 
        r47_flag = _r47_t0[2][1], [ ".quote", new RegExp(r47_s, r47_flag) ]) : _r47_t0 instanceof Array && _r47_t0.length >= 1 && "regex" === _r47_t0[0] ? (r47_args = _r47_t0.slice(1), 
        [ ".new", r6_externs.use("RegExp") ].concat(r47_args)) : void 0;
    }), r6_externs.macros.put("define-macro", function(r48_form, r48_env) {
        var r48_form, r48_env, r48_otherwise, r48_op, r48_name, r48_body, r48_ds, r48_macroG, r48_macroFn, r48_str, _r48_t0, _r48_t1, _r48_t5;
        return _r48_t0 = r48_form, _r48_t0 instanceof Array && 3 === _r48_t0.length && _r48_t0[1] instanceof Array && 2 === _r48_t0[1].length && ".quote" === _r48_t0[1][0] ? (r48_op = _r48_t0[0], 
        r48_str = _r48_t0[1][1], r48_body = _r48_t0[2], r0_ex([ r48_op, r48_str, r48_body ], r48_env)) : (_r48_t1 = !1, 
        _r48_t0 instanceof Array && 3 === _r48_t0.length ? (r48_op = _r48_t0[0], r48_name = _r48_t0[1], 
        r48_body = _r48_t0[2], _r48_t5 = _r48_t1 = r0_atom(r48_name) ? !0 : !1) : _r48_t5 = void 0, 
        _r48_t1 ? (r48_ds = new r0_Scope(r48_env), r48_ds.declare("ex", !0), r48_ds.declare("atom", !0), 
        r48_ds.declare("prim", !0), r48_ds.declare("formOf", !0), r48_ds.declare("scopeOf", !0), 
        r48_ds.declare("definingEnv", !0), r48_ds.declare("externEnv", !0), r48_ds.declare("require", !0), 
        r48_macroG = new Function(r48_ds.castName("ex"), r48_ds.castName("atom"), r48_ds.castName("prim"), r48_ds.castName("formOf"), r48_ds.castName("scopeOf"), r48_ds.castName("definingEnv"), r48_ds.castName("externEnv"), r48_ds.castName("require"), r0_escodegen.generate(r0_patrisika.generate([ ".return", r0_ex(r48_body, r48_ds) ], r48_ds, function(r49_form) {
            var r49_form;
            return [ ".return", r49_form ];
        }))), r48_macroFn = r48_macroG(r0_ex, r0_wrapForSyntacticClosure(r0_atom), r0_wrapForSyntacticClosure(r0_prim), function(r50_x) {
            var r50_x;
            return r50_x[1];
        }, function(r51_x) {
            var r51_x;
            return r51_x[2];
        }, r48_env, r6_externs, require), r48_env.macros.put(r48_name, function(r52_c, r52_e) {
            var r52_c, r52_e, r52_result, r52_s;
            return r52_result = r48_macroFn(r52_c, r52_e), r52_s = new r0_Scope(r48_env), r52_s.hanging = r52_e, 
            r52_s.semiparent = r52_e, r0_ex(r52_result, r52_s);
        }), [ ".unit" ]) : (r48_otherwise = _r48_t0, [ ".unit" ]));
    }), r6_externs.macros.put("macro-match", function(r53_form, r53_env) {
        var r53_form, r53_env, r53_otherwise, r53_c, r53_e, r53_patterns, r53_t, r53_tx, r53_tw, _r53_t0;
        return _r53_t0 = r53_form, _r53_t0 instanceof Array && _r53_t0.length >= 3 && "macro-match" === _r53_t0[0] ? (r53_c = _r53_t0[1], 
        r53_e = _r53_t0[2], r53_patterns = _r53_t0.slice(3), r53_t = r53_env.newt(), r53_tx = r53_env.newt(), 
        r53_tw = r53_env.newt(), [ ".begin", [ ".set", r53_t, r53_e ], [ ".set", r53_tw, [ ".lambda", [ r53_tx ], [ ".return", [ ".list", [ ".quote", ".syntactic-closure" ], r53_tx, r53_t ] ] ] ], r6_externs.macros.get("match")([ "match", r53_c ].concat(r53_patterns), r53_env, r53_tw) ]) : (r53_otherwise = _r53_t0, 
        [ ".unit" ]);
    }), r0_ex(require("./essential-macros.json"), r6_externs), r6_externs.pFamily = "r", 
    r6_externs;
}, exports.Create = r0_Create;