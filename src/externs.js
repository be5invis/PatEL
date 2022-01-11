'use strict';
const _s0_t0 = require('patrisika');
const _s0_t1 = require('escodegen');
const _s0_t2 = require('util');
const _s0_t3 = require('path');
const _s0_t4 = require('fs');
const _s0_t5 = require('./ex');
const _s0_t6 = require('./syntax');
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
var r1_loadSourceRelative = function (r136_f0, r136_file) {
    var _r136_t0, _r136_t1;
    var r136_absolutePath = r1_path.resolve(r1_path.dirname(r136_f0), r136_file);
    return {
        'absolutePath': r136_absolutePath,
        'source': r1_fs.readFileSync(r136_absolutePath, 'utf-8')
    };
};
var r1_atom = function (r137_x) {
    var _r137_t0, _r137_t1;
    return typeof r137_x === 'string';
};
var r1_identifier = function (r138_x) {
    var _r138_t0, _r138_t1;
    return r1_atom(r138_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r138_x);
};
var r1_prim = function (r139_x) {
    var _r139_t0, _r139_t1;
    return r1_atom(r139_x) && !r1_identifier(r139_x);
};
var r1_Scope = r1_patrisika.Scope;
var r1_ex = r1_exlib.ex;
var r1_deQuasiquote = r1_exlib.deQuasiquote;
var r1_opSegToRegular = r1_exlib.opSegToRegular;
var r1_FormInvalidError = r1_exlib.FormInvalidError;
var r1_wrapForSyntacticClosure = function (r140_fn) {
    var _r140_t0, _r140_t1;
    return function (r141_x) {
        var r141_otherwise, r141_c, r141_e, _r141_t1, _r141_t2;
        var _r141_t0 = r141_x;
        return Array.isArray(_r141_t0) && _r141_t0.length === 3 && '.syntactic-closure' === _r141_t0[0] ? (r141_c = _r141_t0[1], r141_e = _r141_t0[2], r140_fn(r141_c)) : (r141_otherwise = _r141_t0, r140_fn(r141_x));
    };
};
_s0_t7 = r1_Create = function () {
    var _r143_t0, _r143_t1;
    var r143_externs = r1_patrisika.DefaultExterns();
    r143_externs.castName = function (r144_name) {
        var _r144_t0, _r144_t1;
        return r144_name;
    };
    r143_externs.declare('process');
    r143_externs.declare('Error');
    var r143_operatorRename = function (r145_op) {
        var _r145_t0, _r145_t1;
        return function (r146_form, r146_env) {
            var _r146_t0, _r146_t1;
            return r1_ex([r145_op].concat(r146_form.slice(1)), r146_env);
        };
    };
    var r143_reportInvalid = function (r147_form, r147_reason) {
        var _r147_t0, _r147_t1;
        throw new r1_FormInvalidError(r147_form, r147_reason);
    };
    r143_externs.macros.put('begin', r143_operatorRename('.begin'));
    r143_externs.macros.put('then', r143_operatorRename('.begin'));
    r143_externs.macros.put('else', r143_operatorRename('.begin'));
    r143_externs.macros.put('while', r143_operatorRename('.while'));
    r143_externs.macros.put('try', r143_operatorRename('.try'));
    r143_externs.macros.put('is', r143_operatorRename('.is'));
    r143_externs.macros.put('<@', r143_operatorRename('.is'));
    r143_externs.macros.put('new', r143_operatorRename('.new'));
    r143_externs.macros.put('this', r143_operatorRename('.thisp'));
    r143_externs.macros.put('arguments', r143_operatorRename('.argsp'));
    r143_externs.macros.put('and', r143_operatorRename('&&'));
    r143_externs.macros.put('or', r143_operatorRename('||'));
    r143_externs.macros.put('not', r143_operatorRename('!'));
    r143_externs.macros.put('return', r143_operatorRename('.return'));
    r143_externs.macros.put('break', r143_operatorRename('.break'));
    r143_externs.macros.put('yield', r143_operatorRename('.yield'));
    r143_externs.macros.put('throw', r143_operatorRename('.throw'));
    r143_externs.macros.put('list', r143_operatorRename('.list'));
    r143_externs.macros.put('typeof', r143_operatorRename('.typeof'));
    r143_externs.macros.put('quasiquote', r143_operatorRename('.quasiquote'));
    r143_externs.macros.put('syntax', r143_operatorRename('.quasiquote'));
    r143_externs.macros.put('lambda', function (r148_form, r148_env) {
        var r148_otherwise, r148_car, r148_body, r148_parameters, _r148_t2, _r148_t3;
        var _r148_t0 = r148_form;
        var _r148_t1 = false;
        if (Array.isArray(_r148_t0) && _r148_t0.length === 3) {
            r148_car = _r148_t0[0];
            r148_parameters = _r148_t0[1];
            r148_body = _r148_t0[2];
            if (r1_atom(r148_parameters))
                _r148_t1 = true;
            else
                _r148_t1 = false;
        }
        return _r148_t1 ? r1_ex([
            '.lambda',
            [r148_parameters],
            r148_body
        ], r148_env) : Array.isArray(_r148_t0) && _r148_t0.length === 3 ? (r148_car = _r148_t0[0], r148_parameters = _r148_t0[1], r148_body = _r148_t0[2], r1_ex([
            '.lambda',
            r148_parameters,
            r148_body
        ], r148_env)) : Array.isArray(_r148_t0) && _r148_t0.length === 2 ? (r148_car = _r148_t0[0], r148_body = _r148_t0[1], r1_ex([
            '.lambda',
            [],
            r148_body
        ], r148_env)) : Array.isArray(_r148_t0) && _r148_t0.length === 1 ? (r148_car = _r148_t0[0], r1_ex([
            '.lambda',
            [],
            ['.unit']
        ], r148_env)) : (r148_otherwise = _r148_t0, r143_reportInvalid(r148_otherwise, 'Invalid Lambda Formation'));
    });
    r143_externs.macros.put('function', r143_externs.macros.get('lambda'));
    r143_externs.macros.put('<-', function (r149_form, r149_env) {
        var _r149_t0, _r149_t1;
        return r143_externs.macros.get('define')([
            'define',
            r149_form[1],
            [
                'yield',
                r149_form[2]
            ]
        ], r149_env);
    });
    r143_externs.operatorInfo.put('<-', {
        'priority': 970,
        'associvity': 'right'
    });
    r143_externs.macros.put('->', r143_externs.macros.get('lambda'));
    r143_externs.operatorInfo.put('->', {
        'priority': 900,
        'associvity': 'right'
    });
    r143_externs.macros.put('=>', r143_externs.macros.get('lambda'));
    r143_externs.operatorInfo.put('=>', {
        'priority': 950,
        'associvity': 'right'
    });
    r143_externs.macros.put('.prefix.-', function (r150_form, r150_env) {
        var _r150_t0, _r150_t1;
        return [
            '-',
            r1_ex(r150_form[1], r150_env)
        ];
    });
    r143_externs.macros.put('.prefix.+', function (r151_form, r151_env) {
        var _r151_t0, _r151_t1;
        return [
            '+',
            r1_ex(r151_form[1], r151_env)
        ];
    });
    r143_externs.macros.put('.prefix.!', function (r152_form, r152_env) {
        var _r152_t0, _r152_t1;
        return [
            '!',
            r1_ex(r152_form[1], r152_env)
        ];
    });
    r143_externs.macros.put('.prefix.*', function (r153_form, r153_env) {
        var _r153_t0, _r153_t1;
        return r1_ex(r153_form[1], r153_env);
    });
    r143_externs.macros.put('.prefix.=', function (r154_form, r154_env) {
        var _r154_t0, _r154_t1;
        return r1_ex(r154_form[1], r154_env);
    });
    r143_externs.macros.put('if', function (r155_form, r155_env) {
        var r155_otherwise, r155_test, r155_consequents, r155_alternates, r155_consequent, r155_alternate, _r155_t1, _r155_t2;
        var _r155_t0 = r155_form;
        return Array.isArray(_r155_t0) && _r155_t0.length === 3 && 'if' === _r155_t0[0] ? (r155_test = _r155_t0[1], r155_consequent = _r155_t0[2], r1_ex([
            '.if',
            r155_test,
            r155_consequent
        ], r155_env)) : Array.isArray(_r155_t0) && _r155_t0.length === 4 && 'if' === _r155_t0[0] ? (r155_test = _r155_t0[1], r155_consequent = _r155_t0[2], r155_alternate = _r155_t0[3], r1_ex([
            '.if',
            r155_test,
            r155_consequent,
            r155_alternate
        ], r155_env)) : Array.isArray(_r155_t0) && _r155_t0.length === 3 && 'if' === _r155_t0[0] && (Array.isArray(_r155_t0[2]) && _r155_t0[2].length >= 1 && 'then' === _r155_t0[2][0]) ? (r155_test = _r155_t0[1], r155_consequents = _r155_t0[2].slice(1), _r155_t0[2], r1_ex([
            '.if',
            r155_test,
            ['.begin'].concat(r155_consequents)
        ], r155_env)) : Array.isArray(_r155_t0) && _r155_t0.length === 4 && 'if' === _r155_t0[0] && (Array.isArray(_r155_t0[2]) && _r155_t0[2].length >= 1 && 'then' === _r155_t0[2][0]) && (Array.isArray(_r155_t0[3]) && _r155_t0[3].length >= 1 && 'else' === _r155_t0[3][0]) ? (r155_test = _r155_t0[1], r155_consequents = _r155_t0[2].slice(1), _r155_t0[2], r155_alternates = _r155_t0[3].slice(1), _r155_t0[3], r1_ex([
            '.if',
            r155_test,
            ['.begin'].concat(r155_consequents),
            ['.begin'].concat(r155_alternates)
        ], r155_env)) : (r155_otherwise = _r155_t0, r143_reportInvalid(r155_otherwise, 'Invalid Conditional Form'));
    });
    r143_externs.macros.put('let', function (r156_form, r156_env) {
        var r156_otherwise, r156_arg, r156_t, r156_param, _r156_t0, _r156_t1, _r156_t2, _r156_t3;
        var r156_pairs = r156_form.slice(1, 0 - 1);
        var r156_args = [];
        var r156_paras = [];
        var r156_decls = ['.begin'];
        var r156_j = 0;
        while (r156_j < r156_pairs.length) {
            _r156_t0 = r156_pairs[r156_j];
            if (Array.isArray(_r156_t0) && _r156_t0.length === 2) {
                r156_arg = _r156_t0[0];
                r156_param = _r156_t0[1];
                r156_t = r156_env.newt('leti');
                r156_args.push(r156_t);
                r156_paras.push(r156_param);
                r156_decls.push([
                    'define',
                    r156_arg,
                    r156_t
                ]);
            } else {
                _r156_t1 = false;
                if (Array.isArray(_r156_t0) && _r156_t0.length === 1) {
                    r156_arg = _r156_t0[0];
                    if (r1_atom(r156_arg))
                        _r156_t1 = true;
                    else
                        _r156_t1 = false;
                }
                if (_r156_t1) {
                    r156_t = r156_env.newt('leti');
                    r156_args.push(r156_t);
                    r156_paras.push(r156_env.use(r156_arg));
                    r156_decls.push([
                        'define',
                        r156_arg,
                        r156_t
                    ]);
                } else {
                    r156_otherwise = _r156_t0;
                    throw new r1_FormInvalidError(r156_pairs[r156_j], 'Invalid [let] subpattern');
                }
            }
            r156_j = r156_j + 1;
        }
        return r1_ex([
            '.beta',
            r156_args,
            [
                '.begin',
                r156_decls,
                r156_form[r156_form.length - 1]
            ]
        ].concat(r156_paras), r156_env);
    });
    r143_externs.macros.put('letrec', function (r157_form, r157_env) {
        var r157_otherwise, r157_arg, r157_param, _r157_t0, _r157_t1, _r157_t2;
        var r157_pairs = r157_form.slice(1, 0 - 1);
        var r157_decls = ['.begin'];
        var r157_j = 0;
        while (r157_j < r157_pairs.length) {
            _r157_t0 = r157_pairs[r157_j];
            if (Array.isArray(_r157_t0) && _r157_t0.length === 2) {
                r157_arg = _r157_t0[0];
                r157_param = _r157_t0[1];
                r157_decls.push([
                    'local',
                    r157_arg,
                    r157_param
                ]);
            } else {
                r157_otherwise = _r157_t0;
                throw new r1_FormInvalidError(r157_pairs[r157_j], 'Invalid [letrec] subpattern');
            }
            r157_j = r157_j + 1;
        }
        return r1_ex([
            '.beta',
            [],
            [
                '.begin',
                r157_decls,
                r157_form[r157_form.length - 1]
            ]
        ], r157_env);
    });
    r143_externs.macros.put('object', function (r158_form, r158_env) {
        var _r158_t0, _r158_t1;
        if (r158_form[1] && r158_form[1][0] === '.xhash')
            return r1_ex(r158_form[1], r158_env);
        var r158_pairs = r158_form.slice(1).map(function (r159_pair) {
            var r159_method, r159_param, r159_value, r159_property, _r159_t1, _r159_t2, _r159_t3, _r159_t4, _r159_t5, _r159_t6, _r159_t8, _r159_t9, _r159_t10, _r159_t11, _r159_t12, _r159_t13, _r159_t14, _r159_t15, _r159_t16, _r159_t17, _r159_t18, _r159_t19, _r159_t20;
            var _r159_t0 = r159_pair;
            var _r159_t7 = false;
            if (Array.isArray(_r159_t0) && _r159_t0.length === 3 && '=' === _r159_t0[0]) {
                r159_property = _r159_t0[1];
                r159_value = _r159_t0[2];
                if (r1_atom(r159_property))
                    _r159_t7 = true;
                else
                    _r159_t7 = false;
            }
            if (_r159_t7)
                return [
                    [
                        '.quote',
                        r159_property
                    ],
                    r159_value
                ];
            else {
                _r159_t6 = false;
                if (Array.isArray(_r159_t0) && _r159_t0.length === 3 && '=' === _r159_t0[0]) {
                    r159_property = _r159_t0[1];
                    r159_value = _r159_t0[2];
                    if (r1_atom(r159_property))
                        _r159_t6 = true;
                    else
                        _r159_t6 = false;
                }
                if (_r159_t6)
                    return [
                        [
                            '.quote',
                            r159_property
                        ],
                        r159_value
                    ];
                else {
                    _r159_t5 = false;
                    if (Array.isArray(_r159_t0) && _r159_t0.length === 2) {
                        r159_property = _r159_t0[0];
                        r159_value = _r159_t0[1];
                        if (r1_atom(r159_property))
                            _r159_t5 = true;
                        else
                            _r159_t5 = false;
                    }
                    if (_r159_t5)
                        return [
                            [
                                '.quote',
                                r159_property
                            ],
                            r159_value
                        ];
                    else {
                        _r159_t4 = false;
                        if (Array.isArray(_r159_t0) && _r159_t0.length === 1) {
                            r159_property = _r159_t0[0];
                            if (r1_atom(r159_property))
                                _r159_t4 = true;
                            else
                                _r159_t4 = false;
                        }
                        if (_r159_t4)
                            return [
                                [
                                    '.quote',
                                    r159_property
                                ],
                                r159_property
                            ];
                        else {
                            r159_property = _r159_t0;
                            if (r1_atom(r159_property))
                                return [
                                    [
                                        '.quote',
                                        r159_property
                                    ],
                                    r159_property
                                ];
                            else if (Array.isArray(_r159_t0) && _r159_t0.length === 3 && '=' === _r159_t0[0] && (Array.isArray(_r159_t0[1]) && _r159_t0[1].length === 2 && '.quote' === _r159_t0[1][0])) {
                                r159_property = _r159_t0[1][1];
                                _r159_t0[1];
                                r159_value = _r159_t0[2];
                                return [
                                    [
                                        '.quote',
                                        r159_property
                                    ],
                                    r159_value
                                ];
                            } else if (Array.isArray(_r159_t0) && _r159_t0.length === 3 && '=' === _r159_t0[0] && (Array.isArray(_r159_t0[1]) && _r159_t0[1].length === 2 && '.quote' === _r159_t0[1][0])) {
                                r159_property = _r159_t0[1][1];
                                _r159_t0[1];
                                r159_value = _r159_t0[2];
                                return [
                                    [
                                        '.quote',
                                        r159_property
                                    ],
                                    r159_value
                                ];
                            } else if (Array.isArray(_r159_t0) && _r159_t0.length === 2 && (Array.isArray(_r159_t0[0]) && _r159_t0[0].length === 2 && '.quote' === _r159_t0[0][0])) {
                                r159_property = _r159_t0[0][1];
                                _r159_t0[0];
                                r159_value = _r159_t0[1];
                                return [
                                    [
                                        '.quote',
                                        r159_property
                                    ],
                                    r159_value
                                ];
                            } else {
                                _r159_t3 = false;
                                if (Array.isArray(_r159_t0) && _r159_t0.length === 3 && '=' === _r159_t0[0] && (Array.isArray(_r159_t0[1]) && _r159_t0[1].length >= 1)) {
                                    r159_method = _r159_t0[1][0];
                                    r159_param = _r159_t0[1].slice(1);
                                    _r159_t0[1];
                                    r159_value = _r159_t0[2];
                                    if (r1_atom(r159_method))
                                        _r159_t3 = true;
                                    else
                                        _r159_t3 = false;
                                }
                                if (_r159_t3)
                                    return [
                                        [
                                            '.quote',
                                            r159_method
                                        ],
                                        [
                                            '.lambda',
                                            r159_param,
                                            r159_value
                                        ]
                                    ];
                                else {
                                    _r159_t2 = false;
                                    if (Array.isArray(_r159_t0) && _r159_t0.length === 3 && '=' === _r159_t0[0] && (Array.isArray(_r159_t0[1]) && _r159_t0[1].length >= 1)) {
                                        r159_method = _r159_t0[1][0];
                                        r159_param = _r159_t0[1].slice(1);
                                        _r159_t0[1];
                                        r159_value = _r159_t0[2];
                                        if (r1_atom(r159_method))
                                            _r159_t2 = true;
                                        else
                                            _r159_t2 = false;
                                    }
                                    if (_r159_t2)
                                        return [
                                            [
                                                '.quote',
                                                r159_method
                                            ],
                                            [
                                                '.lambda',
                                                r159_param,
                                                r159_value
                                            ]
                                        ];
                                    else {
                                        _r159_t1 = false;
                                        if (Array.isArray(_r159_t0) && _r159_t0.length === 2 && (Array.isArray(_r159_t0[0]) && _r159_t0[0].length >= 1)) {
                                            r159_method = _r159_t0[0][0];
                                            r159_param = _r159_t0[0].slice(1);
                                            _r159_t0[0];
                                            r159_value = _r159_t0[1];
                                            if (r1_atom(r159_method))
                                                _r159_t1 = true;
                                            else
                                                _r159_t1 = false;
                                        }
                                        if (_r159_t1)
                                            return [
                                                [
                                                    '.quote',
                                                    r159_method
                                                ],
                                                [
                                                    '.lambda',
                                                    r159_param,
                                                    r159_value
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
        return r1_ex(['.xhash'].concat(r158_pairs.filter(function (r160_x) {
            var _r160_t0, _r160_t1;
            return r160_x;
        })), r158_env);
    });
    r143_externs.macros.get('list').toPattern = function (r161_form, r161_env, r161_config) {
        var _r161_t0, _r161_t1;
        return r143_toPattern(['.list'].concat(r161_form.slice(1)), r161_env, r161_config);
    };
    r143_externs.macros.get('object').toPattern = function (r162_form, r162_env, r162_config) {
        var _r162_t0, _r162_t1;
        var r162_pairs = r162_form.slice(1).map(function (r163_pair) {
            var r163_otherwise, r163_property, r163_value, _r163_t1, _r163_t2, _r163_t3, _r163_t5, _r163_t6, _r163_t7, _r163_t8, _r163_t9, _r163_t10, _r163_t11, _r163_t12, _r163_t13, _r163_t14;
            var _r163_t0 = r163_pair;
            var _r163_t4 = false;
            if (Array.isArray(_r163_t0) && _r163_t0.length === 3 && '=' === _r163_t0[0]) {
                r163_property = _r163_t0[1];
                r163_value = _r163_t0[2];
                if (r1_atom(r163_property))
                    _r163_t4 = true;
                else
                    _r163_t4 = false;
            }
            if (_r163_t4)
                return [
                    r163_property,
                    r163_value
                ];
            else {
                _r163_t3 = false;
                if (Array.isArray(_r163_t0) && _r163_t0.length === 3 && '=' === _r163_t0[0]) {
                    r163_property = _r163_t0[1];
                    r163_value = _r163_t0[2];
                    if (r1_atom(r163_property))
                        _r163_t3 = true;
                    else
                        _r163_t3 = false;
                }
                if (_r163_t3)
                    return [
                        r163_property,
                        r163_value
                    ];
                else {
                    _r163_t2 = false;
                    if (Array.isArray(_r163_t0) && _r163_t0.length === 2) {
                        r163_property = _r163_t0[0];
                        r163_value = _r163_t0[1];
                        if (r1_atom(r163_property))
                            _r163_t2 = true;
                        else
                            _r163_t2 = false;
                    }
                    if (_r163_t2)
                        return [
                            r163_property,
                            r163_value
                        ];
                    else {
                        _r163_t1 = false;
                        if (Array.isArray(_r163_t0) && _r163_t0.length === 1) {
                            r163_property = _r163_t0[0];
                            if (r1_atom(r163_property))
                                _r163_t1 = true;
                            else
                                _r163_t1 = false;
                        }
                        if (_r163_t1)
                            return [
                                r163_property,
                                r163_property
                            ];
                        else {
                            r163_property = _r163_t0;
                            if (r1_atom(r163_property))
                                return [
                                    r163_property,
                                    r163_property
                                ];
                            else if (Array.isArray(_r163_t0) && _r163_t0.length === 3 && '=' === _r163_t0[0] && (Array.isArray(_r163_t0[1]) && _r163_t0[1].length === 2 && '.quote' === _r163_t0[1][0])) {
                                r163_property = _r163_t0[1][1];
                                _r163_t0[1];
                                r163_value = _r163_t0[2];
                                return [
                                    r163_property,
                                    r163_value
                                ];
                            } else if (Array.isArray(_r163_t0) && _r163_t0.length === 3 && '=' === _r163_t0[0] && (Array.isArray(_r163_t0[1]) && _r163_t0[1].length === 2 && '.quote' === _r163_t0[1][0])) {
                                r163_property = _r163_t0[1][1];
                                _r163_t0[1];
                                r163_value = _r163_t0[2];
                                return [
                                    r163_property,
                                    r163_value
                                ];
                            } else if (Array.isArray(_r163_t0) && _r163_t0.length === 2 && (Array.isArray(_r163_t0[0]) && _r163_t0[0].length === 2 && '.quote' === _r163_t0[0][0])) {
                                r163_property = _r163_t0[0][1];
                                _r163_t0[0];
                                r163_value = _r163_t0[1];
                                return [
                                    r163_property,
                                    r163_value
                                ];
                            } else {
                                r163_otherwise = _r163_t0;
                                throw new r1_FormInvalidError(r162_form, 'Invalid Assignment Left-hand Side');
                            }
                        }
                    }
                }
            }
        });
        return r143_toPattern(['.hash'].concat(r162_pairs), r162_env, r162_config);
    };
    r143_externs.macros.put('piecewise', function (r164_form, r164_env) {
        var r164_pairs, r164_f, r164_j, r164_otherwise, r164_condition, r164_consequent, _r164_t1, _r164_t2, _r164_t3, _r164_t4;
        var _r164_t0 = r164_form;
        if (Array.isArray(_r164_t0) && _r164_t0.length >= 1 && 'piecewise' === _r164_t0[0]) {
            r164_pairs = _r164_t0.slice(1);
            r164_f = ['.unit'];
            r164_j = r164_pairs.length - 1;
            while (r164_j >= 0) {
                _r164_t1 = r164_pairs[r164_j];
                if (Array.isArray(_r164_t1) && _r164_t1.length === 2) {
                    r164_condition = _r164_t1[0];
                    r164_consequent = _r164_t1[1];
                    r164_f = [
                        '.if',
                        r1_ex(r164_condition, r164_env),
                        r1_ex(r164_consequent, r164_env),
                        r164_f
                    ];
                } else {
                    r164_otherwise = _r164_t1;
                    throw new r1_FormInvalidError(r164_otherwise, 'Invalid Piecewise Segment');
                }
                r164_j = r164_j - 1;
            }
            return r164_f;
        } else
            return void 0;
    });
    var r143_AssignWithMod = function (r165_left, r165_right, r165_mod, r165_env, r165_locallyQ) {
        var r165_any, r165_callee, r165_paras, r165_pat, r165_t, r165_otherwise, r165_whatever, r165_a, r165_e, r165_x, _r165_t1, _r165_t2, _r165_t3, _r165_t4, _r165_t5, _r165_t6, _r165_t7, _r165_t8, _r165_t9, _r165_t10, _r165_t11, _r165_t12, _r165_t13, _r165_t14, _r165_t15, _r165_t16, _r165_t17, _r165_t18, _r165_t19, _r165_t20, _r165_t21;
        var _r165_t0 = r165_left;
        var r165_id = _r165_t0;
        if (r1_atom(r165_id))
            return r165_locallyQ ? [
                '.set',
                r1_ex([
                    '.local',
                    r165_id,
                    (r165_locallyQ || 1) - 1
                ], r165_env),
                r1_ex([
                    r165_mod,
                    r165_right
                ], r165_env)
            ] : true ? [
                '.set',
                r1_ex(r165_left, r165_env),
                r1_ex([
                    r165_mod,
                    r165_right
                ], r165_env)
            ] : void 0;
        else {
            _r165_t6 = false;
            if (Array.isArray(_r165_t0) && _r165_t0.length === 2 && '.id' === _r165_t0[0]) {
                r165_id = _r165_t0[1];
                if (r1_atom(r165_id))
                    _r165_t6 = true;
                else
                    _r165_t6 = false;
            }
            if (_r165_t6)
                return r165_locallyQ ? [
                    '.set',
                    r1_ex([
                        '.local',
                        r165_id,
                        (r165_locallyQ || 1) - 1
                    ], r165_env),
                    r1_ex([
                        r165_mod,
                        r165_right
                    ], r165_env)
                ] : true ? [
                    '.set',
                    r1_ex(r165_left, r165_env),
                    r1_ex([
                        r165_mod,
                        r165_right
                    ], r165_env)
                ] : void 0;
            else {
                _r165_t5 = false;
                if (Array.isArray(_r165_t0) && _r165_t0.length === 3 && '.id' === _r165_t0[0]) {
                    r165_id = _r165_t0[1];
                    r165_e = _r165_t0[2];
                    if (r1_atom(r165_id) && (r165_e === r165_env || !r165_locallyQ))
                        _r165_t5 = true;
                    else
                        _r165_t5 = false;
                }
                if (_r165_t5)
                    return r165_locallyQ ? [
                        '.set',
                        r1_ex([
                            '.local',
                            r165_id,
                            (r165_locallyQ || 1) - 1
                        ], r165_e),
                        r1_ex([
                            r165_mod,
                            r165_right
                        ], r165_e)
                    ] : true ? [
                        '.set',
                        r1_ex(r165_left, r165_e),
                        r1_ex([
                            r165_mod,
                            r165_right
                        ], r165_e)
                    ] : void 0;
                else {
                    _r165_t4 = false;
                    if (Array.isArray(_r165_t0) && _r165_t0.length === 3 && '.id' === _r165_t0[0]) {
                        r165_id = _r165_t0[1];
                        r165_e = _r165_t0[2];
                        if (r1_atom(r165_id) && r165_e !== r165_env && r165_locallyQ)
                            _r165_t4 = true;
                        else
                            _r165_t4 = false;
                    }
                    if (_r165_t4)
                        throw new r1_FormInvalidError(r165_left, 'Attempt to redefine non-local subform');
                    else if (Array.isArray(_r165_t0) && _r165_t0.length === 3 && '.local' === _r165_t0[0])
                        return r165_a = _r165_t0[1], r165_x = _r165_t0[2], r143_AssignWithMod(r165_a, r165_right, r165_mod, r165_env, r165_x);
                    else if (Array.isArray(_r165_t0) && _r165_t0.length === 2 && '.local' === _r165_t0[0])
                        return r165_a = _r165_t0[1], r143_AssignWithMod(r165_a, r165_right, r165_mod, r165_env, r165_locallyQ || true);
                    else {
                        _r165_t3 = false;
                        if (Array.isArray(_r165_t0) && _r165_t0.length === 3 && '.syntactic-closure' === _r165_t0[0]) {
                            r165_a = _r165_t0[1];
                            r165_e = _r165_t0[2];
                            if (r165_e === r165_env || !r165_locallyQ)
                                _r165_t3 = true;
                            else
                                _r165_t3 = false;
                        }
                        if (_r165_t3)
                            return r143_AssignWithMod(r165_a, r165_right, r165_mod, r165_env, r165_locallyQ);
                        else {
                            _r165_t2 = false;
                            if (Array.isArray(_r165_t0) && _r165_t0.length === 3 && '.syntactic-closure' === _r165_t0[0]) {
                                r165_a = _r165_t0[1];
                                r165_e = _r165_t0[2];
                                if (r165_e !== r165_env && r165_locallyQ)
                                    _r165_t2 = true;
                                else
                                    _r165_t2 = false;
                            }
                            if (_r165_t2)
                                throw new r1_FormInvalidError(r165_left, 'Attempt to redefine non-local subform');
                            else if (Array.isArray(_r165_t0) && _r165_t0.length >= 1 && '.revcall' === _r165_t0[0])
                                return r165_whatever = _r165_t0.slice(1), r143_AssignWithMod([].concat(r165_whatever), r165_right, r165_mod, r165_env, r165_locallyQ);
                            else if (Array.isArray(_r165_t0) && _r165_t0.length >= 1) {
                                r165_callee = _r165_t0[0];
                                r165_paras = _r165_t0.slice(1);
                                if (r1_atom(r165_callee) && r165_env.macros.has(r165_callee) && r165_env.macros.get(r165_callee).toPattern) {
                                    r165_pat = r143_toPattern(r165_left, r165_env, {
                                        'locally': r165_locallyQ,
                                        'const': r165_locallyQ > 1,
                                        'unchecked': r165_mod !== 'checked'
                                    });
                                    r165_t = r165_env.newt();
                                    _r165_t1 = r165_mod;
                                    if ('checked' === _r165_t1) {
                                        return [
                                            '.begin',
                                            [
                                                '.set',
                                                r165_t,
                                                r1_ex([
                                                    '.unquote',
                                                    r165_right
                                                ], r165_env)
                                            ],
                                            [
                                                '.if',
                                                r165_pat.whether(r165_t) || [
                                                    '.quote',
                                                    true
                                                ],
                                                r165_pat.assign(r165_t, r165_locallyQ)
                                            ]
                                        ];
                                    } else {
                                        r165_otherwise = _r165_t1;
                                        return [
                                            '.begin',
                                            [
                                                '.set',
                                                r165_t,
                                                r1_ex([
                                                    r165_mod,
                                                    r165_right
                                                ], r165_env)
                                            ],
                                            r165_pat.assign(r165_t, r165_locallyQ)
                                        ];
                                    }
                                } else if (r1_atom(r165_callee) && r165_env.macros.has(r165_callee))
                                    throw new r1_FormInvalidError(r165_left, 'Invalid Assignment Left-hand Side');
                                else
                                    return r1_prim(r165_callee) ? [
                                        '.set',
                                        r1_ex(r165_left, r165_env),
                                        r1_ex([
                                            r165_mod,
                                            r165_right
                                        ], r165_env)
                                    ] : r1_atom(r165_callee) ? r165_locallyQ ? [
                                        '.set',
                                        r1_ex([
                                            '.local',
                                            r165_callee,
                                            (r165_locallyQ || 1) - 1
                                        ], r165_env),
                                        r1_ex([
                                            r165_mod,
                                            [
                                                '.lambda',
                                                [].concat(r165_paras),
                                                r165_right
                                            ]
                                        ], r165_env)
                                    ] : true ? [
                                        '.set',
                                        r1_ex(r165_callee, r165_env),
                                        r1_ex([
                                            r165_mod,
                                            [
                                                '.lambda',
                                                [].concat(r165_paras),
                                                r165_right
                                            ]
                                        ], r165_env)
                                    ] : void 0 : true ? [
                                        '.set',
                                        r1_ex(r165_callee, r165_env),
                                        r1_ex([
                                            r165_mod,
                                            [
                                                '.lambda',
                                                [].concat(r165_paras),
                                                r165_right
                                            ]
                                        ], r165_env)
                                    ] : void 0;
                            } else {
                                r165_any = _r165_t0;
                                throw new r1_FormInvalidError(r165_left, 'Invalid Assignment Left-hand Side');
                            }
                        }
                    }
                }
            }
        }
    };
    var r143_Assign = function (r166_left, r166_right, r166_env, r166_locallyQ) {
        var _r166_t0, _r166_t1;
        return r143_AssignWithMod(r166_left, r166_right, '.unquote', r166_env, r166_locallyQ);
    };
    r143_externs.macros.put('define', function (r167_form, r167_env) {
        var r167_any, r167_op, r167_left, r167_right, r167_modifer, _r167_t1, _r167_t2, _r167_t3, _r167_t4;
        var _r167_t0 = r167_form;
        if (Array.isArray(_r167_t0) && _r167_t0.length === 4)
            return r167_op = _r167_t0[0], r167_modifer = _r167_t0[1], r167_left = _r167_t0[2], r167_right = _r167_t0[3], r143_AssignWithMod(r167_left, r167_right, r167_modifer, r167_env, 2);
        else if (Array.isArray(_r167_t0) && _r167_t0.length === 3)
            return r167_op = _r167_t0[0], r167_left = _r167_t0[1], r167_right = _r167_t0[2], r143_Assign(r167_left, r167_right, r167_env, 2);
        else {
            r167_any = _r167_t0;
            throw new r1_FormInvalidError(r167_any, 'Invalid Assignment');
        }
    });
    r143_externs.macros.put('local', function (r168_form, r168_env) {
        var r168_any, r168_op, r168_left, r168_right, r168_modifer, _r168_t1, _r168_t2, _r168_t3, _r168_t4, _r168_t5, _r168_t6;
        var _r168_t0 = r168_form;
        if (Array.isArray(_r168_t0) && _r168_t0.length === 4)
            return r168_op = _r168_t0[0], r168_modifer = _r168_t0[1], r168_left = _r168_t0[2], r168_right = _r168_t0[3], r143_AssignWithMod(r168_left, r168_right, r168_modifer, r168_env, true);
        else if (Array.isArray(_r168_t0) && _r168_t0.length === 3)
            return r168_op = _r168_t0[0], r168_left = _r168_t0[1], r168_right = _r168_t0[2], r143_Assign(r168_left, r168_right, r168_env, true);
        else {
            _r168_t1 = false;
            if (Array.isArray(_r168_t0) && _r168_t0.length === 2) {
                r168_op = _r168_t0[0];
                r168_left = _r168_t0[1];
                if (r1_atom(r168_left))
                    _r168_t1 = true;
                else
                    _r168_t1 = false;
            }
            if (_r168_t1)
                return [
                    '.local',
                    r168_left
                ];
            else {
                r168_any = _r168_t0;
                throw new r1_FormInvalidError(r168_any, 'Invalid Assignment');
            }
        }
    });
    r143_externs.macros.put('const', r143_externs.macros.get('define'));
    r143_externs.macros.put('set', function (r169_form, r169_env) {
        var r169_any, r169_op, r169_left, r169_right, _r169_t1, _r169_t2, _r169_t3;
        var _r169_t0 = r169_form;
        if (Array.isArray(_r169_t0) && _r169_t0.length === 3)
            return r169_op = _r169_t0[0], r169_left = _r169_t0[1], r169_right = _r169_t0[2], r143_Assign(r169_left, r169_right, r169_env, false);
        else {
            r169_any = _r169_t0;
            throw new r1_FormInvalidError(r169_any, 'Invalid Assignment');
        }
    });
    r143_externs.macros.put('=', r143_externs.macros.get('set'));
    r143_externs.macros.put('inc', function (r170_form, r170_env) {
        var r170_op, r170_id, r170_shift, _r170_t1, _r170_t2;
        var _r170_t0 = r170_form;
        return Array.isArray(_r170_t0) && _r170_t0.length === 2 ? (r170_op = _r170_t0[0], r170_id = _r170_t0[1], r143_Assign(r170_id, [
            '+',
            r170_id,
            [
                '.quote',
                1
            ]
        ], r170_env, false)) : Array.isArray(_r170_t0) && _r170_t0.length === 3 ? (r170_op = _r170_t0[0], r170_id = _r170_t0[1], r170_shift = _r170_t0[2], r143_Assign(r170_id, [
            '+',
            r170_id,
            r170_shift
        ], r170_env, false)) : Array.isArray(_r170_t0) && _r170_t0.length === 4 && 'by' === _r170_t0[2] ? (r170_op = _r170_t0[0], r170_id = _r170_t0[1], r170_shift = _r170_t0[3], r143_Assign(r170_id, [
            '+',
            r170_id,
            r170_shift
        ], r170_env, false)) : void 0;
    });
    r143_externs.macros.put('dec', function (r171_form, r171_env) {
        var r171_op, r171_id, r171_shift, _r171_t1, _r171_t2;
        var _r171_t0 = r171_form;
        return Array.isArray(_r171_t0) && _r171_t0.length === 2 ? (r171_op = _r171_t0[0], r171_id = _r171_t0[1], r143_Assign(r171_id, [
            '-',
            r171_id,
            [
                '.quote',
                1
            ]
        ], r171_env, false)) : Array.isArray(_r171_t0) && _r171_t0.length === 3 ? (r171_op = _r171_t0[0], r171_id = _r171_t0[1], r171_shift = _r171_t0[2], r143_Assign(r171_id, [
            '-',
            r171_id,
            r171_shift
        ], r171_env, false)) : Array.isArray(_r171_t0) && _r171_t0.length === 4 && 'by' === _r171_t0[2] ? (r171_op = _r171_t0[0], r171_id = _r171_t0[1], r171_shift = _r171_t0[3], r143_Assign(r171_id, [
            '-',
            r171_id,
            r171_shift
        ], r171_env, false)) : void 0;
    });
    r143_externs.macros.put('for', function (r172_form, r172_env) {
        var r172_init, r172_test, r172_step, r172_body, _r172_t1, _r172_t2;
        var _r172_t0 = r172_form;
        return Array.isArray(_r172_t0) && _r172_t0.length === 5 && 'for' === _r172_t0[0] ? (r172_init = _r172_t0[1], r172_test = _r172_t0[2], r172_step = _r172_t0[3], r172_body = _r172_t0[4], [
            '.begin',
            r1_ex(r172_init, r172_env),
            [
                '.while',
                r1_ex(r172_test, r172_env),
                [
                    '.begin',
                    r1_ex(r172_body, r172_env),
                    r1_ex(r172_step, r172_env)
                ]
            ]
        ]) : void 0;
    });
    r143_externs.macros.put('this', ['.thisp']);
    r143_externs.macros.put('arguments', ['.argsp']);
    r143_externs.macros.put('nothing', ['.unit']);
    r143_externs.macros.put('undefined', ['.unit']);
    r143_externs.macros.put('null', [
        '.quote',
        null
    ]);
    r143_externs.macros.put('true', [
        '.quote',
        true
    ]);
    r143_externs.macros.put('false', [
        '.quote',
        false
    ]);
    var r143_toPattern = function (r173_pattern, r173_env, r173_config) {
        var r173_callee, r173_subpatterns, r173_ms, r173_t, r173_whatever, r173_x, _r173_t1, _r173_t2, _r173_t3, _r173_t4, _r173_t5, _r173_t6, _r173_t7, _r173_t8, _r173_t9, _r173_t10, _r173_t11, _r173_t12;
        var _r173_t0 = r173_pattern;
        var r173_id = _r173_t0;
        if (r1_atom(r173_id))
            return {
                'whether': function (r189_x) {
                    var _r189_t0, _r189_t1;
                    return null;
                },
                'assign': function (r190_x) {
                    var _r190_t0, _r190_t1;
                    return [
                        '.set',
                        r1_ex(r173_config && r173_config.locally ? [
                            '.local',
                            r173_id,
                            r173_config.const
                        ] : r173_id, r173_env),
                        r173_config && r173_config.wrapper ? [
                            r173_config.wrapper,
                            r190_x
                        ] : r190_x
                    ];
                }
            };
        else {
            _r173_t1 = false;
            if (Array.isArray(_r173_t0) && _r173_t0.length === 2 && '.id' === _r173_t0[0]) {
                r173_id = _r173_t0[1];
                if (r1_atom(r173_id))
                    _r173_t1 = true;
                else
                    _r173_t1 = false;
            }
            if (_r173_t1)
                return {
                    'whether': function (r187_x) {
                        var _r187_t0, _r187_t1;
                        return null;
                    },
                    'assign': function (r188_x) {
                        var _r188_t0, _r188_t1;
                        return [
                            '.set',
                            r1_ex(r173_config && r173_config.locally ? [
                                '.local',
                                r173_id,
                                r173_config.const
                            ] : r173_id, r173_env),
                            r173_config && r173_config.wrapper ? [
                                r173_config.wrapper,
                                r188_x
                            ] : r188_x
                        ];
                    }
                };
            else if (Array.isArray(_r173_t0) && _r173_t0.length === 2 && '.quote' === _r173_t0[0])
                return r173_x = _r173_t0[1], {
                    'whether': function (r185_x) {
                        var _r185_t0, _r185_t1;
                        return [
                            '===',
                            r1_ex(r173_pattern, r173_env),
                            r185_x
                        ];
                    },
                    'assign': function (r186_x) {
                        var _r186_t0, _r186_t1;
                        return ['.unit'];
                    }
                };
            else if (Array.isArray(_r173_t0) && _r173_t0.length >= 1 && '.' === _r173_t0[0])
                return r173_whatever = _r173_t0.slice(1), {
                    'whether': function (r183_x) {
                        var _r183_t0, _r183_t1;
                        return null;
                    },
                    'assign': function (r184_x) {
                        var _r184_t0, _r184_t1;
                        return [
                            '.set',
                            r1_ex(r173_pattern, r173_env),
                            r173_config && r173_config.wrapper ? [
                                r173_config.wrapper,
                                r184_x
                            ] : r184_x
                        ];
                    }
                };
            else if (Array.isArray(_r173_t0) && _r173_t0.length >= 1) {
                r173_callee = _r173_t0[0];
                r173_subpatterns = _r173_t0.slice(1);
                if (r1_atom(r173_callee) && r173_env.macros.has(r173_callee) && r173_env.macros.get(r173_callee).toPattern)
                    return r173_env.macros.get(r173_callee).toPattern(r173_pattern, r173_env, r173_config);
                else if (r1_atom(r173_callee) && r173_env.macros.has(r173_callee) && !r173_env.macros.get(r173_callee).invokeAsAtom)
                    throw new r1_FormInvalidError(r173_pattern, 'Invalid Pattern');
                else if (true) {
                    r173_ms = r173_subpatterns.map(function (r174_x) {
                        var _r174_t0, _r174_t1;
                        return r143_toPattern(r174_x, r173_env, r173_config);
                    });
                    r173_t = r173_env.newt();
                    if (r173_config && r173_config.unchecked)
                        return {
                            'whether': function (r175_x) {
                                var _r175_t0, _r175_t1;
                                return [
                                    '&&',
                                    [
                                        '.set',
                                        r173_t,
                                        [
                                            [
                                                '.',
                                                r1_ex(r173_callee, r173_env),
                                                [
                                                    '.quote',
                                                    'unapply'
                                                ]
                                            ],
                                            r175_x,
                                            [
                                                '.quote',
                                                r173_ms.length
                                            ]
                                        ]
                                    ]
                                ].concat(r173_ms.map(function (r176_p, r176_j) {
                                    var _r176_t0, _r176_t1;
                                    return r176_p.whether([
                                        '.',
                                        r173_t,
                                        [
                                            '.quote',
                                            r176_j
                                        ]
                                    ]);
                                })).filter(r143_boole);
                            },
                            'assign': function (r177_x, r177_locallyQ) {
                                var _r177_t0, _r177_t1;
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r173_t,
                                        [
                                            [
                                                '.',
                                                r1_ex(r173_callee, r173_env),
                                                [
                                                    '.quote',
                                                    'unapply'
                                                ]
                                            ],
                                            r177_x,
                                            [
                                                '.quote',
                                                r173_ms.length
                                            ]
                                        ]
                                    ]
                                ].concat(r173_ms.map(function (r178_p, r178_j) {
                                    var _r178_t0, _r178_t1;
                                    return r178_p.assign([
                                        '.',
                                        r173_t,
                                        [
                                            '.quote',
                                            r178_j
                                        ]
                                    ], r177_locallyQ);
                                }));
                            }
                        };
                    else
                        return {
                            'whether': function (r179_x) {
                                var _r179_t0, _r179_t1;
                                return [
                                    '&&',
                                    [
                                        '.set',
                                        r173_t,
                                        [
                                            [
                                                '.',
                                                r1_ex(r173_callee, r173_env),
                                                [
                                                    '.quote',
                                                    'unapply'
                                                ]
                                            ],
                                            r179_x,
                                            [
                                                '.quote',
                                                r173_ms.length
                                            ]
                                        ]
                                    ]
                                ].concat(r173_ms.map(function (r180_p, r180_j) {
                                    var _r180_t0, _r180_t1;
                                    return r180_p.whether([
                                        '.',
                                        r173_t,
                                        [
                                            '.quote',
                                            r180_j
                                        ]
                                    ]);
                                })).filter(r143_boole);
                            },
                            'assign': function (r181_x, r181_locallyQ) {
                                var _r181_t0, _r181_t1;
                                return ['.begin'].concat(r173_ms.map(function (r182_p, r182_j) {
                                    var _r182_t0, _r182_t1;
                                    return r182_p.assign([
                                        '.',
                                        r173_t,
                                        [
                                            '.quote',
                                            r182_j
                                        ]
                                    ], r181_locallyQ);
                                }));
                            }
                        };
                } else
                    return void 0;
            } else
                return void 0;
        }
    };
    r143_externs.macros.put('.list', {});
    r143_externs.macros.get('.list').toPattern = function (r191_pattern, r191_env, r191_config) {
        var r191_subpatterns, r191_ms, _r191_t1, _r191_t2, _r191_t3;
        var _r191_t0 = r191_pattern;
        if (Array.isArray(_r191_t0) && _r191_t0.length >= 1 && '.list' === _r191_t0[0]) {
            r191_subpatterns = _r191_t0.slice(1);
            r191_ms = r191_subpatterns.map(function (r192_x) {
                var _r192_t0, _r192_t1;
                return r143_toPattern(r192_x, r191_env, r191_config);
            });
            return {
                'whether': function (r193_x) {
                    var _r193_t0, _r193_t1;
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r143_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r193_x
                        ],
                        [
                            '===',
                            [
                                '.',
                                r193_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r191_ms.length
                            ]
                        ]
                    ].concat(r191_ms.map(function (r194_p, r194_j) {
                        var _r194_t0, _r194_t1;
                        return r194_p.whether([
                            '.',
                            r193_x,
                            [
                                '.quote',
                                r194_j
                            ]
                        ]);
                    })).filter(r143_boole);
                },
                'assign': function (r195_x) {
                    var _r195_t0, _r195_t1;
                    return ['.begin'].concat(r191_ms.map(function (r196_p, r196_j) {
                        var _r196_t0, _r196_t1;
                        return r196_p.assign([
                            '.',
                            r195_x,
                            [
                                '.quote',
                                r196_j
                            ]
                        ]);
                    }).concat([r195_x]));
                }
            };
        } else
            return void 0;
    };
    r143_externs.macros.put('.conslist', {});
    r143_externs.macros.get('.conslist').toPattern = function (r197_pattern, r197_env, r197_config) {
        var r197_subpatterns, r197_ms, r197_final, r197_fc, _r197_t1, _r197_t2, _r197_t3;
        var _r197_t0 = r197_pattern;
        if (Array.isArray(_r197_t0) && _r197_t0.length >= 1 && '.conslist' === _r197_t0[0]) {
            r197_subpatterns = _r197_t0.slice(1);
            r197_ms = r197_pattern.slice(1, 0 - 1).map(function (r198_x) {
                var _r198_t0, _r198_t1;
                return r143_toPattern(r198_x, r197_env, r197_config);
            });
            r197_final = r143_toPattern(r197_pattern[r197_pattern.length - 1], r197_env, (r197_fc = Object.create(r197_config), r197_fc.wrapper = null, r197_fc));
            return {
                'whether': function (r199_x) {
                    var _r199_t0, _r199_t1;
                    return [
                        '&&',
                        [
                            [
                                '.',
                                r143_externs.use('Array'),
                                [
                                    '.quote',
                                    'isArray'
                                ]
                            ],
                            r199_x
                        ],
                        [
                            '>=',
                            [
                                '.',
                                r199_x,
                                [
                                    '.quote',
                                    'length'
                                ]
                            ],
                            [
                                '.quote',
                                r197_ms.length
                            ]
                        ]
                    ].concat(r197_ms.map(function (r200_p, r200_j) {
                        var _r200_t0, _r200_t1;
                        return r200_p.whether([
                            '.',
                            r199_x,
                            [
                                '.quote',
                                r200_j
                            ]
                        ]);
                    }).concat([r197_final.whether([
                            [
                                '.',
                                r199_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r197_ms.length
                            ]
                        ])])).filter(r143_boole);
                },
                'assign': function (r201_x) {
                    var _r201_t0, _r201_t1;
                    return ['.begin'].concat(r197_ms.map(function (r202_p, r202_j) {
                        var _r202_t0, _r202_t1;
                        return r202_p.assign([
                            '.',
                            r201_x,
                            [
                                '.quote',
                                r202_j
                            ]
                        ]);
                    })).concat([r197_final.assign(r197_config && r197_config.wrapper ? [
                            [
                                '.',
                                [
                                    [
                                        '.',
                                        r201_x,
                                        [
                                            '.quote',
                                            'slice'
                                        ]
                                    ],
                                    [
                                        '.quote',
                                        r197_ms.length
                                    ]
                                ],
                                [
                                    '.quote',
                                    'map'
                                ]
                            ],
                            r197_config.wrapper
                        ] : [
                            [
                                '.',
                                r201_x,
                                [
                                    '.quote',
                                    'slice'
                                ]
                            ],
                            [
                                '.quote',
                                r197_ms.length
                            ]
                        ])]).concat([r201_x]);
                }
            };
        } else
            return void 0;
    };
    r143_externs.macros.put('.hash', {});
    r143_externs.macros.get('.hash').toPattern = function (r203_pattern, r203_env, r203_config) {
        var r203_subpatterns, r203_ms, _r203_t1, _r203_t2, _r203_t3;
        var _r203_t0 = r203_pattern;
        if (Array.isArray(_r203_t0) && _r203_t0.length >= 1 && '.hash' === _r203_t0[0]) {
            r203_subpatterns = _r203_t0.slice(1);
            r203_ms = r203_subpatterns.map(function (r204_pair) {
                var _r204_t0, _r204_t1;
                return [
                    r204_pair[0],
                    r143_toPattern(r204_pair[1], r203_env, r203_config)
                ];
            });
            return {
                'whether': function (r205_x) {
                    var _r205_t0, _r205_t1;
                    return [
                        '&&',
                        r205_x
                    ].concat(r203_ms.map(function (r206_p) {
                        var _r206_t0, _r206_t1;
                        return r206_p[1].whether([
                            '.',
                            r205_x,
                            [
                                '.quote',
                                r206_p[0]
                            ]
                        ]);
                    })).filter(r143_boole);
                },
                'assign': function (r207_x) {
                    var _r207_t0, _r207_t1;
                    return ['.begin'].concat(r203_ms.map(function (r208_p) {
                        var _r208_t0, _r208_t1;
                        return r208_p[1].assign([
                            '.',
                            r207_x,
                            [
                                '.quote',
                                r208_p[0]
                            ]
                        ]);
                    }).concat([r207_x]));
                }
            };
        } else
            return void 0;
    };
    r143_externs.macros.put('.xhash', {});
    r143_externs.macros.get('.xhash').toPattern = function (r209_pattern, r209_env, r209_config) {
        var r209_subpatterns, r209_ms, _r209_t1, _r209_t2, _r209_t3;
        var _r209_t0 = r209_pattern;
        if (Array.isArray(_r209_t0) && _r209_t0.length >= 1 && '.xhash' === _r209_t0[0]) {
            r209_subpatterns = _r209_t0.slice(1);
            r209_ms = r209_subpatterns.map(function (r210_pair) {
                var _r210_t0, _r210_t1;
                return [
                    r1_ex(r210_pair[0], r209_env),
                    r143_toPattern(r210_pair[1], r209_env, r209_config)
                ];
            });
            return {
                'whether': function (r211_x) {
                    var _r211_t0, _r211_t1;
                    return [
                        '&&',
                        r211_x
                    ].concat(r209_ms.map(function (r212_p) {
                        var r212_otherwise, r212_key, _r212_leti1, _r212_t2, _r212_t3, _r212_t4, _r212_t5, _r212_t6, _r212_tag7;
                        var _r212_t0 = r212_p[0];
                        if (Array.isArray(_r212_t0) && _r212_t0.length === 2 && '.quote' === _r212_t0[0])
                            return r212_key = _r212_t0[1], r212_p[1].whether([
                                '.',
                                r211_x,
                                r212_p[0]
                            ]);
                        else {
                            r212_otherwise = _r212_t0;
                            _r212_t5 = r209_env.newt();
                            return function (_r212_leti1) {
                                var r213_t = _r212_leti1;
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r213_t,
                                        [
                                            '.',
                                            r211_x,
                                            r212_p[0]
                                        ]
                                    ],
                                    r212_p[1].whether(r213_t)
                                ];
                            }(_r212_t5);
                        }
                    })).filter(r143_boole);
                },
                'assign': function (r214_x) {
                    var _r214_t0, _r214_t1;
                    return ['.begin'].concat(r209_ms.map(function (r215_p) {
                        var r215_otherwise, r215_key, _r215_leti1, _r215_t2, _r215_t3, _r215_t4, _r215_t5, _r215_t6, _r215_tag7;
                        var _r215_t0 = r215_p[0];
                        if (Array.isArray(_r215_t0) && _r215_t0.length === 2 && '.quote' === _r215_t0[0])
                            return r215_key = _r215_t0[1], r215_p[1].assign([
                                '.',
                                r214_x,
                                r215_p[0]
                            ]);
                        else {
                            r215_otherwise = _r215_t0;
                            _r215_t5 = r209_env.newt();
                            return function (_r215_leti1) {
                                var r216_t = _r215_leti1;
                                return [
                                    '.begin',
                                    [
                                        '.set',
                                        r216_t,
                                        [
                                            '.',
                                            r214_x,
                                            r215_p[0]
                                        ]
                                    ],
                                    r215_p[1].assign(r216_t)
                                ];
                            }(_r215_t5);
                        }
                    }).concat([r214_x]));
                }
            };
        } else
            return void 0;
    };
    r143_externs.macros.put('.quasiquote', {});
    r143_externs.macros.get('.quasiquote').toPattern = function (r217_pattern, r217_env, r217_config) {
        var r217_subpatterns, _r217_t1, _r217_t2;
        var _r217_t0 = r217_pattern;
        return Array.isArray(_r217_t0) && _r217_t0.length >= 1 && '.quasiquote' === _r217_t0[0] ? (r217_subpatterns = _r217_t0.slice(1), r143_toPattern(r1_deQuasiquote(r217_pattern[1], 0, r217_env), r217_env, r217_config)) : void 0;
    };
    r143_externs.macros.put('.operatorPiece', {});
    r143_externs.macros.get('.operatorPiece').toPattern = function (r218_pattern, r218_env, r218_config) {
        var _r218_t0, _r218_t1;
        return r143_toPattern(r1_opSegToRegular(r218_pattern.slice(1), r218_env), r218_env, r218_config);
    };
    r143_externs.macros.put('&&', {});
    r143_externs.macros.get('&&').toPattern = function (r219_pattern, r219_env, r219_config) {
        var r219_subpatterns, r219_ms, _r219_t1, _r219_t2, _r219_t3;
        var _r219_t0 = r219_pattern;
        if (Array.isArray(_r219_t0) && _r219_t0.length >= 1 && '&&' === _r219_t0[0]) {
            r219_subpatterns = _r219_t0.slice(1);
            r219_ms = r219_subpatterns.map(function (r220_x) {
                var _r220_t0, _r220_t1;
                return r143_toPattern(r220_x, r219_env, r219_config);
            });
            return {
                'whether': function (r221_x) {
                    var _r221_t0, _r221_t1;
                    var r221_f = ['&&'].concat(r219_ms.map(function (r222_p, r222_j) {
                        var _r222_t0, _r222_t1;
                        return r222_p.whether(r221_x);
                    })).filter(r143_boole);
                    if (r221_f.length === 1)
                        return [
                            '.quote',
                            true
                        ];
                    return r221_f;
                },
                'assign': function (r223_x) {
                    var _r223_t0, _r223_t1;
                    return ['.begin'].concat(r219_ms.map(function (r224_p, r224_j) {
                        var _r224_t0, _r224_t1;
                        return r224_p.assign(r223_x);
                    }).concat([r223_x]));
                }
            };
        } else
            return void 0;
    };
    r143_externs.macros.put('||', {});
    r143_externs.macros.get('||').toPattern = function (r225_pattern, r225_env, r225_config) {
        var r225_subpatterns, r225_ms, _r225_t1, _r225_t2, _r225_t3;
        var _r225_t0 = r225_pattern;
        if (Array.isArray(_r225_t0) && _r225_t0.length >= 1 && '||' === _r225_t0[0]) {
            r225_subpatterns = _r225_t0.slice(1);
            r225_ms = r225_subpatterns.map(function (r226_x) {
                var _r226_t0, _r226_t1;
                return r143_toPattern(r226_x, r225_env, r225_config);
            });
            return {
                'whether': function (r227_x) {
                    var _r227_t0, _r227_t1;
                    return ['||'].concat(r225_ms.map(function (r228_p, r228_j) {
                        var _r228_t0, _r228_t1;
                        return r228_p.whether(r227_x);
                    })).filter(r143_boole);
                },
                'assign': function (r229_x) {
                    var _r229_t0, _r229_t1;
                    return ['.unit'];
                }
            };
        } else
            return void 0;
    };
    var r143_boole = function (r230_x) {
        var _r230_t0, _r230_t1;
        return !!r230_x;
    };
    r143_externs.macros.put('match', function (r231_form, r231_env, r231_wrapper) {
        var r231_any, r231_pattern, r231_guard, r231_body, r231_pat, r231_cond, r231_tc, _r231_t0, _r231_t1, _r231_t2;
        var r231_pairs = r231_form.slice(2);
        var r231_t = r231_env.newt();
        var r231_f = ['.unit'];
        var r231_j = r231_pairs.length - 1;
        while (r231_j >= 0) {
            r231_f = (_r231_t0 = r231_pairs[r231_j], Array.isArray(_r231_t0) && _r231_t0.length === 2 ? (r231_pattern = _r231_t0[0], r231_body = _r231_t0[1], r231_pat = r143_toPattern(r231_pattern, r231_env, {
                'wrapper': r231_wrapper,
                'locally': true
            }), r231_cond = r231_pat.whether(r231_t), r231_cond ? [
                '.if',
                r231_cond,
                [
                    '.begin',
                    r231_pat.assign(r231_t, true),
                    r1_ex(r231_body, r231_env)
                ],
                r231_f
            ] : true ? [
                '.begin',
                r231_pat.assign(r231_t, true),
                r1_ex(r231_body, r231_env)
            ] : void 0) : Array.isArray(_r231_t0) && _r231_t0.length === 3 ? (r231_pattern = _r231_t0[0], r231_guard = _r231_t0[1], r231_body = _r231_t0[2], r231_pat = r143_toPattern(r231_pattern, r231_env, {
                'wrapper': r231_wrapper,
                'locally': true
            }), r231_cond = r231_pat.whether(r231_t), r231_cond ? (r231_tc = r231_env.newt(), [
                '.begin',
                [
                    '.set',
                    r231_tc,
                    [
                        '.quote',
                        false
                    ]
                ],
                [
                    '.if',
                    r231_cond,
                    [
                        '.begin',
                        r231_pat.assign(r231_t, true),
                        [
                            '.if',
                            r1_ex(r231_guard, r231_env),
                            [
                                '.set',
                                r231_tc,
                                [
                                    '.quote',
                                    true
                                ]
                            ],
                            [
                                '.set',
                                r231_tc,
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
                    r231_tc,
                    r1_ex(r231_body, r231_env),
                    r231_f
                ]
            ]) : true ? [
                '.begin',
                r231_pat.assign(r231_t, true),
                [
                    '.if',
                    r1_ex(r231_guard, r231_env),
                    r1_ex(r231_body, r231_env),
                    r231_f
                ]
            ] : void 0) : (r231_any = _r231_t0, r231_f));
            r231_j = r231_j - 1;
        }
        return [
            '.begin',
            [
                '.set',
                r231_t,
                r1_ex(r231_form[1], r231_env)
            ],
            r231_f
        ];
    });
    r143_externs.macros.put('matches', function (r232_form, r232_env) {
        var r232_whatever, r232_obj, r232_pattern, r232_pat, r232_t, r232_cond, _r232_t1, _r232_t2, _r232_t3, _r232_t4;
        var _r232_t0 = r232_form;
        if (Array.isArray(_r232_t0) && _r232_t0.length === 3) {
            r232_whatever = _r232_t0[0];
            r232_obj = _r232_t0[1];
            r232_pattern = _r232_t0[2];
            r232_pat = r143_toPattern(r232_pattern, r232_env, {
                'locally': true,
                'unchecked': false
            });
            r232_t = r232_env.newt();
            r232_cond = r232_pat.whether(r232_t);
            if (r232_cond)
                return [
                    '.begin',
                    [
                        '.set',
                        r232_t,
                        r1_ex(r232_obj, r232_env)
                    ],
                    r232_pat.whether(r232_t)
                ];
            else
                return [
                    '.quote',
                    true
                ];
        } else
            return void 0;
    });
    r143_externs.macros.put('<~>', r143_externs.macros.get('matches'));
    r143_externs.operatorInfo.put('<~>', {
        'priority': 400,
        'associvity': 'never'
    });
    r143_externs.macros.put('regex', function (r233_form, r233_env) {
        var r233_args, r233_s, r233_flag, _r233_t1, _r233_t2;
        var _r233_t0 = r233_form;
        return Array.isArray(_r233_t0) && _r233_t0.length === 2 && 'regex' === _r233_t0[0] && (Array.isArray(_r233_t0[1]) && _r233_t0[1].length === 2 && '.quote' === _r233_t0[1][0]) ? (r233_s = _r233_t0[1][1], _r233_t0[1], [
            '.quote',
            new RegExp(r233_s)
        ]) : Array.isArray(_r233_t0) && _r233_t0.length === 3 && 'regex' === _r233_t0[0] && (Array.isArray(_r233_t0[1]) && _r233_t0[1].length === 2 && '.quote' === _r233_t0[1][0]) && (Array.isArray(_r233_t0[2]) && _r233_t0[2].length === 2 && '.quote' === _r233_t0[2][0]) ? (r233_s = _r233_t0[1][1], _r233_t0[1], r233_flag = _r233_t0[2][1], _r233_t0[2], [
            '.quote',
            new RegExp(r233_s, r233_flag)
        ]) : Array.isArray(_r233_t0) && _r233_t0.length >= 1 && 'regex' === _r233_t0[0] ? (r233_args = _r233_t0.slice(1), [
            '.new',
            r143_externs.use('RegExp')
        ].concat(r233_args)) : void 0;
    });
    r143_externs.macros.put('define-macro', function (r234_form, r234_env) {
        var r234_otherwise, r234_op, r234_name, r234_body, r234_coinit, r234_ds, r234_imports, r234_names, r234_assignments, r234_macroG, r234_macroFn, r234_str, _r234_t1, _r234_t2, _r234_t3, _r234_t4, _r234_t5;
        var _r234_t0 = r234_form;
        if (Array.isArray(_r234_t0) && _r234_t0.length === 3 && (Array.isArray(_r234_t0[1]) && _r234_t0[1].length === 2 && '.quote' === _r234_t0[1][0]))
            return r234_op = _r234_t0[0], r234_str = _r234_t0[1][1], _r234_t0[1], r234_body = _r234_t0[2], r1_ex([
                r234_op,
                r234_str,
                r234_body
            ], r234_env);
        else {
            _r234_t1 = false;
            if (Array.isArray(_r234_t0) && _r234_t0.length === 3) {
                r234_op = _r234_t0[0];
                r234_name = _r234_t0[1];
                r234_body = _r234_t0[2];
                if (r1_atom(r234_name))
                    _r234_t1 = true;
                else
                    _r234_t1 = false;
            }
            if (_r234_t1) {
                r234_coinit = {
                    'injectForm': void 0,
                    'initFn': void 0
                };
                r234_ds = new r1_Scope(r234_env);
                r234_imports = {
                    'ex': r1_ex,
                    'atom': r1_wrapForSyntacticClosure(r1_atom),
                    'prim': r1_wrapForSyntacticClosure(r1_prim),
                    'formOf': function (r235_x) {
                        var _r235_t0, _r235_t1;
                        return r235_x[1];
                    },
                    'scopeOf': function (r236_x) {
                        var _r236_t0, _r236_t1;
                        return r236_x[2];
                    },
                    'definingEnv': r234_env,
                    'externEnv': r143_externs,
                    'toPattern': r143_toPattern,
                    'loadSourceRelative': r1_loadSourceRelative,
                    'parseSoruce': r1_parseSoruce,
                    'coinit': r234_coinit,
                    'FormInvalidError': r1_FormInvalidError,
                    'deQuasiquote': r1_deQuasiquote,
                    'opSegToRegular': r1_opSegToRegular
                };
                r234_names = Object.keys(r234_imports);
                r234_ds.declare('$', true);
                r234_assignments = ['.begin'].concat(r234_names.map(function (r237_name) {
                    var _r237_t0, _r237_t1;
                    return [
                        'local',
                        r237_name,
                        [
                            '.',
                            '$',
                            [
                                '.quote',
                                r237_name
                            ]
                        ]
                    ];
                }));
                r234_macroG = new Function(r234_ds.castName('$'), r1_escodegen.generate(r1_patrisika.generate([
                    '.return',
                    r1_ex([
                        '.begin',
                        r234_assignments,
                        r234_body
                    ], r234_ds)
                ], r234_ds, function (r238_form) {
                    var _r238_t0, _r238_t1;
                    return [
                        '.return',
                        r238_form
                    ];
                })));
                r234_macroFn = r234_macroG(r234_imports);
                r234_env.macros.put(r234_name, function (r239_c, r239_e) {
                    var _r239_t0, _r239_t1;
                    var r239_result = r234_macroFn(r239_c, r239_e);
                    var r239_s = new r1_Scope(r234_env);
                    r239_s.hanging = r239_e;
                    r239_s.semiparent = r239_e;
                    return r1_ex(r239_result, r239_s);
                });
                if (r234_coinit.initFn)
                    r234_coinit.initFn(r234_env.macros.get(r234_name));
                return r234_coinit.injectForm ? r1_ex(r234_coinit.injectForm, r234_env) : ['.unit'];
            } else
                return r234_otherwise = _r234_t0, ['.unit'];
        }
    });
    r143_externs.macros.put('macro-match', function (r240_form, r240_env) {
        var r240_otherwise, r240_c, r240_e, r240_patterns, r240_t, r240_tx, r240_tw, _r240_t1, _r240_t2, _r240_t3;
        var _r240_t0 = r240_form;
        if (Array.isArray(_r240_t0) && _r240_t0.length >= 3 && 'macro-match' === _r240_t0[0]) {
            r240_c = _r240_t0[1];
            r240_e = _r240_t0[2];
            r240_patterns = _r240_t0.slice(3);
            r240_t = r240_env.newt();
            r240_tx = r240_env.newt();
            r240_tw = r240_env.newt();
            return [
                '.begin',
                [
                    '.set',
                    r240_t,
                    r240_e
                ],
                [
                    '.set',
                    r240_tw,
                    [
                        '.lambda',
                        [r240_tx],
                        [
                            '.return',
                            [
                                '.list',
                                [
                                    '.quote',
                                    '.syntactic-closure'
                                ],
                                r240_tx,
                                r240_t
                            ]
                        ]
                    ]
                ],
                r143_externs.macros.get('match')([
                    'match',
                    r240_c
                ].concat(r240_patterns), r240_env, r240_tw)
            ];
        } else
            return r240_otherwise = _r240_t0, ['.unit'];
    });
    r143_externs.pFamily = 'r';
    return r143_externs;
};
exports['Create'] = _s0_t7;
