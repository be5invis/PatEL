var r1_patrisika, r1_atom, r1_identifier, r1_prim, r1_Scope, r1_escodegen, r1_util, r1_ex, r1_deQuasiquote, r1_opSegToRegular, r1_FormInvalidError, r1_wrapForSyntacticClosure, r1_Create, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4;
r1_patrisika = require('patrisika'), r1_atom = function _r1_t0(r61_x) {
    var r61_x;
    return typeof r61_x === 'string';
}, r1_identifier = function _r1_t1(r62_x) {
    var r62_x;
    return r1_atom(r62_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r62_x);
}, r1_prim = function _r1_t2(r63_x) {
    var r63_x;
    return r1_atom(r63_x) && !r1_identifier(r63_x);
}, r1_Scope = require('patrisika').Scope, r1_escodegen = require('escodegen'), r1_util = require('util'), r1_ex = require('./ex').ex, r1_deQuasiquote = require('./ex').deQuasiquote, r1_opSegToRegular = require('./ex').opSegToRegular, r1_FormInvalidError = r1_patrisika.FormInvalidError, r1_wrapForSyntacticClosure = function _r1_t3(r64_fn) {
    var r64_fn;
    return function _r64_t2(r65_x) {
        var r65_x, r65_c, r65_e, _r65_t0;
        return _r65_t0 = r65_x, Array.isArray(_r65_t0) && _r65_t0.length === 3 && '.syntactic-closure' === _r65_t0[0] ? (r65_c = _r65_t0[1], r65_e = _r65_t0[2], r64_fn(r65_c)) : r64_fn(r65_x);
    };
}, r1_Create = function _r1_t4() {
    var r66_externs, r66_operatorRename, r66_reportInvalid, r66_AssignWithMod, r66_Assign, r66_toPattern, r66_boole;
    return r66_externs = r1_patrisika.DefaultExterns(), r66_externs.castName = function _r66_t2(r67_name) {
        var r67_name;
        return r67_name;
    }, r66_externs.declare('require'), r66_externs.declare('exports'), r66_externs.declare('process'), r66_externs.declare('module'), r66_externs.declare('Error'), r66_operatorRename = function _r66_t3(r68_op) {
        var r68_op;
        return function _r68_t2(r69_form, r69_env) {
            var r69_form, r69_env;
            return r1_ex([r68_op].concat(r69_form.slice(1)), r69_env);
        };
    }, r66_reportInvalid = function _r66_t4(r70_form, r70_reason) {
        var r70_form, r70_reason;
        throw new r1_FormInvalidError(r70_form, r70_reason);
    }, r66_externs.macros.put('begin', r66_operatorRename('.begin')), r66_externs.macros.put('then', r66_operatorRename('.begin')), r66_externs.macros.put('else', r66_operatorRename('.begin')), r66_externs.macros.put('while', r66_operatorRename('.while')), r66_externs.macros.put('try', r66_operatorRename('.try')), r66_externs.macros.put('is', r66_operatorRename('.is')), r66_externs.macros.put('<@', r66_operatorRename('.is')), r66_externs.macros.put('new', r66_operatorRename('.new')), r66_externs.macros.put('this', r66_operatorRename('.thisp')), r66_externs.macros.put('arguments', r66_operatorRename('.argsp')), r66_externs.macros.put('and', r66_operatorRename('&&')), r66_externs.macros.put('or', r66_operatorRename('||')), r66_externs.macros.put('not', r66_operatorRename('!')), r66_externs.macros.put('return', r66_operatorRename('.return')), r66_externs.macros.put('yield', r66_operatorRename('.yield')), r66_externs.macros.put('throw', r66_operatorRename('.throw')), r66_externs.macros.put('list', r66_operatorRename('.list')), r66_externs.macros.put('typeof', r66_operatorRename('.typeof')), r66_externs.macros.put('quasiquote', r66_operatorRename('.quasiquote')), r66_externs.macros.put('syntax', r66_operatorRename('.quasiquote')), r66_externs.macros.put('lambda', function _r66_t5(r71_form, r71_env) {
        var r71_form, r71_env, r71_otherwise, r71_car, r71_body, r71_parameters, _r71_t0, _r71_t1;
        return _r71_t0 = r71_form, _r71_t1 = !1, Array.isArray(_r71_t0) && _r71_t0.length === 3 && (r71_car = _r71_t0[0], r71_parameters = _r71_t0[1], r71_body = _r71_t0[2], r1_atom(r71_parameters) ? _r71_t1 = !0 : _r71_t1 = !1), _r71_t1 ? r1_ex([
            '.lambda',
            [r71_parameters],
            r71_body
        ], r71_env) : Array.isArray(_r71_t0) && _r71_t0.length === 3 ? (r71_car = _r71_t0[0], r71_parameters = _r71_t0[1], r71_body = _r71_t0[2], r1_ex([
            '.lambda',
            r71_parameters,
            r71_body
        ], r71_env)) : Array.isArray(_r71_t0) && _r71_t0.length === 2 ? (r71_car = _r71_t0[0], r71_body = _r71_t0[1], r1_ex([
            '.lambda',
            [],
            r71_body
        ], r71_env)) : Array.isArray(_r71_t0) && _r71_t0.length === 1 ? (r71_car = _r71_t0[0], r1_ex([
            '.lambda',
            [],
            ['.unit']
        ], r71_body)) : (r71_otherwise = _r71_t0, r66_reportInvalid(r71_otherwise, 'Invalid Lambda Formation'));
    }), r66_externs.macros.put('function', r66_externs.macros.get('lambda')), r66_externs.macros.put('->', r66_externs.macros.get('lambda')), r66_externs.macros.put('=>', r66_externs.macros.get('lambda')), r66_externs.operatorInfo.put('->', {
        'priority': 900,
        'associvity': 'right'
    }), r66_externs.operatorInfo.put('=>', {
        'priority': 950,
        'associvity': 'right'
    }), r66_externs.macros.put('if', function _r66_t6(r72_form, r72_env) {
        var r72_form, r72_env, r72_otherwise, r72_test, r72_consequents, r72_alternates, r72_consequent, r72_alternate, _r72_t0;
        return _r72_t0 = r72_form, Array.isArray(_r72_t0) && _r72_t0.length === 3 && 'if' === _r72_t0[0] ? (r72_test = _r72_t0[1], r72_consequent = _r72_t0[2], r1_ex([
            '.if',
            r72_test,
            r72_consequent
        ], r72_env)) : Array.isArray(_r72_t0) && _r72_t0.length === 4 && 'if' === _r72_t0[0] ? (r72_test = _r72_t0[1], r72_consequent = _r72_t0[2], r72_alternate = _r72_t0[3], r1_ex([
            '.if',
            r72_test,
            r72_consequent,
            r72_alternate
        ], r72_env)) : Array.isArray(_r72_t0) && _r72_t0.length === 3 && 'if' === _r72_t0[0] && Array.isArray(_r72_t0[2]) && _r72_t0[2].length >= 1 && 'then' === _r72_t0[2][0] ? (r72_test = _r72_t0[1], r72_consequents = _r72_t0[2].slice(1), _r72_t0[2], r1_ex([
            '.if',
            r72_test,
            ['.begin'].concat(r72_consequents)
        ], r72_env)) : Array.isArray(_r72_t0) && _r72_t0.length === 4 && 'if' === _r72_t0[0] && Array.isArray(_r72_t0[2]) && _r72_t0[2].length >= 1 && 'then' === _r72_t0[2][0] && Array.isArray(_r72_t0[3]) && _r72_t0[3].length >= 1 && 'else' === _r72_t0[3][0] ? (r72_test = _r72_t0[1], r72_consequents = _r72_t0[2].slice(1), _r72_t0[2], r72_alternates = _r72_t0[3].slice(1), _r72_t0[3], r1_ex([
            '.if',
            r72_test,
            ['.begin'].concat(r72_consequents),
            ['.begin'].concat(r72_alternates)
        ], r72_env)) : (r72_otherwise = _r72_t0, r66_reportInvalid(r72_otherwise, 'Invalid Conditional Form'));
    }), r66_externs.macros.put('let', function _r66_t7(r73_form, r73_env) {
        var r73_form, r73_env, r73_pairs, r73_args, r73_paras, r73_j, r73_arg, r73_param, r73_useless, _r73_t0, _r73_t1;
        for (r73_pairs = r73_form.slice(1, -1), r73_args = [], r73_paras = [], r73_j = 0; r73_j < r73_pairs.length; r73_j += 1)
            _r73_t0 = r73_pairs[r73_j], Array.isArray(_r73_t0) && _r73_t0.length >= 2 ? (r73_arg = _r73_t0[0], r73_param = _r73_t0[1], r73_useless = _r73_t0.slice(2), r73_args.push(r73_arg), r73_paras.push(r73_param)) : Array.isArray(_r73_t0) && _r73_t0.length === 2 ? (r73_arg = _r73_t0[0], r73_param = _r73_t0[1], r73_args.push(r73_arg), r73_paras.push(r73_param)) : (_r73_t1 = !1, Array.isArray(_r73_t0) && _r73_t0.length === 1 && (r73_arg = _r73_t0[0], r1_atom(r73_arg) ? _r73_t1 = !0 : _r73_t1 = !1), _r73_t1 && (r73_args.push(r73_arg), r73_paras.push(r73_env.use(r73_arg))));
        return r1_ex([
            '.beta',
            r73_args,
            r73_form[r73_form.length - 1]
        ].concat(r73_paras), r73_env);
    }), r66_externs.macros.put('object', function _r66_t8(r74_form, r74_env) {
        var r74_form, r74_env, r74_pairs;
        return r74_pairs = r74_form.slice(1).map(function _r74_t2(r75_pair) {
            var r75_pair, r75_method, r75_param, r75_value, r75_property, _r75_t0, _r75_t1, _r75_t2, _r75_t3, _r75_t4, _r75_t5, _r75_t6, _r75_t7;
            return _r75_t0 = r75_pair, _r75_t7 = !1, Array.isArray(_r75_t0) && _r75_t0.length === 3 && '=' === _r75_t0[0] && (r75_property = _r75_t0[1], r75_value = _r75_t0[2], r1_atom(r75_property) ? _r75_t7 = !0 : _r75_t7 = !1), _r75_t7 ? [
                [
                    '.quote',
                    r75_property
                ],
                r75_value
            ] : (_r75_t6 = !1, Array.isArray(_r75_t0) && _r75_t0.length === 3 && '=' === _r75_t0[0] && (r75_property = _r75_t0[1], r75_value = _r75_t0[2], r1_atom(r75_property) ? _r75_t6 = !0 : _r75_t6 = !1), _r75_t6 ? [
                [
                    '.quote',
                    r75_property
                ],
                r75_value
            ] : (_r75_t5 = !1, Array.isArray(_r75_t0) && _r75_t0.length === 2 && (r75_property = _r75_t0[0], r75_value = _r75_t0[1], r1_atom(r75_property) ? _r75_t5 = !0 : _r75_t5 = !1), _r75_t5 ? [
                [
                    '.quote',
                    r75_property
                ],
                r75_value
            ] : (_r75_t4 = !1, Array.isArray(_r75_t0) && _r75_t0.length === 1 && (r75_property = _r75_t0[0], r1_atom(r75_property) ? _r75_t4 = !0 : _r75_t4 = !1), _r75_t4 ? [
                [
                    '.quote',
                    r75_property
                ],
                r75_property
            ] : (r75_property = _r75_t0, r1_atom(r75_property) ? [
                [
                    '.quote',
                    r75_property
                ],
                r75_property
            ] : Array.isArray(_r75_t0) && _r75_t0.length === 3 && '=' === _r75_t0[0] && Array.isArray(_r75_t0[1]) && _r75_t0[1].length === 2 && '.quote' === _r75_t0[1][0] ? (r75_property = _r75_t0[1][1], _r75_t0[1], r75_value = _r75_t0[2], [
                [
                    '.quote',
                    r75_property
                ],
                r75_value
            ]) : Array.isArray(_r75_t0) && _r75_t0.length === 3 && '=' === _r75_t0[0] && Array.isArray(_r75_t0[1]) && _r75_t0[1].length === 2 && '.quote' === _r75_t0[1][0] ? (r75_property = _r75_t0[1][1], _r75_t0[1], r75_value = _r75_t0[2], [
                [
                    '.quote',
                    r75_property
                ],
                r75_value
            ]) : Array.isArray(_r75_t0) && _r75_t0.length === 2 && Array.isArray(_r75_t0[0]) && _r75_t0[0].length === 2 && '.quote' === _r75_t0[0][0] ? (r75_property = _r75_t0[0][1], _r75_t0[0], r75_value = _r75_t0[1], [
                [
                    '.quote',
                    r75_property
                ],
                r75_value
            ]) : (_r75_t3 = !1, Array.isArray(_r75_t0) && _r75_t0.length === 3 && '=' === _r75_t0[0] && Array.isArray(_r75_t0[1]) && _r75_t0[1].length >= 1 && (r75_method = _r75_t0[1][0], r75_param = _r75_t0[1].slice(1), _r75_t0[1], r75_value = _r75_t0[2], r1_atom(r75_method) ? _r75_t3 = !0 : _r75_t3 = !1), _r75_t3 ? [
                [
                    '.quote',
                    r75_method
                ],
                [
                    '.lambda',
                    r75_param,
                    r75_value
                ]
            ] : (_r75_t2 = !1, Array.isArray(_r75_t0) && _r75_t0.length === 3 && '=' === _r75_t0[0] && Array.isArray(_r75_t0[1]) && _r75_t0[1].length >= 1 && (r75_method = _r75_t0[1][0], r75_param = _r75_t0[1].slice(1), _r75_t0[1], r75_value = _r75_t0[2], r1_atom(r75_method) ? _r75_t2 = !0 : _r75_t2 = !1), _r75_t2 ? [
                [
                    '.quote',
                    r75_method
                ],
                [
                    '.lambda',
                    r75_param,
                    r75_value
                ]
            ] : (_r75_t1 = !1, Array.isArray(_r75_t0) && _r75_t0.length === 2 && Array.isArray(_r75_t0[0]) && _r75_t0[0].length >= 1 && (r75_method = _r75_t0[0][0], r75_param = _r75_t0[0].slice(1), _r75_t0[0], r75_value = _r75_t0[1], r1_atom(r75_method) ? _r75_t1 = !0 : _r75_t1 = !1), _r75_t1 ? [
                [
                    '.quote',
                    r75_method
                ],
                [
                    '.lambda',
                    r75_param,
                    r75_value
                ]
            ] : void 0)))))));
        }), r1_ex(['.xhash'].concat(r74_pairs.filter(function _r74_t3(r76_x) {
            var r76_x;
            return r76_x;
        })), r74_env);
    }), r66_externs.macros.get('list').toPattern = function _r66_t9(r77_form, r77_env, r77_wrapper) {
        var r77_form, r77_env, r77_wrapper;
        return r66_toPattern(['.list'].concat(r77_form.slice(1)), r77_env, r77_wrapper);
    }, r66_externs.macros.get('object').toPattern = function _r66_t10(r78_form, r78_env, r78_wrapper) {
        var r78_form, r78_env, r78_wrapper, r78_pairs;
        return r78_pairs = r78_form.slice(1).map(function _r78_t2(r79_pair) {
            var r79_pair, r79_property, r79_value, _r79_t0, _r79_t1, _r79_t2, _r79_t3, _r79_t4;
            if (_r79_t0 = r79_pair, _r79_t4 = !1, Array.isArray(_r79_t0) && _r79_t0.length === 3 && '=' === _r79_t0[0] && (r79_property = _r79_t0[1], r79_value = _r79_t0[2], r1_atom(r79_property) ? _r79_t4 = !0 : _r79_t4 = !1), _r79_t4)
                return [
                    r79_property,
                    r79_value
                ];
            else if (_r79_t3 = !1, Array.isArray(_r79_t0) && _r79_t0.length === 3 && '=' === _r79_t0[0] && (r79_property = _r79_t0[1], r79_value = _r79_t0[2], r1_atom(r79_property) ? _r79_t3 = !0 : _r79_t3 = !1), _r79_t3)
                return [
                    r79_property,
                    r79_value
                ];
            else if (_r79_t2 = !1, Array.isArray(_r79_t0) && _r79_t0.length === 2 && (r79_property = _r79_t0[0], r79_value = _r79_t0[1], r1_atom(r79_property) ? _r79_t2 = !0 : _r79_t2 = !1), _r79_t2)
                return [
                    r79_property,
                    r79_value
                ];
            else if (_r79_t1 = !1, Array.isArray(_r79_t0) && _r79_t0.length === 1 && (r79_property = _r79_t0[0], r1_atom(r79_property) ? _r79_t1 = !0 : _r79_t1 = !1), _r79_t1)
                return [
                    r79_property,
                    r79_property
                ];
            else if (r79_property = _r79_t0, r1_atom(r79_property))
                return [
                    r79_property,
                    r79_property
                ];
            else if (Array.isArray(_r79_t0) && _r79_t0.length === 3 && '=' === _r79_t0[0] && Array.isArray(_r79_t0[1]) && _r79_t0[1].length === 2 && '.quote' === _r79_t0[1][0])
                return r79_property = _r79_t0[1][1], _r79_t0[1], r79_value = _r79_t0[2], [
                    r79_property,
                    r79_value
                ];
            else if (Array.isArray(_r79_t0) && _r79_t0.length === 3 && '=' === _r79_t0[0] && Array.isArray(_r79_t0[1]) && _r79_t0[1].length === 2 && '.quote' === _r79_t0[1][0])
                return r79_property = _r79_t0[1][1], _r79_t0[1], r79_value = _r79_t0[2], [
                    r79_property,
                    r79_value
                ];
            else if (Array.isArray(_r79_t0) && _r79_t0.length === 2 && Array.isArray(_r79_t0[0]) && _r79_t0[0].length === 2 && '.quote' === _r79_t0[0][0])
                return r79_property = _r79_t0[0][1], _r79_t0[0], r79_value = _r79_t0[1], [
                    r79_property,
                    r79_value
                ];
            else
                throw new r1_FormInvalidError(r78_form, 'Invalid Assignment Left-hand Side');
        }), r66_toPattern(['.hash'].concat(r78_pairs), r78_env, r78_wrapper);
    }, r66_externs.macros.put('piecewise', function _r66_t11(r80_form, r80_env) {
        var r80_form, r80_env, r80_pairs, r80_f, r80_j, r80_otherwise, r80_condition, r80_consequent, _r80_t0, _r80_t1;
        if (_r80_t0 = r80_form, Array.isArray(_r80_t0) && _r80_t0.length >= 1 && 'piecewise' === _r80_t0[0]) {
            for (r80_pairs = _r80_t0.slice(1), r80_f = ['.unit'], r80_j = r80_pairs.length - 1; r80_j >= 0; r80_j -= 1) {
                if (_r80_t1 = r80_pairs[r80_j], !(Array.isArray(_r80_t1) && _r80_t1.length === 2))
                    throw r80_otherwise = _r80_t1, new r1_FormInvalidError(r80_otherwise, 'Invalid Piecewise Segment');
                r80_condition = _r80_t1[0], r80_consequent = _r80_t1[1], r80_f = [
                    '.if',
                    r1_ex(r80_condition, r80_env),
                    r1_ex(r80_consequent, r80_env),
                    r80_f
                ];
            }
            return r80_f;
        } else
            return void 0;
    }), r66_AssignWithMod = function _r66_t12(r81_left, r81_right, r81_mod, r81_env, r81_locallyQ) {
        var r81_left, r81_right, r81_mod, r81_env, r81_locallyQ, r81_callee, r81_paras, r81_pat, r81_t, r81_whatever, r81_a, r81_e, r81_id, _r81_t0, _r81_t1, _r81_t2, _r81_t3, _r81_t4, _r81_t5;
        if (_r81_t0 = r81_left, r81_id = _r81_t0, r1_atom(r81_id))
            return r81_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r81_id
                ], r81_env),
                r1_ex([
                    r81_mod,
                    r81_right
                ], r81_env)
            ] : [
                '.set',
                r1_ex(r81_left, r81_env),
                r1_ex([
                    r81_mod,
                    r81_right
                ], r81_env)
            ];
        else if (_r81_t5 = !1, Array.isArray(_r81_t0) && _r81_t0.length === 2 && '.id' === _r81_t0[0] && (r81_id = _r81_t0[1], r1_atom(r81_id) ? _r81_t5 = !0 : _r81_t5 = !1), _r81_t5)
            return r81_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r81_id
                ], r81_env),
                r1_ex([
                    r81_mod,
                    r81_right
                ], r81_env)
            ] : [
                '.set',
                r1_ex(r81_left, r81_env),
                r1_ex([
                    r81_mod,
                    r81_right
                ], r81_env)
            ];
        else if (_r81_t4 = !1, Array.isArray(_r81_t0) && _r81_t0.length === 3 && '.id' === _r81_t0[0] && (r81_id = _r81_t0[1], r81_e = _r81_t0[2], r1_atom(r81_id) && (r81_e === r81_env || !r81_locallyQ) ? _r81_t4 = !0 : _r81_t4 = !1), _r81_t4)
            return r81_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r81_id
                ], r81_e),
                r1_ex([
                    r81_mod,
                    r81_right
                ], r81_e)
            ] : [
                '.set',
                r1_ex(r81_left, r81_e),
                r1_ex([
                    r81_mod,
                    r81_right
                ], r81_e)
            ];
        else if (_r81_t3 = !1, Array.isArray(_r81_t0) && _r81_t0.length === 3 && '.id' === _r81_t0[0] && (r81_id = _r81_t0[1], r81_e = _r81_t0[2], r1_atom(r81_id) && r81_e !== r81_env && r81_locallyQ ? _r81_t3 = !0 : _r81_t3 = !1), _r81_t3)
            throw new r1_FormInvalidError(r81_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r81_t0) && _r81_t0.length === 2 && '.local' === _r81_t0[0])
            return r81_a = _r81_t0[1], r66_AssignWithMod(r81_a, r81_right, r81_mod, r81_env, !0);
        else if (_r81_t2 = !1, Array.isArray(_r81_t0) && _r81_t0.length === 3 && '.syntactic-closure' === _r81_t0[0] && (r81_a = _r81_t0[1], r81_e = _r81_t0[2], r81_e === r81_env || !r81_locallyQ ? _r81_t2 = !0 : _r81_t2 = !1), _r81_t2)
            return r66_AssignWithMod(r81_a, r81_right, r81_mod, r81_env, r81_locallyQ);
        else if (_r81_t1 = !1, Array.isArray(_r81_t0) && _r81_t0.length === 3 && '.syntactic-closure' === _r81_t0[0] && (r81_a = _r81_t0[1], r81_e = _r81_t0[2], r81_e !== r81_env && r81_locallyQ ? _r81_t1 = !0 : _r81_t1 = !1), _r81_t1)
            throw new r1_FormInvalidError(r81_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.revcall' === _r81_t0[0])
            return r81_whatever = _r81_t0.slice(1), r66_AssignWithMod([].concat(r81_whatever), r81_right, r81_mod, r81_env, r81_locallyQ);
        else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1)
            if (r81_callee = _r81_t0[0], r81_paras = _r81_t0.slice(1), r1_atom(r81_callee) && r81_env.macros.has(r81_callee) && r81_env.macros.get(r81_callee).toPattern)
                return r81_pat = r66_toPattern(r81_left, r81_env), r81_t = r81_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r81_t,
                        r1_ex([
                            r81_mod,
                            r81_right
                        ], r81_env)
                    ],
                    r81_pat.assign(r81_t, r81_locallyQ)
                ];
            else if (r1_atom(r81_callee) && r81_env.macros.has(r81_callee))
                throw new r1_FormInvalidError(r81_left, 'Invalid Assignment Left-hand Side');
            else
                return r1_prim(r81_callee) ? [
                    '.set',
                    r1_ex(r81_left, r81_env),
                    r1_ex([
                        r81_mod,
                        r81_right
                    ], r81_env)
                ] : r1_atom(r81_callee) ? r81_locallyQ ? [
                    '.set',
                    r1_ex([
                        '.local',
                        r81_callee
                    ], r81_env),
                    r1_ex([
                        r81_mod,
                        [
                            '.lambda',
                            [].concat(r81_paras),
                            r81_right
                        ]
                    ], r81_env)
                ] : [
                    '.set',
                    r1_ex(r81_callee, r81_env),
                    r1_ex([
                        r81_mod,
                        [
                            '.lambda',
                            [].concat(r81_paras),
                            r81_right
                        ]
                    ], r81_env)
                ] : [
                    '.set',
                    r1_ex(r81_callee, r81_env),
                    r1_ex([
                        r81_mod,
                        [
                            '.lambda',
                            [].concat(r81_paras),
                            r81_right
                        ]
                    ], r81_env)
                ];
        else
            throw new r1_FormInvalidError(r81_left, 'Invalid Assignment Left-hand Side');
    }, r66_Assign = function _r66_t13(r82_left, r82_right, r82_env, r82_locallyQ) {
        var r82_left, r82_right, r82_env, r82_locallyQ;
        return r66_AssignWithMod(r82_left, r82_right, '.unquote', r82_env, r82_locallyQ);
    }, r66_externs.macros.put('define', function _r66_t14(r83_form, r83_env) {
        var r83_form, r83_env, r83_any, r83_op, r83_left, r83_right, r83_modifer, _r83_t0, _r83_t1;
        if (_r83_t0 = r83_form, Array.isArray(_r83_t0) && _r83_t0.length === 4)
            return r83_op = _r83_t0[0], r83_modifer = _r83_t0[1], r83_left = _r83_t0[2], r83_right = _r83_t0[3], r66_AssignWithMod(r83_left, r83_right, r83_modifer, r83_env, !0);
        else if (Array.isArray(_r83_t0) && _r83_t0.length === 3)
            return r83_op = _r83_t0[0], r83_left = _r83_t0[1], r83_right = _r83_t0[2], r66_Assign(r83_left, r83_right, r83_env, !0);
        else if (_r83_t1 = !1, Array.isArray(_r83_t0) && _r83_t0.length === 2 && (r83_op = _r83_t0[0], r83_left = _r83_t0[1], r1_atom(r83_left) ? _r83_t1 = !0 : _r83_t1 = !1), _r83_t1)
            return [
                '.local',
                r83_left
            ];
        else
            throw r83_any = _r83_t0, new r1_FormInvalidError(r83_any, 'Invalid Assignment');
    }), r66_externs.macros.put('local', r66_externs.macros.get('define')), r66_externs.macros.put('set', function _r66_t15(r84_form, r84_env) {
        var r84_form, r84_env, r84_any, r84_op, r84_left, r84_right, _r84_t0;
        if (_r84_t0 = r84_form, Array.isArray(_r84_t0) && _r84_t0.length === 3)
            return r84_op = _r84_t0[0], r84_left = _r84_t0[1], r84_right = _r84_t0[2], r66_Assign(r84_left, r84_right, r84_env, !1);
        else
            throw r84_any = _r84_t0, new r1_FormInvalidError(r84_any, 'Invalid Assignment');
    }), r66_externs.macros.put('=', r66_externs.macros.get('set')), r66_externs.macros.put('inc', function _r66_t16(r85_form, r85_env) {
        var r85_form, r85_env, r85_op, r85_id, r85_shift, _r85_t0;
        return _r85_t0 = r85_form, Array.isArray(_r85_t0) && _r85_t0.length === 2 ? (r85_op = _r85_t0[0], r85_id = _r85_t0[1], r66_Assign(r85_id, [
            '+',
            r85_id,
            [
                '.quote',
                1
            ]
        ], r85_env, !1)) : Array.isArray(_r85_t0) && _r85_t0.length === 3 ? (r85_op = _r85_t0[0], r85_id = _r85_t0[1], r85_shift = _r85_t0[2], r66_Assign(r85_id, [
            '+',
            r85_id,
            r85_shift
        ], r85_env, !1)) : Array.isArray(_r85_t0) && _r85_t0.length === 4 && 'by' === _r85_t0[2] ? (r85_op = _r85_t0[0], r85_id = _r85_t0[1], r85_shift = _r85_t0[3], r66_Assign(r85_id, [
            '+',
            r85_id,
            r85_shift
        ], r85_env, !1)) : void 0;
    }), r66_externs.macros.put('dec', function _r66_t17(r86_form, r86_env) {
        var r86_form, r86_env, r86_op, r86_id, r86_shift, _r86_t0;
        return _r86_t0 = r86_form, Array.isArray(_r86_t0) && _r86_t0.length === 2 ? (r86_op = _r86_t0[0], r86_id = _r86_t0[1], r66_Assign(r86_id, [
            '-',
            r86_id,
            [
                '.quote',
                1
            ]
        ], r86_env, !1)) : Array.isArray(_r86_t0) && _r86_t0.length === 3 ? (r86_op = _r86_t0[0], r86_id = _r86_t0[1], r86_shift = _r86_t0[2], r66_Assign(r86_id, [
            '-',
            r86_id,
            r86_shift
        ], r86_env, !1)) : Array.isArray(_r86_t0) && _r86_t0.length === 4 && 'by' === _r86_t0[2] ? (r86_op = _r86_t0[0], r86_id = _r86_t0[1], r86_shift = _r86_t0[3], r66_Assign(r86_id, [
            '-',
            r86_id,
            r86_shift
        ], r86_env, !1)) : void 0;
    }), r66_externs.macros.put('for', function _r66_t18(r87_form, r87_env) {
        var r87_form, r87_env, r87_init, r87_test, r87_step, r87_body, _r87_t0;
        return _r87_t0 = r87_form, Array.isArray(_r87_t0) && _r87_t0.length === 5 && 'for' === _r87_t0[0] ? (r87_init = _r87_t0[1], r87_test = _r87_t0[2], r87_step = _r87_t0[3], r87_body = _r87_t0[4], [
            '.begin',
            r1_ex(r87_init, r87_env),
            [
                '.while',
                r1_ex(r87_test, r87_env),
                [
                    '.begin',
                    r1_ex(r87_body, r87_env),
                    r1_ex(r87_step, r87_env)
                ]
            ]
        ]) : void 0;
    }), r66_externs.macros.put('this', ['.thisp']), r66_externs.macros.put('arguments', ['.argsp']), r66_externs.macros.put('nothing', ['.unit']), r66_externs.macros.put('undefined', ['.unit']), r66_externs.macros.put('null', [
        '.quote',
        null
    ]), r66_externs.macros.put('true', [
        '.quote',
        !0
    ]), r66_externs.macros.put('false', [
        '.quote',
        !1
    ]), r66_toPattern = function _r66_t19(r88_pattern, r88_env, r88_wrapper) {
        var r88_pattern, r88_env, r88_wrapper, r88_callee, r88_subpatterns, r88_ms, r88_t, r88_whatever, r88_x, r88_id, _r88_t0, _r88_t1;
        if (_r88_t0 = r88_pattern, r88_id = _r88_t0, r1_atom(r88_id))
            return {
                'whether': function _r88_t5(r100_x) {
                    var r100_x;
                    return null;
                },
                'assign': function _r88_t6(r101_x, r101_locallyQ) {
                    var r101_x, r101_locallyQ;
                    return [
                        '.set',
                        r1_ex(r101_locallyQ ? [
                            '.local',
                            r88_id
                        ] : r88_id, r88_env),
                        r88_wrapper ? [
                            r88_wrapper,
                            r101_x
                        ] : r101_x
                    ];
                }
            };
        else if (_r88_t1 = !1, Array.isArray(_r88_t0) && _r88_t0.length === 2 && '.id' === _r88_t0[0] && (r88_id = _r88_t0[1], r1_atom(r88_id) ? _r88_t1 = !0 : _r88_t1 = !1), _r88_t1)
            return {
                'whether': function _r88_t8(r98_x) {
                    var r98_x;
                    return null;
                },
                'assign': function _r88_t9(r99_x, r99_locallyQ) {
                    var r99_x, r99_locallyQ;
                    return [
                        '.set',
                        r1_ex(r99_locallyQ ? [
                            '.local',
                            r88_id
                        ] : r88_id, r88_env),
                        r88_wrapper ? [
                            r88_wrapper,
                            r99_x
                        ] : r99_x
                    ];
                }
            };
        else if (Array.isArray(_r88_t0) && _r88_t0.length === 2 && '.quote' === _r88_t0[0])
            return r88_x = _r88_t0[1], {
                'whether': function _r88_t11(r96_x) {
                    var r96_x;
                    return [
                        '===',
                        r1_ex(r88_pattern, r88_env),
                        r96_x
                    ];
                },
                'assign': function _r88_t12(r97_x, r97_locallyQ) {
                    var r97_x, r97_locallyQ;
                    return ['.unit'];
                }
            };
        else if (Array.isArray(_r88_t0) && _r88_t0.length >= 1 && '.' === _r88_t0[0])
            return r88_whatever = _r88_t0.slice(1), {
                'whether': function _r88_t14(r94_x) {
                    var r94_x;
                    return null;
                },
                'assign': function _r88_t15(r95_x, r95_locallyQ) {
                    var r95_x, r95_locallyQ;
                    return [
                        '.set',
                        r1_ex(r88_pattern, r88_env),
                        r88_wrapper ? [
                            r88_wrapper,
                            r95_x
                        ] : r95_x
                    ];
                }
            };
        else if (Array.isArray(_r88_t0) && _r88_t0.length >= 1)
            if (r88_callee = _r88_t0[0], r88_subpatterns = _r88_t0.slice(1), r1_atom(r88_callee) && r88_env.macros.has(r88_callee) && r88_env.macros.get(r88_callee).toPattern)
                return r88_env.macros.get(r88_callee).toPattern(r88_pattern, r88_env, r88_wrapper);
            else if (r1_atom(r88_callee) && r88_env.macros.has(r88_callee))
                throw new r1_FormInvalidError(r88_pattern, 'Invalid Pattern');
            else
                return r88_ms = r88_subpatterns.map(function _r88_t20(r89_x) {
                    var r89_x;
                    return r66_toPattern(r89_x, r88_env, r88_wrapper);
                }), r88_t = r88_env.newt(), {
                    'whether': function _r88_t21(r90_x) {
                        var r90_x;
                        return [
                            '&&',
                            [
                                '.set',
                                r88_t,
                                [
                                    [
                                        '.',
                                        r1_ex(r88_callee, r88_env),
                                        [
                                            '.quote',
                                            'unapply'
                                        ]
                                    ],
                                    r90_x,
                                    [
                                        '.quote',
                                        r88_ms.length
                                    ]
                                ]
                            ]
                        ].concat(r88_ms.map(function _r90_t2(r91_p, r91_j) {
                            var r91_p, r91_j;
                            return r91_p.whether([
                                '.',
                                r88_t,
                                [
                                    '.quote',
                                    r91_j
                                ]
                            ]);
                        })).filter(r66_boole);
                    },
                    'assign': function _r88_t22(r92_x, r92_locallyQ) {
                        var r92_x, r92_locallyQ;
                        return ['.begin'].concat(r88_ms.map(function _r92_t2(r93_p, r93_j) {
                            var r93_p, r93_j;
                            return r93_p.assign([
                                '.',
                                r88_t,
                                [
                                    '.quote',
                                    r93_j
                                ]
                            ], r92_locallyQ);
                        }));
                    }
                };
        else
            return void 0;
    }, r66_externs.macros.put('.list', {}), r66_externs.macros.get('.list').toPattern = function _r66_t20(r102_pattern, r102_env, r102_wrapper) {
        var r102_pattern, r102_env, r102_wrapper, r102_subpatterns, r102_ms, _r102_t0;
        return _r102_t0 = r102_pattern, Array.isArray(_r102_t0) && _r102_t0.length >= 1 && '.list' === _r102_t0[0] ? (r102_subpatterns = _r102_t0.slice(1), r102_ms = r102_subpatterns.map(function _r102_t4(r103_x) {
            var r103_x;
            return r66_toPattern(r103_x, r102_env, r102_wrapper);
        }), {
            'whether': function _r102_t5(r104_x) {
                var r104_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r66_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r104_x
                    ],
                    [
                        '===',
                        [
                            '.',
                            r104_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r102_ms.length
                        ]
                    ]
                ].concat(r102_ms.map(function _r104_t2(r105_p, r105_j) {
                    var r105_p, r105_j;
                    return r105_p.whether([
                        '.',
                        r104_x,
                        [
                            '.quote',
                            r105_j
                        ]
                    ]);
                })).filter(r66_boole);
            },
            'assign': function _r102_t6(r106_x, r106_locallyQ) {
                var r106_x, r106_locallyQ;
                return ['.begin'].concat(r102_ms.map(function _r106_t2(r107_p, r107_j) {
                    var r107_p, r107_j;
                    return r107_p.assign([
                        '.',
                        r106_x,
                        [
                            '.quote',
                            r107_j
                        ]
                    ], r106_locallyQ);
                }).concat([r106_x]));
            }
        }) : void 0;
    }, r66_externs.macros.put('.conslist', {}), r66_externs.macros.get('.conslist').toPattern = function _r66_t21(r108_pattern, r108_env, r108_wrapper) {
        var r108_pattern, r108_env, r108_wrapper, r108_subpatterns, r108_ms, r108_final, _r108_t0;
        return _r108_t0 = r108_pattern, Array.isArray(_r108_t0) && _r108_t0.length >= 1 && '.conslist' === _r108_t0[0] ? (r108_subpatterns = _r108_t0.slice(1), r108_ms = r108_pattern.slice(1, -1).map(function _r108_t4(r109_x) {
            var r109_x;
            return r66_toPattern(r109_x, r108_env, r108_wrapper);
        }), r108_final = r66_toPattern(r108_pattern[r108_pattern.length - 1], r108_env), {
            'whether': function _r108_t5(r110_x) {
                var r110_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r66_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r110_x
                    ],
                    [
                        '>=',
                        [
                            '.',
                            r110_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r108_ms.length
                        ]
                    ]
                ].concat(r108_ms.map(function _r110_t2(r111_p, r111_j) {
                    var r111_p, r111_j;
                    return r111_p.whether([
                        '.',
                        r110_x,
                        [
                            '.quote',
                            r111_j
                        ]
                    ]);
                }).concat([r108_final.whether([
                        [
                            '.',
                            r110_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r108_ms.length
                        ]
                    ])])).filter(r66_boole);
            },
            'assign': function _r108_t6(r112_x, r112_locallyQ) {
                var r112_x, r112_locallyQ;
                return ['.begin'].concat(r108_ms.map(function _r112_t2(r113_p, r113_j) {
                    var r113_p, r113_j;
                    return r113_p.assign([
                        '.',
                        r112_x,
                        [
                            '.quote',
                            r113_j
                        ]
                    ], r112_locallyQ);
                })).concat([r108_final.assign(r108_wrapper ? [
                        [
                            '.',
                            [
                                [
                                    '.',
                                    r112_x,
                                    [
                                        '.quote',
                                        'slice'
                                    ]
                                ],
                                [
                                    '.quote',
                                    r108_ms.length
                                ]
                            ],
                            [
                                '.quote',
                                'map'
                            ]
                        ],
                        r108_wrapper
                    ] : [
                        [
                            '.',
                            r112_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r108_ms.length
                        ]
                    ], r112_locallyQ)]).concat([r112_x]);
            }
        }) : void 0;
    }, r66_externs.macros.put('.hash', {}), r66_externs.macros.get('.hash').toPattern = function _r66_t22(r114_pattern, r114_env, r114_wrapper) {
        var r114_pattern, r114_env, r114_wrapper, r114_subpatterns, r114_ms, _r114_t0;
        return _r114_t0 = r114_pattern, Array.isArray(_r114_t0) && _r114_t0.length >= 1 && '.hash' === _r114_t0[0] ? (r114_subpatterns = _r114_t0.slice(1), r114_ms = r114_subpatterns.map(function _r114_t4(r115_pair) {
            var r115_pair;
            return [
                r115_pair[0],
                r66_toPattern(r115_pair[1], r114_env, r114_wrapper)
            ];
        }), {
            'whether': function _r114_t5(r116_x) {
                var r116_x;
                return [
                    '&&',
                    r116_x
                ].concat(r114_ms.map(function _r116_t2(r117_p) {
                    var r117_p;
                    return r117_p[1].whether([
                        '.',
                        r116_x,
                        [
                            '.quote',
                            r117_p[0]
                        ]
                    ]);
                })).filter(r66_boole);
            },
            'assign': function _r114_t6(r118_x, r118_locallyQ) {
                var r118_x, r118_locallyQ;
                return ['.begin'].concat(r114_ms.map(function _r118_t2(r119_p) {
                    var r119_p;
                    return r119_p[1].assign([
                        '.',
                        r118_x,
                        [
                            '.quote',
                            r119_p[0]
                        ]
                    ], r118_locallyQ);
                }).concat([r118_x]));
            }
        }) : void 0;
    }, r66_externs.macros.put('.xhash', {}), r66_externs.macros.get('.xhash').toPattern = function _r66_t23(r120_pattern, r120_env, r120_wrapper) {
        var r120_pattern, r120_env, r120_wrapper, r120_subpatterns, r120_ms, _r120_t0;
        return _r120_t0 = r120_pattern, Array.isArray(_r120_t0) && _r120_t0.length >= 1 && '.xhash' === _r120_t0[0] ? (r120_subpatterns = _r120_t0.slice(1), r120_ms = r120_subpatterns.map(function _r120_t4(r121_pair) {
            var r121_pair;
            return [
                r1_ex(r121_pair[0], r120_env),
                r66_toPattern(r121_pair[1], r120_env, r120_wrapper)
            ];
        }), {
            'whether': function _r120_t5(r122_x) {
                var r122_x;
                return [
                    '&&',
                    r122_x
                ].concat(r120_ms.map(function _r122_t2(r123_p) {
                    var r123_p, r123_key, _r123_t0, _r123_t4;
                    return _r123_t0 = r123_p[0], Array.isArray(_r123_t0) && _r123_t0.length === 2 && '.quote' === _r123_t0[0] ? (r123_key = _r123_t0[1], r123_p[1].whether([
                        '.',
                        r122_x,
                        r123_p[0]
                    ])) : (_r123_t4 = r120_env.newt(), function (r124_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r124_t,
                                [
                                    '.',
                                    r122_x,
                                    r123_p[0]
                                ]
                            ],
                            r123_p[1].whether(r124_t)
                        ];
                    }(_r123_t4));
                })).filter(r66_boole);
            },
            'assign': function _r120_t6(r125_x, r125_locallyQ) {
                var r125_x, r125_locallyQ;
                return ['.begin'].concat(r120_ms.map(function _r125_t2(r126_p) {
                    var r126_p, r126_key, _r126_t0, _r126_t4;
                    return _r126_t0 = r126_p[0], Array.isArray(_r126_t0) && _r126_t0.length === 2 && '.quote' === _r126_t0[0] ? (r126_key = _r126_t0[1], r126_p[1].assign([
                        '.',
                        r125_x,
                        r126_p[0]
                    ], r125_locallyQ)) : (_r126_t4 = r120_env.newt(), function (r127_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r127_t,
                                [
                                    '.',
                                    r125_x,
                                    r126_p[0]
                                ]
                            ],
                            r126_p[1].assign(r127_t, r125_locallyQ)
                        ];
                    }(_r126_t4));
                }).concat([r125_x]));
            }
        }) : void 0;
    }, r66_externs.macros.put('.quasiquote', {}), r66_externs.macros.get('.quasiquote').toPattern = function _r66_t24(r128_pattern, r128_env, r128_wrapper) {
        var r128_pattern, r128_env, r128_wrapper, r128_subpatterns, _r128_t0;
        return _r128_t0 = r128_pattern, Array.isArray(_r128_t0) && _r128_t0.length >= 1 && '.quasiquote' === _r128_t0[0] ? (r128_subpatterns = _r128_t0.slice(1), r66_toPattern(r1_deQuasiquote(r128_pattern[1], 0, r128_env), r128_env, r128_wrapper)) : void 0;
    }, r66_externs.macros.put('.operatorPiece', {}), r66_externs.macros.get('.operatorPiece').toPattern = function _r66_t25(r129_pattern, r129_env, r129_wrapper) {
        var r129_pattern, r129_env, r129_wrapper;
        return r66_toPattern(r1_opSegToRegular(r129_pattern.slice(1), r129_env), r129_env, r129_wrapper);
    }, r66_externs.macros.put('&&', {}), r66_externs.macros.get('&&').toPattern = function _r66_t26(r130_pattern, r130_env, r130_wrapper) {
        var r130_pattern, r130_env, r130_wrapper, r130_subpatterns, r130_ms, _r130_t0;
        return _r130_t0 = r130_pattern, Array.isArray(_r130_t0) && _r130_t0.length >= 1 && '&&' === _r130_t0[0] ? (r130_subpatterns = _r130_t0.slice(1), r130_ms = r130_subpatterns.map(function _r130_t4(r131_x) {
            var r131_x;
            return r66_toPattern(r131_x, r130_env, r130_wrapper);
        }), {
            'whether': function _r130_t5(r132_x) {
                var r132_x, r132_f;
                return r132_f = ['&&'].concat(r130_ms.map(function _r132_t2(r133_p, r133_j) {
                    var r133_p, r133_j;
                    return r133_p.whether(r132_x);
                })).filter(r66_boole), r132_f.length === 1 ? [
                    '.quote',
                    !0
                ] : r132_f;
            },
            'assign': function _r130_t6(r134_x, r134_locallyQ) {
                var r134_x, r134_locallyQ;
                return ['.begin'].concat(r130_ms.map(function _r134_t2(r135_p, r135_j) {
                    var r135_p, r135_j;
                    return r135_p.assign(r134_x, r134_locallyQ);
                }).concat([r134_x]));
            }
        }) : void 0;
    }, r66_externs.macros.put('||', {}), r66_externs.macros.get('||').toPattern = function _r66_t27(r136_pattern, r136_env, r136_wrapper) {
        var r136_pattern, r136_env, r136_wrapper, r136_subpatterns, r136_ms, _r136_t0;
        return _r136_t0 = r136_pattern, Array.isArray(_r136_t0) && _r136_t0.length >= 1 && '||' === _r136_t0[0] ? (r136_subpatterns = _r136_t0.slice(1), r136_ms = r136_subpatterns.map(function _r136_t4(r137_x) {
            var r137_x;
            return r66_toPattern(r137_x, r136_env, r136_wrapper);
        }), {
            'whether': function _r136_t5(r138_x) {
                var r138_x;
                return ['||'].concat(r136_ms.map(function _r138_t2(r139_p, r139_j) {
                    var r139_p, r139_j;
                    return r139_p.whether(r138_x);
                })).filter(r66_boole);
            },
            'assign': function _r136_t6(r140_x, r140_locallyQ) {
                var r140_x, r140_locallyQ;
                return ['.unit'];
            }
        }) : void 0;
    }, r66_boole = function _r66_t28(r141_x) {
        var r141_x;
        return !!r141_x;
    }, r66_externs.macros.put('match', function _r66_t29(r142_form, r142_env, r142_wrapper) {
        var r142_form, r142_env, r142_wrapper, r142_pairs, r142_t, r142_f, r142_j, r142_pattern, r142_guard, r142_body, r142_pat, r142_cond, r142_tc, _r142_t0;
        for (r142_pairs = r142_form.slice(2), r142_t = r142_env.newt(), r142_f = ['.unit'], r142_j = r142_pairs.length - 1; r142_j >= 0; r142_j -= 1)
            _r142_t0 = r142_pairs[r142_j], r142_f = Array.isArray(_r142_t0) && _r142_t0.length === 2 ? (r142_pattern = _r142_t0[0], r142_body = _r142_t0[1], r142_pat = r66_toPattern(r142_pattern, r142_env, r142_wrapper), r142_cond = r142_pat.whether(r142_t), r142_cond ? [
                '.if',
                r142_cond,
                [
                    '.begin',
                    r142_pat.assign(r142_t, !0),
                    r1_ex(r142_body, r142_env)
                ],
                r142_f
            ] : [
                '.begin',
                r142_pat.assign(r142_t, !0),
                r1_ex(r142_body, r142_env)
            ]) : Array.isArray(_r142_t0) && _r142_t0.length === 3 ? (r142_pattern = _r142_t0[0], r142_guard = _r142_t0[1], r142_body = _r142_t0[2], r142_pat = r66_toPattern(r142_pattern, r142_env, r142_wrapper), r142_cond = r142_pat.whether(r142_t), r142_cond ? (r142_tc = r142_env.newt(), [
                '.begin',
                [
                    '.set',
                    r142_tc,
                    [
                        '.quote',
                        !1
                    ]
                ],
                [
                    '.if',
                    r142_cond,
                    [
                        '.begin',
                        r142_pat.assign(r142_t, !0),
                        [
                            '.if',
                            r1_ex(r142_guard, r142_env),
                            [
                                '.set',
                                r142_tc,
                                [
                                    '.quote',
                                    !0
                                ]
                            ],
                            [
                                '.set',
                                r142_tc,
                                [
                                    '.quote',
                                    !1
                                ]
                            ]
                        ]
                    ]
                ],
                [
                    '.if',
                    r142_tc,
                    r1_ex(r142_body, r142_env),
                    r142_f
                ]
            ]) : [
                '.begin',
                r142_pat.assign(r142_t, !0),
                [
                    '.if',
                    r1_ex(r142_guard, r142_env),
                    r1_ex(r142_body, r142_env),
                    r142_f
                ]
            ]) : r142_f;
        return [
            '.begin',
            [
                '.set',
                r142_t,
                r1_ex(r142_form[1], r142_env)
            ],
            r142_f
        ];
    }), r66_externs.macros.put('regex', function _r66_t30(r143_form, r143_env) {
        var r143_form, r143_env, r143_args, r143_s, r143_flag, _r143_t0;
        return _r143_t0 = r143_form, Array.isArray(_r143_t0) && _r143_t0.length === 2 && 'regex' === _r143_t0[0] && Array.isArray(_r143_t0[1]) && _r143_t0[1].length === 2 && '.quote' === _r143_t0[1][0] ? (r143_s = _r143_t0[1][1], _r143_t0[1], [
            '.quote',
            new RegExp(r143_s)
        ]) : Array.isArray(_r143_t0) && _r143_t0.length === 3 && 'regex' === _r143_t0[0] && Array.isArray(_r143_t0[1]) && _r143_t0[1].length === 2 && '.quote' === _r143_t0[1][0] && Array.isArray(_r143_t0[2]) && _r143_t0[2].length === 2 && '.quote' === _r143_t0[2][0] ? (r143_s = _r143_t0[1][1], _r143_t0[1], r143_flag = _r143_t0[2][1], _r143_t0[2], [
            '.quote',
            new RegExp(r143_s, r143_flag)
        ]) : Array.isArray(_r143_t0) && _r143_t0.length >= 1 && 'regex' === _r143_t0[0] ? (r143_args = _r143_t0.slice(1), [
            '.new',
            r66_externs.use('RegExp')
        ].concat(r143_args)) : void 0;
    }), r66_externs.macros.put('define-macro', function _r66_t31(r144_form, r144_env) {
        var r144_form, r144_env, r144_op, r144_name, r144_body, r144_coinit, r144_ds, r144_macroG, r144_macroFn, r144_str, _r144_t0, _r144_t1;
        return _r144_t0 = r144_form, Array.isArray(_r144_t0) && _r144_t0.length === 3 && Array.isArray(_r144_t0[1]) && _r144_t0[1].length === 2 && '.quote' === _r144_t0[1][0] ? (r144_op = _r144_t0[0], r144_str = _r144_t0[1][1], _r144_t0[1], r144_body = _r144_t0[2], r1_ex([
            r144_op,
            r144_str,
            r144_body
        ], r144_env)) : (_r144_t1 = !1, Array.isArray(_r144_t0) && _r144_t0.length === 3 && (r144_op = _r144_t0[0], r144_name = _r144_t0[1], r144_body = _r144_t0[2], r1_atom(r144_name) ? _r144_t1 = !0 : _r144_t1 = !1), _r144_t1 ? (r144_coinit = {
            'injectForm': void 0,
            'initFn': void 0
        }, r144_ds = new r1_Scope(r144_env), r144_ds.declare('ex', !0), r144_ds.declare('atom', !0), r144_ds.declare('prim', !0), r144_ds.declare('formOf', !0), r144_ds.declare('scopeOf', !0), r144_ds.declare('definingEnv', !0), r144_ds.declare('externEnv', !0), r144_ds.declare('require', !0), r144_ds.declare('toPattern', !0), r144_ds.declare('coinit', !0), r144_ds.declare('FormInvalidError', !0), r144_macroG = new Function(r144_ds.castName('ex'), r144_ds.castName('atom'), r144_ds.castName('prim'), r144_ds.castName('formOf'), r144_ds.castName('scopeOf'), r144_ds.castName('definingEnv'), r144_ds.castName('externEnv'), r144_ds.castName('require'), r144_ds.castName('toPattern'), r144_ds.castName('coinit'), r144_ds.castName('FormInvalidError'), r1_escodegen.generate(r1_patrisika.generate([
            '.return',
            r1_ex(r144_body, r144_ds)
        ], r144_ds, function _r144_t6(r145_form) {
            var r145_form;
            return [
                '.return',
                r145_form
            ];
        }))), r144_macroFn = r144_macroG(r1_ex, r1_wrapForSyntacticClosure(r1_atom), r1_wrapForSyntacticClosure(r1_prim), function _r144_t7(r146_x) {
            var r146_x;
            return r146_x[1];
        }, function _r144_t8(r147_x) {
            var r147_x;
            return r147_x[2];
        }, r144_env, r66_externs, require, r66_toPattern, r144_coinit, r1_FormInvalidError), r144_env.macros.put(r144_name, function _r144_t9(r148_c, r148_e) {
            var r148_c, r148_e, r148_result, r148_s;
            return r148_result = r144_macroFn(r148_c, r148_e), r148_s = new r1_Scope(r144_env), r148_s.hanging = r148_e, r148_s.semiparent = r148_e, r1_ex(r148_result, r148_s);
        }), r144_coinit.initFn && r144_coinit.initFn(r144_env.macros.get(r144_name)), r144_coinit.injectForm ? r1_ex(r144_coinit.injectForm, r144_env) : ['.unit']) : ['.unit']);
    }), r66_externs.macros.put('macro-match', function _r66_t32(r149_form, r149_env) {
        var r149_form, r149_env, r149_c, r149_e, r149_patterns, r149_t, r149_tx, r149_tw, _r149_t0;
        return _r149_t0 = r149_form, Array.isArray(_r149_t0) && _r149_t0.length >= 3 && 'macro-match' === _r149_t0[0] ? (r149_c = _r149_t0[1], r149_e = _r149_t0[2], r149_patterns = _r149_t0.slice(3), r149_t = r149_env.newt(), r149_tx = r149_env.newt(), r149_tw = r149_env.newt(), [
            '.begin',
            [
                '.set',
                r149_t,
                r149_e
            ],
            [
                '.set',
                r149_tw,
                [
                    '.lambda',
                    [r149_tx],
                    [
                        '.return',
                        [
                            '.list',
                            [
                                '.quote',
                                '.syntactic-closure'
                            ],
                            r149_tx,
                            r149_t
                        ]
                    ]
                ]
            ],
            r66_externs.macros.get('match')([
                'match',
                r149_c
            ].concat(r149_patterns), r149_env, r149_tw)
        ]) : ['.unit'];
    }), r66_externs.pFamily = 'r', r66_externs;
}, exports.Create = r1_Create;
