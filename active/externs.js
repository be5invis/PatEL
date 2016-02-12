var r1_patrisika, r1_atom, r1_identifier, r1_prim, r1_Scope, r1_escodegen, r1_util, r1_ex, r1_deQuasiquote, r1_opSegToRegular, r1_FormInvalidError, r1_wrapForSyntacticClosure, r1_Create, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4;
r1_patrisika = require('patrisika'), r1_atom = function _r1_t0(r113_x) {
    var r113_x;
    return typeof r113_x === 'string';
}, r1_identifier = function _r1_t1(r114_x) {
    var r114_x;
    return r1_atom(r114_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r114_x);
}, r1_prim = function _r1_t2(r115_x) {
    var r115_x;
    return r1_atom(r115_x) && !r1_identifier(r115_x);
}, r1_Scope = require('patrisika').Scope, r1_escodegen = require('escodegen'), r1_util = require('util'), r1_ex = require('./ex').ex, r1_deQuasiquote = require('./ex').deQuasiquote, r1_opSegToRegular = require('./ex').opSegToRegular, r1_FormInvalidError = r1_patrisika.FormInvalidError, r1_wrapForSyntacticClosure = function _r1_t3(r116_fn) {
    var r116_fn;
    return function _r116_t2(r117_x) {
        var r117_x, r117_c, r117_e, _r117_t0;
        return _r117_t0 = r117_x, Array.isArray(_r117_t0) && _r117_t0.length === 3 && '.syntactic-closure' === _r117_t0[0] ? (r117_c = _r117_t0[1], r117_e = _r117_t0[2], r116_fn(r117_c)) : r116_fn(r117_x);
    };
}, r1_Create = function _r1_t4() {
    var r118_externs, r118_operatorRename, r118_reportInvalid, r118_AssignWithMod, r118_Assign, r118_toPattern, r118_boole;
    return r118_externs = r1_patrisika.DefaultExterns(), r118_externs.castName = function _r118_t2(r119_name) {
        var r119_name;
        return r119_name;
    }, r118_externs.declare('require'), r118_externs.declare('exports'), r118_externs.declare('process'), r118_externs.declare('module'), r118_externs.declare('Error'), r118_operatorRename = function _r118_t3(r120_op) {
        var r120_op;
        return function _r120_t2(r121_form, r121_env) {
            var r121_form, r121_env;
            return r1_ex([r120_op].concat(r121_form.slice(1)), r121_env);
        };
    }, r118_reportInvalid = function _r118_t4(r122_form, r122_reason) {
        var r122_form, r122_reason;
        throw new r1_FormInvalidError(r122_form, r122_reason);
    }, r118_externs.macros.put('begin', r118_operatorRename('.begin')), r118_externs.macros.put('then', r118_operatorRename('.begin')), r118_externs.macros.put('else', r118_operatorRename('.begin')), r118_externs.macros.put('while', r118_operatorRename('.while')), r118_externs.macros.put('try', r118_operatorRename('.try')), r118_externs.macros.put('is', r118_operatorRename('.is')), r118_externs.macros.put('<@', r118_operatorRename('.is')), r118_externs.macros.put('new', r118_operatorRename('.new')), r118_externs.macros.put('this', r118_operatorRename('.thisp')), r118_externs.macros.put('arguments', r118_operatorRename('.argsp')), r118_externs.macros.put('and', r118_operatorRename('&&')), r118_externs.macros.put('or', r118_operatorRename('||')), r118_externs.macros.put('not', r118_operatorRename('!')), r118_externs.macros.put('return', r118_operatorRename('.return')), r118_externs.macros.put('yield', r118_operatorRename('.yield')), r118_externs.macros.put('throw', r118_operatorRename('.throw')), r118_externs.macros.put('list', r118_operatorRename('.list')), r118_externs.macros.put('typeof', r118_operatorRename('.typeof')), r118_externs.macros.put('quasiquote', r118_operatorRename('.quasiquote')), r118_externs.macros.put('syntax', r118_operatorRename('.quasiquote')), r118_externs.macros.put('lambda', function _r118_t5(r123_form, r123_env) {
        var r123_form, r123_env, r123_otherwise, r123_car, r123_body, r123_parameters, _r123_t0, _r123_t1;
        return _r123_t0 = r123_form, _r123_t1 = !1, Array.isArray(_r123_t0) && _r123_t0.length === 3 && (r123_car = _r123_t0[0], r123_parameters = _r123_t0[1], r123_body = _r123_t0[2], r1_atom(r123_parameters) ? _r123_t1 = !0 : _r123_t1 = !1), _r123_t1 ? r1_ex([
            '.lambda',
            [r123_parameters],
            r123_body
        ], r123_env) : Array.isArray(_r123_t0) && _r123_t0.length === 3 ? (r123_car = _r123_t0[0], r123_parameters = _r123_t0[1], r123_body = _r123_t0[2], r1_ex([
            '.lambda',
            r123_parameters,
            r123_body
        ], r123_env)) : Array.isArray(_r123_t0) && _r123_t0.length === 2 ? (r123_car = _r123_t0[0], r123_body = _r123_t0[1], r1_ex([
            '.lambda',
            [],
            r123_body
        ], r123_env)) : Array.isArray(_r123_t0) && _r123_t0.length === 1 ? (r123_car = _r123_t0[0], r1_ex([
            '.lambda',
            [],
            ['.unit']
        ], r123_body)) : (r123_otherwise = _r123_t0, r118_reportInvalid(r123_otherwise, 'Invalid Lambda Formation'));
    }), r118_externs.macros.put('function', r118_externs.macros.get('lambda')), r118_externs.macros.put('->', r118_externs.macros.get('lambda')), r118_externs.macros.put('=>', r118_externs.macros.get('lambda')), r118_externs.operatorInfo.put('->', {
        'priority': 900,
        'associvity': 'right'
    }), r118_externs.operatorInfo.put('=>', {
        'priority': 950,
        'associvity': 'right'
    }), r118_externs.macros.put('.prefix.-', function _r118_t6(r124_form, r124_env) {
        var r124_form, r124_env;
        return [
            '-',
            r1_ex(r124_form[1], r124_env)
        ];
    }), r118_externs.macros.put('.prefix.+', function _r118_t7(r125_form, r125_env) {
        var r125_form, r125_env;
        return [
            '+',
            r1_ex(r125_form[1], r125_env)
        ];
    }), r118_externs.macros.put('.prefix.!', function _r118_t8(r126_form, r126_env) {
        var r126_form, r126_env;
        return [
            '!',
            r1_ex(r126_form[1], r126_env)
        ];
    }), r118_externs.macros.put('.prefix.*', function _r118_t9(r127_form, r127_env) {
        var r127_form, r127_env;
        return r1_ex(r127_form[1], r127_env);
    }), r118_externs.macros.put('.prefix.=', function _r118_t10(r128_form, r128_env) {
        var r128_form, r128_env;
        return r1_ex(r128_form[1], r128_env);
    }), r118_externs.macros.put('if', function _r118_t11(r129_form, r129_env) {
        var r129_form, r129_env, r129_otherwise, r129_test, r129_consequents, r129_alternates, r129_consequent, r129_alternate, _r129_t0;
        return _r129_t0 = r129_form, Array.isArray(_r129_t0) && _r129_t0.length === 3 && 'if' === _r129_t0[0] ? (r129_test = _r129_t0[1], r129_consequent = _r129_t0[2], r1_ex([
            '.if',
            r129_test,
            r129_consequent
        ], r129_env)) : Array.isArray(_r129_t0) && _r129_t0.length === 4 && 'if' === _r129_t0[0] ? (r129_test = _r129_t0[1], r129_consequent = _r129_t0[2], r129_alternate = _r129_t0[3], r1_ex([
            '.if',
            r129_test,
            r129_consequent,
            r129_alternate
        ], r129_env)) : Array.isArray(_r129_t0) && _r129_t0.length === 3 && 'if' === _r129_t0[0] && Array.isArray(_r129_t0[2]) && _r129_t0[2].length >= 1 && 'then' === _r129_t0[2][0] ? (r129_test = _r129_t0[1], r129_consequents = _r129_t0[2].slice(1), _r129_t0[2], r1_ex([
            '.if',
            r129_test,
            ['.begin'].concat(r129_consequents)
        ], r129_env)) : Array.isArray(_r129_t0) && _r129_t0.length === 4 && 'if' === _r129_t0[0] && Array.isArray(_r129_t0[2]) && _r129_t0[2].length >= 1 && 'then' === _r129_t0[2][0] && Array.isArray(_r129_t0[3]) && _r129_t0[3].length >= 1 && 'else' === _r129_t0[3][0] ? (r129_test = _r129_t0[1], r129_consequents = _r129_t0[2].slice(1), _r129_t0[2], r129_alternates = _r129_t0[3].slice(1), _r129_t0[3], r1_ex([
            '.if',
            r129_test,
            ['.begin'].concat(r129_consequents),
            ['.begin'].concat(r129_alternates)
        ], r129_env)) : (r129_otherwise = _r129_t0, r118_reportInvalid(r129_otherwise, 'Invalid Conditional Form'));
    }), r118_externs.macros.put('let', function _r118_t12(r130_form, r130_env) {
        var r130_form, r130_env, r130_pairs, r130_args, r130_paras, r130_j, r130_arg, r130_param, r130_useless, _r130_t0, _r130_t1;
        for (r130_pairs = r130_form.slice(1, -1), r130_args = [], r130_paras = [], r130_j = 0; r130_j < r130_pairs.length; r130_j += 1)
            _r130_t0 = r130_pairs[r130_j], Array.isArray(_r130_t0) && _r130_t0.length >= 2 ? (r130_arg = _r130_t0[0], r130_param = _r130_t0[1], r130_useless = _r130_t0.slice(2), r130_args.push(r130_arg), r130_paras.push(r130_param)) : Array.isArray(_r130_t0) && _r130_t0.length === 2 ? (r130_arg = _r130_t0[0], r130_param = _r130_t0[1], r130_args.push(r130_arg), r130_paras.push(r130_param)) : (_r130_t1 = !1, Array.isArray(_r130_t0) && _r130_t0.length === 1 && (r130_arg = _r130_t0[0], r1_atom(r130_arg) ? _r130_t1 = !0 : _r130_t1 = !1), _r130_t1 && (r130_args.push(r130_arg), r130_paras.push(r130_env.use(r130_arg))));
        return r1_ex([
            '.beta',
            r130_args,
            r130_form[r130_form.length - 1]
        ].concat(r130_paras), r130_env);
    }), r118_externs.macros.put('object', function _r118_t13(r131_form, r131_env) {
        var r131_form, r131_env, r131_pairs;
        return r131_pairs = r131_form.slice(1).map(function _r131_t2(r132_pair) {
            var r132_pair, r132_method, r132_param, r132_value, r132_property, _r132_t0, _r132_t1, _r132_t2, _r132_t3, _r132_t4, _r132_t5, _r132_t6, _r132_t7;
            return _r132_t0 = r132_pair, _r132_t7 = !1, Array.isArray(_r132_t0) && _r132_t0.length === 3 && '=' === _r132_t0[0] && (r132_property = _r132_t0[1], r132_value = _r132_t0[2], r1_atom(r132_property) ? _r132_t7 = !0 : _r132_t7 = !1), _r132_t7 ? [
                [
                    '.quote',
                    r132_property
                ],
                r132_value
            ] : (_r132_t6 = !1, Array.isArray(_r132_t0) && _r132_t0.length === 3 && '=' === _r132_t0[0] && (r132_property = _r132_t0[1], r132_value = _r132_t0[2], r1_atom(r132_property) ? _r132_t6 = !0 : _r132_t6 = !1), _r132_t6 ? [
                [
                    '.quote',
                    r132_property
                ],
                r132_value
            ] : (_r132_t5 = !1, Array.isArray(_r132_t0) && _r132_t0.length === 2 && (r132_property = _r132_t0[0], r132_value = _r132_t0[1], r1_atom(r132_property) ? _r132_t5 = !0 : _r132_t5 = !1), _r132_t5 ? [
                [
                    '.quote',
                    r132_property
                ],
                r132_value
            ] : (_r132_t4 = !1, Array.isArray(_r132_t0) && _r132_t0.length === 1 && (r132_property = _r132_t0[0], r1_atom(r132_property) ? _r132_t4 = !0 : _r132_t4 = !1), _r132_t4 ? [
                [
                    '.quote',
                    r132_property
                ],
                r132_property
            ] : (r132_property = _r132_t0, r1_atom(r132_property) ? [
                [
                    '.quote',
                    r132_property
                ],
                r132_property
            ] : Array.isArray(_r132_t0) && _r132_t0.length === 3 && '=' === _r132_t0[0] && Array.isArray(_r132_t0[1]) && _r132_t0[1].length === 2 && '.quote' === _r132_t0[1][0] ? (r132_property = _r132_t0[1][1], _r132_t0[1], r132_value = _r132_t0[2], [
                [
                    '.quote',
                    r132_property
                ],
                r132_value
            ]) : Array.isArray(_r132_t0) && _r132_t0.length === 3 && '=' === _r132_t0[0] && Array.isArray(_r132_t0[1]) && _r132_t0[1].length === 2 && '.quote' === _r132_t0[1][0] ? (r132_property = _r132_t0[1][1], _r132_t0[1], r132_value = _r132_t0[2], [
                [
                    '.quote',
                    r132_property
                ],
                r132_value
            ]) : Array.isArray(_r132_t0) && _r132_t0.length === 2 && Array.isArray(_r132_t0[0]) && _r132_t0[0].length === 2 && '.quote' === _r132_t0[0][0] ? (r132_property = _r132_t0[0][1], _r132_t0[0], r132_value = _r132_t0[1], [
                [
                    '.quote',
                    r132_property
                ],
                r132_value
            ]) : (_r132_t3 = !1, Array.isArray(_r132_t0) && _r132_t0.length === 3 && '=' === _r132_t0[0] && Array.isArray(_r132_t0[1]) && _r132_t0[1].length >= 1 && (r132_method = _r132_t0[1][0], r132_param = _r132_t0[1].slice(1), _r132_t0[1], r132_value = _r132_t0[2], r1_atom(r132_method) ? _r132_t3 = !0 : _r132_t3 = !1), _r132_t3 ? [
                [
                    '.quote',
                    r132_method
                ],
                [
                    '.lambda',
                    r132_param,
                    r132_value
                ]
            ] : (_r132_t2 = !1, Array.isArray(_r132_t0) && _r132_t0.length === 3 && '=' === _r132_t0[0] && Array.isArray(_r132_t0[1]) && _r132_t0[1].length >= 1 && (r132_method = _r132_t0[1][0], r132_param = _r132_t0[1].slice(1), _r132_t0[1], r132_value = _r132_t0[2], r1_atom(r132_method) ? _r132_t2 = !0 : _r132_t2 = !1), _r132_t2 ? [
                [
                    '.quote',
                    r132_method
                ],
                [
                    '.lambda',
                    r132_param,
                    r132_value
                ]
            ] : (_r132_t1 = !1, Array.isArray(_r132_t0) && _r132_t0.length === 2 && Array.isArray(_r132_t0[0]) && _r132_t0[0].length >= 1 && (r132_method = _r132_t0[0][0], r132_param = _r132_t0[0].slice(1), _r132_t0[0], r132_value = _r132_t0[1], r1_atom(r132_method) ? _r132_t1 = !0 : _r132_t1 = !1), _r132_t1 ? [
                [
                    '.quote',
                    r132_method
                ],
                [
                    '.lambda',
                    r132_param,
                    r132_value
                ]
            ] : void 0)))))));
        }), r1_ex(['.xhash'].concat(r131_pairs.filter(function _r131_t3(r133_x) {
            var r133_x;
            return r133_x;
        })), r131_env);
    }), r118_externs.macros.get('list').toPattern = function _r118_t14(r134_form, r134_env, r134_wrapper) {
        var r134_form, r134_env, r134_wrapper;
        return r118_toPattern(['.list'].concat(r134_form.slice(1)), r134_env, r134_wrapper);
    }, r118_externs.macros.get('object').toPattern = function _r118_t15(r135_form, r135_env, r135_wrapper) {
        var r135_form, r135_env, r135_wrapper, r135_pairs;
        return r135_pairs = r135_form.slice(1).map(function _r135_t2(r136_pair) {
            var r136_pair, r136_property, r136_value, _r136_t0, _r136_t1, _r136_t2, _r136_t3, _r136_t4;
            if (_r136_t0 = r136_pair, _r136_t4 = !1, Array.isArray(_r136_t0) && _r136_t0.length === 3 && '=' === _r136_t0[0] && (r136_property = _r136_t0[1], r136_value = _r136_t0[2], r1_atom(r136_property) ? _r136_t4 = !0 : _r136_t4 = !1), _r136_t4)
                return [
                    r136_property,
                    r136_value
                ];
            else if (_r136_t3 = !1, Array.isArray(_r136_t0) && _r136_t0.length === 3 && '=' === _r136_t0[0] && (r136_property = _r136_t0[1], r136_value = _r136_t0[2], r1_atom(r136_property) ? _r136_t3 = !0 : _r136_t3 = !1), _r136_t3)
                return [
                    r136_property,
                    r136_value
                ];
            else if (_r136_t2 = !1, Array.isArray(_r136_t0) && _r136_t0.length === 2 && (r136_property = _r136_t0[0], r136_value = _r136_t0[1], r1_atom(r136_property) ? _r136_t2 = !0 : _r136_t2 = !1), _r136_t2)
                return [
                    r136_property,
                    r136_value
                ];
            else if (_r136_t1 = !1, Array.isArray(_r136_t0) && _r136_t0.length === 1 && (r136_property = _r136_t0[0], r1_atom(r136_property) ? _r136_t1 = !0 : _r136_t1 = !1), _r136_t1)
                return [
                    r136_property,
                    r136_property
                ];
            else if (r136_property = _r136_t0, r1_atom(r136_property))
                return [
                    r136_property,
                    r136_property
                ];
            else if (Array.isArray(_r136_t0) && _r136_t0.length === 3 && '=' === _r136_t0[0] && Array.isArray(_r136_t0[1]) && _r136_t0[1].length === 2 && '.quote' === _r136_t0[1][0])
                return r136_property = _r136_t0[1][1], _r136_t0[1], r136_value = _r136_t0[2], [
                    r136_property,
                    r136_value
                ];
            else if (Array.isArray(_r136_t0) && _r136_t0.length === 3 && '=' === _r136_t0[0] && Array.isArray(_r136_t0[1]) && _r136_t0[1].length === 2 && '.quote' === _r136_t0[1][0])
                return r136_property = _r136_t0[1][1], _r136_t0[1], r136_value = _r136_t0[2], [
                    r136_property,
                    r136_value
                ];
            else if (Array.isArray(_r136_t0) && _r136_t0.length === 2 && Array.isArray(_r136_t0[0]) && _r136_t0[0].length === 2 && '.quote' === _r136_t0[0][0])
                return r136_property = _r136_t0[0][1], _r136_t0[0], r136_value = _r136_t0[1], [
                    r136_property,
                    r136_value
                ];
            else
                throw new r1_FormInvalidError(r135_form, 'Invalid Assignment Left-hand Side');
        }), r118_toPattern(['.hash'].concat(r135_pairs), r135_env, r135_wrapper);
    }, r118_externs.macros.put('piecewise', function _r118_t16(r137_form, r137_env) {
        var r137_form, r137_env, r137_pairs, r137_f, r137_j, r137_otherwise, r137_condition, r137_consequent, _r137_t0, _r137_t1;
        if (_r137_t0 = r137_form, Array.isArray(_r137_t0) && _r137_t0.length >= 1 && 'piecewise' === _r137_t0[0]) {
            for (r137_pairs = _r137_t0.slice(1), r137_f = ['.unit'], r137_j = r137_pairs.length - 1; r137_j >= 0; r137_j -= 1) {
                if (_r137_t1 = r137_pairs[r137_j], !(Array.isArray(_r137_t1) && _r137_t1.length === 2))
                    throw r137_otherwise = _r137_t1, new r1_FormInvalidError(r137_otherwise, 'Invalid Piecewise Segment');
                r137_condition = _r137_t1[0], r137_consequent = _r137_t1[1], r137_f = [
                    '.if',
                    r1_ex(r137_condition, r137_env),
                    r1_ex(r137_consequent, r137_env),
                    r137_f
                ];
            }
            return r137_f;
        } else
            return void 0;
    }), r118_AssignWithMod = function _r118_t17(r138_left, r138_right, r138_mod, r138_env, r138_locallyQ) {
        var r138_left, r138_right, r138_mod, r138_env, r138_locallyQ, r138_callee, r138_paras, r138_pat, r138_t, r138_whatever, r138_a, r138_e, r138_id, _r138_t0, _r138_t1, _r138_t2, _r138_t3, _r138_t4, _r138_t5;
        if (_r138_t0 = r138_left, r138_id = _r138_t0, r1_atom(r138_id))
            return r138_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r138_id
                ], r138_env),
                r1_ex([
                    r138_mod,
                    r138_right
                ], r138_env)
            ] : [
                '.set',
                r1_ex(r138_left, r138_env),
                r1_ex([
                    r138_mod,
                    r138_right
                ], r138_env)
            ];
        else if (_r138_t5 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 2 && '.id' === _r138_t0[0] && (r138_id = _r138_t0[1], r1_atom(r138_id) ? _r138_t5 = !0 : _r138_t5 = !1), _r138_t5)
            return r138_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r138_id
                ], r138_env),
                r1_ex([
                    r138_mod,
                    r138_right
                ], r138_env)
            ] : [
                '.set',
                r1_ex(r138_left, r138_env),
                r1_ex([
                    r138_mod,
                    r138_right
                ], r138_env)
            ];
        else if (_r138_t4 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 3 && '.id' === _r138_t0[0] && (r138_id = _r138_t0[1], r138_e = _r138_t0[2], r1_atom(r138_id) && (r138_e === r138_env || !r138_locallyQ) ? _r138_t4 = !0 : _r138_t4 = !1), _r138_t4)
            return r138_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r138_id
                ], r138_e),
                r1_ex([
                    r138_mod,
                    r138_right
                ], r138_e)
            ] : [
                '.set',
                r1_ex(r138_left, r138_e),
                r1_ex([
                    r138_mod,
                    r138_right
                ], r138_e)
            ];
        else if (_r138_t3 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 3 && '.id' === _r138_t0[0] && (r138_id = _r138_t0[1], r138_e = _r138_t0[2], r1_atom(r138_id) && r138_e !== r138_env && r138_locallyQ ? _r138_t3 = !0 : _r138_t3 = !1), _r138_t3)
            throw new r1_FormInvalidError(r138_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r138_t0) && _r138_t0.length === 2 && '.local' === _r138_t0[0])
            return r138_a = _r138_t0[1], r118_AssignWithMod(r138_a, r138_right, r138_mod, r138_env, !0);
        else if (_r138_t2 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 3 && '.syntactic-closure' === _r138_t0[0] && (r138_a = _r138_t0[1], r138_e = _r138_t0[2], r138_e === r138_env || !r138_locallyQ ? _r138_t2 = !0 : _r138_t2 = !1), _r138_t2)
            return r118_AssignWithMod(r138_a, r138_right, r138_mod, r138_env, r138_locallyQ);
        else if (_r138_t1 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 3 && '.syntactic-closure' === _r138_t0[0] && (r138_a = _r138_t0[1], r138_e = _r138_t0[2], r138_e !== r138_env && r138_locallyQ ? _r138_t1 = !0 : _r138_t1 = !1), _r138_t1)
            throw new r1_FormInvalidError(r138_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r138_t0) && _r138_t0.length >= 1 && '.revcall' === _r138_t0[0])
            return r138_whatever = _r138_t0.slice(1), r118_AssignWithMod([].concat(r138_whatever), r138_right, r138_mod, r138_env, r138_locallyQ);
        else if (Array.isArray(_r138_t0) && _r138_t0.length >= 1)
            if (r138_callee = _r138_t0[0], r138_paras = _r138_t0.slice(1), r1_atom(r138_callee) && r138_env.macros.has(r138_callee) && r138_env.macros.get(r138_callee).toPattern)
                return r138_pat = r118_toPattern(r138_left, r138_env), r138_t = r138_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r138_t,
                        r1_ex([
                            r138_mod,
                            r138_right
                        ], r138_env)
                    ],
                    r138_pat.assign(r138_t, r138_locallyQ)
                ];
            else if (r1_atom(r138_callee) && r138_env.macros.has(r138_callee))
                throw new r1_FormInvalidError(r138_left, 'Invalid Assignment Left-hand Side');
            else
                return r1_prim(r138_callee) ? [
                    '.set',
                    r1_ex(r138_left, r138_env),
                    r1_ex([
                        r138_mod,
                        r138_right
                    ], r138_env)
                ] : r1_atom(r138_callee) ? r138_locallyQ ? [
                    '.set',
                    r1_ex([
                        '.local',
                        r138_callee
                    ], r138_env),
                    r1_ex([
                        r138_mod,
                        [
                            '.lambda',
                            [].concat(r138_paras),
                            r138_right
                        ]
                    ], r138_env)
                ] : [
                    '.set',
                    r1_ex(r138_callee, r138_env),
                    r1_ex([
                        r138_mod,
                        [
                            '.lambda',
                            [].concat(r138_paras),
                            r138_right
                        ]
                    ], r138_env)
                ] : [
                    '.set',
                    r1_ex(r138_callee, r138_env),
                    r1_ex([
                        r138_mod,
                        [
                            '.lambda',
                            [].concat(r138_paras),
                            r138_right
                        ]
                    ], r138_env)
                ];
        else
            throw new r1_FormInvalidError(r138_left, 'Invalid Assignment Left-hand Side');
    }, r118_Assign = function _r118_t18(r139_left, r139_right, r139_env, r139_locallyQ) {
        var r139_left, r139_right, r139_env, r139_locallyQ;
        return r118_AssignWithMod(r139_left, r139_right, '.unquote', r139_env, r139_locallyQ);
    }, r118_externs.macros.put('define', function _r118_t19(r140_form, r140_env) {
        var r140_form, r140_env, r140_any, r140_op, r140_left, r140_right, r140_modifer, _r140_t0, _r140_t1;
        if (_r140_t0 = r140_form, Array.isArray(_r140_t0) && _r140_t0.length === 4)
            return r140_op = _r140_t0[0], r140_modifer = _r140_t0[1], r140_left = _r140_t0[2], r140_right = _r140_t0[3], r118_AssignWithMod(r140_left, r140_right, r140_modifer, r140_env, !0);
        else if (Array.isArray(_r140_t0) && _r140_t0.length === 3)
            return r140_op = _r140_t0[0], r140_left = _r140_t0[1], r140_right = _r140_t0[2], r118_Assign(r140_left, r140_right, r140_env, !0);
        else if (_r140_t1 = !1, Array.isArray(_r140_t0) && _r140_t0.length === 2 && (r140_op = _r140_t0[0], r140_left = _r140_t0[1], r1_atom(r140_left) ? _r140_t1 = !0 : _r140_t1 = !1), _r140_t1)
            return [
                '.local',
                r140_left
            ];
        else
            throw r140_any = _r140_t0, new r1_FormInvalidError(r140_any, 'Invalid Assignment');
    }), r118_externs.macros.put('local', r118_externs.macros.get('define')), r118_externs.macros.put('set', function _r118_t20(r141_form, r141_env) {
        var r141_form, r141_env, r141_any, r141_op, r141_left, r141_right, _r141_t0;
        if (_r141_t0 = r141_form, Array.isArray(_r141_t0) && _r141_t0.length === 3)
            return r141_op = _r141_t0[0], r141_left = _r141_t0[1], r141_right = _r141_t0[2], r118_Assign(r141_left, r141_right, r141_env, !1);
        else
            throw r141_any = _r141_t0, new r1_FormInvalidError(r141_any, 'Invalid Assignment');
    }), r118_externs.macros.put('=', r118_externs.macros.get('set')), r118_externs.macros.put('inc', function _r118_t21(r142_form, r142_env) {
        var r142_form, r142_env, r142_op, r142_id, r142_shift, _r142_t0;
        return _r142_t0 = r142_form, Array.isArray(_r142_t0) && _r142_t0.length === 2 ? (r142_op = _r142_t0[0], r142_id = _r142_t0[1], r118_Assign(r142_id, [
            '+',
            r142_id,
            [
                '.quote',
                1
            ]
        ], r142_env, !1)) : Array.isArray(_r142_t0) && _r142_t0.length === 3 ? (r142_op = _r142_t0[0], r142_id = _r142_t0[1], r142_shift = _r142_t0[2], r118_Assign(r142_id, [
            '+',
            r142_id,
            r142_shift
        ], r142_env, !1)) : Array.isArray(_r142_t0) && _r142_t0.length === 4 && 'by' === _r142_t0[2] ? (r142_op = _r142_t0[0], r142_id = _r142_t0[1], r142_shift = _r142_t0[3], r118_Assign(r142_id, [
            '+',
            r142_id,
            r142_shift
        ], r142_env, !1)) : void 0;
    }), r118_externs.macros.put('dec', function _r118_t22(r143_form, r143_env) {
        var r143_form, r143_env, r143_op, r143_id, r143_shift, _r143_t0;
        return _r143_t0 = r143_form, Array.isArray(_r143_t0) && _r143_t0.length === 2 ? (r143_op = _r143_t0[0], r143_id = _r143_t0[1], r118_Assign(r143_id, [
            '-',
            r143_id,
            [
                '.quote',
                1
            ]
        ], r143_env, !1)) : Array.isArray(_r143_t0) && _r143_t0.length === 3 ? (r143_op = _r143_t0[0], r143_id = _r143_t0[1], r143_shift = _r143_t0[2], r118_Assign(r143_id, [
            '-',
            r143_id,
            r143_shift
        ], r143_env, !1)) : Array.isArray(_r143_t0) && _r143_t0.length === 4 && 'by' === _r143_t0[2] ? (r143_op = _r143_t0[0], r143_id = _r143_t0[1], r143_shift = _r143_t0[3], r118_Assign(r143_id, [
            '-',
            r143_id,
            r143_shift
        ], r143_env, !1)) : void 0;
    }), r118_externs.macros.put('for', function _r118_t23(r144_form, r144_env) {
        var r144_form, r144_env, r144_init, r144_test, r144_step, r144_body, _r144_t0;
        return _r144_t0 = r144_form, Array.isArray(_r144_t0) && _r144_t0.length === 5 && 'for' === _r144_t0[0] ? (r144_init = _r144_t0[1], r144_test = _r144_t0[2], r144_step = _r144_t0[3], r144_body = _r144_t0[4], [
            '.begin',
            r1_ex(r144_init, r144_env),
            [
                '.while',
                r1_ex(r144_test, r144_env),
                [
                    '.begin',
                    r1_ex(r144_body, r144_env),
                    r1_ex(r144_step, r144_env)
                ]
            ]
        ]) : void 0;
    }), r118_externs.macros.put('this', ['.thisp']), r118_externs.macros.put('arguments', ['.argsp']), r118_externs.macros.put('nothing', ['.unit']), r118_externs.macros.put('undefined', ['.unit']), r118_externs.macros.put('null', [
        '.quote',
        null
    ]), r118_externs.macros.put('true', [
        '.quote',
        !0
    ]), r118_externs.macros.put('false', [
        '.quote',
        !1
    ]), r118_toPattern = function _r118_t24(r145_pattern, r145_env, r145_wrapper) {
        var r145_pattern, r145_env, r145_wrapper, r145_callee, r145_subpatterns, r145_ms, r145_t, r145_whatever, r145_x, r145_id, _r145_t0, _r145_t1;
        if (_r145_t0 = r145_pattern, r145_id = _r145_t0, r1_atom(r145_id))
            return {
                'whether': function _r145_t5(r157_x) {
                    var r157_x;
                    return null;
                },
                'assign': function _r145_t6(r158_x, r158_locallyQ) {
                    var r158_x, r158_locallyQ;
                    return [
                        '.set',
                        r1_ex(r158_locallyQ ? [
                            '.local',
                            r145_id
                        ] : r145_id, r145_env),
                        r145_wrapper ? [
                            r145_wrapper,
                            r158_x
                        ] : r158_x
                    ];
                }
            };
        else if (_r145_t1 = !1, Array.isArray(_r145_t0) && _r145_t0.length === 2 && '.id' === _r145_t0[0] && (r145_id = _r145_t0[1], r1_atom(r145_id) ? _r145_t1 = !0 : _r145_t1 = !1), _r145_t1)
            return {
                'whether': function _r145_t8(r155_x) {
                    var r155_x;
                    return null;
                },
                'assign': function _r145_t9(r156_x, r156_locallyQ) {
                    var r156_x, r156_locallyQ;
                    return [
                        '.set',
                        r1_ex(r156_locallyQ ? [
                            '.local',
                            r145_id
                        ] : r145_id, r145_env),
                        r145_wrapper ? [
                            r145_wrapper,
                            r156_x
                        ] : r156_x
                    ];
                }
            };
        else if (Array.isArray(_r145_t0) && _r145_t0.length === 2 && '.quote' === _r145_t0[0])
            return r145_x = _r145_t0[1], {
                'whether': function _r145_t11(r153_x) {
                    var r153_x;
                    return [
                        '===',
                        r1_ex(r145_pattern, r145_env),
                        r153_x
                    ];
                },
                'assign': function _r145_t12(r154_x, r154_locallyQ) {
                    var r154_x, r154_locallyQ;
                    return ['.unit'];
                }
            };
        else if (Array.isArray(_r145_t0) && _r145_t0.length >= 1 && '.' === _r145_t0[0])
            return r145_whatever = _r145_t0.slice(1), {
                'whether': function _r145_t14(r151_x) {
                    var r151_x;
                    return null;
                },
                'assign': function _r145_t15(r152_x, r152_locallyQ) {
                    var r152_x, r152_locallyQ;
                    return [
                        '.set',
                        r1_ex(r145_pattern, r145_env),
                        r145_wrapper ? [
                            r145_wrapper,
                            r152_x
                        ] : r152_x
                    ];
                }
            };
        else if (Array.isArray(_r145_t0) && _r145_t0.length >= 1)
            if (r145_callee = _r145_t0[0], r145_subpatterns = _r145_t0.slice(1), r1_atom(r145_callee) && r145_env.macros.has(r145_callee) && r145_env.macros.get(r145_callee).toPattern)
                return r145_env.macros.get(r145_callee).toPattern(r145_pattern, r145_env, r145_wrapper);
            else if (r1_atom(r145_callee) && r145_env.macros.has(r145_callee) && !r145_env.macros.get(r145_callee).invokeAsAtom)
                throw new r1_FormInvalidError(r145_pattern, 'Invalid Pattern');
            else
                return r145_ms = r145_subpatterns.map(function _r145_t20(r146_x) {
                    var r146_x;
                    return r118_toPattern(r146_x, r145_env, r145_wrapper);
                }), r145_t = r145_env.newt(), {
                    'whether': function _r145_t21(r147_x) {
                        var r147_x;
                        return [
                            '&&',
                            [
                                '.set',
                                r145_t,
                                [
                                    [
                                        '.',
                                        r1_ex(r145_callee, r145_env),
                                        [
                                            '.quote',
                                            'unapply'
                                        ]
                                    ],
                                    r147_x,
                                    [
                                        '.quote',
                                        r145_ms.length
                                    ]
                                ]
                            ]
                        ].concat(r145_ms.map(function _r147_t2(r148_p, r148_j) {
                            var r148_p, r148_j;
                            return r148_p.whether([
                                '.',
                                r145_t,
                                [
                                    '.quote',
                                    r148_j
                                ]
                            ]);
                        })).filter(r118_boole);
                    },
                    'assign': function _r145_t22(r149_x, r149_locallyQ) {
                        var r149_x, r149_locallyQ;
                        return ['.begin'].concat(r145_ms.map(function _r149_t2(r150_p, r150_j) {
                            var r150_p, r150_j;
                            return r150_p.assign([
                                '.',
                                r145_t,
                                [
                                    '.quote',
                                    r150_j
                                ]
                            ], r149_locallyQ);
                        }));
                    }
                };
        else
            return void 0;
    }, r118_externs.macros.put('.list', {}), r118_externs.macros.get('.list').toPattern = function _r118_t25(r159_pattern, r159_env, r159_wrapper) {
        var r159_pattern, r159_env, r159_wrapper, r159_subpatterns, r159_ms, _r159_t0;
        return _r159_t0 = r159_pattern, Array.isArray(_r159_t0) && _r159_t0.length >= 1 && '.list' === _r159_t0[0] ? (r159_subpatterns = _r159_t0.slice(1), r159_ms = r159_subpatterns.map(function _r159_t4(r160_x) {
            var r160_x;
            return r118_toPattern(r160_x, r159_env, r159_wrapper);
        }), {
            'whether': function _r159_t5(r161_x) {
                var r161_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r118_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r161_x
                    ],
                    [
                        '===',
                        [
                            '.',
                            r161_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r159_ms.length
                        ]
                    ]
                ].concat(r159_ms.map(function _r161_t2(r162_p, r162_j) {
                    var r162_p, r162_j;
                    return r162_p.whether([
                        '.',
                        r161_x,
                        [
                            '.quote',
                            r162_j
                        ]
                    ]);
                })).filter(r118_boole);
            },
            'assign': function _r159_t6(r163_x, r163_locallyQ) {
                var r163_x, r163_locallyQ;
                return ['.begin'].concat(r159_ms.map(function _r163_t2(r164_p, r164_j) {
                    var r164_p, r164_j;
                    return r164_p.assign([
                        '.',
                        r163_x,
                        [
                            '.quote',
                            r164_j
                        ]
                    ], r163_locallyQ);
                }).concat([r163_x]));
            }
        }) : void 0;
    }, r118_externs.macros.put('.conslist', {}), r118_externs.macros.get('.conslist').toPattern = function _r118_t26(r165_pattern, r165_env, r165_wrapper) {
        var r165_pattern, r165_env, r165_wrapper, r165_subpatterns, r165_ms, r165_final, _r165_t0;
        return _r165_t0 = r165_pattern, Array.isArray(_r165_t0) && _r165_t0.length >= 1 && '.conslist' === _r165_t0[0] ? (r165_subpatterns = _r165_t0.slice(1), r165_ms = r165_pattern.slice(1, -1).map(function _r165_t4(r166_x) {
            var r166_x;
            return r118_toPattern(r166_x, r165_env, r165_wrapper);
        }), r165_final = r118_toPattern(r165_pattern[r165_pattern.length - 1], r165_env), {
            'whether': function _r165_t5(r167_x) {
                var r167_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r118_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r167_x
                    ],
                    [
                        '>=',
                        [
                            '.',
                            r167_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r165_ms.length
                        ]
                    ]
                ].concat(r165_ms.map(function _r167_t2(r168_p, r168_j) {
                    var r168_p, r168_j;
                    return r168_p.whether([
                        '.',
                        r167_x,
                        [
                            '.quote',
                            r168_j
                        ]
                    ]);
                }).concat([r165_final.whether([
                        [
                            '.',
                            r167_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r165_ms.length
                        ]
                    ])])).filter(r118_boole);
            },
            'assign': function _r165_t6(r169_x, r169_locallyQ) {
                var r169_x, r169_locallyQ;
                return ['.begin'].concat(r165_ms.map(function _r169_t2(r170_p, r170_j) {
                    var r170_p, r170_j;
                    return r170_p.assign([
                        '.',
                        r169_x,
                        [
                            '.quote',
                            r170_j
                        ]
                    ], r169_locallyQ);
                })).concat([r165_final.assign(r165_wrapper ? [
                        [
                            '.',
                            [
                                [
                                    '.',
                                    r169_x,
                                    [
                                        '.quote',
                                        'slice'
                                    ]
                                ],
                                [
                                    '.quote',
                                    r165_ms.length
                                ]
                            ],
                            [
                                '.quote',
                                'map'
                            ]
                        ],
                        r165_wrapper
                    ] : [
                        [
                            '.',
                            r169_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r165_ms.length
                        ]
                    ], r169_locallyQ)]).concat([r169_x]);
            }
        }) : void 0;
    }, r118_externs.macros.put('.hash', {}), r118_externs.macros.get('.hash').toPattern = function _r118_t27(r171_pattern, r171_env, r171_wrapper) {
        var r171_pattern, r171_env, r171_wrapper, r171_subpatterns, r171_ms, _r171_t0;
        return _r171_t0 = r171_pattern, Array.isArray(_r171_t0) && _r171_t0.length >= 1 && '.hash' === _r171_t0[0] ? (r171_subpatterns = _r171_t0.slice(1), r171_ms = r171_subpatterns.map(function _r171_t4(r172_pair) {
            var r172_pair;
            return [
                r172_pair[0],
                r118_toPattern(r172_pair[1], r171_env, r171_wrapper)
            ];
        }), {
            'whether': function _r171_t5(r173_x) {
                var r173_x;
                return [
                    '&&',
                    r173_x
                ].concat(r171_ms.map(function _r173_t2(r174_p) {
                    var r174_p;
                    return r174_p[1].whether([
                        '.',
                        r173_x,
                        [
                            '.quote',
                            r174_p[0]
                        ]
                    ]);
                })).filter(r118_boole);
            },
            'assign': function _r171_t6(r175_x, r175_locallyQ) {
                var r175_x, r175_locallyQ;
                return ['.begin'].concat(r171_ms.map(function _r175_t2(r176_p) {
                    var r176_p;
                    return r176_p[1].assign([
                        '.',
                        r175_x,
                        [
                            '.quote',
                            r176_p[0]
                        ]
                    ], r175_locallyQ);
                }).concat([r175_x]));
            }
        }) : void 0;
    }, r118_externs.macros.put('.xhash', {}), r118_externs.macros.get('.xhash').toPattern = function _r118_t28(r177_pattern, r177_env, r177_wrapper) {
        var r177_pattern, r177_env, r177_wrapper, r177_subpatterns, r177_ms, _r177_t0;
        return _r177_t0 = r177_pattern, Array.isArray(_r177_t0) && _r177_t0.length >= 1 && '.xhash' === _r177_t0[0] ? (r177_subpatterns = _r177_t0.slice(1), r177_ms = r177_subpatterns.map(function _r177_t4(r178_pair) {
            var r178_pair;
            return [
                r1_ex(r178_pair[0], r177_env),
                r118_toPattern(r178_pair[1], r177_env, r177_wrapper)
            ];
        }), {
            'whether': function _r177_t5(r179_x) {
                var r179_x;
                return [
                    '&&',
                    r179_x
                ].concat(r177_ms.map(function _r179_t2(r180_p) {
                    var r180_p, r180_key, _r180_t0, _r180_t4;
                    return _r180_t0 = r180_p[0], Array.isArray(_r180_t0) && _r180_t0.length === 2 && '.quote' === _r180_t0[0] ? (r180_key = _r180_t0[1], r180_p[1].whether([
                        '.',
                        r179_x,
                        r180_p[0]
                    ])) : (_r180_t4 = r177_env.newt(), function (r181_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r181_t,
                                [
                                    '.',
                                    r179_x,
                                    r180_p[0]
                                ]
                            ],
                            r180_p[1].whether(r181_t)
                        ];
                    }(_r180_t4));
                })).filter(r118_boole);
            },
            'assign': function _r177_t6(r182_x, r182_locallyQ) {
                var r182_x, r182_locallyQ;
                return ['.begin'].concat(r177_ms.map(function _r182_t2(r183_p) {
                    var r183_p, r183_key, _r183_t0, _r183_t4;
                    return _r183_t0 = r183_p[0], Array.isArray(_r183_t0) && _r183_t0.length === 2 && '.quote' === _r183_t0[0] ? (r183_key = _r183_t0[1], r183_p[1].assign([
                        '.',
                        r182_x,
                        r183_p[0]
                    ], r182_locallyQ)) : (_r183_t4 = r177_env.newt(), function (r184_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r184_t,
                                [
                                    '.',
                                    r182_x,
                                    r183_p[0]
                                ]
                            ],
                            r183_p[1].assign(r184_t, r182_locallyQ)
                        ];
                    }(_r183_t4));
                }).concat([r182_x]));
            }
        }) : void 0;
    }, r118_externs.macros.put('.quasiquote', {}), r118_externs.macros.get('.quasiquote').toPattern = function _r118_t29(r185_pattern, r185_env, r185_wrapper) {
        var r185_pattern, r185_env, r185_wrapper, r185_subpatterns, _r185_t0;
        return _r185_t0 = r185_pattern, Array.isArray(_r185_t0) && _r185_t0.length >= 1 && '.quasiquote' === _r185_t0[0] ? (r185_subpatterns = _r185_t0.slice(1), r118_toPattern(r1_deQuasiquote(r185_pattern[1], 0, r185_env), r185_env, r185_wrapper)) : void 0;
    }, r118_externs.macros.put('.operatorPiece', {}), r118_externs.macros.get('.operatorPiece').toPattern = function _r118_t30(r186_pattern, r186_env, r186_wrapper) {
        var r186_pattern, r186_env, r186_wrapper;
        return r118_toPattern(r1_opSegToRegular(r186_pattern.slice(1), r186_env), r186_env, r186_wrapper);
    }, r118_externs.macros.put('&&', {}), r118_externs.macros.get('&&').toPattern = function _r118_t31(r187_pattern, r187_env, r187_wrapper) {
        var r187_pattern, r187_env, r187_wrapper, r187_subpatterns, r187_ms, _r187_t0;
        return _r187_t0 = r187_pattern, Array.isArray(_r187_t0) && _r187_t0.length >= 1 && '&&' === _r187_t0[0] ? (r187_subpatterns = _r187_t0.slice(1), r187_ms = r187_subpatterns.map(function _r187_t4(r188_x) {
            var r188_x;
            return r118_toPattern(r188_x, r187_env, r187_wrapper);
        }), {
            'whether': function _r187_t5(r189_x) {
                var r189_x, r189_f;
                return r189_f = ['&&'].concat(r187_ms.map(function _r189_t2(r190_p, r190_j) {
                    var r190_p, r190_j;
                    return r190_p.whether(r189_x);
                })).filter(r118_boole), r189_f.length === 1 ? [
                    '.quote',
                    !0
                ] : r189_f;
            },
            'assign': function _r187_t6(r191_x, r191_locallyQ) {
                var r191_x, r191_locallyQ;
                return ['.begin'].concat(r187_ms.map(function _r191_t2(r192_p, r192_j) {
                    var r192_p, r192_j;
                    return r192_p.assign(r191_x, r191_locallyQ);
                }).concat([r191_x]));
            }
        }) : void 0;
    }, r118_externs.macros.put('||', {}), r118_externs.macros.get('||').toPattern = function _r118_t32(r193_pattern, r193_env, r193_wrapper) {
        var r193_pattern, r193_env, r193_wrapper, r193_subpatterns, r193_ms, _r193_t0;
        return _r193_t0 = r193_pattern, Array.isArray(_r193_t0) && _r193_t0.length >= 1 && '||' === _r193_t0[0] ? (r193_subpatterns = _r193_t0.slice(1), r193_ms = r193_subpatterns.map(function _r193_t4(r194_x) {
            var r194_x;
            return r118_toPattern(r194_x, r193_env, r193_wrapper);
        }), {
            'whether': function _r193_t5(r195_x) {
                var r195_x;
                return ['||'].concat(r193_ms.map(function _r195_t2(r196_p, r196_j) {
                    var r196_p, r196_j;
                    return r196_p.whether(r195_x);
                })).filter(r118_boole);
            },
            'assign': function _r193_t6(r197_x, r197_locallyQ) {
                var r197_x, r197_locallyQ;
                return ['.unit'];
            }
        }) : void 0;
    }, r118_boole = function _r118_t33(r198_x) {
        var r198_x;
        return !!r198_x;
    }, r118_externs.macros.put('match', function _r118_t34(r199_form, r199_env, r199_wrapper) {
        var r199_form, r199_env, r199_wrapper, r199_pairs, r199_t, r199_f, r199_j, r199_pattern, r199_guard, r199_body, r199_pat, r199_cond, r199_tc, _r199_t0;
        for (r199_pairs = r199_form.slice(2), r199_t = r199_env.newt(), r199_f = ['.unit'], r199_j = r199_pairs.length - 1; r199_j >= 0; r199_j -= 1)
            _r199_t0 = r199_pairs[r199_j], r199_f = Array.isArray(_r199_t0) && _r199_t0.length === 2 ? (r199_pattern = _r199_t0[0], r199_body = _r199_t0[1], r199_pat = r118_toPattern(r199_pattern, r199_env, r199_wrapper), r199_cond = r199_pat.whether(r199_t), r199_cond ? [
                '.if',
                r199_cond,
                [
                    '.begin',
                    r199_pat.assign(r199_t, !0),
                    r1_ex(r199_body, r199_env)
                ],
                r199_f
            ] : [
                '.begin',
                r199_pat.assign(r199_t, !0),
                r1_ex(r199_body, r199_env)
            ]) : Array.isArray(_r199_t0) && _r199_t0.length === 3 ? (r199_pattern = _r199_t0[0], r199_guard = _r199_t0[1], r199_body = _r199_t0[2], r199_pat = r118_toPattern(r199_pattern, r199_env, r199_wrapper), r199_cond = r199_pat.whether(r199_t), r199_cond ? (r199_tc = r199_env.newt(), [
                '.begin',
                [
                    '.set',
                    r199_tc,
                    [
                        '.quote',
                        !1
                    ]
                ],
                [
                    '.if',
                    r199_cond,
                    [
                        '.begin',
                        r199_pat.assign(r199_t, !0),
                        [
                            '.if',
                            r1_ex(r199_guard, r199_env),
                            [
                                '.set',
                                r199_tc,
                                [
                                    '.quote',
                                    !0
                                ]
                            ],
                            [
                                '.set',
                                r199_tc,
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
                    r199_tc,
                    r1_ex(r199_body, r199_env),
                    r199_f
                ]
            ]) : [
                '.begin',
                r199_pat.assign(r199_t, !0),
                [
                    '.if',
                    r1_ex(r199_guard, r199_env),
                    r1_ex(r199_body, r199_env),
                    r199_f
                ]
            ]) : r199_f;
        return [
            '.begin',
            [
                '.set',
                r199_t,
                r1_ex(r199_form[1], r199_env)
            ],
            r199_f
        ];
    }), r118_externs.macros.put('matches', function _r118_t35(r200_form, r200_env, r200_wrapper) {
        var r200_form, r200_env, r200_wrapper, r200_whatever, r200_obj, r200_pattern, r200_pat, r200_t, r200_cond, _r200_t0;
        return _r200_t0 = r200_form, Array.isArray(_r200_t0) && _r200_t0.length === 3 ? (r200_whatever = _r200_t0[0], r200_obj = _r200_t0[1], r200_pattern = _r200_t0[2], r200_pat = r118_toPattern(r200_pattern, r200_env), r200_t = r200_env.newt(), r200_cond = r200_pat.whether(r200_t), r200_cond ? [
            '.begin',
            [
                '.set',
                r200_t,
                r1_ex(r200_obj, r200_env)
            ],
            r200_pat.whether(r200_t)
        ] : [
            '.quote',
            !0
        ]) : void 0;
    }), r118_externs.macros.put('<~>', r118_externs.macros.get('matches')), r118_externs.operatorInfo.put('<~>', {
        'priority': 400,
        'associvity': 'never'
    }), r118_externs.macros.put('regex', function _r118_t36(r201_form, r201_env) {
        var r201_form, r201_env, r201_args, r201_s, r201_flag, _r201_t0;
        return _r201_t0 = r201_form, Array.isArray(_r201_t0) && _r201_t0.length === 2 && 'regex' === _r201_t0[0] && Array.isArray(_r201_t0[1]) && _r201_t0[1].length === 2 && '.quote' === _r201_t0[1][0] ? (r201_s = _r201_t0[1][1], _r201_t0[1], [
            '.quote',
            new RegExp(r201_s)
        ]) : Array.isArray(_r201_t0) && _r201_t0.length === 3 && 'regex' === _r201_t0[0] && Array.isArray(_r201_t0[1]) && _r201_t0[1].length === 2 && '.quote' === _r201_t0[1][0] && Array.isArray(_r201_t0[2]) && _r201_t0[2].length === 2 && '.quote' === _r201_t0[2][0] ? (r201_s = _r201_t0[1][1], _r201_t0[1], r201_flag = _r201_t0[2][1], _r201_t0[2], [
            '.quote',
            new RegExp(r201_s, r201_flag)
        ]) : Array.isArray(_r201_t0) && _r201_t0.length >= 1 && 'regex' === _r201_t0[0] ? (r201_args = _r201_t0.slice(1), [
            '.new',
            r118_externs.use('RegExp')
        ].concat(r201_args)) : void 0;
    }), r118_externs.macros.put('define-macro', function _r118_t37(r202_form, r202_env) {
        var r202_form, r202_env, r202_op, r202_name, r202_body, r202_coinit, r202_ds, r202_imports, r202_names, r202_assignments, r202_macroG, r202_macroFn, r202_str, _r202_t0, _r202_t1;
        return _r202_t0 = r202_form, Array.isArray(_r202_t0) && _r202_t0.length === 3 && Array.isArray(_r202_t0[1]) && _r202_t0[1].length === 2 && '.quote' === _r202_t0[1][0] ? (r202_op = _r202_t0[0], r202_str = _r202_t0[1][1], _r202_t0[1], r202_body = _r202_t0[2], r1_ex([
            r202_op,
            r202_str,
            r202_body
        ], r202_env)) : (_r202_t1 = !1, Array.isArray(_r202_t0) && _r202_t0.length === 3 && (r202_op = _r202_t0[0], r202_name = _r202_t0[1], r202_body = _r202_t0[2], r1_atom(r202_name) ? _r202_t1 = !0 : _r202_t1 = !1), _r202_t1 ? (r202_coinit = {
            'injectForm': void 0,
            'initFn': void 0
        }, r202_ds = new r1_Scope(r202_env), r202_imports = {
            'ex': r1_ex,
            'atom': r1_wrapForSyntacticClosure(r1_atom),
            'prim': r1_wrapForSyntacticClosure(r1_prim),
            'formOf': function _r202_t6(r203_x) {
                var r203_x;
                return r203_x[1];
            },
            'scopeOf': function _r202_t7(r204_x) {
                var r204_x;
                return r204_x[2];
            },
            'definingEnv': r202_env,
            'externEnv': r118_externs,
            'require': require,
            'toPattern': r118_toPattern,
            'coinit': r202_coinit,
            'FormInvalidError': r1_FormInvalidError,
            'deQuasiquote': r1_deQuasiquote,
            'opSegToRegular': r1_opSegToRegular
        }, r202_names = Object.keys(r202_imports), r202_ds.declare('$', !0), r202_assignments = ['.begin'].concat(r202_names.map(function _r202_t8(r205_name) {
            var r205_name;
            return [
                'local',
                r205_name,
                [
                    '.',
                    '$',
                    [
                        '.quote',
                        r205_name
                    ]
                ]
            ];
        })), r202_macroG = new Function(r202_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
            '.return',
            r1_ex([
                '.begin',
                r202_assignments,
                r202_body
            ], r202_ds)
        ], r202_ds, function _r202_t9(r206_form) {
            var r206_form;
            return [
                '.return',
                r206_form
            ];
        }))), r202_macroFn = r202_macroG(r202_imports), r202_env.macros.put(r202_name, function _r202_t10(r207_c, r207_e) {
            var r207_c, r207_e, r207_result, r207_s;
            return r207_result = r202_macroFn(r207_c, r207_e), r207_s = new r1_Scope(r202_env), r207_s.hanging = r207_e, r207_s.semiparent = r207_e, r1_ex(r207_result, r207_s);
        }), r202_coinit.initFn && r202_coinit.initFn(r202_env.macros.get(r202_name)), r202_coinit.injectForm ? r1_ex(r202_coinit.injectForm, r202_env) : ['.unit']) : ['.unit']);
    }), r118_externs.macros.put('macro-match', function _r118_t38(r208_form, r208_env) {
        var r208_form, r208_env, r208_c, r208_e, r208_patterns, r208_t, r208_tx, r208_tw, _r208_t0;
        return _r208_t0 = r208_form, Array.isArray(_r208_t0) && _r208_t0.length >= 3 && 'macro-match' === _r208_t0[0] ? (r208_c = _r208_t0[1], r208_e = _r208_t0[2], r208_patterns = _r208_t0.slice(3), r208_t = r208_env.newt(), r208_tx = r208_env.newt(), r208_tw = r208_env.newt(), [
            '.begin',
            [
                '.set',
                r208_t,
                r208_e
            ],
            [
                '.set',
                r208_tw,
                [
                    '.lambda',
                    [r208_tx],
                    [
                        '.return',
                        [
                            '.list',
                            [
                                '.quote',
                                '.syntactic-closure'
                            ],
                            r208_tx,
                            r208_t
                        ]
                    ]
                ]
            ],
            r118_externs.macros.get('match')([
                'match',
                r208_c
            ].concat(r208_patterns), r208_env, r208_tw)
        ]) : ['.unit'];
    }), r118_externs.pFamily = 'r', r118_externs;
}, exports.Create = r1_Create;
