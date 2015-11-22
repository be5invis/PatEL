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
            var r16_pair, r16_method, r16_param, r16_value, r16_property, _r16_t0, _r16_t1, _r16_t2, _r16_t3, _r16_t4, _r16_t5, _r16_t8, _r16_t10, _r16_t12, _r16_t17, _r16_t19;
            return _r16_t0 = r16_pair, _r16_t5 = !1, _r16_t0 instanceof Array && 3 === _r16_t0.length && "=" === _r16_t0[0] ? (r16_property = _r16_t0[1], 
            r16_value = _r16_t0[2], _r16_t8 = _r16_t5 = r0_atom(r16_property) ? !0 : !1) : _r16_t8 = void 0, 
            _r16_t5 ? [ [ ".quote", r16_property ], r16_value ] : (_r16_t4 = !1, _r16_t0 instanceof Array && 2 === _r16_t0.length ? (r16_property = _r16_t0[0], 
            r16_value = _r16_t0[1], _r16_t10 = _r16_t4 = r0_atom(r16_property) ? !0 : !1) : _r16_t10 = void 0, 
            _r16_t4 ? [ [ ".quote", r16_property ], r16_value ] : (_r16_t3 = !1, _r16_t0 instanceof Array && 1 === _r16_t0.length ? (r16_property = _r16_t0[0], 
            _r16_t12 = _r16_t3 = r0_atom(r16_property) ? !0 : !1) : _r16_t12 = void 0, _r16_t3 ? [ [ ".quote", r16_property ], r16_property ] : (r16_property = _r16_t0, 
            r0_atom(r16_property) ? [ [ ".quote", r16_property ], r16_property ] : _r16_t0 instanceof Array && 3 === _r16_t0.length && "=" === _r16_t0[0] && _r16_t0[1] instanceof Array && 2 === _r16_t0[1].length && ".quote" === _r16_t0[1][0] ? (r16_property = _r16_t0[1][1], 
            r16_value = _r16_t0[2], [ [ ".quote", r16_property ], r16_value ]) : _r16_t0 instanceof Array && 2 === _r16_t0.length && _r16_t0[0] instanceof Array && 2 === _r16_t0[0].length && ".quote" === _r16_t0[0][0] ? (r16_property = _r16_t0[0][1], 
            r16_value = _r16_t0[1], [ [ ".quote", r16_property ], r16_value ]) : (_r16_t2 = !1, 
            _r16_t0 instanceof Array && 3 === _r16_t0.length && "=" === _r16_t0[0] && _r16_t0[1] instanceof Array && _r16_t0[1].length >= 1 ? (r16_method = _r16_t0[1][0], 
            r16_param = _r16_t0[1].slice(1), r16_value = _r16_t0[2], _r16_t17 = _r16_t2 = r0_atom(r16_method) ? !0 : !1) : _r16_t17 = void 0, 
            _r16_t2 ? [ [ ".quote", r16_method ], [ ".lambda", r16_param, r16_value ] ] : (_r16_t1 = !1, 
            _r16_t0 instanceof Array && 2 === _r16_t0.length && _r16_t0[0] instanceof Array && _r16_t0[0].length >= 1 ? (r16_method = _r16_t0[0][0], 
            r16_param = _r16_t0[0].slice(1), r16_value = _r16_t0[1], _r16_t19 = _r16_t1 = r0_atom(r16_method) ? !0 : !1) : _r16_t19 = void 0, 
            _r16_t1 ? [ [ ".quote", r16_method ], [ ".lambda", r16_param, r16_value ] ] : void 0)))));
        }), r0_ex([ ".xhash" ].concat(r15_pairs.filter(function(r17_x) {
            var r17_x;
            return r17_x;
        })), r15_env);
    }), r6_externs.macros.get("list").asPattern = function(r18_form) {
        var r18_form;
        return [ ".list" ].concat(r18_form.slice(1));
    }, r6_externs.macros.get("object").asPattern = function(r19_form) {
        var r19_form, r19_pairs;
        return r19_pairs = r19_form.slice(1).map(function(r20_pair) {
            var r20_pair, r20_otherwise, r20_property, r20_value, _r20_t0, _r20_t1, _r20_t2, _r20_t3, _r20_t6, _r20_t8, _r20_t10;
            if (_r20_t0 = r20_pair, _r20_t3 = !1, _r20_t0 instanceof Array && 3 === _r20_t0.length && "=" === _r20_t0[0] ? (r20_property = _r20_t0[1], 
            r20_value = _r20_t0[2], _r20_t6 = _r20_t3 = r0_atom(r20_property) ? !0 : !1) : _r20_t6 = void 0, 
            _r20_t3) return [ r20_property, r20_value ];
            if (_r20_t2 = !1, _r20_t0 instanceof Array && 2 === _r20_t0.length ? (r20_property = _r20_t0[0], 
            r20_value = _r20_t0[1], _r20_t8 = _r20_t2 = r0_atom(r20_property) ? !0 : !1) : _r20_t8 = void 0, 
            _r20_t2) return [ r20_property, r20_value ];
            if (_r20_t1 = !1, _r20_t0 instanceof Array && 1 === _r20_t0.length ? (r20_property = _r20_t0[0], 
            _r20_t10 = _r20_t1 = r0_atom(r20_property) ? !0 : !1) : _r20_t10 = void 0, _r20_t1) return [ r20_property, r20_property ];
            if (r20_property = _r20_t0, r0_atom(r20_property)) return [ r20_property, r20_property ];
            if (_r20_t0 instanceof Array && 3 === _r20_t0.length && "=" === _r20_t0[0] && _r20_t0[1] instanceof Array && 2 === _r20_t0[1].length && ".quote" === _r20_t0[1][0]) return r20_property = _r20_t0[1][1], 
            r20_value = _r20_t0[2], [ r20_property, r20_value ];
            if (_r20_t0 instanceof Array && 2 === _r20_t0.length && _r20_t0[0] instanceof Array && 2 === _r20_t0[0].length && ".quote" === _r20_t0[0][0]) return r20_property = _r20_t0[0][1], 
            r20_value = _r20_t0[1], [ r20_property, r20_value ];
            throw r20_otherwise = _r20_t0, new r0_FormInvalidError(r19_form, "Invalid Assignment Left-hand Side");
        }), [ ".hash" ].concat(r19_pairs);
    }, r6_externs.macros.put("piecewise", function(r21_form, r21_env) {
        var r21_form, r21_env, r21_pairs, r21_f, r21_j, r21_otherwise, r21_condition, r21_consequent, _r21_t0, _r21_t1;
        if (_r21_t0 = r21_form, _r21_t0 instanceof Array && _r21_t0.length >= 1 && "piecewise" === _r21_t0[0]) {
            for (r21_pairs = _r21_t0.slice(1), r21_f = [ ".unit" ], r21_j = r21_pairs.length - 1; r21_j >= 0; r21_j -= 1) {
                if (_r21_t1 = r21_pairs[r21_j], !(_r21_t1 instanceof Array && 2 === _r21_t1.length)) throw r21_otherwise = _r21_t1, 
                new r0_FormInvalidError(r21_otherwise, "Invalid Piecewise Segment");
                r21_condition = _r21_t1[0], r21_consequent = _r21_t1[1], r21_f = [ ".if", r0_ex(r21_condition, r21_env), r0_ex(r21_consequent, r21_env), r21_f ];
            }
            return r21_f;
        }
        return void 0;
    }), r6_AssignWithMod = function(r22_left, r22_right, r22_mod, r22_env, r22_locallyQ) {
        var r22_left, r22_right, r22_mod, r22_env, r22_locallyQ, r22_any, r22_callee, r22_paras, r22_whatever, r22_items, r22_t, r22_assignments, r22_j, r22_a, r22_id, _r22_t0, _r22_t1, _r22_t2, _r22_t6, _r22_t8;
        if (_r22_t0 = r22_left, r22_id = _r22_t0, r0_atom(r22_id)) return r22_locallyQ ? [ ".set", r0_ex([ ".local", r22_id ], r22_env), r0_ex([ r22_mod, r22_right ], r22_env) ] : [ ".set", r0_ex(r22_left, r22_env), r0_ex([ r22_mod, r22_right ], r22_env) ];
        if (_r22_t2 = !1, _r22_t0 instanceof Array && 2 === _r22_t0.length && ".id" === _r22_t0[0] ? (r22_id = _r22_t0[1], 
        _r22_t6 = _r22_t2 = r0_atom(r22_id) ? !0 : !1) : _r22_t6 = void 0, _r22_t2) return r22_locallyQ ? [ ".set", r0_ex([ ".local", r22_id ], r22_env), r0_ex([ r22_mod, r22_right ], r22_env) ] : [ ".set", r0_ex(r22_left, r22_env), r0_ex([ r22_mod, r22_right ], r22_env) ];
        if (_r22_t1 = !1, _r22_t0 instanceof Array && 3 === _r22_t0.length && ".id" === _r22_t0[0] ? (r22_id = _r22_t0[1], 
        r22_env = _r22_t0[2], _r22_t8 = _r22_t1 = r0_atom(r22_id) ? !0 : !1) : _r22_t8 = void 0, 
        _r22_t1) return r22_locallyQ ? [ ".set", r0_ex([ ".local", r22_id ], r22_env), r0_ex([ r22_mod, r22_right ], r22_env) ] : [ ".set", r0_ex(r22_left, r22_env), r0_ex([ r22_mod, r22_right ], r22_env) ];
        if (_r22_t0 instanceof Array && 2 === _r22_t0.length && ".local" === _r22_t0[0]) return r22_a = _r22_t0[1], 
        r6_AssignWithMod(r22_a, r22_right, r22_mod, r22_env, !0);
        if (_r22_t0 instanceof Array && _r22_t0.length >= 1 && ".list" === _r22_t0[0]) {
            for (r22_items = _r22_t0.slice(1), r22_t = r22_env.newt(), r22_assignments = [ ".begin", [ ".set", r22_t, r0_ex([ r22_mod, r22_right ], r22_env) ] ], 
            r22_j = 0; r22_j < r22_items.length; r22_j += 1) r22_assignments.push(r6_Assign(r22_items[r22_j], [ ".", r22_t, [ ".quote", r22_j ] ], r22_env, r22_locallyQ));
            return r22_assignments.push(r22_t), r22_assignments;
        }
        if (_r22_t0 instanceof Array && _r22_t0.length >= 1 && ".xhash" === _r22_t0[0]) {
            for (r22_items = _r22_t0.slice(1), r22_t = r22_env.newt(), r22_assignments = [ ".begin", [ ".set", r22_t, r0_ex([ r22_mod, r22_right ], r22_env) ] ], 
            r22_j = 0; r22_j < r22_items.length; r22_j += 1) r22_assignments.push(r6_Assign(r22_items[r22_j][1], [ ".", r22_t, r22_items[r22_j][0] ], r22_env, r22_locallyQ));
            return r22_assignments.push(r22_t), r22_assignments;
        }
        if (_r22_t0 instanceof Array && _r22_t0.length >= 1 && ".hash" === _r22_t0[0]) {
            for (r22_items = _r22_t0.slice(1), r22_t = r22_env.newt(), r22_assignments = [ ".begin", [ ".set", r22_t, r0_ex([ r22_mod, r22_right ], r22_env) ] ], 
            r22_j = 0; r22_j < r22_items.length; r22_j += 1) r22_assignments.push(r6_Assign(r22_items[r22_j][1], [ ".", r22_t, [ ".quote", r22_items[r22_j][0] ] ], r22_env, r22_locallyQ));
            return r22_assignments.push(r22_t), r22_assignments;
        }
        if (_r22_t0 instanceof Array && _r22_t0.length >= 1 && ".revcall" === _r22_t0[0]) return r22_whatever = _r22_t0.slice(1), 
        r6_AssignWithMod([].concat(r22_whatever), r22_right, r22_mod, r22_env, r22_locallyQ);
        if (_r22_t0 instanceof Array && _r22_t0.length >= 1) {
            if (r22_callee = _r22_t0[0], r22_paras = _r22_t0.slice(1), r0_atom(r22_callee) && r22_env.macros.has(r22_callee) && r22_env.macros.get(r22_callee).asPattern) return r6_AssignWithMod(r22_env.macros.get(r22_callee).asPattern(r22_left, r22_env), r22_right, r22_mod, r22_env, r22_locallyQ);
            if (r0_atom(r22_callee) && r22_env.macros.has(r22_callee)) throw new r0_FormInvalidError(r22_left, "Invalid Assignment Left-hand Side");
            return r0_prim(r22_callee) ? [ ".set", r0_ex(r22_left, r22_env), r0_ex([ r22_mod, r22_right ], r22_env) ] : r0_atom(r22_callee) && r22_locallyQ ? [ ".set", r0_ex([ ".local", r22_callee ], r22_env), r0_ex([ r22_mod, [ ".lambda", [].concat(r22_paras), r22_right ] ], r22_env) ] : [ ".set", r0_ex(r22_callee, r22_env), r0_ex([ r22_mod, [ ".lambda", [].concat(r22_paras), r22_right ] ], r22_env) ];
        }
        throw r22_any = _r22_t0, new r0_FormInvalidError(r22_left, "Invalid Assignment Left-hand Side");
    }, r6_Assign = function(r23_left, r23_right, r23_env, r23_locallyQ) {
        var r23_left, r23_right, r23_env, r23_locallyQ;
        return r6_AssignWithMod(r23_left, r23_right, ".unquote", r23_env, r23_locallyQ);
    }, r6_externs.macros.put("define", function(r24_form, r24_env) {
        var r24_form, r24_env, r24_any, r24_op, r24_left, r24_right, r24_modifer, _r24_t0, _r24_t1, _r24_t6;
        if (_r24_t0 = r24_form, _r24_t0 instanceof Array && 4 === _r24_t0.length) return r24_op = _r24_t0[0], 
        r24_modifer = _r24_t0[1], r24_left = _r24_t0[2], r24_right = _r24_t0[3], r6_AssignWithMod(r24_left, r24_right, r24_modifer, r24_env, !0);
        if (_r24_t0 instanceof Array && 3 === _r24_t0.length) return r24_op = _r24_t0[0], 
        r24_left = _r24_t0[1], r24_right = _r24_t0[2], r6_Assign(r24_left, r24_right, r24_env, !0);
        if (_r24_t1 = !1, _r24_t0 instanceof Array && 2 === _r24_t0.length ? (r24_op = _r24_t0[0], 
        r24_left = _r24_t0[1], _r24_t6 = _r24_t1 = r0_atom(r24_left) ? !0 : !1) : _r24_t6 = void 0, 
        _r24_t1) return [ ".local", r24_left ];
        throw r24_any = _r24_t0, new r0_FormInvalidError(r24_any, "Invalid Assignment");
    }), r6_externs.macros.put("local", r6_externs.macros.get("define")), r6_externs.macros.put("set", function(r25_form, r25_env) {
        var r25_form, r25_env, r25_any, r25_op, r25_left, r25_right, _r25_t0;
        if (_r25_t0 = r25_form, _r25_t0 instanceof Array && 3 === _r25_t0.length) return r25_op = _r25_t0[0], 
        r25_left = _r25_t0[1], r25_right = _r25_t0[2], r6_Assign(r25_left, r25_right, r25_env, !1);
        throw r25_any = _r25_t0, new r0_FormInvalidError(r25_any, "Invalid Assignment");
    }), r6_externs.macros.put("=", r6_externs.macros.get("set")), r6_externs.macros.put("inc", function(r26_form, r26_env) {
        var r26_form, r26_env, r26_op, r26_id, r26_shift, _r26_t0;
        return _r26_t0 = r26_form, _r26_t0 instanceof Array && 2 === _r26_t0.length ? (r26_op = _r26_t0[0], 
        r26_id = _r26_t0[1], r6_Assign(r26_id, [ "+", r26_id, [ ".quote", 1 ] ], r26_env, !1)) : _r26_t0 instanceof Array && 3 === _r26_t0.length ? (r26_op = _r26_t0[0], 
        r26_id = _r26_t0[1], r26_shift = _r26_t0[2], r6_Assign(r26_id, [ "+", r26_id, r26_shift ], r26_env, !1)) : _r26_t0 instanceof Array && 4 === _r26_t0.length && "by" === _r26_t0[2] ? (r26_op = _r26_t0[0], 
        r26_id = _r26_t0[1], r26_shift = _r26_t0[3], r6_Assign(r26_id, [ "+", r26_id, r26_shift ], r26_env, !1)) : void 0;
    }), r6_externs.macros.put("dec", function(r27_form, r27_env) {
        var r27_form, r27_env, r27_op, r27_id, r27_shift, _r27_t0;
        return _r27_t0 = r27_form, _r27_t0 instanceof Array && 2 === _r27_t0.length ? (r27_op = _r27_t0[0], 
        r27_id = _r27_t0[1], r6_Assign(r27_id, [ "-", r27_id, [ ".quote", 1 ] ], r27_env, !1)) : _r27_t0 instanceof Array && 3 === _r27_t0.length ? (r27_op = _r27_t0[0], 
        r27_id = _r27_t0[1], r27_shift = _r27_t0[2], r6_Assign(r27_id, [ "-", r27_id, r27_shift ], r27_env, !1)) : _r27_t0 instanceof Array && 4 === _r27_t0.length && "by" === _r27_t0[2] ? (r27_op = _r27_t0[0], 
        r27_id = _r27_t0[1], r27_shift = _r27_t0[3], r6_Assign(r27_id, [ "-", r27_id, r27_shift ], r27_env, !1)) : void 0;
    }), r6_externs.macros.put("for", function(r28_form, r28_env) {
        var r28_form, r28_env, r28_init, r28_test, r28_step, r28_body, _r28_t0;
        return _r28_t0 = r28_form, _r28_t0 instanceof Array && 5 === _r28_t0.length && "for" === _r28_t0[0] ? (r28_init = _r28_t0[1], 
        r28_test = _r28_t0[2], r28_step = _r28_t0[3], r28_body = _r28_t0[4], [ ".begin", r0_ex(r28_init, r28_env), [ ".while", r0_ex(r28_test, r28_env), [ ".begin", r0_ex(r28_body, r28_env), r0_ex(r28_step, r28_env) ] ] ]) : void 0;
    }), r6_externs.macros.put("this", [ ".thisp" ]), r6_externs.macros.put("arguments", [ ".argsp" ]), 
    r6_externs.macros.put("nothing", [ ".unit" ]), r6_externs.macros.put("undefined", [ ".unit" ]), 
    r6_externs.macros.put("null", [ ".quote", null ]), r6_externs.macros.put("true", [ ".quote", !0 ]), 
    r6_externs.macros.put("false", [ ".quote", !1 ]), r6_boole = function(r29_x) {
        var r29_x;
        return !!r29_x;
    }, r6_externs.macros.put("match", function(r30_form, r30_env, r30_wrapper) {
        var r30_form, r30_env, r30_wrapper, r30_pairs, r30_t, r30_matchQ, r30_f, r30_j, r30_any, r30_pattern, r30_guard, r30_body, r30_pat, r30_cond, r30_tc, _r30_t0;
        for (r30_pairs = r30_form.slice(2), r30_t = r30_env.newt(), r30_matchQ = function(r31_pattern) {
            var r31_pattern, r31_callee, r31_subpatterns, r31_ms, r31_t, r31_final, r31_whatever, r31_x, r31_id, r31_otherwise, r31_left, _r31_t0;
            if (_r31_t0 = r31_pattern, r31_id = _r31_t0, r0_atom(r31_id)) return {
                whether: function() {
                    return null;
                },
                assign: function(r61_x, r61_flag) {
                    var r61_x, r61_flag;
                    return [ ".set", r0_ex([ ".local", r31_pattern ], r30_env), r30_wrapper && !r61_flag ? [ r30_wrapper, r61_x ] : r61_x ];
                }
            };
            if (_r31_t0 instanceof Array && 2 === _r31_t0.length && ".quote" === _r31_t0[0]) return r31_x = _r31_t0[1], 
            {
                whether: function(r58_x) {
                    var r58_x;
                    return [ "===", r0_ex(r31_pattern, r30_env), r58_x ];
                },
                assign: function() {
                    return [ ".unit" ];
                }
            };
            if (_r31_t0 instanceof Array && _r31_t0.length >= 1 && "." === _r31_t0[0]) return r31_whatever = _r31_t0.slice(1), 
            {
                whether: function() {
                    return null;
                },
                assign: function(r57_x, r57_flag) {
                    var r57_x, r57_flag;
                    return [ ".set", r0_ex(r31_pattern, r30_env), r30_wrapper && !r57_flag ? [ r30_wrapper, r57_x ] : r57_x ];
                }
            };
            if (_r31_t0 instanceof Array && _r31_t0.length >= 1 && ".list" === _r31_t0[0]) return r31_subpatterns = _r31_t0.slice(1), 
            r31_ms = r31_subpatterns.map(r30_matchQ), {
                whether: function(r52_x) {
                    var r52_x;
                    return [ "&&", [ ".is", r52_x, r6_externs.use("Array") ], [ "===", [ ".", r52_x, [ ".quote", "length" ] ], [ ".quote", r31_ms.length ] ] ].concat(r31_ms.map(function(r53_p, r53_j) {
                        var r53_p, r53_j;
                        return r53_p.whether([ ".", r52_x, [ ".quote", r53_j ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r54_x, r54_flag) {
                    var r54_x, r54_flag;
                    return [ ".begin" ].concat(r31_ms.map(function(r55_p, r55_j) {
                        var r55_p, r55_j;
                        return r55_p.assign([ ".", r54_x, [ ".quote", r55_j ] ], r54_flag);
                    }));
                }
            };
            if (_r31_t0 instanceof Array && _r31_t0.length >= 1 && ".hash" === _r31_t0[0]) return r31_subpatterns = _r31_t0.slice(1), 
            r31_ms = r31_subpatterns.map(function(r47_pair) {
                var r47_pair;
                return [ r47_pair[0], r30_matchQ(r47_pair[1]) ];
            }), {
                whether: function(r48_x) {
                    var r48_x;
                    return [ "&&", r48_x ].concat(r31_ms.map(function(r49_p) {
                        var r49_p;
                        return r49_p[1].whether([ ".", r48_x, [ ".quote", r49_p[0] ] ]);
                    })).filter(r6_boole);
                },
                assign: function(r50_x, r50_flag) {
                    var r50_x, r50_flag;
                    return [ ".begin" ].concat(r31_ms.map(function(r51_p) {
                        var r51_p;
                        return r51_p[1].assign([ ".", r50_x, [ ".quote", r51_p[0] ] ], r50_flag);
                    }));
                }
            };
            if (_r31_t0 instanceof Array && _r31_t0.length >= 1 && ".xhash" === _r31_t0[0]) return r31_subpatterns = _r31_t0.slice(1), 
            r31_ms = r31_subpatterns.map(function(r40_pair) {
                var r40_pair;
                return [ r0_ex(r40_pair[0], r30_env), r30_matchQ(r40_pair[1]) ];
            }), {
                whether: function(r41_x) {
                    var r41_x;
                    return [ "&&", r41_x ].concat(r31_ms.map(function(r42_p) {
                        var r42_p, r42_otherwise, r42_key, _r42_t0, _r42_t4;
                        return _r42_t0 = r42_p[0], _r42_t0 instanceof Array && 2 === _r42_t0.length && ".quote" === _r42_t0[0] ? (r42_key = _r42_t0[1], 
                        r42_p[1].whether([ ".", r41_x, r42_p[0] ])) : (r42_otherwise = _r42_t0, _r42_t4 = r30_env.newt(), 
                        function(r43_t) {
                            var r43_t;
                            return [ ".begin", [ ".set", r43_t, [ ".", r41_x, r42_p[0] ] ], r42_p[1].whether(r43_t) ];
                        }(_r42_t4));
                    })).filter(r6_boole);
                },
                assign: function(r44_x, r44_flag) {
                    var r44_x, r44_flag;
                    return [ ".begin" ].concat(r31_ms.map(function(r45_p) {
                        var r45_p, r45_otherwise, r45_key, _r45_t0, _r45_t4;
                        return _r45_t0 = r45_p[0], _r45_t0 instanceof Array && 2 === _r45_t0.length && ".quote" === _r45_t0[0] ? (r45_key = _r45_t0[1], 
                        r45_p[1].assign([ ".", r44_x, r45_p[0] ], r44_flag)) : (r45_otherwise = _r45_t0, 
                        _r45_t4 = r30_env.newt(), function(r46_t) {
                            var r46_t;
                            return [ ".begin", [ ".set", r46_t, [ ".", r44_x, r45_p[0] ] ], r45_p[1].assign(r46_t, r44_flag) ];
                        }(_r45_t4));
                    }));
                }
            };
            if (_r31_t0 instanceof Array && _r31_t0.length >= 1 && ".conslist" === _r31_t0[0]) return r31_subpatterns = _r31_t0.slice(1), 
            r31_ms = r31_pattern.slice(1, -1).map(r30_matchQ), r31_final = r30_matchQ(r31_pattern[r31_pattern.length - 1]), 
            {
                whether: function(r36_x) {
                    var r36_x;
                    return [ "&&", [ ".is", r36_x, r6_externs.use("Array") ], [ ">=", [ ".", r36_x, [ ".quote", "length" ] ], [ ".quote", r31_ms.length ] ] ].concat(r31_ms.map(function(r37_p, r37_j) {
                        var r37_p, r37_j;
                        return r37_p.whether([ ".", r36_x, [ ".quote", r37_j ] ]);
                    }).concat([ r31_final.whether([ [ ".", r36_x, [ ".quote", "slice" ] ], [ ".quote", r30_j ] ]) ])).filter(r6_boole);
                },
                assign: function(r38_x, r38_flag) {
                    var r38_x, r38_flag;
                    return [ ".begin" ].concat(r31_ms.map(function(r39_p, r39_j) {
                        var r39_p, r39_j;
                        return r39_p.assign([ ".", r38_x, [ ".quote", r39_j ] ]);
                    })).concat([ r31_final.assign(r30_wrapper && !r38_flag ? [ [ ".", [ [ ".", r38_x, [ ".quote", "slice" ] ], [ ".quote", r31_ms.length ] ], [ ".quote", "map" ] ], r30_wrapper ] : [ [ ".", r38_x, [ ".quote", "slice" ] ], [ ".quote", r31_ms.length ] ], !0) ]);
                }
            };
            if (_r31_t0 instanceof Array && _r31_t0.length >= 1 && ".quasiquote" === _r31_t0[0]) return r31_subpatterns = _r31_t0.slice(1), 
            r30_matchQ(r0_deQuasiquote(r31_pattern[1], 0));
            if (_r31_t0 instanceof Array && _r31_t0.length >= 1) {
                if (r31_callee = _r31_t0[0], r31_subpatterns = _r31_t0.slice(1), r0_atom(r31_callee) && r30_env.macros.has(r31_callee) && r30_env.macros.get(r31_callee).asPattern) return r30_matchQ(r30_env.macros.get(r31_callee).asPattern(r31_pattern, r30_env));
                if (r0_atom(r31_callee) && r30_env.macros.has(r31_callee)) throw new r0_FormInvalidError(r31_left, "Invalid Pattern");
                return r31_otherwise ? (r31_ms = r31_subpatterns.map(r30_matchQ), r31_t = r30_env.newt(), 
                {
                    whether: function(r32_x) {
                        var r32_x;
                        return [ "&&", [ ".set", r31_t, [ [ ".", r0_ex(r31_callee, r30_env), [ ".quote", "unapply" ] ], r32_x, [ ".quote", r31_ms.length ] ] ] ].concat(r31_ms.map(function(r33_p, r33_j) {
                            var r33_p, r33_j;
                            return r33_p.whether([ ".", r31_t, [ ".quote", r33_j ] ]);
                        })).filter(r6_boole);
                    },
                    assign: function(r34_x, r34_flag) {
                        var r34_flag;
                        return [ ".begin" ].concat(r31_ms.map(function(r35_p, r35_j) {
                            var r35_p, r35_j;
                            return r35_p.assign([ ".", r31_t, [ ".quote", r35_j ] ], r34_flag);
                        }));
                    }
                }) : void 0;
            }
            return void 0;
        }, r30_f = [ ".unit" ], r30_j = r30_pairs.length - 1; r30_j >= 0; r30_j -= 1) _r30_t0 = r30_pairs[r30_j], 
        r30_f = _r30_t0 instanceof Array && 2 === _r30_t0.length ? (r30_pattern = _r30_t0[0], 
        r30_body = _r30_t0[1], r30_pat = r30_matchQ(r30_pattern), r30_cond = r30_pat.whether(r30_t), 
        r30_cond ? [ ".if", r30_cond, [ ".begin", r30_pat.assign(r30_t), r0_ex(r30_body, r30_env) ], r30_f ] : [ ".begin", r30_pat.assign(r30_t), r0_ex(r30_body, r30_env) ]) : _r30_t0 instanceof Array && 3 === _r30_t0.length ? (r30_pattern = _r30_t0[0], 
        r30_guard = _r30_t0[1], r30_body = _r30_t0[2], r30_pat = r30_matchQ(r30_pattern), 
        r30_cond = r30_pat.whether(r30_t), r30_cond ? (r30_tc = r30_env.newt(), [ ".begin", [ ".set", r30_tc, [ ".quote", !1 ] ], [ ".if", r30_cond, [ ".begin", r30_pat.assign(r30_t), [ ".if", r0_ex(r30_guard, r30_env), [ ".set", r30_tc, [ ".quote", !0 ] ], [ ".set", r30_tc, [ ".quote", !1 ] ] ] ] ], [ ".if", r30_tc, r0_ex(r30_body, r30_env), r30_f ] ]) : [ ".begin", r30_pat.assign(r30_t), [ ".if", r0_ex(r30_guard, r30_env), r0_ex(r30_body, r30_env), r30_f ] ]) : (r30_any = _r30_t0, 
        r30_f);
        return [ ".begin", [ ".set", r30_t, r0_ex(r30_form[1], r30_env) ], r30_f ];
    }), r6_externs.macros.put("regex", function(r62_form) {
        var r62_form, r62_args, r62_s, r62_flag, _r62_t0;
        return _r62_t0 = r62_form, _r62_t0 instanceof Array && 2 === _r62_t0.length && "regex" === _r62_t0[0] && _r62_t0[1] instanceof Array && 2 === _r62_t0[1].length && ".quote" === _r62_t0[1][0] ? (r62_s = _r62_t0[1][1], 
        [ ".quote", new RegExp(r62_s) ]) : _r62_t0 instanceof Array && 3 === _r62_t0.length && "regex" === _r62_t0[0] && _r62_t0[1] instanceof Array && 2 === _r62_t0[1].length && ".quote" === _r62_t0[1][0] && _r62_t0[2] instanceof Array && 2 === _r62_t0[2].length && ".quote" === _r62_t0[2][0] ? (r62_s = _r62_t0[1][1], 
        r62_flag = _r62_t0[2][1], [ ".quote", new RegExp(r62_s, r62_flag) ]) : _r62_t0 instanceof Array && _r62_t0.length >= 1 && "regex" === _r62_t0[0] ? (r62_args = _r62_t0.slice(1), 
        [ ".new", r6_externs.use("RegExp") ].concat(r62_args)) : void 0;
    }), r6_externs.macros.put("define-macro", function(r63_form, r63_env) {
        var r63_form, r63_env, r63_otherwise, r63_op, r63_name, r63_body, r63_ds, r63_macroG, r63_macroFn, r63_str, _r63_t0, _r63_t1, _r63_t5;
        return _r63_t0 = r63_form, _r63_t0 instanceof Array && 3 === _r63_t0.length && _r63_t0[1] instanceof Array && 2 === _r63_t0[1].length && ".quote" === _r63_t0[1][0] ? (r63_op = _r63_t0[0], 
        r63_str = _r63_t0[1][1], r63_body = _r63_t0[2], r0_ex([ r63_op, r63_str, r63_body ], r63_env)) : (_r63_t1 = !1, 
        _r63_t0 instanceof Array && 3 === _r63_t0.length ? (r63_op = _r63_t0[0], r63_name = _r63_t0[1], 
        r63_body = _r63_t0[2], _r63_t5 = _r63_t1 = r0_atom(r63_name) ? !0 : !1) : _r63_t5 = void 0, 
        _r63_t1 ? (r63_ds = new r0_Scope(r63_env), r63_ds.declare("ex", !0), r63_ds.declare("atom", !0), 
        r63_ds.declare("prim", !0), r63_ds.declare("formOf", !0), r63_ds.declare("scopeOf", !0), 
        r63_ds.declare("definingEnv", !0), r63_ds.declare("externEnv", !0), r63_ds.declare("require", !0), 
        r63_macroG = new Function(r63_ds.castName("ex"), r63_ds.castName("atom"), r63_ds.castName("prim"), r63_ds.castName("formOf"), r63_ds.castName("scopeOf"), r63_ds.castName("definingEnv"), r63_ds.castName("externEnv"), r63_ds.castName("require"), r0_escodegen.generate(r0_patrisika.generate([ ".return", r0_ex(r63_body, r63_ds) ], r63_ds, function(r64_form) {
            var r64_form;
            return [ ".return", r64_form ];
        }))), r63_macroFn = r63_macroG(r0_ex, r0_wrapForSyntacticClosure(r0_atom), r0_wrapForSyntacticClosure(r0_prim), function(r65_x) {
            var r65_x;
            return r65_x[1];
        }, function(r66_x) {
            var r66_x;
            return r66_x[2];
        }, r63_env, r6_externs, require), r63_env.macros.put(r63_name, function(r67_c, r67_e) {
            var r67_c, r67_e, r67_result, r67_s;
            return r67_result = r63_macroFn(r67_c, r67_e), r67_s = new r0_Scope(r63_env), r67_s.hanging = r67_e, 
            r67_s.semiparent = r67_e, r0_ex(r67_result, r67_s);
        }), [ ".unit" ]) : (r63_otherwise = _r63_t0, [ ".unit" ]));
    }), r6_externs.macros.put("macro-match", function(r68_form, r68_env) {
        var r68_form, r68_env, r68_otherwise, r68_c, r68_e, r68_patterns, r68_t, r68_tx, r68_tw, _r68_t0;
        return _r68_t0 = r68_form, _r68_t0 instanceof Array && _r68_t0.length >= 3 && "macro-match" === _r68_t0[0] ? (r68_c = _r68_t0[1], 
        r68_e = _r68_t0[2], r68_patterns = _r68_t0.slice(3), r68_t = r68_env.newt(), r68_tx = r68_env.newt(), 
        r68_tw = r68_env.newt(), [ ".begin", [ ".set", r68_t, r68_e ], [ ".set", r68_tw, [ ".lambda", [ r68_tx ], [ ".return", [ ".list", [ ".quote", ".syntactic-closure" ], r68_tx, r68_t ] ] ] ], r6_externs.macros.get("match")([ "match", r68_c ].concat(r68_patterns), r68_env, r68_tw) ]) : (r68_otherwise = _r68_t0, 
        [ ".unit" ]);
    }), r0_ex(require("./essential-macros.json"), r6_externs), r6_externs.pFamily = "r", 
    r6_externs;
}, exports.Create = r0_Create;