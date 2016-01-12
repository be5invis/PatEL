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
    }), r76_externs.macros.put('.prefix.-', function _r76_t6(r82_form, r82_env) {
        var r82_form, r82_env;
        return [
            '-',
            r1_ex(r82_form[1], r82_env)
        ];
    }), r76_externs.macros.put('.prefix.+', function _r76_t7(r83_form, r83_env) {
        var r83_form, r83_env;
        return [
            '+',
            r1_ex(r83_form[1], r83_env)
        ];
    }), r76_externs.macros.put('.prefix.!', function _r76_t8(r84_form, r84_env) {
        var r84_form, r84_env;
        return [
            '!',
            r1_ex(r84_form[1], r84_env)
        ];
    }), r76_externs.macros.put('.prefix.*', function _r76_t9(r85_form, r85_env) {
        var r85_form, r85_env;
        return r1_ex(r85_form[1], r85_env);
    }), r76_externs.macros.put('.prefix.=', function _r76_t10(r86_form, r86_env) {
        var r86_form, r86_env;
        return r1_ex(r86_form[1], r86_env);
    }), r76_externs.macros.put('if', function _r76_t11(r87_form, r87_env) {
        var r87_form, r87_env, r87_otherwise, r87_test, r87_consequents, r87_alternates, r87_consequent, r87_alternate, _r87_t0;
        return _r87_t0 = r87_form, Array.isArray(_r87_t0) && _r87_t0.length === 3 && 'if' === _r87_t0[0] ? (r87_test = _r87_t0[1], r87_consequent = _r87_t0[2], r1_ex([
            '.if',
            r87_test,
            r87_consequent
        ], r87_env)) : Array.isArray(_r87_t0) && _r87_t0.length === 4 && 'if' === _r87_t0[0] ? (r87_test = _r87_t0[1], r87_consequent = _r87_t0[2], r87_alternate = _r87_t0[3], r1_ex([
            '.if',
            r87_test,
            r87_consequent,
            r87_alternate
        ], r87_env)) : Array.isArray(_r87_t0) && _r87_t0.length === 3 && 'if' === _r87_t0[0] && Array.isArray(_r87_t0[2]) && _r87_t0[2].length >= 1 && 'then' === _r87_t0[2][0] ? (r87_test = _r87_t0[1], r87_consequents = _r87_t0[2].slice(1), _r87_t0[2], r1_ex([
            '.if',
            r87_test,
            ['.begin'].concat(r87_consequents)
        ], r87_env)) : Array.isArray(_r87_t0) && _r87_t0.length === 4 && 'if' === _r87_t0[0] && Array.isArray(_r87_t0[2]) && _r87_t0[2].length >= 1 && 'then' === _r87_t0[2][0] && Array.isArray(_r87_t0[3]) && _r87_t0[3].length >= 1 && 'else' === _r87_t0[3][0] ? (r87_test = _r87_t0[1], r87_consequents = _r87_t0[2].slice(1), _r87_t0[2], r87_alternates = _r87_t0[3].slice(1), _r87_t0[3], r1_ex([
            '.if',
            r87_test,
            ['.begin'].concat(r87_consequents),
            ['.begin'].concat(r87_alternates)
        ], r87_env)) : (r87_otherwise = _r87_t0, r76_reportInvalid(r87_otherwise, 'Invalid Conditional Form'));
    }), r76_externs.macros.put('let', function _r76_t12(r88_form, r88_env) {
        var r88_form, r88_env, r88_pairs, r88_args, r88_paras, r88_j, r88_arg, r88_param, r88_useless, _r88_t0, _r88_t1;
        for (r88_pairs = r88_form.slice(1, -1), r88_args = [], r88_paras = [], r88_j = 0; r88_j < r88_pairs.length; r88_j += 1)
            _r88_t0 = r88_pairs[r88_j], Array.isArray(_r88_t0) && _r88_t0.length >= 2 ? (r88_arg = _r88_t0[0], r88_param = _r88_t0[1], r88_useless = _r88_t0.slice(2), r88_args.push(r88_arg), r88_paras.push(r88_param)) : Array.isArray(_r88_t0) && _r88_t0.length === 2 ? (r88_arg = _r88_t0[0], r88_param = _r88_t0[1], r88_args.push(r88_arg), r88_paras.push(r88_param)) : (_r88_t1 = !1, Array.isArray(_r88_t0) && _r88_t0.length === 1 && (r88_arg = _r88_t0[0], r1_atom(r88_arg) ? _r88_t1 = !0 : _r88_t1 = !1), _r88_t1 && (r88_args.push(r88_arg), r88_paras.push(r88_env.use(r88_arg))));
        return r1_ex([
            '.beta',
            r88_args,
            r88_form[r88_form.length - 1]
        ].concat(r88_paras), r88_env);
    }), r76_externs.macros.put('object', function _r76_t13(r89_form, r89_env) {
        var r89_form, r89_env, r89_pairs;
        return r89_pairs = r89_form.slice(1).map(function _r89_t2(r90_pair) {
            var r90_pair, r90_method, r90_param, r90_value, r90_property, _r90_t0, _r90_t1, _r90_t2, _r90_t3, _r90_t4, _r90_t5, _r90_t6, _r90_t7;
            return _r90_t0 = r90_pair, _r90_t7 = !1, Array.isArray(_r90_t0) && _r90_t0.length === 3 && '=' === _r90_t0[0] && (r90_property = _r90_t0[1], r90_value = _r90_t0[2], r1_atom(r90_property) ? _r90_t7 = !0 : _r90_t7 = !1), _r90_t7 ? [
                [
                    '.quote',
                    r90_property
                ],
                r90_value
            ] : (_r90_t6 = !1, Array.isArray(_r90_t0) && _r90_t0.length === 3 && '=' === _r90_t0[0] && (r90_property = _r90_t0[1], r90_value = _r90_t0[2], r1_atom(r90_property) ? _r90_t6 = !0 : _r90_t6 = !1), _r90_t6 ? [
                [
                    '.quote',
                    r90_property
                ],
                r90_value
            ] : (_r90_t5 = !1, Array.isArray(_r90_t0) && _r90_t0.length === 2 && (r90_property = _r90_t0[0], r90_value = _r90_t0[1], r1_atom(r90_property) ? _r90_t5 = !0 : _r90_t5 = !1), _r90_t5 ? [
                [
                    '.quote',
                    r90_property
                ],
                r90_value
            ] : (_r90_t4 = !1, Array.isArray(_r90_t0) && _r90_t0.length === 1 && (r90_property = _r90_t0[0], r1_atom(r90_property) ? _r90_t4 = !0 : _r90_t4 = !1), _r90_t4 ? [
                [
                    '.quote',
                    r90_property
                ],
                r90_property
            ] : (r90_property = _r90_t0, r1_atom(r90_property) ? [
                [
                    '.quote',
                    r90_property
                ],
                r90_property
            ] : Array.isArray(_r90_t0) && _r90_t0.length === 3 && '=' === _r90_t0[0] && Array.isArray(_r90_t0[1]) && _r90_t0[1].length === 2 && '.quote' === _r90_t0[1][0] ? (r90_property = _r90_t0[1][1], _r90_t0[1], r90_value = _r90_t0[2], [
                [
                    '.quote',
                    r90_property
                ],
                r90_value
            ]) : Array.isArray(_r90_t0) && _r90_t0.length === 3 && '=' === _r90_t0[0] && Array.isArray(_r90_t0[1]) && _r90_t0[1].length === 2 && '.quote' === _r90_t0[1][0] ? (r90_property = _r90_t0[1][1], _r90_t0[1], r90_value = _r90_t0[2], [
                [
                    '.quote',
                    r90_property
                ],
                r90_value
            ]) : Array.isArray(_r90_t0) && _r90_t0.length === 2 && Array.isArray(_r90_t0[0]) && _r90_t0[0].length === 2 && '.quote' === _r90_t0[0][0] ? (r90_property = _r90_t0[0][1], _r90_t0[0], r90_value = _r90_t0[1], [
                [
                    '.quote',
                    r90_property
                ],
                r90_value
            ]) : (_r90_t3 = !1, Array.isArray(_r90_t0) && _r90_t0.length === 3 && '=' === _r90_t0[0] && Array.isArray(_r90_t0[1]) && _r90_t0[1].length >= 1 && (r90_method = _r90_t0[1][0], r90_param = _r90_t0[1].slice(1), _r90_t0[1], r90_value = _r90_t0[2], r1_atom(r90_method) ? _r90_t3 = !0 : _r90_t3 = !1), _r90_t3 ? [
                [
                    '.quote',
                    r90_method
                ],
                [
                    '.lambda',
                    r90_param,
                    r90_value
                ]
            ] : (_r90_t2 = !1, Array.isArray(_r90_t0) && _r90_t0.length === 3 && '=' === _r90_t0[0] && Array.isArray(_r90_t0[1]) && _r90_t0[1].length >= 1 && (r90_method = _r90_t0[1][0], r90_param = _r90_t0[1].slice(1), _r90_t0[1], r90_value = _r90_t0[2], r1_atom(r90_method) ? _r90_t2 = !0 : _r90_t2 = !1), _r90_t2 ? [
                [
                    '.quote',
                    r90_method
                ],
                [
                    '.lambda',
                    r90_param,
                    r90_value
                ]
            ] : (_r90_t1 = !1, Array.isArray(_r90_t0) && _r90_t0.length === 2 && Array.isArray(_r90_t0[0]) && _r90_t0[0].length >= 1 && (r90_method = _r90_t0[0][0], r90_param = _r90_t0[0].slice(1), _r90_t0[0], r90_value = _r90_t0[1], r1_atom(r90_method) ? _r90_t1 = !0 : _r90_t1 = !1), _r90_t1 ? [
                [
                    '.quote',
                    r90_method
                ],
                [
                    '.lambda',
                    r90_param,
                    r90_value
                ]
            ] : void 0)))))));
        }), r1_ex(['.xhash'].concat(r89_pairs.filter(function _r89_t3(r91_x) {
            var r91_x;
            return r91_x;
        })), r89_env);
    }), r76_externs.macros.get('list').toPattern = function _r76_t14(r92_form, r92_env, r92_wrapper) {
        var r92_form, r92_env, r92_wrapper;
        return r76_toPattern(['.list'].concat(r92_form.slice(1)), r92_env, r92_wrapper);
    }, r76_externs.macros.get('object').toPattern = function _r76_t15(r93_form, r93_env, r93_wrapper) {
        var r93_form, r93_env, r93_wrapper, r93_pairs;
        return r93_pairs = r93_form.slice(1).map(function _r93_t2(r94_pair) {
            var r94_pair, r94_property, r94_value, _r94_t0, _r94_t1, _r94_t2, _r94_t3, _r94_t4;
            if (_r94_t0 = r94_pair, _r94_t4 = !1, Array.isArray(_r94_t0) && _r94_t0.length === 3 && '=' === _r94_t0[0] && (r94_property = _r94_t0[1], r94_value = _r94_t0[2], r1_atom(r94_property) ? _r94_t4 = !0 : _r94_t4 = !1), _r94_t4)
                return [
                    r94_property,
                    r94_value
                ];
            else if (_r94_t3 = !1, Array.isArray(_r94_t0) && _r94_t0.length === 3 && '=' === _r94_t0[0] && (r94_property = _r94_t0[1], r94_value = _r94_t0[2], r1_atom(r94_property) ? _r94_t3 = !0 : _r94_t3 = !1), _r94_t3)
                return [
                    r94_property,
                    r94_value
                ];
            else if (_r94_t2 = !1, Array.isArray(_r94_t0) && _r94_t0.length === 2 && (r94_property = _r94_t0[0], r94_value = _r94_t0[1], r1_atom(r94_property) ? _r94_t2 = !0 : _r94_t2 = !1), _r94_t2)
                return [
                    r94_property,
                    r94_value
                ];
            else if (_r94_t1 = !1, Array.isArray(_r94_t0) && _r94_t0.length === 1 && (r94_property = _r94_t0[0], r1_atom(r94_property) ? _r94_t1 = !0 : _r94_t1 = !1), _r94_t1)
                return [
                    r94_property,
                    r94_property
                ];
            else if (r94_property = _r94_t0, r1_atom(r94_property))
                return [
                    r94_property,
                    r94_property
                ];
            else if (Array.isArray(_r94_t0) && _r94_t0.length === 3 && '=' === _r94_t0[0] && Array.isArray(_r94_t0[1]) && _r94_t0[1].length === 2 && '.quote' === _r94_t0[1][0])
                return r94_property = _r94_t0[1][1], _r94_t0[1], r94_value = _r94_t0[2], [
                    r94_property,
                    r94_value
                ];
            else if (Array.isArray(_r94_t0) && _r94_t0.length === 3 && '=' === _r94_t0[0] && Array.isArray(_r94_t0[1]) && _r94_t0[1].length === 2 && '.quote' === _r94_t0[1][0])
                return r94_property = _r94_t0[1][1], _r94_t0[1], r94_value = _r94_t0[2], [
                    r94_property,
                    r94_value
                ];
            else if (Array.isArray(_r94_t0) && _r94_t0.length === 2 && Array.isArray(_r94_t0[0]) && _r94_t0[0].length === 2 && '.quote' === _r94_t0[0][0])
                return r94_property = _r94_t0[0][1], _r94_t0[0], r94_value = _r94_t0[1], [
                    r94_property,
                    r94_value
                ];
            else
                throw new r1_FormInvalidError(r93_form, 'Invalid Assignment Left-hand Side');
        }), r76_toPattern(['.hash'].concat(r93_pairs), r93_env, r93_wrapper);
    }, r76_externs.macros.put('piecewise', function _r76_t16(r95_form, r95_env) {
        var r95_form, r95_env, r95_pairs, r95_f, r95_j, r95_otherwise, r95_condition, r95_consequent, _r95_t0, _r95_t1;
        if (_r95_t0 = r95_form, Array.isArray(_r95_t0) && _r95_t0.length >= 1 && 'piecewise' === _r95_t0[0]) {
            for (r95_pairs = _r95_t0.slice(1), r95_f = ['.unit'], r95_j = r95_pairs.length - 1; r95_j >= 0; r95_j -= 1) {
                if (_r95_t1 = r95_pairs[r95_j], !(Array.isArray(_r95_t1) && _r95_t1.length === 2))
                    throw r95_otherwise = _r95_t1, new r1_FormInvalidError(r95_otherwise, 'Invalid Piecewise Segment');
                r95_condition = _r95_t1[0], r95_consequent = _r95_t1[1], r95_f = [
                    '.if',
                    r1_ex(r95_condition, r95_env),
                    r1_ex(r95_consequent, r95_env),
                    r95_f
                ];
            }
            return r95_f;
        } else
            return void 0;
    }), r76_AssignWithMod = function _r76_t17(r96_left, r96_right, r96_mod, r96_env, r96_locallyQ) {
        var r96_left, r96_right, r96_mod, r96_env, r96_locallyQ, r96_callee, r96_paras, r96_pat, r96_t, r96_whatever, r96_a, r96_e, r96_id, _r96_t0, _r96_t1, _r96_t2, _r96_t3, _r96_t4, _r96_t5;
        if (_r96_t0 = r96_left, r96_id = _r96_t0, r1_atom(r96_id))
            return r96_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r96_id
                ], r96_env),
                r1_ex([
                    r96_mod,
                    r96_right
                ], r96_env)
            ] : [
                '.set',
                r1_ex(r96_left, r96_env),
                r1_ex([
                    r96_mod,
                    r96_right
                ], r96_env)
            ];
        else if (_r96_t5 = !1, Array.isArray(_r96_t0) && _r96_t0.length === 2 && '.id' === _r96_t0[0] && (r96_id = _r96_t0[1], r1_atom(r96_id) ? _r96_t5 = !0 : _r96_t5 = !1), _r96_t5)
            return r96_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r96_id
                ], r96_env),
                r1_ex([
                    r96_mod,
                    r96_right
                ], r96_env)
            ] : [
                '.set',
                r1_ex(r96_left, r96_env),
                r1_ex([
                    r96_mod,
                    r96_right
                ], r96_env)
            ];
        else if (_r96_t4 = !1, Array.isArray(_r96_t0) && _r96_t0.length === 3 && '.id' === _r96_t0[0] && (r96_id = _r96_t0[1], r96_e = _r96_t0[2], r1_atom(r96_id) && (r96_e === r96_env || !r96_locallyQ) ? _r96_t4 = !0 : _r96_t4 = !1), _r96_t4)
            return r96_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r96_id
                ], r96_e),
                r1_ex([
                    r96_mod,
                    r96_right
                ], r96_e)
            ] : [
                '.set',
                r1_ex(r96_left, r96_e),
                r1_ex([
                    r96_mod,
                    r96_right
                ], r96_e)
            ];
        else if (_r96_t3 = !1, Array.isArray(_r96_t0) && _r96_t0.length === 3 && '.id' === _r96_t0[0] && (r96_id = _r96_t0[1], r96_e = _r96_t0[2], r1_atom(r96_id) && r96_e !== r96_env && r96_locallyQ ? _r96_t3 = !0 : _r96_t3 = !1), _r96_t3)
            throw new r1_FormInvalidError(r96_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r96_t0) && _r96_t0.length === 2 && '.local' === _r96_t0[0])
            return r96_a = _r96_t0[1], r76_AssignWithMod(r96_a, r96_right, r96_mod, r96_env, !0);
        else if (_r96_t2 = !1, Array.isArray(_r96_t0) && _r96_t0.length === 3 && '.syntactic-closure' === _r96_t0[0] && (r96_a = _r96_t0[1], r96_e = _r96_t0[2], r96_e === r96_env || !r96_locallyQ ? _r96_t2 = !0 : _r96_t2 = !1), _r96_t2)
            return r76_AssignWithMod(r96_a, r96_right, r96_mod, r96_env, r96_locallyQ);
        else if (_r96_t1 = !1, Array.isArray(_r96_t0) && _r96_t0.length === 3 && '.syntactic-closure' === _r96_t0[0] && (r96_a = _r96_t0[1], r96_e = _r96_t0[2], r96_e !== r96_env && r96_locallyQ ? _r96_t1 = !0 : _r96_t1 = !1), _r96_t1)
            throw new r1_FormInvalidError(r96_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r96_t0) && _r96_t0.length >= 1 && '.revcall' === _r96_t0[0])
            return r96_whatever = _r96_t0.slice(1), r76_AssignWithMod([].concat(r96_whatever), r96_right, r96_mod, r96_env, r96_locallyQ);
        else if (Array.isArray(_r96_t0) && _r96_t0.length >= 1)
            if (r96_callee = _r96_t0[0], r96_paras = _r96_t0.slice(1), r1_atom(r96_callee) && r96_env.macros.has(r96_callee) && r96_env.macros.get(r96_callee).toPattern)
                return r96_pat = r76_toPattern(r96_left, r96_env), r96_t = r96_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r96_t,
                        r1_ex([
                            r96_mod,
                            r96_right
                        ], r96_env)
                    ],
                    r96_pat.assign(r96_t, r96_locallyQ)
                ];
            else if (r1_atom(r96_callee) && r96_env.macros.has(r96_callee))
                throw new r1_FormInvalidError(r96_left, 'Invalid Assignment Left-hand Side');
            else
                return r1_prim(r96_callee) ? [
                    '.set',
                    r1_ex(r96_left, r96_env),
                    r1_ex([
                        r96_mod,
                        r96_right
                    ], r96_env)
                ] : r1_atom(r96_callee) ? r96_locallyQ ? [
                    '.set',
                    r1_ex([
                        '.local',
                        r96_callee
                    ], r96_env),
                    r1_ex([
                        r96_mod,
                        [
                            '.lambda',
                            [].concat(r96_paras),
                            r96_right
                        ]
                    ], r96_env)
                ] : [
                    '.set',
                    r1_ex(r96_callee, r96_env),
                    r1_ex([
                        r96_mod,
                        [
                            '.lambda',
                            [].concat(r96_paras),
                            r96_right
                        ]
                    ], r96_env)
                ] : [
                    '.set',
                    r1_ex(r96_callee, r96_env),
                    r1_ex([
                        r96_mod,
                        [
                            '.lambda',
                            [].concat(r96_paras),
                            r96_right
                        ]
                    ], r96_env)
                ];
        else
            throw new r1_FormInvalidError(r96_left, 'Invalid Assignment Left-hand Side');
    }, r76_Assign = function _r76_t18(r97_left, r97_right, r97_env, r97_locallyQ) {
        var r97_left, r97_right, r97_env, r97_locallyQ;
        return r76_AssignWithMod(r97_left, r97_right, '.unquote', r97_env, r97_locallyQ);
    }, r76_externs.macros.put('define', function _r76_t19(r98_form, r98_env) {
        var r98_form, r98_env, r98_any, r98_op, r98_left, r98_right, r98_modifer, _r98_t0, _r98_t1;
        if (_r98_t0 = r98_form, Array.isArray(_r98_t0) && _r98_t0.length === 4)
            return r98_op = _r98_t0[0], r98_modifer = _r98_t0[1], r98_left = _r98_t0[2], r98_right = _r98_t0[3], r76_AssignWithMod(r98_left, r98_right, r98_modifer, r98_env, !0);
        else if (Array.isArray(_r98_t0) && _r98_t0.length === 3)
            return r98_op = _r98_t0[0], r98_left = _r98_t0[1], r98_right = _r98_t0[2], r76_Assign(r98_left, r98_right, r98_env, !0);
        else if (_r98_t1 = !1, Array.isArray(_r98_t0) && _r98_t0.length === 2 && (r98_op = _r98_t0[0], r98_left = _r98_t0[1], r1_atom(r98_left) ? _r98_t1 = !0 : _r98_t1 = !1), _r98_t1)
            return [
                '.local',
                r98_left
            ];
        else
            throw r98_any = _r98_t0, new r1_FormInvalidError(r98_any, 'Invalid Assignment');
    }), r76_externs.macros.put('local', r76_externs.macros.get('define')), r76_externs.macros.put('set', function _r76_t20(r99_form, r99_env) {
        var r99_form, r99_env, r99_any, r99_op, r99_left, r99_right, _r99_t0;
        if (_r99_t0 = r99_form, Array.isArray(_r99_t0) && _r99_t0.length === 3)
            return r99_op = _r99_t0[0], r99_left = _r99_t0[1], r99_right = _r99_t0[2], r76_Assign(r99_left, r99_right, r99_env, !1);
        else
            throw r99_any = _r99_t0, new r1_FormInvalidError(r99_any, 'Invalid Assignment');
    }), r76_externs.macros.put('=', r76_externs.macros.get('set')), r76_externs.macros.put('inc', function _r76_t21(r100_form, r100_env) {
        var r100_form, r100_env, r100_op, r100_id, r100_shift, _r100_t0;
        return _r100_t0 = r100_form, Array.isArray(_r100_t0) && _r100_t0.length === 2 ? (r100_op = _r100_t0[0], r100_id = _r100_t0[1], r76_Assign(r100_id, [
            '+',
            r100_id,
            [
                '.quote',
                1
            ]
        ], r100_env, !1)) : Array.isArray(_r100_t0) && _r100_t0.length === 3 ? (r100_op = _r100_t0[0], r100_id = _r100_t0[1], r100_shift = _r100_t0[2], r76_Assign(r100_id, [
            '+',
            r100_id,
            r100_shift
        ], r100_env, !1)) : Array.isArray(_r100_t0) && _r100_t0.length === 4 && 'by' === _r100_t0[2] ? (r100_op = _r100_t0[0], r100_id = _r100_t0[1], r100_shift = _r100_t0[3], r76_Assign(r100_id, [
            '+',
            r100_id,
            r100_shift
        ], r100_env, !1)) : void 0;
    }), r76_externs.macros.put('dec', function _r76_t22(r101_form, r101_env) {
        var r101_form, r101_env, r101_op, r101_id, r101_shift, _r101_t0;
        return _r101_t0 = r101_form, Array.isArray(_r101_t0) && _r101_t0.length === 2 ? (r101_op = _r101_t0[0], r101_id = _r101_t0[1], r76_Assign(r101_id, [
            '-',
            r101_id,
            [
                '.quote',
                1
            ]
        ], r101_env, !1)) : Array.isArray(_r101_t0) && _r101_t0.length === 3 ? (r101_op = _r101_t0[0], r101_id = _r101_t0[1], r101_shift = _r101_t0[2], r76_Assign(r101_id, [
            '-',
            r101_id,
            r101_shift
        ], r101_env, !1)) : Array.isArray(_r101_t0) && _r101_t0.length === 4 && 'by' === _r101_t0[2] ? (r101_op = _r101_t0[0], r101_id = _r101_t0[1], r101_shift = _r101_t0[3], r76_Assign(r101_id, [
            '-',
            r101_id,
            r101_shift
        ], r101_env, !1)) : void 0;
    }), r76_externs.macros.put('for', function _r76_t23(r102_form, r102_env) {
        var r102_form, r102_env, r102_init, r102_test, r102_step, r102_body, _r102_t0;
        return _r102_t0 = r102_form, Array.isArray(_r102_t0) && _r102_t0.length === 5 && 'for' === _r102_t0[0] ? (r102_init = _r102_t0[1], r102_test = _r102_t0[2], r102_step = _r102_t0[3], r102_body = _r102_t0[4], [
            '.begin',
            r1_ex(r102_init, r102_env),
            [
                '.while',
                r1_ex(r102_test, r102_env),
                [
                    '.begin',
                    r1_ex(r102_body, r102_env),
                    r1_ex(r102_step, r102_env)
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
    ]), r76_toPattern = function _r76_t24(r103_pattern, r103_env, r103_wrapper) {
        var r103_pattern, r103_env, r103_wrapper, r103_callee, r103_subpatterns, r103_ms, r103_t, r103_whatever, r103_x, r103_id, _r103_t0, _r103_t1;
        if (_r103_t0 = r103_pattern, r103_id = _r103_t0, r1_atom(r103_id))
            return {
                'whether': function _r103_t5(r115_x) {
                    var r115_x;
                    return null;
                },
                'assign': function _r103_t6(r116_x, r116_locallyQ) {
                    var r116_x, r116_locallyQ;
                    return [
                        '.set',
                        r1_ex(r116_locallyQ ? [
                            '.local',
                            r103_id
                        ] : r103_id, r103_env),
                        r103_wrapper ? [
                            r103_wrapper,
                            r116_x
                        ] : r116_x
                    ];
                }
            };
        else if (_r103_t1 = !1, Array.isArray(_r103_t0) && _r103_t0.length === 2 && '.id' === _r103_t0[0] && (r103_id = _r103_t0[1], r1_atom(r103_id) ? _r103_t1 = !0 : _r103_t1 = !1), _r103_t1)
            return {
                'whether': function _r103_t8(r113_x) {
                    var r113_x;
                    return null;
                },
                'assign': function _r103_t9(r114_x, r114_locallyQ) {
                    var r114_x, r114_locallyQ;
                    return [
                        '.set',
                        r1_ex(r114_locallyQ ? [
                            '.local',
                            r103_id
                        ] : r103_id, r103_env),
                        r103_wrapper ? [
                            r103_wrapper,
                            r114_x
                        ] : r114_x
                    ];
                }
            };
        else if (Array.isArray(_r103_t0) && _r103_t0.length === 2 && '.quote' === _r103_t0[0])
            return r103_x = _r103_t0[1], {
                'whether': function _r103_t11(r111_x) {
                    var r111_x;
                    return [
                        '===',
                        r1_ex(r103_pattern, r103_env),
                        r111_x
                    ];
                },
                'assign': function _r103_t12(r112_x, r112_locallyQ) {
                    var r112_x, r112_locallyQ;
                    return ['.unit'];
                }
            };
        else if (Array.isArray(_r103_t0) && _r103_t0.length >= 1 && '.' === _r103_t0[0])
            return r103_whatever = _r103_t0.slice(1), {
                'whether': function _r103_t14(r109_x) {
                    var r109_x;
                    return null;
                },
                'assign': function _r103_t15(r110_x, r110_locallyQ) {
                    var r110_x, r110_locallyQ;
                    return [
                        '.set',
                        r1_ex(r103_pattern, r103_env),
                        r103_wrapper ? [
                            r103_wrapper,
                            r110_x
                        ] : r110_x
                    ];
                }
            };
        else if (Array.isArray(_r103_t0) && _r103_t0.length >= 1)
            if (r103_callee = _r103_t0[0], r103_subpatterns = _r103_t0.slice(1), r1_atom(r103_callee) && r103_env.macros.has(r103_callee) && r103_env.macros.get(r103_callee).toPattern)
                return r103_env.macros.get(r103_callee).toPattern(r103_pattern, r103_env, r103_wrapper);
            else if (r1_atom(r103_callee) && r103_env.macros.has(r103_callee))
                throw new r1_FormInvalidError(r103_pattern, 'Invalid Pattern');
            else
                return r103_ms = r103_subpatterns.map(function _r103_t20(r104_x) {
                    var r104_x;
                    return r76_toPattern(r104_x, r103_env, r103_wrapper);
                }), r103_t = r103_env.newt(), {
                    'whether': function _r103_t21(r105_x) {
                        var r105_x;
                        return [
                            '&&',
                            [
                                '.set',
                                r103_t,
                                [
                                    [
                                        '.',
                                        r1_ex(r103_callee, r103_env),
                                        [
                                            '.quote',
                                            'unapply'
                                        ]
                                    ],
                                    r105_x,
                                    [
                                        '.quote',
                                        r103_ms.length
                                    ]
                                ]
                            ]
                        ].concat(r103_ms.map(function _r105_t2(r106_p, r106_j) {
                            var r106_p, r106_j;
                            return r106_p.whether([
                                '.',
                                r103_t,
                                [
                                    '.quote',
                                    r106_j
                                ]
                            ]);
                        })).filter(r76_boole);
                    },
                    'assign': function _r103_t22(r107_x, r107_locallyQ) {
                        var r107_x, r107_locallyQ;
                        return ['.begin'].concat(r103_ms.map(function _r107_t2(r108_p, r108_j) {
                            var r108_p, r108_j;
                            return r108_p.assign([
                                '.',
                                r103_t,
                                [
                                    '.quote',
                                    r108_j
                                ]
                            ], r107_locallyQ);
                        }));
                    }
                };
        else
            return void 0;
    }, r76_externs.macros.put('.list', {}), r76_externs.macros.get('.list').toPattern = function _r76_t25(r117_pattern, r117_env, r117_wrapper) {
        var r117_pattern, r117_env, r117_wrapper, r117_subpatterns, r117_ms, _r117_t0;
        return _r117_t0 = r117_pattern, Array.isArray(_r117_t0) && _r117_t0.length >= 1 && '.list' === _r117_t0[0] ? (r117_subpatterns = _r117_t0.slice(1), r117_ms = r117_subpatterns.map(function _r117_t4(r118_x) {
            var r118_x;
            return r76_toPattern(r118_x, r117_env, r117_wrapper);
        }), {
            'whether': function _r117_t5(r119_x) {
                var r119_x;
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
                        r119_x
                    ],
                    [
                        '===',
                        [
                            '.',
                            r119_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r117_ms.length
                        ]
                    ]
                ].concat(r117_ms.map(function _r119_t2(r120_p, r120_j) {
                    var r120_p, r120_j;
                    return r120_p.whether([
                        '.',
                        r119_x,
                        [
                            '.quote',
                            r120_j
                        ]
                    ]);
                })).filter(r76_boole);
            },
            'assign': function _r117_t6(r121_x, r121_locallyQ) {
                var r121_x, r121_locallyQ;
                return ['.begin'].concat(r117_ms.map(function _r121_t2(r122_p, r122_j) {
                    var r122_p, r122_j;
                    return r122_p.assign([
                        '.',
                        r121_x,
                        [
                            '.quote',
                            r122_j
                        ]
                    ], r121_locallyQ);
                }).concat([r121_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('.conslist', {}), r76_externs.macros.get('.conslist').toPattern = function _r76_t26(r123_pattern, r123_env, r123_wrapper) {
        var r123_pattern, r123_env, r123_wrapper, r123_subpatterns, r123_ms, r123_final, _r123_t0;
        return _r123_t0 = r123_pattern, Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.conslist' === _r123_t0[0] ? (r123_subpatterns = _r123_t0.slice(1), r123_ms = r123_pattern.slice(1, -1).map(function _r123_t4(r124_x) {
            var r124_x;
            return r76_toPattern(r124_x, r123_env, r123_wrapper);
        }), r123_final = r76_toPattern(r123_pattern[r123_pattern.length - 1], r123_env), {
            'whether': function _r123_t5(r125_x) {
                var r125_x;
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
                        r125_x
                    ],
                    [
                        '>=',
                        [
                            '.',
                            r125_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r123_ms.length
                        ]
                    ]
                ].concat(r123_ms.map(function _r125_t2(r126_p, r126_j) {
                    var r126_p, r126_j;
                    return r126_p.whether([
                        '.',
                        r125_x,
                        [
                            '.quote',
                            r126_j
                        ]
                    ]);
                }).concat([r123_final.whether([
                        [
                            '.',
                            r125_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r123_ms.length
                        ]
                    ])])).filter(r76_boole);
            },
            'assign': function _r123_t6(r127_x, r127_locallyQ) {
                var r127_x, r127_locallyQ;
                return ['.begin'].concat(r123_ms.map(function _r127_t2(r128_p, r128_j) {
                    var r128_p, r128_j;
                    return r128_p.assign([
                        '.',
                        r127_x,
                        [
                            '.quote',
                            r128_j
                        ]
                    ], r127_locallyQ);
                })).concat([r123_final.assign(r123_wrapper ? [
                        [
                            '.',
                            [
                                [
                                    '.',
                                    r127_x,
                                    [
                                        '.quote',
                                        'slice'
                                    ]
                                ],
                                [
                                    '.quote',
                                    r123_ms.length
                                ]
                            ],
                            [
                                '.quote',
                                'map'
                            ]
                        ],
                        r123_wrapper
                    ] : [
                        [
                            '.',
                            r127_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r123_ms.length
                        ]
                    ], r127_locallyQ)]).concat([r127_x]);
            }
        }) : void 0;
    }, r76_externs.macros.put('.hash', {}), r76_externs.macros.get('.hash').toPattern = function _r76_t27(r129_pattern, r129_env, r129_wrapper) {
        var r129_pattern, r129_env, r129_wrapper, r129_subpatterns, r129_ms, _r129_t0;
        return _r129_t0 = r129_pattern, Array.isArray(_r129_t0) && _r129_t0.length >= 1 && '.hash' === _r129_t0[0] ? (r129_subpatterns = _r129_t0.slice(1), r129_ms = r129_subpatterns.map(function _r129_t4(r130_pair) {
            var r130_pair;
            return [
                r130_pair[0],
                r76_toPattern(r130_pair[1], r129_env, r129_wrapper)
            ];
        }), {
            'whether': function _r129_t5(r131_x) {
                var r131_x;
                return [
                    '&&',
                    r131_x
                ].concat(r129_ms.map(function _r131_t2(r132_p) {
                    var r132_p;
                    return r132_p[1].whether([
                        '.',
                        r131_x,
                        [
                            '.quote',
                            r132_p[0]
                        ]
                    ]);
                })).filter(r76_boole);
            },
            'assign': function _r129_t6(r133_x, r133_locallyQ) {
                var r133_x, r133_locallyQ;
                return ['.begin'].concat(r129_ms.map(function _r133_t2(r134_p) {
                    var r134_p;
                    return r134_p[1].assign([
                        '.',
                        r133_x,
                        [
                            '.quote',
                            r134_p[0]
                        ]
                    ], r133_locallyQ);
                }).concat([r133_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('.xhash', {}), r76_externs.macros.get('.xhash').toPattern = function _r76_t28(r135_pattern, r135_env, r135_wrapper) {
        var r135_pattern, r135_env, r135_wrapper, r135_subpatterns, r135_ms, _r135_t0;
        return _r135_t0 = r135_pattern, Array.isArray(_r135_t0) && _r135_t0.length >= 1 && '.xhash' === _r135_t0[0] ? (r135_subpatterns = _r135_t0.slice(1), r135_ms = r135_subpatterns.map(function _r135_t4(r136_pair) {
            var r136_pair;
            return [
                r1_ex(r136_pair[0], r135_env),
                r76_toPattern(r136_pair[1], r135_env, r135_wrapper)
            ];
        }), {
            'whether': function _r135_t5(r137_x) {
                var r137_x;
                return [
                    '&&',
                    r137_x
                ].concat(r135_ms.map(function _r137_t2(r138_p) {
                    var r138_p, r138_key, _r138_t0, _r138_t4;
                    return _r138_t0 = r138_p[0], Array.isArray(_r138_t0) && _r138_t0.length === 2 && '.quote' === _r138_t0[0] ? (r138_key = _r138_t0[1], r138_p[1].whether([
                        '.',
                        r137_x,
                        r138_p[0]
                    ])) : (_r138_t4 = r135_env.newt(), function (r139_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r139_t,
                                [
                                    '.',
                                    r137_x,
                                    r138_p[0]
                                ]
                            ],
                            r138_p[1].whether(r139_t)
                        ];
                    }(_r138_t4));
                })).filter(r76_boole);
            },
            'assign': function _r135_t6(r140_x, r140_locallyQ) {
                var r140_x, r140_locallyQ;
                return ['.begin'].concat(r135_ms.map(function _r140_t2(r141_p) {
                    var r141_p, r141_key, _r141_t0, _r141_t4;
                    return _r141_t0 = r141_p[0], Array.isArray(_r141_t0) && _r141_t0.length === 2 && '.quote' === _r141_t0[0] ? (r141_key = _r141_t0[1], r141_p[1].assign([
                        '.',
                        r140_x,
                        r141_p[0]
                    ], r140_locallyQ)) : (_r141_t4 = r135_env.newt(), function (r142_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r142_t,
                                [
                                    '.',
                                    r140_x,
                                    r141_p[0]
                                ]
                            ],
                            r141_p[1].assign(r142_t, r140_locallyQ)
                        ];
                    }(_r141_t4));
                }).concat([r140_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('.quasiquote', {}), r76_externs.macros.get('.quasiquote').toPattern = function _r76_t29(r143_pattern, r143_env, r143_wrapper) {
        var r143_pattern, r143_env, r143_wrapper, r143_subpatterns, _r143_t0;
        return _r143_t0 = r143_pattern, Array.isArray(_r143_t0) && _r143_t0.length >= 1 && '.quasiquote' === _r143_t0[0] ? (r143_subpatterns = _r143_t0.slice(1), r76_toPattern(r1_deQuasiquote(r143_pattern[1], 0, r143_env), r143_env, r143_wrapper)) : void 0;
    }, r76_externs.macros.put('.operatorPiece', {}), r76_externs.macros.get('.operatorPiece').toPattern = function _r76_t30(r144_pattern, r144_env, r144_wrapper) {
        var r144_pattern, r144_env, r144_wrapper;
        return r76_toPattern(r1_opSegToRegular(r144_pattern.slice(1), r144_env), r144_env, r144_wrapper);
    }, r76_externs.macros.put('&&', {}), r76_externs.macros.get('&&').toPattern = function _r76_t31(r145_pattern, r145_env, r145_wrapper) {
        var r145_pattern, r145_env, r145_wrapper, r145_subpatterns, r145_ms, _r145_t0;
        return _r145_t0 = r145_pattern, Array.isArray(_r145_t0) && _r145_t0.length >= 1 && '&&' === _r145_t0[0] ? (r145_subpatterns = _r145_t0.slice(1), r145_ms = r145_subpatterns.map(function _r145_t4(r146_x) {
            var r146_x;
            return r76_toPattern(r146_x, r145_env, r145_wrapper);
        }), {
            'whether': function _r145_t5(r147_x) {
                var r147_x, r147_f;
                return r147_f = ['&&'].concat(r145_ms.map(function _r147_t2(r148_p, r148_j) {
                    var r148_p, r148_j;
                    return r148_p.whether(r147_x);
                })).filter(r76_boole), r147_f.length === 1 ? [
                    '.quote',
                    !0
                ] : r147_f;
            },
            'assign': function _r145_t6(r149_x, r149_locallyQ) {
                var r149_x, r149_locallyQ;
                return ['.begin'].concat(r145_ms.map(function _r149_t2(r150_p, r150_j) {
                    var r150_p, r150_j;
                    return r150_p.assign(r149_x, r149_locallyQ);
                }).concat([r149_x]));
            }
        }) : void 0;
    }, r76_externs.macros.put('||', {}), r76_externs.macros.get('||').toPattern = function _r76_t32(r151_pattern, r151_env, r151_wrapper) {
        var r151_pattern, r151_env, r151_wrapper, r151_subpatterns, r151_ms, _r151_t0;
        return _r151_t0 = r151_pattern, Array.isArray(_r151_t0) && _r151_t0.length >= 1 && '||' === _r151_t0[0] ? (r151_subpatterns = _r151_t0.slice(1), r151_ms = r151_subpatterns.map(function _r151_t4(r152_x) {
            var r152_x;
            return r76_toPattern(r152_x, r151_env, r151_wrapper);
        }), {
            'whether': function _r151_t5(r153_x) {
                var r153_x;
                return ['||'].concat(r151_ms.map(function _r153_t2(r154_p, r154_j) {
                    var r154_p, r154_j;
                    return r154_p.whether(r153_x);
                })).filter(r76_boole);
            },
            'assign': function _r151_t6(r155_x, r155_locallyQ) {
                var r155_x, r155_locallyQ;
                return ['.unit'];
            }
        }) : void 0;
    }, r76_boole = function _r76_t33(r156_x) {
        var r156_x;
        return !!r156_x;
    }, r76_externs.macros.put('match', function _r76_t34(r157_form, r157_env, r157_wrapper) {
        var r157_form, r157_env, r157_wrapper, r157_pairs, r157_t, r157_f, r157_j, r157_pattern, r157_guard, r157_body, r157_pat, r157_cond, r157_tc, _r157_t0;
        for (r157_pairs = r157_form.slice(2), r157_t = r157_env.newt(), r157_f = ['.unit'], r157_j = r157_pairs.length - 1; r157_j >= 0; r157_j -= 1)
            _r157_t0 = r157_pairs[r157_j], r157_f = Array.isArray(_r157_t0) && _r157_t0.length === 2 ? (r157_pattern = _r157_t0[0], r157_body = _r157_t0[1], r157_pat = r76_toPattern(r157_pattern, r157_env, r157_wrapper), r157_cond = r157_pat.whether(r157_t), r157_cond ? [
                '.if',
                r157_cond,
                [
                    '.begin',
                    r157_pat.assign(r157_t, !0),
                    r1_ex(r157_body, r157_env)
                ],
                r157_f
            ] : [
                '.begin',
                r157_pat.assign(r157_t, !0),
                r1_ex(r157_body, r157_env)
            ]) : Array.isArray(_r157_t0) && _r157_t0.length === 3 ? (r157_pattern = _r157_t0[0], r157_guard = _r157_t0[1], r157_body = _r157_t0[2], r157_pat = r76_toPattern(r157_pattern, r157_env, r157_wrapper), r157_cond = r157_pat.whether(r157_t), r157_cond ? (r157_tc = r157_env.newt(), [
                '.begin',
                [
                    '.set',
                    r157_tc,
                    [
                        '.quote',
                        !1
                    ]
                ],
                [
                    '.if',
                    r157_cond,
                    [
                        '.begin',
                        r157_pat.assign(r157_t, !0),
                        [
                            '.if',
                            r1_ex(r157_guard, r157_env),
                            [
                                '.set',
                                r157_tc,
                                [
                                    '.quote',
                                    !0
                                ]
                            ],
                            [
                                '.set',
                                r157_tc,
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
                    r157_tc,
                    r1_ex(r157_body, r157_env),
                    r157_f
                ]
            ]) : [
                '.begin',
                r157_pat.assign(r157_t, !0),
                [
                    '.if',
                    r1_ex(r157_guard, r157_env),
                    r1_ex(r157_body, r157_env),
                    r157_f
                ]
            ]) : r157_f;
        return [
            '.begin',
            [
                '.set',
                r157_t,
                r1_ex(r157_form[1], r157_env)
            ],
            r157_f
        ];
    }), r76_externs.macros.put('regex', function _r76_t35(r158_form, r158_env) {
        var r158_form, r158_env, r158_args, r158_s, r158_flag, _r158_t0;
        return _r158_t0 = r158_form, Array.isArray(_r158_t0) && _r158_t0.length === 2 && 'regex' === _r158_t0[0] && Array.isArray(_r158_t0[1]) && _r158_t0[1].length === 2 && '.quote' === _r158_t0[1][0] ? (r158_s = _r158_t0[1][1], _r158_t0[1], [
            '.quote',
            new RegExp(r158_s)
        ]) : Array.isArray(_r158_t0) && _r158_t0.length === 3 && 'regex' === _r158_t0[0] && Array.isArray(_r158_t0[1]) && _r158_t0[1].length === 2 && '.quote' === _r158_t0[1][0] && Array.isArray(_r158_t0[2]) && _r158_t0[2].length === 2 && '.quote' === _r158_t0[2][0] ? (r158_s = _r158_t0[1][1], _r158_t0[1], r158_flag = _r158_t0[2][1], _r158_t0[2], [
            '.quote',
            new RegExp(r158_s, r158_flag)
        ]) : Array.isArray(_r158_t0) && _r158_t0.length >= 1 && 'regex' === _r158_t0[0] ? (r158_args = _r158_t0.slice(1), [
            '.new',
            r76_externs.use('RegExp')
        ].concat(r158_args)) : void 0;
    }), r76_externs.macros.put('define-macro', function _r76_t36(r159_form, r159_env) {
        var r159_form, r159_env, r159_op, r159_name, r159_body, r159_coinit, r159_ds, r159_imports, r159_names, r159_assignments, r159_macroG, r159_macroFn, r159_str, _r159_t0, _r159_t1;
        return _r159_t0 = r159_form, Array.isArray(_r159_t0) && _r159_t0.length === 3 && Array.isArray(_r159_t0[1]) && _r159_t0[1].length === 2 && '.quote' === _r159_t0[1][0] ? (r159_op = _r159_t0[0], r159_str = _r159_t0[1][1], _r159_t0[1], r159_body = _r159_t0[2], r1_ex([
            r159_op,
            r159_str,
            r159_body
        ], r159_env)) : (_r159_t1 = !1, Array.isArray(_r159_t0) && _r159_t0.length === 3 && (r159_op = _r159_t0[0], r159_name = _r159_t0[1], r159_body = _r159_t0[2], r1_atom(r159_name) ? _r159_t1 = !0 : _r159_t1 = !1), _r159_t1 ? (r159_coinit = {
            'injectForm': void 0,
            'initFn': void 0
        }, r159_ds = new r1_Scope(r159_env), r159_imports = {
            'ex': r1_ex,
            'atom': r1_wrapForSyntacticClosure(r1_atom),
            'prim': r1_wrapForSyntacticClosure(r1_prim),
            'formOf': function _r159_t6(r160_x) {
                var r160_x;
                return r160_x[1];
            },
            'scopeOf': function _r159_t7(r161_x) {
                var r161_x;
                return r161_x[2];
            },
            'definingEnv': r159_env,
            'externEnv': r76_externs,
            'require': require,
            'toPattern': r76_toPattern,
            'coinit': r159_coinit,
            'formInvalidError': r1_FormInvalidError,
            'deQuasiquote': r1_deQuasiquote,
            'opSegToRegular': r1_opSegToRegular
        }, r159_names = Object.keys(r159_imports), r159_ds.declare('$', !0), r159_assignments = ['.begin'].concat(r159_names.map(function _r159_t8(r162_name) {
            var r162_name;
            return [
                'local',
                r162_name,
                [
                    '.',
                    '$',
                    [
                        '.quote',
                        r162_name
                    ]
                ]
            ];
        })), r159_macroG = new Function(r159_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
            '.return',
            r1_ex([
                '.begin',
                r159_assignments,
                r159_body
            ], r159_ds)
        ], r159_ds, function _r159_t9(r163_form) {
            var r163_form;
            return [
                '.return',
                r163_form
            ];
        }))), r159_macroFn = r159_macroG(r159_imports), r159_env.macros.put(r159_name, function _r159_t10(r164_c, r164_e) {
            var r164_c, r164_e, r164_result, r164_s;
            return r164_result = r159_macroFn(r164_c, r164_e), r164_s = new r1_Scope(r159_env), r164_s.hanging = r164_e, r164_s.semiparent = r164_e, r1_ex(r164_result, r164_s);
        }), r159_coinit.initFn && r159_coinit.initFn(r159_env.macros.get(r159_name)), r159_coinit.injectForm ? r1_ex(r159_coinit.injectForm, r159_env) : ['.unit']) : ['.unit']);
    }), r76_externs.macros.put('macro-match', function _r76_t37(r165_form, r165_env) {
        var r165_form, r165_env, r165_c, r165_e, r165_patterns, r165_t, r165_tx, r165_tw, _r165_t0;
        return _r165_t0 = r165_form, Array.isArray(_r165_t0) && _r165_t0.length >= 3 && 'macro-match' === _r165_t0[0] ? (r165_c = _r165_t0[1], r165_e = _r165_t0[2], r165_patterns = _r165_t0.slice(3), r165_t = r165_env.newt(), r165_tx = r165_env.newt(), r165_tw = r165_env.newt(), [
            '.begin',
            [
                '.set',
                r165_t,
                r165_e
            ],
            [
                '.set',
                r165_tw,
                [
                    '.lambda',
                    [r165_tx],
                    [
                        '.return',
                        [
                            '.list',
                            [
                                '.quote',
                                '.syntactic-closure'
                            ],
                            r165_tx,
                            r165_t
                        ]
                    ]
                ]
            ],
            r76_externs.macros.get('match')([
                'match',
                r165_c
            ].concat(r165_patterns), r165_env, r165_tw)
        ]) : ['.unit'];
    }), r76_externs.pFamily = 'r', r76_externs;
}, exports.Create = r1_Create;
