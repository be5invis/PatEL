var r0_patrisika, r0_atom, r0_identifier, r0_prim, r0_Scope, r0_escodegen, r0_util, r0_ex, r0_deQuasiquote, r0_FormInvalidError, r0_wrapForSyntacticClosure, r0_Create, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4;
r0_patrisika = require('patrisika');
r0_atom = function _r0_t0(r1_x) {
    var r1_x, _r1_t0, _r1_t1;
    return typeof r1_x === 'string';
};
r0_identifier = function _r0_t1(r2_x) {
    var r2_x, _r2_t0, _r2_t1;
    return r0_atom(r2_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r2_x);
};
r0_prim = function _r0_t2(r3_x) {
    var r3_x, _r3_t0, _r3_t1;
    return r0_atom(r3_x) && !r0_identifier(r3_x);
};
r0_Scope = require('patrisika').Scope;
r0_escodegen = require('escodegen');
r0_util = require('util');
r0_ex = require('./ex').ex;
r0_deQuasiquote = require('./ex').deQuasiquote;
r0_FormInvalidError = r0_patrisika.FormInvalidError;
r0_wrapForSyntacticClosure = function _r0_t3(r4_fn) {
    var r4_fn, _r4_t0, _r4_t1, _r4_t2;
    return function _r4_t2(r5_x) {
        var r5_x, r5_otherwise, r5_c, r5_e, _r5_t0, _r5_t1, _r5_t2;
        return _r5_t0 = r5_x, _r5_t0 instanceof Array && _r5_t0.length === 3 && '.syntactic-closure' === _r5_t0[0] ? (r5_c = _r5_t0[1], r5_e = _r5_t0[2], r4_fn(r5_c)) : (r5_otherwise = _r5_t0, r4_fn(r5_x));
    };
};
r0_Create = function _r0_t4() {
    var r6_externs, r6_operatorRename, r6_reportInvalid, r6_AssignWithMod, r6_Assign, r6_toPattern, r6_boole, _r6_t0, _r6_t1, _r6_t2, _r6_t3, _r6_t4, _r6_t5, _r6_t6, _r6_t7, _r6_t8, _r6_t9, _r6_t10, _r6_t11, _r6_t12, _r6_t13, _r6_t14, _r6_t15, _r6_t16, _r6_t17, _r6_t18, _r6_t19, _r6_t20, _r6_t21, _r6_t22, _r6_t23, _r6_t24, _r6_t25, _r6_t26, _r6_t27, _r6_t28, _r6_t29, _r6_t30, _r6_t31;
    r6_externs = r0_patrisika.DefaultExterns();
    r6_externs.castName = function _r6_t2(r7_name) {
        var r7_name, _r7_t0, _r7_t1;
        return r7_name;
    };
    r6_externs.declare('require');
    r6_externs.declare('exports');
    r6_externs.declare('process');
    r6_externs.declare('module');
    r6_externs.declare('Error');
    r6_operatorRename = function _r6_t3(r8_op) {
        var r8_op, _r8_t0, _r8_t1, _r8_t2;
        return function _r8_t2(r9_form, r9_env) {
            var r9_form, r9_env, _r9_t0, _r9_t1;
            return r0_ex([r8_op].concat(r9_form.slice(1)), r9_env);
        };
    };
    r6_reportInvalid = function _r6_t4(r10_form, r10_reason) {
        var r10_form, r10_reason, _r10_t0, _r10_t1;
        throw new r0_FormInvalidError(r10_form, r10_reason);
    };
    r6_externs.macros.put('begin', r6_operatorRename('.begin'));
    r6_externs.macros.put('then', r6_operatorRename('.begin'));
    r6_externs.macros.put('else', r6_operatorRename('.begin'));
    r6_externs.macros.put('while', r6_operatorRename('.while'));
    r6_externs.macros.put('try', r6_operatorRename('.try'));
    r6_externs.macros.put('is', r6_operatorRename('.is'));
    r6_externs.macros.put('<@', r6_operatorRename('.is'));
    r6_externs.macros.put('new', r6_operatorRename('.new'));
    r6_externs.macros.put('this', r6_operatorRename('.thisp'));
    r6_externs.macros.put('arguments', r6_operatorRename('.argsp'));
    r6_externs.macros.put('and', r6_operatorRename('&&'));
    r6_externs.macros.put('or', r6_operatorRename('||'));
    r6_externs.macros.put('not', r6_operatorRename('!'));
    r6_externs.macros.put('return', r6_operatorRename('.return'));
    r6_externs.macros.put('yield', r6_operatorRename('.yield'));
    r6_externs.macros.put('throw', r6_operatorRename('.throw'));
    r6_externs.macros.put('list', r6_operatorRename('.list'));
    r6_externs.macros.put('typeof', r6_operatorRename('.typeof'));
    r6_externs.macros.put('quasiquote', r6_operatorRename('.quasiquote'));
    r6_externs.macros.put('syntax', r6_operatorRename('.quasiquote'));
    r6_externs.macros.put('lambda', function _r6_t5(r11_form, r11_env) {
        var r11_form, r11_env, r11_otherwise, r11_car, r11_body, r11_parameters, _r11_t0, _r11_t1, _r11_t2, _r11_t3;
        return _r11_t0 = r11_form, _r11_t1 = false, _r11_t0 instanceof Array && _r11_t0.length === 3 ? (r11_car = _r11_t0[0], r11_parameters = _r11_t0[1], r11_body = _r11_t0[2], r0_atom(r11_parameters) ? _r11_t1 = true : _r11_t1 = false) : void 0, _r11_t1 ? r0_ex([
            '.lambda',
            [r11_parameters],
            r11_body
        ], r11_env) : _r11_t0 instanceof Array && _r11_t0.length === 3 ? (r11_car = _r11_t0[0], r11_parameters = _r11_t0[1], r11_body = _r11_t0[2], r0_ex([
            '.lambda',
            r11_parameters,
            r11_body
        ], r11_env)) : _r11_t0 instanceof Array && _r11_t0.length === 2 ? (r11_car = _r11_t0[0], r11_body = _r11_t0[1], r0_ex([
            '.lambda',
            [],
            r11_body
        ], r11_env)) : _r11_t0 instanceof Array && _r11_t0.length === 1 ? (r11_car = _r11_t0[0], r0_ex([
            '.lambda',
            [],
            ['.unit']
        ], r11_body)) : (r11_otherwise = _r11_t0, r6_reportInvalid(r11_otherwise, 'Invalid Lambda Formation'));
    });
    r6_externs.macros.put('function', r6_externs.macros.get('lambda'));
    r6_externs.macros.put('->', r6_externs.macros.get('lambda'));
    r6_externs.macros.put('if', function _r6_t6(r12_form, r12_env) {
        var r12_form, r12_env, r12_otherwise, r12_test, r12_consequents, r12_alternates, r12_consequent, r12_alternate, _r12_t0, _r12_t1, _r12_t2;
        return _r12_t0 = r12_form, _r12_t0 instanceof Array && _r12_t0.length === 3 && 'if' === _r12_t0[0] ? (r12_test = _r12_t0[1], r12_consequent = _r12_t0[2], r0_ex([
            '.if',
            r12_test,
            r12_consequent
        ], r12_env)) : _r12_t0 instanceof Array && _r12_t0.length === 4 && 'if' === _r12_t0[0] ? (r12_test = _r12_t0[1], r12_consequent = _r12_t0[2], r12_alternate = _r12_t0[3], r0_ex([
            '.if',
            r12_test,
            r12_consequent,
            r12_alternate
        ], r12_env)) : _r12_t0 instanceof Array && _r12_t0.length === 3 && 'if' === _r12_t0[0] && (_r12_t0[2] instanceof Array && _r12_t0[2].length >= 1 && 'then' === _r12_t0[2][0]) ? (r12_test = _r12_t0[1], r12_consequents = _r12_t0[2].slice(1), _r12_t0[2], r0_ex([
            '.if',
            r12_test,
            ['.begin'].concat(r12_consequents)
        ], r12_env)) : _r12_t0 instanceof Array && _r12_t0.length === 4 && 'if' === _r12_t0[0] && (_r12_t0[2] instanceof Array && _r12_t0[2].length >= 1 && 'then' === _r12_t0[2][0]) && (_r12_t0[3] instanceof Array && _r12_t0[3].length >= 1 && 'else' === _r12_t0[3][0]) ? (r12_test = _r12_t0[1], r12_consequents = _r12_t0[2].slice(1), _r12_t0[2], r12_alternates = _r12_t0[3].slice(1), _r12_t0[3], r0_ex([
            '.if',
            r12_test,
            ['.begin'].concat(r12_consequents),
            ['.begin'].concat(r12_alternates)
        ], r12_env)) : (r12_otherwise = _r12_t0, r6_reportInvalid(r12_otherwise, 'Invalid Conditional Form'));
    });
    r6_externs.macros.put('let', function _r6_t7(r13_form, r13_env) {
        var r13_form, r13_env, r13_pairs, r13_args, r13_paras, r13_j, r13_arg, r13_param, r13_useless, _r13_t0, _r13_t1, _r13_t2, _r13_t3, _r13_t4;
        r13_pairs = r13_form.slice(1, 0 - 1);
        r13_args = [];
        r13_paras = [];
        r13_j = 0;
        for (; r13_j < r13_pairs.length; r13_j = r13_j + 1) {
            _r13_t0 = r13_pairs[r13_j];
            if (_r13_t0 instanceof Array && _r13_t0.length >= 2) {
                r13_arg = _r13_t0[0];
                r13_param = _r13_t0[1];
                r13_useless = _r13_t0.slice(2);
                r13_args.push(r13_arg);
                r13_paras.push(r13_param);
            } else if (_r13_t0 instanceof Array && _r13_t0.length === 2) {
                r13_arg = _r13_t0[0];
                r13_param = _r13_t0[1];
                r13_args.push(r13_arg);
                r13_paras.push(r13_param);
            } else {
                _r13_t1 = false;
                if (_r13_t0 instanceof Array && _r13_t0.length === 1)
                    _r13_t4 = (r13_arg = _r13_t0[0], r0_atom(r13_arg) ? _r13_t1 = true : _r13_t1 = false);
                else
                    _r13_t4 = void 0;
                if (_r13_t1) {
                    r13_args.push(r13_arg);
                    r13_paras.push(r13_env.use(r13_arg));
                } else
                    void 0;
            }
        }
        return r0_ex([
            '.beta',
            r13_args,
            r13_form[r13_form.length - 1]
        ].concat(r13_paras), r13_env);
    });
    r6_externs.macros.put('object', function _r6_t8(r14_form, r14_env) {
        var r14_form, r14_env, r14_pairs, _r14_t0, _r14_t1, _r14_t2, _r14_t3;
        r14_pairs = r14_form.slice(1).map(function _r14_t2(r15_pair) {
            var r15_pair, r15_method, r15_param, r15_value, r15_property, _r15_t0, _r15_t1, _r15_t2, _r15_t3, _r15_t4, _r15_t5, _r15_t6, _r15_t7, _r15_t8, _r15_t9, _r15_t10, _r15_t11, _r15_t12, _r15_t13, _r15_t14, _r15_t15, _r15_t16, _r15_t17, _r15_t18, _r15_t19, _r15_t20;
            _r15_t0 = r15_pair;
            _r15_t5 = false;
            if (_r15_t0 instanceof Array && _r15_t0.length === 3 && '=' === _r15_t0[0])
                _r15_t8 = (r15_property = _r15_t0[1], r15_value = _r15_t0[2], r0_atom(r15_property) ? _r15_t5 = true : _r15_t5 = false);
            else
                _r15_t8 = void 0;
            if (_r15_t5)
                return [
                    [
                        '.quote',
                        r15_property
                    ],
                    r15_value
                ];
            else {
                _r15_t4 = false;
                if (_r15_t0 instanceof Array && _r15_t0.length === 2)
                    _r15_t10 = (r15_property = _r15_t0[0], r15_value = _r15_t0[1], r0_atom(r15_property) ? _r15_t4 = true : _r15_t4 = false);
                else
                    _r15_t10 = void 0;
                if (_r15_t4)
                    return [
                        [
                            '.quote',
                            r15_property
                        ],
                        r15_value
                    ];
                else {
                    _r15_t3 = false;
                    if (_r15_t0 instanceof Array && _r15_t0.length === 1)
                        _r15_t12 = (r15_property = _r15_t0[0], r0_atom(r15_property) ? _r15_t3 = true : _r15_t3 = false);
                    else
                        _r15_t12 = void 0;
                    if (_r15_t3)
                        return [
                            [
                                '.quote',
                                r15_property
                            ],
                            r15_property
                        ];
                    else {
                        r15_property = _r15_t0;
                        if (r0_atom(r15_property))
                            return [
                                [
                                    '.quote',
                                    r15_property
                                ],
                                r15_property
                            ];
                        else if (_r15_t0 instanceof Array && _r15_t0.length === 3 && '=' === _r15_t0[0] && (_r15_t0[1] instanceof Array && _r15_t0[1].length === 2 && '.quote' === _r15_t0[1][0])) {
                            r15_property = _r15_t0[1][1];
                            _r15_t0[1];
                            r15_value = _r15_t0[2];
                            return [
                                [
                                    '.quote',
                                    r15_property
                                ],
                                r15_value
                            ];
                        } else if (_r15_t0 instanceof Array && _r15_t0.length === 2 && (_r15_t0[0] instanceof Array && _r15_t0[0].length === 2 && '.quote' === _r15_t0[0][0])) {
                            r15_property = _r15_t0[0][1];
                            _r15_t0[0];
                            r15_value = _r15_t0[1];
                            return [
                                [
                                    '.quote',
                                    r15_property
                                ],
                                r15_value
                            ];
                        } else {
                            _r15_t2 = false;
                            if (_r15_t0 instanceof Array && _r15_t0.length === 3 && '=' === _r15_t0[0] && (_r15_t0[1] instanceof Array && _r15_t0[1].length >= 1))
                                _r15_t17 = (r15_method = _r15_t0[1][0], r15_param = _r15_t0[1].slice(1), _r15_t0[1], r15_value = _r15_t0[2], r0_atom(r15_method) ? _r15_t2 = true : _r15_t2 = false);
                            else
                                _r15_t17 = void 0;
                            if (_r15_t2)
                                return [
                                    [
                                        '.quote',
                                        r15_method
                                    ],
                                    [
                                        '.lambda',
                                        r15_param,
                                        r15_value
                                    ]
                                ];
                            else {
                                _r15_t1 = false;
                                if (_r15_t0 instanceof Array && _r15_t0.length === 2 && (_r15_t0[0] instanceof Array && _r15_t0[0].length >= 1))
                                    _r15_t19 = (r15_method = _r15_t0[0][0], r15_param = _r15_t0[0].slice(1), _r15_t0[0], r15_value = _r15_t0[1], r0_atom(r15_method) ? _r15_t1 = true : _r15_t1 = false);
                                else
                                    _r15_t19 = void 0;
                                if (_r15_t1)
                                    return [
                                        [
                                            '.quote',
                                            r15_method
                                        ],
                                        [
                                            '.lambda',
                                            r15_param,
                                            r15_value
                                        ]
                                    ];
                                else
                                    return void 0;
                            }
                        }
                    }
                }
            }
        });
        return r0_ex(['.xhash'].concat(r14_pairs.filter(function _r14_t3(r16_x) {
            var r16_x, _r16_t0, _r16_t1;
            return r16_x;
        })), r14_env);
    });
    r6_externs.macros.get('list').toPattern = function _r6_t9(r17_form, r17_env, r17_wrapper) {
        var r17_form, r17_env, r17_wrapper, _r17_t0, _r17_t1;
        return r6_toPattern(['.list'].concat(r17_form.slice(1)), r17_env, r17_wrapper);
    };
    r6_externs.macros.get('object').toPattern = function _r6_t10(r18_form, r18_env, r18_wrapper) {
        var r18_form, r18_env, r18_wrapper, r18_pairs, _r18_t0, _r18_t1, _r18_t2;
        r18_pairs = r18_form.slice(1).map(function _r18_t2(r19_pair) {
            var r19_pair, r19_otherwise, r19_property, r19_value, _r19_t0, _r19_t1, _r19_t2, _r19_t3, _r19_t4, _r19_t5, _r19_t6, _r19_t7, _r19_t8, _r19_t9, _r19_t10, _r19_t11, _r19_t12, _r19_t13, _r19_t14;
            _r19_t0 = r19_pair;
            _r19_t3 = false;
            if (_r19_t0 instanceof Array && _r19_t0.length === 3 && '=' === _r19_t0[0])
                _r19_t6 = (r19_property = _r19_t0[1], r19_value = _r19_t0[2], r0_atom(r19_property) ? _r19_t3 = true : _r19_t3 = false);
            else
                _r19_t6 = void 0;
            if (_r19_t3)
                return [
                    r19_property,
                    r19_value
                ];
            else {
                _r19_t2 = false;
                if (_r19_t0 instanceof Array && _r19_t0.length === 2)
                    _r19_t8 = (r19_property = _r19_t0[0], r19_value = _r19_t0[1], r0_atom(r19_property) ? _r19_t2 = true : _r19_t2 = false);
                else
                    _r19_t8 = void 0;
                if (_r19_t2)
                    return [
                        r19_property,
                        r19_value
                    ];
                else {
                    _r19_t1 = false;
                    if (_r19_t0 instanceof Array && _r19_t0.length === 1)
                        _r19_t10 = (r19_property = _r19_t0[0], r0_atom(r19_property) ? _r19_t1 = true : _r19_t1 = false);
                    else
                        _r19_t10 = void 0;
                    if (_r19_t1)
                        return [
                            r19_property,
                            r19_property
                        ];
                    else {
                        r19_property = _r19_t0;
                        if (r0_atom(r19_property))
                            return [
                                r19_property,
                                r19_property
                            ];
                        else if (_r19_t0 instanceof Array && _r19_t0.length === 3 && '=' === _r19_t0[0] && (_r19_t0[1] instanceof Array && _r19_t0[1].length === 2 && '.quote' === _r19_t0[1][0])) {
                            r19_property = _r19_t0[1][1];
                            _r19_t0[1];
                            r19_value = _r19_t0[2];
                            return [
                                r19_property,
                                r19_value
                            ];
                        } else if (_r19_t0 instanceof Array && _r19_t0.length === 2 && (_r19_t0[0] instanceof Array && _r19_t0[0].length === 2 && '.quote' === _r19_t0[0][0])) {
                            r19_property = _r19_t0[0][1];
                            _r19_t0[0];
                            r19_value = _r19_t0[1];
                            return [
                                r19_property,
                                r19_value
                            ];
                        } else {
                            r19_otherwise = _r19_t0;
                            throw new r0_FormInvalidError(r18_form, 'Invalid Assignment Left-hand Side');
                        }
                    }
                }
            }
        });
        return r6_toPattern(['.hash'].concat(r18_pairs), r18_env, r18_wrapper);
    };
    r6_externs.macros.put('piecewise', function _r6_t11(r20_form, r20_env) {
        var r20_form, r20_env, r20_pairs, r20_f, r20_j, r20_otherwise, r20_condition, r20_consequent, _r20_t0, _r20_t1, _r20_t2, _r20_t3, _r20_t4;
        _r20_t0 = r20_form;
        if (_r20_t0 instanceof Array && _r20_t0.length >= 1 && 'piecewise' === _r20_t0[0]) {
            r20_pairs = _r20_t0.slice(1);
            r20_f = ['.unit'];
            r20_j = r20_pairs.length - 1;
            for (; r20_j >= 0; r20_j = r20_j - 1) {
                _r20_t1 = r20_pairs[r20_j];
                if (_r20_t1 instanceof Array && _r20_t1.length === 2) {
                    r20_condition = _r20_t1[0];
                    r20_consequent = _r20_t1[1];
                    r20_f = [
                        '.if',
                        r0_ex(r20_condition, r20_env),
                        r0_ex(r20_consequent, r20_env),
                        r20_f
                    ];
                } else {
                    r20_otherwise = _r20_t1;
                    throw new r0_FormInvalidError(r20_otherwise, 'Invalid Piecewise Segment');
                }
            }
            return r20_f;
        } else
            return void 0;
    });
    r6_AssignWithMod = function _r6_t12(r21_left, r21_right, r21_mod, r21_env, r21_locallyQ) {
        var r21_left, r21_right, r21_mod, r21_env, r21_locallyQ, r21_any, r21_callee, r21_paras, r21_pat, r21_t, r21_whatever, r21_a, r21_e, r21_id, _r21_t0, _r21_t1, _r21_t2, _r21_t3, _r21_t4, _r21_t5, _r21_t6, _r21_t7, _r21_t8, _r21_t9, _r21_t10, _r21_t11, _r21_t12, _r21_t13, _r21_t14, _r21_t15, _r21_t16, _r21_t17, _r21_t18, _r21_t19, _r21_t20, _r21_t21, _r21_t22, _r21_t23;
        _r21_t0 = r21_left;
        r21_id = _r21_t0;
        if (r0_atom(r21_id))
            return r21_locallyQ ? [
                '.set',
                r0_ex([
                    '.local',
                    r21_id
                ], r21_env),
                r0_ex([
                    r21_mod,
                    r21_right
                ], r21_env)
            ] : true ? [
                '.set',
                r0_ex(r21_left, r21_env),
                r0_ex([
                    r21_mod,
                    r21_right
                ], r21_env)
            ] : void 0;
        else {
            _r21_t5 = false;
            if (_r21_t0 instanceof Array && _r21_t0.length === 2 && '.id' === _r21_t0[0])
                _r21_t9 = (r21_id = _r21_t0[1], r0_atom(r21_id) ? _r21_t5 = true : _r21_t5 = false);
            else
                _r21_t9 = void 0;
            if (_r21_t5)
                return r21_locallyQ ? [
                    '.set',
                    r0_ex([
                        '.local',
                        r21_id
                    ], r21_env),
                    r0_ex([
                        r21_mod,
                        r21_right
                    ], r21_env)
                ] : true ? [
                    '.set',
                    r0_ex(r21_left, r21_env),
                    r0_ex([
                        r21_mod,
                        r21_right
                    ], r21_env)
                ] : void 0;
            else {
                _r21_t4 = false;
                if (_r21_t0 instanceof Array && _r21_t0.length === 3 && '.id' === _r21_t0[0])
                    _r21_t11 = (r21_id = _r21_t0[1], r21_e = _r21_t0[2], r0_atom(r21_id) && (r21_e === r21_env || !r21_locallyQ) ? _r21_t4 = true : _r21_t4 = false);
                else
                    _r21_t11 = void 0;
                if (_r21_t4)
                    return r21_locallyQ ? [
                        '.set',
                        r0_ex([
                            '.local',
                            r21_id
                        ], r21_e),
                        r0_ex([
                            r21_mod,
                            r21_right
                        ], r21_e)
                    ] : true ? [
                        '.set',
                        r0_ex(r21_left, r21_e),
                        r0_ex([
                            r21_mod,
                            r21_right
                        ], r21_e)
                    ] : void 0;
                else {
                    _r21_t3 = false;
                    if (_r21_t0 instanceof Array && _r21_t0.length === 3 && '.id' === _r21_t0[0])
                        _r21_t13 = (r21_id = _r21_t0[1], r21_e = _r21_t0[2], r0_atom(r21_id) && r21_e !== r21_env && r21_locallyQ ? _r21_t3 = true : _r21_t3 = false);
                    else
                        _r21_t13 = void 0;
                    if (_r21_t3)
                        throw new r0_FormInvalidError(r21_left, 'Attempt to redefine non-local subform');
                    else if (_r21_t0 instanceof Array && _r21_t0.length === 2 && '.local' === _r21_t0[0])
                        return r21_a = _r21_t0[1], r6_AssignWithMod(r21_a, r21_right, r21_mod, r21_env, true);
                    else {
                        _r21_t2 = false;
                        if (_r21_t0 instanceof Array && _r21_t0.length === 3 && '.syntactic-closure' === _r21_t0[0])
                            _r21_t16 = (r21_a = _r21_t0[1], r21_e = _r21_t0[2], r21_e === r21_env || !r21_locallyQ ? _r21_t2 = true : _r21_t2 = false);
                        else
                            _r21_t16 = void 0;
                        if (_r21_t2)
                            return r6_AssignWithMod(r21_a, r21_right, r21_mod, r21_env, r21_locallyQ);
                        else {
                            _r21_t1 = false;
                            if (_r21_t0 instanceof Array && _r21_t0.length === 3 && '.syntactic-closure' === _r21_t0[0])
                                _r21_t18 = (r21_a = _r21_t0[1], r21_e = _r21_t0[2], r21_e !== r21_env && r21_locallyQ ? _r21_t1 = true : _r21_t1 = false);
                            else
                                _r21_t18 = void 0;
                            if (_r21_t1)
                                throw new r0_FormInvalidError(r21_left, 'Attempt to redefine non-local subform');
                            else if (_r21_t0 instanceof Array && _r21_t0.length >= 1 && '.revcall' === _r21_t0[0])
                                return r21_whatever = _r21_t0.slice(1), r6_AssignWithMod([].concat(r21_whatever), r21_right, r21_mod, r21_env, r21_locallyQ);
                            else if (_r21_t0 instanceof Array && _r21_t0.length >= 1) {
                                r21_callee = _r21_t0[0];
                                r21_paras = _r21_t0.slice(1);
                                if (r0_atom(r21_callee) && r21_env.macros.has(r21_callee) && r21_env.macros.get(r21_callee).toPattern) {
                                    r21_pat = r6_toPattern(r21_left, r21_env);
                                    r21_t = r21_env.newt();
                                    return [
                                        '.begin',
                                        [
                                            '.set',
                                            r21_t,
                                            r0_ex([
                                                r21_mod,
                                                r21_right
                                            ], r21_env)
                                        ],
                                        r21_pat.assign(r21_t, r21_locallyQ)
                                    ];
                                } else if (r0_atom(r21_callee) && r21_env.macros.has(r21_callee))
                                    throw new r0_FormInvalidError(r21_left, 'Invalid Assignment Left-hand Side');
                                else
                                    return r0_prim(r21_callee) ? [
                                        '.set',
                                        r0_ex(r21_left, r21_env),
                                        r0_ex([
                                            r21_mod,
                                            r21_right
                                        ], r21_env)
                                    ] : r0_atom(r21_callee) ? r21_locallyQ ? [
                                        '.set',
                                        r0_ex([
                                            '.local',
                                            r21_callee
                                        ], r21_env),
                                        r0_ex([
                                            r21_mod,
                                            [
                                                '.lambda',
                                                [].concat(r21_paras),
                                                r21_right
                                            ]
                                        ], r21_env)
                                    ] : true ? [
                                        '.set',
                                        r0_ex(r21_callee, r21_env),
                                        r0_ex([
                                            r21_mod,
                                            [
                                                '.lambda',
                                                [].concat(r21_paras),
                                                r21_right
                                            ]
                                        ], r21_env)
                                    ] : void 0 : true ? [
                                        '.set',
                                        r0_ex(r21_callee, r21_env),
                                        r0_ex([
                                            r21_mod,
                                            [
                                                '.lambda',
                                                [].concat(r21_paras),
                                                r21_right
                                            ]
                                        ], r21_env)
                                    ] : void 0;
                            } else {
                                r21_any = _r21_t0;
                                throw new r0_FormInvalidError(r21_left, 'Invalid Assignment Left-hand Side');
                            }
                        }
                    }
                }
            }
        }
    };
    r6_Assign = function _r6_t13(r22_left, r22_right, r22_env, r22_locallyQ) {
        var r22_left, r22_right, r22_env, r22_locallyQ, _r22_t0, _r22_t1;
        return r6_AssignWithMod(r22_left, r22_right, '.unquote', r22_env, r22_locallyQ);
    };
    r6_externs.macros.put('define', function _r6_t14(r23_form, r23_env) {
        var r23_form, r23_env, r23_any, r23_op, r23_left, r23_right, r23_modifer, _r23_t0, _r23_t1, _r23_t2, _r23_t3, _r23_t4, _r23_t5, _r23_t6, _r23_t7;
        _r23_t0 = r23_form;
        if (_r23_t0 instanceof Array && _r23_t0.length === 4)
            return r23_op = _r23_t0[0], r23_modifer = _r23_t0[1], r23_left = _r23_t0[2], r23_right = _r23_t0[3], r6_AssignWithMod(r23_left, r23_right, r23_modifer, r23_env, true);
        else if (_r23_t0 instanceof Array && _r23_t0.length === 3)
            return r23_op = _r23_t0[0], r23_left = _r23_t0[1], r23_right = _r23_t0[2], r6_Assign(r23_left, r23_right, r23_env, true);
        else {
            _r23_t1 = false;
            if (_r23_t0 instanceof Array && _r23_t0.length === 2)
                _r23_t6 = (r23_op = _r23_t0[0], r23_left = _r23_t0[1], r0_atom(r23_left) ? _r23_t1 = true : _r23_t1 = false);
            else
                _r23_t6 = void 0;
            if (_r23_t1)
                return [
                    '.local',
                    r23_left
                ];
            else {
                r23_any = _r23_t0;
                throw new r0_FormInvalidError(r23_any, 'Invalid Assignment');
            }
        }
    });
    r6_externs.macros.put('local', r6_externs.macros.get('define'));
    r6_externs.macros.put('set', function _r6_t15(r24_form, r24_env) {
        var r24_form, r24_env, r24_any, r24_op, r24_left, r24_right, _r24_t0, _r24_t1, _r24_t2, _r24_t3;
        _r24_t0 = r24_form;
        if (_r24_t0 instanceof Array && _r24_t0.length === 3)
            return r24_op = _r24_t0[0], r24_left = _r24_t0[1], r24_right = _r24_t0[2], r6_Assign(r24_left, r24_right, r24_env, false);
        else {
            r24_any = _r24_t0;
            throw new r0_FormInvalidError(r24_any, 'Invalid Assignment');
        }
    });
    r6_externs.macros.put('=', r6_externs.macros.get('set'));
    r6_externs.macros.put('inc', function _r6_t16(r25_form, r25_env) {
        var r25_form, r25_env, r25_op, r25_id, r25_shift, _r25_t0, _r25_t1, _r25_t2;
        return _r25_t0 = r25_form, _r25_t0 instanceof Array && _r25_t0.length === 2 ? (r25_op = _r25_t0[0], r25_id = _r25_t0[1], r6_Assign(r25_id, [
            '+',
            r25_id,
            [
                '.quote',
                1
            ]
        ], r25_env, false)) : _r25_t0 instanceof Array && _r25_t0.length === 3 ? (r25_op = _r25_t0[0], r25_id = _r25_t0[1], r25_shift = _r25_t0[2], r6_Assign(r25_id, [
            '+',
            r25_id,
            r25_shift
        ], r25_env, false)) : _r25_t0 instanceof Array && _r25_t0.length === 4 && 'by' === _r25_t0[2] ? (r25_op = _r25_t0[0], r25_id = _r25_t0[1], r25_shift = _r25_t0[3], r6_Assign(r25_id, [
            '+',
            r25_id,
            r25_shift
        ], r25_env, false)) : void 0;
    });
    r6_externs.macros.put('dec', function _r6_t17(r26_form, r26_env) {
        var r26_form, r26_env, r26_op, r26_id, r26_shift, _r26_t0, _r26_t1, _r26_t2;
        return _r26_t0 = r26_form, _r26_t0 instanceof Array && _r26_t0.length === 2 ? (r26_op = _r26_t0[0], r26_id = _r26_t0[1], r6_Assign(r26_id, [
            '-',
            r26_id,
            [
                '.quote',
                1
            ]
        ], r26_env, false)) : _r26_t0 instanceof Array && _r26_t0.length === 3 ? (r26_op = _r26_t0[0], r26_id = _r26_t0[1], r26_shift = _r26_t0[2], r6_Assign(r26_id, [
            '-',
            r26_id,
            r26_shift
        ], r26_env, false)) : _r26_t0 instanceof Array && _r26_t0.length === 4 && 'by' === _r26_t0[2] ? (r26_op = _r26_t0[0], r26_id = _r26_t0[1], r26_shift = _r26_t0[3], r6_Assign(r26_id, [
            '-',
            r26_id,
            r26_shift
        ], r26_env, false)) : void 0;
    });
    r6_externs.macros.put('for', function _r6_t18(r27_form, r27_env) {
        var r27_form, r27_env, r27_init, r27_test, r27_step, r27_body, _r27_t0, _r27_t1, _r27_t2;
        return _r27_t0 = r27_form, _r27_t0 instanceof Array && _r27_t0.length === 5 && 'for' === _r27_t0[0] ? (r27_init = _r27_t0[1], r27_test = _r27_t0[2], r27_step = _r27_t0[3], r27_body = _r27_t0[4], [
            '.begin',
            r0_ex(r27_init, r27_env),
            [
                '.while',
                r0_ex(r27_test, r27_env),
                [
                    '.begin',
                    r0_ex(r27_body, r27_env),
                    r0_ex(r27_step, r27_env)
                ]
            ]
        ]) : void 0;
    });
    r6_externs.macros.put('this', ['.thisp']);
    r6_externs.macros.put('arguments', ['.argsp']);
    r6_externs.macros.put('nothing', ['.unit']);
    r6_externs.macros.put('undefined', ['.unit']);
    r6_externs.macros.put('null', [
        '.quote',
        null
    ]);
    r6_externs.macros.put('true', [
        '.quote',
        true
    ]);
    r6_externs.macros.put('false', [
        '.quote',
        false
    ]);
    r6_toPattern = function _r6_t19(r28_pattern, r28_env, r28_wrapper) {
        var r28_pattern, r28_env, r28_wrapper, r28_callee, r28_subpatterns, r28_ms, r28_t, r28_whatever, r28_x, r28_id, _r28_t0, _r28_t1, _r28_t2, _r28_t3, _r28_t4, _r28_t5, _r28_t6, _r28_t7, _r28_t8, _r28_t9, _r28_t10, _r28_t11, _r28_t12, _r28_t13, _r28_t14, _r28_t15, _r28_t16, _r28_t17, _r28_t18, _r28_t19, _r28_t20, _r28_t21, _r28_t22, _r28_t23;
        _r28_t0 = r28_pattern;
        r28_id = _r28_t0;
        if (r0_atom(r28_id))
            return {
                'whether': function _r28_t5(r40_x) {
                    var r40_x, _r40_t0, _r40_t1;
                    return null;
                },
                'assign': function _r28_t6(r41_x, r41_locallyQ) {
                    var r41_x, r41_locallyQ, _r41_t0, _r41_t1;
                    return [
                        '.set',
                        r0_ex(r41_locallyQ ? [
                            '.local',
                            r28_id
                        ] : r28_id, r28_env),
                        r28_wrapper ? [
                            r28_wrapper,
                            r41_x
                        ] : r41_x
                    ];
                }
            };
        else {
            _r28_t1 = false;
            if (_r28_t0 instanceof Array && _r28_t0.length === 2 && '.id' === _r28_t0[0])
                _r28_t7 = (r28_id = _r28_t0[1], r0_atom(r28_id) ? _r28_t1 = true : _r28_t1 = false);
            else
                _r28_t7 = void 0;
            if (_r28_t1)
                return {
                    'whether': function _r28_t9(r38_x) {
                        var r38_x, _r38_t0, _r38_t1;
                        return null;
                    },
                    'assign': function _r28_t10(r39_x, r39_locallyQ) {
                        var r39_x, r39_locallyQ, _r39_t0, _r39_t1;
                        return [
                            '.set',
                            r0_ex(r39_locallyQ ? [
                                '.local',
                                r28_id
                            ] : r28_id, r28_env),
                            r28_wrapper ? [
                                r28_wrapper,
                                r39_x
                            ] : r39_x
                        ];
                    }
                };
            else if (_r28_t0 instanceof Array && _r28_t0.length === 2 && '.quote' === _r28_t0[0])
                return r28_x = _r28_t0[1], {
                    'whether': function _r28_t12(r36_x) {
                        var r36_x, _r36_t0, _r36_t1;
                        return [
                            '===',
                            r0_ex(r28_pattern, r28_env),
                            r36_x
                        ];
                    },
                    'assign': function _r28_t13(r37_x, r37_locallyQ) {
                        var r37_x, r37_locallyQ, _r37_t0, _r37_t1;
                        return ['.unit'];
                    }
                };
            else if (_r28_t0 instanceof Array && _r28_t0.length >= 1 && '.' === _r28_t0[0])
                return r28_whatever = _r28_t0.slice(1), {
                    'whether': function _r28_t15(r34_x) {
                        var r34_x, _r34_t0, _r34_t1;
                        return null;
                    },
                    'assign': function _r28_t16(r35_x, r35_locallyQ) {
                        var r35_x, r35_locallyQ, _r35_t0, _r35_t1;
                        return [
                            '.set',
                            r0_ex(r28_pattern, r28_env),
                            r28_wrapper ? [
                                r28_wrapper,
                                r35_x
                            ] : r35_x
                        ];
                    }
                };
            else if (_r28_t0 instanceof Array && _r28_t0.length >= 1) {
                r28_callee = _r28_t0[0];
                r28_subpatterns = _r28_t0.slice(1);
                if (r0_atom(r28_callee) && r28_env.macros.has(r28_callee) && r28_env.macros.get(r28_callee).toPattern)
                    return r28_env.macros.get(r28_callee).toPattern(r28_pattern, r28_env, r28_wrapper);
                else if (r0_atom(r28_callee) && r28_env.macros.has(r28_callee))
                    throw new r0_FormInvalidError(r28_pattern, 'Invalid Pattern');
                else if (true) {
                    r28_ms = r28_subpatterns.map(function _r28_t21(r29_x) {
                        var r29_x, _r29_t0, _r29_t1;
                        return r6_toPattern(r29_x, r28_env, r28_wrapper);
                    });
                    r28_t = r28_env.newt();
                    return {
                        'whether': function _r28_t22(r30_x) {
                            var r30_x, _r30_t0, _r30_t1, _r30_t2;
                            return [
                                '&&',
                                [
                                    '.set',
                                    r28_t,
                                    [
                                        [
                                            '.',
                                            r0_ex(r28_callee, r28_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r30_x,
                                        [
                                            '.quote',
                                            r28_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r28_ms.map(function _r30_t2(r31_p, r31_j) {
                                var r31_p, r31_j, _r31_t0, _r31_t1;
                                return r31_p.whether([
                                    '.',
                                    r28_t,
                                    [
                                        '.quote',
                                        r31_j
                                    ]
                                ]);
                            })).filter(r6_boole);
                        },
                        'assign': function _r28_t23(r32_x, r32_locallyQ) {
                            var r32_x, r32_locallyQ, _r32_t0, _r32_t1, _r32_t2;
                            return ['.begin'].concat(r28_ms.map(function _r32_t2(r33_p, r33_j) {
                                var r33_p, r33_j, _r33_t0, _r33_t1;
                                return r33_p.assign([
                                    '.',
                                    r28_t,
                                    [
                                        '.quote',
                                        r33_j
                                    ]
                                ], r32_locallyQ);
                            }));
                        }
                    };
                } else
                    return void 0;
            } else
                return void 0;
        }
    };
    r6_externs.macros.put('.list', {});
    r6_externs.macros.get('.list').toPattern = function _r6_t20(r42_pattern, r42_env, r42_wrapper) {
        var r42_pattern, r42_env, r42_wrapper, r42_subpatterns, r42_ms, _r42_t0, _r42_t1, _r42_t2, _r42_t3, _r42_t4, _r42_t5, _r42_t6;
        _r42_t0 = r42_pattern;
        if (_r42_t0 instanceof Array && _r42_t0.length >= 1 && '.list' === _r42_t0[0]) {
            r42_subpatterns = _r42_t0.slice(1);
            r42_ms = r42_subpatterns.map(function _r42_t4(r43_x) {
                var r43_x, _r43_t0, _r43_t1;
                return r6_toPattern(r43_x, r42_env, r42_wrapper);
            });
            return {
                'whether': function _r42_t5(r44_x) {
                    var r44_x, _r44_t0, _r44_t1, _r44_t2;
                    return [
                        '&&',
                        [
                            '.is',
                            r44_x,
                            r6_externs.use('Array')
                        ],
                        [
                            '===',
                            [
                                '.',
                                r44_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r42_ms.length
                            ]
                        ]
                    ].concat(r42_ms.map(function _r44_t2(r45_p, r45_j) {
                        var r45_p, r45_j, _r45_t0, _r45_t1;
                        return r45_p.whether([
                            '.',
                            r44_x,
                            [
                                '.quote',
                                r45_j
                            ]
                        ]);
                    })).filter(r6_boole);
                },
                'assign': function _r42_t6(r46_x, r46_locallyQ) {
                    var r46_x, r46_locallyQ, _r46_t0, _r46_t1, _r46_t2;
                    return ['.begin'].concat(r42_ms.map(function _r46_t2(r47_p, r47_j) {
                        var r47_p, r47_j, _r47_t0, _r47_t1;
                        return r47_p.assign([
                            '.',
                            r46_x,
                            [
                                '.quote',
                                r47_j
                            ]
                        ], r46_locallyQ);
                    }).concat([r46_x]));
                }
            };
        } else
            return void 0;
    };
    r6_externs.macros.put('.conslist', {});
    r6_externs.macros.get('.conslist').toPattern = function _r6_t21(r48_pattern, r48_env, r48_wrapper) {
        var r48_pattern, r48_env, r48_wrapper, r48_subpatterns, r48_ms, r48_final, _r48_t0, _r48_t1, _r48_t2, _r48_t3, _r48_t4, _r48_t5, _r48_t6;
        _r48_t0 = r48_pattern;
        if (_r48_t0 instanceof Array && _r48_t0.length >= 1 && '.conslist' === _r48_t0[0]) {
            r48_subpatterns = _r48_t0.slice(1);
            r48_ms = r48_pattern.slice(1, 0 - 1).map(function _r48_t4(r49_x) {
                var r49_x, _r49_t0, _r49_t1;
                return r6_toPattern(r49_x, r48_env, r48_wrapper);
            });
            r48_final = r6_toPattern(r48_pattern[r48_pattern.length - 1], r48_env);
            return {
                'whether': function _r48_t5(r50_x) {
                    var r50_x, _r50_t0, _r50_t1, _r50_t2;
                    return [
                        '&&',
                        [
                            '.is',
                            r50_x,
                            r6_externs.use('Array')
                        ],
                        [
                            '>=',
                            [
                                '.',
                                r50_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r48_ms.length
                            ]
                        ]
                    ].concat(r48_ms.map(function _r50_t2(r51_p, r51_j) {
                        var r51_p, r51_j, _r51_t0, _r51_t1;
                        return r51_p.whether([
                            '.',
                            r50_x,
                            [
                                '.quote',
                                r51_j
                            ]
                        ]);
                    }).concat([r48_final.whether([
                            [
                                '.',
                                r50_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r48_ms.length
                            ]
                        ])])).filter(r6_boole);
                },
                'assign': function _r48_t6(r52_x, r52_locallyQ) {
                    var r52_x, r52_locallyQ, _r52_t0, _r52_t1, _r52_t2;
                    return ['.begin'].concat(r48_ms.map(function _r52_t2(r53_p, r53_j) {
                        var r53_p, r53_j, _r53_t0, _r53_t1;
                        return r53_p.assign([
                            '.',
                            r52_x,
                            [
                                '.quote',
                                r53_j
                            ]
                        ], r52_locallyQ);
                    })).concat([r48_final.assign(r48_wrapper ? [
                            [
                                '.',
                                [
                                    [
                                        '.',
                                        r52_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r48_ms.length
                                    ]
                                ],
                                [
                                    '.quote',
                                    'map'
                                ]
                            ],
                            r48_wrapper
                        ] : [
                            [
                                '.',
                                r52_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r48_ms.length
                            ]
                        ], r52_locallyQ)]).concat([r52_x]);
                }
            };
        } else
            return void 0;
    };
    r6_externs.macros.put('.hash', {});
    r6_externs.macros.get('.hash').toPattern = function _r6_t22(r54_pattern, r54_env, r54_wrapper) {
        var r54_pattern, r54_env, r54_wrapper, r54_subpatterns, r54_ms, _r54_t0, _r54_t1, _r54_t2, _r54_t3, _r54_t4, _r54_t5, _r54_t6;
        _r54_t0 = r54_pattern;
        if (_r54_t0 instanceof Array && _r54_t0.length >= 1 && '.hash' === _r54_t0[0]) {
            r54_subpatterns = _r54_t0.slice(1);
            r54_ms = r54_subpatterns.map(function _r54_t4(r55_pair) {
                var r55_pair, _r55_t0, _r55_t1;
                return [
                    r55_pair[0],
                    r6_toPattern(r55_pair[1], r54_env, r54_wrapper)
                ];
            });
            return {
                'whether': function _r54_t5(r56_x) {
                    var r56_x, _r56_t0, _r56_t1, _r56_t2;
                    return [
                        '&&',
                        r56_x
                    ].concat(r54_ms.map(function _r56_t2(r57_p) {
                        var r57_p, _r57_t0, _r57_t1;
                        return r57_p[1].whether([
                            '.',
                            r56_x,
                            [
                                '.quote',
                                r57_p[0]
                            ]
                        ]);
                    })).filter(r6_boole);
                },
                'assign': function _r54_t6(r58_x, r58_locallyQ) {
                    var r58_x, r58_locallyQ, _r58_t0, _r58_t1, _r58_t2;
                    return ['.begin'].concat(r54_ms.map(function _r58_t2(r59_p) {
                        var r59_p, _r59_t0, _r59_t1;
                        return r59_p[1].assign([
                            '.',
                            r58_x,
                            [
                                '.quote',
                                r59_p[0]
                            ]
                        ], r58_locallyQ);
                    }).concat([r58_x]));
                }
            };
        } else
            return void 0;
    };
    r6_externs.macros.put('.xhash', {});
    r6_externs.macros.get('.xhash').toPattern = function _r6_t23(r60_pattern, r60_env, r60_wrapper) {
        var r60_pattern, r60_env, r60_wrapper, r60_subpatterns, r60_ms, _r60_t0, _r60_t1, _r60_t2, _r60_t3, _r60_t4, _r60_t5, _r60_t6;
        _r60_t0 = r60_pattern;
        if (_r60_t0 instanceof Array && _r60_t0.length >= 1 && '.xhash' === _r60_t0[0]) {
            r60_subpatterns = _r60_t0.slice(1);
            r60_ms = r60_subpatterns.map(function _r60_t4(r61_pair) {
                var r61_pair, _r61_t0, _r61_t1;
                return [
                    r0_ex(r61_pair[0], r60_env),
                    r6_toPattern(r61_pair[1], r60_env, r60_wrapper)
                ];
            });
            return {
                'whether': function _r60_t5(r62_x) {
                    var r62_x, _r62_t0, _r62_t1, _r62_t2;
                    return [
                        '&&',
                        r62_x
                    ].concat(r60_ms.map(function _r62_t2(r63_p) {
                        var r63_p, r63_otherwise, r63_key, _r63_t0, _r63_t1, _r63_t2, _r63_t3, _r63_t4, _r63_t5, _r63_tag6;
                        _r63_t0 = r63_p[0];
                        if (_r63_t0 instanceof Array && _r63_t0.length === 2 && '.quote' === _r63_t0[0])
                            return r63_key = _r63_t0[1], r63_p[1].whether([
                                '.',
                                r62_x,
                                r63_p[0]
                            ]);
                        else {
                            r63_otherwise = _r63_t0;
                            _r63_t4 = r60_env.newt();
                            return function (r64_t) {
                                var r64_t;
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r64_t,
                                        [
                                            '.',
                                            r62_x,
                                            r63_p[0]
                                        ]
                                    ],
                                    r63_p[1].whether(r64_t)
                                ];
                            }(_r63_t4);
                        }
                    })).filter(r6_boole);
                },
                'assign': function _r60_t6(r65_x, r65_locallyQ) {
                    var r65_x, r65_locallyQ, _r65_t0, _r65_t1, _r65_t2;
                    return ['.begin'].concat(r60_ms.map(function _r65_t2(r66_p) {
                        var r66_p, r66_otherwise, r66_key, _r66_t0, _r66_t1, _r66_t2, _r66_t3, _r66_t4, _r66_t5, _r66_tag6;
                        _r66_t0 = r66_p[0];
                        if (_r66_t0 instanceof Array && _r66_t0.length === 2 && '.quote' === _r66_t0[0])
                            return r66_key = _r66_t0[1], r66_p[1].assign([
                                '.',
                                r65_x,
                                r66_p[0]
                            ], r65_locallyQ);
                        else {
                            r66_otherwise = _r66_t0;
                            _r66_t4 = r60_env.newt();
                            return function (r67_t) {
                                var r67_t;
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r67_t,
                                        [
                                            '.',
                                            r65_x,
                                            r66_p[0]
                                        ]
                                    ],
                                    r66_p[1].assign(r67_t, r65_locallyQ)
                                ];
                            }(_r66_t4);
                        }
                    }).concat([r65_x]));
                }
            };
        } else
            return void 0;
    };
    r6_externs.macros.put('.quasiquote', {});
    r6_externs.macros.get('.quasiquote').toPattern = function _r6_t24(r68_pattern, r68_env, r68_wrapper) {
        var r68_pattern, r68_env, r68_wrapper, r68_subpatterns, _r68_t0, _r68_t1, _r68_t2;
        return _r68_t0 = r68_pattern, _r68_t0 instanceof Array && _r68_t0.length >= 1 && '.quasiquote' === _r68_t0[0] ? (r68_subpatterns = _r68_t0.slice(1), r6_toPattern(r0_deQuasiquote(r68_pattern[1], 0), r68_env, r68_wrapper)) : void 0;
    };
    r6_externs.macros.put('&&', {});
    r6_externs.macros.get('&&').toPattern = function _r6_t25(r69_pattern, r69_env, r69_wrapper) {
        var r69_pattern, r69_env, r69_wrapper, r69_subpatterns, r69_ms, _r69_t0, _r69_t1, _r69_t2, _r69_t3, _r69_t4, _r69_t5, _r69_t6;
        _r69_t0 = r69_pattern;
        if (_r69_t0 instanceof Array && _r69_t0.length >= 1 && '&&' === _r69_t0[0]) {
            r69_subpatterns = _r69_t0.slice(1);
            r69_ms = r69_subpatterns.map(function _r69_t4(r70_x) {
                var r70_x, _r70_t0, _r70_t1;
                return r6_toPattern(r70_x, r69_env, r69_wrapper);
            });
            return {
                'whether': function _r69_t5(r71_x) {
                    var r71_x, _r71_t0, _r71_t1, _r71_t2;
                    return ['&&'].concat(r69_ms.map(function _r71_t2(r72_p, r72_j) {
                        var r72_p, r72_j, _r72_t0, _r72_t1;
                        return r72_p.whether(r71_x);
                    })).filter(r6_boole);
                },
                'assign': function _r69_t6(r73_x, r73_locallyQ) {
                    var r73_x, r73_locallyQ, _r73_t0, _r73_t1, _r73_t2;
                    return ['.begin'].concat(r69_ms.map(function _r73_t2(r74_p, r74_j) {
                        var r74_p, r74_j, _r74_t0, _r74_t1;
                        return r74_p.assign(r73_x, r73_locallyQ);
                    }).concat([r73_x]));
                }
            };
        } else
            return void 0;
    };
    r6_externs.macros.put('||', {});
    r6_externs.macros.get('||').toPattern = function _r6_t26(r75_pattern, r75_env, r75_wrapper) {
        var r75_pattern, r75_env, r75_wrapper, r75_subpatterns, r75_ms, _r75_t0, _r75_t1, _r75_t2, _r75_t3, _r75_t4, _r75_t5, _r75_t6;
        _r75_t0 = r75_pattern;
        if (_r75_t0 instanceof Array && _r75_t0.length >= 1 && '||' === _r75_t0[0]) {
            r75_subpatterns = _r75_t0.slice(1);
            r75_ms = r75_subpatterns.map(function _r75_t4(r76_x) {
                var r76_x, _r76_t0, _r76_t1;
                return r6_toPattern(r76_x, r75_env, r75_wrapper);
            });
            return {
                'whether': function _r75_t5(r77_x) {
                    var r77_x, _r77_t0, _r77_t1, _r77_t2;
                    return ['||'].concat(r75_ms.map(function _r77_t2(r78_p, r78_j) {
                        var r78_p, r78_j, _r78_t0, _r78_t1;
                        return r78_p.whether(r77_x);
                    })).filter(r6_boole);
                },
                'assign': function _r75_t6(r79_x, r79_locallyQ) {
                    var r79_x, r79_locallyQ, _r79_t0, _r79_t1;
                    return ['.unit'];
                }
            };
        } else
            return void 0;
    };
    r6_boole = function _r6_t27(r80_x) {
        var r80_x, _r80_t0, _r80_t1;
        return !!r80_x;
    };
    r6_externs.macros.put('match', function _r6_t28(r81_form, r81_env, r81_wrapper) {
        var r81_form, r81_env, r81_wrapper, r81_pairs, r81_t, r81_f, r81_j, r81_any, r81_pattern, r81_guard, r81_body, r81_pat, r81_cond, r81_tc, _r81_t0, _r81_t1, _r81_t2;
        r81_pairs = r81_form.slice(2);
        r81_t = r81_env.newt();
        r81_f = ['.unit'];
        r81_j = r81_pairs.length - 1;
        for (; r81_j >= 0; r81_j = r81_j - 1) {
            r81_f = (_r81_t0 = r81_pairs[r81_j], _r81_t0 instanceof Array && _r81_t0.length === 2 ? (r81_pattern = _r81_t0[0], r81_body = _r81_t0[1], r81_pat = r6_toPattern(r81_pattern, r81_env, r81_wrapper), r81_cond = r81_pat.whether(r81_t), r81_cond ? [
                '.if',
                r81_cond,
                [
                    '.begin',
                    r81_pat.assign(r81_t, true),
                    r0_ex(r81_body, r81_env)
                ],
                r81_f
            ] : true ? [
                '.begin',
                r81_pat.assign(r81_t, true),
                r0_ex(r81_body, r81_env)
            ] : void 0) : _r81_t0 instanceof Array && _r81_t0.length === 3 ? (r81_pattern = _r81_t0[0], r81_guard = _r81_t0[1], r81_body = _r81_t0[2], r81_pat = r6_toPattern(r81_pattern, r81_env, r81_wrapper), r81_cond = r81_pat.whether(r81_t), r81_cond ? (r81_tc = r81_env.newt(), [
                '.begin',
                [
                    '.set',
                    r81_tc,
                    [
                        '.quote',
                        false
                    ]
                ],
                [
                    '.if',
                    r81_cond,
                    [
                        '.begin',
                        r81_pat.assign(r81_t, true),
                        [
                            '.if',
                            r0_ex(r81_guard, r81_env),
                            [
                                '.set',
                                r81_tc,
                                [
                                    '.quote',
                                    true
                                ]
                            ],
                            [
                                '.set',
                                r81_tc,
                                [
                                    '.quote',
                                    false
                                ]
                            ]
                        ]
                    ]
                ],
                [
                    '.if',
                    r81_tc,
                    r0_ex(r81_body, r81_env),
                    r81_f
                ]
            ]) : true ? [
                '.begin',
                r81_pat.assign(r81_t, true),
                [
                    '.if',
                    r0_ex(r81_guard, r81_env),
                    r0_ex(r81_body, r81_env),
                    r81_f
                ]
            ] : void 0) : (r81_any = _r81_t0));
        }
        return [
            '.begin',
            [
                '.set',
                r81_t,
                r0_ex(r81_form[1], r81_env)
            ],
            r81_f
        ];
    });
    r6_externs.macros.put('regex', function _r6_t29(r82_form, r82_env) {
        var r82_form, r82_env, r82_args, r82_s, r82_flag, _r82_t0, _r82_t1, _r82_t2;
        return _r82_t0 = r82_form, _r82_t0 instanceof Array && _r82_t0.length === 2 && 'regex' === _r82_t0[0] && (_r82_t0[1] instanceof Array && _r82_t0[1].length === 2 && '.quote' === _r82_t0[1][0]) ? (r82_s = _r82_t0[1][1], _r82_t0[1], [
            '.quote',
            new RegExp(r82_s)
        ]) : _r82_t0 instanceof Array && _r82_t0.length === 3 && 'regex' === _r82_t0[0] && (_r82_t0[1] instanceof Array && _r82_t0[1].length === 2 && '.quote' === _r82_t0[1][0]) && (_r82_t0[2] instanceof Array && _r82_t0[2].length === 2 && '.quote' === _r82_t0[2][0]) ? (r82_s = _r82_t0[1][1], _r82_t0[1], r82_flag = _r82_t0[2][1], _r82_t0[2], [
            '.quote',
            new RegExp(r82_s, r82_flag)
        ]) : _r82_t0 instanceof Array && _r82_t0.length >= 1 && 'regex' === _r82_t0[0] ? (r82_args = _r82_t0.slice(1), [
            '.new',
            r6_externs.use('RegExp')
        ].concat(r82_args)) : void 0;
    });
    r6_externs.macros.put('define-macro', function _r6_t30(r83_form, r83_env) {
        var r83_form, r83_env, r83_otherwise, r83_op, r83_name, r83_body, r83_ds, r83_macroG, r83_macroFn, r83_str, _r83_t0, _r83_t1, _r83_t2, _r83_t3, _r83_t4, _r83_t5, _r83_t6, _r83_t7, _r83_t8, _r83_t9, _r83_t10;
        _r83_t0 = r83_form;
        if (_r83_t0 instanceof Array && _r83_t0.length === 3 && (_r83_t0[1] instanceof Array && _r83_t0[1].length === 2 && '.quote' === _r83_t0[1][0]))
            return r83_op = _r83_t0[0], r83_str = _r83_t0[1][1], _r83_t0[1], r83_body = _r83_t0[2], r0_ex([
                r83_op,
                r83_str,
                r83_body
            ], r83_env);
        else {
            _r83_t1 = false;
            if (_r83_t0 instanceof Array && _r83_t0.length === 3)
                _r83_t5 = (r83_op = _r83_t0[0], r83_name = _r83_t0[1], r83_body = _r83_t0[2], r0_atom(r83_name) ? _r83_t1 = true : _r83_t1 = false);
            else
                _r83_t5 = void 0;
            if (_r83_t1) {
                r83_ds = new r0_Scope(r83_env);
                r83_ds.declare('ex', true);
                r83_ds.declare('atom', true);
                r83_ds.declare('prim', true);
                r83_ds.declare('formOf', true);
                r83_ds.declare('scopeOf', true);
                r83_ds.declare('definingEnv', true);
                r83_ds.declare('externEnv', true);
                r83_ds.declare('require', true);
                r83_ds.declare('toPattern', true);
                r83_macroG = new Function(r83_ds.castName('ex'), r83_ds.castName('atom'), r83_ds.castName('prim'), r83_ds.castName('formOf'), r83_ds.castName('scopeOf'), r83_ds.castName('definingEnv'), r83_ds.castName('externEnv'), r83_ds.castName('require'), r83_ds.castName('toPattern'), r0_escodegen.generate(r0_patrisika.generate([
                    '.return',
                    r0_ex(r83_body, r83_ds)
                ], r83_ds, function _r83_t7(r84_form) {
                    var r84_form, _r84_t0, _r84_t1;
                    return [
                        '.return',
                        r84_form
                    ];
                })));
                r83_macroFn = r83_macroG(r0_ex, r0_wrapForSyntacticClosure(r0_atom), r0_wrapForSyntacticClosure(r0_prim), function _r83_t8(r85_x) {
                    var r85_x, _r85_t0, _r85_t1;
                    return r85_x[1];
                }, function _r83_t9(r86_x) {
                    var r86_x, _r86_t0, _r86_t1;
                    return r86_x[2];
                }, r83_env, r6_externs, require, r6_toPattern);
                r83_env.macros.put(r83_name, function _r83_t10(r87_c, r87_e) {
                    var r87_c, r87_e, r87_result, r87_s, _r87_t0, _r87_t1;
                    r87_result = r83_macroFn(r87_c, r87_e);
                    r87_s = new r0_Scope(r83_env);
                    r87_s.hanging = r87_e;
                    r87_s.semiparent = r87_e;
                    return r0_ex(r87_result, r87_s);
                });
                return ['.unit'];
            } else
                return r83_otherwise = _r83_t0, ['.unit'];
        }
    });
    r6_externs.macros.put('macro-match', function _r6_t31(r88_form, r88_env) {
        var r88_form, r88_env, r88_otherwise, r88_c, r88_e, r88_patterns, r88_t, r88_tx, r88_tw, _r88_t0, _r88_t1, _r88_t2, _r88_t3;
        _r88_t0 = r88_form;
        if (_r88_t0 instanceof Array && _r88_t0.length >= 3 && 'macro-match' === _r88_t0[0]) {
            r88_c = _r88_t0[1];
            r88_e = _r88_t0[2];
            r88_patterns = _r88_t0.slice(3);
            r88_t = r88_env.newt();
            r88_tx = r88_env.newt();
            r88_tw = r88_env.newt();
            return [
                '.begin',
                [
                    '.set',
                    r88_t,
                    r88_e
                ],
                [
                    '.set',
                    r88_tw,
                    [
                        '.lambda',
                        [r88_tx],
                        [
                            '.return',
                            [
                                '.list',
                                [
                                    '.quote',
                                    '.syntactic-closure'
                                ],
                                r88_tx,
                                r88_t
                            ]
                        ]
                    ]
                ],
                r6_externs.macros.get('match')([
                    'match',
                    r88_c
                ].concat(r88_patterns), r88_env, r88_tw)
            ];
        } else
            return r88_otherwise = _r88_t0, ['.unit'];
    });
    r0_ex(require('./essential-macros.json'), r6_externs);
    r6_externs.pFamily = 'r';
    return r6_externs;
};
exports.Create = r0_Create;
