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
                        'local',
                        r130_arg,
                        r130_t
                    ]);
                else {
                    if (_r130_t1 = !1, Array.isArray(_r130_t0) && _r130_t0.length === 1 && (r130_arg = _r130_t0[0], r1_atom(r130_arg) ? _r130_t1 = !0 : _r130_t1 = !1), !_r130_t1)
                        throw new r1_FormInvalidError(r130_pairs[r130_j], 'Invalid [let] subpattern');
                    r130_t = r130_env.newt('leti'), r130_args.push(r130_t), r130_paras.push(r130_env.use(r130_arg)), r130_decls.push([
                        'local',
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
                var r139_callee, r139_paras, r139_pat, r139_t, r139_whatever, r139_a, r139_e, _r139_t1, _r139_t2, _r139_t3, _r139_t4, _r139_t5, _r139_t0 = r139_left, r139_id = _r139_t0;
                if (r1_atom(r139_id))
                    return r139_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r139_id
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
                            r139_id
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
                            r139_id
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
                else if (Array.isArray(_r139_t0) && _r139_t0.length === 2 && '.local' === _r139_t0[0])
                    return r139_a = _r139_t0[1], r118_AssignWithMod(r139_a, r139_right, r139_mod, r139_env, !0);
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
                                r139_callee
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
                return r141_op = _r141_t0[0], r141_modifer = _r141_t0[1], r141_left = _r141_t0[2], r141_right = _r141_t0[3], r118_AssignWithMod(r141_left, r141_right, r141_modifer, r141_env, !0);
            else if (Array.isArray(_r141_t0) && _r141_t0.length === 3)
                return r141_op = _r141_t0[0], r141_left = _r141_t0[1], r141_right = _r141_t0[2], r118_Assign(r141_left, r141_right, r141_env, !0);
            else if (_r141_t1 = !1, Array.isArray(_r141_t0) && _r141_t0.length === 2 && (r141_op = _r141_t0[0], r141_left = _r141_t0[1], r1_atom(r141_left) ? _r141_t1 = !0 : _r141_t1 = !1), _r141_t1)
                return [
                    '.local',
                    r141_left
                ];
            else
                throw r141_any = _r141_t0, new r1_FormInvalidError(r141_any, 'Invalid Assignment');
        }), r118_externs.macros.put('local', r118_externs.macros.get('define')), r118_externs.macros.put('set', function _r118_t21(r142_form, r142_env) {
            var r142_any, r142_op, r142_left, r142_right, _r142_t0 = r142_form;
            if (Array.isArray(_r142_t0) && _r142_t0.length === 3)
                return r142_op = _r142_t0[0], r142_left = _r142_t0[1], r142_right = _r142_t0[2], r118_Assign(r142_left, r142_right, r142_env, !1);
            else
                throw r142_any = _r142_t0, new r1_FormInvalidError(r142_any, 'Invalid Assignment');
        }), r118_externs.macros.put('=', r118_externs.macros.get('set')), r118_externs.macros.put('inc', function _r118_t22(r143_form, r143_env) {
            var r143_op, r143_id, r143_shift, _r143_t0;
            return _r143_t0 = r143_form, Array.isArray(_r143_t0) && _r143_t0.length === 2 ? (r143_op = _r143_t0[0], r143_id = _r143_t0[1], r118_Assign(r143_id, [
                '+',
                r143_id,
                [
                    '.quote',
                    1
                ]
            ], r143_env, !1)) : Array.isArray(_r143_t0) && _r143_t0.length === 3 ? (r143_op = _r143_t0[0], r143_id = _r143_t0[1], r143_shift = _r143_t0[2], r118_Assign(r143_id, [
                '+',
                r143_id,
                r143_shift
            ], r143_env, !1)) : Array.isArray(_r143_t0) && _r143_t0.length === 4 && 'by' === _r143_t0[2] ? (r143_op = _r143_t0[0], r143_id = _r143_t0[1], r143_shift = _r143_t0[3], r118_Assign(r143_id, [
                '+',
                r143_id,
                r143_shift
            ], r143_env, !1)) : void 0;
        }), r118_externs.macros.put('dec', function _r118_t23(r144_form, r144_env) {
            var r144_op, r144_id, r144_shift, _r144_t0;
            return _r144_t0 = r144_form, Array.isArray(_r144_t0) && _r144_t0.length === 2 ? (r144_op = _r144_t0[0], r144_id = _r144_t0[1], r118_Assign(r144_id, [
                '-',
                r144_id,
                [
                    '.quote',
                    1
                ]
            ], r144_env, !1)) : Array.isArray(_r144_t0) && _r144_t0.length === 3 ? (r144_op = _r144_t0[0], r144_id = _r144_t0[1], r144_shift = _r144_t0[2], r118_Assign(r144_id, [
                '-',
                r144_id,
                r144_shift
            ], r144_env, !1)) : Array.isArray(_r144_t0) && _r144_t0.length === 4 && 'by' === _r144_t0[2] ? (r144_op = _r144_t0[0], r144_id = _r144_t0[1], r144_shift = _r144_t0[3], r118_Assign(r144_id, [
                '-',
                r144_id,
                r144_shift
            ], r144_env, !1)) : void 0;
        }), r118_externs.macros.put('for', function _r118_t24(r145_form, r145_env) {
            var r145_init, r145_test, r145_step, r145_body, _r145_t0;
            return _r145_t0 = r145_form, Array.isArray(_r145_t0) && _r145_t0.length === 5 && 'for' === _r145_t0[0] ? (r145_init = _r145_t0[1], r145_test = _r145_t0[2], r145_step = _r145_t0[3], r145_body = _r145_t0[4], [
                '.begin',
                r1_ex(r145_init, r145_env),
                [
                    '.while',
                    r1_ex(r145_test, r145_env),
                    [
                        '.begin',
                        r1_ex(r145_body, r145_env),
                        r1_ex(r145_step, r145_env)
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
        var r118_toPattern = function _r118_t25(r146_pattern, r146_env, r146_wrapper) {
            var r146_callee, r146_subpatterns, r146_ms, r146_t, r146_whatever, r146_x, _r146_t1, _r146_t0 = r146_pattern, r146_id = _r146_t0;
            if (r1_atom(r146_id))
                return {
                    'whether': function _r146_t5(r158_x) {
                        return null;
                    },
                    'assign': function _r146_t6(r159_x, r159_locallyQ) {
                        return [
                            '.set',
                            r1_ex(r159_locallyQ ? [
                                '.local',
                                r146_id
                            ] : r146_id, r146_env),
                            r146_wrapper ? [
                                r146_wrapper,
                                r159_x
                            ] : r159_x
                        ];
                    }
                };
            else if (_r146_t1 = !1, Array.isArray(_r146_t0) && _r146_t0.length === 2 && '.id' === _r146_t0[0] && (r146_id = _r146_t0[1], r1_atom(r146_id) ? _r146_t1 = !0 : _r146_t1 = !1), _r146_t1)
                return {
                    'whether': function _r146_t8(r156_x) {
                        return null;
                    },
                    'assign': function _r146_t9(r157_x, r157_locallyQ) {
                        return [
                            '.set',
                            r1_ex(r157_locallyQ ? [
                                '.local',
                                r146_id
                            ] : r146_id, r146_env),
                            r146_wrapper ? [
                                r146_wrapper,
                                r157_x
                            ] : r157_x
                        ];
                    }
                };
            else if (Array.isArray(_r146_t0) && _r146_t0.length === 2 && '.quote' === _r146_t0[0])
                return r146_x = _r146_t0[1], {
                    'whether': function _r146_t11(r154_x) {
                        return [
                            '===',
                            r1_ex(r146_pattern, r146_env),
                            r154_x
                        ];
                    },
                    'assign': function _r146_t12(r155_x, r155_locallyQ) {
                        return ['.unit'];
                    }
                };
            else if (Array.isArray(_r146_t0) && _r146_t0.length >= 1 && '.' === _r146_t0[0])
                return r146_whatever = _r146_t0.slice(1), {
                    'whether': function _r146_t14(r152_x) {
                        return null;
                    },
                    'assign': function _r146_t15(r153_x, r153_locallyQ) {
                        return [
                            '.set',
                            r1_ex(r146_pattern, r146_env),
                            r146_wrapper ? [
                                r146_wrapper,
                                r153_x
                            ] : r153_x
                        ];
                    }
                };
            else if (Array.isArray(_r146_t0) && _r146_t0.length >= 1)
                if (r146_callee = _r146_t0[0], r146_subpatterns = _r146_t0.slice(1), r1_atom(r146_callee) && r146_env.macros.has(r146_callee) && r146_env.macros.get(r146_callee).toPattern)
                    return r146_env.macros.get(r146_callee).toPattern(r146_pattern, r146_env, r146_wrapper);
                else if (r1_atom(r146_callee) && r146_env.macros.has(r146_callee) && !r146_env.macros.get(r146_callee).invokeAsAtom)
                    throw new r1_FormInvalidError(r146_pattern, 'Invalid Pattern');
                else
                    return r146_ms = r146_subpatterns.map(function _r146_t20(r147_x) {
                        return r118_toPattern(r147_x, r146_env, r146_wrapper);
                    }), r146_t = r146_env.newt(), {
                        'whether': function _r146_t21(r148_x) {
                            return [
                                '&&',
                                [
                                    '.set',
                                    r146_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r146_callee, r146_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r148_x,
                                        [
                                            '.quote',
                                            r146_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r146_ms.map(function _r148_t2(r149_p, r149_j) {
                                return r149_p.whether([
                                    '.',
                                    r146_t,
                                    [
                                        '.quote',
                                        r149_j
                                    ]
                                ]);
                            })).filter(r118_boole);
                        },
                        'assign': function _r146_t22(r150_x, r150_locallyQ) {
                            return ['.begin'].concat(r146_ms.map(function _r150_t2(r151_p, r151_j) {
                                return r151_p.assign([
                                    '.',
                                    r146_t,
                                    [
                                        '.quote',
                                        r151_j
                                    ]
                                ], r150_locallyQ);
                            }));
                        }
                    };
            else
                return void 0;
        };
        r118_externs.macros.put('.list', {}), r118_externs.macros.get('.list').toPattern = function _r118_t26(r160_pattern, r160_env, r160_wrapper) {
            var r160_subpatterns, r160_ms, _r160_t0 = r160_pattern;
            return Array.isArray(_r160_t0) && _r160_t0.length >= 1 && '.list' === _r160_t0[0] ? (r160_subpatterns = _r160_t0.slice(1), r160_ms = r160_subpatterns.map(function _r160_t4(r161_x) {
                return r118_toPattern(r161_x, r160_env, r160_wrapper);
            }), {
                'whether': function _r160_t5(r162_x) {
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
                            r162_x
                        ],
                        [
                            '===',
                            [
                                '.',
                                r162_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r160_ms.length
                            ]
                        ]
                    ].concat(r160_ms.map(function _r162_t2(r163_p, r163_j) {
                        return r163_p.whether([
                            '.',
                            r162_x,
                            [
                                '.quote',
                                r163_j
                            ]
                        ]);
                    })).filter(r118_boole);
                },
                'assign': function _r160_t6(r164_x, r164_locallyQ) {
                    return ['.begin'].concat(r160_ms.map(function _r164_t2(r165_p, r165_j) {
                        return r165_p.assign([
                            '.',
                            r164_x,
                            [
                                '.quote',
                                r165_j
                            ]
                        ], r164_locallyQ);
                    }).concat([r164_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('.conslist', {}), r118_externs.macros.get('.conslist').toPattern = function _r118_t27(r166_pattern, r166_env, r166_wrapper) {
            var r166_subpatterns, r166_ms, r166_final, _r166_t0 = r166_pattern;
            return Array.isArray(_r166_t0) && _r166_t0.length >= 1 && '.conslist' === _r166_t0[0] ? (r166_subpatterns = _r166_t0.slice(1), r166_ms = r166_pattern.slice(1, -1).map(function _r166_t4(r167_x) {
                return r118_toPattern(r167_x, r166_env, r166_wrapper);
            }), r166_final = r118_toPattern(r166_pattern[r166_pattern.length - 1], r166_env), {
                'whether': function _r166_t5(r168_x) {
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
                            r168_x
                        ],
                        [
                            '>=',
                            [
                                '.',
                                r168_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r166_ms.length
                            ]
                        ]
                    ].concat(r166_ms.map(function _r168_t2(r169_p, r169_j) {
                        return r169_p.whether([
                            '.',
                            r168_x,
                            [
                                '.quote',
                                r169_j
                            ]
                        ]);
                    }).concat([r166_final.whether([
                            [
                                '.',
                                r168_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r166_ms.length
                            ]
                        ])])).filter(r118_boole);
                },
                'assign': function _r166_t6(r170_x, r170_locallyQ) {
                    return ['.begin'].concat(r166_ms.map(function _r170_t2(r171_p, r171_j) {
                        return r171_p.assign([
                            '.',
                            r170_x,
                            [
                                '.quote',
                                r171_j
                            ]
                        ], r170_locallyQ);
                    })).concat([r166_final.assign(r166_wrapper ? [
                            [
                                '.',
                                [
                                    [
                                        '.',
                                        r170_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r166_ms.length
                                    ]
                                ],
                                [
                                    '.quote',
                                    'map'
                                ]
                            ],
                            r166_wrapper
                        ] : [
                            [
                                '.',
                                r170_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r166_ms.length
                            ]
                        ], r170_locallyQ)]).concat([r170_x]);
                }
            }) : void 0;
        }, r118_externs.macros.put('.hash', {}), r118_externs.macros.get('.hash').toPattern = function _r118_t28(r172_pattern, r172_env, r172_wrapper) {
            var r172_subpatterns, r172_ms, _r172_t0 = r172_pattern;
            return Array.isArray(_r172_t0) && _r172_t0.length >= 1 && '.hash' === _r172_t0[0] ? (r172_subpatterns = _r172_t0.slice(1), r172_ms = r172_subpatterns.map(function _r172_t4(r173_pair) {
                return [
                    r173_pair[0],
                    r118_toPattern(r173_pair[1], r172_env, r172_wrapper)
                ];
            }), {
                'whether': function _r172_t5(r174_x) {
                    return [
                        '&&',
                        r174_x
                    ].concat(r172_ms.map(function _r174_t2(r175_p) {
                        return r175_p[1].whether([
                            '.',
                            r174_x,
                            [
                                '.quote',
                                r175_p[0]
                            ]
                        ]);
                    })).filter(r118_boole);
                },
                'assign': function _r172_t6(r176_x, r176_locallyQ) {
                    return ['.begin'].concat(r172_ms.map(function _r176_t2(r177_p) {
                        return r177_p[1].assign([
                            '.',
                            r176_x,
                            [
                                '.quote',
                                r177_p[0]
                            ]
                        ], r176_locallyQ);
                    }).concat([r176_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('.xhash', {}), r118_externs.macros.get('.xhash').toPattern = function _r118_t29(r178_pattern, r178_env, r178_wrapper) {
            var r178_subpatterns, r178_ms, _r178_t0 = r178_pattern;
            return Array.isArray(_r178_t0) && _r178_t0.length >= 1 && '.xhash' === _r178_t0[0] ? (r178_subpatterns = _r178_t0.slice(1), r178_ms = r178_subpatterns.map(function _r178_t4(r179_pair) {
                return [
                    r1_ex(r179_pair[0], r178_env),
                    r118_toPattern(r179_pair[1], r178_env, r178_wrapper)
                ];
            }), {
                'whether': function _r178_t5(r180_x) {
                    return [
                        '&&',
                        r180_x
                    ].concat(r178_ms.map(function _r180_t2(r181_p) {
                        var r181_key, _r181_t5, _r181_t0 = r181_p[0];
                        return Array.isArray(_r181_t0) && _r181_t0.length === 2 && '.quote' === _r181_t0[0] ? (r181_key = _r181_t0[1], r181_p[1].whether([
                            '.',
                            r180_x,
                            r181_p[0]
                        ])) : (_r181_t5 = r178_env.newt(), function (_r181_leti1, r182_t) {
                            return r182_t = _r181_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r182_t,
                                    [
                                        '.',
                                        r180_x,
                                        r181_p[0]
                                    ]
                                ],
                                r181_p[1].whether(r182_t)
                            ];
                        }(_r181_t5));
                    })).filter(r118_boole);
                },
                'assign': function _r178_t6(r183_x, r183_locallyQ) {
                    return ['.begin'].concat(r178_ms.map(function _r183_t2(r184_p) {
                        var r184_key, _r184_t5, _r184_t0 = r184_p[0];
                        return Array.isArray(_r184_t0) && _r184_t0.length === 2 && '.quote' === _r184_t0[0] ? (r184_key = _r184_t0[1], r184_p[1].assign([
                            '.',
                            r183_x,
                            r184_p[0]
                        ], r183_locallyQ)) : (_r184_t5 = r178_env.newt(), function (_r184_leti1, r185_t) {
                            return r185_t = _r184_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r185_t,
                                    [
                                        '.',
                                        r183_x,
                                        r184_p[0]
                                    ]
                                ],
                                r184_p[1].assign(r185_t, r183_locallyQ)
                            ];
                        }(_r184_t5));
                    }).concat([r183_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('.quasiquote', {}), r118_externs.macros.get('.quasiquote').toPattern = function _r118_t30(r186_pattern, r186_env, r186_wrapper) {
            var r186_subpatterns, _r186_t0;
            return _r186_t0 = r186_pattern, Array.isArray(_r186_t0) && _r186_t0.length >= 1 && '.quasiquote' === _r186_t0[0] ? (r186_subpatterns = _r186_t0.slice(1), r118_toPattern(r1_deQuasiquote(r186_pattern[1], 0, r186_env), r186_env, r186_wrapper)) : void 0;
        }, r118_externs.macros.put('.operatorPiece', {}), r118_externs.macros.get('.operatorPiece').toPattern = function _r118_t31(r187_pattern, r187_env, r187_wrapper) {
            return r118_toPattern(r1_opSegToRegular(r187_pattern.slice(1), r187_env), r187_env, r187_wrapper);
        }, r118_externs.macros.put('&&', {}), r118_externs.macros.get('&&').toPattern = function _r118_t32(r188_pattern, r188_env, r188_wrapper) {
            var r188_subpatterns, r188_ms, _r188_t0 = r188_pattern;
            return Array.isArray(_r188_t0) && _r188_t0.length >= 1 && '&&' === _r188_t0[0] ? (r188_subpatterns = _r188_t0.slice(1), r188_ms = r188_subpatterns.map(function _r188_t4(r189_x) {
                return r118_toPattern(r189_x, r188_env, r188_wrapper);
            }), {
                'whether': function _r188_t5(r190_x) {
                    var r190_f = ['&&'].concat(r188_ms.map(function _r190_t2(r191_p, r191_j) {
                        return r191_p.whether(r190_x);
                    })).filter(r118_boole);
                    return r190_f.length === 1 ? [
                        '.quote',
                        !0
                    ] : r190_f;
                },
                'assign': function _r188_t6(r192_x, r192_locallyQ) {
                    return ['.begin'].concat(r188_ms.map(function _r192_t2(r193_p, r193_j) {
                        return r193_p.assign(r192_x, r192_locallyQ);
                    }).concat([r192_x]));
                }
            }) : void 0;
        }, r118_externs.macros.put('||', {}), r118_externs.macros.get('||').toPattern = function _r118_t33(r194_pattern, r194_env, r194_wrapper) {
            var r194_subpatterns, r194_ms, _r194_t0 = r194_pattern;
            return Array.isArray(_r194_t0) && _r194_t0.length >= 1 && '||' === _r194_t0[0] ? (r194_subpatterns = _r194_t0.slice(1), r194_ms = r194_subpatterns.map(function _r194_t4(r195_x) {
                return r118_toPattern(r195_x, r194_env, r194_wrapper);
            }), {
                'whether': function _r194_t5(r196_x) {
                    return ['||'].concat(r194_ms.map(function _r196_t2(r197_p, r197_j) {
                        return r197_p.whether(r196_x);
                    })).filter(r118_boole);
                },
                'assign': function _r194_t6(r198_x, r198_locallyQ) {
                    return ['.unit'];
                }
            }) : void 0;
        };
        var r118_boole = function _r118_t34(r199_x) {
            return !!r199_x;
        };
        return r118_externs.macros.put('match', function _r118_t35(r200_form, r200_env, r200_wrapper) {
            var r200_pattern, r200_guard, r200_body, r200_pat, r200_cond, r200_tc, _r200_t0, r200_pairs = r200_form.slice(2), r200_t = r200_env.newt(), r200_f = ['.unit'], r200_j = r200_pairs.length - 1;
            for (; r200_j >= 0; r200_j -= 1)
                _r200_t0 = r200_pairs[r200_j], r200_f = Array.isArray(_r200_t0) && _r200_t0.length === 2 ? (r200_pattern = _r200_t0[0], r200_body = _r200_t0[1], r200_pat = r118_toPattern(r200_pattern, r200_env, r200_wrapper), r200_cond = r200_pat.whether(r200_t), r200_cond ? [
                    '.if',
                    r200_cond,
                    [
                        '.begin',
                        r200_pat.assign(r200_t, !0),
                        r1_ex(r200_body, r200_env)
                    ],
                    r200_f
                ] : [
                    '.begin',
                    r200_pat.assign(r200_t, !0),
                    r1_ex(r200_body, r200_env)
                ]) : Array.isArray(_r200_t0) && _r200_t0.length === 3 ? (r200_pattern = _r200_t0[0], r200_guard = _r200_t0[1], r200_body = _r200_t0[2], r200_pat = r118_toPattern(r200_pattern, r200_env, r200_wrapper), r200_cond = r200_pat.whether(r200_t), r200_cond ? (r200_tc = r200_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r200_tc,
                        [
                            '.quote',
                            !1
                        ]
                    ],
                    [
                        '.if',
                        r200_cond,
                        [
                            '.begin',
                            r200_pat.assign(r200_t, !0),
                            [
                                '.if',
                                r1_ex(r200_guard, r200_env),
                                [
                                    '.set',
                                    r200_tc,
                                    [
                                        '.quote',
                                        !0
                                    ]
                                ],
                                [
                                    '.set',
                                    r200_tc,
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
                        r200_tc,
                        r1_ex(r200_body, r200_env),
                        r200_f
                    ]
                ]) : [
                    '.begin',
                    r200_pat.assign(r200_t, !0),
                    [
                        '.if',
                        r1_ex(r200_guard, r200_env),
                        r1_ex(r200_body, r200_env),
                        r200_f
                    ]
                ]) : r200_f;
            return [
                '.begin',
                [
                    '.set',
                    r200_t,
                    r1_ex(r200_form[1], r200_env)
                ],
                r200_f
            ];
        }), r118_externs.macros.put('matches', function _r118_t36(r201_form, r201_env, r201_wrapper) {
            var r201_whatever, r201_obj, r201_pattern, r201_pat, r201_t, r201_cond, _r201_t0 = r201_form;
            return Array.isArray(_r201_t0) && _r201_t0.length === 3 ? (r201_whatever = _r201_t0[0], r201_obj = _r201_t0[1], r201_pattern = _r201_t0[2], r201_pat = r118_toPattern(r201_pattern, r201_env), r201_t = r201_env.newt(), r201_cond = r201_pat.whether(r201_t), r201_cond ? [
                '.begin',
                [
                    '.set',
                    r201_t,
                    r1_ex(r201_obj, r201_env)
                ],
                r201_pat.whether(r201_t)
            ] : [
                '.quote',
                !0
            ]) : void 0;
        }), r118_externs.macros.put('<~>', r118_externs.macros.get('matches')), r118_externs.operatorInfo.put('<~>', {
            'priority': 400,
            'associvity': 'never'
        }), r118_externs.macros.put('regex', function _r118_t37(r202_form, r202_env) {
            var r202_args, r202_s, r202_flag, _r202_t0;
            return _r202_t0 = r202_form, Array.isArray(_r202_t0) && _r202_t0.length === 2 && 'regex' === _r202_t0[0] && Array.isArray(_r202_t0[1]) && _r202_t0[1].length === 2 && '.quote' === _r202_t0[1][0] ? (r202_s = _r202_t0[1][1], _r202_t0[1], [
                '.quote',
                new RegExp(r202_s)
            ]) : Array.isArray(_r202_t0) && _r202_t0.length === 3 && 'regex' === _r202_t0[0] && Array.isArray(_r202_t0[1]) && _r202_t0[1].length === 2 && '.quote' === _r202_t0[1][0] && Array.isArray(_r202_t0[2]) && _r202_t0[2].length === 2 && '.quote' === _r202_t0[2][0] ? (r202_s = _r202_t0[1][1], _r202_t0[1], r202_flag = _r202_t0[2][1], _r202_t0[2], [
                '.quote',
                new RegExp(r202_s, r202_flag)
            ]) : Array.isArray(_r202_t0) && _r202_t0.length >= 1 && 'regex' === _r202_t0[0] ? (r202_args = _r202_t0.slice(1), [
                '.new',
                r118_externs.use('RegExp')
            ].concat(r202_args)) : void 0;
        }), r118_externs.macros.put('define-macro', function _r118_t38(r203_form, r203_env) {
            var r203_op, r203_name, r203_body, r203_coinit, r203_ds, r203_imports, r203_names, r203_assignments, r203_macroG, r203_macroFn, r203_str, _r203_t1, _r203_t0 = r203_form;
            return Array.isArray(_r203_t0) && _r203_t0.length === 3 && Array.isArray(_r203_t0[1]) && _r203_t0[1].length === 2 && '.quote' === _r203_t0[1][0] ? (r203_op = _r203_t0[0], r203_str = _r203_t0[1][1], _r203_t0[1], r203_body = _r203_t0[2], r1_ex([
                r203_op,
                r203_str,
                r203_body
            ], r203_env)) : (_r203_t1 = !1, Array.isArray(_r203_t0) && _r203_t0.length === 3 && (r203_op = _r203_t0[0], r203_name = _r203_t0[1], r203_body = _r203_t0[2], r1_atom(r203_name) ? _r203_t1 = !0 : _r203_t1 = !1), _r203_t1 ? (r203_coinit = {
                'injectForm': void 0,
                'initFn': void 0
            }, r203_ds = new r1_Scope(r203_env), r203_imports = {
                'ex': r1_ex,
                'atom': r1_wrapForSyntacticClosure(r1_atom),
                'prim': r1_wrapForSyntacticClosure(r1_prim),
                'formOf': function _r203_t6(r204_x) {
                    return r204_x[1];
                },
                'scopeOf': function _r203_t7(r205_x) {
                    return r205_x[2];
                },
                'definingEnv': r203_env,
                'externEnv': r118_externs,
                'require': require,
                'toPattern': r118_toPattern,
                'coinit': r203_coinit,
                'FormInvalidError': r1_FormInvalidError,
                'deQuasiquote': r1_deQuasiquote,
                'opSegToRegular': r1_opSegToRegular
            }, r203_names = Object.keys(r203_imports), r203_ds.declare('$', !0), r203_assignments = ['.begin'].concat(r203_names.map(function _r203_t8(r206_name) {
                return [
                    'local',
                    r206_name,
                    [
                        '.',
                        '$',
                        [
                            '.quote',
                            r206_name
                        ]
                    ]
                ];
            })), r203_macroG = new Function(r203_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
                '.return',
                r1_ex([
                    '.begin',
                    r203_assignments,
                    r203_body
                ], r203_ds)
            ], r203_ds, function _r203_t9(r207_form) {
                return [
                    '.return',
                    r207_form
                ];
            }))), r203_macroFn = r203_macroG(r203_imports), r203_env.macros.put(r203_name, function _r203_t10(r208_c, r208_e) {
                var r208_result = r203_macroFn(r208_c, r208_e), r208_s = new r1_Scope(r203_env);
                return r208_s.hanging = r208_e, r208_s.semiparent = r208_e, r1_ex(r208_result, r208_s);
            }), r203_coinit.initFn && r203_coinit.initFn(r203_env.macros.get(r203_name)), r203_coinit.injectForm ? r1_ex(r203_coinit.injectForm, r203_env) : ['.unit']) : ['.unit']);
        }), r118_externs.macros.put('macro-match', function _r118_t39(r209_form, r209_env) {
            var r209_c, r209_e, r209_patterns, r209_t, r209_tx, r209_tw, _r209_t0 = r209_form;
            return Array.isArray(_r209_t0) && _r209_t0.length >= 3 && 'macro-match' === _r209_t0[0] ? (r209_c = _r209_t0[1], r209_e = _r209_t0[2], r209_patterns = _r209_t0.slice(3), r209_t = r209_env.newt(), r209_tx = r209_env.newt(), r209_tw = r209_env.newt(), [
                '.begin',
                [
                    '.set',
                    r209_t,
                    r209_e
                ],
                [
                    '.set',
                    r209_tw,
                    [
                        '.lambda',
                        [r209_tx],
                        [
                            '.return',
                            [
                                '.list',
                                [
                                    '.quote',
                                    '.syntactic-closure'
                                ],
                                r209_tx,
                                r209_t
                            ]
                        ]
                    ]
                ],
                r118_externs.macros.get('match')([
                    'match',
                    r209_c
                ].concat(r209_patterns), r209_env, r209_tw)
            ]) : ['.unit'];
        }), r118_externs.pFamily = 'r', r118_externs;
    };
exports.Create = r1_Create;
