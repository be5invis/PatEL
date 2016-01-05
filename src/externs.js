var r1_patrisika, r1_atom, r1_identifier, r1_prim, r1_Scope, r1_escodegen, r1_util, r1_ex, r1_deQuasiquote, r1_FormInvalidError, r1_wrapForSyntacticClosure, r1_Create, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4;
r1_patrisika = require('patrisika'), r1_atom = function _r1_t0(r52_x) {
    var r52_x;
    return typeof r52_x === 'string';
}, r1_identifier = function _r1_t1(r53_x) {
    var r53_x;
    return r1_atom(r53_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r53_x);
}, r1_prim = function _r1_t2(r54_x) {
    var r54_x;
    return r1_atom(r54_x) && !r1_identifier(r54_x);
}, r1_Scope = require('patrisika').Scope, r1_escodegen = require('escodegen'), r1_util = require('util'), r1_ex = require('./ex').ex, r1_deQuasiquote = require('./ex').deQuasiquote, r1_FormInvalidError = r1_patrisika.FormInvalidError, r1_wrapForSyntacticClosure = function _r1_t3(r55_fn) {
    var r55_fn;
    return function _r55_t2(r56_x) {
        var r56_x, r56_c, r56_e, _r56_t0;
        return _r56_t0 = r56_x, Array.isArray(_r56_t0) && _r56_t0.length === 3 && '.syntactic-closure' === _r56_t0[0] ? (r56_c = _r56_t0[1], r56_e = _r56_t0[2], r55_fn(r56_c)) : r55_fn(r56_x);
    };
}, r1_Create = function _r1_t4() {
    var r57_externs, r57_operatorRename, r57_reportInvalid, r57_AssignWithMod, r57_Assign, r57_toPattern, r57_boole;
    return r57_externs = r1_patrisika.DefaultExterns(), r57_externs.castName = function _r57_t2(r58_name) {
        var r58_name;
        return r58_name;
    }, r57_externs.declare('require'), r57_externs.declare('exports'), r57_externs.declare('process'), r57_externs.declare('module'), r57_externs.declare('Error'), r57_operatorRename = function _r57_t3(r59_op) {
        var r59_op;
        return function _r59_t2(r60_form, r60_env) {
            var r60_form, r60_env;
            return r1_ex([r59_op].concat(r60_form.slice(1)), r60_env);
        };
    }, r57_reportInvalid = function _r57_t4(r61_form, r61_reason) {
        var r61_form, r61_reason;
        throw new r1_FormInvalidError(r61_form, r61_reason);
    }, r57_externs.macros.put('begin', r57_operatorRename('.begin')), r57_externs.macros.put('then', r57_operatorRename('.begin')), r57_externs.macros.put('else', r57_operatorRename('.begin')), r57_externs.macros.put('while', r57_operatorRename('.while')), r57_externs.macros.put('try', r57_operatorRename('.try')), r57_externs.macros.put('is', r57_operatorRename('.is')), r57_externs.macros.put('<@', r57_operatorRename('.is')), r57_externs.macros.put('new', r57_operatorRename('.new')), r57_externs.macros.put('this', r57_operatorRename('.thisp')), r57_externs.macros.put('arguments', r57_operatorRename('.argsp')), r57_externs.macros.put('and', r57_operatorRename('&&')), r57_externs.macros.put('or', r57_operatorRename('||')), r57_externs.macros.put('not', r57_operatorRename('!')), r57_externs.macros.put('return', r57_operatorRename('.return')), r57_externs.macros.put('yield', r57_operatorRename('.yield')), r57_externs.macros.put('throw', r57_operatorRename('.throw')), r57_externs.macros.put('list', r57_operatorRename('.list')), r57_externs.macros.put('typeof', r57_operatorRename('.typeof')), r57_externs.macros.put('quasiquote', r57_operatorRename('.quasiquote')), r57_externs.macros.put('syntax', r57_operatorRename('.quasiquote')), r57_externs.macros.put('lambda', function _r57_t5(r62_form, r62_env) {
        var r62_form, r62_env, r62_otherwise, r62_car, r62_body, r62_parameters, _r62_t0, _r62_t1;
        return _r62_t0 = r62_form, _r62_t1 = !1, Array.isArray(_r62_t0) && _r62_t0.length === 3 && (r62_car = _r62_t0[0], r62_parameters = _r62_t0[1], r62_body = _r62_t0[2], r1_atom(r62_parameters) ? _r62_t1 = !0 : _r62_t1 = !1), _r62_t1 ? r1_ex([
            '.lambda',
            [r62_parameters],
            r62_body
        ], r62_env) : Array.isArray(_r62_t0) && _r62_t0.length === 3 ? (r62_car = _r62_t0[0], r62_parameters = _r62_t0[1], r62_body = _r62_t0[2], r1_ex([
            '.lambda',
            r62_parameters,
            r62_body
        ], r62_env)) : Array.isArray(_r62_t0) && _r62_t0.length === 2 ? (r62_car = _r62_t0[0], r62_body = _r62_t0[1], r1_ex([
            '.lambda',
            [],
            r62_body
        ], r62_env)) : Array.isArray(_r62_t0) && _r62_t0.length === 1 ? (r62_car = _r62_t0[0], r1_ex([
            '.lambda',
            [],
            ['.unit']
        ], r62_body)) : (r62_otherwise = _r62_t0, r57_reportInvalid(r62_otherwise, 'Invalid Lambda Formation'));
    }), r57_externs.macros.put('function', r57_externs.macros.get('lambda')), r57_externs.macros.put('->', r57_externs.macros.get('lambda')), r57_externs.macros.put('=>', r57_externs.macros.get('lambda')), r57_externs.macros.put('if', function _r57_t6(r63_form, r63_env) {
        var r63_form, r63_env, r63_otherwise, r63_test, r63_consequents, r63_alternates, r63_consequent, r63_alternate, _r63_t0;
        return _r63_t0 = r63_form, Array.isArray(_r63_t0) && _r63_t0.length === 3 && 'if' === _r63_t0[0] ? (r63_test = _r63_t0[1], r63_consequent = _r63_t0[2], r1_ex([
            '.if',
            r63_test,
            r63_consequent
        ], r63_env)) : Array.isArray(_r63_t0) && _r63_t0.length === 4 && 'if' === _r63_t0[0] ? (r63_test = _r63_t0[1], r63_consequent = _r63_t0[2], r63_alternate = _r63_t0[3], r1_ex([
            '.if',
            r63_test,
            r63_consequent,
            r63_alternate
        ], r63_env)) : Array.isArray(_r63_t0) && _r63_t0.length === 3 && 'if' === _r63_t0[0] && Array.isArray(_r63_t0[2]) && _r63_t0[2].length >= 1 && 'then' === _r63_t0[2][0] ? (r63_test = _r63_t0[1], r63_consequents = _r63_t0[2].slice(1), _r63_t0[2], r1_ex([
            '.if',
            r63_test,
            ['.begin'].concat(r63_consequents)
        ], r63_env)) : Array.isArray(_r63_t0) && _r63_t0.length === 4 && 'if' === _r63_t0[0] && Array.isArray(_r63_t0[2]) && _r63_t0[2].length >= 1 && 'then' === _r63_t0[2][0] && Array.isArray(_r63_t0[3]) && _r63_t0[3].length >= 1 && 'else' === _r63_t0[3][0] ? (r63_test = _r63_t0[1], r63_consequents = _r63_t0[2].slice(1), _r63_t0[2], r63_alternates = _r63_t0[3].slice(1), _r63_t0[3], r1_ex([
            '.if',
            r63_test,
            ['.begin'].concat(r63_consequents),
            ['.begin'].concat(r63_alternates)
        ], r63_env)) : (r63_otherwise = _r63_t0, r57_reportInvalid(r63_otherwise, 'Invalid Conditional Form'));
    }), r57_externs.macros.put('let', function _r57_t7(r64_form, r64_env) {
        var r64_form, r64_env, r64_pairs, r64_args, r64_paras, r64_j, r64_arg, r64_param, r64_useless, _r64_t0, _r64_t1;
        for (r64_pairs = r64_form.slice(1, -1), r64_args = [], r64_paras = [], r64_j = 0; r64_j < r64_pairs.length; r64_j += 1)
            _r64_t0 = r64_pairs[r64_j], Array.isArray(_r64_t0) && _r64_t0.length >= 2 ? (r64_arg = _r64_t0[0], r64_param = _r64_t0[1], r64_useless = _r64_t0.slice(2), r64_args.push(r64_arg), r64_paras.push(r64_param)) : Array.isArray(_r64_t0) && _r64_t0.length === 2 ? (r64_arg = _r64_t0[0], r64_param = _r64_t0[1], r64_args.push(r64_arg), r64_paras.push(r64_param)) : (_r64_t1 = !1, Array.isArray(_r64_t0) && _r64_t0.length === 1 && (r64_arg = _r64_t0[0], r1_atom(r64_arg) ? _r64_t1 = !0 : _r64_t1 = !1), _r64_t1 && (r64_args.push(r64_arg), r64_paras.push(r64_env.use(r64_arg))));
        return r1_ex([
            '.beta',
            r64_args,
            r64_form[r64_form.length - 1]
        ].concat(r64_paras), r64_env);
    }), r57_externs.macros.put('object', function _r57_t8(r65_form, r65_env) {
        var r65_form, r65_env, r65_pairs;
        return r65_pairs = r65_form.slice(1).map(function _r65_t2(r66_pair) {
            var r66_pair, r66_method, r66_param, r66_value, r66_property, _r66_t0, _r66_t1, _r66_t2, _r66_t3, _r66_t4, _r66_t5;
            return _r66_t0 = r66_pair, _r66_t5 = !1, Array.isArray(_r66_t0) && _r66_t0.length === 3 && '=' === _r66_t0[0] && (r66_property = _r66_t0[1], r66_value = _r66_t0[2], r1_atom(r66_property) ? _r66_t5 = !0 : _r66_t5 = !1), _r66_t5 ? [
                [
                    '.quote',
                    r66_property
                ],
                r66_value
            ] : (_r66_t4 = !1, Array.isArray(_r66_t0) && _r66_t0.length === 2 && (r66_property = _r66_t0[0], r66_value = _r66_t0[1], r1_atom(r66_property) ? _r66_t4 = !0 : _r66_t4 = !1), _r66_t4 ? [
                [
                    '.quote',
                    r66_property
                ],
                r66_value
            ] : (_r66_t3 = !1, Array.isArray(_r66_t0) && _r66_t0.length === 1 && (r66_property = _r66_t0[0], r1_atom(r66_property) ? _r66_t3 = !0 : _r66_t3 = !1), _r66_t3 ? [
                [
                    '.quote',
                    r66_property
                ],
                r66_property
            ] : (r66_property = _r66_t0, r1_atom(r66_property) ? [
                [
                    '.quote',
                    r66_property
                ],
                r66_property
            ] : Array.isArray(_r66_t0) && _r66_t0.length === 3 && '=' === _r66_t0[0] && Array.isArray(_r66_t0[1]) && _r66_t0[1].length === 2 && '.quote' === _r66_t0[1][0] ? (r66_property = _r66_t0[1][1], _r66_t0[1], r66_value = _r66_t0[2], [
                [
                    '.quote',
                    r66_property
                ],
                r66_value
            ]) : Array.isArray(_r66_t0) && _r66_t0.length === 2 && Array.isArray(_r66_t0[0]) && _r66_t0[0].length === 2 && '.quote' === _r66_t0[0][0] ? (r66_property = _r66_t0[0][1], _r66_t0[0], r66_value = _r66_t0[1], [
                [
                    '.quote',
                    r66_property
                ],
                r66_value
            ]) : (_r66_t2 = !1, Array.isArray(_r66_t0) && _r66_t0.length === 3 && '=' === _r66_t0[0] && Array.isArray(_r66_t0[1]) && _r66_t0[1].length >= 1 && (r66_method = _r66_t0[1][0], r66_param = _r66_t0[1].slice(1), _r66_t0[1], r66_value = _r66_t0[2], r1_atom(r66_method) ? _r66_t2 = !0 : _r66_t2 = !1), _r66_t2 ? [
                [
                    '.quote',
                    r66_method
                ],
                [
                    '.lambda',
                    r66_param,
                    r66_value
                ]
            ] : (_r66_t1 = !1, Array.isArray(_r66_t0) && _r66_t0.length === 2 && Array.isArray(_r66_t0[0]) && _r66_t0[0].length >= 1 && (r66_method = _r66_t0[0][0], r66_param = _r66_t0[0].slice(1), _r66_t0[0], r66_value = _r66_t0[1], r1_atom(r66_method) ? _r66_t1 = !0 : _r66_t1 = !1), _r66_t1 ? [
                [
                    '.quote',
                    r66_method
                ],
                [
                    '.lambda',
                    r66_param,
                    r66_value
                ]
            ] : void 0)))));
        }), r1_ex(['.xhash'].concat(r65_pairs.filter(function _r65_t3(r67_x) {
            var r67_x;
            return r67_x;
        })), r65_env);
    }), r57_externs.macros.get('list').toPattern = function _r57_t9(r68_form, r68_env, r68_wrapper) {
        var r68_form, r68_env, r68_wrapper;
        return r57_toPattern(['.list'].concat(r68_form.slice(1)), r68_env, r68_wrapper);
    }, r57_externs.macros.get('object').toPattern = function _r57_t10(r69_form, r69_env, r69_wrapper) {
        var r69_form, r69_env, r69_wrapper, r69_pairs;
        return r69_pairs = r69_form.slice(1).map(function _r69_t2(r70_pair) {
            var r70_pair, r70_property, r70_value, _r70_t0, _r70_t1, _r70_t2, _r70_t3;
            if (_r70_t0 = r70_pair, _r70_t3 = !1, Array.isArray(_r70_t0) && _r70_t0.length === 3 && '=' === _r70_t0[0] && (r70_property = _r70_t0[1], r70_value = _r70_t0[2], r1_atom(r70_property) ? _r70_t3 = !0 : _r70_t3 = !1), _r70_t3)
                return [
                    r70_property,
                    r70_value
                ];
            else if (_r70_t2 = !1, Array.isArray(_r70_t0) && _r70_t0.length === 2 && (r70_property = _r70_t0[0], r70_value = _r70_t0[1], r1_atom(r70_property) ? _r70_t2 = !0 : _r70_t2 = !1), _r70_t2)
                return [
                    r70_property,
                    r70_value
                ];
            else if (_r70_t1 = !1, Array.isArray(_r70_t0) && _r70_t0.length === 1 && (r70_property = _r70_t0[0], r1_atom(r70_property) ? _r70_t1 = !0 : _r70_t1 = !1), _r70_t1)
                return [
                    r70_property,
                    r70_property
                ];
            else if (r70_property = _r70_t0, r1_atom(r70_property))
                return [
                    r70_property,
                    r70_property
                ];
            else if (Array.isArray(_r70_t0) && _r70_t0.length === 3 && '=' === _r70_t0[0] && Array.isArray(_r70_t0[1]) && _r70_t0[1].length === 2 && '.quote' === _r70_t0[1][0])
                return r70_property = _r70_t0[1][1], _r70_t0[1], r70_value = _r70_t0[2], [
                    r70_property,
                    r70_value
                ];
            else if (Array.isArray(_r70_t0) && _r70_t0.length === 2 && Array.isArray(_r70_t0[0]) && _r70_t0[0].length === 2 && '.quote' === _r70_t0[0][0])
                return r70_property = _r70_t0[0][1], _r70_t0[0], r70_value = _r70_t0[1], [
                    r70_property,
                    r70_value
                ];
            else
                throw new r1_FormInvalidError(r69_form, 'Invalid Assignment Left-hand Side');
        }), r57_toPattern(['.hash'].concat(r69_pairs), r69_env, r69_wrapper);
    }, r57_externs.macros.put('piecewise', function _r57_t11(r71_form, r71_env) {
        var r71_form, r71_env, r71_pairs, r71_f, r71_j, r71_otherwise, r71_condition, r71_consequent, _r71_t0, _r71_t1;
        if (_r71_t0 = r71_form, Array.isArray(_r71_t0) && _r71_t0.length >= 1 && 'piecewise' === _r71_t0[0]) {
            for (r71_pairs = _r71_t0.slice(1), r71_f = ['.unit'], r71_j = r71_pairs.length - 1; r71_j >= 0; r71_j -= 1) {
                if (_r71_t1 = r71_pairs[r71_j], !(Array.isArray(_r71_t1) && _r71_t1.length === 2))
                    throw r71_otherwise = _r71_t1, new r1_FormInvalidError(r71_otherwise, 'Invalid Piecewise Segment');
                r71_condition = _r71_t1[0], r71_consequent = _r71_t1[1], r71_f = [
                    '.if',
                    r1_ex(r71_condition, r71_env),
                    r1_ex(r71_consequent, r71_env),
                    r71_f
                ];
            }
            return r71_f;
        } else
            return void 0;
    }), r57_AssignWithMod = function _r57_t12(r72_left, r72_right, r72_mod, r72_env, r72_locallyQ) {
        var r72_left, r72_right, r72_mod, r72_env, r72_locallyQ, r72_callee, r72_paras, r72_pat, r72_t, r72_whatever, r72_a, r72_e, r72_id, _r72_t0, _r72_t1, _r72_t2, _r72_t3, _r72_t4, _r72_t5;
        if (_r72_t0 = r72_left, r72_id = _r72_t0, r1_atom(r72_id))
            return r72_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r72_id
                ], r72_env),
                r1_ex([
                    r72_mod,
                    r72_right
                ], r72_env)
            ] : [
                '.set',
                r1_ex(r72_left, r72_env),
                r1_ex([
                    r72_mod,
                    r72_right
                ], r72_env)
            ];
        else if (_r72_t5 = !1, Array.isArray(_r72_t0) && _r72_t0.length === 2 && '.id' === _r72_t0[0] && (r72_id = _r72_t0[1], r1_atom(r72_id) ? _r72_t5 = !0 : _r72_t5 = !1), _r72_t5)
            return r72_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r72_id
                ], r72_env),
                r1_ex([
                    r72_mod,
                    r72_right
                ], r72_env)
            ] : [
                '.set',
                r1_ex(r72_left, r72_env),
                r1_ex([
                    r72_mod,
                    r72_right
                ], r72_env)
            ];
        else if (_r72_t4 = !1, Array.isArray(_r72_t0) && _r72_t0.length === 3 && '.id' === _r72_t0[0] && (r72_id = _r72_t0[1], r72_e = _r72_t0[2], r1_atom(r72_id) && (r72_e === r72_env || !r72_locallyQ) ? _r72_t4 = !0 : _r72_t4 = !1), _r72_t4)
            return r72_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r72_id
                ], r72_e),
                r1_ex([
                    r72_mod,
                    r72_right
                ], r72_e)
            ] : [
                '.set',
                r1_ex(r72_left, r72_e),
                r1_ex([
                    r72_mod,
                    r72_right
                ], r72_e)
            ];
        else if (_r72_t3 = !1, Array.isArray(_r72_t0) && _r72_t0.length === 3 && '.id' === _r72_t0[0] && (r72_id = _r72_t0[1], r72_e = _r72_t0[2], r1_atom(r72_id) && r72_e !== r72_env && r72_locallyQ ? _r72_t3 = !0 : _r72_t3 = !1), _r72_t3)
            throw new r1_FormInvalidError(r72_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r72_t0) && _r72_t0.length === 2 && '.local' === _r72_t0[0])
            return r72_a = _r72_t0[1], r57_AssignWithMod(r72_a, r72_right, r72_mod, r72_env, !0);
        else if (_r72_t2 = !1, Array.isArray(_r72_t0) && _r72_t0.length === 3 && '.syntactic-closure' === _r72_t0[0] && (r72_a = _r72_t0[1], r72_e = _r72_t0[2], r72_e === r72_env || !r72_locallyQ ? _r72_t2 = !0 : _r72_t2 = !1), _r72_t2)
            return r57_AssignWithMod(r72_a, r72_right, r72_mod, r72_env, r72_locallyQ);
        else if (_r72_t1 = !1, Array.isArray(_r72_t0) && _r72_t0.length === 3 && '.syntactic-closure' === _r72_t0[0] && (r72_a = _r72_t0[1], r72_e = _r72_t0[2], r72_e !== r72_env && r72_locallyQ ? _r72_t1 = !0 : _r72_t1 = !1), _r72_t1)
            throw new r1_FormInvalidError(r72_left, 'Attempt to redefine non-local subform');
        else if (Array.isArray(_r72_t0) && _r72_t0.length >= 1 && '.revcall' === _r72_t0[0])
            return r72_whatever = _r72_t0.slice(1), r57_AssignWithMod([].concat(r72_whatever), r72_right, r72_mod, r72_env, r72_locallyQ);
        else if (Array.isArray(_r72_t0) && _r72_t0.length >= 1)
            if (r72_callee = _r72_t0[0], r72_paras = _r72_t0.slice(1), r1_atom(r72_callee) && r72_env.macros.has(r72_callee) && r72_env.macros.get(r72_callee).toPattern)
                return r72_pat = r57_toPattern(r72_left, r72_env), r72_t = r72_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r72_t,
                        r1_ex([
                            r72_mod,
                            r72_right
                        ], r72_env)
                    ],
                    r72_pat.assign(r72_t, r72_locallyQ)
                ];
            else if (r1_atom(r72_callee) && r72_env.macros.has(r72_callee))
                throw new r1_FormInvalidError(r72_left, 'Invalid Assignment Left-hand Side');
            else
                return r1_prim(r72_callee) ? [
                    '.set',
                    r1_ex(r72_left, r72_env),
                    r1_ex([
                        r72_mod,
                        r72_right
                    ], r72_env)
                ] : r1_atom(r72_callee) ? r72_locallyQ ? [
                    '.set',
                    r1_ex([
                        '.local',
                        r72_callee
                    ], r72_env),
                    r1_ex([
                        r72_mod,
                        [
                            '.lambda',
                            [].concat(r72_paras),
                            r72_right
                        ]
                    ], r72_env)
                ] : [
                    '.set',
                    r1_ex(r72_callee, r72_env),
                    r1_ex([
                        r72_mod,
                        [
                            '.lambda',
                            [].concat(r72_paras),
                            r72_right
                        ]
                    ], r72_env)
                ] : [
                    '.set',
                    r1_ex(r72_callee, r72_env),
                    r1_ex([
                        r72_mod,
                        [
                            '.lambda',
                            [].concat(r72_paras),
                            r72_right
                        ]
                    ], r72_env)
                ];
        else
            throw new r1_FormInvalidError(r72_left, 'Invalid Assignment Left-hand Side');
    }, r57_Assign = function _r57_t13(r73_left, r73_right, r73_env, r73_locallyQ) {
        var r73_left, r73_right, r73_env, r73_locallyQ;
        return r57_AssignWithMod(r73_left, r73_right, '.unquote', r73_env, r73_locallyQ);
    }, r57_externs.macros.put('define', function _r57_t14(r74_form, r74_env) {
        var r74_form, r74_env, r74_any, r74_op, r74_left, r74_right, r74_modifer, _r74_t0, _r74_t1;
        if (_r74_t0 = r74_form, Array.isArray(_r74_t0) && _r74_t0.length === 4)
            return r74_op = _r74_t0[0], r74_modifer = _r74_t0[1], r74_left = _r74_t0[2], r74_right = _r74_t0[3], r57_AssignWithMod(r74_left, r74_right, r74_modifer, r74_env, !0);
        else if (Array.isArray(_r74_t0) && _r74_t0.length === 3)
            return r74_op = _r74_t0[0], r74_left = _r74_t0[1], r74_right = _r74_t0[2], r57_Assign(r74_left, r74_right, r74_env, !0);
        else if (_r74_t1 = !1, Array.isArray(_r74_t0) && _r74_t0.length === 2 && (r74_op = _r74_t0[0], r74_left = _r74_t0[1], r1_atom(r74_left) ? _r74_t1 = !0 : _r74_t1 = !1), _r74_t1)
            return [
                '.local',
                r74_left
            ];
        else
            throw r74_any = _r74_t0, new r1_FormInvalidError(r74_any, 'Invalid Assignment');
    }), r57_externs.macros.put('local', r57_externs.macros.get('define')), r57_externs.macros.put('set', function _r57_t15(r75_form, r75_env) {
        var r75_form, r75_env, r75_any, r75_op, r75_left, r75_right, _r75_t0;
        if (_r75_t0 = r75_form, Array.isArray(_r75_t0) && _r75_t0.length === 3)
            return r75_op = _r75_t0[0], r75_left = _r75_t0[1], r75_right = _r75_t0[2], r57_Assign(r75_left, r75_right, r75_env, !1);
        else
            throw r75_any = _r75_t0, new r1_FormInvalidError(r75_any, 'Invalid Assignment');
    }), r57_externs.macros.put('=', r57_externs.macros.get('set')), r57_externs.macros.put('inc', function _r57_t16(r76_form, r76_env) {
        var r76_form, r76_env, r76_op, r76_id, r76_shift, _r76_t0;
        return _r76_t0 = r76_form, Array.isArray(_r76_t0) && _r76_t0.length === 2 ? (r76_op = _r76_t0[0], r76_id = _r76_t0[1], r57_Assign(r76_id, [
            '+',
            r76_id,
            [
                '.quote',
                1
            ]
        ], r76_env, !1)) : Array.isArray(_r76_t0) && _r76_t0.length === 3 ? (r76_op = _r76_t0[0], r76_id = _r76_t0[1], r76_shift = _r76_t0[2], r57_Assign(r76_id, [
            '+',
            r76_id,
            r76_shift
        ], r76_env, !1)) : Array.isArray(_r76_t0) && _r76_t0.length === 4 && 'by' === _r76_t0[2] ? (r76_op = _r76_t0[0], r76_id = _r76_t0[1], r76_shift = _r76_t0[3], r57_Assign(r76_id, [
            '+',
            r76_id,
            r76_shift
        ], r76_env, !1)) : void 0;
    }), r57_externs.macros.put('dec', function _r57_t17(r77_form, r77_env) {
        var r77_form, r77_env, r77_op, r77_id, r77_shift, _r77_t0;
        return _r77_t0 = r77_form, Array.isArray(_r77_t0) && _r77_t0.length === 2 ? (r77_op = _r77_t0[0], r77_id = _r77_t0[1], r57_Assign(r77_id, [
            '-',
            r77_id,
            [
                '.quote',
                1
            ]
        ], r77_env, !1)) : Array.isArray(_r77_t0) && _r77_t0.length === 3 ? (r77_op = _r77_t0[0], r77_id = _r77_t0[1], r77_shift = _r77_t0[2], r57_Assign(r77_id, [
            '-',
            r77_id,
            r77_shift
        ], r77_env, !1)) : Array.isArray(_r77_t0) && _r77_t0.length === 4 && 'by' === _r77_t0[2] ? (r77_op = _r77_t0[0], r77_id = _r77_t0[1], r77_shift = _r77_t0[3], r57_Assign(r77_id, [
            '-',
            r77_id,
            r77_shift
        ], r77_env, !1)) : void 0;
    }), r57_externs.macros.put('for', function _r57_t18(r78_form, r78_env) {
        var r78_form, r78_env, r78_init, r78_test, r78_step, r78_body, _r78_t0;
        return _r78_t0 = r78_form, Array.isArray(_r78_t0) && _r78_t0.length === 5 && 'for' === _r78_t0[0] ? (r78_init = _r78_t0[1], r78_test = _r78_t0[2], r78_step = _r78_t0[3], r78_body = _r78_t0[4], [
            '.begin',
            r1_ex(r78_init, r78_env),
            [
                '.while',
                r1_ex(r78_test, r78_env),
                [
                    '.begin',
                    r1_ex(r78_body, r78_env),
                    r1_ex(r78_step, r78_env)
                ]
            ]
        ]) : void 0;
    }), r57_externs.macros.put('this', ['.thisp']), r57_externs.macros.put('arguments', ['.argsp']), r57_externs.macros.put('nothing', ['.unit']), r57_externs.macros.put('undefined', ['.unit']), r57_externs.macros.put('null', [
        '.quote',
        null
    ]), r57_externs.macros.put('true', [
        '.quote',
        !0
    ]), r57_externs.macros.put('false', [
        '.quote',
        !1
    ]), r57_toPattern = function _r57_t19(r79_pattern, r79_env, r79_wrapper) {
        var r79_pattern, r79_env, r79_wrapper, r79_callee, r79_subpatterns, r79_ms, r79_t, r79_whatever, r79_x, r79_id, _r79_t0, _r79_t1;
        if (_r79_t0 = r79_pattern, r79_id = _r79_t0, r1_atom(r79_id))
            return {
                'whether': function _r79_t5(r91_x) {
                    var r91_x;
                    return null;
                },
                'assign': function _r79_t6(r92_x, r92_locallyQ) {
                    var r92_x, r92_locallyQ;
                    return [
                        '.set',
                        r1_ex(r92_locallyQ ? [
                            '.local',
                            r79_id
                        ] : r79_id, r79_env),
                        r79_wrapper ? [
                            r79_wrapper,
                            r92_x
                        ] : r92_x
                    ];
                }
            };
        else if (_r79_t1 = !1, Array.isArray(_r79_t0) && _r79_t0.length === 2 && '.id' === _r79_t0[0] && (r79_id = _r79_t0[1], r1_atom(r79_id) ? _r79_t1 = !0 : _r79_t1 = !1), _r79_t1)
            return {
                'whether': function _r79_t8(r89_x) {
                    var r89_x;
                    return null;
                },
                'assign': function _r79_t9(r90_x, r90_locallyQ) {
                    var r90_x, r90_locallyQ;
                    return [
                        '.set',
                        r1_ex(r90_locallyQ ? [
                            '.local',
                            r79_id
                        ] : r79_id, r79_env),
                        r79_wrapper ? [
                            r79_wrapper,
                            r90_x
                        ] : r90_x
                    ];
                }
            };
        else if (Array.isArray(_r79_t0) && _r79_t0.length === 2 && '.quote' === _r79_t0[0])
            return r79_x = _r79_t0[1], {
                'whether': function _r79_t11(r87_x) {
                    var r87_x;
                    return [
                        '===',
                        r1_ex(r79_pattern, r79_env),
                        r87_x
                    ];
                },
                'assign': function _r79_t12(r88_x, r88_locallyQ) {
                    var r88_x, r88_locallyQ;
                    return ['.unit'];
                }
            };
        else if (Array.isArray(_r79_t0) && _r79_t0.length >= 1 && '.' === _r79_t0[0])
            return r79_whatever = _r79_t0.slice(1), {
                'whether': function _r79_t14(r85_x) {
                    var r85_x;
                    return null;
                },
                'assign': function _r79_t15(r86_x, r86_locallyQ) {
                    var r86_x, r86_locallyQ;
                    return [
                        '.set',
                        r1_ex(r79_pattern, r79_env),
                        r79_wrapper ? [
                            r79_wrapper,
                            r86_x
                        ] : r86_x
                    ];
                }
            };
        else if (Array.isArray(_r79_t0) && _r79_t0.length >= 1)
            if (r79_callee = _r79_t0[0], r79_subpatterns = _r79_t0.slice(1), r1_atom(r79_callee) && r79_env.macros.has(r79_callee) && r79_env.macros.get(r79_callee).toPattern)
                return r79_env.macros.get(r79_callee).toPattern(r79_pattern, r79_env, r79_wrapper);
            else if (r1_atom(r79_callee) && r79_env.macros.has(r79_callee))
                throw new r1_FormInvalidError(r79_pattern, 'Invalid Pattern');
            else
                return r79_ms = r79_subpatterns.map(function _r79_t20(r80_x) {
                    var r80_x;
                    return r57_toPattern(r80_x, r79_env, r79_wrapper);
                }), r79_t = r79_env.newt(), {
                    'whether': function _r79_t21(r81_x) {
                        var r81_x;
                        return [
                            '&&',
                            [
                                '.set',
                                r79_t,
                                [
                                    [
                                        '.',
                                        r1_ex(r79_callee, r79_env),
                                        [
                                            '.quote',
                                            'unapply'
                                        ]
                                    ],
                                    r81_x,
                                    [
                                        '.quote',
                                        r79_ms.length
                                    ]
                                ]
                            ]
                        ].concat(r79_ms.map(function _r81_t2(r82_p, r82_j) {
                            var r82_p, r82_j;
                            return r82_p.whether([
                                '.',
                                r79_t,
                                [
                                    '.quote',
                                    r82_j
                                ]
                            ]);
                        })).filter(r57_boole);
                    },
                    'assign': function _r79_t22(r83_x, r83_locallyQ) {
                        var r83_x, r83_locallyQ;
                        return ['.begin'].concat(r79_ms.map(function _r83_t2(r84_p, r84_j) {
                            var r84_p, r84_j;
                            return r84_p.assign([
                                '.',
                                r79_t,
                                [
                                    '.quote',
                                    r84_j
                                ]
                            ], r83_locallyQ);
                        }));
                    }
                };
        else
            return void 0;
    }, r57_externs.macros.put('.list', {}), r57_externs.macros.get('.list').toPattern = function _r57_t20(r93_pattern, r93_env, r93_wrapper) {
        var r93_pattern, r93_env, r93_wrapper, r93_subpatterns, r93_ms, _r93_t0;
        return _r93_t0 = r93_pattern, Array.isArray(_r93_t0) && _r93_t0.length >= 1 && '.list' === _r93_t0[0] ? (r93_subpatterns = _r93_t0.slice(1), r93_ms = r93_subpatterns.map(function _r93_t4(r94_x) {
            var r94_x;
            return r57_toPattern(r94_x, r93_env, r93_wrapper);
        }), {
            'whether': function _r93_t5(r95_x) {
                var r95_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r57_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r95_x
                    ],
                    [
                        '===',
                        [
                            '.',
                            r95_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r93_ms.length
                        ]
                    ]
                ].concat(r93_ms.map(function _r95_t2(r96_p, r96_j) {
                    var r96_p, r96_j;
                    return r96_p.whether([
                        '.',
                        r95_x,
                        [
                            '.quote',
                            r96_j
                        ]
                    ]);
                })).filter(r57_boole);
            },
            'assign': function _r93_t6(r97_x, r97_locallyQ) {
                var r97_x, r97_locallyQ;
                return ['.begin'].concat(r93_ms.map(function _r97_t2(r98_p, r98_j) {
                    var r98_p, r98_j;
                    return r98_p.assign([
                        '.',
                        r97_x,
                        [
                            '.quote',
                            r98_j
                        ]
                    ], r97_locallyQ);
                }).concat([r97_x]));
            }
        }) : void 0;
    }, r57_externs.macros.put('.conslist', {}), r57_externs.macros.get('.conslist').toPattern = function _r57_t21(r99_pattern, r99_env, r99_wrapper) {
        var r99_pattern, r99_env, r99_wrapper, r99_subpatterns, r99_ms, r99_final, _r99_t0;
        return _r99_t0 = r99_pattern, Array.isArray(_r99_t0) && _r99_t0.length >= 1 && '.conslist' === _r99_t0[0] ? (r99_subpatterns = _r99_t0.slice(1), r99_ms = r99_pattern.slice(1, -1).map(function _r99_t4(r100_x) {
            var r100_x;
            return r57_toPattern(r100_x, r99_env, r99_wrapper);
        }), r99_final = r57_toPattern(r99_pattern[r99_pattern.length - 1], r99_env), {
            'whether': function _r99_t5(r101_x) {
                var r101_x;
                return [
                    '&&',
                    [
                        [
                            '.',
                            r57_externs.use('Array'),
                            [
                                '.quote',
                                'isArray'
                            ]
                        ],
                        r101_x
                    ],
                    [
                        '>=',
                        [
                            '.',
                            r101_x,
                            [
                                '.quote',
                                'length'
                            ]
                        ],
                        [
                            '.quote',
                            r99_ms.length
                        ]
                    ]
                ].concat(r99_ms.map(function _r101_t2(r102_p, r102_j) {
                    var r102_p, r102_j;
                    return r102_p.whether([
                        '.',
                        r101_x,
                        [
                            '.quote',
                            r102_j
                        ]
                    ]);
                }).concat([r99_final.whether([
                        [
                            '.',
                            r101_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r99_ms.length
                        ]
                    ])])).filter(r57_boole);
            },
            'assign': function _r99_t6(r103_x, r103_locallyQ) {
                var r103_x, r103_locallyQ;
                return ['.begin'].concat(r99_ms.map(function _r103_t2(r104_p, r104_j) {
                    var r104_p, r104_j;
                    return r104_p.assign([
                        '.',
                        r103_x,
                        [
                            '.quote',
                            r104_j
                        ]
                    ], r103_locallyQ);
                })).concat([r99_final.assign(r99_wrapper ? [
                        [
                            '.',
                            [
                                [
                                    '.',
                                    r103_x,
                                    [
                                        '.quote',
                                        'slice'
                                    ]
                                ],
                                [
                                    '.quote',
                                    r99_ms.length
                                ]
                            ],
                            [
                                '.quote',
                                'map'
                            ]
                        ],
                        r99_wrapper
                    ] : [
                        [
                            '.',
                            r103_x,
                            [
                                '.quote',
                                'slice'
                            ]
                        ],
                        [
                            '.quote',
                            r99_ms.length
                        ]
                    ], r103_locallyQ)]).concat([r103_x]);
            }
        }) : void 0;
    }, r57_externs.macros.put('.hash', {}), r57_externs.macros.get('.hash').toPattern = function _r57_t22(r105_pattern, r105_env, r105_wrapper) {
        var r105_pattern, r105_env, r105_wrapper, r105_subpatterns, r105_ms, _r105_t0;
        return _r105_t0 = r105_pattern, Array.isArray(_r105_t0) && _r105_t0.length >= 1 && '.hash' === _r105_t0[0] ? (r105_subpatterns = _r105_t0.slice(1), r105_ms = r105_subpatterns.map(function _r105_t4(r106_pair) {
            var r106_pair;
            return [
                r106_pair[0],
                r57_toPattern(r106_pair[1], r105_env, r105_wrapper)
            ];
        }), {
            'whether': function _r105_t5(r107_x) {
                var r107_x;
                return [
                    '&&',
                    r107_x
                ].concat(r105_ms.map(function _r107_t2(r108_p) {
                    var r108_p;
                    return r108_p[1].whether([
                        '.',
                        r107_x,
                        [
                            '.quote',
                            r108_p[0]
                        ]
                    ]);
                })).filter(r57_boole);
            },
            'assign': function _r105_t6(r109_x, r109_locallyQ) {
                var r109_x, r109_locallyQ;
                return ['.begin'].concat(r105_ms.map(function _r109_t2(r110_p) {
                    var r110_p;
                    return r110_p[1].assign([
                        '.',
                        r109_x,
                        [
                            '.quote',
                            r110_p[0]
                        ]
                    ], r109_locallyQ);
                }).concat([r109_x]));
            }
        }) : void 0;
    }, r57_externs.macros.put('.xhash', {}), r57_externs.macros.get('.xhash').toPattern = function _r57_t23(r111_pattern, r111_env, r111_wrapper) {
        var r111_pattern, r111_env, r111_wrapper, r111_subpatterns, r111_ms, _r111_t0;
        return _r111_t0 = r111_pattern, Array.isArray(_r111_t0) && _r111_t0.length >= 1 && '.xhash' === _r111_t0[0] ? (r111_subpatterns = _r111_t0.slice(1), r111_ms = r111_subpatterns.map(function _r111_t4(r112_pair) {
            var r112_pair;
            return [
                r1_ex(r112_pair[0], r111_env),
                r57_toPattern(r112_pair[1], r111_env, r111_wrapper)
            ];
        }), {
            'whether': function _r111_t5(r113_x) {
                var r113_x;
                return [
                    '&&',
                    r113_x
                ].concat(r111_ms.map(function _r113_t2(r114_p) {
                    var r114_p, r114_key, _r114_t0, _r114_t4;
                    return _r114_t0 = r114_p[0], Array.isArray(_r114_t0) && _r114_t0.length === 2 && '.quote' === _r114_t0[0] ? (r114_key = _r114_t0[1], r114_p[1].whether([
                        '.',
                        r113_x,
                        r114_p[0]
                    ])) : (_r114_t4 = r111_env.newt(), function (r115_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r115_t,
                                [
                                    '.',
                                    r113_x,
                                    r114_p[0]
                                ]
                            ],
                            r114_p[1].whether(r115_t)
                        ];
                    }(_r114_t4));
                })).filter(r57_boole);
            },
            'assign': function _r111_t6(r116_x, r116_locallyQ) {
                var r116_x, r116_locallyQ;
                return ['.begin'].concat(r111_ms.map(function _r116_t2(r117_p) {
                    var r117_p, r117_key, _r117_t0, _r117_t4;
                    return _r117_t0 = r117_p[0], Array.isArray(_r117_t0) && _r117_t0.length === 2 && '.quote' === _r117_t0[0] ? (r117_key = _r117_t0[1], r117_p[1].assign([
                        '.',
                        r116_x,
                        r117_p[0]
                    ], r116_locallyQ)) : (_r117_t4 = r111_env.newt(), function (r118_t) {
                        return [
                            '.begin',
                            [
                                '.set',
                                r118_t,
                                [
                                    '.',
                                    r116_x,
                                    r117_p[0]
                                ]
                            ],
                            r117_p[1].assign(r118_t, r116_locallyQ)
                        ];
                    }(_r117_t4));
                }).concat([r116_x]));
            }
        }) : void 0;
    }, r57_externs.macros.put('.quasiquote', {}), r57_externs.macros.get('.quasiquote').toPattern = function _r57_t24(r119_pattern, r119_env, r119_wrapper) {
        var r119_pattern, r119_env, r119_wrapper, r119_subpatterns, _r119_t0;
        return _r119_t0 = r119_pattern, Array.isArray(_r119_t0) && _r119_t0.length >= 1 && '.quasiquote' === _r119_t0[0] ? (r119_subpatterns = _r119_t0.slice(1), r57_toPattern(r1_deQuasiquote(r119_pattern[1], 0), r119_env, r119_wrapper)) : void 0;
    }, r57_externs.macros.put('&&', {}), r57_externs.macros.get('&&').toPattern = function _r57_t25(r120_pattern, r120_env, r120_wrapper) {
        var r120_pattern, r120_env, r120_wrapper, r120_subpatterns, r120_ms, _r120_t0;
        return _r120_t0 = r120_pattern, Array.isArray(_r120_t0) && _r120_t0.length >= 1 && '&&' === _r120_t0[0] ? (r120_subpatterns = _r120_t0.slice(1), r120_ms = r120_subpatterns.map(function _r120_t4(r121_x) {
            var r121_x;
            return r57_toPattern(r121_x, r120_env, r120_wrapper);
        }), {
            'whether': function _r120_t5(r122_x) {
                var r122_x;
                return ['&&'].concat(r120_ms.map(function _r122_t2(r123_p, r123_j) {
                    var r123_p, r123_j;
                    return r123_p.whether(r122_x);
                })).filter(r57_boole);
            },
            'assign': function _r120_t6(r124_x, r124_locallyQ) {
                var r124_x, r124_locallyQ;
                return ['.begin'].concat(r120_ms.map(function _r124_t2(r125_p, r125_j) {
                    var r125_p, r125_j;
                    return r125_p.assign(r124_x, r124_locallyQ);
                }).concat([r124_x]));
            }
        }) : void 0;
    }, r57_externs.macros.put('||', {}), r57_externs.macros.get('||').toPattern = function _r57_t26(r126_pattern, r126_env, r126_wrapper) {
        var r126_pattern, r126_env, r126_wrapper, r126_subpatterns, r126_ms, _r126_t0;
        return _r126_t0 = r126_pattern, Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '||' === _r126_t0[0] ? (r126_subpatterns = _r126_t0.slice(1), r126_ms = r126_subpatterns.map(function _r126_t4(r127_x) {
            var r127_x;
            return r57_toPattern(r127_x, r126_env, r126_wrapper);
        }), {
            'whether': function _r126_t5(r128_x) {
                var r128_x;
                return ['||'].concat(r126_ms.map(function _r128_t2(r129_p, r129_j) {
                    var r129_p, r129_j;
                    return r129_p.whether(r128_x);
                })).filter(r57_boole);
            },
            'assign': function _r126_t6(r130_x, r130_locallyQ) {
                var r130_x, r130_locallyQ;
                return ['.unit'];
            }
        }) : void 0;
    }, r57_boole = function _r57_t27(r131_x) {
        var r131_x;
        return !!r131_x;
    }, r57_externs.macros.put('match', function _r57_t28(r132_form, r132_env, r132_wrapper) {
        var r132_form, r132_env, r132_wrapper, r132_pairs, r132_t, r132_f, r132_j, r132_pattern, r132_guard, r132_body, r132_pat, r132_cond, r132_tc, _r132_t0;
        for (r132_pairs = r132_form.slice(2), r132_t = r132_env.newt(), r132_f = ['.unit'], r132_j = r132_pairs.length - 1; r132_j >= 0; r132_j -= 1)
            _r132_t0 = r132_pairs[r132_j], r132_f = Array.isArray(_r132_t0) && _r132_t0.length === 2 ? (r132_pattern = _r132_t0[0], r132_body = _r132_t0[1], r132_pat = r57_toPattern(r132_pattern, r132_env, r132_wrapper), r132_cond = r132_pat.whether(r132_t), r132_cond ? [
                '.if',
                r132_cond,
                [
                    '.begin',
                    r132_pat.assign(r132_t, !0),
                    r1_ex(r132_body, r132_env)
                ],
                r132_f
            ] : [
                '.begin',
                r132_pat.assign(r132_t, !0),
                r1_ex(r132_body, r132_env)
            ]) : Array.isArray(_r132_t0) && _r132_t0.length === 3 ? (r132_pattern = _r132_t0[0], r132_guard = _r132_t0[1], r132_body = _r132_t0[2], r132_pat = r57_toPattern(r132_pattern, r132_env, r132_wrapper), r132_cond = r132_pat.whether(r132_t), r132_cond ? (r132_tc = r132_env.newt(), [
                '.begin',
                [
                    '.set',
                    r132_tc,
                    [
                        '.quote',
                        !1
                    ]
                ],
                [
                    '.if',
                    r132_cond,
                    [
                        '.begin',
                        r132_pat.assign(r132_t, !0),
                        [
                            '.if',
                            r1_ex(r132_guard, r132_env),
                            [
                                '.set',
                                r132_tc,
                                [
                                    '.quote',
                                    !0
                                ]
                            ],
                            [
                                '.set',
                                r132_tc,
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
                    r132_tc,
                    r1_ex(r132_body, r132_env),
                    r132_f
                ]
            ]) : [
                '.begin',
                r132_pat.assign(r132_t, !0),
                [
                    '.if',
                    r1_ex(r132_guard, r132_env),
                    r1_ex(r132_body, r132_env),
                    r132_f
                ]
            ]) : r132_f;
        return [
            '.begin',
            [
                '.set',
                r132_t,
                r1_ex(r132_form[1], r132_env)
            ],
            r132_f
        ];
    }), r57_externs.macros.put('regex', function _r57_t29(r133_form, r133_env) {
        var r133_form, r133_env, r133_args, r133_s, r133_flag, _r133_t0;
        return _r133_t0 = r133_form, Array.isArray(_r133_t0) && _r133_t0.length === 2 && 'regex' === _r133_t0[0] && Array.isArray(_r133_t0[1]) && _r133_t0[1].length === 2 && '.quote' === _r133_t0[1][0] ? (r133_s = _r133_t0[1][1], _r133_t0[1], [
            '.quote',
            new RegExp(r133_s)
        ]) : Array.isArray(_r133_t0) && _r133_t0.length === 3 && 'regex' === _r133_t0[0] && Array.isArray(_r133_t0[1]) && _r133_t0[1].length === 2 && '.quote' === _r133_t0[1][0] && Array.isArray(_r133_t0[2]) && _r133_t0[2].length === 2 && '.quote' === _r133_t0[2][0] ? (r133_s = _r133_t0[1][1], _r133_t0[1], r133_flag = _r133_t0[2][1], _r133_t0[2], [
            '.quote',
            new RegExp(r133_s, r133_flag)
        ]) : Array.isArray(_r133_t0) && _r133_t0.length >= 1 && 'regex' === _r133_t0[0] ? (r133_args = _r133_t0.slice(1), [
            '.new',
            r57_externs.use('RegExp')
        ].concat(r133_args)) : void 0;
    }), r57_externs.macros.put('define-macro', function _r57_t30(r134_form, r134_env) {
        var r134_form, r134_env, r134_op, r134_name, r134_body, r134_coinit, r134_ds, r134_macroG, r134_macroFn, r134_str, _r134_t0, _r134_t1;
        return _r134_t0 = r134_form, Array.isArray(_r134_t0) && _r134_t0.length === 3 && Array.isArray(_r134_t0[1]) && _r134_t0[1].length === 2 && '.quote' === _r134_t0[1][0] ? (r134_op = _r134_t0[0], r134_str = _r134_t0[1][1], _r134_t0[1], r134_body = _r134_t0[2], r1_ex([
            r134_op,
            r134_str,
            r134_body
        ], r134_env)) : (_r134_t1 = !1, Array.isArray(_r134_t0) && _r134_t0.length === 3 && (r134_op = _r134_t0[0], r134_name = _r134_t0[1], r134_body = _r134_t0[2], r1_atom(r134_name) ? _r134_t1 = !0 : _r134_t1 = !1), _r134_t1 ? (r134_coinit = {
            'injectForm': void 0,
            'initFn': void 0
        }, r134_ds = new r1_Scope(r134_env), r134_ds.declare('ex', !0), r134_ds.declare('atom', !0), r134_ds.declare('prim', !0), r134_ds.declare('formOf', !0), r134_ds.declare('scopeOf', !0), r134_ds.declare('definingEnv', !0), r134_ds.declare('externEnv', !0), r134_ds.declare('require', !0), r134_ds.declare('toPattern', !0), r134_ds.declare('coinit', !0), r134_ds.declare('FormInvalidError', !0), r134_macroG = new Function(r134_ds.castName('ex'), r134_ds.castName('atom'), r134_ds.castName('prim'), r134_ds.castName('formOf'), r134_ds.castName('scopeOf'), r134_ds.castName('definingEnv'), r134_ds.castName('externEnv'), r134_ds.castName('require'), r134_ds.castName('toPattern'), r134_ds.castName('coinit'), r134_ds.castName('FormInvalidError'), r1_escodegen.generate(r1_patrisika.generate([
            '.return',
            r1_ex(r134_body, r134_ds)
        ], r134_ds, function _r134_t6(r135_form) {
            var r135_form;
            return [
                '.return',
                r135_form
            ];
        }))), r134_macroFn = r134_macroG(r1_ex, r1_wrapForSyntacticClosure(r1_atom), r1_wrapForSyntacticClosure(r1_prim), function _r134_t7(r136_x) {
            var r136_x;
            return r136_x[1];
        }, function _r134_t8(r137_x) {
            var r137_x;
            return r137_x[2];
        }, r134_env, r57_externs, require, r57_toPattern, r134_coinit, r1_FormInvalidError), r134_env.macros.put(r134_name, function _r134_t9(r138_c, r138_e) {
            var r138_c, r138_e, r138_result, r138_s;
            return r138_result = r134_macroFn(r138_c, r138_e), r138_s = new r1_Scope(r134_env), r138_s.hanging = r138_e, r138_s.semiparent = r138_e, r1_ex(r138_result, r138_s);
        }), r134_coinit.initFn && r134_coinit.initFn(r134_env.macros.get(r134_name)), r134_coinit.injectForm ? r1_ex(r134_coinit.injectForm, r134_env) : ['.unit']) : ['.unit']);
    }), r57_externs.macros.put('macro-match', function _r57_t31(r139_form, r139_env) {
        var r139_form, r139_env, r139_c, r139_e, r139_patterns, r139_t, r139_tx, r139_tw, _r139_t0;
        return _r139_t0 = r139_form, Array.isArray(_r139_t0) && _r139_t0.length >= 3 && 'macro-match' === _r139_t0[0] ? (r139_c = _r139_t0[1], r139_e = _r139_t0[2], r139_patterns = _r139_t0.slice(3), r139_t = r139_env.newt(), r139_tx = r139_env.newt(), r139_tw = r139_env.newt(), [
            '.begin',
            [
                '.set',
                r139_t,
                r139_e
            ],
            [
                '.set',
                r139_tw,
                [
                    '.lambda',
                    [r139_tx],
                    [
                        '.return',
                        [
                            '.list',
                            [
                                '.quote',
                                '.syntactic-closure'
                            ],
                            r139_tx,
                            r139_t
                        ]
                    ]
                ]
            ],
            r57_externs.macros.get('match')([
                'match',
                r139_c
            ].concat(r139_patterns), r139_env, r139_tw)
        ]) : ['.unit'];
    }), r57_externs.pFamily = 'r', r57_externs;
}, exports.Create = r1_Create;
