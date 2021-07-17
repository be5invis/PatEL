'use strict';
var _s0_t0 = require('patrisika');
var _s0_t1 = require('escodegen');
var _s0_t2 = require('util');
var _s0_t3 = require('path');
var _s0_t4 = require('fs');
var _s0_t5 = require('./ex');
var _s0_t6 = require('./syntax');
var _s0_t7;
var r1_Create, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_patrisika = _s0_t0;
var r1_escodegen = _s0_t1;
var r1_util = _s0_t2;
var r1_path = _s0_t3;
var r1_fs = _s0_t4;
var r1_exlib = _s0_t5;
var _r1_t8 = _s0_t6;
var r1_parseSoruce = _r1_t8.parse;
var r1_loadSourceRelative = function (r131_f0, r131_file) {
    var r131_absolutePath = r1_path.resolve(r1_path.dirname(r131_f0), r131_file);
    return {
        'absolutePath': r131_absolutePath,
        'source': r1_fs.readFileSync(r131_absolutePath, 'utf-8')
    };
};
var r1_atom = function (r132_x) {
    return typeof r132_x === 'string';
};
var r1_identifier = function (r133_x) {
    return r1_atom(r133_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r133_x);
};
var r1_prim = function (r134_x) {
    return r1_atom(r134_x) && !r1_identifier(r134_x);
};
var r1_Scope = r1_patrisika.Scope;
var r1_ex = r1_exlib.ex;
var r1_deQuasiquote = r1_exlib.deQuasiquote;
var r1_opSegToRegular = r1_exlib.opSegToRegular;
var r1_FormInvalidError = r1_exlib.FormInvalidError;
var r1_wrapForSyntacticClosure = function (r135_fn) {
    return function (r136_x) {
        var r136_c, r136_e;
        var _r136_t0 = r136_x;
        return Array.isArray(_r136_t0) && _r136_t0.length === 3 && '.syntactic-closure' === _r136_t0[0] ? (r136_c = _r136_t0[1], r136_e = _r136_t0[2], r135_fn(r136_c)) : r135_fn(r136_x);
    };
};
_s0_t7 = r1_Create = function () {
    var r138_externs = r1_patrisika.DefaultExterns();
    r138_externs.castName = function (r139_name) {
        return r139_name;
    };
    r138_externs.declare('process');
    r138_externs.declare('Error');
    var r138_operatorRename = function (r140_op) {
        return function (r141_form, r141_env) {
            return r1_ex([r140_op].concat(r141_form.slice(1)), r141_env);
        };
    };
    var r138_reportInvalid = function (r142_form, r142_reason) {
        throw new r1_FormInvalidError(r142_form, r142_reason);
    };
    r138_externs.macros.put('begin', r138_operatorRename('.begin'));
    r138_externs.macros.put('then', r138_operatorRename('.begin'));
    r138_externs.macros.put('else', r138_operatorRename('.begin'));
    r138_externs.macros.put('while', r138_operatorRename('.while'));
    r138_externs.macros.put('try', r138_operatorRename('.try'));
    r138_externs.macros.put('is', r138_operatorRename('.is'));
    r138_externs.macros.put('<@', r138_operatorRename('.is'));
    r138_externs.macros.put('new', r138_operatorRename('.new'));
    r138_externs.macros.put('this', r138_operatorRename('.thisp'));
    r138_externs.macros.put('arguments', r138_operatorRename('.argsp'));
    r138_externs.macros.put('and', r138_operatorRename('&&'));
    r138_externs.macros.put('or', r138_operatorRename('||'));
    r138_externs.macros.put('not', r138_operatorRename('!'));
    r138_externs.macros.put('return', r138_operatorRename('.return'));
    r138_externs.macros.put('break', r138_operatorRename('.break'));
    r138_externs.macros.put('yield', r138_operatorRename('.yield'));
    r138_externs.macros.put('throw', r138_operatorRename('.throw'));
    r138_externs.macros.put('list', r138_operatorRename('.list'));
    r138_externs.macros.put('typeof', r138_operatorRename('.typeof'));
    r138_externs.macros.put('quasiquote', r138_operatorRename('.quasiquote'));
    r138_externs.macros.put('syntax', r138_operatorRename('.quasiquote'));
    r138_externs.macros.put('lambda', function (r143_form, r143_env) {
        var r143_otherwise, r143_car, r143_body, r143_parameters;
        var _r143_t0 = r143_form;
        var _r143_t1 = false;
        if (Array.isArray(_r143_t0) && _r143_t0.length === 3) {
            r143_car = _r143_t0[0];
            r143_parameters = _r143_t0[1];
            r143_body = _r143_t0[2];
            if (r1_atom(r143_parameters))
                _r143_t1 = true;
            else
                _r143_t1 = false;
        }
        return _r143_t1 ? r1_ex([
            '.lambda',
            [r143_parameters],
            r143_body
        ], r143_env) : Array.isArray(_r143_t0) && _r143_t0.length === 3 ? (r143_car = _r143_t0[0], r143_parameters = _r143_t0[1], r143_body = _r143_t0[2], r1_ex([
            '.lambda',
            r143_parameters,
            r143_body
        ], r143_env)) : Array.isArray(_r143_t0) && _r143_t0.length === 2 ? (r143_car = _r143_t0[0], r143_body = _r143_t0[1], r1_ex([
            '.lambda',
            [],
            r143_body
        ], r143_env)) : Array.isArray(_r143_t0) && _r143_t0.length === 1 ? (r143_car = _r143_t0[0], r1_ex([
            '.lambda',
            [],
            ['.unit']
        ], r143_env)) : (r143_otherwise = _r143_t0, r138_reportInvalid(r143_otherwise, 'Invalid Lambda Formation'));
    });
    r138_externs.macros.put('function', r138_externs.macros.get('lambda'));
    r138_externs.macros.put('<-', function (r144_form, r144_env) {
        return r138_externs.macros.get('define')([
            'define',
            r144_form[1],
            [
                'yield',
                r144_form[2]
            ]
        ], r144_env);
    });
    r138_externs.operatorInfo.put('<-', {
        'priority': 970,
        'associvity': 'right'
    });
    r138_externs.macros.put('->', r138_externs.macros.get('lambda'));
    r138_externs.operatorInfo.put('->', {
        'priority': 900,
        'associvity': 'right'
    });
    r138_externs.macros.put('=>', r138_externs.macros.get('lambda'));
    r138_externs.operatorInfo.put('=>', {
        'priority': 950,
        'associvity': 'right'
    });
    r138_externs.macros.put('.prefix.-', function (r145_form, r145_env) {
        return [
            '-',
            r1_ex(r145_form[1], r145_env)
        ];
    });
    r138_externs.macros.put('.prefix.+', function (r146_form, r146_env) {
        return [
            '+',
            r1_ex(r146_form[1], r146_env)
        ];
    });
    r138_externs.macros.put('.prefix.!', function (r147_form, r147_env) {
        return [
            '!',
            r1_ex(r147_form[1], r147_env)
        ];
    });
    r138_externs.macros.put('.prefix.*', function (r148_form, r148_env) {
        return r1_ex(r148_form[1], r148_env);
    });
    r138_externs.macros.put('.prefix.=', function (r149_form, r149_env) {
        return r1_ex(r149_form[1], r149_env);
    });
    r138_externs.macros.put('if', function (r150_form, r150_env) {
        var r150_otherwise, r150_test, r150_consequents, r150_alternates, r150_consequent, r150_alternate;
        var _r150_t0 = r150_form;
        return Array.isArray(_r150_t0) && _r150_t0.length === 3 && 'if' === _r150_t0[0] ? (r150_test = _r150_t0[1], r150_consequent = _r150_t0[2], r1_ex([
            '.if',
            r150_test,
            r150_consequent
        ], r150_env)) : Array.isArray(_r150_t0) && _r150_t0.length === 4 && 'if' === _r150_t0[0] ? (r150_test = _r150_t0[1], r150_consequent = _r150_t0[2], r150_alternate = _r150_t0[3], r1_ex([
            '.if',
            r150_test,
            r150_consequent,
            r150_alternate
        ], r150_env)) : Array.isArray(_r150_t0) && _r150_t0.length === 3 && 'if' === _r150_t0[0] && (Array.isArray(_r150_t0[2]) && _r150_t0[2].length >= 1 && 'then' === _r150_t0[2][0]) ? (r150_test = _r150_t0[1], r150_consequents = _r150_t0[2].slice(1), _r150_t0[2], r1_ex([
            '.if',
            r150_test,
            ['.begin'].concat(r150_consequents)
        ], r150_env)) : Array.isArray(_r150_t0) && _r150_t0.length === 4 && 'if' === _r150_t0[0] && (Array.isArray(_r150_t0[2]) && _r150_t0[2].length >= 1 && 'then' === _r150_t0[2][0]) && (Array.isArray(_r150_t0[3]) && _r150_t0[3].length >= 1 && 'else' === _r150_t0[3][0]) ? (r150_test = _r150_t0[1], r150_consequents = _r150_t0[2].slice(1), _r150_t0[2], r150_alternates = _r150_t0[3].slice(1), _r150_t0[3], r1_ex([
            '.if',
            r150_test,
            ['.begin'].concat(r150_consequents),
            ['.begin'].concat(r150_alternates)
        ], r150_env)) : (r150_otherwise = _r150_t0, r138_reportInvalid(r150_otherwise, 'Invalid Conditional Form'));
    });
    r138_externs.macros.put('let', function (r151_form, r151_env) {
        var r151_arg, r151_t, r151_param, _r151_t0, _r151_t1;
        var r151_pairs = r151_form.slice(1, 0 - 1);
        var r151_args = [];
        var r151_paras = [];
        var r151_decls = ['.begin'];
        var r151_j = 0;
        for (; r151_j < r151_pairs.length; r151_j = r151_j + 1) {
            _r151_t0 = r151_pairs[r151_j];
            if (Array.isArray(_r151_t0) && _r151_t0.length === 2) {
                r151_arg = _r151_t0[0];
                r151_param = _r151_t0[1];
                r151_t = r151_env.newt('leti');
                r151_args.push(r151_t);
                r151_paras.push(r151_param);
                r151_decls.push([
                    'define',
                    r151_arg,
                    r151_t
                ]);
            } else {
                _r151_t1 = false;
                if (Array.isArray(_r151_t0) && _r151_t0.length === 1) {
                    r151_arg = _r151_t0[0];
                    if (r1_atom(r151_arg))
                        _r151_t1 = true;
                    else
                        _r151_t1 = false;
                }
                if (!_r151_t1)
                    throw new r1_FormInvalidError(r151_pairs[r151_j], 'Invalid [let] subpattern');
                r151_t = r151_env.newt('leti');
                r151_args.push(r151_t);
                r151_paras.push(r151_env.use(r151_arg));
                r151_decls.push([
                    'define',
                    r151_arg,
                    r151_t
                ]);
            }
        }
        return r1_ex([
            '.beta',
            r151_args,
            [
                '.begin',
                r151_decls,
                r151_form[r151_form.length - 1]
            ]
        ].concat(r151_paras), r151_env);
    });
    r138_externs.macros.put('letrec', function (r152_form, r152_env) {
        var r152_arg, r152_param, _r152_t0;
        var r152_pairs = r152_form.slice(1, 0 - 1);
        var r152_decls = ['.begin'];
        var r152_j = 0;
        for (; r152_j < r152_pairs.length; r152_j = r152_j + 1) {
            _r152_t0 = r152_pairs[r152_j];
            if (!(Array.isArray(_r152_t0) && _r152_t0.length === 2))
                throw new r1_FormInvalidError(r152_pairs[r152_j], 'Invalid [letrec] subpattern');
            r152_arg = _r152_t0[0];
            r152_param = _r152_t0[1];
            r152_decls.push([
                'local',
                r152_arg,
                r152_param
            ]);
        }
        return r1_ex([
            '.beta',
            [],
            [
                '.begin',
                r152_decls,
                r152_form[r152_form.length - 1]
            ]
        ], r152_env);
    });
    r138_externs.macros.put('object', function (r153_form, r153_env) {
        if (r153_form[1] && r153_form[1][0] === '.xhash')
            return r1_ex(r153_form[1], r153_env);
        var r153_pairs = r153_form.slice(1).map(function (r154_pair) {
            var r154_method, r154_param, r154_value, r154_property, _r154_t1, _r154_t2, _r154_t3, _r154_t4, _r154_t5, _r154_t6;
            var _r154_t0 = r154_pair;
            var _r154_t7 = false;
            if (Array.isArray(_r154_t0) && _r154_t0.length === 3 && '=' === _r154_t0[0]) {
                r154_property = _r154_t0[1];
                r154_value = _r154_t0[2];
                if (r1_atom(r154_property))
                    _r154_t7 = true;
                else
                    _r154_t7 = false;
            }
            if (_r154_t7)
                return [
                    [
                        '.quote',
                        r154_property
                    ],
                    r154_value
                ];
            else {
                _r154_t6 = false;
                if (Array.isArray(_r154_t0) && _r154_t0.length === 3 && '=' === _r154_t0[0]) {
                    r154_property = _r154_t0[1];
                    r154_value = _r154_t0[2];
                    if (r1_atom(r154_property))
                        _r154_t6 = true;
                    else
                        _r154_t6 = false;
                }
                if (_r154_t6)
                    return [
                        [
                            '.quote',
                            r154_property
                        ],
                        r154_value
                    ];
                else {
                    _r154_t5 = false;
                    if (Array.isArray(_r154_t0) && _r154_t0.length === 2) {
                        r154_property = _r154_t0[0];
                        r154_value = _r154_t0[1];
                        if (r1_atom(r154_property))
                            _r154_t5 = true;
                        else
                            _r154_t5 = false;
                    }
                    if (_r154_t5)
                        return [
                            [
                                '.quote',
                                r154_property
                            ],
                            r154_value
                        ];
                    else {
                        _r154_t4 = false;
                        if (Array.isArray(_r154_t0) && _r154_t0.length === 1) {
                            r154_property = _r154_t0[0];
                            if (r1_atom(r154_property))
                                _r154_t4 = true;
                            else
                                _r154_t4 = false;
                        }
                        if (_r154_t4)
                            return [
                                [
                                    '.quote',
                                    r154_property
                                ],
                                r154_property
                            ];
                        else {
                            r154_property = _r154_t0;
                            if (r1_atom(r154_property))
                                return [
                                    [
                                        '.quote',
                                        r154_property
                                    ],
                                    r154_property
                                ];
                            else if (Array.isArray(_r154_t0) && _r154_t0.length === 3 && '=' === _r154_t0[0] && (Array.isArray(_r154_t0[1]) && _r154_t0[1].length === 2 && '.quote' === _r154_t0[1][0])) {
                                r154_property = _r154_t0[1][1];
                                _r154_t0[1];
                                r154_value = _r154_t0[2];
                                return [
                                    [
                                        '.quote',
                                        r154_property
                                    ],
                                    r154_value
                                ];
                            } else if (Array.isArray(_r154_t0) && _r154_t0.length === 3 && '=' === _r154_t0[0] && (Array.isArray(_r154_t0[1]) && _r154_t0[1].length === 2 && '.quote' === _r154_t0[1][0])) {
                                r154_property = _r154_t0[1][1];
                                _r154_t0[1];
                                r154_value = _r154_t0[2];
                                return [
                                    [
                                        '.quote',
                                        r154_property
                                    ],
                                    r154_value
                                ];
                            } else if (Array.isArray(_r154_t0) && _r154_t0.length === 2 && (Array.isArray(_r154_t0[0]) && _r154_t0[0].length === 2 && '.quote' === _r154_t0[0][0])) {
                                r154_property = _r154_t0[0][1];
                                _r154_t0[0];
                                r154_value = _r154_t0[1];
                                return [
                                    [
                                        '.quote',
                                        r154_property
                                    ],
                                    r154_value
                                ];
                            } else {
                                _r154_t3 = false;
                                if (Array.isArray(_r154_t0) && _r154_t0.length === 3 && '=' === _r154_t0[0] && (Array.isArray(_r154_t0[1]) && _r154_t0[1].length >= 1)) {
                                    r154_method = _r154_t0[1][0];
                                    r154_param = _r154_t0[1].slice(1);
                                    _r154_t0[1];
                                    r154_value = _r154_t0[2];
                                    if (r1_atom(r154_method))
                                        _r154_t3 = true;
                                    else
                                        _r154_t3 = false;
                                }
                                if (_r154_t3)
                                    return [
                                        [
                                            '.quote',
                                            r154_method
                                        ],
                                        [
                                            '.lambda',
                                            r154_param,
                                            r154_value
                                        ]
                                    ];
                                else {
                                    _r154_t2 = false;
                                    if (Array.isArray(_r154_t0) && _r154_t0.length === 3 && '=' === _r154_t0[0] && (Array.isArray(_r154_t0[1]) && _r154_t0[1].length >= 1)) {
                                        r154_method = _r154_t0[1][0];
                                        r154_param = _r154_t0[1].slice(1);
                                        _r154_t0[1];
                                        r154_value = _r154_t0[2];
                                        if (r1_atom(r154_method))
                                            _r154_t2 = true;
                                        else
                                            _r154_t2 = false;
                                    }
                                    if (_r154_t2)
                                        return [
                                            [
                                                '.quote',
                                                r154_method
                                            ],
                                            [
                                                '.lambda',
                                                r154_param,
                                                r154_value
                                            ]
                                        ];
                                    else {
                                        _r154_t1 = false;
                                        if (Array.isArray(_r154_t0) && _r154_t0.length === 2 && (Array.isArray(_r154_t0[0]) && _r154_t0[0].length >= 1)) {
                                            r154_method = _r154_t0[0][0];
                                            r154_param = _r154_t0[0].slice(1);
                                            _r154_t0[0];
                                            r154_value = _r154_t0[1];
                                            if (r1_atom(r154_method))
                                                _r154_t1 = true;
                                            else
                                                _r154_t1 = false;
                                        }
                                        if (_r154_t1)
                                            return [
                                                [
                                                    '.quote',
                                                    r154_method
                                                ],
                                                [
                                                    '.lambda',
                                                    r154_param,
                                                    r154_value
                                                ]
                                            ];
                                        else
                                            return void 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        return r1_ex(['.xhash'].concat(r153_pairs.filter(function (r155_x) {
            return r155_x;
        })), r153_env);
    });
    r138_externs.macros.get('list').toPattern = function (r156_form, r156_env, r156_config) {
        return r138_toPattern(['.list'].concat(r156_form.slice(1)), r156_env, r156_config);
    };
    r138_externs.macros.get('object').toPattern = function (r157_form, r157_env, r157_config) {
        var r157_pairs = r157_form.slice(1).map(function (r158_pair) {
            var r158_property, r158_value, _r158_t1, _r158_t2, _r158_t3;
            var _r158_t0 = r158_pair;
            var _r158_t4 = false;
            if (Array.isArray(_r158_t0) && _r158_t0.length === 3 && '=' === _r158_t0[0]) {
                r158_property = _r158_t0[1];
                r158_value = _r158_t0[2];
                if (r1_atom(r158_property))
                    _r158_t4 = true;
                else
                    _r158_t4 = false;
            }
            if (_r158_t4)
                return [
                    r158_property,
                    r158_value
                ];
            else {
                _r158_t3 = false;
                if (Array.isArray(_r158_t0) && _r158_t0.length === 3 && '=' === _r158_t0[0]) {
                    r158_property = _r158_t0[1];
                    r158_value = _r158_t0[2];
                    if (r1_atom(r158_property))
                        _r158_t3 = true;
                    else
                        _r158_t3 = false;
                }
                if (_r158_t3)
                    return [
                        r158_property,
                        r158_value
                    ];
                else {
                    _r158_t2 = false;
                    if (Array.isArray(_r158_t0) && _r158_t0.length === 2) {
                        r158_property = _r158_t0[0];
                        r158_value = _r158_t0[1];
                        if (r1_atom(r158_property))
                            _r158_t2 = true;
                        else
                            _r158_t2 = false;
                    }
                    if (_r158_t2)
                        return [
                            r158_property,
                            r158_value
                        ];
                    else {
                        _r158_t1 = false;
                        if (Array.isArray(_r158_t0) && _r158_t0.length === 1) {
                            r158_property = _r158_t0[0];
                            if (r1_atom(r158_property))
                                _r158_t1 = true;
                            else
                                _r158_t1 = false;
                        }
                        if (_r158_t1)
                            return [
                                r158_property,
                                r158_property
                            ];
                        else {
                            r158_property = _r158_t0;
                            if (r1_atom(r158_property))
                                return [
                                    r158_property,
                                    r158_property
                                ];
                            else if (Array.isArray(_r158_t0) && _r158_t0.length === 3 && '=' === _r158_t0[0] && (Array.isArray(_r158_t0[1]) && _r158_t0[1].length === 2 && '.quote' === _r158_t0[1][0])) {
                                r158_property = _r158_t0[1][1];
                                _r158_t0[1];
                                r158_value = _r158_t0[2];
                                return [
                                    r158_property,
                                    r158_value
                                ];
                            } else if (Array.isArray(_r158_t0) && _r158_t0.length === 3 && '=' === _r158_t0[0] && (Array.isArray(_r158_t0[1]) && _r158_t0[1].length === 2 && '.quote' === _r158_t0[1][0])) {
                                r158_property = _r158_t0[1][1];
                                _r158_t0[1];
                                r158_value = _r158_t0[2];
                                return [
                                    r158_property,
                                    r158_value
                                ];
                            } else if (Array.isArray(_r158_t0) && _r158_t0.length === 2 && (Array.isArray(_r158_t0[0]) && _r158_t0[0].length === 2 && '.quote' === _r158_t0[0][0])) {
                                r158_property = _r158_t0[0][1];
                                _r158_t0[0];
                                r158_value = _r158_t0[1];
                                return [
                                    r158_property,
                                    r158_value
                                ];
                            } else
                                throw new r1_FormInvalidError(r157_form, 'Invalid Assignment Left-hand Side');
                        }
                    }
                }
            }
        });
        return r138_toPattern(['.hash'].concat(r157_pairs), r157_env, r157_config);
    };
    r138_externs.macros.put('piecewise', function (r159_form, r159_env) {
        var r159_pairs, r159_f, r159_j, r159_otherwise, r159_condition, r159_consequent, _r159_t1;
        var _r159_t0 = r159_form;
        if (Array.isArray(_r159_t0) && _r159_t0.length >= 1 && 'piecewise' === _r159_t0[0]) {
            r159_pairs = _r159_t0.slice(1);
            r159_f = ['.unit'];
            r159_j = r159_pairs.length - 1;
            for (; r159_j >= 0; r159_j = r159_j - 1) {
                _r159_t1 = r159_pairs[r159_j];
                if (!(Array.isArray(_r159_t1) && _r159_t1.length === 2)) {
                    r159_otherwise = _r159_t1;
                    throw new r1_FormInvalidError(r159_otherwise, 'Invalid Piecewise Segment');
                }
                r159_condition = _r159_t1[0];
                r159_consequent = _r159_t1[1];
                r159_f = [
                    '.if',
                    r1_ex(r159_condition, r159_env),
                    r1_ex(r159_consequent, r159_env),
                    r159_f
                ];
            }
            return r159_f;
        } else
            return void 0;
    });
    var r138_AssignWithMod = function (r160_left, r160_right, r160_mod, r160_env, r160_locallyQ) {
        var r160_callee, r160_paras, r160_pat, r160_t, r160_whatever, r160_a, r160_e, r160_x, _r160_t1, _r160_t2, _r160_t3, _r160_t4, _r160_t5, _r160_t6;
        var _r160_t0 = r160_left;
        var r160_id = _r160_t0;
        if (r1_atom(r160_id))
            return r160_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r160_id,
                    (r160_locallyQ || 1) - 1
                ], r160_env),
                r1_ex([
                    r160_mod,
                    r160_right
                ], r160_env)
            ] : [
                '.set',
                r1_ex(r160_left, r160_env),
                r1_ex([
                    r160_mod,
                    r160_right
                ], r160_env)
            ];
        else {
            _r160_t6 = false;
            if (Array.isArray(_r160_t0) && _r160_t0.length === 2 && '.id' === _r160_t0[0]) {
                r160_id = _r160_t0[1];
                if (r1_atom(r160_id))
                    _r160_t6 = true;
                else
                    _r160_t6 = false;
            }
            if (_r160_t6)
                return r160_locallyQ ? [
                    '.set',
                    r1_ex([
                        '.local',
                        r160_id,
                        (r160_locallyQ || 1) - 1
                    ], r160_env),
                    r1_ex([
                        r160_mod,
                        r160_right
                    ], r160_env)
                ] : [
                    '.set',
                    r1_ex(r160_left, r160_env),
                    r1_ex([
                        r160_mod,
                        r160_right
                    ], r160_env)
                ];
            else {
                _r160_t5 = false;
                if (Array.isArray(_r160_t0) && _r160_t0.length === 3 && '.id' === _r160_t0[0]) {
                    r160_id = _r160_t0[1];
                    r160_e = _r160_t0[2];
                    if (r1_atom(r160_id) && (r160_e === r160_env || !r160_locallyQ))
                        _r160_t5 = true;
                    else
                        _r160_t5 = false;
                }
                if (_r160_t5)
                    return r160_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r160_id,
                            (r160_locallyQ || 1) - 1
                        ], r160_e),
                        r1_ex([
                            r160_mod,
                            r160_right
                        ], r160_e)
                    ] : [
                        '.set',
                        r1_ex(r160_left, r160_e),
                        r1_ex([
                            r160_mod,
                            r160_right
                        ], r160_e)
                    ];
                else {
                    _r160_t4 = false;
                    if (Array.isArray(_r160_t0) && _r160_t0.length === 3 && '.id' === _r160_t0[0]) {
                        r160_id = _r160_t0[1];
                        r160_e = _r160_t0[2];
                        if (r1_atom(r160_id) && r160_e !== r160_env && r160_locallyQ)
                            _r160_t4 = true;
                        else
                            _r160_t4 = false;
                    }
                    if (_r160_t4)
                        throw new r1_FormInvalidError(r160_left, 'Attempt to redefine non-local subform');
                    else if (Array.isArray(_r160_t0) && _r160_t0.length === 3 && '.local' === _r160_t0[0])
                        return r160_a = _r160_t0[1], r160_x = _r160_t0[2], r138_AssignWithMod(r160_a, r160_right, r160_mod, r160_env, r160_x);
                    else if (Array.isArray(_r160_t0) && _r160_t0.length === 2 && '.local' === _r160_t0[0])
                        return r160_a = _r160_t0[1], r138_AssignWithMod(r160_a, r160_right, r160_mod, r160_env, r160_locallyQ || true);
                    else {
                        _r160_t3 = false;
                        if (Array.isArray(_r160_t0) && _r160_t0.length === 3 && '.syntactic-closure' === _r160_t0[0]) {
                            r160_a = _r160_t0[1];
                            r160_e = _r160_t0[2];
                            if (r160_e === r160_env || !r160_locallyQ)
                                _r160_t3 = true;
                            else
                                _r160_t3 = false;
                        }
                        if (_r160_t3)
                            return r138_AssignWithMod(r160_a, r160_right, r160_mod, r160_env, r160_locallyQ);
                        else {
                            _r160_t2 = false;
                            if (Array.isArray(_r160_t0) && _r160_t0.length === 3 && '.syntactic-closure' === _r160_t0[0]) {
                                r160_a = _r160_t0[1];
                                r160_e = _r160_t0[2];
                                if (r160_e !== r160_env && r160_locallyQ)
                                    _r160_t2 = true;
                                else
                                    _r160_t2 = false;
                            }
                            if (_r160_t2)
                                throw new r1_FormInvalidError(r160_left, 'Attempt to redefine non-local subform');
                            else if (Array.isArray(_r160_t0) && _r160_t0.length >= 1 && '.revcall' === _r160_t0[0])
                                return r160_whatever = _r160_t0.slice(1), r138_AssignWithMod([].concat(r160_whatever), r160_right, r160_mod, r160_env, r160_locallyQ);
                            else if (Array.isArray(_r160_t0) && _r160_t0.length >= 1) {
                                r160_callee = _r160_t0[0];
                                r160_paras = _r160_t0.slice(1);
                                if (r1_atom(r160_callee) && r160_env.macros.has(r160_callee) && r160_env.macros.get(r160_callee).toPattern) {
                                    r160_pat = r138_toPattern(r160_left, r160_env, {
                                        'locally': r160_locallyQ,
                                        'const': r160_locallyQ > 1,
                                        'unchecked': r160_mod !== 'checked'
                                    });
                                    r160_t = r160_env.newt();
                                    _r160_t1 = r160_mod;
                                    if ('checked' === _r160_t1)
                                        return [
                                            '.begin',
                                            [
                                                '.set',
                                                r160_t,
                                                r1_ex([
                                                    '.unquote',
                                                    r160_right
                                                ], r160_env)
                                            ],
                                            [
                                                '.if',
                                                r160_pat.whether(r160_t) || [
                                                    '.quote',
                                                    true
                                                ],
                                                r160_pat.assign(r160_t, r160_locallyQ)
                                            ]
                                        ];
                                    else
                                        return [
                                            '.begin',
                                            [
                                                '.set',
                                                r160_t,
                                                r1_ex([
                                                    r160_mod,
                                                    r160_right
                                                ], r160_env)
                                            ],
                                            r160_pat.assign(r160_t, r160_locallyQ)
                                        ];
                                } else if (r1_atom(r160_callee) && r160_env.macros.has(r160_callee))
                                    throw new r1_FormInvalidError(r160_left, 'Invalid Assignment Left-hand Side');
                                else
                                    return r1_prim(r160_callee) ? [
                                        '.set',
                                        r1_ex(r160_left, r160_env),
                                        r1_ex([
                                            r160_mod,
                                            r160_right
                                        ], r160_env)
                                    ] : r1_atom(r160_callee) ? r160_locallyQ ? [
                                        '.set',
                                        r1_ex([
                                            '.local',
                                            r160_callee,
                                            (r160_locallyQ || 1) - 1
                                        ], r160_env),
                                        r1_ex([
                                            r160_mod,
                                            [
                                                '.lambda',
                                                [].concat(r160_paras),
                                                r160_right
                                            ]
                                        ], r160_env)
                                    ] : [
                                        '.set',
                                        r1_ex(r160_callee, r160_env),
                                        r1_ex([
                                            r160_mod,
                                            [
                                                '.lambda',
                                                [].concat(r160_paras),
                                                r160_right
                                            ]
                                        ], r160_env)
                                    ] : [
                                        '.set',
                                        r1_ex(r160_callee, r160_env),
                                        r1_ex([
                                            r160_mod,
                                            [
                                                '.lambda',
                                                [].concat(r160_paras),
                                                r160_right
                                            ]
                                        ], r160_env)
                                    ];
                            } else
                                throw new r1_FormInvalidError(r160_left, 'Invalid Assignment Left-hand Side');
                        }
                    }
                }
            }
        }
    };
    var r138_Assign = function (r161_left, r161_right, r161_env, r161_locallyQ) {
        return r138_AssignWithMod(r161_left, r161_right, '.unquote', r161_env, r161_locallyQ);
    };
    r138_externs.macros.put('define', function (r162_form, r162_env) {
        var r162_any, r162_op, r162_left, r162_right, r162_modifer;
        var _r162_t0 = r162_form;
        if (Array.isArray(_r162_t0) && _r162_t0.length === 4)
            return r162_op = _r162_t0[0], r162_modifer = _r162_t0[1], r162_left = _r162_t0[2], r162_right = _r162_t0[3], r138_AssignWithMod(r162_left, r162_right, r162_modifer, r162_env, 2);
        else if (Array.isArray(_r162_t0) && _r162_t0.length === 3)
            return r162_op = _r162_t0[0], r162_left = _r162_t0[1], r162_right = _r162_t0[2], r138_Assign(r162_left, r162_right, r162_env, 2);
        else {
            r162_any = _r162_t0;
            throw new r1_FormInvalidError(r162_any, 'Invalid Assignment');
        }
    });
    r138_externs.macros.put('local', function (r163_form, r163_env) {
        var r163_any, r163_op, r163_left, r163_right, r163_modifer, _r163_t1;
        var _r163_t0 = r163_form;
        if (Array.isArray(_r163_t0) && _r163_t0.length === 4)
            return r163_op = _r163_t0[0], r163_modifer = _r163_t0[1], r163_left = _r163_t0[2], r163_right = _r163_t0[3], r138_AssignWithMod(r163_left, r163_right, r163_modifer, r163_env, true);
        else if (Array.isArray(_r163_t0) && _r163_t0.length === 3)
            return r163_op = _r163_t0[0], r163_left = _r163_t0[1], r163_right = _r163_t0[2], r138_Assign(r163_left, r163_right, r163_env, true);
        else {
            _r163_t1 = false;
            if (Array.isArray(_r163_t0) && _r163_t0.length === 2) {
                r163_op = _r163_t0[0];
                r163_left = _r163_t0[1];
                if (r1_atom(r163_left))
                    _r163_t1 = true;
                else
                    _r163_t1 = false;
            }
            if (_r163_t1)
                return [
                    '.local',
                    r163_left
                ];
            else {
                r163_any = _r163_t0;
                throw new r1_FormInvalidError(r163_any, 'Invalid Assignment');
            }
        }
    });
    r138_externs.macros.put('const', r138_externs.macros.get('define'));
    r138_externs.macros.put('set', function (r164_form, r164_env) {
        var r164_any, r164_op, r164_left, r164_right;
        var _r164_t0 = r164_form;
        if (Array.isArray(_r164_t0) && _r164_t0.length === 3)
            return r164_op = _r164_t0[0], r164_left = _r164_t0[1], r164_right = _r164_t0[2], r138_Assign(r164_left, r164_right, r164_env, false);
        else {
            r164_any = _r164_t0;
            throw new r1_FormInvalidError(r164_any, 'Invalid Assignment');
        }
    });
    r138_externs.macros.put('=', r138_externs.macros.get('set'));
    r138_externs.macros.put('inc', function (r165_form, r165_env) {
        var r165_op, r165_id, r165_shift;
        var _r165_t0 = r165_form;
        return Array.isArray(_r165_t0) && _r165_t0.length === 2 ? (r165_op = _r165_t0[0], r165_id = _r165_t0[1], r138_Assign(r165_id, [
            '+',
            r165_id,
            [
                '.quote',
                1
            ]
        ], r165_env, false)) : Array.isArray(_r165_t0) && _r165_t0.length === 3 ? (r165_op = _r165_t0[0], r165_id = _r165_t0[1], r165_shift = _r165_t0[2], r138_Assign(r165_id, [
            '+',
            r165_id,
            r165_shift
        ], r165_env, false)) : Array.isArray(_r165_t0) && _r165_t0.length === 4 && 'by' === _r165_t0[2] ? (r165_op = _r165_t0[0], r165_id = _r165_t0[1], r165_shift = _r165_t0[3], r138_Assign(r165_id, [
            '+',
            r165_id,
            r165_shift
        ], r165_env, false)) : void 0;
    });
    r138_externs.macros.put('dec', function (r166_form, r166_env) {
        var r166_op, r166_id, r166_shift;
        var _r166_t0 = r166_form;
        return Array.isArray(_r166_t0) && _r166_t0.length === 2 ? (r166_op = _r166_t0[0], r166_id = _r166_t0[1], r138_Assign(r166_id, [
            '-',
            r166_id,
            [
                '.quote',
                1
            ]
        ], r166_env, false)) : Array.isArray(_r166_t0) && _r166_t0.length === 3 ? (r166_op = _r166_t0[0], r166_id = _r166_t0[1], r166_shift = _r166_t0[2], r138_Assign(r166_id, [
            '-',
            r166_id,
            r166_shift
        ], r166_env, false)) : Array.isArray(_r166_t0) && _r166_t0.length === 4 && 'by' === _r166_t0[2] ? (r166_op = _r166_t0[0], r166_id = _r166_t0[1], r166_shift = _r166_t0[3], r138_Assign(r166_id, [
            '-',
            r166_id,
            r166_shift
        ], r166_env, false)) : void 0;
    });
    r138_externs.macros.put('for', function (r167_form, r167_env) {
        var r167_init, r167_test, r167_step, r167_body;
        var _r167_t0 = r167_form;
        return Array.isArray(_r167_t0) && _r167_t0.length === 5 && 'for' === _r167_t0[0] ? (r167_init = _r167_t0[1], r167_test = _r167_t0[2], r167_step = _r167_t0[3], r167_body = _r167_t0[4], [
            '.begin',
            r1_ex(r167_init, r167_env),
            [
                '.while',
                r1_ex(r167_test, r167_env),
                [
                    '.begin',
                    r1_ex(r167_body, r167_env),
                    r1_ex(r167_step, r167_env)
                ]
            ]
        ]) : void 0;
    });
    r138_externs.macros.put('this', ['.thisp']);
    r138_externs.macros.put('arguments', ['.argsp']);
    r138_externs.macros.put('nothing', ['.unit']);
    r138_externs.macros.put('undefined', ['.unit']);
    r138_externs.macros.put('null', [
        '.quote',
        null
    ]);
    r138_externs.macros.put('true', [
        '.quote',
        true
    ]);
    r138_externs.macros.put('false', [
        '.quote',
        false
    ]);
    var r138_toPattern = function (r168_pattern, r168_env, r168_config) {
        var r168_callee, r168_subpatterns, r168_ms, r168_t, r168_whatever, r168_x, _r168_t1;
        var _r168_t0 = r168_pattern;
        var r168_id = _r168_t0;
        if (r1_atom(r168_id))
            return {
                'whether': function (r184_x) {
                    return null;
                },
                'assign': function (r185_x) {
                    return [
                        '.set',
                        r1_ex(r168_config && r168_config.locally ? [
                            '.local',
                            r168_id,
                            r168_config.const
                        ] : r168_id, r168_env),
                        r168_config && r168_config.wrapper ? [
                            r168_config.wrapper,
                            r185_x
                        ] : r185_x
                    ];
                }
            };
        else {
            _r168_t1 = false;
            if (Array.isArray(_r168_t0) && _r168_t0.length === 2 && '.id' === _r168_t0[0]) {
                r168_id = _r168_t0[1];
                if (r1_atom(r168_id))
                    _r168_t1 = true;
                else
                    _r168_t1 = false;
            }
            if (_r168_t1)
                return {
                    'whether': function (r182_x) {
                        return null;
                    },
                    'assign': function (r183_x) {
                        return [
                            '.set',
                            r1_ex(r168_config && r168_config.locally ? [
                                '.local',
                                r168_id,
                                r168_config.const
                            ] : r168_id, r168_env),
                            r168_config && r168_config.wrapper ? [
                                r168_config.wrapper,
                                r183_x
                            ] : r183_x
                        ];
                    }
                };
            else if (Array.isArray(_r168_t0) && _r168_t0.length === 2 && '.quote' === _r168_t0[0])
                return r168_x = _r168_t0[1], {
                    'whether': function (r180_x) {
                        return [
                            '===',
                            r1_ex(r168_pattern, r168_env),
                            r180_x
                        ];
                    },
                    'assign': function (r181_x) {
                        return ['.unit'];
                    }
                };
            else if (Array.isArray(_r168_t0) && _r168_t0.length >= 1 && '.' === _r168_t0[0])
                return r168_whatever = _r168_t0.slice(1), {
                    'whether': function (r178_x) {
                        return null;
                    },
                    'assign': function (r179_x) {
                        return [
                            '.set',
                            r1_ex(r168_pattern, r168_env),
                            r168_config && r168_config.wrapper ? [
                                r168_config.wrapper,
                                r179_x
                            ] : r179_x
                        ];
                    }
                };
            else if (Array.isArray(_r168_t0) && _r168_t0.length >= 1) {
                r168_callee = _r168_t0[0];
                r168_subpatterns = _r168_t0.slice(1);
                if (r1_atom(r168_callee) && r168_env.macros.has(r168_callee) && r168_env.macros.get(r168_callee).toPattern)
                    return r168_env.macros.get(r168_callee).toPattern(r168_pattern, r168_env, r168_config);
                else if (r1_atom(r168_callee) && r168_env.macros.has(r168_callee) && !r168_env.macros.get(r168_callee).invokeAsAtom)
                    throw new r1_FormInvalidError(r168_pattern, 'Invalid Pattern');
                else {
                    r168_ms = r168_subpatterns.map(function (r169_x) {
                        return r138_toPattern(r169_x, r168_env, r168_config);
                    });
                    r168_t = r168_env.newt();
                    if (r168_config && r168_config.unchecked)
                        return {
                            'whether': function (r170_x) {
                                return [
                                    '&&',
                                    [
                                        '.set',
                                        r168_t,
                                        [
                                            [
                                                '.',
                                                r1_ex(r168_callee, r168_env),
                                                [
                                                    '.quote',
                                                    'unapply'
                                                ]
                                            ],
                                            r170_x,
                                            [
                                                '.quote',
                                                r168_ms.length
                                            ]
                                        ]
                                    ]
                                ].concat(r168_ms.map(function (r171_p, r171_j) {
                                    return r171_p.whether([
                                        '.',
                                        r168_t,
                                        [
                                            '.quote',
                                            r171_j
                                        ]
                                    ]);
                                })).filter(r138_boole);
                            },
                            'assign': function (r172_x, r172_locallyQ) {
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r168_t,
                                        [
                                            [
                                                '.',
                                                r1_ex(r168_callee, r168_env),
                                                [
                                                    '.quote',
                                                    'unapply'
                                                ]
                                            ],
                                            r172_x,
                                            [
                                                '.quote',
                                                r168_ms.length
                                            ]
                                        ]
                                    ]
                                ].concat(r168_ms.map(function (r173_p, r173_j) {
                                    return r173_p.assign([
                                        '.',
                                        r168_t,
                                        [
                                            '.quote',
                                            r173_j
                                        ]
                                    ], r172_locallyQ);
                                }));
                            }
                        };
                    else
                        return {
                            'whether': function (r174_x) {
                                return [
                                    '&&',
                                    [
                                        '.set',
                                        r168_t,
                                        [
                                            [
                                                '.',
                                                r1_ex(r168_callee, r168_env),
                                                [
                                                    '.quote',
                                                    'unapply'
                                                ]
                                            ],
                                            r174_x,
                                            [
                                                '.quote',
                                                r168_ms.length
                                            ]
                                        ]
                                    ]
                                ].concat(r168_ms.map(function (r175_p, r175_j) {
                                    return r175_p.whether([
                                        '.',
                                        r168_t,
                                        [
                                            '.quote',
                                            r175_j
                                        ]
                                    ]);
                                })).filter(r138_boole);
                            },
                            'assign': function (r176_x, r176_locallyQ) {
                                return ['.begin'].concat(r168_ms.map(function (r177_p, r177_j) {
                                    return r177_p.assign([
                                        '.',
                                        r168_t,
                                        [
                                            '.quote',
                                            r177_j
                                        ]
                                    ], r176_locallyQ);
                                }));
                            }
                        };
                }
            } else
                return void 0;
        }
    };
    r138_externs.macros.put('.list', {});
    r138_externs.macros.get('.list').toPattern = function (r186_pattern, r186_env, r186_config) {
        var r186_subpatterns, r186_ms;
        var _r186_t0 = r186_pattern;
        if (Array.isArray(_r186_t0) && _r186_t0.length >= 1 && '.list' === _r186_t0[0]) {
            r186_subpatterns = _r186_t0.slice(1);
            r186_ms = r186_subpatterns.map(function (r187_x) {
                return r138_toPattern(r187_x, r186_env, r186_config);
            });
            return {
                'whether': function (r188_x) {
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r138_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r188_x
                        ],
                        [
                            '===',
                            [
                                '.',
                                r188_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r186_ms.length
                            ]
                        ]
                    ].concat(r186_ms.map(function (r189_p, r189_j) {
                        return r189_p.whether([
                            '.',
                            r188_x,
                            [
                                '.quote',
                                r189_j
                            ]
                        ]);
                    })).filter(r138_boole);
                },
                'assign': function (r190_x) {
                    return ['.begin'].concat(r186_ms.map(function (r191_p, r191_j) {
                        return r191_p.assign([
                            '.',
                            r190_x,
                            [
                                '.quote',
                                r191_j
                            ]
                        ]);
                    }).concat([r190_x]));
                }
            };
        } else
            return void 0;
    };
    r138_externs.macros.put('.conslist', {});
    r138_externs.macros.get('.conslist').toPattern = function (r192_pattern, r192_env, r192_config) {
        var r192_subpatterns, r192_ms, r192_final, r192_fc;
        var _r192_t0 = r192_pattern;
        if (Array.isArray(_r192_t0) && _r192_t0.length >= 1 && '.conslist' === _r192_t0[0]) {
            r192_subpatterns = _r192_t0.slice(1);
            r192_ms = r192_pattern.slice(1, 0 - 1).map(function (r193_x) {
                return r138_toPattern(r193_x, r192_env, r192_config);
            });
            r192_final = r138_toPattern(r192_pattern[r192_pattern.length - 1], r192_env, (r192_fc = Object.create(r192_config), r192_fc.wrapper = null, r192_fc));
            return {
                'whether': function (r194_x) {
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r138_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r194_x
                        ],
                        [
                            '>=',
                            [
                                '.',
                                r194_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r192_ms.length
                            ]
                        ]
                    ].concat(r192_ms.map(function (r195_p, r195_j) {
                        return r195_p.whether([
                            '.',
                            r194_x,
                            [
                                '.quote',
                                r195_j
                            ]
                        ]);
                    }).concat([r192_final.whether([
                            [
                                '.',
                                r194_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r192_ms.length
                            ]
                        ])])).filter(r138_boole);
                },
                'assign': function (r196_x) {
                    return ['.begin'].concat(r192_ms.map(function (r197_p, r197_j) {
                        return r197_p.assign([
                            '.',
                            r196_x,
                            [
                                '.quote',
                                r197_j
                            ]
                        ]);
                    })).concat([r192_final.assign(r192_config && r192_config.wrapper ? [
                            [
                                '.',
                                [
                                    [
                                        '.',
                                        r196_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r192_ms.length
                                    ]
                                ],
                                [
                                    '.quote',
                                    'map'
                                ]
                            ],
                            r192_config.wrapper
                        ] : [
                            [
                                '.',
                                r196_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r192_ms.length
                            ]
                        ])]).concat([r196_x]);
                }
            };
        } else
            return void 0;
    };
    r138_externs.macros.put('.hash', {});
    r138_externs.macros.get('.hash').toPattern = function (r198_pattern, r198_env, r198_config) {
        var r198_subpatterns, r198_ms;
        var _r198_t0 = r198_pattern;
        if (Array.isArray(_r198_t0) && _r198_t0.length >= 1 && '.hash' === _r198_t0[0]) {
            r198_subpatterns = _r198_t0.slice(1);
            r198_ms = r198_subpatterns.map(function (r199_pair) {
                return [
                    r199_pair[0],
                    r138_toPattern(r199_pair[1], r198_env, r198_config)
                ];
            });
            return {
                'whether': function (r200_x) {
                    return [
                        '&&',
                        r200_x
                    ].concat(r198_ms.map(function (r201_p) {
                        return r201_p[1].whether([
                            '.',
                            r200_x,
                            [
                                '.quote',
                                r201_p[0]
                            ]
                        ]);
                    })).filter(r138_boole);
                },
                'assign': function (r202_x) {
                    return ['.begin'].concat(r198_ms.map(function (r203_p) {
                        return r203_p[1].assign([
                            '.',
                            r202_x,
                            [
                                '.quote',
                                r203_p[0]
                            ]
                        ]);
                    }).concat([r202_x]));
                }
            };
        } else
            return void 0;
    };
    r138_externs.macros.put('.xhash', {});
    r138_externs.macros.get('.xhash').toPattern = function (r204_pattern, r204_env, r204_config) {
        var r204_subpatterns, r204_ms;
        var _r204_t0 = r204_pattern;
        if (Array.isArray(_r204_t0) && _r204_t0.length >= 1 && '.xhash' === _r204_t0[0]) {
            r204_subpatterns = _r204_t0.slice(1);
            r204_ms = r204_subpatterns.map(function (r205_pair) {
                return [
                    r1_ex(r205_pair[0], r204_env),
                    r138_toPattern(r205_pair[1], r204_env, r204_config)
                ];
            });
            return {
                'whether': function (r206_x) {
                    return [
                        '&&',
                        r206_x
                    ].concat(r204_ms.map(function (r207_p) {
                        var r207_key, _r207_t5;
                        var _r207_t0 = r207_p[0];
                        if (Array.isArray(_r207_t0) && _r207_t0.length === 2 && '.quote' === _r207_t0[0])
                            return r207_key = _r207_t0[1], r207_p[1].whether([
                                '.',
                                r206_x,
                                r207_p[0]
                            ]);
                        else {
                            _r207_t5 = r204_env.newt();
                            return function (_r207_leti1) {
                                var r208_t = _r207_leti1;
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r208_t,
                                        [
                                            '.',
                                            r206_x,
                                            r207_p[0]
                                        ]
                                    ],
                                    r207_p[1].whether(r208_t)
                                ];
                            }(_r207_t5);
                        }
                    })).filter(r138_boole);
                },
                'assign': function (r209_x) {
                    return ['.begin'].concat(r204_ms.map(function (r210_p) {
                        var r210_key, _r210_t5;
                        var _r210_t0 = r210_p[0];
                        if (Array.isArray(_r210_t0) && _r210_t0.length === 2 && '.quote' === _r210_t0[0])
                            return r210_key = _r210_t0[1], r210_p[1].assign([
                                '.',
                                r209_x,
                                r210_p[0]
                            ]);
                        else {
                            _r210_t5 = r204_env.newt();
                            return function (_r210_leti1) {
                                var r211_t = _r210_leti1;
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r211_t,
                                        [
                                            '.',
                                            r209_x,
                                            r210_p[0]
                                        ]
                                    ],
                                    r210_p[1].assign(r211_t)
                                ];
                            }(_r210_t5);
                        }
                    }).concat([r209_x]));
                }
            };
        } else
            return void 0;
    };
    r138_externs.macros.put('.quasiquote', {});
    r138_externs.macros.get('.quasiquote').toPattern = function (r212_pattern, r212_env, r212_config) {
        var r212_subpatterns;
        var _r212_t0 = r212_pattern;
        return Array.isArray(_r212_t0) && _r212_t0.length >= 1 && '.quasiquote' === _r212_t0[0] ? (r212_subpatterns = _r212_t0.slice(1), r138_toPattern(r1_deQuasiquote(r212_pattern[1], 0, r212_env), r212_env, r212_config)) : void 0;
    };
    r138_externs.macros.put('.operatorPiece', {});
    r138_externs.macros.get('.operatorPiece').toPattern = function (r213_pattern, r213_env, r213_config) {
        return r138_toPattern(r1_opSegToRegular(r213_pattern.slice(1), r213_env), r213_env, r213_config);
    };
    r138_externs.macros.put('&&', {});
    r138_externs.macros.get('&&').toPattern = function (r214_pattern, r214_env, r214_config) {
        var r214_subpatterns, r214_ms;
        var _r214_t0 = r214_pattern;
        if (Array.isArray(_r214_t0) && _r214_t0.length >= 1 && '&&' === _r214_t0[0]) {
            r214_subpatterns = _r214_t0.slice(1);
            r214_ms = r214_subpatterns.map(function (r215_x) {
                return r138_toPattern(r215_x, r214_env, r214_config);
            });
            return {
                'whether': function (r216_x) {
                    var r216_f = ['&&'].concat(r214_ms.map(function (r217_p, r217_j) {
                        return r217_p.whether(r216_x);
                    })).filter(r138_boole);
                    if (r216_f.length === 1)
                        return [
                            '.quote',
                            true
                        ];
                    return r216_f;
                },
                'assign': function (r218_x) {
                    return ['.begin'].concat(r214_ms.map(function (r219_p, r219_j) {
                        return r219_p.assign(r218_x);
                    }).concat([r218_x]));
                }
            };
        } else
            return void 0;
    };
    r138_externs.macros.put('||', {});
    r138_externs.macros.get('||').toPattern = function (r220_pattern, r220_env, r220_config) {
        var r220_subpatterns, r220_ms;
        var _r220_t0 = r220_pattern;
        if (Array.isArray(_r220_t0) && _r220_t0.length >= 1 && '||' === _r220_t0[0]) {
            r220_subpatterns = _r220_t0.slice(1);
            r220_ms = r220_subpatterns.map(function (r221_x) {
                return r138_toPattern(r221_x, r220_env, r220_config);
            });
            return {
                'whether': function (r222_x) {
                    return ['||'].concat(r220_ms.map(function (r223_p, r223_j) {
                        return r223_p.whether(r222_x);
                    })).filter(r138_boole);
                },
                'assign': function (r224_x) {
                    return ['.unit'];
                }
            };
        } else
            return void 0;
    };
    var r138_boole = function (r225_x) {
        return !!r225_x;
    };
    r138_externs.macros.put('match', function (r226_form, r226_env, r226_wrapper) {
        var r226_pattern, r226_guard, r226_body, r226_pat, r226_cond, r226_tc, _r226_t0;
        var r226_pairs = r226_form.slice(2);
        var r226_t = r226_env.newt();
        var r226_f = ['.unit'];
        var r226_j = r226_pairs.length - 1;
        for (; r226_j >= 0; r226_j = r226_j - 1)
            r226_f = (_r226_t0 = r226_pairs[r226_j], Array.isArray(_r226_t0) && _r226_t0.length === 2 ? (r226_pattern = _r226_t0[0], r226_body = _r226_t0[1], r226_pat = r138_toPattern(r226_pattern, r226_env, {
                'wrapper': r226_wrapper,
                'locally': true
            }), r226_cond = r226_pat.whether(r226_t), r226_cond ? [
                '.if',
                r226_cond,
                [
                    '.begin',
                    r226_pat.assign(r226_t, true),
                    r1_ex(r226_body, r226_env)
                ],
                r226_f
            ] : [
                '.begin',
                r226_pat.assign(r226_t, true),
                r1_ex(r226_body, r226_env)
            ]) : Array.isArray(_r226_t0) && _r226_t0.length === 3 ? (r226_pattern = _r226_t0[0], r226_guard = _r226_t0[1], r226_body = _r226_t0[2], r226_pat = r138_toPattern(r226_pattern, r226_env, {
                'wrapper': r226_wrapper,
                'locally': true
            }), r226_cond = r226_pat.whether(r226_t), r226_cond ? (r226_tc = r226_env.newt(), [
                '.begin',
                [
                    '.set',
                    r226_tc,
                    [
                        '.quote',
                        false
                    ]
                ],
                [
                    '.if',
                    r226_cond,
                    [
                        '.begin',
                        r226_pat.assign(r226_t, true),
                        [
                            '.if',
                            r1_ex(r226_guard, r226_env),
                            [
                                '.set',
                                r226_tc,
                                [
                                    '.quote',
                                    true
                                ]
                            ],
                            [
                                '.set',
                                r226_tc,
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
                    r226_tc,
                    r1_ex(r226_body, r226_env),
                    r226_f
                ]
            ]) : [
                '.begin',
                r226_pat.assign(r226_t, true),
                [
                    '.if',
                    r1_ex(r226_guard, r226_env),
                    r1_ex(r226_body, r226_env),
                    r226_f
                ]
            ]) : r226_f);
        return [
            '.begin',
            [
                '.set',
                r226_t,
                r1_ex(r226_form[1], r226_env)
            ],
            r226_f
        ];
    });
    r138_externs.macros.put('matches', function (r227_form, r227_env) {
        var r227_whatever, r227_obj, r227_pattern, r227_pat, r227_t, r227_cond;
        var _r227_t0 = r227_form;
        if (Array.isArray(_r227_t0) && _r227_t0.length === 3) {
            r227_whatever = _r227_t0[0];
            r227_obj = _r227_t0[1];
            r227_pattern = _r227_t0[2];
            r227_pat = r138_toPattern(r227_pattern, r227_env, {
                'locally': true,
                'unchecked': false
            });
            r227_t = r227_env.newt();
            r227_cond = r227_pat.whether(r227_t);
            if (r227_cond)
                return [
                    '.begin',
                    [
                        '.set',
                        r227_t,
                        r1_ex(r227_obj, r227_env)
                    ],
                    r227_pat.whether(r227_t)
                ];
            else
                return [
                    '.quote',
                    true
                ];
        } else
            return void 0;
    });
    r138_externs.macros.put('<~>', r138_externs.macros.get('matches'));
    r138_externs.operatorInfo.put('<~>', {
        'priority': 400,
        'associvity': 'never'
    });
    r138_externs.macros.put('regex', function (r228_form, r228_env) {
        var r228_args, r228_s, r228_flag;
        var _r228_t0 = r228_form;
        return Array.isArray(_r228_t0) && _r228_t0.length === 2 && 'regex' === _r228_t0[0] && (Array.isArray(_r228_t0[1]) && _r228_t0[1].length === 2 && '.quote' === _r228_t0[1][0]) ? (r228_s = _r228_t0[1][1], _r228_t0[1], [
            '.quote',
            new RegExp(r228_s)
        ]) : Array.isArray(_r228_t0) && _r228_t0.length === 3 && 'regex' === _r228_t0[0] && (Array.isArray(_r228_t0[1]) && _r228_t0[1].length === 2 && '.quote' === _r228_t0[1][0]) && (Array.isArray(_r228_t0[2]) && _r228_t0[2].length === 2 && '.quote' === _r228_t0[2][0]) ? (r228_s = _r228_t0[1][1], _r228_t0[1], r228_flag = _r228_t0[2][1], _r228_t0[2], [
            '.quote',
            new RegExp(r228_s, r228_flag)
        ]) : Array.isArray(_r228_t0) && _r228_t0.length >= 1 && 'regex' === _r228_t0[0] ? (r228_args = _r228_t0.slice(1), [
            '.new',
            r138_externs.use('RegExp')
        ].concat(r228_args)) : void 0;
    });
    r138_externs.macros.put('define-macro', function (r229_form, r229_env) {
        var r229_op, r229_name, r229_body, r229_coinit, r229_ds, r229_imports, r229_names, r229_assignments, r229_macroG, r229_macroFn, r229_str, _r229_t1;
        var _r229_t0 = r229_form;
        if (Array.isArray(_r229_t0) && _r229_t0.length === 3 && (Array.isArray(_r229_t0[1]) && _r229_t0[1].length === 2 && '.quote' === _r229_t0[1][0]))
            return r229_op = _r229_t0[0], r229_str = _r229_t0[1][1], _r229_t0[1], r229_body = _r229_t0[2], r1_ex([
                r229_op,
                r229_str,
                r229_body
            ], r229_env);
        else {
            _r229_t1 = false;
            if (Array.isArray(_r229_t0) && _r229_t0.length === 3) {
                r229_op = _r229_t0[0];
                r229_name = _r229_t0[1];
                r229_body = _r229_t0[2];
                if (r1_atom(r229_name))
                    _r229_t1 = true;
                else
                    _r229_t1 = false;
            }
            if (_r229_t1) {
                r229_coinit = {
                    'injectForm': void 0,
                    'initFn': void 0
                };
                r229_ds = new r1_Scope(r229_env);
                r229_imports = {
                    'ex': r1_ex,
                    'atom': r1_wrapForSyntacticClosure(r1_atom),
                    'prim': r1_wrapForSyntacticClosure(r1_prim),
                    'formOf': function (r230_x) {
                        return r230_x[1];
                    },
                    'scopeOf': function (r231_x) {
                        return r231_x[2];
                    },
                    'definingEnv': r229_env,
                    'externEnv': r138_externs,
                    'toPattern': r138_toPattern,
                    'loadSourceRelative': r1_loadSourceRelative,
                    'parseSoruce': r1_parseSoruce,
                    'coinit': r229_coinit,
                    'FormInvalidError': r1_FormInvalidError,
                    'deQuasiquote': r1_deQuasiquote,
                    'opSegToRegular': r1_opSegToRegular
                };
                r229_names = Object.keys(r229_imports);
                r229_ds.declare('$', true);
                r229_assignments = ['.begin'].concat(r229_names.map(function (r232_name) {
                    return [
                        'local',
                        r232_name,
                        [
                            '.',
                            '$',
                            [
                                '.quote',
                                r232_name
                            ]
                        ]
                    ];
                }));
                r229_macroG = new Function(r229_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
                    '.return',
                    r1_ex([
                        '.begin',
                        r229_assignments,
                        r229_body
                    ], r229_ds)
                ], r229_ds, function (r233_form) {
                    return [
                        '.return',
                        r233_form
                    ];
                })));
                r229_macroFn = r229_macroG(r229_imports);
                r229_env.macros.put(r229_name, function (r234_c, r234_e) {
                    var r234_result = r229_macroFn(r234_c, r234_e);
                    var r234_s = new r1_Scope(r229_env);
                    r234_s.hanging = r234_e;
                    r234_s.semiparent = r234_e;
                    return r1_ex(r234_result, r234_s);
                });
                if (r229_coinit.initFn)
                    r229_coinit.initFn(r229_env.macros.get(r229_name));
                return r229_coinit.injectForm ? r1_ex(r229_coinit.injectForm, r229_env) : ['.unit'];
            } else
                return ['.unit'];
        }
    });
    r138_externs.macros.put('macro-match', function (r235_form, r235_env) {
        var r235_c, r235_e, r235_patterns, r235_t, r235_tx, r235_tw;
        var _r235_t0 = r235_form;
        if (Array.isArray(_r235_t0) && _r235_t0.length >= 3 && 'macro-match' === _r235_t0[0]) {
            r235_c = _r235_t0[1];
            r235_e = _r235_t0[2];
            r235_patterns = _r235_t0.slice(3);
            r235_t = r235_env.newt();
            r235_tx = r235_env.newt();
            r235_tw = r235_env.newt();
            return [
                '.begin',
                [
                    '.set',
                    r235_t,
                    r235_e
                ],
                [
                    '.set',
                    r235_tw,
                    [
                        '.lambda',
                        [r235_tx],
                        [
                            '.return',
                            [
                                '.list',
                                [
                                    '.quote',
                                    '.syntactic-closure'
                                ],
                                r235_tx,
                                r235_t
                            ]
                        ]
                    ]
                ],
                r138_externs.macros.get('match')([
                    'match',
                    r235_c
                ].concat(r235_patterns), r235_env, r235_tw)
            ];
        } else
            return ['.unit'];
    });
    r138_externs.pFamily = 'r';
    return r138_externs;
};
exports['Create'] = _s0_t7;
