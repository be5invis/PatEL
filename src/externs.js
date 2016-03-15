'use strict';
var _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, r1_patrisika = require('patrisika'), r1_atom = function _r1_t0(r113_x) {
        return typeof r113_x === 'string';
    }, r1_identifier = function _r1_t1(r114_x) {
        return r1_atom(r114_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r114_x);
    }, r1_prim = function _r1_t2(r115_x) {
        return r1_atom(r115_x) && !r1_identifier(r115_x);
    }, r1_Scope = require('patrisika').Scope, r1_escodegen = require('escodegen'), r1_util = require('util'), r1_exlib = require('./ex'), r1_ex = r1_exlib.ex, r1_deQuasiquote = r1_exlib.deQuasiquote, r1_opSegToRegular = r1_exlib.opSegToRegular, r1_FormInvalidError = r1_exlib.FormInvalidError, r1_wrapForSyntacticClosure = function _r1_t3(r116_fn) {
        return function _r116_t2(r117_x) {
            var r117_c, r117_e, _r117_t0;
            return _r117_t0 = r117_x, Array.isArray(_r117_t0) && _r117_t0.length === 3 && '.syntactic-closure' === _r117_t0[0] ? (r117_c = _r117_t0[1], r117_e = _r117_t0[2], r116_fn(r117_c)) : r116_fn(r117_x);
        };
    }, r1_Create = function _r1_t4() {
        var r118_externs = r1_patrisika.DefaultExterns();
        r118_externs.castName = function _r118_t2(r119_name) {
            return r119_name;
        }, r118_externs.declare('require'), r118_externs.declare('exports'), r118_externs.declare('process'), r118_externs.declare('module'), r118_externs.declare('Error');
        var r118_operatorRename = function _r118_t3(r120_op) {
                return function _r120_t2(r121_form, r121_env) {
                    return r1_ex([r120_op].concat(r121_form.slice(1)), r121_env);
                };
            }, r118_reportInvalid = function _r118_t4(r122_form, r122_reason) {
                throw new r1_FormInvalidError(r122_form, r122_reason);
            };
        r118_externs.macros.put('begin', r118_operatorRename('.begin')), r118_externs.macros.put('then', r118_operatorRename('.begin')), r118_externs.macros.put('else', r118_operatorRename('.begin')), r118_externs.macros.put('while', r118_operatorRename('.while')), r118_externs.macros.put('try', r118_operatorRename('.try')), r118_externs.macros.put('is', r118_operatorRename('.is')), r118_externs.macros.put('<@', r118_operatorRename('.is')), r118_externs.macros.put('new', r118_operatorRename('.new')), r118_externs.macros.put('this', r118_operatorRename('.thisp')), r118_externs.macros.put('arguments', r118_operatorRename('.argsp')), r118_externs.macros.put('and', r118_operatorRename('&&')), r118_externs.macros.put('or', r118_operatorRename('||')), r118_externs.macros.put('not', r118_operatorRename('!')), r118_externs.macros.put('return', r118_operatorRename('.return')), r118_externs.macros.put('yield', r118_operatorRename('.yield')), r118_externs.macros.put('throw', r118_operatorRename('.throw')), r118_externs.macros.put('list', r118_operatorRename('.list')), r118_externs.macros.put('typeof', r118_operatorRename('.typeof')), r118_externs.macros.put('quasiquote', r118_operatorRename('.quasiquote')), r118_externs.macros.put('syntax', r118_operatorRename('.quasiquote')), r118_externs.macros.put('lambda', function _r118_t5(r123_form, r123_env) {
            var r123_otherwise, r123_car, r123_body, r123_parameters, _r123_t0, _r123_t1;
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
            ], r123_env)) : (r123_otherwise = _r123_t0, r118_reportInvalid(r123_otherwise, 'Invalid Lambda Formation'));
        }), r118_externs.macros.put('function', r118_externs.macros.get('lambda')), r118_externs.macros.put('->', r118_externs.macros.get('lambda')), r118_externs.macros.put('=>', r118_externs.macros.get('lambda')), r118_externs.operatorInfo.put('->', {
            'priority': 900,
            'associvity': 'right'
        }), r118_externs.operatorInfo.put('=>', {
            'priority': 950,
            'associvity': 'right'
        }), r118_externs.macros.put('.prefix.-', function _r118_t6(r124_form, r124_env) {
            return [
                '-',
                r1_ex(r124_form[1], r124_env)
            ];
        }), r118_externs.macros.put('.prefix.+', function _r118_t7(r125_form, r125_env) {
            return [
                '+',
                r1_ex(r125_form[1], r125_env)
            ];
        }), r118_externs.macros.put('.prefix.!', function _r118_t8(r126_form, r126_env) {
            return [
                '!',
                r1_ex(r126_form[1], r126_env)
            ];
        }), r118_externs.macros.put('.prefix.*', function _r118_t9(r127_form, r127_env) {
            return r1_ex(r127_form[1], r127_env);
        }), r118_externs.macros.put('.prefix.=', function _r118_t10(r128_form, r128_env) {
            return r1_ex(r128_form[1], r128_env);
        }), r118_externs.macros.put('if', function _r118_t11(r129_form, r129_env) {
            var r129_otherwise, r129_test, r129_consequents, r129_alternates, r129_consequent, r129_alternate, _r129_t0;
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
            var r130_arg, r130_t, r130_param, _r130_t0, _r130_t1, r130_pairs = r130_form.slice(1, -1), r130_args = [], r130_paras = [], r130_decls = ['.begin'], r130_j = 0;
            for (; r130_j < r130_pairs.length; r130_j += 1)
                if (_r130_t0 = r130_pairs[r130_j], Array.isArray(_r130_t0) && _r130_t0.length === 2)
                    r130_arg = _r130_t0[0], r130_param = _r130_t0[1], r130_t = r130_env.newt('leti'), r130_args.push(r130_t), r130_paras.push(r130_param), r130_decls.push([
                        'define',
                        r130_arg,
                        r130_t
                    ]);
                else {
                    if (_r130_t1 = !1, Array.isArray(_r130_t0) && _r130_t0.length === 1 && (r130_arg = _r130_t0[0], r1_atom(r130_arg) ? _r130_t1 = !0 : _r130_t1 = !1), !_r130_t1)
                        throw new r1_FormInvalidError(r130_pairs[r130_j], 'Invalid [let] subpattern');
                    r130_t = r130_env.newt('leti'), r130_args.push(r130_t), r130_paras.push(r130_env.use(r130_arg)), r130_decls.push([
                        'define',
                        r130_arg,
                        r130_t
                    ]);
                }
            return r1_ex([
                '.beta',
                r130_args,
                [
                    '.begin',
                    r130_decls,
                    r130_form[r130_form.length - 1]
                ]
            ].concat(r130_paras), r130_env);
        }), r118_externs.macros.put('letrec', function _r118_t13(r131_form, r131_env) {
            var r131_arg, r131_param, _r131_t0, r131_pairs = r131_form.slice(1, -1), r131_decls = ['.begin'], r131_j = 0;
            for (; r131_j < r131_pairs.length; r131_j += 1) {
                if (_r131_t0 = r131_pairs[r131_j], !(Array.isArray(_r131_t0) && _r131_t0.length === 2))
                    throw new r1_FormInvalidError(r131_pairs[r131_j], 'Invalid [letrec] subpattern');
                r131_arg = _r131_t0[0], r131_param = _r131_t0[1], r131_decls.push([
                    'local',
                    r131_arg,
                    r131_param
                ]);
            }
            return r1_ex([
                '.beta',
                [],
                [
                    '.begin',
                    r131_decls,
                    r131_form[r131_form.length - 1]
                ]
            ], r131_env);
        }), r118_externs.macros.put('object', function _r118_t14(r132_form, r132_env) {
            if (r132_form[1] && r132_form[1][0] === '.xhash')
                return r1_ex(r132_form[1], r132_env);
            var r132_pairs = r132_form.slice(1).map(function _r132_t2(r133_pair) {
                var r133_method, r133_param, r133_value, r133_property, _r133_t1, _r133_t2, _r133_t3, _r133_t4, _r133_t5, _r133_t6, _r133_t0 = r133_pair, _r133_t7 = !1;
                return Array.isArray(_r133_t0) && _r133_t0.length === 3 && '=' === _r133_t0[0] && (r133_property = _r133_t0[1], r133_value = _r133_t0[2], r1_atom(r133_property) ? _r133_t7 = !0 : _r133_t7 = !1), _r133_t7 ? [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_value
                ] : (_r133_t6 = !1, Array.isArray(_r133_t0) && _r133_t0.length === 3 && '=' === _r133_t0[0] && (r133_property = _r133_t0[1], r133_value = _r133_t0[2], r1_atom(r133_property) ? _r133_t6 = !0 : _r133_t6 = !1), _r133_t6 ? [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_value
                ] : (_r133_t5 = !1, Array.isArray(_r133_t0) && _r133_t0.length === 2 && (r133_property = _r133_t0[0], r133_value = _r133_t0[1], r1_atom(r133_property) ? _r133_t5 = !0 : _r133_t5 = !1), _r133_t5 ? [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_value
                ] : (_r133_t4 = !1, Array.isArray(_r133_t0) && _r133_t0.length === 1 && (r133_property = _r133_t0[0], r1_atom(r133_property) ? _r133_t4 = !0 : _r133_t4 = !1), _r133_t4 ? [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_property
                ] : (r133_property = _r133_t0, r1_atom(r133_property) ? [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_property
                ] : Array.isArray(_r133_t0) && _r133_t0.length === 3 && '=' === _r133_t0[0] && Array.isArray(_r133_t0[1]) && _r133_t0[1].length === 2 && '.quote' === _r133_t0[1][0] ? (r133_property = _r133_t0[1][1], _r133_t0[1], r133_value = _r133_t0[2], [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_value
                ]) : Array.isArray(_r133_t0) && _r133_t0.length === 3 && '=' === _r133_t0[0] && Array.isArray(_r133_t0[1]) && _r133_t0[1].length === 2 && '.quote' === _r133_t0[1][0] ? (r133_property = _r133_t0[1][1], _r133_t0[1], r133_value = _r133_t0[2], [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_value
                ]) : Array.isArray(_r133_t0) && _r133_t0.length === 2 && Array.isArray(_r133_t0[0]) && _r133_t0[0].length === 2 && '.quote' === _r133_t0[0][0] ? (r133_property = _r133_t0[0][1], _r133_t0[0], r133_value = _r133_t0[1], [
                    [
                        '.quote',
                        r133_property
                    ],
                    r133_value
                ]) : (_r133_t3 = !1, Array.isArray(_r133_t0) && _r133_t0.length === 3 && '=' === _r133_t0[0] && Array.isArray(_r133_t0[1]) && _r133_t0[1].length >= 1 && (r133_method = _r133_t0[1][0], r133_param = _r133_t0[1].slice(1), _r133_t0[1], r133_value = _r133_t0[2], r1_atom(r133_method) ? _r133_t3 = !0 : _r133_t3 = !1), _r133_t3 ? [
                    [
                        '.quote',
                        r133_method
                    ],
                    [
                        '.lambda',
                        r133_param,
                        r133_value
                    ]
                ] : (_r133_t2 = !1, Array.isArray(_r133_t0) && _r133_t0.length === 3 && '=' === _r133_t0[0] && Array.isArray(_r133_t0[1]) && _r133_t0[1].length >= 1 && (r133_method = _r133_t0[1][0], r133_param = _r133_t0[1].slice(1), _r133_t0[1], r133_value = _r133_t0[2], r1_atom(r133_method) ? _r133_t2 = !0 : _r133_t2 = !1), _r133_t2 ? [
                    [
                        '.quote',
                        r133_method
                    ],
                    [
                        '.lambda',
                        r133_param,
                        r133_value
                    ]
                ] : (_r133_t1 = !1, Array.isArray(_r133_t0) && _r133_t0.length === 2 && Array.isArray(_r133_t0[0]) && _r133_t0[0].length >= 1 && (r133_method = _r133_t0[0][0], r133_param = _r133_t0[0].slice(1), _r133_t0[0], r133_value = _r133_t0[1], r1_atom(r133_method) ? _r133_t1 = !0 : _r133_t1 = !1), _r133_t1 ? [
                    [
                        '.quote',
                        r133_method
                    ],
                    [
                        '.lambda',
                        r133_param,
                        r133_value
                    ]
                ] : void 0)))))));
            });
            return r1_ex(['.xhash'].concat(r132_pairs.filter(function _r132_t3(r134_x) {
                return r134_x;
            })), r132_env);
        }), r118_externs.macros.get('list').toPattern = function _r118_t15(r135_form, r135_env, r135_wrapper) {
            return r118_toPattern(['.list'].concat(r135_form.slice(1)), r135_env, r135_wrapper);
        }, r118_externs.macros.get('object').toPattern = function _r118_t16(r136_form, r136_env, r136_wrapper) {
            var r136_pairs = r136_form.slice(1).map(function _r136_t2(r137_pair) {
                var r137_property, r137_value, _r137_t1, _r137_t2, _r137_t3, _r137_t0 = r137_pair, _r137_t4 = !1;
                if (Array.isArray(_r137_t0) && _r137_t0.length === 3 && '=' === _r137_t0[0] && (r137_property = _r137_t0[1], r137_value = _r137_t0[2], r1_atom(r137_property) ? _r137_t4 = !0 : _r137_t4 = !1), _r137_t4)
                    return [
                        r137_property,
                        r137_value
                    ];
                else if (_r137_t3 = !1, Array.isArray(_r137_t0) && _r137_t0.length === 3 && '=' === _r137_t0[0] && (r137_property = _r137_t0[1], r137_value = _r137_t0[2], r1_atom(r137_property) ? _r137_t3 = !0 : _r137_t3 = !1), _r137_t3)
                    return [
                        r137_property,
                        r137_value
                    ];
                else if (_r137_t2 = !1, Array.isArray(_r137_t0) && _r137_t0.length === 2 && (r137_property = _r137_t0[0], r137_value = _r137_t0[1], r1_atom(r137_property) ? _r137_t2 = !0 : _r137_t2 = !1), _r137_t2)
                    return [
                        r137_property,
                        r137_value
                    ];
                else if (_r137_t1 = !1, Array.isArray(_r137_t0) && _r137_t0.length === 1 && (r137_property = _r137_t0[0], r1_atom(r137_property) ? _r137_t1 = !0 : _r137_t1 = !1), _r137_t1)
                    return [
                        r137_property,
                        r137_property
                    ];
                else if (r137_property = _r137_t0, r1_atom(r137_property))
                    return [
                        r137_property,
                        r137_property
                    ];
                else if (Array.isArray(_r137_t0) && _r137_t0.length === 3 && '=' === _r137_t0[0] && Array.isArray(_r137_t0[1]) && _r137_t0[1].length === 2 && '.quote' === _r137_t0[1][0])
                    return r137_property = _r137_t0[1][1], _r137_t0[1], r137_value = _r137_t0[2], [
                        r137_property,
                        r137_value
                    ];
                else if (Array.isArray(_r137_t0) && _r137_t0.length === 3 && '=' === _r137_t0[0] && Array.isArray(_r137_t0[1]) && _r137_t0[1].length === 2 && '.quote' === _r137_t0[1][0])
                    return r137_property = _r137_t0[1][1], _r137_t0[1], r137_value = _r137_t0[2], [
                        r137_property,
                        r137_value
                    ];
                else if (Array.isArray(_r137_t0) && _r137_t0.length === 2 && Array.isArray(_r137_t0[0]) && _r137_t0[0].length === 2 && '.quote' === _r137_t0[0][0])
                    return r137_property = _r137_t0[0][1], _r137_t0[0], r137_value = _r137_t0[1], [
                        r137_property,
                        r137_value
                    ];
                else
                    throw new r1_FormInvalidError(r136_form, 'Invalid Assignment Left-hand Side');
            });
            return r118_toPattern(['.hash'].concat(r136_pairs), r136_env, r136_wrapper);
        }, r118_externs.macros.put('piecewise', function _r118_t17(r138_form, r138_env) {
            var r138_pairs, r138_f, r138_j, r138_otherwise, r138_condition, r138_consequent, _r138_t1, _r138_t0 = r138_form;
            if (Array.isArray(_r138_t0) && _r138_t0.length >= 1 && 'piecewise' === _r138_t0[0]) {
                for (r138_pairs = _r138_t0.slice(1), r138_f = ['.unit'], r138_j = r138_pairs.length - 1; r138_j >= 0; r138_j -= 1) {
                    if (_r138_t1 = r138_pairs[r138_j], !(Array.isArray(_r138_t1) && _r138_t1.length === 2))
                        throw r138_otherwise = _r138_t1, new r1_FormInvalidError(r138_otherwise, 'Invalid Piecewise Segment');
                    r138_condition = _r138_t1[0], r138_consequent = _r138_t1[1], r138_f = [
                        '.if',
                        r1_ex(r138_condition, r138_env),
                        r1_ex(r138_consequent, r138_env),
                        r138_f
                    ];
                }
                return r138_f;
            } else
                return void 0;
        });
        var r118_AssignWithMod = function _r118_t18(r139_left, r139_right, r139_mod, r139_env, r139_locallyQ) {
                var r139_callee, r139_paras, r139_pat, r139_t, r139_whatever, r139_a, r139_e, r139_x, _r139_t1, _r139_t2, _r139_t3, _r139_t4, _r139_t5, _r139_t0 = r139_left, r139_id = _r139_t0;
                if (r1_atom(r139_id))
                    return r139_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r139_id,
                            (r139_locallyQ || 1) - 1
                        ], r139_env),
                        r1_ex([
                            r139_mod,
                            r139_right
                        ], r139_env)
                    ] : [
                        '.set',
                        r1_ex(r139_left, r139_env),
                        r1_ex([
                            r139_mod,
                            r139_right
                        ], r139_env)
                    ];
                else if (_r139_t5 = !1, Array.isArray(_r139_t0) && _r139_t0.length === 2 && '.id' === _r139_t0[0] && (r139_id = _r139_t0[1], r1_atom(r139_id) ? _r139_t5 = !0 : _r139_t5 = !1), _r139_t5)
                    return r139_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r139_id,
                            (r139_locallyQ || 1) - 1
                        ], r139_env),
                        r1_ex([
                            r139_mod,
                            r139_right
                        ], r139_env)
                    ] : [
                        '.set',
                        r1_ex(r139_left, r139_env),
                        r1_ex([
                            r139_mod,
                            r139_right
                        ], r139_env)
                    ];
                else if (_r139_t4 = !1, Array.isArray(_r139_t0) && _r139_t0.length === 3 && '.id' === _r139_t0[0] && (r139_id = _r139_t0[1], r139_e = _r139_t0[2], r1_atom(r139_id) && (r139_e === r139_env || !r139_locallyQ) ? _r139_t4 = !0 : _r139_t4 = !1), _r139_t4)
                    return r139_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r139_id,
                            (r139_locallyQ || 1) - 1
                        ], r139_e),
                        r1_ex([
                            r139_mod,
                            r139_right
                        ], r139_e)
                    ] : [
                        '.set',
                        r1_ex(r139_left, r139_e),
                        r1_ex([
                            r139_mod,
                            r139_right
                        ], r139_e)
                    ];
                else if (_r139_t3 = !1, Array.isArray(_r139_t0) && _r139_t0.length === 3 && '.id' === _r139_t0[0] && (r139_id = _r139_t0[1], r139_e = _r139_t0[2], r1_atom(r139_id) && r139_e !== r139_env && r139_locallyQ ? _r139_t3 = !0 : _r139_t3 = !1), _r139_t3)
                    throw new r1_FormInvalidError(r139_left, 'Attempt to redefine non-local subform');
                else if (Array.isArray(_r139_t0) && _r139_t0.length === 3 && '.local' === _r139_t0[0])
                    return r139_a = _r139_t0[1], r139_x = _r139_t0[2], r118_AssignWithMod(r139_a, r139_right, r139_mod, r139_env, r139_x);
                else if (Array.isArray(_r139_t0) && _r139_t0.length === 2 && '.local' === _r139_t0[0])
                    return r139_a = _r139_t0[1], r118_AssignWithMod(r139_a, r139_right, r139_mod, r139_env, r139_locallyQ || !0);
                else if (_r139_t2 = !1, Array.isArray(_r139_t0) && _r139_t0.length === 3 && '.syntactic-closure' === _r139_t0[0] && (r139_a = _r139_t0[1], r139_e = _r139_t0[2], r139_e === r139_env || !r139_locallyQ ? _r139_t2 = !0 : _r139_t2 = !1), _r139_t2)
                    return r118_AssignWithMod(r139_a, r139_right, r139_mod, r139_env, r139_locallyQ);
                else if (_r139_t1 = !1, Array.isArray(_r139_t0) && _r139_t0.length === 3 && '.syntactic-closure' === _r139_t0[0] && (r139_a = _r139_t0[1], r139_e = _r139_t0[2], r139_e !== r139_env && r139_locallyQ ? _r139_t1 = !0 : _r139_t1 = !1), _r139_t1)
                    throw new r1_FormInvalidError(r139_left, 'Attempt to redefine non-local subform');
                else if (Array.isArray(_r139_t0) && _r139_t0.length >= 1 && '.revcall' === _r139_t0[0])
                    return r139_whatever = _r139_t0.slice(1), r118_AssignWithMod([].concat(r139_whatever), r139_right, r139_mod, r139_env, r139_locallyQ);
                else if (Array.isArray(_r139_t0) && _r139_t0.length >= 1)
                    if (r139_callee = _r139_t0[0], r139_paras = _r139_t0.slice(1), r1_atom(r139_callee) && r139_env.macros.has(r139_callee) && r139_env.macros.get(r139_callee).toPattern)
                        return r139_pat = r118_toPattern(r139_left, r139_env), r139_t = r139_env.newt(), [
                            '.begin',
                            [
                                '.set',
                                r139_t,
                                r1_ex([
                                    r139_mod,
                                    r139_right
                                ], r139_env)
                            ],
                            r139_pat.assign(r139_t, r139_locallyQ)
                        ];
                    else if (r1_atom(r139_callee) && r139_env.macros.has(r139_callee))
                        throw new r1_FormInvalidError(r139_left, 'Invalid Assignment Left-hand Side');
                    else
                        return r1_prim(r139_callee) ? [
                            '.set',
                            r1_ex(r139_left, r139_env),
                            r1_ex([
                                r139_mod,
                                r139_right
                            ], r139_env)
                        ] : r1_atom(r139_callee) ? r139_locallyQ ? [
                            '.set',
                            r1_ex([
                                '.local',
                                r139_callee,
                                (r139_locallyQ || 1) - 1
                            ], r139_env),
                            r1_ex([
                                r139_mod,
                                [
                                    '.lambda',
                                    [].concat(r139_paras),
                                    r139_right
                                ]
                            ], r139_env)
                        ] : [
                            '.set',
                            r1_ex(r139_callee, r139_env),
                            r1_ex([
                                r139_mod,
                                [
                                    '.lambda',
                                    [].concat(r139_paras),
                                    r139_right
                                ]
                            ], r139_env)
                        ] : [
                            '.set',
                            r1_ex(r139_callee, r139_env),
                            r1_ex([
                                r139_mod,
                                [
                                    '.lambda',
                                    [].concat(r139_paras),
                                    r139_right
                                ]
                            ], r139_env)
                        ];
                else
                    throw new r1_FormInvalidError(r139_left, 'Invalid Assignment Left-hand Side');
            }, r118_Assign = function _r118_t19(r140_left, r140_right, r140_env, r140_locallyQ) {
                return r118_AssignWithMod(r140_left, r140_right, '.unquote', r140_env, r140_locallyQ);
            };
        r118_externs.macros.put('define', function _r118_t20(r141_form, r141_env) {
            var r141_any, r141_op, r141_left, r141_right, r141_modifer, _r141_t1, _r141_t0 = r141_form;
            if (Array.isArray(_r141_t0) && _r141_t0.length === 4)
                return r141_op = _r141_t0[0], r141_modifer = _r141_t0[1], r141_left = _r141_t0[2], r141_right = _r141_t0[3], r118_AssignWithMod(r141_left, r141_right, r141_modifer, r141_env, 2);
            else if (Array.isArray(_r141_t0) && _r141_t0.length === 3)
                return r141_op = _r141_t0[0], r141_left = _r141_t0[1], r141_right = _r141_t0[2], r118_Assign(r141_left, r141_right, r141_env, 2);
            else if (_r141_t1 = !1, Array.isArray(_r141_t0) && _r141_t0.length === 2 && (r141_op = _r141_t0[0], r141_left = _r141_t0[1], r1_atom(r141_left) ? _r141_t1 = !0 : _r141_t1 = !1), _r141_t1)
                return [
                    '.local',
                    r141_left,
                    1
                ];
            else
                throw r141_any = _r141_t0, new r1_FormInvalidError(r141_any, 'Invalid Assignment');
        }), r118_externs.macros.put('local', function _r118_t21(r142_form, r142_env) {
            var r142_any, r142_op, r142_left, r142_right, r142_modifer, _r142_t1, _r142_t0 = r142_form;
            if (Array.isArray(_r142_t0) && _r142_t0.length === 4)
                return r142_op = _r142_t0[0], r142_modifer = _r142_t0[1], r142_left = _r142_t0[2], r142_right = _r142_t0[3], r118_AssignWithMod(r142_left, r142_right, r142_modifer, r142_env, !0);
            else if (Array.isArray(_r142_t0) && _r142_t0.length === 3)
                return r142_op = _r142_t0[0], r142_left = _r142_t0[1], r142_right = _r142_t0[2], r118_Assign(r142_left, r142_right, r142_env, !0);
            else if (_r142_t1 = !1, Array.isArray(_r142_t0) && _r142_t0.length === 2 && (r142_op = _r142_t0[0], r142_left = _r142_t0[1], r1_atom(r142_left) ? _r142_t1 = !0 : _r142_t1 = !1), _r142_t1)
                return [
                    '.local',
                    r142_left,
                    1
                ];
            else
                throw r142_any = _r142_t0, new r1_FormInvalidError(r142_any, 'Invalid Assignment');
        }), r118_externs.macros.put('const', r118_externs.macros.get('define')), r118_externs.macros.put('set', function _r118_t22(r143_form, r143_env) {
            var r143_any, r143_op, r143_left, r143_right, _r143_t0 = r143_form;
            if (Array.isArray(_r143_t0) && _r143_t0.length === 3)
                return r143_op = _r143_t0[0], r143_left = _r143_t0[1], r143_right = _r143_t0[2], r118_Assign(r143_left, r143_right, r143_env, !1);
            else
                throw r143_any = _r143_t0, new r1_FormInvalidError(r143_any, 'Invalid Assignment');
        }), r118_externs.macros.put('=', r118_externs.macros.get('set')), r118_externs.macros.put('inc', function _r118_t23(r144_form, r144_env) {
            var r144_op, r144_id, r144_shift, _r144_t0;
            return _r144_t0 = r144_form, Array.isArray(_r144_t0) && _r144_t0.length === 2 ? (r144_op = _r144_t0[0], r144_id = _r144_t0[1], r118_Assign(r144_id, [
                '+',
                r144_id,
                [
                    '.quote',
                    1
                ]
            ], r144_env, !1)) : Array.isArray(_r144_t0) && _r144_t0.length === 3 ? (r144_op = _r144_t0[0], r144_id = _r144_t0[1], r144_shift = _r144_t0[2], r118_Assign(r144_id, [
                '+',
                r144_id,
                r144_shift
            ], r144_env, !1)) : Array.isArray(_r144_t0) && _r144_t0.length === 4 && 'by' === _r144_t0[2] ? (r144_op = _r144_t0[0], r144_id = _r144_t0[1], r144_shift = _r144_t0[3], r118_Assign(r144_id, [
                '+',
                r144_id,
                r144_shift
            ], r144_env, !1)) : void 0;
        }), r118_externs.macros.put('dec', function _r118_t24(r145_form, r145_env) {
            var r145_op, r145_id, r145_shift, _r145_t0;
            return _r145_t0 = r145_form, Array.isArray(_r145_t0) && _r145_t0.length === 2 ? (r145_op = _r145_t0[0], r145_id = _r145_t0[1], r118_Assign(r145_id, [
                '-',
                r145_id,
                [
                    '.quote',
                    1
                ]
            ], r145_env, !1)) : Array.isArray(_r145_t0) && _r145_t0.length === 3 ? (r145_op = _r145_t0[0], r145_id = _r145_t0[1], r145_shift = _r145_t0[2], r118_Assign(r145_id, [
                '-',
                r145_id,
                r145_shift
            ], r145_env, !1)) : Array.isArray(_r145_t0) && _r145_t0.length === 4 && 'by' === _r145_t0[2] ? (r145_op = _r145_t0[0], r145_id = _r145_t0[1], r145_shift = _r145_t0[3], r118_Assign(r145_id, [
                '-',
                r145_id,
                r145_shift
            ], r145_env, !1)) : void 0;
        }), r118_externs.macros.put('for', function _r118_t25(r146_form, r146_env) {
            var r146_init, r146_test, r146_step, r146_body, _r146_t0;
            return _r146_t0 = r146_form, Array.isArray(_r146_t0) && _r146_t0.length === 5 && 'for' === _r146_t0[0] ? (r146_init = _r146_t0[1], r146_test = _r146_t0[2], r146_step = _r146_t0[3], r146_body = _r146_t0[4], [
                '.begin',
                r1_ex(r146_init, r146_env),
                [
                    '.while',
                    r1_ex(r146_test, r146_env),
                    [
                        '.begin',
                        r1_ex(r146_body, r146_env),
                        r1_ex(r146_step, r146_env)
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
        ]);
        var r118_toPattern = function _r118_t26(r147_pattern, r147_env, r147_wrapper) {
            var r147_callee, r147_subpatterns, r147_ms, r147_t, r147_whatever, r147_x, _r147_t1, _r147_t0 = r147_pattern, r147_id = _r147_t0;
            if (r1_atom(r147_id))
                return {
                    'whether': function _r147_t5(r159_x) {
                        return null;
                    },
                    'assign': function _r147_t6(r160_x, r160_locallyQ) {
                        return [
                            '.set',
                            r1_ex(r160_locallyQ ? [
                                '.local',
                                r147_id,
                                (r160_locallyQ || 1) - 1
                            ] : r147_id, r147_env),
                            r147_wrapper ? [
                                r147_wrapper,
                                r160_x
                            ] : r160_x
                        ];
                    }
                };
            else if (_r147_t1 = !1, Array.isArray(_r147_t0) && _r147_t0.length === 2 && '.id' === _r147_t0[0] && (r147_id = _r147_t0[1], r1_atom(r147_id) ? _r147_t1 = !0 : _r147_t1 = !1), _r147_t1)
                return {
                    'whether': function _r147_t8(r157_x) {
                        return null;
                    },
                    'assign': function _r147_t9(r158_x, r158_locallyQ) {
                        return [
                            '.set',
                            r1_ex(r158_locallyQ ? [
                                '.local',
                                r147_id,
                                (r158_locallyQ || 1) - 1
                            ] : r147_id, r147_env),
                            r147_wrapper ? [
                                r147_wrapper,
                                r158_x
                            ] : r158_x
                        ];
                    }
                };
            else if (Array.isArray(_r147_t0) && _r147_t0.length === 2 && '.quote' === _r147_t0[0])
                return r147_x = _r147_t0[1], {
                    'whether': function _r147_t11(r155_x) {
                        return [
                            '===',
                            r1_ex(r147_pattern, r147_env),
                            r155_x
                        ];
                    },
                    'assign': function _r147_t12(r156_x, r156_locallyQ) {
                        return ['.unit'];
                    }
                };
            else if (Array.isArray(_r147_t0) && _r147_t0.length >= 1 && '.' === _r147_t0[0])
                return r147_whatever = _r147_t0.slice(1), {
                    'whether': function _r147_t14(r153_x) {
                        return null;
                    },
                    'assign': function _r147_t15(r154_x, r154_locallyQ) {
                        return [
                            '.set',
                            r1_ex(r147_pattern, r147_env),
                            r147_wrapper ? [
                                r147_wrapper,
                                r154_x
                            ] : r154_x
                        ];
                    }
                };
            else if (Array.isArray(_r147_t0) && _r147_t0.length >= 1)
                if (r147_callee = _r147_t0[0], r147_subpatterns = _r147_t0.slice(1), r1_atom(r147_callee) && r147_env.macros.has(r147_callee) && r147_env.macros.get(r147_callee).toPattern)
                    return r147_env.macros.get(r147_callee).toPattern(r147_pattern, r147_env, r147_wrapper);
                else if (r1_atom(r147_callee) && r147_env.macros.has(r147_callee) && !r147_env.macros.get(r147_callee).invokeAsAtom)
                    throw new r1_FormInvalidError(r147_pattern, 'Invalid Pattern');
                else
                    return r147_ms = r147_subpatterns.map(function _r147_t20(r148_x) {
                        return r118_toPattern(r148_x, r147_env, r147_wrapper);
                    }), r147_t = r147_env.newt(), {
                        'whether': function _r147_t21(r149_x) {
                            return [
                                '&&',
                                [
                                    '.set',
                                    r147_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r147_callee, r147_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r149_x,
                                        [
                                            '.quote',
                                            r147_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r147_ms.map(function _r149_t2(r150_p, r150_j) {
                                return r150_p.whether([
                                    '.',
                                    r147_t,
                                    [
                                        '.quote',
                                        r150_j
                                    ]
                                ]);
                            })).filter(r118_boole);
                        },
                        'assign': function _r147_t22(r151_x, r151_locallyQ) {
                            return ['.begin'].concat(r147_ms.map(function _r151_t2(r152_p, r152_j) {
                                return r152_p.assign([
                                    '.',
                                    r147_t,
                                    [
                                        '.quote',
                                        r152_j
                                    ]
                                ], r151_locallyQ);
                            }));
                        }
                    };
            else
                return void 0;
        };
        r118_externs.macros.put('.list', {}), r118_externs.macros.get('.list').toPattern = function _r118_t27(r161_pattern, r161_env, r161_wrapper) {
            var r161_subpatterns, r161_ms, _r161_t0 = r161_pattern;
            return Array.isArray(_r161_t0) && _r161_t0.length >= 1 && '.list' === _r161_t0[0] ? (r161_subpatterns = _r161_t0.slice(1), r161_ms = r161_subpatterns.map(function _r161_t4(r162_x) {
                return r118_toPattern(r162_x, r161_env, r161_wrapper);
            }), {
                'whether': function _r161_t5(r163_x) {
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
                            r163_x
                        ],
                        [
                            '===',
                            [
                                '.',
                                r163_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r161_ms.length
                            ]
                        ]
                    ].concat(r161_ms.map(function _r163_t2(r164_p, r164_j) {
                        return r164_p.whether([
                            '.',
                            r163_x,
                            [
                                '.quote',
                                r164_j
                            ]
                        ]);
                    })).filter(r118_boole);
                },
                'assign': function _r161_t6(r165_x, r165_locallyQ) {
                    return ['.begin'].concat(r161_ms.map(function _r165_t2(r166_p, r166_j) {
                        return r166_p.assign([
                            '.',
                            r165_x,
                            [
                                '.quote',
                                r166_j
                            ]
                        ], r165_locallyQ);
                    }).concat([r165_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('.conslist', {}), r118_externs.macros.get('.conslist').toPattern = function _r118_t28(r167_pattern, r167_env, r167_wrapper) {
            var r167_subpatterns, r167_ms, r167_final, _r167_t0 = r167_pattern;
            return Array.isArray(_r167_t0) && _r167_t0.length >= 1 && '.conslist' === _r167_t0[0] ? (r167_subpatterns = _r167_t0.slice(1), r167_ms = r167_pattern.slice(1, -1).map(function _r167_t4(r168_x) {
                return r118_toPattern(r168_x, r167_env, r167_wrapper);
            }), r167_final = r118_toPattern(r167_pattern[r167_pattern.length - 1], r167_env), {
                'whether': function _r167_t5(r169_x) {
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
                            r169_x
                        ],
                        [
                            '>=',
                            [
                                '.',
                                r169_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r167_ms.length
                            ]
                        ]
                    ].concat(r167_ms.map(function _r169_t2(r170_p, r170_j) {
                        return r170_p.whether([
                            '.',
                            r169_x,
                            [
                                '.quote',
                                r170_j
                            ]
                        ]);
                    }).concat([r167_final.whether([
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
                                r167_ms.length
                            ]
                        ])])).filter(r118_boole);
                },
                'assign': function _r167_t6(r171_x, r171_locallyQ) {
                    return ['.begin'].concat(r167_ms.map(function _r171_t2(r172_p, r172_j) {
                        return r172_p.assign([
                            '.',
                            r171_x,
                            [
                                '.quote',
                                r172_j
                            ]
                        ], r171_locallyQ);
                    })).concat([r167_final.assign(r167_wrapper ? [
                            [
                                '.',
                                [
                                    [
                                        '.',
                                        r171_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r167_ms.length
                                    ]
                                ],
                                [
                                    '.quote',
                                    'map'
                                ]
                            ],
                            r167_wrapper
                        ] : [
                            [
                                '.',
                                r171_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r167_ms.length
                            ]
                        ], r171_locallyQ)]).concat([r171_x]);
                }
            }) : void 0;
        }, r118_externs.macros.put('.hash', {}), r118_externs.macros.get('.hash').toPattern = function _r118_t29(r173_pattern, r173_env, r173_wrapper) {
            var r173_subpatterns, r173_ms, _r173_t0 = r173_pattern;
            return Array.isArray(_r173_t0) && _r173_t0.length >= 1 && '.hash' === _r173_t0[0] ? (r173_subpatterns = _r173_t0.slice(1), r173_ms = r173_subpatterns.map(function _r173_t4(r174_pair) {
                return [
                    r174_pair[0],
                    r118_toPattern(r174_pair[1], r173_env, r173_wrapper)
                ];
            }), {
                'whether': function _r173_t5(r175_x) {
                    return [
                        '&&',
                        r175_x
                    ].concat(r173_ms.map(function _r175_t2(r176_p) {
                        return r176_p[1].whether([
                            '.',
                            r175_x,
                            [
                                '.quote',
                                r176_p[0]
                            ]
                        ]);
                    })).filter(r118_boole);
                },
                'assign': function _r173_t6(r177_x, r177_locallyQ) {
                    return ['.begin'].concat(r173_ms.map(function _r177_t2(r178_p) {
                        return r178_p[1].assign([
                            '.',
                            r177_x,
                            [
                                '.quote',
                                r178_p[0]
                            ]
                        ], r177_locallyQ);
                    }).concat([r177_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('.xhash', {}), r118_externs.macros.get('.xhash').toPattern = function _r118_t30(r179_pattern, r179_env, r179_wrapper) {
            var r179_subpatterns, r179_ms, _r179_t0 = r179_pattern;
            return Array.isArray(_r179_t0) && _r179_t0.length >= 1 && '.xhash' === _r179_t0[0] ? (r179_subpatterns = _r179_t0.slice(1), r179_ms = r179_subpatterns.map(function _r179_t4(r180_pair) {
                return [
                    r1_ex(r180_pair[0], r179_env),
                    r118_toPattern(r180_pair[1], r179_env, r179_wrapper)
                ];
            }), {
                'whether': function _r179_t5(r181_x) {
                    return [
                        '&&',
                        r181_x
                    ].concat(r179_ms.map(function _r181_t2(r182_p) {
                        var r182_key, _r182_t5, _r182_t0 = r182_p[0];
                        return Array.isArray(_r182_t0) && _r182_t0.length === 2 && '.quote' === _r182_t0[0] ? (r182_key = _r182_t0[1], r182_p[1].whether([
                            '.',
                            r181_x,
                            r182_p[0]
                        ])) : (_r182_t5 = r179_env.newt(), function (_r182_leti1, r183_t) {
                            return r183_t = _r182_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r183_t,
                                    [
                                        '.',
                                        r181_x,
                                        r182_p[0]
                                    ]
                                ],
                                r182_p[1].whether(r183_t)
                            ];
                        }(_r182_t5));
                    })).filter(r118_boole);
                },
                'assign': function _r179_t6(r184_x, r184_locallyQ) {
                    return ['.begin'].concat(r179_ms.map(function _r184_t2(r185_p) {
                        var r185_key, _r185_t5, _r185_t0 = r185_p[0];
                        return Array.isArray(_r185_t0) && _r185_t0.length === 2 && '.quote' === _r185_t0[0] ? (r185_key = _r185_t0[1], r185_p[1].assign([
                            '.',
                            r184_x,
                            r185_p[0]
                        ], r184_locallyQ)) : (_r185_t5 = r179_env.newt(), function (_r185_leti1, r186_t) {
                            return r186_t = _r185_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r186_t,
                                    [
                                        '.',
                                        r184_x,
                                        r185_p[0]
                                    ]
                                ],
                                r185_p[1].assign(r186_t, r184_locallyQ)
                            ];
                        }(_r185_t5));
                    }).concat([r184_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('.quasiquote', {}), r118_externs.macros.get('.quasiquote').toPattern = function _r118_t31(r187_pattern, r187_env, r187_wrapper) {
            var r187_subpatterns, _r187_t0;
            return _r187_t0 = r187_pattern, Array.isArray(_r187_t0) && _r187_t0.length >= 1 && '.quasiquote' === _r187_t0[0] ? (r187_subpatterns = _r187_t0.slice(1), r118_toPattern(r1_deQuasiquote(r187_pattern[1], 0, r187_env), r187_env, r187_wrapper)) : void 0;
        }, r118_externs.macros.put('.operatorPiece', {}), r118_externs.macros.get('.operatorPiece').toPattern = function _r118_t32(r188_pattern, r188_env, r188_wrapper) {
            return r118_toPattern(r1_opSegToRegular(r188_pattern.slice(1), r188_env), r188_env, r188_wrapper);
        }, r118_externs.macros.put('&&', {}), r118_externs.macros.get('&&').toPattern = function _r118_t33(r189_pattern, r189_env, r189_wrapper) {
            var r189_subpatterns, r189_ms, _r189_t0 = r189_pattern;
            return Array.isArray(_r189_t0) && _r189_t0.length >= 1 && '&&' === _r189_t0[0] ? (r189_subpatterns = _r189_t0.slice(1), r189_ms = r189_subpatterns.map(function _r189_t4(r190_x) {
                return r118_toPattern(r190_x, r189_env, r189_wrapper);
            }), {
                'whether': function _r189_t5(r191_x) {
                    var r191_f = ['&&'].concat(r189_ms.map(function _r191_t2(r192_p, r192_j) {
                        return r192_p.whether(r191_x);
                    })).filter(r118_boole);
                    return r191_f.length === 1 ? [
                        '.quote',
                        !0
                    ] : r191_f;
                },
                'assign': function _r189_t6(r193_x, r193_locallyQ) {
                    return ['.begin'].concat(r189_ms.map(function _r193_t2(r194_p, r194_j) {
                        return r194_p.assign(r193_x, r193_locallyQ);
                    }).concat([r193_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('||', {}), r118_externs.macros.get('||').toPattern = function _r118_t34(r195_pattern, r195_env, r195_wrapper) {
            var r195_subpatterns, r195_ms, _r195_t0 = r195_pattern;
            return Array.isArray(_r195_t0) && _r195_t0.length >= 1 && '||' === _r195_t0[0] ? (r195_subpatterns = _r195_t0.slice(1), r195_ms = r195_subpatterns.map(function _r195_t4(r196_x) {
                return r118_toPattern(r196_x, r195_env, r195_wrapper);
            }), {
                'whether': function _r195_t5(r197_x) {
                    return ['||'].concat(r195_ms.map(function _r197_t2(r198_p, r198_j) {
                        return r198_p.whether(r197_x);
                    })).filter(r118_boole);
                },
                'assign': function _r195_t6(r199_x, r199_locallyQ) {
                    return ['.unit'];
                }
            }) : void 0;
        };
        var r118_boole = function _r118_t35(r200_x) {
            return !!r200_x;
        };
        return r118_externs.macros.put('match', function _r118_t36(r201_form, r201_env, r201_wrapper) {
            var r201_pattern, r201_guard, r201_body, r201_pat, r201_cond, r201_tc, _r201_t0, r201_pairs = r201_form.slice(2), r201_t = r201_env.newt(), r201_f = ['.unit'], r201_j = r201_pairs.length - 1;
            for (; r201_j >= 0; r201_j -= 1)
                _r201_t0 = r201_pairs[r201_j], r201_f = Array.isArray(_r201_t0) && _r201_t0.length === 2 ? (r201_pattern = _r201_t0[0], r201_body = _r201_t0[1], r201_pat = r118_toPattern(r201_pattern, r201_env, r201_wrapper), r201_cond = r201_pat.whether(r201_t), r201_cond ? [
                    '.if',
                    r201_cond,
                    [
                        '.begin',
                        r201_pat.assign(r201_t, !0),
                        r1_ex(r201_body, r201_env)
                    ],
                    r201_f
                ] : [
                    '.begin',
                    r201_pat.assign(r201_t, !0),
                    r1_ex(r201_body, r201_env)
                ]) : Array.isArray(_r201_t0) && _r201_t0.length === 3 ? (r201_pattern = _r201_t0[0], r201_guard = _r201_t0[1], r201_body = _r201_t0[2], r201_pat = r118_toPattern(r201_pattern, r201_env, r201_wrapper), r201_cond = r201_pat.whether(r201_t), r201_cond ? (r201_tc = r201_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r201_tc,
                        [
                            '.quote',
                            !1
                        ]
                    ],
                    [
                        '.if',
                        r201_cond,
                        [
                            '.begin',
                            r201_pat.assign(r201_t, !0),
                            [
                                '.if',
                                r1_ex(r201_guard, r201_env),
                                [
                                    '.set',
                                    r201_tc,
                                    [
                                        '.quote',
                                        !0
                                    ]
                                ],
                                [
                                    '.set',
                                    r201_tc,
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
                        r201_tc,
                        r1_ex(r201_body, r201_env),
                        r201_f
                    ]
                ]) : [
                    '.begin',
                    r201_pat.assign(r201_t, !0),
                    [
                        '.if',
                        r1_ex(r201_guard, r201_env),
                        r1_ex(r201_body, r201_env),
                        r201_f
                    ]
                ]) : r201_f;
            return [
                '.begin',
                [
                    '.set',
                    r201_t,
                    r1_ex(r201_form[1], r201_env)
                ],
                r201_f
            ];
        }), r118_externs.macros.put('matches', function _r118_t37(r202_form, r202_env, r202_wrapper) {
            var r202_whatever, r202_obj, r202_pattern, r202_pat, r202_t, r202_cond, _r202_t0 = r202_form;
            return Array.isArray(_r202_t0) && _r202_t0.length === 3 ? (r202_whatever = _r202_t0[0], r202_obj = _r202_t0[1], r202_pattern = _r202_t0[2], r202_pat = r118_toPattern(r202_pattern, r202_env), r202_t = r202_env.newt(), r202_cond = r202_pat.whether(r202_t), r202_cond ? [
                '.begin',
                [
                    '.set',
                    r202_t,
                    r1_ex(r202_obj, r202_env)
                ],
                r202_pat.whether(r202_t)
            ] : [
                '.quote',
                !0
            ]) : void 0;
        }), r118_externs.macros.put('<~>', r118_externs.macros.get('matches')), r118_externs.operatorInfo.put('<~>', {
            'priority': 400,
            'associvity': 'never'
        }), r118_externs.macros.put('regex', function _r118_t38(r203_form, r203_env) {
            var r203_args, r203_s, r203_flag, _r203_t0;
            return _r203_t0 = r203_form, Array.isArray(_r203_t0) && _r203_t0.length === 2 && 'regex' === _r203_t0[0] && Array.isArray(_r203_t0[1]) && _r203_t0[1].length === 2 && '.quote' === _r203_t0[1][0] ? (r203_s = _r203_t0[1][1], _r203_t0[1], [
                '.quote',
                new RegExp(r203_s)
            ]) : Array.isArray(_r203_t0) && _r203_t0.length === 3 && 'regex' === _r203_t0[0] && Array.isArray(_r203_t0[1]) && _r203_t0[1].length === 2 && '.quote' === _r203_t0[1][0] && Array.isArray(_r203_t0[2]) && _r203_t0[2].length === 2 && '.quote' === _r203_t0[2][0] ? (r203_s = _r203_t0[1][1], _r203_t0[1], r203_flag = _r203_t0[2][1], _r203_t0[2], [
                '.quote',
                new RegExp(r203_s, r203_flag)
            ]) : Array.isArray(_r203_t0) && _r203_t0.length >= 1 && 'regex' === _r203_t0[0] ? (r203_args = _r203_t0.slice(1), [
                '.new',
                r118_externs.use('RegExp')
            ].concat(r203_args)) : void 0;
        }), r118_externs.macros.put('define-macro', function _r118_t39(r204_form, r204_env) {
            var r204_op, r204_name, r204_body, r204_coinit, r204_ds, r204_imports, r204_names, r204_assignments, r204_macroG, r204_macroFn, r204_str, _r204_t1, _r204_t0 = r204_form;
            return Array.isArray(_r204_t0) && _r204_t0.length === 3 && Array.isArray(_r204_t0[1]) && _r204_t0[1].length === 2 && '.quote' === _r204_t0[1][0] ? (r204_op = _r204_t0[0], r204_str = _r204_t0[1][1], _r204_t0[1], r204_body = _r204_t0[2], r1_ex([
                r204_op,
                r204_str,
                r204_body
            ], r204_env)) : (_r204_t1 = !1, Array.isArray(_r204_t0) && _r204_t0.length === 3 && (r204_op = _r204_t0[0], r204_name = _r204_t0[1], r204_body = _r204_t0[2], r1_atom(r204_name) ? _r204_t1 = !0 : _r204_t1 = !1), _r204_t1 ? (r204_coinit = {
                'injectForm': void 0,
                'initFn': void 0
            }, r204_ds = new r1_Scope(r204_env), r204_imports = {
                'ex': r1_ex,
                'atom': r1_wrapForSyntacticClosure(r1_atom),
                'prim': r1_wrapForSyntacticClosure(r1_prim),
                'formOf': function _r204_t6(r205_x) {
                    return r205_x[1];
                },
                'scopeOf': function _r204_t7(r206_x) {
                    return r206_x[2];
                },
                'definingEnv': r204_env,
                'externEnv': r118_externs,
                'require': require,
                'toPattern': r118_toPattern,
                'coinit': r204_coinit,
                'FormInvalidError': r1_FormInvalidError,
                'deQuasiquote': r1_deQuasiquote,
                'opSegToRegular': r1_opSegToRegular
            }, r204_names = Object.keys(r204_imports), r204_ds.declare('$', !0), r204_assignments = ['.begin'].concat(r204_names.map(function _r204_t8(r207_name) {
                return [
                    'local',
                    r207_name,
                    [
                        '.',
                        '$',
                        [
                            '.quote',
                            r207_name
                        ]
                    ]
                ];
            })), r204_macroG = new Function(r204_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
                '.return',
                r1_ex([
                    '.begin',
                    r204_assignments,
                    r204_body
                ], r204_ds)
            ], r204_ds, function _r204_t9(r208_form) {
                return [
                    '.return',
                    r208_form
                ];
            }))), r204_macroFn = r204_macroG(r204_imports), r204_env.macros.put(r204_name, function _r204_t10(r209_c, r209_e) {
                var r209_result = r204_macroFn(r209_c, r209_e), r209_s = new r1_Scope(r204_env);
                return r209_s.hanging = r209_e, r209_s.semiparent = r209_e, r1_ex(r209_result, r209_s);
            }), r204_coinit.initFn && r204_coinit.initFn(r204_env.macros.get(r204_name)), r204_coinit.injectForm ? r1_ex(r204_coinit.injectForm, r204_env) : ['.unit']) : ['.unit']);
        }), r118_externs.macros.put('macro-match', function _r118_t40(r210_form, r210_env) {
            var r210_c, r210_e, r210_patterns, r210_t, r210_tx, r210_tw, _r210_t0 = r210_form;
            return Array.isArray(_r210_t0) && _r210_t0.length >= 3 && 'macro-match' === _r210_t0[0] ? (r210_c = _r210_t0[1], r210_e = _r210_t0[2], r210_patterns = _r210_t0.slice(3), r210_t = r210_env.newt(), r210_tx = r210_env.newt(), r210_tw = r210_env.newt(), [
                '.begin',
                [
                    '.set',
                    r210_t,
                    r210_e
                ],
                [
                    '.set',
                    r210_tw,
                    [
                        '.lambda',
                        [r210_tx],
                        [
                            '.return',
                            [
                                '.list',
                                [
                                    '.quote',
                                    '.syntactic-closure'
                                ],
                                r210_tx,
                                r210_t
                            ]
                        ]
                    ]
                ],
                r118_externs.macros.get('match')([
                    'match',
                    r210_c
                ].concat(r210_patterns), r210_env, r210_tw)
            ]) : ['.unit'];
        }), r118_externs.pFamily = 'r', r118_externs;
    };
exports.Create = r1_Create;
