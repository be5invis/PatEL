'use strict';
const _s0_t0 = require('patrisika');
var _s0_t1;
var _s0_t2;
var _s0_t3;
var _s0_t4;
var _s0_t5;
var _s0_t6;
var r1_pass, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Scope = _r1_t8.Scope;
var r1_RawFormInvalidError = _r1_t8.FormInvalidError;
var r1_atom = function (r130_x) {
    var _r130_t0, _r130_t1;
    return typeof r130_x === 'string';
};
var r1_identifier = function (r131_x) {
    var _r131_t0, _r131_t1;
    return r1_atom(r131_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r131_x);
};
var r1_prim = function (r132_x) {
    var _r132_t0, _r132_t1;
    return r1_atom(r132_x) && !r1_identifier(r132_x);
};
var r1_trace = [];
var r1_findform = function (r133_form) {
    var _r133_t0, _r133_t1;
    if (r133_form && r133_form.within && r133_form.begins >= 0 && r133_form.ends >= 0)
        return r133_form;
    var r133_j = r1_trace.length - 1;
    while (r133_j >= 0) {
        if (r1_trace[r133_j] && r1_trace[r133_j].within && r1_trace[r133_j].begins >= 0 && r1_trace[r133_j].ends >= 0)
            return r1_trace[r133_j];
        r133_j = r133_j - 1;
    }
    return r133_form;
};
var r1_FormInvalidError = function (r134_form, r134_reason) {
    var _r134_t0, _r134_t1;
    return new r1_RawFormInvalidError(r1_findform(r134_form), r134_reason);
};
var r1_NodeTranslation = function (r135_fn) {
    var _r135_t0, _r135_t1;
    return function (r136_form, r136_env) {
        var r136_found, r136_j;
        var _r136_t0 = this;
        var _r136_t1 = arguments;
        r1_trace.push(r136_form);
        var r136_res = r135_fn.apply(_r136_t0, _r136_t1);
        if (r136_env.options.trace && typeof r136_form === 'string' && r136_res[0] === '.id') {
            r136_found = false;
            r136_j = r1_trace.length - 1;
            while (r136_j >= 0 && !r136_found) {
                if (r1_trace[r136_j] && r1_trace[r136_j].within && r1_trace[r136_j].begins >= 0 && r1_trace[r136_j].ends >= 0) {
                    r136_found = true;
                    r136_res.begins = r1_trace[r136_j].begins;
                    r136_res.ends = r1_trace[r136_j].ends;
                    r136_res.within = r1_trace[r136_j].within;
                }
                r136_j = r136_j - 1;
            }
        } else {
            if (r136_form && r136_res && r136_form.begins >= 0)
                r136_res.begins = r136_form.begins;
            if (r136_form && r136_res && r136_form.ends >= 0)
                r136_res.ends = r136_form.ends;
            if (r136_form && r136_res && r136_form.within)
                r136_res.within = r136_form.within;
        }
        r1_trace.pop(r136_form);
        return r136_res;
    };
};
var r1_deQuasiquote = function (r137_form, r137_level, r137_env) {
    var r137_otherwise, r137_xs, r137_x, r137_commonParts, r137_items, r137_c, r137_decLevel, _r137_t1, _r137_t2, _r137_t3;
    var _r137_t0 = r137_form;
    return Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.unquote' === _r137_t0[0] ? (r137_c = _r137_t0[1], !r137_level ? r137_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r137_c, r137_level - 1, r137_env)
    ]) : Array.isArray(_r137_t0) && _r137_t0.length === 3 && '.unquote' === _r137_t0[0] && (Array.isArray(_r137_t0[2]) && _r137_t0[2].length === 2 && '.quote' === _r137_t0[2][0]) ? (r137_c = _r137_t0[1], r137_decLevel = _r137_t0[2][1], _r137_t0[2], r137_decLevel = Math.max(1, Math.floor(r137_decLevel)), r137_level - r137_decLevel < 0 ? r137_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r137_c, r137_level - r137_decLevel, r137_env)
    ]) : Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.quasiquote' === _r137_t0[0] ? (r137_c = _r137_t0[1], [
        '.list',
        [
            '.quote',
            '.quasiquote'
        ],
        r1_deQuasiquote(r137_c, r137_level + 1, r137_env)
    ]) : Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.operatorPiece' === _r137_t0[0] ? (r137_items = _r137_t0.slice(1), r1_deQuasiquote(r1_opSegToRegular(r137_items, r137_env), r137_level, r137_env)) : Array.isArray(_r137_t0) && _r137_t0.length >= 0 ? (r137_xs = _r137_t0.slice(0), _r137_t1 = r137_xs[r137_xs.length - 1], Array.isArray(_r137_t1) && _r137_t1.length === 2 && '.sliceunquote' === _r137_t1[0] ? (r137_x = _r137_t1[1], r137_commonParts = r137_xs.slice(0, 0 - 1).map(function (r139_c) {
        var _r139_t0, _r139_t1;
        return r1_deQuasiquote(r139_c, r137_level, r137_env);
    }), !r137_level ? ['.conslist'].concat(r137_commonParts, [r137_x]) : ['.list'].concat(r137_commonParts, [[
            '.list',
            [
                '.quote',
                '.sliceunquote'
            ],
            r1_deQuasiquote(r137_x, r137_level - 1, r137_env)
        ]])) : (r137_otherwise = _r137_t1, ['.list'].concat(r137_xs.map(function (r138_c) {
        var _r138_t0, _r138_t1;
        return r1_deQuasiquote(r138_c, r137_level, r137_env);
    })))) : (r137_otherwise = _r137_t0, [
        '.quote',
        r137_otherwise
    ]);
};
var r1_ASSOC_LEFT = 'left';
var r1_ASSOC_NEVER = 'never';
var r1_ASSOC_RIGHT = 'right';
var r1_getOperatorInfo = function (r140__operator, r140_env) {
    var r140_otherwise, _r140_t0, _r140_t1, _r140_t2, _r140_t3;
    var r140_operator = r140__operator;
    if (r140_env.operatorInfo.has(r140_operator))
        return r140_env.operatorInfo.get(r140_operator);
    while (r140_operator[0] === '<' && r140_operator[r140_operator.length - 1] === '>')
        r140_operator = r140_operator.slice(1, -1);
    var r140_priority = 1000;
    var r140_associvity = r1_ASSOC_RIGHT;
    if (r140_operator && r140_operator !== '=') {
        r140_priority = (_r140_t0 = r140_operator[0], '?' === _r140_t0 ? 100 : '^' === _r140_t0 ? 100 : '*' === _r140_t0 ? 200 : '/' === _r140_t0 ? 200 : '%' === _r140_t0 ? 200 : '+' === _r140_t0 ? 300 : '-' === _r140_t0 ? 300 : '=' === _r140_t0 ? 400 : '!' === _r140_t0 ? 400 : '<' === _r140_t0 ? 500 : '>' === _r140_t0 ? 500 : '&' === _r140_t0 ? 600 : '|' === _r140_t0 ? 700 : (r140_otherwise = _r140_t0, 1000));
        r140_associvity = r140_operator.length > 1 && r140_operator[r140_operator.length - 1] === '>' ? r1_ASSOC_RIGHT : (_r140_t1 = r140_operator[0], '!' === _r140_t1 ? r1_ASSOC_NEVER : '=' === _r140_t1 ? r1_ASSOC_NEVER : '<' === _r140_t1 ? r1_ASSOC_NEVER : '>' === _r140_t1 ? r1_ASSOC_NEVER : (r140_otherwise = _r140_t1, r1_ASSOC_LEFT));
    }
    return {
        'priority': r140_priority,
        'associvity': r140_associvity
    };
};
var r1_opSegToRegular = function (r141_items, r141_env) {
    var r141_operator, r141_operand, r141_nbp, r141_assoc, r141_node, r141_n, _r141_t0, _r141_t1, _r141_t2;
    var r141_uber = [
        '.OG',
        void 0,
        r141_items[0]
    ];
    r141_uber.bp = 65534;
    var r141_j = 1;
    while (r141_j < r141_items.length) {
        r141_operator = r141_items[r141_j];
        r141_operand = r141_items[r141_j + 1];
        r141_j = r141_j + 2;
        _r141_t0 = r1_getOperatorInfo(r141_operator, r141_env);
        r141_nbp = _r141_t0.priority;
        r141_assoc = _r141_t0.associvity;
        if (r141_nbp > 65534)
            r141_nbp = 65534;
        r141_node = [
            r141_operator,
            void 0,
            r141_operand
        ];
        r141_node.bp = r141_nbp;
        r141_n = r141_uber;
        if (r141_assoc === r1_ASSOC_LEFT || r141_assoc === r1_ASSOC_NEVER) {
            while (r141_n[2].bp > r141_nbp)
                r141_n = r141_n[2];
            if (r141_assoc === r1_ASSOC_NEVER && r141_n[2].bp === r141_nbp)
                throw new r1_FormInvalidError(r141_operand, 'Attempting to combine uncombinable operator ' + r141_operator + '.');
            r141_node[1] = r141_n[2];
            r141_n[2] = r141_node;
        } else if (r141_assoc === r1_ASSOC_RIGHT) {
            while (r141_n[2].bp >= r141_nbp)
                r141_n = r141_n[2];
            r141_node[1] = r141_n[2];
            r141_n[2] = r141_node;
        } else if (true)
            throw new r1_FormInvalidError(r141_operand, 'Invalid associvity denotion \'' + r141_assoc + '\' for ' + r141_operator + '.');
        else
            void 0;
    }
    return r141_uber[2];
};
var r1_ex = r1_NodeTranslation(function (r142_form, r142_env) {
    var r142_any, r142_x, r142_callee, r142_args, r142_a, r142_j, r142_arg0, r142_args1, r142_t, r142_constQ, r142_items, r142_allKeysAreQuotes, r142_key, r142_value, r142_otherwise, r142_block, r142_param, r142_handler, r142_body, r142_params, r142_c, r142_e, _r142_t1, _r142_leti2, _r142_t3, _r142_t4, _r142_t5, _r142_t6, _r142_t7, _r142_t8, _r142_t9, _r142_t10, _r142_t11, _r142_t12, _r142_t13, _r142_t14, _r142_t15, _r142_t16, _r142_t17, _r142_t18, _r142_t19, _r142_t20, _r142_t21, _r142_t22, _r142_t23, _r142_t24, _r142_t25, _r142_t26, _r142_t27, _r142_t28, _r142_t29, _r142_tag30, _r142_t31, _r142_t32, _r142_tag33, _r142_t34, _r142_t35, _r142_t36, _r142_tag37;
    var _r142_t0 = r142_form;
    if (Array.isArray(_r142_t0) && _r142_t0.length === 2 && '.preserve' === _r142_t0[0]) {
        r142_x = _r142_t0[1];
        return r142_x;
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1 && '.quote' === _r142_t0[0]) {
        r142_x = _r142_t0.slice(1);
        return ['.quote'].concat(r142_x);
    } else if (Array.isArray(_r142_t0) && _r142_t0.length === 2 && '.import' === _r142_t0[0]) {
        r142_x = _r142_t0[1];
        return [
            '.import',
            r142_x
        ];
    } else if (Array.isArray(_r142_t0) && _r142_t0.length === 2 && '.export' === _r142_t0[0]) {
        r142_x = _r142_t0[1];
        return [
            '.export',
            r142_x
        ];
    } else if (Array.isArray(_r142_t0) && _r142_t0.length === 2 && '.quasiquote' === _r142_t0[0])
        return r142_x = _r142_t0[1], r1_ex(r1_deQuasiquote(r142_x, 0, r142_env), r142_env);
    else if (Array.isArray(_r142_t0) && _r142_t0.length === 2 && '.unquote' === _r142_t0[0]) {
        r142_x = _r142_t0[1];
        return r1_ex(r142_x, r142_env);
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1 && '.id' === _r142_t0[0]) {
        r142_x = _r142_t0.slice(1);
        return ['.id'].concat(r142_x);
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1 && '.t' === _r142_t0[0]) {
        r142_x = _r142_t0.slice(1);
        return ['.t'].concat(r142_x);
    } else if (Array.isArray(_r142_t0) && _r142_t0.length === 3 && '.lambda' === _r142_t0[0] && (Array.isArray(_r142_t0[1]) && _r142_t0[1].length >= 0)) {
        r142_args = _r142_t0[1].slice(0);
        _r142_t0[1];
        r142_body = _r142_t0[2];
        _r142_tag30 = false;
        (function () {
            var r147_derived = new r1_Scope(r142_env);
            var r147_j = 0;
            while (r147_j < r142_args.length) {
                if (r1_atom(r142_args[r147_j])) {
                    r147_derived.declare(r142_args[r147_j], true);
                    r142_args[r147_j] = r147_derived.use(r142_args[r147_j]);
                }
                r147_j = r147_j + 1;
            }
            _r142_tag30 = true;
            _r142_t29 = [
                '.lambda.scoped',
                r142_args,
                r1_ex(r142_body, r147_derived),
                r147_derived
            ];
            return _r142_t29;
        }());
        if (_r142_tag30)
            return _r142_t29;
        else
            return _r142_t29;
    } else if (Array.isArray(_r142_t0) && _r142_t0.length === 3 && '.syntactic-closure' === _r142_t0[0])
        return r142_c = _r142_t0[1], r142_e = _r142_t0[2], r1_ex(r142_c, r142_e);
    else if (Array.isArray(_r142_t0) && _r142_t0.length >= 3 && '.beta' === _r142_t0[0] && (Array.isArray(_r142_t0[1]) && _r142_t0[1].length >= 0)) {
        r142_args = _r142_t0[1].slice(0);
        _r142_t0[1];
        r142_body = _r142_t0[2];
        r142_params = _r142_t0.slice(3);
        _r142_tag33 = false;
        (function () {
            var r146_derived = new r1_Scope(r142_env);
            var r146_j = 0;
            while (r146_j < r142_args.length) {
                if (r1_atom(r142_args[r146_j])) {
                    r146_derived.declare(r142_args[r146_j], true);
                    r142_args[r146_j] = r146_derived.use(r142_args[r146_j]);
                }
                r146_j = r146_j + 1;
            }
            r146_j = 0;
            while (r146_j < r142_args.length) {
                r142_params[r146_j] = r1_ex(r142_params[r146_j], r142_env);
                r146_j = r146_j + 1;
            }
            _r142_tag33 = true;
            _r142_t32 = [
                '.beta.scoped',
                r142_args,
                r1_ex(r142_body, r146_derived),
                r146_derived
            ].concat(r142_params);
            return _r142_t32;
        }());
        if (_r142_tag33)
            return _r142_t32;
        else
            return _r142_t32;
    } else if (Array.isArray(_r142_t0) && _r142_t0.length === 4 && '.try' === _r142_t0[0] && (Array.isArray(_r142_t0[2]) && _r142_t0[2].length === 1)) {
        r142_block = _r142_t0[1];
        r142_param = _r142_t0[2][0];
        _r142_t0[2];
        r142_handler = _r142_t0[3];
        r142_env.declare(r142_param);
        return [
            '.try',
            r1_ex(r142_block, r142_env),
            [r142_env.use(r142_param)],
            r1_ex(r142_handler, r142_env)
        ];
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1 && '.xhash' === _r142_t0[0]) {
        r142_args = _r142_t0.slice(1);
        r142_a = [];
        r142_allKeysAreQuotes = true;
        r142_j = 1;
        while (r142_j < r142_form.length) {
            r142_key = r1_ex(r142_form[r142_j][0], r142_env);
            r142_value = r1_ex(r142_form[r142_j][1], r142_env);
            _r142_t1 = r142_key;
            if (Array.isArray(_r142_t1) && _r142_t1.length === 2 && '.quote' === _r142_t1[0]) {
                r142_x = _r142_t1[1];
            } else {
                r142_otherwise = _r142_t1;
                r142_allKeysAreQuotes = false;
            }
            r142_a.push([
                r142_key,
                r142_value
            ]);
            r142_j = r142_j + 1;
        }
        if (r142_allKeysAreQuotes)
            return ['.hash'].concat(r142_a.map(function (r143_pair) {
                var _r143_t0, _r143_t1;
                return [
                    r143_pair[0][1],
                    r143_pair[1]
                ];
            }));
        else {
            _r142_t35 = r142_env.newt();
            return function (_r142_leti2) {
                var r144_t = _r142_leti2;
                return [
                    '.begin',
                    [
                        '.set',
                        r144_t,
                        ['.hash']
                    ]
                ].concat(r142_a.map(function (r145_pair) {
                    var _r145_t0, _r145_t1;
                    return [
                        '.set',
                        [
                            '.',
                            r144_t,
                            r145_pair[0]
                        ],
                        r145_pair[1]
                    ];
                }).concat([r144_t]));
            }(_r142_t35);
        }
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1 && '.hash' === _r142_t0[0]) {
        r142_args = _r142_t0.slice(1);
        r142_a = [];
        r142_j = 1;
        while (r142_j < r142_form.length) {
            r142_a.push([
                r142_form[r142_j][0],
                r1_ex(r142_form[r142_j][1], r142_env)
            ]);
            r142_j = r142_j + 1;
        }
        return ['.hash'].concat(r142_a);
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1 && '.conslist' === _r142_t0[0]) {
        r142_items = _r142_t0.slice(1);
        return [
            [
                '.',
                r1_ex(['.list'].concat(r142_form.slice(1, -1)), r142_env),
                [
                    '.quote',
                    'concat'
                ]
            ],
            r1_ex(r142_form[r142_form.length - 1], r142_env)
        ];
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1 && '.operatorPiece' === _r142_t0[0])
        return r142_items = _r142_t0.slice(1), r1_ex(r1_opSegToRegular(r142_items, r142_env), r142_env);
    else if (Array.isArray(_r142_t0) && _r142_t0.length === 3 && '.local' === _r142_t0[0]) {
        r142_x = _r142_t0[1];
        r142_constQ = _r142_t0[2];
        r142_env.declare(r142_x, r142_constQ ? 2 : 0);
        return r142_env.use(r142_x);
    } else if (Array.isArray(_r142_t0) && _r142_t0.length === 2 && '.local' === _r142_t0[0]) {
        r142_x = _r142_t0[1];
        r142_env.declare(r142_x);
        return r142_env.use(r142_x);
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 3 && '.revcall' === _r142_t0[0]) {
        r142_callee = _r142_t0[1];
        r142_arg0 = _r142_t0[2];
        r142_args1 = _r142_t0.slice(3);
        if (r1_atom(r142_callee) && r142_env.macros.has(r142_callee) && r142_env.macros.get(r142_callee) instanceof Function)
            return r142_env.macros.get(r142_callee)(r142_form.slice(1), r142_env);
        r142_t = r142_env.newt();
        return [
            '.begin',
            [
                '.set',
                r142_t,
                r1_ex(r142_arg0, r142_env)
            ],
            r1_ex([
                r142_callee,
                r142_t
            ].concat(r142_args1), r142_env)
        ];
    } else if (Array.isArray(_r142_t0) && _r142_t0.length >= 1) {
        r142_callee = _r142_t0[0];
        r142_args = _r142_t0.slice(1);
        if (r1_atom(r142_callee) && r142_env.macros.has(r142_callee) && r142_env.macros.get(r142_callee) instanceof Function)
            return r142_env.macros.get(r142_callee)(r142_form, r142_env);
        if (!r1_prim(r142_callee))
            r142_callee = r1_ex(r142_callee, r142_env);
        r142_a = [r142_callee];
        r142_j = 1;
        while (r142_j < r142_form.length) {
            r142_a[r142_j] = r1_ex(r142_form[r142_j], r142_env);
            r142_j = r142_j + 1;
        }
        return r142_a;
    } else {
        r142_x = _r142_t0;
        if (r1_atom(r142_x) && r142_env.macros.has(r142_x) && r142_env.macros.get(r142_x).invokeAsAtom)
            return r142_env.macros.get(r142_x).invokeAsAtom(r142_env);
        else {
            r142_x = _r142_t0;
            if (r1_atom(r142_x) && r142_env.macros.has(r142_x) && !(r142_env.macros.get(r142_x) instanceof Function))
                return r142_env.macros.get(r142_x);
            else {
                r142_x = _r142_t0;
                if (r1_atom(r142_x) && r142_env.macros.has(r142_x)) {
                    if (r142_env.options.warn)
                        r142_env.options.warn(new r1_FormInvalidError(r1_findform(r142_form), 'You are using macro [' + r142_x + '] as an atom.'));
                    return r142_env.use(r142_x);
                } else {
                    r142_x = _r142_t0;
                    if (r1_prim(r142_x))
                        return r142_x;
                    else {
                        r142_x = _r142_t0;
                        if (r1_atom(r142_x))
                            return r142_env.use(r142_x);
                        else {
                            r142_any = _r142_t0;
                            return r142_any;
                        }
                    }
                }
            }
        }
    }
});
var r1_checkEvaluated = function (r148_form) {
    var _r148_t0, _r148_t1, _r148_t2;
    if (r148_form && r148_form instanceof Array && r148_form.length > 0) {
        if (r148_form.unevaluated)
            throw new r1_FormInvalidError(r148_form, 'Unevaluated subform');
        return r148_form.forEach(r1_checkEvaluated);
    } else
        return void 0;
};
_s0_t1 = r1_pass = function (r150_form, r150_globalScope) {
    var _r150_t0, _r150_t1;
    return r1_ex(r150_form, r150_globalScope);
};
_s0_t2 = r1_ex;
_s0_t3 = r1_checkEvaluated;
_s0_t4 = r1_deQuasiquote;
_s0_t5 = r1_opSegToRegular;
_s0_t6 = r1_FormInvalidError;
exports['pass'] = _s0_t1;
exports['ex'] = _s0_t2;
exports['checkEvaluated'] = _s0_t3;
exports['deQuasiquote'] = _s0_t4;
exports['opSegToRegular'] = _s0_t5;
exports['FormInvalidError'] = _s0_t6;
