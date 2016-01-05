var r1_patrisika, r1_atom, r1_identifier, r1_prim, r1_Scope, r1_escodegen, r1_util, r1_ex, r1_deQuasiquote, r1_opSegToRegular, r1_FormInvalidError, r1_wrapForSyntacticClosure, r1_Create, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4;
r1_patrisika = require('patrisika'), r1_atom = function _r1_t0(r71_x) {
    var r71_x;
    return typeof r71_x === 'string';
}, r1_identifier = function _r1_t1(r72_x) {
    var r72_x;
    return r1_atom(r72_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r72_x);
}, r1_prim = function _r1_t2(r73_x) {
    var r73_x;
    return r1_atom(r73_x) && !r1_identifier(r73_x);
}, r1_Scope = require('patrisika').Scope, r1_escodegen = require('escodegen'), r1_util = require('util'), r1_ex = require('./ex').ex, r1_deQuasiquote = require('./ex').deQuasiquote, r1_opSegToRegular = require('./ex').opSegToRegular, r1_FormInvalidError = r1_patrisika.FormInvalidError, r1_wrapForSyntacticClosure = function _r1_t3(r74_fn) {
    var r74_fn;
    return function _r74_t2(r75_x) {
        var r75_x, r75_c, r75_e, _r75_t0;
        return _r75_t0 = r75_x, Array.isArray(_r75_t0) && _r75_t0.length === 3 && '.syntactic-closure' === _r75_t0[0] ? (r75_c = _r75_t0[1], r75_e = _r75_t0[2], r74_fn(r75_c)) : r74_fn(r75_x);
    };
}, r1_Create = function _r1_t4() {
    var r76_externs, r76_operatorRename, r76_reportInvalid, r76_AssignWithMod, r76_Assign, r76_toPattern, r76_boole;
    return r76_externs = r1_patrisika.DefaultExterns(), r76_externs.castName = function _r76_t2(r77_name) {
        var r77_name;
        return r77_name;
    }, r76_externs.declare('require'), r76_externs.declare('exports'), r76_externs.declare('process'), r76_externs.declare('module'), r76_externs.declare('Error'), r76_operatorRename = function _r76_t3(r78_op) {
        var r78_op;
        return function _r78_t2(r79_form, r79_env) {
            var r79_form, r79_env;
            return r1_ex([r78_op].concat(r79_form.slice(1)), r79_env);
        };
    }, r76_reportInvalid = function _r76_t4(r80_form, r80_reason) {
        var r80_form, r80_reason;
        throw new r1_FormInvalidError(r80_form, r80_reason);
    }, r76_externs.macros.put('begin', r76_operatorRename('.begin')), r76_externs.macros.put('then', r76_operatorRename('.begin')), r76_externs.macros.put('else', r76_operatorRename('.begin')), r76_externs.macros.put('while', r76_operatorRename('.while')), r76_externs.macros.put('try', r76_operatorRename('.try')), r76_externs.macros.put('is', r76_operatorRename('.is')), r76_externs.macros.put('<@', r76_operatorRename('.is')), r76_externs.macros.put('new', r76_operatorRename('.new')), r76_externs.macros.put('this', r76_operatorRename('.thisp')), r76_externs.macros.put('arguments', r76_operatorRename('.argsp')), r76_externs.macros.put('and', r76_operatorRename('&&')), r76_externs.macros.put('or', r76_operatorRename('||')), r76_externs.macros.put('not', r76_operatorRename('!')), r76_externs.macros.put('return', r76_operatorRename('.return')), r76_externs.macros.put('yield', r76_operatorRename('.yield')), r76_externs.macros.put('throw', r76_operatorRename('.throw')), r76_externs.macros.put('list', r76_operatorRename('.list')), r76_externs.macros.put('typeof', r76_operatorRename('.typeof')), r76_externs.macros.put('quasiquote', r76_operatorRename('.quasiquote')), r76_externs.macros.put('syntax', r76_operatorRename('.quasiquote')), r76_externs.macros.put('lambda', function _r76_t5(r81_form, r81_env) {
        var r81_form, r81_env, r81_otherwise, r81_car, r81_body, r81_parameters, _r81_t0, _r81_t1;
        return _r81_t0 = r81_form, _r81_t1 = !1, Array.isArray(_r81_t0) && _r81_t0.length === 3 && (r81_car = _r81_t0[0], r81_parameters = _r81_t0[1], r81_body = _r81_t0[2], r1_atom(r81_parameters) ? _r81_t1 = !0 : _r81_t1 = !1), _r81_t1 ? r1_ex([
            '.lambda',
            [r81_parameters],
            r81_body
        ], r81_env) : Array.isArray(_r81_t0) && _r81_t0.length === 3 ? (r81_car = _r81_t0[0], r81_parameters = _r81_t0[1], r81_body = _r81_t0[2], r1_ex([
            '.lambda',
            r81_parameters,
            r81_body
        ], r81_env)) : Array.isArray(_r81_t0) && _r81_t0.length === 2 ? (r81_car = _r81_t0[0], r81_body = _r81_t0[1], r1_ex([
            '.lambda',
            [],
            r81_body
        ], r81_env)) : Array.isArray(_r81_t0) && _r81_t0.length === 1 ? (r81_car = _r81_t0[0], r1_ex([
            '.lambda',
            [],
            ['.unit']
        ], r81_body)) : (r81_otherwise = _r81_t0, r76_reportInvalid(r81_otherwise, 'Invalid Lambda Formation'));
    }), r76_externs.macros.put('function', r76_externs.macros.get('lambda')), r76_externs.macros.put('->', r76_externs.macros.get('lambda')), r76_externs.macros.put('=>', r76_externs.macros.get('lambda')), r76_externs.operatorInfo.put('->', {
        'priority': 900,
        'associvity': 'right'
    }), r76_externs.operatorInfo.put('=>', {
        'priority': 950,
        'associvity': 'right'
    }), r76_externs.macros.put('if', function _r76_t6(r82_form, r82_env) {
        var r82_form, r82_env, r82_otherwise, r82_test, r82_consequents, r82_alternates, r82_consequent, r82_alternate, _r82_t0;
        return _r82_t0 = r82_form, Array.isArray(_r82_t0) && _r82_t0.length === 3 && 'if' === _r82_t0[0] ? (r82_test = _r82_t0[1], r82_consequent = _r82_t0[2], r1_ex([
            '.if',
            r82_test,
            r82_consequent
        ], r82_env)) : Array.isArray(_r82_t0) && _r82_t0.length === 4 && 'if' === _r82_t0[0] ? (r82_test = _r82_t0[1], r82_consequent = _r82_t0[2], r82_alternate = _r82_t0[3], r1_ex([
            '.if',
            r82_test,
            r82_consequent,
            r82_alternate
        ], r82_env)) : Array.isArray(_r82_t0) && _r82_t0.length === 3 && 'if' === _r82_t0[0] && Array.isArray(_r82_t0[2]) && _r82_t0[2].length >= 1 && 'then' === _r82_t0[2][0] ? (r82_test = _r82_t0[1], r82_consequents = _r82_t0[2].slice(1), _r82_t0[2], r1_ex([
            '.if',
            r82_test,
            ['.begin'].concat(r82_consequents)
        ], r82_env)) : Array.isArray(_r82_t0) && _r82_t0.length === 4 && 'if' === _r82_t0[0] && Array.isArray(_r82_t0[2]) && _r82_t0[2].length >= 1 && 'then' === _r82_t0[2][0] && Array.isArray(_r82_t0[3]) && _r82_t0[3].length >= 1 && 'else' === _r82_t0[3][0] ? (r82_test = _r82_t0[1], r82_consequents = _r82_t0[2].slice(1), _r82_t0[2], r82_alternates = _r82_t0[3].slice(1), _r82_t0[3], r1_ex([
            '.if',
            r82_test,
            ['.begin'].concat(r82_consequents),
            ['.begin'].concat(r82_alternates)
        ], r82_env)) : (r82_otherwise = _r82_t0, r76_reportInvalid(r82_otherwise, 'Invalid Conditional Form'));
    }), r76_externs.macros.put('let', function _r76_t7(r83_form, r83_env) {
        var r83_form, r83_env, r83_pairs, r83_args, r83_paras, r83_j, r83_arg, r83_param, r83_useless, _r83_t0, _r83_t1;
        for (r83_pairs = r83_form.slice(1, -1), r83_args = [], r83_paras = [], r83_j = 0; r83_j < r83_pairs.length; r83_j += 1)
            _r83_t0 = r83_pairs[r83_j], Array.isArray(_r83_t0) && _r83_t0.length >= 2 ? (r83_arg = _r83_t0[0], r83_param = _r83_t0[1], r83_useless = _r83_t0.slice(2), r83_args.push(r83_arg), r83_paras.push(r83_param)) : Array.isArray(_r83_t0) && _r83_t0.length === 2 ? (r83_arg = _r83_t0[0], r83_param = _r83_t0[1], r83_args.push(r83_arg), r83_paras.push(r83_param)) : (_r83_t1 = !1, Array.isArray(_r83_t0) && _r83_t0.length === 1 && (r83_arg = _r83_t0[0], r1_atom(r83_arg) ? _r83_t1 = !0 : _r83_t1 = !1), _r83_t1 && (r83_args.push(r83_arg), r83_paras.push(r83_env.use(r83_arg))));
        return r1_ex([
            '.beta',
            r83_args,
            r83_form[r83_form.length - 1]
        ].concat(r83_paras), r83_env);
    }), r76_externs.macros.put('object', function _r76_t8(r84_form, r84_env) {
        var r84_form, r84_env, r84_pairs;
        return r84_pairs = r84_form.slice(1).map(function _r84_t2(r85_pair) {
            var r85_pair, r85_method, r85_param, r85_value, r85_property, _r85_t0, _r85_t1, _r85_t2, _r85_t3, _r85_t4, _r85_t5, _r85_t6, _r85_t7;
            return _r85_t0 = r85_pair, _r85_t7 = !1, Array.isArray(_r85_t0) && _r85_t0.length === 3 && '=' === _r85_t0[0] && (r85_property = _r85_t0[1], r85_value = _r85_t0[2], r1_atom(r85_property) ? _r85_t7 = !0 : _r85_t7 = !1), _r85_t7 ? [
                [
                    '.quote',
                    r85_property
                ],
                r85_value
            ] : (_r85_t6 = !1, Array.isArray(_r85_t0) && _r85_t0.length === 3 && '=' === _r85_t0[0] && (r85_property = _r85_t0[1], r85_value = _r85_t0[2], r1_atom(r85_property) ? _r85_t6 = !0 : _r85_t6 = !1), _r85_t6 ? [
                [
                    '.quote',
                    r85_property
                ],
                r85_value
            ] : (_r85_t5 = !1, Array.isArray(_r85_t0) && _r85_t0.length === 2 && (r85_property = _r85_t0[0], r85_value = _r85_t0[1], r1_atom(r85_property) ? _r85_t5 = !0 : _r85_t5 = !1), _r85_t5 ? [
                [
                    '.quote',
                    r85_property
                ],
                r85_value
            ] : (_r85_t4 = !1, Array.isArray(_r85_t0) && _r85_t0.length === 1 && (r85_property = _r85_t0[0], r1_atom(r85_property) ? _r85_t4 = !0 : _r85_t4 = !1), _r85_t4 ? [
                [
                    '.quote',
                    r85_property
                ],
                r85_property
            ] : (r85_property = _r85_t0, r1_atom(r85_property) ? [
                [
                    '.quote',
                    r85_property
                ],
                r85_property
            ] : Array.isArray(_r85_t0) && _r85_t0.length === 3 && '=' === _r85_t0[0] && Array.isArray(_r85_t0[1]) && _r85_t0[1].length === 2 && '.quote' === _r85_t0[1][0] ? (r85_property = _r85_t0[1][1], _r85_t0[1], r85_value = _r85_t0[2], [
                [
                    '.quote',
                    r85_property
                ],
                r85_value
            ]) : Array.isArray(_r85_t0) && _r85_t0.length === 3 && '=' === _r85_t0[0] && Array.isArray(_r85_t0[1]) && _r85_t0[1].length === 2 && '.quote' === _r85_t0[1][0] ? (r85_property = _r85_t0[1][1], _r85_t0[1], r85_value = _r85_t0[2], [
                [
                    '.quote',
                    r85_property
                ],
                r85_value
            ]) : Array.isArray(_r85_t0) && _r85_t0.length === 2 && Array.isArray(_r85_t0[0]) && _r85_t0[0].length === 2 && '.quote' === _r85_t0[0][0] ? (r85_property = _r85_t0[0][1], _r85_t0[0], r85_value = _r85_t0[1], [
                [
                    '.quote',
                    r85_property
                ],
                r85_value
            ]) : (_r85_t3 = !1, Array.isArray(_r85_t0) && _r85_t0.length === 3 && '=' === _r85_t0[0] && Array.isArray(_r85_t0[1]) && _r85_t0[1].length >= 1 && (r85_method = _r85_t0[1][0], r85_param = _r85_t0[1].slice(1), _r85_t0[1], r85_value = _r85_t0[2], r1_atom(r85_method) ? _r85_t3 = !0 : _r85_t3 = !1), _r85_t3 ? [
                [
                    '.quote',
                    r85_method
                ],
                [
                    '.lambda',
                    r85_param,
                    r85_value
                ]
            ] : (_r85_t2 = !1, Array.isArray(_r85_t0) && _r85_t0.length === 3 && '=' === _r85_t0[0] && Array.isArray(_r85_t0[1]) && _r85_t0[1].length >= 1 && (r85_method = _r85_t0[1][0], r85_param = _r85_t0[1].slice(1), _r85_t0[1], r85_value = _r85_t0[2], r1_atom(r85_method) ? _r85_t2 = !0 : _r85_t2 = !1), _r85_t2 ? [
                [
                    '.quote',
                    r85_method
                ],
                [
                    '.lambda',
                    r85_param,
                    r85_value
                ]
            ] : (_r85_t1 = !1, Array.isArray(_r85_t0) && _r85_t0.length === 2 && Array.isArray(_r85_t0[0]) && _r85_t0[0].length >= 1 && (r85_method = _r85_t0[0][0], r85_param = _r85_t0[0].slice(1), _r85_t0[0], r85_value = _r85_t0[1], r1_atom(r85_method) ? _r85_t1 = !0 : _r85_t1 = !1), _r85_t1 ? [
                [
                    '.quote',
                    r85_method
                ],
                [
                    '.lambda',
                    r85_param,
                    r85_value
                ]
            ] : void 0)))))));
        }), r1_ex(['.xhash'].concat(r84_pairs.filter(function _r84_t3(r86_x) {
            var r86_x;
            return r86_x;
        })), r84_env);
    }), r76_externs.macros.get('list').toPattern = function _r76_t9(r87_form, r87_env, r87_wrapper) {
        var r87_form, r87_env, r87_wrapper;
        return r76_toPattern(['.list'].concat(r87_form.slice(1)), r87_env, r87_wrapper);
    }, r76_externs.macros.get('object').toPattern = function _r76_t10(r88_form, r88_env, r88_wrapper) {
        var r88_form, r88_env, r88_wrapper, r88_pairs;
        return r88_pairs = r88_form.slice(1).map(function _r88_t2(r89_pair) {
            var r89_pair, r89_property, r89_value, _r89_t0, _r89_t1, _r89_t2, _r89_t3, _r89_t4;
            if (_r89_t0 = r89_pair, _r89_t4 = !1, Array.isArray(_r89_t0) && _r89_t0.length === 3 && '=' === _r89_t0[0] && (r89_property = _r89_t0[1], r89_value = _r89_t0[2], r1_atom(r89_property) ? _r89_t4 = !0 : _r89_t4 = !1), _r89_t4)
                return [
                    r89_property,
                    r89_value
                ];
            else if (_r89_t3 = !1, Array.isArray(_r89_t0) && _r89_t0.length === 3 && '=' === _r89_t0[0] && (r89_property = _r89_t0[1], r89_value = _r89_t0[2], r1_atom(r89_property) ? _r89_t3 = !0 : _r89_t3 = !1), _r89_t3)
                return [
                    r89_property,
                    r89_value
                ];
            else if (_r89_t2 = !1, Array.isArray(_r89_t0) && _r89_t0.length === 2 && (r89_property = _r89_t0[0], r89_value = _r89_t0[1], r1_atom(r89_property) ? _r89_t2 = !0 : _r89_t2 = !1), _r89_t2)
                return [
                    r89_property,
                    r89_value
                ];
            else if (_r89_t1 = !1, Array.isArray(_r89_t0) && _r89_t0.length === 1 && (r89_property = _r89_t0[0], r1_atom(r89_property) ? _r89_t1 = !0 : _r89_t1 = !1), _r89_t1)
                return [
                    r89_property,
                    r89_property
                ];
            else if (r89_property = _r89_t0, r1_atom(r89_property))
                return [
                    r89_property,
                    r89_property
                ];
            else if (Array.isArray(_r89_t0) && _r89_t0.length === 3 && '=' === _r89_t0[0] && Array.isArray(_r89_t0[1]) && _r89_t0[1].length === 2 && '.quote' === _r89_t0[1][0])
                return r89_property = _r89_t0[1][1], _r89_t0[1], r89_value = _r89_t0[2], [
                    r89_property,
                    r89_value
                ];
            else if (Array.isArray(_r89_t0) && _r89_t0.length === 3 && '=' === _r89_t0[0] && Array.isArray(_r89_t0[1]) && _r89_t0[1].length === 2 && '.quote' === _r89_t0[1][0])
                return r89_property = _r89_t0[1][1], _r89_t0[1], r89_value = _r89_t0[2], [
                    r89_property,
                    r89_value
                ];
            else if (Array.isArray(_r89_t0) && _r89_t0.length === 2 && Array.isArray(_r89_t0[0]) && _r89_t0[0].length === 2 && '.quote' === _r89_t0[0][0])
                return r89_property = _r89_t0[0][1], _r89_t0[0], r89_value = _r89_t0[1], [
                    r89_property,
                    r89_value
                ];
            else
                throw new r1_FormInvalidError(r88_form, 'Invalid Assignment Left-hand Side');
        }), r76_toPattern(['.hash'].concat(r88_pairs), r88_env, r88_wrapper);
    }, r76_externs.macros.put('piecewise', function _r76_t11(r90_form, r90_env) {
        var r90_form, r90_env, r90_pairs, r90_f, r90_j, r90_otherwise, r90_condition, r90_consequent, _r90_t0, _r90_t1;
        if (_r90_t0 = r90_form, Array.isArray(_r90_t0) && _r90_t0.length >= 1 && 'piecewise' === _r90_t0[0]) {
            for (r90_pairs = _r90_t0.slice(1), r90_f = ['.unit'], r90_j = r90_pairs.length - 1; r90_j >= 0; r90_j -= 1) {
                if (_r90_t1 = r90_pairs[r90_j], !(Array.isArray(_r90_t1) && _r90_t1.length === 2))
                    throw r90_otherwise = _r90_t1, new r1_FormInvalidError(r90_otherwise, 'Invalid Piecewise Segment');
                r90_condition = _r90_t1[0], r90_consequent = _r90_t1[1], r90_f = [
                    '.if',
                    r1_ex(r90_condition, r90_env),
                    r1_ex(r90_consequent, r90_env),
                    r90_f
                ];
            }
            return r90_f;
        } else
            return void 0;
    }), r76_AssignWithMod = function _r76_t12(r91_left, r91_right, r91_mod, r91_env, r91_locallyQ) {
        var r91_left, r91_right, r91_mod, r91_env, r91_locallyQ, r91_callee, r91_paras, r91_pat, r91_t, r91_whatever, r91_a, r91_e, r91_id, _r91_t0, _r91_t1, _r91_t2, _r91_t3, _r91_t4, _r91_t5;
        if (_r91_t0 = r91_left, r91_id = _r91_t0, r1_atom(r91_id))
            return r91_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r91_id
                ], r91_env),
                r1_ex([
                    r91_mod,
                    r91_right
                ], r91_env)
            ] : [
                '.set',
                r1_ex(r91_left, r91_env),
                r1_ex([
                    r91_mod,
                    r91_right
                ], r91_env)
            ];
        else if (_r91_t5 = !1, Array.isArray(_r91_t0) && _r91_t0.length === 2 && '.id' === _r91_t0[0] && (r91_id = _r91_t0[1], r1_atom(r91_id) ? _r91_t5 = !0 : _r91_t5 = !1), _r91_t5)
            return r91_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r91_id
                ], r91_env),
                r1_ex([
                    r91_mod,
                    r91_right
                ], r91_env)
            ] : [
                '.set',
                r1_ex(r91_left, r91_env),
                r1_ex([
                    r91_mod,
                    r91_right
                ], r91_env)
            ];
        else if (_r91_t4 = !1, Array.isArray(_r91_t0) && _r91_t0.length === 3 && '.id' === _r91_t0[0] && (r91_id = _r91_t0[1], r91_e = _r91_t0[2], r1_atom(r91_id) && (r91_e === r91_env || !r91_locallyQ) ? _r91_t4 = !0 : _r91_t4 = !1), _r91_t4)
            return r91_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r91_id
                ], r91_e),
                r1_ex([
                    r91_mod,
                    r91_right
                ], r91_e)
            ] : [
                '.set',
                r1_ex(r91_left, r91_e),
                r1_ex([
                    r91_mod,
                    r91_right
                ], r91_e)
            ];
        else if (_r91_t3 = !1, Array.isArray(_r91_t0) && _r91_t0.length === 3 && '.id' === _r91_t0[0] && (r91_id = _r91_t0[1], r91_e = _r91_t0[2], r1_atom(r91_id) && r91_e !== r91_env && r91_locallyQ ? _r91_t3 = !0 : _r91_t3 = !1), _r91_t3)
            throw new r1_FormInvalidError(r91_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r91_t0) && _r91_t0.length === 2 && '.local' === _r91_t0[0])
            return r91_a = _r91_t0[1], r76_AssignWithMod(r91_a, r91_right, r91_mod, r91_env, !0);
        else if (_r91_t2 = !1, Array.isArray(_r91_t0) && _r91_t0.length === 3 && '.syntactic-closure' === _r91_t0[0] && (r91_a = _r91_t0[1], r91_e = _r91_t0[2], r91_e === r91_env || !r91_locallyQ ? _r91_t2 = !0 : _r91_t2 = !1), _r91_t2)
            return r76_AssignWithMod(r91_a, r91_right, r91_mod, r91_env, r91_locallyQ);
        else if (_r91_t1 = !1, Array.isArray(_r91_t0) && _r91_t0.length === 3 && '.syntactic-closure' === _r91_t0[0] && (r91_a = _r91_t0[1], r91_e = _r91_t0[2], r91_e !== r91_env && r91_locallyQ ? _r91_t1 = !0 : _r91_t1 = !1), _r91_t1)
            throw new r1_FormInvalidError(r91_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r91_t0) && _r91_t0.length >= 1 && '.revcall' === _r91_t0[0])
            return r91_whatever = _r91_t0.slice(1), r76_AssignWithMod([].concat(r91_whatever), r91_right, r91_mod, r91_env, r91_locallyQ);
        else if (Array.isArray(_r91_t0) && _r91_t0.length >= 1)
            if (r91_callee = _r91_t0[0], r91_paras = _r91_t0.slice(1), r1_atom(r91_callee) && r91_env.macros.has(r91_callee) && r91_env.macros.get(r91_callee).toPattern)
                return r91_pat = r76_toPattern(r91_left, r91_env), r91_t = r91_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r91_t,
                        r1_ex([
                            r91_mod,
                            r91_right
                        ], r91_env)
                    ],
                    r91_pat.assign(r91_t, r91_locallyQ)
                ];
            else if (r1_atom(r91_callee) && r91_env.macros.has(r91_callee))
                throw new r1_FormInvalidError(r91_left, 'Invalid Assignment Left-hand Side');
            else
                return r1_prim(r91_callee) ? [
                    '.set',
                    r1_ex(r91_left, r91_env),
                    r1_ex([
                        r91_mod,
                        r91_right
                    ], r91_env)
                ] : r1_atom(r91_callee) ? r91_locallyQ ? [
                    '.set',
                    r1_ex([
                        '.local',
                        r91_callee
                    ], r91_env),
                    r1_ex([
                        r91_mod,
                        [
                            '.lambda',
                            [].concat(r91_paras),
                            r91_right
                        ]
                    ], r91_env)
                ] : [
                    '.set',
                    r1_ex(r91_callee, r91_env),
                    r1_ex([
                        r91_mod,
                        [
                            '.lambda',
                            [].concat(r91_paras),
                            r91_right
                        ]
                    ], r91_env)
                ] : [
                    '.set',
                    r1_ex(r91_callee, r91_env),
                    r1_ex([
                        r91_mod,
                        [
                            '.lambda',
                            [].concat(r91_paras),
                            r91_right
                        ]
                    ], r91_env)
                ];
        else
            throw new r1_FormInvalidError(r91_left, 'Invalid Assignment Left-hand Side');
    }, r76_Assign = function _r76_t13(r92_left, r92_right, r92_env, r92_locallyQ) {
        var r92_left, r92_right, r92_env, r92_locallyQ;
        return r76_AssignWithMod(r92_left, r92_right, '.unquote', r92_env, r92_locallyQ);
    }, r76_externs.macros.put('define', function _r76_t14(r93_form, r93_env) {
        var r93_form, r93_env, r93_any, r93_op, r93_left, r93_right, r93_modifer, _r93_t0, _r93_t1;
        if (_r93_t0 = r93_form, Array.isArray(_r93_t0) && _r93_t0.length === 4)
            return r93_op = _r93_t0[0], r93_modifer = _r93_t0[1], r93_left = _r93_t0[2], r93_right = _r93_t0[3], r76_AssignWithMod(r93_left, r93_right, r93_modifer, r93_env, !0);
        else if (Array.isArray(_r93_t0) && _r93_t0.length === 3)
            return r93_op = _r93_t0[0], r93_left = _r93_t0[1], r93_right = _r93_t0[2], r76_Assign(r93_left, r93_right, r93_env, !0);
        else if (_r93_t1 = !1, Array.isArray(_r93_t0) && _r93_t0.length === 2 && (r93_op = _r93_t0[0], r93_left = _r93_t0[1], r1_atom(r93_left) ? _r93_t1 = !0 : _r93_t1 = !1), _r93_t1)
            return [
                '.local',
                r93_left
            ];
        else
            throw r93_any = _r93_t0, new r1_FormInvalidError(r93_any, 'Invalid Assignment');
    }), r76_externs.macros.put('local', r76_externs.macros.get('define')), r76_externs.macros.put('set', function _r76_t15(r94_form, r94_env) {
        var r94_form, r94_env, r94_any, r94_op, r94_left, r94_right, _r94_t0;
        if (_r94_t0 = r94_form, Array.isArray(_r94_t0) && _r94_t0.length === 3)
            return r94_op = _r94_t0[0], r94_left = _r94_t0[1], r94_right = _r94_t0[2], r76_Assign(r94_left, r94_right, r94_env, !1);
        else
            throw r94_any = _r94_t0, new r1_FormInvalidError(r94_any, 'Invalid Assignment');
    }), r76_externs.macros.put('=', r76_externs.macros.get('set')), r76_externs.macros.put('inc', function _r76_t16(r95_form, r95_env) {
        var r95_form, r95_env, r95_op, r95_id, r95_shift, _r95_t0;
        return _r95_t0 = r95_form, Array.isArray(_r95_t0) && _r95_t0.length === 2 ? (r95_op = _r95_t0[0], r95_id = _r95_t0[1], r76_Assign(r95_id, [
            '+',
            r95_id,
            [
                '.quote',
                1
            ]
        ], r95_env, !1)) : Array.isArray(_r95_t0) && _r95_t0.length === 3 ? (r95_op = _r95_t0[0], r95_id = _r95_t0[1], r95_shift = _r95_t0[2], r76_Assign(r95_id, [
            '+',
            r95_id,
            r95_shift
        ], r95_env, !1)) : Array.isArray(_r95_t0) && _r95_t0.length === 4 && 'by' === _r95_t0[2] ? (r95_op = _r95_t0[0], r95_id = _r95_t0[1], r95_shift = _r95_t0[3], r76_Assign(r95_id, [
            '+',
            r95_id,
            r95_shift
        ], r95_env, !1)) : void 0;
    }), r76_externs.macros.put('dec', function _r76_t17(r96_form, r96_env) {
        var r96_form, r96_env, r96_op, r96_id, r96_shift, _r96_t0;
        return _r96_t0 = r96_form, Array.isArray(_r96_t0) && _r96_t0.length === 2 ? (r96_op = _r96_t0[0], r96_id = _r96_t0[1], r76_Assign(r96_id, [
            '-',
            r96_id,
            [
                '.quote',
                1
            ]
        ], r96_env, !1)) : Array.isArray(_r96_t0) && _r96_t0.length === 3 ? (r96_op = _r96_t0[0], r96_id = _r96_t0[1], r96_shift = _r96_t0[2], r76_Assign(r96_id, [
            '-',
            r96_id,
            r96_shift
        ], r96_env, !1)) : Array.isArray(_r96_t0) && _r96_t0.length === 4 && 'by' === _r96_t0[2] ? (r96_op = _r96_t0[0], r96_id = _r96_t0[1], r96_shift = _r96_t0[3], r76_Assign(r96_id, [
            '-',
            r96_id,
            r96_shift
        ], r96_env, !1)) : void 0;
    }), r76_externs.macros.put('for', function _r76_t18(r97_form, r97_env) {
        var r97_form, r97_env, r97_init, r97_test, r97_step, r97_body, _r97_t0;
        return _r97_t0 = r97_form, Array.isArray(_r97_t0) && _r97_t0.length === 5 && 'for' === _r97_t0[0] ? (r97_init = _r97_t0[1], r97_test = _r97_t0[2], r97_step = _r97_t0[3], r97_body = _r97_t0[4], [
            '.begin',
            r1_ex(r97_init, r97_env),
            [
                '.while',
                r1_ex(r97_test, r97_env),
                [
                    '.begin',
                    r1_ex(r97_body, r97_env),
                    r1_ex(r97_step, r97_env)
                ]
            ]
        ]) : void 0;
    }), r76_externs.macros.put('this', ['.thisp']), r76_externs.macros.put('arguments', ['.argsp']), r76_externs.macros.put('nothing', ['.unit']), r76_externs.macros.put('undefined', ['.unit']), r76_externs.macros.put('null', [
        '.quote',
        null
    ]), r76_externs.macros.put('true', [
        '.quote',
        !0
    ]), r76_externs.macros.put('false', [
        '.quote',
        !1
    ]), r76_toPattern = function _r76_t19(r98_pattern, r98_env, r98_wrapper) {
        var r98_pattern, r98_env, r98_wrapper, r98_callee, r98_subpatterns, r98_ms, r98_t, r98_whatever, r98_x, r98_id, _r98_t0, _r98_t1;
        if (_r98_t0 = r98_pattern, r98_id = _r98_t0, r1_atom(r98_id))
            return {
                'whether': function _r98_t5(r110_x) {
                    var r110_x;
                    return null;
                },
                'assign': function _r98_t6(r111_x, r111_locallyQ) {
                    var r111_x, r111_locallyQ;
                    return [
                        '.set',
                        r1_ex(r111_locallyQ ? [
                            '.local',
                            r98_id
                        ] : r98_id, r98_env),
                        r98_wrapper ? [
                            r98_wrapper,
                            r111_x
                        ] : r111_x
                    ];
                }
            };
        else if (_r98_t1 = !1, Array.isArray(_r98_t0) && _r98_t0.length === 2 && '.id' === _r98_t0[0] && (r98_id = _r98_t0[1], r1_atom(r98_id) ? _r98_t1 = !0 : _r98_t1 = !1), _r98_t1)
            return {
                'whether': function _r98_t8(r108_x) {
                    var r108_x;
                    return null;
                },
                'assign': function _r98_t9(r109_x, r109_locallyQ) {
                    var r109_x, r109_locallyQ;
                    return [
                        '.set',
                        r1_ex(r109_locallyQ ? [
                            '.local',
                            r98_id
                        ] : r98_id, r98_env),
                        r98_wrapper ? [
                            r98_wrapper,
                            r109_x
                        ] : r109_x
                    ];
                }
            };
        else if (Array.isArray(_r98_t0) && _r98_t0.length === 2 && '.quote' === _r98_t0[0])
            return r98_x = _r98_t0[1], {
                'whether': function _r98_t11(r106_x) {
                    var r106_x;
                    return [
                        '===',
                        r1_ex(r98_pattern, r98_env),
                        r106_x
                    ];
                },
                'assign': function _r98_t12(r107_x, r107_locallyQ) {
                    var r107_x, r107_locallyQ;
                    return ['.unit'];
                }
            };
        else if (Array.isArray(_r98_t0) && _r98_t0.length >= 1 && '.' === _r98_t0[0])
            return r98_whatever = _r98_t0.slice(1), {
                'whether': function _r98_t14(r104_x) {
                    var r104_x;
                    return null;
                },
                'assign': function _r98_t15(r105_x, r105_locallyQ) {
                    var r105_x, r105_locallyQ;
                    return [
                        '.set',
                        r1_ex(r98_pattern, r98_env),
                        r98_wrapper ? [
                            r98_wrapper,
                            r105_x
                        ] : r105_x
                    ];
                }
            };
        else if (Array.isArray(_r98_t0) && _r98_t0.length >= 1)
            if (r98_callee = _r98_t0[0], r98_subpatterns = _r98_t0.slice(1), r1_atom(r98_callee) && r98_env.macros.has(r98_callee) && r98_env.macros.get(r98_callee).toPattern)
                return r98_env.macros.get(r98_callee).toPattern(r98_pattern, r98_env, r98_wrapper);
            else if (r1_atom(r98_callee) && r98_env.macros.has(r98_callee))
                throw new r1_FormInvalidError(r98_pattern, 'Invalid Pattern');
            else
                return r98_ms = r98_subpatterns.map(function _r98_t20(r99_x) {
                    var r99_x;
                    return r76_toPattern(r99_x, r98_env, r98_wrapper);
                }), r98_t = r98_env.newt(), {
                    'whether': function _r98_t21(r100_x) {
                        var r100_x;
                        return [
                            '&&',
                            [
                                '.set',
                                r98_t,
                                [
                                    [
                                        '.',
                                        r1_ex(r98_callee, r98_env),
                                        [
                                            '.quote',
                                            'unapply'
                                        ]
                                    ],
                                    r100_x,
                                    [
                                        '.quote',
                                        r98_ms.length
                                    ]
                                ]
                            ]
                        ].concat(r98_ms.map(function _r100_t2(r101_p, r101_j) {
                            var r101_p, r101_j;
                            return r101_p.whether([
                                '.',
                                r98_t,
                                [
                                    '.quote',
                                    r101_j
                                ]
                            ]);
                        })).filter(r76_boole);
                    },
                    'assign': function _r98_t22(r102_x, r102_locallyQ) {
                        var r102_x, r102_locallyQ;
                        return ['.begin'].concat(r98_ms.map(function _r102_t2(r103_p, r103_j) {
                            var r103_p, r103_j;
                            return r103_p.assign([
                                '.',
                                r98_t,
                                [
                                    '.quote',
                                    r103_j
                                ]
                            ], r102_locallyQ);
                        }));
                    }
                };
        else
            return void 0;
    }, r76_externs.macros.put('.list', {}), r76_externs.macros.get('.list').toPattern = function _r76_t20(r112_pattern, r112_env, r112_wrapper) {
        var r112_pattern, r112_env, r112_wrapper, r112_subpatterns, r112_ms, _r112_t0;
        return _r112_t0 = r112_pattern, Array.isArray(_r112_t0) && _r112_t0.length >= 1 && '.list' === _r112_t0[0] ? (r112_subpatterns = _r112_t0.slice(1), r112_ms = r112_subpatterns.map(function _r112_t4(r113_x) {
            var r113_x;
            return r76_toPattern(r113_x, r112_env, r112_wrapper);
        }), {
            'whether': function _r112_t5(r114_x) {
                var r114_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r76_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r114_x
                    ],
                    [
                        '===',
                        [
                            '.',
                            r114_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r112_ms.length
                        ]
                    ]
                ].concat(r112_ms.map(function _r114_t2(r115_p, r115_j) {
                    var r115_p, r115_j;
                    return r115_p.whether([
                        '.',
                        r114_x,
                        [
                            '.quote',
                            r115_j
                        ]
                    ]);
                })).filter(r76_boole);
            },
            'assign': function _r112_t6(r116_x, r116_locallyQ) {
                var r116_x, r116_locallyQ;
                return ['.begin'].concat(r112_ms.map(function _r116_t2(r117_p, r117_j) {
                    var r117_p, r117_j;
                    return r117_p.assign([
                        '.',
                        r116_x,
                        [
                            '.quote',
                            r117_j
                        ]
                    ], r116_locallyQ);
                }).concat([r116_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('.conslist', {}), r76_externs.macros.get('.conslist').toPattern = function _r76_t21(r118_pattern, r118_env, r118_wrapper) {
        var r118_pattern, r118_env, r118_wrapper, r118_subpatterns, r118_ms, r118_final, _r118_t0;
        return _r118_t0 = r118_pattern, Array.isArray(_r118_t0) && _r118_t0.length >= 1 && '.conslist' === _r118_t0[0] ? (r118_subpatterns = _r118_t0.slice(1), r118_ms = r118_pattern.slice(1, -1).map(function _r118_t4(r119_x) {
            var r119_x;
            return r76_toPattern(r119_x, r118_env, r118_wrapper);
        }), r118_final = r76_toPattern(r118_pattern[r118_pattern.length - 1], r118_env), {
            'whether': function _r118_t5(r120_x) {
                var r120_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r76_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r120_x
                    ],
                    [
                        '>=',
                        [
                            '.',
                            r120_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r118_ms.length
                        ]
                    ]
                ].concat(r118_ms.map(function _r120_t2(r121_p, r121_j) {
                    var r121_p, r121_j;
                    return r121_p.whether([
                        '.',
                        r120_x,
                        [
                            '.quote',
                            r121_j
                        ]
                    ]);
                }).concat([r118_final.whether([
                        [
                            '.',
                            r120_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r118_ms.length
                        ]
                    ])])).filter(r76_boole);
            },
            'assign': function _r118_t6(r122_x, r122_locallyQ) {
                var r122_x, r122_locallyQ;
                return ['.begin'].concat(r118_ms.map(function _r122_t2(r123_p, r123_j) {
                    var r123_p, r123_j;
                    return r123_p.assign([
                        '.',
                        r122_x,
                        [
                            '.quote',
                            r123_j
                        ]
                    ], r122_locallyQ);
                })).concat([r118_final.assign(r118_wrapper ? [
                        [
                            '.',
                            [
                                [
                                    '.',
                                    r122_x,
                                    [
                                        '.quote',
                                        'slice'
                                    ]
                                ],
                                [
                                    '.quote',
                                    r118_ms.length
                                ]
                            ],
                            [
                                '.quote',
                                'map'
                            ]
                        ],
                        r118_wrapper
                    ] : [
                        [
                            '.',
                            r122_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r118_ms.length
                        ]
                    ], r122_locallyQ)]).concat([r122_x]);
            }
        }) : void 0;
    }, r76_externs.macros.put('.hash', {}), r76_externs.macros.get('.hash').toPattern = function _r76_t22(r124_pattern, r124_env, r124_wrapper) {
        var r124_pattern, r124_env, r124_wrapper, r124_subpatterns, r124_ms, _r124_t0;
        return _r124_t0 = r124_pattern, Array.isArray(_r124_t0) && _r124_t0.length >= 1 && '.hash' === _r124_t0[0] ? (r124_subpatterns = _r124_t0.slice(1), r124_ms = r124_subpatterns.map(function _r124_t4(r125_pair) {
            var r125_pair;
            return [
                r125_pair[0],
                r76_toPattern(r125_pair[1], r124_env, r124_wrapper)
            ];
        }), {
            'whether': function _r124_t5(r126_x) {
                var r126_x;
                return [
                    '&&',
                    r126_x
                ].concat(r124_ms.map(function _r126_t2(r127_p) {
                    var r127_p;
                    return r127_p[1].whether([
                        '.',
                        r126_x,
                        [
                            '.quote',
                            r127_p[0]
                        ]
                    ]);
                })).filter(r76_boole);
            },
            'assign': function _r124_t6(r128_x, r128_locallyQ) {
                var r128_x, r128_locallyQ;
                return ['.begin'].concat(r124_ms.map(function _r128_t2(r129_p) {
                    var r129_p;
                    return r129_p[1].assign([
                        '.',
                        r128_x,
                        [
                            '.quote',
                            r129_p[0]
                        ]
                    ], r128_locallyQ);
                }).concat([r128_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('.xhash', {}), r76_externs.macros.get('.xhash').toPattern = function _r76_t23(r130_pattern, r130_env, r130_wrapper) {
        var r130_pattern, r130_env, r130_wrapper, r130_subpatterns, r130_ms, _r130_t0;
        return _r130_t0 = r130_pattern, Array.isArray(_r130_t0) && _r130_t0.length >= 1 && '.xhash' === _r130_t0[0] ? (r130_subpatterns = _r130_t0.slice(1), r130_ms = r130_subpatterns.map(function _r130_t4(r131_pair) {
            var r131_pair;
            return [
                r1_ex(r131_pair[0], r130_env),
                r76_toPattern(r131_pair[1], r130_env, r130_wrapper)
            ];
        }), {
            'whether': function _r130_t5(r132_x) {
                var r132_x;
                return [
                    '&&',
                    r132_x
                ].concat(r130_ms.map(function _r132_t2(r133_p) {
                    var r133_p, r133_key, _r133_t0, _r133_t4;
                    return _r133_t0 = r133_p[0], Array.isArray(_r133_t0) && _r133_t0.length === 2 && '.quote' === _r133_t0[0] ? (r133_key = _r133_t0[1], r133_p[1].whether([
                        '.',
                        r132_x,
                        r133_p[0]
                    ])) : (_r133_t4 = r130_env.newt(), function (r134_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r134_t,
                                [
                                    '.',
                                    r132_x,
                                    r133_p[0]
                                ]
                            ],
                            r133_p[1].whether(r134_t)
                        ];
                    }(_r133_t4));
                })).filter(r76_boole);
            },
            'assign': function _r130_t6(r135_x, r135_locallyQ) {
                var r135_x, r135_locallyQ;
                return ['.begin'].concat(r130_ms.map(function _r135_t2(r136_p) {
                    var r136_p, r136_key, _r136_t0, _r136_t4;
                    return _r136_t0 = r136_p[0], Array.isArray(_r136_t0) && _r136_t0.length === 2 && '.quote' === _r136_t0[0] ? (r136_key = _r136_t0[1], r136_p[1].assign([
                        '.',
                        r135_x,
                        r136_p[0]
                    ], r135_locallyQ)) : (_r136_t4 = r130_env.newt(), function (r137_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r137_t,
                                [
                                    '.',
                                    r135_x,
                                    r136_p[0]
                                ]
                            ],
                            r136_p[1].assign(r137_t, r135_locallyQ)
                        ];
                    }(_r136_t4));
                }).concat([r135_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('.quasiquote', {}), r76_externs.macros.get('.quasiquote').toPattern = function _r76_t24(r138_pattern, r138_env, r138_wrapper) {
        var r138_pattern, r138_env, r138_wrapper, r138_subpatterns, _r138_t0;
        return _r138_t0 = r138_pattern, Array.isArray(_r138_t0) && _r138_t0.length >= 1 && '.quasiquote' === _r138_t0[0] ? (r138_subpatterns = _r138_t0.slice(1), r76_toPattern(r1_deQuasiquote(r138_pattern[1], 0, r138_env), r138_env, r138_wrapper)) : void 0;
    }, r76_externs.macros.put('.operatorPiece', {}), r76_externs.macros.get('.operatorPiece').toPattern = function _r76_t25(r139_pattern, r139_env, r139_wrapper) {
        var r139_pattern, r139_env, r139_wrapper;
        return r76_toPattern(r1_opSegToRegular(r139_pattern.slice(1), r139_env), r139_env, r139_wrapper);
    }, r76_externs.macros.put('&&', {}), r76_externs.macros.get('&&').toPattern = function _r76_t26(r140_pattern, r140_env, r140_wrapper) {
        var r140_pattern, r140_env, r140_wrapper, r140_subpatterns, r140_ms, _r140_t0;
        return _r140_t0 = r140_pattern, Array.isArray(_r140_t0) && _r140_t0.length >= 1 && '&&' === _r140_t0[0] ? (r140_subpatterns = _r140_t0.slice(1), r140_ms = r140_subpatterns.map(function _r140_t4(r141_x) {
            var r141_x;
            return r76_toPattern(r141_x, r140_env, r140_wrapper);
        }), {
            'whether': function _r140_t5(r142_x) {
                var r142_x, r142_f;
                return r142_f = ['&&'].concat(r140_ms.map(function _r142_t2(r143_p, r143_j) {
                    var r143_p, r143_j;
                    return r143_p.whether(r142_x);
                })).filter(r76_boole), r142_f.length === 1 ? [
                    '.quote',
                    !0
                ] : r142_f;
            },
            'assign': function _r140_t6(r144_x, r144_locallyQ) {
                var r144_x, r144_locallyQ;
                return ['.begin'].concat(r140_ms.map(function _r144_t2(r145_p, r145_j) {
                    var r145_p, r145_j;
                    return r145_p.assign(r144_x, r144_locallyQ);
                }).concat([r144_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('||', {}), r76_externs.macros.get('||').toPattern = function _r76_t27(r146_pattern, r146_env, r146_wrapper) {
        var r146_pattern, r146_env, r146_wrapper, r146_subpatterns, r146_ms, _r146_t0;
        return _r146_t0 = r146_pattern, Array.isArray(_r146_t0) && _r146_t0.length >= 1 && '||' === _r146_t0[0] ? (r146_subpatterns = _r146_t0.slice(1), r146_ms = r146_subpatterns.map(function _r146_t4(r147_x) {
            var r147_x;
            return r76_toPattern(r147_x, r146_env, r146_wrapper);
        }), {
            'whether': function _r146_t5(r148_x) {
                var r148_x;
                return ['||'].concat(r146_ms.map(function _r148_t2(r149_p, r149_j) {
                    var r149_p, r149_j;
                    return r149_p.whether(r148_x);
                })).filter(r76_boole);
            },
            'assign': function _r146_t6(r150_x, r150_locallyQ) {
                var r150_x, r150_locallyQ;
                return ['.unit'];
            }
        }) : void 0;
    }, r76_boole = function _r76_t28(r151_x) {
        var r151_x;
        return !!r151_x;
    }, r76_externs.macros.put('match', function _r76_t29(r152_form, r152_env, r152_wrapper) {
        var r152_form, r152_env, r152_wrapper, r152_pairs, r152_t, r152_f, r152_j, r152_pattern, r152_guard, r152_body, r152_pat, r152_cond, r152_tc, _r152_t0;
        for (r152_pairs = r152_form.slice(2), r152_t = r152_env.newt(), r152_f = ['.unit'], r152_j = r152_pairs.length - 1; r152_j >= 0; r152_j -= 1)
            _r152_t0 = r152_pairs[r152_j], r152_f = Array.isArray(_r152_t0) && _r152_t0.length === 2 ? (r152_pattern = _r152_t0[0], r152_body = _r152_t0[1], r152_pat = r76_toPattern(r152_pattern, r152_env, r152_wrapper), r152_cond = r152_pat.whether(r152_t), r152_cond ? [
                '.if',
                r152_cond,
                [
                    '.begin',
                    r152_pat.assign(r152_t, !0),
                    r1_ex(r152_body, r152_env)
                ],
                r152_f
            ] : [
                '.begin',
                r152_pat.assign(r152_t, !0),
                r1_ex(r152_body, r152_env)
            ]) : Array.isArray(_r152_t0) && _r152_t0.length === 3 ? (r152_pattern = _r152_t0[0], r152_guard = _r152_t0[1], r152_body = _r152_t0[2], r152_pat = r76_toPattern(r152_pattern, r152_env, r152_wrapper), r152_cond = r152_pat.whether(r152_t), r152_cond ? (r152_tc = r152_env.newt(), [
                '.begin',
                [
                    '.set',
                    r152_tc,
                    [
                        '.quote',
                        !1
                    ]
                ],
                [
                    '.if',
                    r152_cond,
                    [
                        '.begin',
                        r152_pat.assign(r152_t, !0),
                        [
                            '.if',
                            r1_ex(r152_guard, r152_env),
                            [
                                '.set',
                                r152_tc,
                                [
                                    '.quote',
                                    !0
                                ]
                            ],
                            [
                                '.set',
                                r152_tc,
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
                    r152_tc,
                    r1_ex(r152_body, r152_env),
                    r152_f
                ]
            ]) : [
                '.begin',
                r152_pat.assign(r152_t, !0),
                [
                    '.if',
                    r1_ex(r152_guard, r152_env),
                    r1_ex(r152_body, r152_env),
                    r152_f
                ]
            ]) : r152_f;
        return [
            '.begin',
            [
                '.set',
                r152_t,
                r1_ex(r152_form[1], r152_env)
            ],
            r152_f
        ];
    }), r76_externs.macros.put('regex', function _r76_t30(r153_form, r153_env) {
        var r153_form, r153_env, r153_args, r153_s, r153_flag, _r153_t0;
        return _r153_t0 = r153_form, Array.isArray(_r153_t0) && _r153_t0.length === 2 && 'regex' === _r153_t0[0] && Array.isArray(_r153_t0[1]) && _r153_t0[1].length === 2 && '.quote' === _r153_t0[1][0] ? (r153_s = _r153_t0[1][1], _r153_t0[1], [
            '.quote',
            new RegExp(r153_s)
        ]) : Array.isArray(_r153_t0) && _r153_t0.length === 3 && 'regex' === _r153_t0[0] && Array.isArray(_r153_t0[1]) && _r153_t0[1].length === 2 && '.quote' === _r153_t0[1][0] && Array.isArray(_r153_t0[2]) && _r153_t0[2].length === 2 && '.quote' === _r153_t0[2][0] ? (r153_s = _r153_t0[1][1], _r153_t0[1], r153_flag = _r153_t0[2][1], _r153_t0[2], [
            '.quote',
            new RegExp(r153_s, r153_flag)
        ]) : Array.isArray(_r153_t0) && _r153_t0.length >= 1 && 'regex' === _r153_t0[0] ? (r153_args = _r153_t0.slice(1), [
            '.new',
            r76_externs.use('RegExp')
        ].concat(r153_args)) : void 0;
    }), r76_externs.macros.put('define-macro', function _r76_t31(r154_form, r154_env) {
        var r154_form, r154_env, r154_op, r154_name, r154_body, r154_coinit, r154_ds, r154_imports, r154_names, r154_assignments, r154_macroG, r154_macroFn, r154_str, _r154_t0, _r154_t1;
        return _r154_t0 = r154_form, Array.isArray(_r154_t0) && _r154_t0.length === 3 && Array.isArray(_r154_t0[1]) && _r154_t0[1].length === 2 && '.quote' === _r154_t0[1][0] ? (r154_op = _r154_t0[0], r154_str = _r154_t0[1][1], _r154_t0[1], r154_body = _r154_t0[2], r1_ex([
            r154_op,
            r154_str,
            r154_body
        ], r154_env)) : (_r154_t1 = !1, Array.isArray(_r154_t0) && _r154_t0.length === 3 && (r154_op = _r154_t0[0], r154_name = _r154_t0[1], r154_body = _r154_t0[2], r1_atom(r154_name) ? _r154_t1 = !0 : _r154_t1 = !1), _r154_t1 ? (r154_coinit = {
            'injectForm': void 0,
            'initFn': void 0
        }, r154_ds = new r1_Scope(r154_env), r154_imports = {
            'ex': r1_ex,
            'atom': r1_wrapForSyntacticClosure(r1_atom),
            'prim': r1_wrapForSyntacticClosure(r1_prim),
            'formOf': function _r154_t6(r155_x) {
                var r155_x;
                return r155_x[1];
            },
            'scopeOf': function _r154_t7(r156_x) {
                var r156_x;
                return r156_x[2];
            },
            'definingEnv': r154_env,
            'externEnv': r76_externs,
            'require': require,
            'toPattern': r76_toPattern,
            'coinit': r154_coinit,
            'formInvalidError': r1_FormInvalidError,
            'deQuasiquote': r1_deQuasiquote,
            'opSegToRegular': r1_opSegToRegular
        }, r154_names = Object.keys(r154_imports), r154_ds.declare('$', !0), r154_assignments = ['.begin'].concat(r154_names.map(function _r154_t8(r157_name) {
            var r157_name;
            return [
                'local',
                r157_name,
                [
                    '.',
                    '$',
                    [
                        '.quote',
                        r157_name
                    ]
                ]
            ];
        })), r154_macroG = new Function(r154_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
            '.return',
            r1_ex([
                '.begin',
                r154_assignments,
                r154_body
            ], r154_ds)
        ], r154_ds, function _r154_t9(r158_form) {
            var r158_form;
            return [
                '.return',
                r158_form
            ];
        }))), r154_macroFn = r154_macroG(r154_imports), r154_env.macros.put(r154_name, function _r154_t10(r159_c, r159_e) {
            var r159_c, r159_e, r159_result, r159_s;
            return r159_result = r154_macroFn(r159_c, r159_e), r159_s = new r1_Scope(r154_env), r159_s.hanging = r159_e, r159_s.semiparent = r159_e, r1_ex(r159_result, r159_s);
        }), r154_coinit.initFn && r154_coinit.initFn(r154_env.macros.get(r154_name)), r154_coinit.injectForm ? r1_ex(r154_coinit.injectForm, r154_env) : ['.unit']) : ['.unit']);
    }), r76_externs.macros.put('macro-match', function _r76_t32(r160_form, r160_env) {
        var r160_form, r160_env, r160_c, r160_e, r160_patterns, r160_t, r160_tx, r160_tw, _r160_t0;
        return _r160_t0 = r160_form, Array.isArray(_r160_t0) && _r160_t0.length >= 3 && 'macro-match' === _r160_t0[0] ? (r160_c = _r160_t0[1], r160_e = _r160_t0[2], r160_patterns = _r160_t0.slice(3), r160_t = r160_env.newt(), r160_tx = r160_env.newt(), r160_tw = r160_env.newt(), [
            '.begin',
            [
                '.set',
                r160_t,
                r160_e
            ],
            [
                '.set',
                r160_tw,
                [
                    '.lambda',
                    [r160_tx],
                    [
                        '.return',
                        [
                            '.list',
                            [
                                '.quote',
                                '.syntactic-closure'
                            ],
                            r160_tx,
                            r160_t
                        ]
                    ]
                ]
            ],
            r76_externs.macros.get('match')([
                'match',
                r160_c
            ].concat(r160_patterns), r160_env, r160_tw)
        ]) : ['.unit'];
    }), r76_externs.pFamily = 'r', r76_externs;
}, exports.Create = r1_Create;
