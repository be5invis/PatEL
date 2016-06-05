'use strict';
var _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, r1_patrisika = require('patrisika'), r1_atom = function _r1_t6(r118_x) {
        return typeof r118_x === 'string';
    }, r1_identifier = function _r1_t7(r119_x) {
        return r1_atom(r119_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r119_x);
    }, r1_prim = function _r1_t8(r120_x) {
        return r1_atom(r120_x) && !r1_identifier(r120_x);
    }, r1_Scope = require('patrisika').Scope, r1_escodegen = require('escodegen'), r1_util = require('util'), r1_exlib = require('./ex'), r1_ex = r1_exlib.ex, r1_deQuasiquote = r1_exlib.deQuasiquote, r1_opSegToRegular = r1_exlib.opSegToRegular, r1_FormInvalidError = r1_exlib.FormInvalidError, r1_wrapForSyntacticClosure = function _r1_t9(r121_fn) {
        return function _r121_t2(r122_x) {
            var r122_c, r122_e, _r122_t0 = r122_x;
            return Array.isArray(_r122_t0) && _r122_t0.length === 3 && '.syntactic-closure' === _r122_t0[0] ? (r122_c = _r122_t0[1], r122_e = _r122_t0[2], r121_fn(r122_c)) : r121_fn(r122_x);
        };
    }, r1_Create = function _r1_t10() {
        var r123_externs = r1_patrisika.DefaultExterns();
        r123_externs.castName = function _r123_t2(r124_name) {
            return r124_name;
        }, r123_externs.declare('require'), r123_externs.declare('exports'), r123_externs.declare('process'), r123_externs.declare('module'), r123_externs.declare('Error');
        var r123_operatorRename = function _r123_t3(r125_op) {
                return function _r125_t2(r126_form, r126_env) {
                    return r1_ex([r125_op].concat(r126_form.slice(1)), r126_env);
                };
            }, r123_reportInvalid = function _r123_t4(r127_form, r127_reason) {
                throw new r1_FormInvalidError(r127_form, r127_reason);
            };
        r123_externs.macros.put('begin', r123_operatorRename('.begin')), r123_externs.macros.put('then', r123_operatorRename('.begin')), r123_externs.macros.put('else', r123_operatorRename('.begin')), r123_externs.macros.put('while', r123_operatorRename('.while')), r123_externs.macros.put('try', r123_operatorRename('.try')), r123_externs.macros.put('is', r123_operatorRename('.is')), r123_externs.macros.put('<@', r123_operatorRename('.is')), r123_externs.macros.put('new', r123_operatorRename('.new')), r123_externs.macros.put('this', r123_operatorRename('.thisp')), r123_externs.macros.put('arguments', r123_operatorRename('.argsp')), r123_externs.macros.put('and', r123_operatorRename('&&')), r123_externs.macros.put('or', r123_operatorRename('||')), r123_externs.macros.put('not', r123_operatorRename('!')), r123_externs.macros.put('return', r123_operatorRename('.return')), r123_externs.macros.put('break', r123_operatorRename('.break')), r123_externs.macros.put('yield', r123_operatorRename('.yield')), r123_externs.macros.put('throw', r123_operatorRename('.throw')), r123_externs.macros.put('list', r123_operatorRename('.list')), r123_externs.macros.put('typeof', r123_operatorRename('.typeof')), r123_externs.macros.put('quasiquote', r123_operatorRename('.quasiquote')), r123_externs.macros.put('syntax', r123_operatorRename('.quasiquote')), r123_externs.macros.put('lambda', function _r123_t5(r128_form, r128_env) {
            var r128_otherwise, r128_car, r128_body, r128_parameters, _r128_t0 = r128_form, _r128_t1 = !1;
            return Array.isArray(_r128_t0) && _r128_t0.length === 3 && (r128_car = _r128_t0[0], r128_parameters = _r128_t0[1], r128_body = _r128_t0[2], r1_atom(r128_parameters) ? _r128_t1 = !0 : _r128_t1 = !1), _r128_t1 ? r1_ex([
                '.lambda',
                [r128_parameters],
                r128_body
            ], r128_env) : Array.isArray(_r128_t0) && _r128_t0.length === 3 ? (r128_car = _r128_t0[0], r128_parameters = _r128_t0[1], r128_body = _r128_t0[2], r1_ex([
                '.lambda',
                r128_parameters,
                r128_body
            ], r128_env)) : Array.isArray(_r128_t0) && _r128_t0.length === 2 ? (r128_car = _r128_t0[0], r128_body = _r128_t0[1], r1_ex([
                '.lambda',
                [],
                r128_body
            ], r128_env)) : Array.isArray(_r128_t0) && _r128_t0.length === 1 ? (r128_car = _r128_t0[0], r1_ex([
                '.lambda',
                [],
                ['.unit']
            ], r128_env)) : (r128_otherwise = _r128_t0, r123_reportInvalid(r128_otherwise, 'Invalid Lambda Formation'));
        }), r123_externs.macros.put('function', r123_externs.macros.get('lambda')), r123_externs.macros.put('->', r123_externs.macros.get('lambda')), r123_externs.macros.put('=>', r123_externs.macros.get('lambda')), r123_externs.operatorInfo.put('->', {
            'priority': 900,
            'associvity': 'right'
        }), r123_externs.operatorInfo.put('=>', {
            'priority': 950,
            'associvity': 'right'
        }), r123_externs.macros.put('.prefix.-', function _r123_t6(r129_form, r129_env) {
            return [
                '-',
                r1_ex(r129_form[1], r129_env)
            ];
        }), r123_externs.macros.put('.prefix.+', function _r123_t7(r130_form, r130_env) {
            return [
                '+',
                r1_ex(r130_form[1], r130_env)
            ];
        }), r123_externs.macros.put('.prefix.!', function _r123_t8(r131_form, r131_env) {
            return [
                '!',
                r1_ex(r131_form[1], r131_env)
            ];
        }), r123_externs.macros.put('.prefix.*', function _r123_t9(r132_form, r132_env) {
            return r1_ex(r132_form[1], r132_env);
        }), r123_externs.macros.put('.prefix.=', function _r123_t10(r133_form, r133_env) {
            return r1_ex(r133_form[1], r133_env);
        }), r123_externs.macros.put('if', function _r123_t11(r134_form, r134_env) {
            var r134_otherwise, r134_test, r134_consequents, r134_alternates, r134_consequent, r134_alternate, _r134_t0 = r134_form;
            return Array.isArray(_r134_t0) && _r134_t0.length === 3 && 'if' === _r134_t0[0] ? (r134_test = _r134_t0[1], r134_consequent = _r134_t0[2], r1_ex([
                '.if',
                r134_test,
                r134_consequent
            ], r134_env)) : Array.isArray(_r134_t0) && _r134_t0.length === 4 && 'if' === _r134_t0[0] ? (r134_test = _r134_t0[1], r134_consequent = _r134_t0[2], r134_alternate = _r134_t0[3], r1_ex([
                '.if',
                r134_test,
                r134_consequent,
                r134_alternate
            ], r134_env)) : Array.isArray(_r134_t0) && _r134_t0.length === 3 && 'if' === _r134_t0[0] && Array.isArray(_r134_t0[2]) && _r134_t0[2].length >= 1 && 'then' === _r134_t0[2][0] ? (r134_test = _r134_t0[1], r134_consequents = _r134_t0[2].slice(1), _r134_t0[2], r1_ex([
                '.if',
                r134_test,
                ['.begin'].concat(r134_consequents)
            ], r134_env)) : Array.isArray(_r134_t0) && _r134_t0.length === 4 && 'if' === _r134_t0[0] && Array.isArray(_r134_t0[2]) && _r134_t0[2].length >= 1 && 'then' === _r134_t0[2][0] && Array.isArray(_r134_t0[3]) && _r134_t0[3].length >= 1 && 'else' === _r134_t0[3][0] ? (r134_test = _r134_t0[1], r134_consequents = _r134_t0[2].slice(1), _r134_t0[2], r134_alternates = _r134_t0[3].slice(1), _r134_t0[3], r1_ex([
                '.if',
                r134_test,
                ['.begin'].concat(r134_consequents),
                ['.begin'].concat(r134_alternates)
            ], r134_env)) : (r134_otherwise = _r134_t0, r123_reportInvalid(r134_otherwise, 'Invalid Conditional Form'));
        }), r123_externs.macros.put('let', function _r123_t12(r135_form, r135_env) {
            var r135_arg, r135_t, r135_param, _r135_t0, _r135_t1, r135_pairs = r135_form.slice(1, -1), r135_args = [], r135_paras = [], r135_decls = ['.begin'], r135_j = 0;
            for (; r135_j < r135_pairs.length; r135_j += 1)
                if (_r135_t0 = r135_pairs[r135_j], Array.isArray(_r135_t0) && _r135_t0.length === 2)
                    r135_arg = _r135_t0[0], r135_param = _r135_t0[1], r135_t = r135_env.newt('leti'), r135_args.push(r135_t), r135_paras.push(r135_param), r135_decls.push([
                        'define',
                        r135_arg,
                        r135_t
                    ]);
                else {
                    if (_r135_t1 = !1, Array.isArray(_r135_t0) && _r135_t0.length === 1 && (r135_arg = _r135_t0[0], r1_atom(r135_arg) ? _r135_t1 = !0 : _r135_t1 = !1), !_r135_t1)
                        throw new r1_FormInvalidError(r135_pairs[r135_j], 'Invalid [let] subpattern');
                    r135_t = r135_env.newt('leti'), r135_args.push(r135_t), r135_paras.push(r135_env.use(r135_arg)), r135_decls.push([
                        'define',
                        r135_arg,
                        r135_t
                    ]);
                }
            return r1_ex([
                '.beta',
                r135_args,
                [
                    '.begin',
                    r135_decls,
                    r135_form[r135_form.length - 1]
                ]
            ].concat(r135_paras), r135_env);
        }), r123_externs.macros.put('letrec', function _r123_t13(r136_form, r136_env) {
            var r136_arg, r136_param, _r136_t0, r136_pairs = r136_form.slice(1, -1), r136_decls = ['.begin'], r136_j = 0;
            for (; r136_j < r136_pairs.length; r136_j += 1) {
                if (_r136_t0 = r136_pairs[r136_j], !(Array.isArray(_r136_t0) && _r136_t0.length === 2))
                    throw new r1_FormInvalidError(r136_pairs[r136_j], 'Invalid [letrec] subpattern');
                r136_arg = _r136_t0[0], r136_param = _r136_t0[1], r136_decls.push([
                    'local',
                    r136_arg,
                    r136_param
                ]);
            }
            return r1_ex([
                '.beta',
                [],
                [
                    '.begin',
                    r136_decls,
                    r136_form[r136_form.length - 1]
                ]
            ], r136_env);
        }), r123_externs.macros.put('object', function _r123_t14(r137_form, r137_env) {
            if (r137_form[1] && r137_form[1][0] === '.xhash')
                return r1_ex(r137_form[1], r137_env);
            var r137_pairs = r137_form.slice(1).map(function _r137_t2(r138_pair) {
                var r138_method, r138_param, r138_value, r138_property, _r138_t1, _r138_t2, _r138_t3, _r138_t4, _r138_t5, _r138_t6, _r138_t0 = r138_pair, _r138_t7 = !1;
                return Array.isArray(_r138_t0) && _r138_t0.length === 3 && '=' === _r138_t0[0] && (r138_property = _r138_t0[1], r138_value = _r138_t0[2], r1_atom(r138_property) ? _r138_t7 = !0 : _r138_t7 = !1), _r138_t7 ? [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_value
                ] : (_r138_t6 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 3 && '=' === _r138_t0[0] && (r138_property = _r138_t0[1], r138_value = _r138_t0[2], r1_atom(r138_property) ? _r138_t6 = !0 : _r138_t6 = !1), _r138_t6 ? [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_value
                ] : (_r138_t5 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 2 && (r138_property = _r138_t0[0], r138_value = _r138_t0[1], r1_atom(r138_property) ? _r138_t5 = !0 : _r138_t5 = !1), _r138_t5 ? [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_value
                ] : (_r138_t4 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 1 && (r138_property = _r138_t0[0], r1_atom(r138_property) ? _r138_t4 = !0 : _r138_t4 = !1), _r138_t4 ? [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_property
                ] : (r138_property = _r138_t0, r1_atom(r138_property) ? [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_property
                ] : Array.isArray(_r138_t0) && _r138_t0.length === 3 && '=' === _r138_t0[0] && Array.isArray(_r138_t0[1]) && _r138_t0[1].length === 2 && '.quote' === _r138_t0[1][0] ? (r138_property = _r138_t0[1][1], _r138_t0[1], r138_value = _r138_t0[2], [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_value
                ]) : Array.isArray(_r138_t0) && _r138_t0.length === 3 && '=' === _r138_t0[0] && Array.isArray(_r138_t0[1]) && _r138_t0[1].length === 2 && '.quote' === _r138_t0[1][0] ? (r138_property = _r138_t0[1][1], _r138_t0[1], r138_value = _r138_t0[2], [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_value
                ]) : Array.isArray(_r138_t0) && _r138_t0.length === 2 && Array.isArray(_r138_t0[0]) && _r138_t0[0].length === 2 && '.quote' === _r138_t0[0][0] ? (r138_property = _r138_t0[0][1], _r138_t0[0], r138_value = _r138_t0[1], [
                    [
                        '.quote',
                        r138_property
                    ],
                    r138_value
                ]) : (_r138_t3 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 3 && '=' === _r138_t0[0] && Array.isArray(_r138_t0[1]) && _r138_t0[1].length >= 1 && (r138_method = _r138_t0[1][0], r138_param = _r138_t0[1].slice(1), _r138_t0[1], r138_value = _r138_t0[2], r1_atom(r138_method) ? _r138_t3 = !0 : _r138_t3 = !1), _r138_t3 ? [
                    [
                        '.quote',
                        r138_method
                    ],
                    [
                        '.lambda',
                        r138_param,
                        r138_value
                    ]
                ] : (_r138_t2 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 3 && '=' === _r138_t0[0] && Array.isArray(_r138_t0[1]) && _r138_t0[1].length >= 1 && (r138_method = _r138_t0[1][0], r138_param = _r138_t0[1].slice(1), _r138_t0[1], r138_value = _r138_t0[2], r1_atom(r138_method) ? _r138_t2 = !0 : _r138_t2 = !1), _r138_t2 ? [
                    [
                        '.quote',
                        r138_method
                    ],
                    [
                        '.lambda',
                        r138_param,
                        r138_value
                    ]
                ] : (_r138_t1 = !1, Array.isArray(_r138_t0) && _r138_t0.length === 2 && Array.isArray(_r138_t0[0]) && _r138_t0[0].length >= 1 && (r138_method = _r138_t0[0][0], r138_param = _r138_t0[0].slice(1), _r138_t0[0], r138_value = _r138_t0[1], r1_atom(r138_method) ? _r138_t1 = !0 : _r138_t1 = !1), _r138_t1 ? [
                    [
                        '.quote',
                        r138_method
                    ],
                    [
                        '.lambda',
                        r138_param,
                        r138_value
                    ]
                ] : void 0)))))));
            });
            return r1_ex(['.xhash'].concat(r137_pairs.filter(function _r137_t3(r139_x) {
                return r139_x;
            })), r137_env);
        }), r123_externs.macros.get('list').toPattern = function _r123_t15(r140_form, r140_env, r140_config) {
            return r123_toPattern(['.list'].concat(r140_form.slice(1)), r140_env, r140_config);
        }, r123_externs.macros.get('object').toPattern = function _r123_t16(r141_form, r141_env, r141_config) {
            var r141_pairs = r141_form.slice(1).map(function _r141_t2(r142_pair) {
                var r142_property, r142_value, _r142_t1, _r142_t2, _r142_t3, _r142_t0 = r142_pair, _r142_t4 = !1;
                if (Array.isArray(_r142_t0) && _r142_t0.length === 3 && '=' === _r142_t0[0] && (r142_property = _r142_t0[1], r142_value = _r142_t0[2], r1_atom(r142_property) ? _r142_t4 = !0 : _r142_t4 = !1), _r142_t4)
                    return [
                        r142_property,
                        r142_value
                    ];
                else if (_r142_t3 = !1, Array.isArray(_r142_t0) && _r142_t0.length === 3 && '=' === _r142_t0[0] && (r142_property = _r142_t0[1], r142_value = _r142_t0[2], r1_atom(r142_property) ? _r142_t3 = !0 : _r142_t3 = !1), _r142_t3)
                    return [
                        r142_property,
                        r142_value
                    ];
                else if (_r142_t2 = !1, Array.isArray(_r142_t0) && _r142_t0.length === 2 && (r142_property = _r142_t0[0], r142_value = _r142_t0[1], r1_atom(r142_property) ? _r142_t2 = !0 : _r142_t2 = !1), _r142_t2)
                    return [
                        r142_property,
                        r142_value
                    ];
                else if (_r142_t1 = !1, Array.isArray(_r142_t0) && _r142_t0.length === 1 && (r142_property = _r142_t0[0], r1_atom(r142_property) ? _r142_t1 = !0 : _r142_t1 = !1), _r142_t1)
                    return [
                        r142_property,
                        r142_property
                    ];
                else if (r142_property = _r142_t0, r1_atom(r142_property))
                    return [
                        r142_property,
                        r142_property
                    ];
                else if (Array.isArray(_r142_t0) && _r142_t0.length === 3 && '=' === _r142_t0[0] && Array.isArray(_r142_t0[1]) && _r142_t0[1].length === 2 && '.quote' === _r142_t0[1][0])
                    return r142_property = _r142_t0[1][1], _r142_t0[1], r142_value = _r142_t0[2], [
                        r142_property,
                        r142_value
                    ];
                else if (Array.isArray(_r142_t0) && _r142_t0.length === 3 && '=' === _r142_t0[0] && Array.isArray(_r142_t0[1]) && _r142_t0[1].length === 2 && '.quote' === _r142_t0[1][0])
                    return r142_property = _r142_t0[1][1], _r142_t0[1], r142_value = _r142_t0[2], [
                        r142_property,
                        r142_value
                    ];
                else if (Array.isArray(_r142_t0) && _r142_t0.length === 2 && Array.isArray(_r142_t0[0]) && _r142_t0[0].length === 2 && '.quote' === _r142_t0[0][0])
                    return r142_property = _r142_t0[0][1], _r142_t0[0], r142_value = _r142_t0[1], [
                        r142_property,
                        r142_value
                    ];
                else
                    throw new r1_FormInvalidError(r141_form, 'Invalid Assignment Left-hand Side');
            });
            return r123_toPattern(['.hash'].concat(r141_pairs), r141_env, r141_config);
        }, r123_externs.macros.put('piecewise', function _r123_t17(r143_form, r143_env) {
            var r143_pairs, r143_f, r143_j, r143_otherwise, r143_condition, r143_consequent, _r143_t1, _r143_t0 = r143_form;
            if (Array.isArray(_r143_t0) && _r143_t0.length >= 1 && 'piecewise' === _r143_t0[0]) {
                for (r143_pairs = _r143_t0.slice(1), r143_f = ['.unit'], r143_j = r143_pairs.length - 1; r143_j >= 0; r143_j -= 1) {
                    if (_r143_t1 = r143_pairs[r143_j], !(Array.isArray(_r143_t1) && _r143_t1.length === 2))
                        throw r143_otherwise = _r143_t1, new r1_FormInvalidError(r143_otherwise, 'Invalid Piecewise Segment');
                    r143_condition = _r143_t1[0], r143_consequent = _r143_t1[1], r143_f = [
                        '.if',
                        r1_ex(r143_condition, r143_env),
                        r1_ex(r143_consequent, r143_env),
                        r143_f
                    ];
                }
                return r143_f;
            } else
                return void 0;
        });
        var r123_AssignWithMod = function _r123_t18(r144_left, r144_right, r144_mod, r144_env, r144_locallyQ) {
                var r144_callee, r144_paras, r144_pat, r144_t, r144_whatever, r144_a, r144_e, r144_x, _r144_t1, _r144_t2, _r144_t3, _r144_t4, _r144_t5, _r144_t6, _r144_t0 = r144_left, r144_id = _r144_t0;
                if (r1_atom(r144_id))
                    return r144_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r144_id,
                            (r144_locallyQ || 1) - 1
                        ], r144_env),
                        r1_ex([
                            r144_mod,
                            r144_right
                        ], r144_env)
                    ] : [
                        '.set',
                        r1_ex(r144_left, r144_env),
                        r1_ex([
                            r144_mod,
                            r144_right
                        ], r144_env)
                    ];
                else if (_r144_t6 = !1, Array.isArray(_r144_t0) && _r144_t0.length === 2 && '.id' === _r144_t0[0] && (r144_id = _r144_t0[1], r1_atom(r144_id) ? _r144_t6 = !0 : _r144_t6 = !1), _r144_t6)
                    return r144_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r144_id,
                            (r144_locallyQ || 1) - 1
                        ], r144_env),
                        r1_ex([
                            r144_mod,
                            r144_right
                        ], r144_env)
                    ] : [
                        '.set',
                        r1_ex(r144_left, r144_env),
                        r1_ex([
                            r144_mod,
                            r144_right
                        ], r144_env)
                    ];
                else if (_r144_t5 = !1, Array.isArray(_r144_t0) && _r144_t0.length === 3 && '.id' === _r144_t0[0] && (r144_id = _r144_t0[1], r144_e = _r144_t0[2], r1_atom(r144_id) && (r144_e === r144_env || !r144_locallyQ) ? _r144_t5 = !0 : _r144_t5 = !1), _r144_t5)
                    return r144_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r144_id,
                            (r144_locallyQ || 1) - 1
                        ], r144_e),
                        r1_ex([
                            r144_mod,
                            r144_right
                        ], r144_e)
                    ] : [
                        '.set',
                        r1_ex(r144_left, r144_e),
                        r1_ex([
                            r144_mod,
                            r144_right
                        ], r144_e)
                    ];
                else if (_r144_t4 = !1, Array.isArray(_r144_t0) && _r144_t0.length === 3 && '.id' === _r144_t0[0] && (r144_id = _r144_t0[1], r144_e = _r144_t0[2], r1_atom(r144_id) && r144_e !== r144_env && r144_locallyQ ? _r144_t4 = !0 : _r144_t4 = !1), _r144_t4)
                    throw new r1_FormInvalidError(r144_left, 'Attempt to redefine non-local subform');
                else if (Array.isArray(_r144_t0) && _r144_t0.length === 3 && '.local' === _r144_t0[0])
                    return r144_a = _r144_t0[1], r144_x = _r144_t0[2], r123_AssignWithMod(r144_a, r144_right, r144_mod, r144_env, r144_x);
                else if (Array.isArray(_r144_t0) && _r144_t0.length === 2 && '.local' === _r144_t0[0])
                    return r144_a = _r144_t0[1], r123_AssignWithMod(r144_a, r144_right, r144_mod, r144_env, r144_locallyQ || !0);
                else if (_r144_t3 = !1, Array.isArray(_r144_t0) && _r144_t0.length === 3 && '.syntactic-closure' === _r144_t0[0] && (r144_a = _r144_t0[1], r144_e = _r144_t0[2], r144_e === r144_env || !r144_locallyQ ? _r144_t3 = !0 : _r144_t3 = !1), _r144_t3)
                    return r123_AssignWithMod(r144_a, r144_right, r144_mod, r144_env, r144_locallyQ);
                else if (_r144_t2 = !1, Array.isArray(_r144_t0) && _r144_t0.length === 3 && '.syntactic-closure' === _r144_t0[0] && (r144_a = _r144_t0[1], r144_e = _r144_t0[2], r144_e !== r144_env && r144_locallyQ ? _r144_t2 = !0 : _r144_t2 = !1), _r144_t2)
                    throw new r1_FormInvalidError(r144_left, 'Attempt to redefine non-local subform');
                else if (Array.isArray(_r144_t0) && _r144_t0.length >= 1 && '.revcall' === _r144_t0[0])
                    return r144_whatever = _r144_t0.slice(1), r123_AssignWithMod([].concat(r144_whatever), r144_right, r144_mod, r144_env, r144_locallyQ);
                else if (Array.isArray(_r144_t0) && _r144_t0.length >= 1)
                    if (r144_callee = _r144_t0[0], r144_paras = _r144_t0.slice(1), r1_atom(r144_callee) && r144_env.macros.has(r144_callee) && r144_env.macros.get(r144_callee).toPattern)
                        return r144_pat = r123_toPattern(r144_left, r144_env, {
                            'locally': r144_locallyQ,
                            'const': r144_locallyQ > 1,
                            'unchecked': r144_mod !== 'checked'
                        }), r144_t = r144_env.newt(), _r144_t1 = r144_mod, 'checked' === _r144_t1 ? [
                            '.begin',
                            [
                                '.set',
                                r144_t,
                                r1_ex([
                                    '.unquote',
                                    r144_right
                                ], r144_env)
                            ],
                            [
                                '.if',
                                r144_pat.whether(r144_t) || [
                                    '.quote',
                                    !0
                                ],
                                r144_pat.assign(r144_t, r144_locallyQ)
                            ]
                        ] : [
                            '.begin',
                            [
                                '.set',
                                r144_t,
                                r1_ex([
                                    r144_mod,
                                    r144_right
                                ], r144_env)
                            ],
                            r144_pat.assign(r144_t, r144_locallyQ)
                        ];
                    else if (r1_atom(r144_callee) && r144_env.macros.has(r144_callee))
                        throw new r1_FormInvalidError(r144_left, 'Invalid Assignment Left-hand Side');
                    else
                        return r1_prim(r144_callee) ? [
                            '.set',
                            r1_ex(r144_left, r144_env),
                            r1_ex([
                                r144_mod,
                                r144_right
                            ], r144_env)
                        ] : r1_atom(r144_callee) ? r144_locallyQ ? [
                            '.set',
                            r1_ex([
                                '.local',
                                r144_callee,
                                (r144_locallyQ || 1) - 1
                            ], r144_env),
                            r1_ex([
                                r144_mod,
                                [
                                    '.lambda',
                                    [].concat(r144_paras),
                                    r144_right
                                ]
                            ], r144_env)
                        ] : [
                            '.set',
                            r1_ex(r144_callee, r144_env),
                            r1_ex([
                                r144_mod,
                                [
                                    '.lambda',
                                    [].concat(r144_paras),
                                    r144_right
                                ]
                            ], r144_env)
                        ] : [
                            '.set',
                            r1_ex(r144_callee, r144_env),
                            r1_ex([
                                r144_mod,
                                [
                                    '.lambda',
                                    [].concat(r144_paras),
                                    r144_right
                                ]
                            ], r144_env)
                        ];
                else
                    throw new r1_FormInvalidError(r144_left, 'Invalid Assignment Left-hand Side');
            }, r123_Assign = function _r123_t19(r145_left, r145_right, r145_env, r145_locallyQ) {
                return r123_AssignWithMod(r145_left, r145_right, '.unquote', r145_env, r145_locallyQ);
            };
        r123_externs.macros.put('define', function _r123_t20(r146_form, r146_env) {
            var r146_any, r146_op, r146_left, r146_right, r146_modifer, _r146_t0 = r146_form;
            if (Array.isArray(_r146_t0) && _r146_t0.length === 4)
                return r146_op = _r146_t0[0], r146_modifer = _r146_t0[1], r146_left = _r146_t0[2], r146_right = _r146_t0[3], r123_AssignWithMod(r146_left, r146_right, r146_modifer, r146_env, 2);
            else if (Array.isArray(_r146_t0) && _r146_t0.length === 3)
                return r146_op = _r146_t0[0], r146_left = _r146_t0[1], r146_right = _r146_t0[2], r123_Assign(r146_left, r146_right, r146_env, 2);
            else
                throw r146_any = _r146_t0, new r1_FormInvalidError(r146_any, 'Invalid Assignment');
        }), r123_externs.macros.put('local', function _r123_t21(r147_form, r147_env) {
            var r147_any, r147_op, r147_left, r147_right, r147_modifer, _r147_t1, _r147_t0 = r147_form;
            if (Array.isArray(_r147_t0) && _r147_t0.length === 4)
                return r147_op = _r147_t0[0], r147_modifer = _r147_t0[1], r147_left = _r147_t0[2], r147_right = _r147_t0[3], r123_AssignWithMod(r147_left, r147_right, r147_modifer, r147_env, !0);
            else if (Array.isArray(_r147_t0) && _r147_t0.length === 3)
                return r147_op = _r147_t0[0], r147_left = _r147_t0[1], r147_right = _r147_t0[2], r123_Assign(r147_left, r147_right, r147_env, !0);
            else if (_r147_t1 = !1, Array.isArray(_r147_t0) && _r147_t0.length === 2 && (r147_op = _r147_t0[0], r147_left = _r147_t0[1], r1_atom(r147_left) ? _r147_t1 = !0 : _r147_t1 = !1), _r147_t1)
                return [
                    '.local',
                    r147_left
                ];
            else
                throw r147_any = _r147_t0, new r1_FormInvalidError(r147_any, 'Invalid Assignment');
        }), r123_externs.macros.put('const', r123_externs.macros.get('define')), r123_externs.macros.put('set', function _r123_t22(r148_form, r148_env) {
            var r148_any, r148_op, r148_left, r148_right, _r148_t0 = r148_form;
            if (Array.isArray(_r148_t0) && _r148_t0.length === 3)
                return r148_op = _r148_t0[0], r148_left = _r148_t0[1], r148_right = _r148_t0[2], r123_Assign(r148_left, r148_right, r148_env, !1);
            else
                throw r148_any = _r148_t0, new r1_FormInvalidError(r148_any, 'Invalid Assignment');
        }), r123_externs.macros.put('=', r123_externs.macros.get('set')), r123_externs.macros.put('inc', function _r123_t23(r149_form, r149_env) {
            var r149_op, r149_id, r149_shift, _r149_t0 = r149_form;
            return Array.isArray(_r149_t0) && _r149_t0.length === 2 ? (r149_op = _r149_t0[0], r149_id = _r149_t0[1], r123_Assign(r149_id, [
                '+',
                r149_id,
                [
                    '.quote',
                    1
                ]
            ], r149_env, !1)) : Array.isArray(_r149_t0) && _r149_t0.length === 3 ? (r149_op = _r149_t0[0], r149_id = _r149_t0[1], r149_shift = _r149_t0[2], r123_Assign(r149_id, [
                '+',
                r149_id,
                r149_shift
            ], r149_env, !1)) : Array.isArray(_r149_t0) && _r149_t0.length === 4 && 'by' === _r149_t0[2] ? (r149_op = _r149_t0[0], r149_id = _r149_t0[1], r149_shift = _r149_t0[3], r123_Assign(r149_id, [
                '+',
                r149_id,
                r149_shift
            ], r149_env, !1)) : void 0;
        }), r123_externs.macros.put('dec', function _r123_t24(r150_form, r150_env) {
            var r150_op, r150_id, r150_shift, _r150_t0 = r150_form;
            return Array.isArray(_r150_t0) && _r150_t0.length === 2 ? (r150_op = _r150_t0[0], r150_id = _r150_t0[1], r123_Assign(r150_id, [
                '-',
                r150_id,
                [
                    '.quote',
                    1
                ]
            ], r150_env, !1)) : Array.isArray(_r150_t0) && _r150_t0.length === 3 ? (r150_op = _r150_t0[0], r150_id = _r150_t0[1], r150_shift = _r150_t0[2], r123_Assign(r150_id, [
                '-',
                r150_id,
                r150_shift
            ], r150_env, !1)) : Array.isArray(_r150_t0) && _r150_t0.length === 4 && 'by' === _r150_t0[2] ? (r150_op = _r150_t0[0], r150_id = _r150_t0[1], r150_shift = _r150_t0[3], r123_Assign(r150_id, [
                '-',
                r150_id,
                r150_shift
            ], r150_env, !1)) : void 0;
        }), r123_externs.macros.put('for', function _r123_t25(r151_form, r151_env) {
            var r151_init, r151_test, r151_step, r151_body, _r151_t0 = r151_form;
            return Array.isArray(_r151_t0) && _r151_t0.length === 5 && 'for' === _r151_t0[0] ? (r151_init = _r151_t0[1], r151_test = _r151_t0[2], r151_step = _r151_t0[3], r151_body = _r151_t0[4], [
                '.begin',
                r1_ex(r151_init, r151_env),
                [
                    '.while',
                    r1_ex(r151_test, r151_env),
                    [
                        '.begin',
                        r1_ex(r151_body, r151_env),
                        r1_ex(r151_step, r151_env)
                    ]
                ]
            ]) : void 0;
        }), r123_externs.macros.put('this', ['.thisp']), r123_externs.macros.put('arguments', ['.argsp']), r123_externs.macros.put('nothing', ['.unit']), r123_externs.macros.put('undefined', ['.unit']), r123_externs.macros.put('null', [
            '.quote',
            null
        ]), r123_externs.macros.put('true', [
            '.quote',
            !0
        ]), r123_externs.macros.put('false', [
            '.quote',
            !1
        ]);
        var r123_toPattern = function _r123_t26(r152_pattern, r152_env, r152_config) {
            var r152_callee, r152_subpatterns, r152_ms, r152_t, r152_whatever, r152_x, _r152_t1, _r152_t0 = r152_pattern, r152_id = _r152_t0;
            if (r1_atom(r152_id))
                return {
                    'whether': function _r152_t5(r168_x) {
                        return null;
                    },
                    'assign': function _r152_t6(r169_x) {
                        return [
                            '.set',
                            r1_ex(r152_config && r152_config.locally ? [
                                '.local',
                                r152_id,
                                r152_config.const
                            ] : r152_id, r152_env),
                            r152_config && r152_config.wrapper ? [
                                r152_config.wrapper,
                                r169_x
                            ] : r169_x
                        ];
                    }
                };
            else if (_r152_t1 = !1, Array.isArray(_r152_t0) && _r152_t0.length === 2 && '.id' === _r152_t0[0] && (r152_id = _r152_t0[1], r1_atom(r152_id) ? _r152_t1 = !0 : _r152_t1 = !1), _r152_t1)
                return {
                    'whether': function _r152_t8(r166_x) {
                        return null;
                    },
                    'assign': function _r152_t9(r167_x) {
                        return [
                            '.set',
                            r1_ex(r152_config && r152_config.locally ? [
                                '.local',
                                r152_id,
                                r152_config.const
                            ] : r152_id, r152_env),
                            r152_config && r152_config.wrapper ? [
                                r152_config.wrapper,
                                r167_x
                            ] : r167_x
                        ];
                    }
                };
            else if (Array.isArray(_r152_t0) && _r152_t0.length === 2 && '.quote' === _r152_t0[0])
                return r152_x = _r152_t0[1], {
                    'whether': function _r152_t17(r164_x) {
                        return [
                            '===',
                            r1_ex(r152_pattern, r152_env),
                            r164_x
                        ];
                    },
                    'assign': function _r152_t18(r165_x) {
                        return ['.unit'];
                    }
                };
            else if (Array.isArray(_r152_t0) && _r152_t0.length >= 1 && '.' === _r152_t0[0])
                return r152_whatever = _r152_t0.slice(1), {
                    'whether': function _r152_t19(r162_x) {
                        return null;
                    },
                    'assign': function _r152_t20(r163_x) {
                        return [
                            '.set',
                            r1_ex(r152_pattern, r152_env),
                            r152_config && r152_config.wrapper ? [
                                r152_config.wrapper,
                                r163_x
                            ] : r163_x
                        ];
                    }
                };
            else if (Array.isArray(_r152_t0) && _r152_t0.length >= 1)
                if (r152_callee = _r152_t0[0], r152_subpatterns = _r152_t0.slice(1), r1_atom(r152_callee) && r152_env.macros.has(r152_callee) && r152_env.macros.get(r152_callee).toPattern)
                    return r152_env.macros.get(r152_callee).toPattern(r152_pattern, r152_env, r152_config);
                else if (r1_atom(r152_callee) && r152_env.macros.has(r152_callee) && !r152_env.macros.get(r152_callee).invokeAsAtom)
                    throw new r1_FormInvalidError(r152_pattern, 'Invalid Pattern');
                else
                    return r152_ms = r152_subpatterns.map(function _r152_t16(r153_x) {
                        return r123_toPattern(r153_x, r152_env, r152_config);
                    }), r152_t = r152_env.newt(), r152_config && r152_config.unchecked ? {
                        'whether': function _r152_t22(r154_x) {
                            return [
                                '&&',
                                [
                                    '.set',
                                    r152_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r152_callee, r152_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r154_x,
                                        [
                                            '.quote',
                                            r152_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r152_ms.map(function _r154_t2(r155_p, r155_j) {
                                return r155_p.whether([
                                    '.',
                                    r152_t,
                                    [
                                        '.quote',
                                        r155_j
                                    ]
                                ]);
                            })).filter(r123_boole);
                        },
                        'assign': function _r152_t23(r156_x, r156_locallyQ) {
                            return [
                                '.begin',
                                [
                                    '.set',
                                    r152_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r152_callee, r152_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r156_x,
                                        [
                                            '.quote',
                                            r152_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r152_ms.map(function _r156_t2(r157_p, r157_j) {
                                return r157_p.assign([
                                    '.',
                                    r152_t,
                                    [
                                        '.quote',
                                        r157_j
                                    ]
                                ], r156_locallyQ);
                            }));
                        }
                    } : {
                        'whether': function _r152_t24(r158_x) {
                            return [
                                '&&',
                                [
                                    '.set',
                                    r152_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r152_callee, r152_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r158_x,
                                        [
                                            '.quote',
                                            r152_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r152_ms.map(function _r158_t2(r159_p, r159_j) {
                                return r159_p.whether([
                                    '.',
                                    r152_t,
                                    [
                                        '.quote',
                                        r159_j
                                    ]
                                ]);
                            })).filter(r123_boole);
                        },
                        'assign': function _r152_t25(r160_x, r160_locallyQ) {
                            return ['.begin'].concat(r152_ms.map(function _r160_t2(r161_p, r161_j) {
                                return r161_p.assign([
                                    '.',
                                    r152_t,
                                    [
                                        '.quote',
                                        r161_j
                                    ]
                                ], r160_locallyQ);
                            }));
                        }
                    };
            else
                return void 0;
        };
        r123_externs.macros.put('.list', {}), r123_externs.macros.get('.list').toPattern = function _r123_t27(r170_pattern, r170_env, r170_config) {
            var r170_subpatterns, r170_ms, _r170_t0 = r170_pattern;
            return Array.isArray(_r170_t0) && _r170_t0.length >= 1 && '.list' === _r170_t0[0] ? (r170_subpatterns = _r170_t0.slice(1), r170_ms = r170_subpatterns.map(function _r170_t4(r171_x) {
                return r123_toPattern(r171_x, r170_env, r170_config);
            }), {
                'whether': function _r170_t5(r172_x) {
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r123_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r172_x
                        ],
                        [
                            '===',
                            [
                                '.',
                                r172_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r170_ms.length
                            ]
                        ]
                    ].concat(r170_ms.map(function _r172_t2(r173_p, r173_j) {
                        return r173_p.whether([
                            '.',
                            r172_x,
                            [
                                '.quote',
                                r173_j
                            ]
                        ]);
                    })).filter(r123_boole);
                },
                'assign': function _r170_t6(r174_x) {
                    return ['.begin'].concat(r170_ms.map(function _r174_t2(r175_p, r175_j) {
                        return r175_p.assign([
                            '.',
                            r174_x,
                            [
                                '.quote',
                                r175_j
                            ]
                        ]);
                    }).concat([r174_x]));
                }
            }) : void 0;
        }, r123_externs.macros.put('.conslist', {}), r123_externs.macros.get('.conslist').toPattern = function _r123_t28(r176_pattern, r176_env, r176_config) {
            var r176_subpatterns, r176_ms, r176_final, r176_fc, _r176_t0 = r176_pattern;
            return Array.isArray(_r176_t0) && _r176_t0.length >= 1 && '.conslist' === _r176_t0[0] ? (r176_subpatterns = _r176_t0.slice(1), r176_ms = r176_pattern.slice(1, -1).map(function _r176_t4(r177_x) {
                return r123_toPattern(r177_x, r176_env, r176_config);
            }), r176_final = r123_toPattern(r176_pattern[r176_pattern.length - 1], r176_env, (r176_fc = Object.create(r176_config), r176_fc.wrapper = null, r176_fc)), {
                'whether': function _r176_t5(r178_x) {
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r123_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r178_x
                        ],
                        [
                            '>=',
                            [
                                '.',
                                r178_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r176_ms.length
                            ]
                        ]
                    ].concat(r176_ms.map(function _r178_t2(r179_p, r179_j) {
                        return r179_p.whether([
                            '.',
                            r178_x,
                            [
                                '.quote',
                                r179_j
                            ]
                        ]);
                    }).concat([r176_final.whether([
                            [
                                '.',
                                r178_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r176_ms.length
                            ]
                        ])])).filter(r123_boole);
                },
                'assign': function _r176_t6(r180_x) {
                    return ['.begin'].concat(r176_ms.map(function _r180_t2(r181_p, r181_j) {
                        return r181_p.assign([
                            '.',
                            r180_x,
                            [
                                '.quote',
                                r181_j
                            ]
                        ]);
                    })).concat([r176_final.assign(r176_config && r176_config.wrapper ? [
                            [
                                '.',
                                [
                                    [
                                        '.',
                                        r180_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r176_ms.length
                                    ]
                                ],
                                [
                                    '.quote',
                                    'map'
                                ]
                            ],
                            r176_config.wrapper
                        ] : [
                            [
                                '.',
                                r180_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r176_ms.length
                            ]
                        ])]).concat([r180_x]);
                }
            }) : void 0;
        }, r123_externs.macros.put('.hash', {}), r123_externs.macros.get('.hash').toPattern = function _r123_t29(r182_pattern, r182_env, r182_config) {
            var r182_subpatterns, r182_ms, _r182_t0 = r182_pattern;
            return Array.isArray(_r182_t0) && _r182_t0.length >= 1 && '.hash' === _r182_t0[0] ? (r182_subpatterns = _r182_t0.slice(1), r182_ms = r182_subpatterns.map(function _r182_t4(r183_pair) {
                return [
                    r183_pair[0],
                    r123_toPattern(r183_pair[1], r182_env, r182_config)
                ];
            }), {
                'whether': function _r182_t5(r184_x) {
                    return [
                        '&&',
                        r184_x
                    ].concat(r182_ms.map(function _r184_t2(r185_p) {
                        return r185_p[1].whether([
                            '.',
                            r184_x,
                            [
                                '.quote',
                                r185_p[0]
                            ]
                        ]);
                    })).filter(r123_boole);
                },
                'assign': function _r182_t6(r186_x) {
                    return ['.begin'].concat(r182_ms.map(function _r186_t2(r187_p) {
                        return r187_p[1].assign([
                            '.',
                            r186_x,
                            [
                                '.quote',
                                r187_p[0]
                            ]
                        ]);
                    }).concat([r186_x]));
                }
            }) : void 0;
        }, r123_externs.macros.put('.xhash', {}), r123_externs.macros.get('.xhash').toPattern = function _r123_t30(r188_pattern, r188_env, r188_config) {
            var r188_subpatterns, r188_ms, _r188_t0 = r188_pattern;
            return Array.isArray(_r188_t0) && _r188_t0.length >= 1 && '.xhash' === _r188_t0[0] ? (r188_subpatterns = _r188_t0.slice(1), r188_ms = r188_subpatterns.map(function _r188_t4(r189_pair) {
                return [
                    r1_ex(r189_pair[0], r188_env),
                    r123_toPattern(r189_pair[1], r188_env, r188_config)
                ];
            }), {
                'whether': function _r188_t5(r190_x) {
                    return [
                        '&&',
                        r190_x
                    ].concat(r188_ms.map(function _r190_t2(r191_p) {
                        var r191_key, _r191_t5, _r191_t0 = r191_p[0];
                        return Array.isArray(_r191_t0) && _r191_t0.length === 2 && '.quote' === _r191_t0[0] ? (r191_key = _r191_t0[1], r191_p[1].whether([
                            '.',
                            r190_x,
                            r191_p[0]
                        ])) : (_r191_t5 = r188_env.newt(), function (_r191_leti1, r192_t) {
                            return r192_t = _r191_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r192_t,
                                    [
                                        '.',
                                        r190_x,
                                        r191_p[0]
                                    ]
                                ],
                                r191_p[1].whether(r192_t)
                            ];
                        }(_r191_t5));
                    })).filter(r123_boole);
                },
                'assign': function _r188_t6(r193_x) {
                    return ['.begin'].concat(r188_ms.map(function _r193_t2(r194_p) {
                        var r194_key, _r194_t5, _r194_t0 = r194_p[0];
                        return Array.isArray(_r194_t0) && _r194_t0.length === 2 && '.quote' === _r194_t0[0] ? (r194_key = _r194_t0[1], r194_p[1].assign([
                            '.',
                            r193_x,
                            r194_p[0]
                        ])) : (_r194_t5 = r188_env.newt(), function (_r194_leti1, r195_t) {
                            return r195_t = _r194_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r195_t,
                                    [
                                        '.',
                                        r193_x,
                                        r194_p[0]
                                    ]
                                ],
                                r194_p[1].assign(r195_t)
                            ];
                        }(_r194_t5));
                    }).concat([r193_x]));
                }
            }) : void 0;
        }, r123_externs.macros.put('.quasiquote', {}), r123_externs.macros.get('.quasiquote').toPattern = function _r123_t31(r196_pattern, r196_env, r196_config) {
            var r196_subpatterns, _r196_t0 = r196_pattern;
            return Array.isArray(_r196_t0) && _r196_t0.length >= 1 && '.quasiquote' === _r196_t0[0] ? (r196_subpatterns = _r196_t0.slice(1), r123_toPattern(r1_deQuasiquote(r196_pattern[1], 0, r196_env), r196_env, r196_config)) : void 0;
        }, r123_externs.macros.put('.operatorPiece', {}), r123_externs.macros.get('.operatorPiece').toPattern = function _r123_t32(r197_pattern, r197_env, r197_config) {
            return r123_toPattern(r1_opSegToRegular(r197_pattern.slice(1), r197_env), r197_env, r197_config);
        }, r123_externs.macros.put('&&', {}), r123_externs.macros.get('&&').toPattern = function _r123_t33(r198_pattern, r198_env, r198_config) {
            var r198_subpatterns, r198_ms, _r198_t0 = r198_pattern;
            return Array.isArray(_r198_t0) && _r198_t0.length >= 1 && '&&' === _r198_t0[0] ? (r198_subpatterns = _r198_t0.slice(1), r198_ms = r198_subpatterns.map(function _r198_t4(r199_x) {
                return r123_toPattern(r199_x, r198_env, r198_config);
            }), {
                'whether': function _r198_t5(r200_x) {
                    var r200_f = ['&&'].concat(r198_ms.map(function _r200_t2(r201_p, r201_j) {
                        return r201_p.whether(r200_x);
                    })).filter(r123_boole);
                    return r200_f.length === 1 ? [
                        '.quote',
                        !0
                    ] : r200_f;
                },
                'assign': function _r198_t6(r202_x) {
                    return ['.begin'].concat(r198_ms.map(function _r202_t2(r203_p, r203_j) {
                        return r203_p.assign(r202_x);
                    }).concat([r202_x]));
                }
            }) : void 0;
        }, r123_externs.macros.put('||', {}), r123_externs.macros.get('||').toPattern = function _r123_t34(r204_pattern, r204_env, r204_config) {
            var r204_subpatterns, r204_ms, _r204_t0 = r204_pattern;
            return Array.isArray(_r204_t0) && _r204_t0.length >= 1 && '||' === _r204_t0[0] ? (r204_subpatterns = _r204_t0.slice(1), r204_ms = r204_subpatterns.map(function _r204_t4(r205_x) {
                return r123_toPattern(r205_x, r204_env, r204_config);
            }), {
                'whether': function _r204_t5(r206_x) {
                    return ['||'].concat(r204_ms.map(function _r206_t2(r207_p, r207_j) {
                        return r207_p.whether(r206_x);
                    })).filter(r123_boole);
                },
                'assign': function _r204_t6(r208_x) {
                    return ['.unit'];
                }
            }) : void 0;
        };
        var r123_boole = function _r123_t35(r209_x) {
            return !!r209_x;
        };
        return r123_externs.macros.put('match', function _r123_t36(r210_form, r210_env, r210_wrapper) {
            var r210_pattern, r210_guard, r210_body, r210_pat, r210_cond, r210_tc, _r210_t0, r210_pairs = r210_form.slice(2), r210_t = r210_env.newt(), r210_f = ['.unit'], r210_j = r210_pairs.length - 1;
            for (; r210_j >= 0; r210_j -= 1)
                _r210_t0 = r210_pairs[r210_j], r210_f = Array.isArray(_r210_t0) && _r210_t0.length === 2 ? (r210_pattern = _r210_t0[0], r210_body = _r210_t0[1], r210_pat = r123_toPattern(r210_pattern, r210_env, {
                    'wrapper': r210_wrapper,
                    'locally': !0
                }), r210_cond = r210_pat.whether(r210_t), r210_cond ? [
                    '.if',
                    r210_cond,
                    [
                        '.begin',
                        r210_pat.assign(r210_t, !0),
                        r1_ex(r210_body, r210_env)
                    ],
                    r210_f
                ] : [
                    '.begin',
                    r210_pat.assign(r210_t, !0),
                    r1_ex(r210_body, r210_env)
                ]) : Array.isArray(_r210_t0) && _r210_t0.length === 3 ? (r210_pattern = _r210_t0[0], r210_guard = _r210_t0[1], r210_body = _r210_t0[2], r210_pat = r123_toPattern(r210_pattern, r210_env, {
                    'wrapper': r210_wrapper,
                    'locally': !0
                }), r210_cond = r210_pat.whether(r210_t), r210_cond ? (r210_tc = r210_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r210_tc,
                        [
                            '.quote',
                            !1
                        ]
                    ],
                    [
                        '.if',
                        r210_cond,
                        [
                            '.begin',
                            r210_pat.assign(r210_t, !0),
                            [
                                '.if',
                                r1_ex(r210_guard, r210_env),
                                [
                                    '.set',
                                    r210_tc,
                                    [
                                        '.quote',
                                        !0
                                    ]
                                ],
                                [
                                    '.set',
                                    r210_tc,
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
                        r210_tc,
                        r1_ex(r210_body, r210_env),
                        r210_f
                    ]
                ]) : [
                    '.begin',
                    r210_pat.assign(r210_t, !0),
                    [
                        '.if',
                        r1_ex(r210_guard, r210_env),
                        r1_ex(r210_body, r210_env),
                        r210_f
                    ]
                ]) : r210_f;
            return [
                '.begin',
                [
                    '.set',
                    r210_t,
                    r1_ex(r210_form[1], r210_env)
                ],
                r210_f
            ];
        }), r123_externs.macros.put('matches', function _r123_t37(r211_form, r211_env) {
            var r211_whatever, r211_obj, r211_pattern, r211_pat, r211_t, r211_cond, _r211_t0 = r211_form;
            return Array.isArray(_r211_t0) && _r211_t0.length === 3 ? (r211_whatever = _r211_t0[0], r211_obj = _r211_t0[1], r211_pattern = _r211_t0[2], r211_pat = r123_toPattern(r211_pattern, r211_env, {
                'locally': !0,
                'unchecked': !1
            }), r211_t = r211_env.newt(), r211_cond = r211_pat.whether(r211_t), r211_cond ? [
                '.begin',
                [
                    '.set',
                    r211_t,
                    r1_ex(r211_obj, r211_env)
                ],
                r211_pat.whether(r211_t)
            ] : [
                '.quote',
                !0
            ]) : void 0;
        }), r123_externs.macros.put('<~>', r123_externs.macros.get('matches')), r123_externs.operatorInfo.put('<~>', {
            'priority': 400,
            'associvity': 'never'
        }), r123_externs.macros.put('regex', function _r123_t38(r212_form, r212_env) {
            var r212_args, r212_s, r212_flag, _r212_t0 = r212_form;
            return Array.isArray(_r212_t0) && _r212_t0.length === 2 && 'regex' === _r212_t0[0] && Array.isArray(_r212_t0[1]) && _r212_t0[1].length === 2 && '.quote' === _r212_t0[1][0] ? (r212_s = _r212_t0[1][1], _r212_t0[1], [
                '.quote',
                new RegExp(r212_s)
            ]) : Array.isArray(_r212_t0) && _r212_t0.length === 3 && 'regex' === _r212_t0[0] && Array.isArray(_r212_t0[1]) && _r212_t0[1].length === 2 && '.quote' === _r212_t0[1][0] && Array.isArray(_r212_t0[2]) && _r212_t0[2].length === 2 && '.quote' === _r212_t0[2][0] ? (r212_s = _r212_t0[1][1], _r212_t0[1], r212_flag = _r212_t0[2][1], _r212_t0[2], [
                '.quote',
                new RegExp(r212_s, r212_flag)
            ]) : Array.isArray(_r212_t0) && _r212_t0.length >= 1 && 'regex' === _r212_t0[0] ? (r212_args = _r212_t0.slice(1), [
                '.new',
                r123_externs.use('RegExp')
            ].concat(r212_args)) : void 0;
        }), r123_externs.macros.put('define-macro', function _r123_t39(r213_form, r213_env) {
            var r213_op, r213_name, r213_body, r213_coinit, r213_ds, r213_imports, r213_names, r213_assignments, r213_macroG, r213_macroFn, r213_str, _r213_t1, _r213_t0 = r213_form;
            return Array.isArray(_r213_t0) && _r213_t0.length === 3 && Array.isArray(_r213_t0[1]) && _r213_t0[1].length === 2 && '.quote' === _r213_t0[1][0] ? (r213_op = _r213_t0[0], r213_str = _r213_t0[1][1], _r213_t0[1], r213_body = _r213_t0[2], r1_ex([
                r213_op,
                r213_str,
                r213_body
            ], r213_env)) : (_r213_t1 = !1, Array.isArray(_r213_t0) && _r213_t0.length === 3 && (r213_op = _r213_t0[0], r213_name = _r213_t0[1], r213_body = _r213_t0[2], r1_atom(r213_name) ? _r213_t1 = !0 : _r213_t1 = !1), _r213_t1 ? (r213_coinit = {
                'injectForm': void 0,
                'initFn': void 0
            }, r213_ds = new r1_Scope(r213_env), r213_imports = {
                'ex': r1_ex,
                'atom': r1_wrapForSyntacticClosure(r1_atom),
                'prim': r1_wrapForSyntacticClosure(r1_prim),
                'formOf': function _r213_t6(r214_x) {
                    return r214_x[1];
                },
                'scopeOf': function _r213_t7(r215_x) {
                    return r215_x[2];
                },
                'definingEnv': r213_env,
                'externEnv': r123_externs,
                'require': require,
                'toPattern': r123_toPattern,
                'coinit': r213_coinit,
                'FormInvalidError': r1_FormInvalidError,
                'deQuasiquote': r1_deQuasiquote,
                'opSegToRegular': r1_opSegToRegular
            }, r213_names = Object.keys(r213_imports), r213_ds.declare('$', !0), r213_assignments = ['.begin'].concat(r213_names.map(function _r213_t8(r216_name) {
                return [
                    'local',
                    r216_name,
                    [
                        '.',
                        '$',
                        [
                            '.quote',
                            r216_name
                        ]
                    ]
                ];
            })), r213_macroG = new Function(r213_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
                '.return',
                r1_ex([
                    '.begin',
                    r213_assignments,
                    r213_body
                ], r213_ds)
            ], r213_ds, function _r213_t9(r217_form) {
                return [
                    '.return',
                    r217_form
                ];
            }))), r213_macroFn = r213_macroG(r213_imports), r213_env.macros.put(r213_name, function _r213_t10(r218_c, r218_e) {
                var r218_result = r213_macroFn(r218_c, r218_e), r218_s = new r1_Scope(r213_env);
                return r218_s.hanging = r218_e, r218_s.semiparent = r218_e, r1_ex(r218_result, r218_s);
            }), r213_coinit.initFn && r213_coinit.initFn(r213_env.macros.get(r213_name)), r213_coinit.injectForm ? r1_ex(r213_coinit.injectForm, r213_env) : ['.unit']) : ['.unit']);
        }), r123_externs.macros.put('macro-match', function _r123_t40(r219_form, r219_env) {
            var r219_c, r219_e, r219_patterns, r219_t, r219_tx, r219_tw, _r219_t0 = r219_form;
            return Array.isArray(_r219_t0) && _r219_t0.length >= 3 && 'macro-match' === _r219_t0[0] ? (r219_c = _r219_t0[1], r219_e = _r219_t0[2], r219_patterns = _r219_t0.slice(3), r219_t = r219_env.newt(), r219_tx = r219_env.newt(), r219_tw = r219_env.newt(), [
                '.begin',
                [
                    '.set',
                    r219_t,
                    r219_e
                ],
                [
                    '.set',
                    r219_tw,
                    [
                        '.lambda',
                        [r219_tx],
                        [
                            '.return',
                            [
                                '.list',
                                [
                                    '.quote',
                                    '.syntactic-closure'
                                ],
                                r219_tx,
                                r219_t
                            ]
                        ]
                    ]
                ],
                r123_externs.macros.get('match')([
                    'match',
                    r219_c
                ].concat(r219_patterns), r219_env, r219_tw)
            ]) : ['.unit'];
        }), r123_externs.pFamily = 'r', r123_externs;
    };
exports.Create = r1_Create;
