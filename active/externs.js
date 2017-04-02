'use strict';
var _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t11, _r1_t12, r1_patrisika = require('patrisika'), r1_atom = function _r1_t8(r124_x) {
        return typeof r124_x === 'string';
    }, r1_identifier = function _r1_t9(r125_x) {
        return r1_atom(r125_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r125_x);
    }, r1_prim = function _r1_t10(r126_x) {
        return r1_atom(r126_x) && !r1_identifier(r126_x);
    }, r1_Scope = require('patrisika').Scope, r1_escodegen = require('escodegen'), r1_util = require('util'), r1_exlib = require('./ex'), r1_ex = r1_exlib.ex, r1_deQuasiquote = r1_exlib.deQuasiquote, r1_opSegToRegular = r1_exlib.opSegToRegular, r1_FormInvalidError = r1_exlib.FormInvalidError, r1_wrapForSyntacticClosure = function _r1_t11(r127_fn) {
        return function _r127_t2(r128_x) {
            var r128_c, r128_e, _r128_t0 = r128_x;
            return Array.isArray(_r128_t0) && _r128_t0.length === 3 && '.syntactic-closure' === _r128_t0[0] ? (r128_c = _r128_t0[1], r128_e = _r128_t0[2], r127_fn(r128_c)) : r127_fn(r128_x);
        };
    }, r1_Create = function _r1_t12() {
        var r129_externs = r1_patrisika.DefaultExterns();
        r129_externs.castName = function _r129_t2(r130_name) {
            return r130_name;
        }, r129_externs.declare('require'), r129_externs.declare('exports'), r129_externs.declare('process'), r129_externs.declare('module'), r129_externs.declare('Error');
        var r129_operatorRename = function _r129_t3(r131_op) {
                return function _r131_t2(r132_form, r132_env) {
                    return r1_ex([r131_op].concat(r132_form.slice(1)), r132_env);
                };
            }, r129_reportInvalid = function _r129_t4(r133_form, r133_reason) {
                throw new r1_FormInvalidError(r133_form, r133_reason);
            };
        r129_externs.macros.put('begin', r129_operatorRename('.begin')), r129_externs.macros.put('then', r129_operatorRename('.begin')), r129_externs.macros.put('else', r129_operatorRename('.begin')), r129_externs.macros.put('while', r129_operatorRename('.while')), r129_externs.macros.put('try', r129_operatorRename('.try')), r129_externs.macros.put('is', r129_operatorRename('.is')), r129_externs.macros.put('<@', r129_operatorRename('.is')), r129_externs.macros.put('new', r129_operatorRename('.new')), r129_externs.macros.put('this', r129_operatorRename('.thisp')), r129_externs.macros.put('arguments', r129_operatorRename('.argsp')), r129_externs.macros.put('and', r129_operatorRename('&&')), r129_externs.macros.put('or', r129_operatorRename('||')), r129_externs.macros.put('not', r129_operatorRename('!')), r129_externs.macros.put('return', r129_operatorRename('.return')), r129_externs.macros.put('break', r129_operatorRename('.break')), r129_externs.macros.put('yield', r129_operatorRename('.yield')), r129_externs.macros.put('throw', r129_operatorRename('.throw')), r129_externs.macros.put('list', r129_operatorRename('.list')), r129_externs.macros.put('typeof', r129_operatorRename('.typeof')), r129_externs.macros.put('quasiquote', r129_operatorRename('.quasiquote')), r129_externs.macros.put('syntax', r129_operatorRename('.quasiquote')), r129_externs.macros.put('lambda', function _r129_t5(r134_form, r134_env) {
            var r134_otherwise, r134_car, r134_body, r134_parameters, _r134_t0 = r134_form, _r134_t1 = !1;
            return Array.isArray(_r134_t0) && _r134_t0.length === 3 && (r134_car = _r134_t0[0], r134_parameters = _r134_t0[1], r134_body = _r134_t0[2], r1_atom(r134_parameters) ? _r134_t1 = !0 : _r134_t1 = !1), _r134_t1 ? r1_ex([
                '.lambda',
                [r134_parameters],
                r134_body
            ], r134_env) : Array.isArray(_r134_t0) && _r134_t0.length === 3 ? (r134_car = _r134_t0[0], r134_parameters = _r134_t0[1], r134_body = _r134_t0[2], r1_ex([
                '.lambda',
                r134_parameters,
                r134_body
            ], r134_env)) : Array.isArray(_r134_t0) && _r134_t0.length === 2 ? (r134_car = _r134_t0[0], r134_body = _r134_t0[1], r1_ex([
                '.lambda',
                [],
                r134_body
            ], r134_env)) : Array.isArray(_r134_t0) && _r134_t0.length === 1 ? (r134_car = _r134_t0[0], r1_ex([
                '.lambda',
                [],
                ['.unit']
            ], r134_env)) : (r134_otherwise = _r134_t0, r129_reportInvalid(r134_otherwise, 'Invalid Lambda Formation'));
        }), r129_externs.macros.put('function', r129_externs.macros.get('lambda')), r129_externs.macros.put('<-', function _r129_t6(r135_form, r135_env) {
            return r129_externs.macros.get('define')([
                'define',
                r135_form[1],
                [
                    'yield',
                    r135_form[2]
                ]
            ], r135_env);
        }), r129_externs.macros.put('->', r129_externs.macros.get('lambda')), r129_externs.macros.put('=>', r129_externs.macros.get('lambda')), r129_externs.operatorInfo.put('->', {
            'priority': 900,
            'associvity': 'right'
        }), r129_externs.operatorInfo.put('<-', {
            'priority': 970,
            'associvity': 'right'
        }), r129_externs.operatorInfo.put('=>', {
            'priority': 950,
            'associvity': 'right'
        }), r129_externs.macros.put('.prefix.-', function _r129_t7(r136_form, r136_env) {
            return [
                '-',
                r1_ex(r136_form[1], r136_env)
            ];
        }), r129_externs.macros.put('.prefix.+', function _r129_t8(r137_form, r137_env) {
            return [
                '+',
                r1_ex(r137_form[1], r137_env)
            ];
        }), r129_externs.macros.put('.prefix.!', function _r129_t9(r138_form, r138_env) {
            return [
                '!',
                r1_ex(r138_form[1], r138_env)
            ];
        }), r129_externs.macros.put('.prefix.*', function _r129_t10(r139_form, r139_env) {
            return r1_ex(r139_form[1], r139_env);
        }), r129_externs.macros.put('.prefix.=', function _r129_t11(r140_form, r140_env) {
            return r1_ex(r140_form[1], r140_env);
        }), r129_externs.macros.put('if', function _r129_t12(r141_form, r141_env) {
            var r141_otherwise, r141_test, r141_consequents, r141_alternates, r141_consequent, r141_alternate, _r141_t0 = r141_form;
            return Array.isArray(_r141_t0) && _r141_t0.length === 3 && 'if' === _r141_t0[0] ? (r141_test = _r141_t0[1], r141_consequent = _r141_t0[2], r1_ex([
                '.if',
                r141_test,
                r141_consequent
            ], r141_env)) : Array.isArray(_r141_t0) && _r141_t0.length === 4 && 'if' === _r141_t0[0] ? (r141_test = _r141_t0[1], r141_consequent = _r141_t0[2], r141_alternate = _r141_t0[3], r1_ex([
                '.if',
                r141_test,
                r141_consequent,
                r141_alternate
            ], r141_env)) : Array.isArray(_r141_t0) && _r141_t0.length === 3 && 'if' === _r141_t0[0] && Array.isArray(_r141_t0[2]) && _r141_t0[2].length >= 1 && 'then' === _r141_t0[2][0] ? (r141_test = _r141_t0[1], r141_consequents = _r141_t0[2].slice(1), _r141_t0[2], r1_ex([
                '.if',
                r141_test,
                ['.begin'].concat(r141_consequents)
            ], r141_env)) : Array.isArray(_r141_t0) && _r141_t0.length === 4 && 'if' === _r141_t0[0] && Array.isArray(_r141_t0[2]) && _r141_t0[2].length >= 1 && 'then' === _r141_t0[2][0] && Array.isArray(_r141_t0[3]) && _r141_t0[3].length >= 1 && 'else' === _r141_t0[3][0] ? (r141_test = _r141_t0[1], r141_consequents = _r141_t0[2].slice(1), _r141_t0[2], r141_alternates = _r141_t0[3].slice(1), _r141_t0[3], r1_ex([
                '.if',
                r141_test,
                ['.begin'].concat(r141_consequents),
                ['.begin'].concat(r141_alternates)
            ], r141_env)) : (r141_otherwise = _r141_t0, r129_reportInvalid(r141_otherwise, 'Invalid Conditional Form'));
        }), r129_externs.macros.put('let', function _r129_t13(r142_form, r142_env) {
            var r142_arg, r142_t, r142_param, _r142_t0, _r142_t1, r142_pairs = r142_form.slice(1, -1), r142_args = [], r142_paras = [], r142_decls = ['.begin'], r142_j = 0;
            for (; r142_j < r142_pairs.length; r142_j += 1)
                if (_r142_t0 = r142_pairs[r142_j], Array.isArray(_r142_t0) && _r142_t0.length === 2)
                    r142_arg = _r142_t0[0], r142_param = _r142_t0[1], r142_t = r142_env.newt('leti'), r142_args.push(r142_t), r142_paras.push(r142_param), r142_decls.push([
                        'define',
                        r142_arg,
                        r142_t
                    ]);
                else {
                    if (_r142_t1 = !1, Array.isArray(_r142_t0) && _r142_t0.length === 1 && (r142_arg = _r142_t0[0], r1_atom(r142_arg) ? _r142_t1 = !0 : _r142_t1 = !1), !_r142_t1)
                        throw new r1_FormInvalidError(r142_pairs[r142_j], 'Invalid [let] subpattern');
                    r142_t = r142_env.newt('leti'), r142_args.push(r142_t), r142_paras.push(r142_env.use(r142_arg)), r142_decls.push([
                        'define',
                        r142_arg,
                        r142_t
                    ]);
                }
            return r1_ex([
                '.beta',
                r142_args,
                [
                    '.begin',
                    r142_decls,
                    r142_form[r142_form.length - 1]
                ]
            ].concat(r142_paras), r142_env);
        }), r129_externs.macros.put('letrec', function _r129_t14(r143_form, r143_env) {
            var r143_arg, r143_param, _r143_t0, r143_pairs = r143_form.slice(1, -1), r143_decls = ['.begin'], r143_j = 0;
            for (; r143_j < r143_pairs.length; r143_j += 1) {
                if (_r143_t0 = r143_pairs[r143_j], !(Array.isArray(_r143_t0) && _r143_t0.length === 2))
                    throw new r1_FormInvalidError(r143_pairs[r143_j], 'Invalid [letrec] subpattern');
                r143_arg = _r143_t0[0], r143_param = _r143_t0[1], r143_decls.push([
                    'local',
                    r143_arg,
                    r143_param
                ]);
            }
            return r1_ex([
                '.beta',
                [],
                [
                    '.begin',
                    r143_decls,
                    r143_form[r143_form.length - 1]
                ]
            ], r143_env);
        }), r129_externs.macros.put('object', function _r129_t15(r144_form, r144_env) {
            if (r144_form[1] && r144_form[1][0] === '.xhash')
                return r1_ex(r144_form[1], r144_env);
            var r144_pairs = r144_form.slice(1).map(function _r144_t2(r145_pair) {
                var r145_method, r145_param, r145_value, r145_property, _r145_t1, _r145_t2, _r145_t3, _r145_t4, _r145_t5, _r145_t6, _r145_t0 = r145_pair, _r145_t7 = !1;
                return Array.isArray(_r145_t0) && _r145_t0.length === 3 && '=' === _r145_t0[0] && (r145_property = _r145_t0[1], r145_value = _r145_t0[2], r1_atom(r145_property) ? _r145_t7 = !0 : _r145_t7 = !1), _r145_t7 ? [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_value
                ] : (_r145_t6 = !1, Array.isArray(_r145_t0) && _r145_t0.length === 3 && '=' === _r145_t0[0] && (r145_property = _r145_t0[1], r145_value = _r145_t0[2], r1_atom(r145_property) ? _r145_t6 = !0 : _r145_t6 = !1), _r145_t6 ? [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_value
                ] : (_r145_t5 = !1, Array.isArray(_r145_t0) && _r145_t0.length === 2 && (r145_property = _r145_t0[0], r145_value = _r145_t0[1], r1_atom(r145_property) ? _r145_t5 = !0 : _r145_t5 = !1), _r145_t5 ? [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_value
                ] : (_r145_t4 = !1, Array.isArray(_r145_t0) && _r145_t0.length === 1 && (r145_property = _r145_t0[0], r1_atom(r145_property) ? _r145_t4 = !0 : _r145_t4 = !1), _r145_t4 ? [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_property
                ] : (r145_property = _r145_t0, r1_atom(r145_property) ? [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_property
                ] : Array.isArray(_r145_t0) && _r145_t0.length === 3 && '=' === _r145_t0[0] && Array.isArray(_r145_t0[1]) && _r145_t0[1].length === 2 && '.quote' === _r145_t0[1][0] ? (r145_property = _r145_t0[1][1], _r145_t0[1], r145_value = _r145_t0[2], [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_value
                ]) : Array.isArray(_r145_t0) && _r145_t0.length === 3 && '=' === _r145_t0[0] && Array.isArray(_r145_t0[1]) && _r145_t0[1].length === 2 && '.quote' === _r145_t0[1][0] ? (r145_property = _r145_t0[1][1], _r145_t0[1], r145_value = _r145_t0[2], [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_value
                ]) : Array.isArray(_r145_t0) && _r145_t0.length === 2 && Array.isArray(_r145_t0[0]) && _r145_t0[0].length === 2 && '.quote' === _r145_t0[0][0] ? (r145_property = _r145_t0[0][1], _r145_t0[0], r145_value = _r145_t0[1], [
                    [
                        '.quote',
                        r145_property
                    ],
                    r145_value
                ]) : (_r145_t3 = !1, Array.isArray(_r145_t0) && _r145_t0.length === 3 && '=' === _r145_t0[0] && Array.isArray(_r145_t0[1]) && _r145_t0[1].length >= 1 && (r145_method = _r145_t0[1][0], r145_param = _r145_t0[1].slice(1), _r145_t0[1], r145_value = _r145_t0[2], r1_atom(r145_method) ? _r145_t3 = !0 : _r145_t3 = !1), _r145_t3 ? [
                    [
                        '.quote',
                        r145_method
                    ],
                    [
                        '.lambda',
                        r145_param,
                        r145_value
                    ]
                ] : (_r145_t2 = !1, Array.isArray(_r145_t0) && _r145_t0.length === 3 && '=' === _r145_t0[0] && Array.isArray(_r145_t0[1]) && _r145_t0[1].length >= 1 && (r145_method = _r145_t0[1][0], r145_param = _r145_t0[1].slice(1), _r145_t0[1], r145_value = _r145_t0[2], r1_atom(r145_method) ? _r145_t2 = !0 : _r145_t2 = !1), _r145_t2 ? [
                    [
                        '.quote',
                        r145_method
                    ],
                    [
                        '.lambda',
                        r145_param,
                        r145_value
                    ]
                ] : (_r145_t1 = !1, Array.isArray(_r145_t0) && _r145_t0.length === 2 && Array.isArray(_r145_t0[0]) && _r145_t0[0].length >= 1 && (r145_method = _r145_t0[0][0], r145_param = _r145_t0[0].slice(1), _r145_t0[0], r145_value = _r145_t0[1], r1_atom(r145_method) ? _r145_t1 = !0 : _r145_t1 = !1), _r145_t1 ? [
                    [
                        '.quote',
                        r145_method
                    ],
                    [
                        '.lambda',
                        r145_param,
                        r145_value
                    ]
                ] : void 0)))))));
            });
            return r1_ex(['.xhash'].concat(r144_pairs.filter(function _r144_t3(r146_x) {
                return r146_x;
            })), r144_env);
        }), r129_externs.macros.get('list').toPattern = function _r129_t16(r147_form, r147_env, r147_config) {
            return r129_toPattern(['.list'].concat(r147_form.slice(1)), r147_env, r147_config);
        }, r129_externs.macros.get('object').toPattern = function _r129_t17(r148_form, r148_env, r148_config) {
            var r148_pairs = r148_form.slice(1).map(function _r148_t2(r149_pair) {
                var r149_property, r149_value, _r149_t1, _r149_t2, _r149_t3, _r149_t0 = r149_pair, _r149_t4 = !1;
                if (Array.isArray(_r149_t0) && _r149_t0.length === 3 && '=' === _r149_t0[0] && (r149_property = _r149_t0[1], r149_value = _r149_t0[2], r1_atom(r149_property) ? _r149_t4 = !0 : _r149_t4 = !1), _r149_t4)
                    return [
                        r149_property,
                        r149_value
                    ];
                else if (_r149_t3 = !1, Array.isArray(_r149_t0) && _r149_t0.length === 3 && '=' === _r149_t0[0] && (r149_property = _r149_t0[1], r149_value = _r149_t0[2], r1_atom(r149_property) ? _r149_t3 = !0 : _r149_t3 = !1), _r149_t3)
                    return [
                        r149_property,
                        r149_value
                    ];
                else if (_r149_t2 = !1, Array.isArray(_r149_t0) && _r149_t0.length === 2 && (r149_property = _r149_t0[0], r149_value = _r149_t0[1], r1_atom(r149_property) ? _r149_t2 = !0 : _r149_t2 = !1), _r149_t2)
                    return [
                        r149_property,
                        r149_value
                    ];
                else if (_r149_t1 = !1, Array.isArray(_r149_t0) && _r149_t0.length === 1 && (r149_property = _r149_t0[0], r1_atom(r149_property) ? _r149_t1 = !0 : _r149_t1 = !1), _r149_t1)
                    return [
                        r149_property,
                        r149_property
                    ];
                else if (r149_property = _r149_t0, r1_atom(r149_property))
                    return [
                        r149_property,
                        r149_property
                    ];
                else if (Array.isArray(_r149_t0) && _r149_t0.length === 3 && '=' === _r149_t0[0] && Array.isArray(_r149_t0[1]) && _r149_t0[1].length === 2 && '.quote' === _r149_t0[1][0])
                    return r149_property = _r149_t0[1][1], _r149_t0[1], r149_value = _r149_t0[2], [
                        r149_property,
                        r149_value
                    ];
                else if (Array.isArray(_r149_t0) && _r149_t0.length === 3 && '=' === _r149_t0[0] && Array.isArray(_r149_t0[1]) && _r149_t0[1].length === 2 && '.quote' === _r149_t0[1][0])
                    return r149_property = _r149_t0[1][1], _r149_t0[1], r149_value = _r149_t0[2], [
                        r149_property,
                        r149_value
                    ];
                else if (Array.isArray(_r149_t0) && _r149_t0.length === 2 && Array.isArray(_r149_t0[0]) && _r149_t0[0].length === 2 && '.quote' === _r149_t0[0][0])
                    return r149_property = _r149_t0[0][1], _r149_t0[0], r149_value = _r149_t0[1], [
                        r149_property,
                        r149_value
                    ];
                else
                    throw new r1_FormInvalidError(r148_form, 'Invalid Assignment Left-hand Side');
            });
            return r129_toPattern(['.hash'].concat(r148_pairs), r148_env, r148_config);
        }, r129_externs.macros.put('piecewise', function _r129_t18(r150_form, r150_env) {
            var r150_pairs, r150_f, r150_j, r150_otherwise, r150_condition, r150_consequent, _r150_t1, _r150_t0 = r150_form;
            if (Array.isArray(_r150_t0) && _r150_t0.length >= 1 && 'piecewise' === _r150_t0[0]) {
                for (r150_pairs = _r150_t0.slice(1), r150_f = ['.unit'], r150_j = r150_pairs.length - 1; r150_j >= 0; r150_j -= 1) {
                    if (_r150_t1 = r150_pairs[r150_j], !(Array.isArray(_r150_t1) && _r150_t1.length === 2))
                        throw r150_otherwise = _r150_t1, new r1_FormInvalidError(r150_otherwise, 'Invalid Piecewise Segment');
                    r150_condition = _r150_t1[0], r150_consequent = _r150_t1[1], r150_f = [
                        '.if',
                        r1_ex(r150_condition, r150_env),
                        r1_ex(r150_consequent, r150_env),
                        r150_f
                    ];
                }
                return r150_f;
            } else
                return void 0;
        });
        var r129_AssignWithMod = function _r129_t19(r151_left, r151_right, r151_mod, r151_env, r151_locallyQ) {
                var r151_callee, r151_paras, r151_pat, r151_t, r151_whatever, r151_a, r151_e, r151_x, _r151_t1, _r151_t2, _r151_t3, _r151_t4, _r151_t5, _r151_t6, _r151_t0 = r151_left, r151_id = _r151_t0;
                if (r1_atom(r151_id))
                    return r151_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r151_id,
                            (r151_locallyQ || 1) - 1
                        ], r151_env),
                        r1_ex([
                            r151_mod,
                            r151_right
                        ], r151_env)
                    ] : [
                        '.set',
                        r1_ex(r151_left, r151_env),
                        r1_ex([
                            r151_mod,
                            r151_right
                        ], r151_env)
                    ];
                else if (_r151_t6 = !1, Array.isArray(_r151_t0) && _r151_t0.length === 2 && '.id' === _r151_t0[0] && (r151_id = _r151_t0[1], r1_atom(r151_id) ? _r151_t6 = !0 : _r151_t6 = !1), _r151_t6)
                    return r151_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r151_id,
                            (r151_locallyQ || 1) - 1
                        ], r151_env),
                        r1_ex([
                            r151_mod,
                            r151_right
                        ], r151_env)
                    ] : [
                        '.set',
                        r1_ex(r151_left, r151_env),
                        r1_ex([
                            r151_mod,
                            r151_right
                        ], r151_env)
                    ];
                else if (_r151_t5 = !1, Array.isArray(_r151_t0) && _r151_t0.length === 3 && '.id' === _r151_t0[0] && (r151_id = _r151_t0[1], r151_e = _r151_t0[2], r1_atom(r151_id) && (r151_e === r151_env || !r151_locallyQ) ? _r151_t5 = !0 : _r151_t5 = !1), _r151_t5)
                    return r151_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r151_id,
                            (r151_locallyQ || 1) - 1
                        ], r151_e),
                        r1_ex([
                            r151_mod,
                            r151_right
                        ], r151_e)
                    ] : [
                        '.set',
                        r1_ex(r151_left, r151_e),
                        r1_ex([
                            r151_mod,
                            r151_right
                        ], r151_e)
                    ];
                else if (_r151_t4 = !1, Array.isArray(_r151_t0) && _r151_t0.length === 3 && '.id' === _r151_t0[0] && (r151_id = _r151_t0[1], r151_e = _r151_t0[2], r1_atom(r151_id) && r151_e !== r151_env && r151_locallyQ ? _r151_t4 = !0 : _r151_t4 = !1), _r151_t4)
                    throw new r1_FormInvalidError(r151_left, 'Attempt to redefine non-local subform');
                else if (Array.isArray(_r151_t0) && _r151_t0.length === 3 && '.local' === _r151_t0[0])
                    return r151_a = _r151_t0[1], r151_x = _r151_t0[2], r129_AssignWithMod(r151_a, r151_right, r151_mod, r151_env, r151_x);
                else if (Array.isArray(_r151_t0) && _r151_t0.length === 2 && '.local' === _r151_t0[0])
                    return r151_a = _r151_t0[1], r129_AssignWithMod(r151_a, r151_right, r151_mod, r151_env, r151_locallyQ || !0);
                else if (_r151_t3 = !1, Array.isArray(_r151_t0) && _r151_t0.length === 3 && '.syntactic-closure' === _r151_t0[0] && (r151_a = _r151_t0[1], r151_e = _r151_t0[2], r151_e === r151_env || !r151_locallyQ ? _r151_t3 = !0 : _r151_t3 = !1), _r151_t3)
                    return r129_AssignWithMod(r151_a, r151_right, r151_mod, r151_env, r151_locallyQ);
                else if (_r151_t2 = !1, Array.isArray(_r151_t0) && _r151_t0.length === 3 && '.syntactic-closure' === _r151_t0[0] && (r151_a = _r151_t0[1], r151_e = _r151_t0[2], r151_e !== r151_env && r151_locallyQ ? _r151_t2 = !0 : _r151_t2 = !1), _r151_t2)
                    throw new r1_FormInvalidError(r151_left, 'Attempt to redefine non-local subform');
                else if (Array.isArray(_r151_t0) && _r151_t0.length >= 1 && '.revcall' === _r151_t0[0])
                    return r151_whatever = _r151_t0.slice(1), r129_AssignWithMod([].concat(r151_whatever), r151_right, r151_mod, r151_env, r151_locallyQ);
                else if (Array.isArray(_r151_t0) && _r151_t0.length >= 1)
                    if (r151_callee = _r151_t0[0], r151_paras = _r151_t0.slice(1), r1_atom(r151_callee) && r151_env.macros.has(r151_callee) && r151_env.macros.get(r151_callee).toPattern)
                        return r151_pat = r129_toPattern(r151_left, r151_env, {
                            'locally': r151_locallyQ,
                            'const': r151_locallyQ > 1,
                            'unchecked': r151_mod !== 'checked'
                        }), r151_t = r151_env.newt(), _r151_t1 = r151_mod, 'checked' === _r151_t1 ? [
                            '.begin',
                            [
                                '.set',
                                r151_t,
                                r1_ex([
                                    '.unquote',
                                    r151_right
                                ], r151_env)
                            ],
                            [
                                '.if',
                                r151_pat.whether(r151_t) || [
                                    '.quote',
                                    !0
                                ],
                                r151_pat.assign(r151_t, r151_locallyQ)
                            ]
                        ] : [
                            '.begin',
                            [
                                '.set',
                                r151_t,
                                r1_ex([
                                    r151_mod,
                                    r151_right
                                ], r151_env)
                            ],
                            r151_pat.assign(r151_t, r151_locallyQ)
                        ];
                    else if (r1_atom(r151_callee) && r151_env.macros.has(r151_callee))
                        throw new r1_FormInvalidError(r151_left, 'Invalid Assignment Left-hand Side');
                    else
                        return r1_prim(r151_callee) ? [
                            '.set',
                            r1_ex(r151_left, r151_env),
                            r1_ex([
                                r151_mod,
                                r151_right
                            ], r151_env)
                        ] : r1_atom(r151_callee) ? r151_locallyQ ? [
                            '.set',
                            r1_ex([
                                '.local',
                                r151_callee,
                                (r151_locallyQ || 1) - 1
                            ], r151_env),
                            r1_ex([
                                r151_mod,
                                [
                                    '.lambda',
                                    [].concat(r151_paras),
                                    r151_right
                                ]
                            ], r151_env)
                        ] : [
                            '.set',
                            r1_ex(r151_callee, r151_env),
                            r1_ex([
                                r151_mod,
                                [
                                    '.lambda',
                                    [].concat(r151_paras),
                                    r151_right
                                ]
                            ], r151_env)
                        ] : [
                            '.set',
                            r1_ex(r151_callee, r151_env),
                            r1_ex([
                                r151_mod,
                                [
                                    '.lambda',
                                    [].concat(r151_paras),
                                    r151_right
                                ]
                            ], r151_env)
                        ];
                else
                    throw new r1_FormInvalidError(r151_left, 'Invalid Assignment Left-hand Side');
            }, r129_Assign = function _r129_t20(r152_left, r152_right, r152_env, r152_locallyQ) {
                return r129_AssignWithMod(r152_left, r152_right, '.unquote', r152_env, r152_locallyQ);
            };
        r129_externs.macros.put('define', function _r129_t21(r153_form, r153_env) {
            var r153_any, r153_op, r153_left, r153_right, r153_modifer, _r153_t0 = r153_form;
            if (Array.isArray(_r153_t0) && _r153_t0.length === 4)
                return r153_op = _r153_t0[0], r153_modifer = _r153_t0[1], r153_left = _r153_t0[2], r153_right = _r153_t0[3], r129_AssignWithMod(r153_left, r153_right, r153_modifer, r153_env, 2);
            else if (Array.isArray(_r153_t0) && _r153_t0.length === 3)
                return r153_op = _r153_t0[0], r153_left = _r153_t0[1], r153_right = _r153_t0[2], r129_Assign(r153_left, r153_right, r153_env, 2);
            else
                throw r153_any = _r153_t0, new r1_FormInvalidError(r153_any, 'Invalid Assignment');
        }), r129_externs.macros.put('local', function _r129_t22(r154_form, r154_env) {
            var r154_any, r154_op, r154_left, r154_right, r154_modifer, _r154_t1, _r154_t0 = r154_form;
            if (Array.isArray(_r154_t0) && _r154_t0.length === 4)
                return r154_op = _r154_t0[0], r154_modifer = _r154_t0[1], r154_left = _r154_t0[2], r154_right = _r154_t0[3], r129_AssignWithMod(r154_left, r154_right, r154_modifer, r154_env, !0);
            else if (Array.isArray(_r154_t0) && _r154_t0.length === 3)
                return r154_op = _r154_t0[0], r154_left = _r154_t0[1], r154_right = _r154_t0[2], r129_Assign(r154_left, r154_right, r154_env, !0);
            else if (_r154_t1 = !1, Array.isArray(_r154_t0) && _r154_t0.length === 2 && (r154_op = _r154_t0[0], r154_left = _r154_t0[1], r1_atom(r154_left) ? _r154_t1 = !0 : _r154_t1 = !1), _r154_t1)
                return [
                    '.local',
                    r154_left
                ];
            else
                throw r154_any = _r154_t0, new r1_FormInvalidError(r154_any, 'Invalid Assignment');
        }), r129_externs.macros.put('const', r129_externs.macros.get('define')), r129_externs.macros.put('set', function _r129_t23(r155_form, r155_env) {
            var r155_any, r155_op, r155_left, r155_right, _r155_t0 = r155_form;
            if (Array.isArray(_r155_t0) && _r155_t0.length === 3)
                return r155_op = _r155_t0[0], r155_left = _r155_t0[1], r155_right = _r155_t0[2], r129_Assign(r155_left, r155_right, r155_env, !1);
            else
                throw r155_any = _r155_t0, new r1_FormInvalidError(r155_any, 'Invalid Assignment');
        }), r129_externs.macros.put('=', r129_externs.macros.get('set')), r129_externs.macros.put('inc', function _r129_t24(r156_form, r156_env) {
            var r156_op, r156_id, r156_shift, _r156_t0 = r156_form;
            return Array.isArray(_r156_t0) && _r156_t0.length === 2 ? (r156_op = _r156_t0[0], r156_id = _r156_t0[1], r129_Assign(r156_id, [
                '+',
                r156_id,
                [
                    '.quote',
                    1
                ]
            ], r156_env, !1)) : Array.isArray(_r156_t0) && _r156_t0.length === 3 ? (r156_op = _r156_t0[0], r156_id = _r156_t0[1], r156_shift = _r156_t0[2], r129_Assign(r156_id, [
                '+',
                r156_id,
                r156_shift
            ], r156_env, !1)) : Array.isArray(_r156_t0) && _r156_t0.length === 4 && 'by' === _r156_t0[2] ? (r156_op = _r156_t0[0], r156_id = _r156_t0[1], r156_shift = _r156_t0[3], r129_Assign(r156_id, [
                '+',
                r156_id,
                r156_shift
            ], r156_env, !1)) : void 0;
        }), r129_externs.macros.put('dec', function _r129_t25(r157_form, r157_env) {
            var r157_op, r157_id, r157_shift, _r157_t0 = r157_form;
            return Array.isArray(_r157_t0) && _r157_t0.length === 2 ? (r157_op = _r157_t0[0], r157_id = _r157_t0[1], r129_Assign(r157_id, [
                '-',
                r157_id,
                [
                    '.quote',
                    1
                ]
            ], r157_env, !1)) : Array.isArray(_r157_t0) && _r157_t0.length === 3 ? (r157_op = _r157_t0[0], r157_id = _r157_t0[1], r157_shift = _r157_t0[2], r129_Assign(r157_id, [
                '-',
                r157_id,
                r157_shift
            ], r157_env, !1)) : Array.isArray(_r157_t0) && _r157_t0.length === 4 && 'by' === _r157_t0[2] ? (r157_op = _r157_t0[0], r157_id = _r157_t0[1], r157_shift = _r157_t0[3], r129_Assign(r157_id, [
                '-',
                r157_id,
                r157_shift
            ], r157_env, !1)) : void 0;
        }), r129_externs.macros.put('for', function _r129_t26(r158_form, r158_env) {
            var r158_init, r158_test, r158_step, r158_body, _r158_t0 = r158_form;
            return Array.isArray(_r158_t0) && _r158_t0.length === 5 && 'for' === _r158_t0[0] ? (r158_init = _r158_t0[1], r158_test = _r158_t0[2], r158_step = _r158_t0[3], r158_body = _r158_t0[4], [
                '.begin',
                r1_ex(r158_init, r158_env),
                [
                    '.while',
                    r1_ex(r158_test, r158_env),
                    [
                        '.begin',
                        r1_ex(r158_body, r158_env),
                        r1_ex(r158_step, r158_env)
                    ]
                ]
            ]) : void 0;
        }), r129_externs.macros.put('this', ['.thisp']), r129_externs.macros.put('arguments', ['.argsp']), r129_externs.macros.put('nothing', ['.unit']), r129_externs.macros.put('undefined', ['.unit']), r129_externs.macros.put('null', [
            '.quote',
            null
        ]), r129_externs.macros.put('true', [
            '.quote',
            !0
        ]), r129_externs.macros.put('false', [
            '.quote',
            !1
        ]);
        var r129_toPattern = function _r129_t27(r159_pattern, r159_env, r159_config) {
            var r159_callee, r159_subpatterns, r159_ms, r159_t, r159_whatever, r159_x, _r159_t1, _r159_t0 = r159_pattern, r159_id = _r159_t0;
            if (r1_atom(r159_id))
                return {
                    'whether': function _r159_t5(r175_x) {
                        return null;
                    },
                    'assign': function _r159_t6(r176_x) {
                        return [
                            '.set',
                            r1_ex(r159_config && r159_config.locally ? [
                                '.local',
                                r159_id,
                                r159_config.const
                            ] : r159_id, r159_env),
                            r159_config && r159_config.wrapper ? [
                                r159_config.wrapper,
                                r176_x
                            ] : r176_x
                        ];
                    }
                };
            else if (_r159_t1 = !1, Array.isArray(_r159_t0) && _r159_t0.length === 2 && '.id' === _r159_t0[0] && (r159_id = _r159_t0[1], r1_atom(r159_id) ? _r159_t1 = !0 : _r159_t1 = !1), _r159_t1)
                return {
                    'whether': function _r159_t8(r173_x) {
                        return null;
                    },
                    'assign': function _r159_t9(r174_x) {
                        return [
                            '.set',
                            r1_ex(r159_config && r159_config.locally ? [
                                '.local',
                                r159_id,
                                r159_config.const
                            ] : r159_id, r159_env),
                            r159_config && r159_config.wrapper ? [
                                r159_config.wrapper,
                                r174_x
                            ] : r174_x
                        ];
                    }
                };
            else if (Array.isArray(_r159_t0) && _r159_t0.length === 2 && '.quote' === _r159_t0[0])
                return r159_x = _r159_t0[1], {
                    'whether': function _r159_t17(r171_x) {
                        return [
                            '===',
                            r1_ex(r159_pattern, r159_env),
                            r171_x
                        ];
                    },
                    'assign': function _r159_t18(r172_x) {
                        return ['.unit'];
                    }
                };
            else if (Array.isArray(_r159_t0) && _r159_t0.length >= 1 && '.' === _r159_t0[0])
                return r159_whatever = _r159_t0.slice(1), {
                    'whether': function _r159_t19(r169_x) {
                        return null;
                    },
                    'assign': function _r159_t20(r170_x) {
                        return [
                            '.set',
                            r1_ex(r159_pattern, r159_env),
                            r159_config && r159_config.wrapper ? [
                                r159_config.wrapper,
                                r170_x
                            ] : r170_x
                        ];
                    }
                };
            else if (Array.isArray(_r159_t0) && _r159_t0.length >= 1)
                if (r159_callee = _r159_t0[0], r159_subpatterns = _r159_t0.slice(1), r1_atom(r159_callee) && r159_env.macros.has(r159_callee) && r159_env.macros.get(r159_callee).toPattern)
                    return r159_env.macros.get(r159_callee).toPattern(r159_pattern, r159_env, r159_config);
                else if (r1_atom(r159_callee) && r159_env.macros.has(r159_callee) && !r159_env.macros.get(r159_callee).invokeAsAtom)
                    throw new r1_FormInvalidError(r159_pattern, 'Invalid Pattern');
                else
                    return r159_ms = r159_subpatterns.map(function _r159_t16(r160_x) {
                        return r129_toPattern(r160_x, r159_env, r159_config);
                    }), r159_t = r159_env.newt(), r159_config && r159_config.unchecked ? {
                        'whether': function _r159_t22(r161_x) {
                            return [
                                '&&',
                                [
                                    '.set',
                                    r159_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r159_callee, r159_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r161_x,
                                        [
                                            '.quote',
                                            r159_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r159_ms.map(function _r161_t2(r162_p, r162_j) {
                                return r162_p.whether([
                                    '.',
                                    r159_t,
                                    [
                                        '.quote',
                                        r162_j
                                    ]
                                ]);
                            })).filter(r129_boole);
                        },
                        'assign': function _r159_t23(r163_x, r163_locallyQ) {
                            return [
                                '.begin',
                                [
                                    '.set',
                                    r159_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r159_callee, r159_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r163_x,
                                        [
                                            '.quote',
                                            r159_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r159_ms.map(function _r163_t2(r164_p, r164_j) {
                                return r164_p.assign([
                                    '.',
                                    r159_t,
                                    [
                                        '.quote',
                                        r164_j
                                    ]
                                ], r163_locallyQ);
                            }));
                        }
                    } : {
                        'whether': function _r159_t24(r165_x) {
                            return [
                                '&&',
                                [
                                    '.set',
                                    r159_t,
                                    [
                                        [
                                            '.',
                                            r1_ex(r159_callee, r159_env),
                                            [
                                                '.quote',
                                                'unapply'
                                            ]
                                        ],
                                        r165_x,
                                        [
                                            '.quote',
                                            r159_ms.length
                                        ]
                                    ]
                                ]
                            ].concat(r159_ms.map(function _r165_t2(r166_p, r166_j) {
                                return r166_p.whether([
                                    '.',
                                    r159_t,
                                    [
                                        '.quote',
                                        r166_j
                                    ]
                                ]);
                            })).filter(r129_boole);
                        },
                        'assign': function _r159_t25(r167_x, r167_locallyQ) {
                            return ['.begin'].concat(r159_ms.map(function _r167_t2(r168_p, r168_j) {
                                return r168_p.assign([
                                    '.',
                                    r159_t,
                                    [
                                        '.quote',
                                        r168_j
                                    ]
                                ], r167_locallyQ);
                            }));
                        }
                    };
            else
                return void 0;
        };
        r129_externs.macros.put('.list', {}), r129_externs.macros.get('.list').toPattern = function _r129_t28(r177_pattern, r177_env, r177_config) {
            var r177_subpatterns, r177_ms, _r177_t0 = r177_pattern;
            return Array.isArray(_r177_t0) && _r177_t0.length >= 1 && '.list' === _r177_t0[0] ? (r177_subpatterns = _r177_t0.slice(1), r177_ms = r177_subpatterns.map(function _r177_t4(r178_x) {
                return r129_toPattern(r178_x, r177_env, r177_config);
            }), {
                'whether': function _r177_t5(r179_x) {
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r129_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r179_x
                        ],
                        [
                            '===',
                            [
                                '.',
                                r179_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r177_ms.length
                            ]
                        ]
                    ].concat(r177_ms.map(function _r179_t2(r180_p, r180_j) {
                        return r180_p.whether([
                            '.',
                            r179_x,
                            [
                                '.quote',
                                r180_j
                            ]
                        ]);
                    })).filter(r129_boole);
                },
                'assign': function _r177_t6(r181_x) {
                    return ['.begin'].concat(r177_ms.map(function _r181_t2(r182_p, r182_j) {
                        return r182_p.assign([
                            '.',
                            r181_x,
                            [
                                '.quote',
                                r182_j
                            ]
                        ]);
                    }).concat([r181_x]));
                }
            }) : void 0;
        }, r129_externs.macros.put('.conslist', {}), r129_externs.macros.get('.conslist').toPattern = function _r129_t29(r183_pattern, r183_env, r183_config) {
            var r183_subpatterns, r183_ms, r183_final, r183_fc, _r183_t0 = r183_pattern;
            return Array.isArray(_r183_t0) && _r183_t0.length >= 1 && '.conslist' === _r183_t0[0] ? (r183_subpatterns = _r183_t0.slice(1), r183_ms = r183_pattern.slice(1, -1).map(function _r183_t4(r184_x) {
                return r129_toPattern(r184_x, r183_env, r183_config);
            }), r183_final = r129_toPattern(r183_pattern[r183_pattern.length - 1], r183_env, (r183_fc = Object.create(r183_config), r183_fc.wrapper = null, r183_fc)), {
                'whether': function _r183_t5(r185_x) {
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r129_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r185_x
                        ],
                        [
                            '>=',
                            [
                                '.',
                                r185_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r183_ms.length
                            ]
                        ]
                    ].concat(r183_ms.map(function _r185_t2(r186_p, r186_j) {
                        return r186_p.whether([
                            '.',
                            r185_x,
                            [
                                '.quote',
                                r186_j
                            ]
                        ]);
                    }).concat([r183_final.whether([
                            [
                                '.',
                                r185_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r183_ms.length
                            ]
                        ])])).filter(r129_boole);
                },
                'assign': function _r183_t6(r187_x) {
                    return ['.begin'].concat(r183_ms.map(function _r187_t2(r188_p, r188_j) {
                        return r188_p.assign([
                            '.',
                            r187_x,
                            [
                                '.quote',
                                r188_j
                            ]
                        ]);
                    })).concat([r183_final.assign(r183_config && r183_config.wrapper ? [
                            [
                                '.',
                                [
                                    [
                                        '.',
                                        r187_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r183_ms.length
                                    ]
                                ],
                                [
                                    '.quote',
                                    'map'
                                ]
                            ],
                            r183_config.wrapper
                        ] : [
                            [
                                '.',
                                r187_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r183_ms.length
                            ]
                        ])]).concat([r187_x]);
                }
            }) : void 0;
        }, r129_externs.macros.put('.hash', {}), r129_externs.macros.get('.hash').toPattern = function _r129_t30(r189_pattern, r189_env, r189_config) {
            var r189_subpatterns, r189_ms, _r189_t0 = r189_pattern;
            return Array.isArray(_r189_t0) && _r189_t0.length >= 1 && '.hash' === _r189_t0[0] ? (r189_subpatterns = _r189_t0.slice(1), r189_ms = r189_subpatterns.map(function _r189_t4(r190_pair) {
                return [
                    r190_pair[0],
                    r129_toPattern(r190_pair[1], r189_env, r189_config)
                ];
            }), {
                'whether': function _r189_t5(r191_x) {
                    return [
                        '&&',
                        r191_x
                    ].concat(r189_ms.map(function _r191_t2(r192_p) {
                        return r192_p[1].whether([
                            '.',
                            r191_x,
                            [
                                '.quote',
                                r192_p[0]
                            ]
                        ]);
                    })).filter(r129_boole);
                },
                'assign': function _r189_t6(r193_x) {
                    return ['.begin'].concat(r189_ms.map(function _r193_t2(r194_p) {
                        return r194_p[1].assign([
                            '.',
                            r193_x,
                            [
                                '.quote',
                                r194_p[0]
                            ]
                        ]);
                    }).concat([r193_x]));
                }
            }) : void 0;
        }, r129_externs.macros.put('.xhash', {}), r129_externs.macros.get('.xhash').toPattern = function _r129_t31(r195_pattern, r195_env, r195_config) {
            var r195_subpatterns, r195_ms, _r195_t0 = r195_pattern;
            return Array.isArray(_r195_t0) && _r195_t0.length >= 1 && '.xhash' === _r195_t0[0] ? (r195_subpatterns = _r195_t0.slice(1), r195_ms = r195_subpatterns.map(function _r195_t4(r196_pair) {
                return [
                    r1_ex(r196_pair[0], r195_env),
                    r129_toPattern(r196_pair[1], r195_env, r195_config)
                ];
            }), {
                'whether': function _r195_t5(r197_x) {
                    return [
                        '&&',
                        r197_x
                    ].concat(r195_ms.map(function _r197_t2(r198_p) {
                        var r198_key, _r198_t5, _r198_t0 = r198_p[0];
                        return Array.isArray(_r198_t0) && _r198_t0.length === 2 && '.quote' === _r198_t0[0] ? (r198_key = _r198_t0[1], r198_p[1].whether([
                            '.',
                            r197_x,
                            r198_p[0]
                        ])) : (_r198_t5 = r195_env.newt(), function (_r198_leti1, r199_t) {
                            return r199_t = _r198_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r199_t,
                                    [
                                        '.',
                                        r197_x,
                                        r198_p[0]
                                    ]
                                ],
                                r198_p[1].whether(r199_t)
                            ];
                        }(_r198_t5));
                    })).filter(r129_boole);
                },
                'assign': function _r195_t6(r200_x) {
                    return ['.begin'].concat(r195_ms.map(function _r200_t2(r201_p) {
                        var r201_key, _r201_t5, _r201_t0 = r201_p[0];
                        return Array.isArray(_r201_t0) && _r201_t0.length === 2 && '.quote' === _r201_t0[0] ? (r201_key = _r201_t0[1], r201_p[1].assign([
                            '.',
                            r200_x,
                            r201_p[0]
                        ])) : (_r201_t5 = r195_env.newt(), function (_r201_leti1, r202_t) {
                            return r202_t = _r201_leti1, [
                                '.begin',
                                [
                                    '.set',
                                    r202_t,
                                    [
                                        '.',
                                        r200_x,
                                        r201_p[0]
                                    ]
                                ],
                                r201_p[1].assign(r202_t)
                            ];
                        }(_r201_t5));
                    }).concat([r200_x]));
                }
            }) : void 0;
        }, r129_externs.macros.put('.quasiquote', {}), r129_externs.macros.get('.quasiquote').toPattern = function _r129_t32(r203_pattern, r203_env, r203_config) {
            var r203_subpatterns, _r203_t0 = r203_pattern;
            return Array.isArray(_r203_t0) && _r203_t0.length >= 1 && '.quasiquote' === _r203_t0[0] ? (r203_subpatterns = _r203_t0.slice(1), r129_toPattern(r1_deQuasiquote(r203_pattern[1], 0, r203_env), r203_env, r203_config)) : void 0;
        }, r129_externs.macros.put('.operatorPiece', {}), r129_externs.macros.get('.operatorPiece').toPattern = function _r129_t33(r204_pattern, r204_env, r204_config) {
            return r129_toPattern(r1_opSegToRegular(r204_pattern.slice(1), r204_env), r204_env, r204_config);
        }, r129_externs.macros.put('&&', {}), r129_externs.macros.get('&&').toPattern = function _r129_t34(r205_pattern, r205_env, r205_config) {
            var r205_subpatterns, r205_ms, _r205_t0 = r205_pattern;
            return Array.isArray(_r205_t0) && _r205_t0.length >= 1 && '&&' === _r205_t0[0] ? (r205_subpatterns = _r205_t0.slice(1), r205_ms = r205_subpatterns.map(function _r205_t4(r206_x) {
                return r129_toPattern(r206_x, r205_env, r205_config);
            }), {
                'whether': function _r205_t5(r207_x) {
                    var r207_f = ['&&'].concat(r205_ms.map(function _r207_t2(r208_p, r208_j) {
                        return r208_p.whether(r207_x);
                    })).filter(r129_boole);
                    return r207_f.length === 1 ? [
                        '.quote',
                        !0
                    ] : r207_f;
                },
                'assign': function _r205_t6(r209_x) {
                    return ['.begin'].concat(r205_ms.map(function _r209_t2(r210_p, r210_j) {
                        return r210_p.assign(r209_x);
                    }).concat([r209_x]));
                }
            }) : void 0;
        }, r129_externs.macros.put('||', {}), r129_externs.macros.get('||').toPattern = function _r129_t35(r211_pattern, r211_env, r211_config) {
            var r211_subpatterns, r211_ms, _r211_t0 = r211_pattern;
            return Array.isArray(_r211_t0) && _r211_t0.length >= 1 && '||' === _r211_t0[0] ? (r211_subpatterns = _r211_t0.slice(1), r211_ms = r211_subpatterns.map(function _r211_t4(r212_x) {
                return r129_toPattern(r212_x, r211_env, r211_config);
            }), {
                'whether': function _r211_t5(r213_x) {
                    return ['||'].concat(r211_ms.map(function _r213_t2(r214_p, r214_j) {
                        return r214_p.whether(r213_x);
                    })).filter(r129_boole);
                },
                'assign': function _r211_t6(r215_x) {
                    return ['.unit'];
                }
            }) : void 0;
        };
        var r129_boole = function _r129_t36(r216_x) {
            return !!r216_x;
        };
        return r129_externs.macros.put('match', function _r129_t37(r217_form, r217_env, r217_wrapper) {
            var r217_pattern, r217_guard, r217_body, r217_pat, r217_cond, r217_tc, _r217_t0, r217_pairs = r217_form.slice(2), r217_t = r217_env.newt(), r217_f = ['.unit'], r217_j = r217_pairs.length - 1;
            for (; r217_j >= 0; r217_j -= 1)
                _r217_t0 = r217_pairs[r217_j], r217_f = Array.isArray(_r217_t0) && _r217_t0.length === 2 ? (r217_pattern = _r217_t0[0], r217_body = _r217_t0[1], r217_pat = r129_toPattern(r217_pattern, r217_env, {
                    'wrapper': r217_wrapper,
                    'locally': !0
                }), r217_cond = r217_pat.whether(r217_t), r217_cond ? [
                    '.if',
                    r217_cond,
                    [
                        '.begin',
                        r217_pat.assign(r217_t, !0),
                        r1_ex(r217_body, r217_env)
                    ],
                    r217_f
                ] : [
                    '.begin',
                    r217_pat.assign(r217_t, !0),
                    r1_ex(r217_body, r217_env)
                ]) : Array.isArray(_r217_t0) && _r217_t0.length === 3 ? (r217_pattern = _r217_t0[0], r217_guard = _r217_t0[1], r217_body = _r217_t0[2], r217_pat = r129_toPattern(r217_pattern, r217_env, {
                    'wrapper': r217_wrapper,
                    'locally': !0
                }), r217_cond = r217_pat.whether(r217_t), r217_cond ? (r217_tc = r217_env.newt(), [
                    '.begin',
                    [
                        '.set',
                        r217_tc,
                        [
                            '.quote',
                            !1
                        ]
                    ],
                    [
                        '.if',
                        r217_cond,
                        [
                            '.begin',
                            r217_pat.assign(r217_t, !0),
                            [
                                '.if',
                                r1_ex(r217_guard, r217_env),
                                [
                                    '.set',
                                    r217_tc,
                                    [
                                        '.quote',
                                        !0
                                    ]
                                ],
                                [
                                    '.set',
                                    r217_tc,
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
                        r217_tc,
                        r1_ex(r217_body, r217_env),
                        r217_f
                    ]
                ]) : [
                    '.begin',
                    r217_pat.assign(r217_t, !0),
                    [
                        '.if',
                        r1_ex(r217_guard, r217_env),
                        r1_ex(r217_body, r217_env),
                        r217_f
                    ]
                ]) : r217_f;
            return [
                '.begin',
                [
                    '.set',
                    r217_t,
                    r1_ex(r217_form[1], r217_env)
                ],
                r217_f
            ];
        }), r129_externs.macros.put('matches', function _r129_t38(r218_form, r218_env) {
            var r218_whatever, r218_obj, r218_pattern, r218_pat, r218_t, r218_cond, _r218_t0 = r218_form;
            return Array.isArray(_r218_t0) && _r218_t0.length === 3 ? (r218_whatever = _r218_t0[0], r218_obj = _r218_t0[1], r218_pattern = _r218_t0[2], r218_pat = r129_toPattern(r218_pattern, r218_env, {
                'locally': !0,
                'unchecked': !1
            }), r218_t = r218_env.newt(), r218_cond = r218_pat.whether(r218_t), r218_cond ? [
                '.begin',
                [
                    '.set',
                    r218_t,
                    r1_ex(r218_obj, r218_env)
                ],
                r218_pat.whether(r218_t)
            ] : [
                '.quote',
                !0
            ]) : void 0;
        }), r129_externs.macros.put('<~>', r129_externs.macros.get('matches')), r129_externs.operatorInfo.put('<~>', {
            'priority': 400,
            'associvity': 'never'
        }), r129_externs.macros.put('regex', function _r129_t39(r219_form, r219_env) {
            var r219_args, r219_s, r219_flag, _r219_t0 = r219_form;
            return Array.isArray(_r219_t0) && _r219_t0.length === 2 && 'regex' === _r219_t0[0] && Array.isArray(_r219_t0[1]) && _r219_t0[1].length === 2 && '.quote' === _r219_t0[1][0] ? (r219_s = _r219_t0[1][1], _r219_t0[1], [
                '.quote',
                new RegExp(r219_s)
            ]) : Array.isArray(_r219_t0) && _r219_t0.length === 3 && 'regex' === _r219_t0[0] && Array.isArray(_r219_t0[1]) && _r219_t0[1].length === 2 && '.quote' === _r219_t0[1][0] && Array.isArray(_r219_t0[2]) && _r219_t0[2].length === 2 && '.quote' === _r219_t0[2][0] ? (r219_s = _r219_t0[1][1], _r219_t0[1], r219_flag = _r219_t0[2][1], _r219_t0[2], [
                '.quote',
                new RegExp(r219_s, r219_flag)
            ]) : Array.isArray(_r219_t0) && _r219_t0.length >= 1 && 'regex' === _r219_t0[0] ? (r219_args = _r219_t0.slice(1), [
                '.new',
                r129_externs.use('RegExp')
            ].concat(r219_args)) : void 0;
        }), r129_externs.macros.put('define-macro', function _r129_t40(r220_form, r220_env) {
            var r220_op, r220_name, r220_body, r220_coinit, r220_ds, r220_imports, r220_names, r220_assignments, r220_macroG, r220_macroFn, r220_str, _r220_t1, _r220_t0 = r220_form;
            return Array.isArray(_r220_t0) && _r220_t0.length === 3 && Array.isArray(_r220_t0[1]) && _r220_t0[1].length === 2 && '.quote' === _r220_t0[1][0] ? (r220_op = _r220_t0[0], r220_str = _r220_t0[1][1], _r220_t0[1], r220_body = _r220_t0[2], r1_ex([
                r220_op,
                r220_str,
                r220_body
            ], r220_env)) : (_r220_t1 = !1, Array.isArray(_r220_t0) && _r220_t0.length === 3 && (r220_op = _r220_t0[0], r220_name = _r220_t0[1], r220_body = _r220_t0[2], r1_atom(r220_name) ? _r220_t1 = !0 : _r220_t1 = !1), _r220_t1 ? (r220_coinit = {
                'injectForm': void 0,
                'initFn': void 0
            }, r220_ds = new r1_Scope(r220_env), r220_imports = {
                'ex': r1_ex,
                'atom': r1_wrapForSyntacticClosure(r1_atom),
                'prim': r1_wrapForSyntacticClosure(r1_prim),
                'formOf': function _r220_t6(r221_x) {
                    return r221_x[1];
                },
                'scopeOf': function _r220_t7(r222_x) {
                    return r222_x[2];
                },
                'definingEnv': r220_env,
                'externEnv': r129_externs,
                'require': require,
                'toPattern': r129_toPattern,
                'coinit': r220_coinit,
                'FormInvalidError': r1_FormInvalidError,
                'deQuasiquote': r1_deQuasiquote,
                'opSegToRegular': r1_opSegToRegular
            }, r220_names = Object.keys(r220_imports), r220_ds.declare('$', !0), r220_assignments = ['.begin'].concat(r220_names.map(function _r220_t8(r223_name) {
                return [
                    'local',
                    r223_name,
                    [
                        '.',
                        '$',
                        [
                            '.quote',
                            r223_name
                        ]
                    ]
                ];
            })), r220_macroG = new Function(r220_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
                '.return',
                r1_ex([
                    '.begin',
                    r220_assignments,
                    r220_body
                ], r220_ds)
            ], r220_ds, function _r220_t9(r224_form) {
                return [
                    '.return',
                    r224_form
                ];
            }))), r220_macroFn = r220_macroG(r220_imports), r220_env.macros.put(r220_name, function _r220_t10(r225_c, r225_e) {
                var r225_result = r220_macroFn(r225_c, r225_e), r225_s = new r1_Scope(r220_env);
                return r225_s.hanging = r225_e, r225_s.semiparent = r225_e, r1_ex(r225_result, r225_s);
            }), r220_coinit.initFn && r220_coinit.initFn(r220_env.macros.get(r220_name)), r220_coinit.injectForm ? r1_ex(r220_coinit.injectForm, r220_env) : ['.unit']) : ['.unit']);
        }), r129_externs.macros.put('macro-match', function _r129_t41(r226_form, r226_env) {
            var r226_c, r226_e, r226_patterns, r226_t, r226_tx, r226_tw, _r226_t0 = r226_form;
            return Array.isArray(_r226_t0) && _r226_t0.length >= 3 && 'macro-match' === _r226_t0[0] ? (r226_c = _r226_t0[1], r226_e = _r226_t0[2], r226_patterns = _r226_t0.slice(3), r226_t = r226_env.newt(), r226_tx = r226_env.newt(), r226_tw = r226_env.newt(), [
                '.begin',
                [
                    '.set',
                    r226_t,
                    r226_e
                ],
                [
                    '.set',
                    r226_tw,
                    [
                        '.lambda',
                        [r226_tx],
                        [
                            '.return',
                            [
                                '.list',
                                [
                                    '.quote',
                                    '.syntactic-closure'
                                ],
                                r226_tx,
                                r226_t
                            ]
                        ]
                    ]
                ],
                r129_externs.macros.get('match')([
                    'match',
                    r226_c
                ].concat(r226_patterns), r226_env, r226_tw)
            ]) : ['.unit'];
        }), r129_externs.pFamily = 'r', r129_externs;
    };
exports.Create = r1_Create;
