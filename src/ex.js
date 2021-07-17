'use strict';
var _s0_t0 = require('patrisika');
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
var r1_atom = function (r125_x) {
    return typeof r125_x === 'string';
};
var r1_identifier = function (r126_x) {
    return r1_atom(r126_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r126_x);
};
var r1_prim = function (r127_x) {
    return r1_atom(r127_x) && !r1_identifier(r127_x);
};
var r1_trace = [];
var r1_findform = function (r128_form) {
    if (r128_form && r128_form.within && r128_form.begins >= 0 && r128_form.ends >= 0)
        return r128_form;
    var r128_j = r1_trace.length - 1;
    for (; r128_j >= 0; r128_j = r128_j - 1)
        if (r1_trace[r128_j] && r1_trace[r128_j].within && r1_trace[r128_j].begins >= 0 && r1_trace[r128_j].ends >= 0)
            return r1_trace[r128_j];
    return r128_form;
};
var r1_FormInvalidError = function (r129_form, r129_reason) {
    return new r1_RawFormInvalidError(r1_findform(r129_form), r129_reason);
};
var r1_NodeTranslation = function (r130_fn) {
    return function (r131_form, r131_env) {
        var r131_found, r131_j;
        var _r131_t0 = this;
        var _r131_t1 = arguments;
        r1_trace.push(r131_form);
        var r131_res = r130_fn.apply(_r131_t0, _r131_t1);
        if (r131_env.options.trace && typeof r131_form === 'string' && r131_res[0] === '.id') {
            r131_found = false;
            r131_j = r1_trace.length - 1;
            for (; r131_j >= 0 && !r131_found; r131_j = r131_j - 1)
                if (r1_trace[r131_j] && r1_trace[r131_j].within && r1_trace[r131_j].begins >= 0 && r1_trace[r131_j].ends >= 0) {
                    r131_found = true;
                    r131_res.begins = r1_trace[r131_j].begins;
                    r131_res.ends = r1_trace[r131_j].ends;
                    r131_res.within = r1_trace[r131_j].within;
                }
        } else {
            if (r131_form && r131_res && r131_form.begins >= 0)
                r131_res.begins = r131_form.begins;
            if (r131_form && r131_res && r131_form.ends >= 0)
                r131_res.ends = r131_form.ends;
            if (r131_form && r131_res && r131_form.within)
                r131_res.within = r131_form.within;
        }
        r1_trace.pop(r131_form);
        return r131_res;
    };
};
var r1_deQuasiquote = function (r132_form, r132_level, r132_env) {
    var r132_otherwise, r132_xs, r132_x, r132_commonParts, r132_items, r132_c, r132_decLevel, _r132_t1;
    var _r132_t0 = r132_form;
    return Array.isArray(_r132_t0) && _r132_t0.length === 2 && '.unquote' === _r132_t0[0] ? (r132_c = _r132_t0[1], !r132_level ? r132_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r132_c, r132_level - 1, r132_env)
    ]) : Array.isArray(_r132_t0) && _r132_t0.length === 3 && '.unquote' === _r132_t0[0] && (Array.isArray(_r132_t0[2]) && _r132_t0[2].length === 2 && '.quote' === _r132_t0[2][0]) ? (r132_c = _r132_t0[1], r132_decLevel = _r132_t0[2][1], _r132_t0[2], r132_decLevel = Math.max(1, Math.floor(r132_decLevel)), r132_level - r132_decLevel < 0 ? r132_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r132_c, r132_level - r132_decLevel, r132_env)
    ]) : Array.isArray(_r132_t0) && _r132_t0.length === 2 && '.quasiquote' === _r132_t0[0] ? (r132_c = _r132_t0[1], [
        '.list',
        [
            '.quote',
            '.quasiquote'
        ],
        r1_deQuasiquote(r132_c, r132_level + 1, r132_env)
    ]) : Array.isArray(_r132_t0) && _r132_t0.length >= 1 && '.operatorPiece' === _r132_t0[0] ? (r132_items = _r132_t0.slice(1), r1_deQuasiquote(r1_opSegToRegular(r132_items, r132_env), r132_level, r132_env)) : Array.isArray(_r132_t0) && _r132_t0.length >= 0 ? (r132_xs = _r132_t0.slice(0), _r132_t1 = r132_xs[r132_xs.length - 1], Array.isArray(_r132_t1) && _r132_t1.length === 2 && '.sliceunquote' === _r132_t1[0] ? (r132_x = _r132_t1[1], r132_commonParts = r132_xs.slice(0, 0 - 1).map(function (r134_c) {
        return r1_deQuasiquote(r134_c, r132_level, r132_env);
    }), !r132_level ? ['.conslist'].concat(r132_commonParts, [r132_x]) : ['.list'].concat(r132_commonParts, [[
            '.list',
            [
                '.quote',
                '.sliceunquote'
            ],
            r1_deQuasiquote(r132_x, r132_level - 1, r132_env)
        ]])) : (r132_otherwise = _r132_t1, ['.list'].concat(r132_xs.map(function (r133_c) {
        return r1_deQuasiquote(r133_c, r132_level, r132_env);
    })))) : (r132_otherwise = _r132_t0, [
        '.quote',
        r132_otherwise
    ]);
};
var r1_ASSOC_LEFT = 'left';
var r1_ASSOC_NEVER = 'never';
var r1_ASSOC_RIGHT = 'right';
var r1_getOperatorInfo = function (r135__operator, r135_env) {
    var _r135_t0, _r135_t1;
    var r135_operator = r135__operator;
    if (r135_env.operatorInfo.has(r135_operator))
        return r135_env.operatorInfo.get(r135_operator);
    for (; r135_operator[0] === '<' && r135_operator[r135_operator.length - 1] === '>';)
        r135_operator = r135_operator.slice(1, -1);
    var r135_priority = 1000;
    var r135_associvity = r1_ASSOC_RIGHT;
    if (r135_operator && r135_operator !== '=') {
        r135_priority = (_r135_t0 = r135_operator[0], '?' === _r135_t0 ? 100 : '^' === _r135_t0 ? 100 : '*' === _r135_t0 ? 200 : '/' === _r135_t0 ? 200 : '%' === _r135_t0 ? 200 : '+' === _r135_t0 ? 300 : '-' === _r135_t0 ? 300 : '=' === _r135_t0 ? 400 : '!' === _r135_t0 ? 400 : '<' === _r135_t0 ? 500 : '>' === _r135_t0 ? 500 : '&' === _r135_t0 ? 600 : '|' === _r135_t0 ? 700 : 1000);
        r135_associvity = r135_operator.length > 1 && r135_operator[r135_operator.length - 1] === '>' ? r1_ASSOC_RIGHT : (_r135_t1 = r135_operator[0], '!' === _r135_t1 ? r1_ASSOC_NEVER : '=' === _r135_t1 ? r1_ASSOC_NEVER : '<' === _r135_t1 ? r1_ASSOC_NEVER : '>' === _r135_t1 ? r1_ASSOC_NEVER : r1_ASSOC_LEFT);
    }
    return {
        'priority': r135_priority,
        'associvity': r135_associvity
    };
};
var r1_opSegToRegular = function (r136_items, r136_env) {
    var r136_operator, r136_operand, r136_nbp, r136_assoc, r136_node, r136_n, _r136_t0;
    var r136_uber = [
        '.OG',
        void 0,
        r136_items[0]
    ];
    r136_uber.bp = 65534;
    var r136_j = 1;
    for (; r136_j < r136_items.length;) {
        r136_operator = r136_items[r136_j];
        r136_operand = r136_items[r136_j + 1];
        r136_j = r136_j + 2;
        _r136_t0 = r1_getOperatorInfo(r136_operator, r136_env);
        r136_nbp = _r136_t0.priority;
        r136_assoc = _r136_t0.associvity;
        if (r136_nbp > 65534)
            r136_nbp = 65534;
        r136_node = [
            r136_operator,
            void 0,
            r136_operand
        ];
        r136_node.bp = r136_nbp;
        r136_n = r136_uber;
        if (r136_assoc === r1_ASSOC_LEFT || r136_assoc === r1_ASSOC_NEVER) {
            for (; r136_n[2].bp > r136_nbp;)
                r136_n = r136_n[2];
            if (r136_assoc === r1_ASSOC_NEVER && r136_n[2].bp === r136_nbp)
                throw new r1_FormInvalidError(r136_operand, 'Attempting to combine uncombinable operator ' + r136_operator + '.');
            r136_node[1] = r136_n[2];
            r136_n[2] = r136_node;
        } else if (r136_assoc === r1_ASSOC_RIGHT) {
            for (; r136_n[2].bp >= r136_nbp;)
                r136_n = r136_n[2];
            r136_node[1] = r136_n[2];
            r136_n[2] = r136_node;
        } else
            throw new r1_FormInvalidError(r136_operand, 'Invalid associvity denotion \'' + r136_assoc + '\' for ' + r136_operator + '.');
    }
    return r136_uber[2];
};
var r1_ex = r1_NodeTranslation(function (r137_form, r137_env) {
    var r137_any, r137_x, r137_callee, r137_args, r137_a, r137_j, r137_arg0, r137_args1, r137_t, r137_constQ, r137_items, r137_allKeysAreQuotes, r137_key, r137_value, r137_block, r137_param, r137_handler, r137_body, r137_params, r137_c, r137_e, _r137_t1, _r137_t29, _r137_tag30, _r137_t32, _r137_tag33, _r137_t35;
    var _r137_t0 = r137_form;
    if (Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.preserve' === _r137_t0[0]) {
        r137_x = _r137_t0[1];
        return r137_x;
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.quote' === _r137_t0[0]) {
        r137_x = _r137_t0.slice(1);
        return ['.quote'].concat(r137_x);
    } else if (Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.import' === _r137_t0[0]) {
        r137_x = _r137_t0[1];
        return [
            '.import',
            r137_x
        ];
    } else if (Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.export' === _r137_t0[0]) {
        r137_x = _r137_t0[1];
        return [
            '.export',
            r137_x
        ];
    } else if (Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.quasiquote' === _r137_t0[0])
        return r137_x = _r137_t0[1], r1_ex(r1_deQuasiquote(r137_x, 0, r137_env), r137_env);
    else if (Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.unquote' === _r137_t0[0]) {
        r137_x = _r137_t0[1];
        return r1_ex(r137_x, r137_env);
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.id' === _r137_t0[0]) {
        r137_x = _r137_t0.slice(1);
        return ['.id'].concat(r137_x);
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.t' === _r137_t0[0]) {
        r137_x = _r137_t0.slice(1);
        return ['.t'].concat(r137_x);
    } else if (Array.isArray(_r137_t0) && _r137_t0.length === 3 && '.lambda' === _r137_t0[0] && (Array.isArray(_r137_t0[1]) && _r137_t0[1].length >= 0)) {
        r137_args = _r137_t0[1].slice(0);
        _r137_t0[1];
        r137_body = _r137_t0[2];
        _r137_tag30 = false;
        (function () {
            var r142_derived = new r1_Scope(r137_env);
            var r142_j = 0;
            for (; r142_j < r137_args.length; r142_j = r142_j + 1)
                if (r1_atom(r137_args[r142_j])) {
                    r142_derived.declare(r137_args[r142_j], true);
                    r137_args[r142_j] = r142_derived.use(r137_args[r142_j]);
                }
            _r137_tag30 = true;
            _r137_t29 = [
                '.lambda.scoped',
                r137_args,
                r1_ex(r137_body, r142_derived),
                r142_derived
            ];
            return _r137_t29;
        }());
        if (_r137_tag30)
            return _r137_t29;
        else
            return _r137_t29;
    } else if (Array.isArray(_r137_t0) && _r137_t0.length === 3 && '.syntactic-closure' === _r137_t0[0])
        return r137_c = _r137_t0[1], r137_e = _r137_t0[2], r1_ex(r137_c, r137_e);
    else if (Array.isArray(_r137_t0) && _r137_t0.length >= 3 && '.beta' === _r137_t0[0] && (Array.isArray(_r137_t0[1]) && _r137_t0[1].length >= 0)) {
        r137_args = _r137_t0[1].slice(0);
        _r137_t0[1];
        r137_body = _r137_t0[2];
        r137_params = _r137_t0.slice(3);
        _r137_tag33 = false;
        (function () {
            var r141_derived = new r1_Scope(r137_env);
            var r141_j = 0;
            for (; r141_j < r137_args.length; r141_j = r141_j + 1)
                if (r1_atom(r137_args[r141_j])) {
                    r141_derived.declare(r137_args[r141_j], true);
                    r137_args[r141_j] = r141_derived.use(r137_args[r141_j]);
                }
            r141_j = 0;
            for (; r141_j < r137_args.length; r141_j = r141_j + 1)
                r137_params[r141_j] = r1_ex(r137_params[r141_j], r137_env);
            _r137_tag33 = true;
            _r137_t32 = [
                '.beta.scoped',
                r137_args,
                r1_ex(r137_body, r141_derived),
                r141_derived
            ].concat(r137_params);
            return _r137_t32;
        }());
        if (_r137_tag33)
            return _r137_t32;
        else
            return _r137_t32;
    } else if (Array.isArray(_r137_t0) && _r137_t0.length === 4 && '.try' === _r137_t0[0] && (Array.isArray(_r137_t0[2]) && _r137_t0[2].length === 1)) {
        r137_block = _r137_t0[1];
        r137_param = _r137_t0[2][0];
        _r137_t0[2];
        r137_handler = _r137_t0[3];
        r137_env.declare(r137_param);
        return [
            '.try',
            r1_ex(r137_block, r137_env),
            [r137_env.use(r137_param)],
            r1_ex(r137_handler, r137_env)
        ];
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.xhash' === _r137_t0[0]) {
        r137_args = _r137_t0.slice(1);
        r137_a = [];
        r137_allKeysAreQuotes = true;
        r137_j = 1;
        for (; r137_j < r137_form.length; r137_j = r137_j + 1) {
            r137_key = r1_ex(r137_form[r137_j][0], r137_env);
            r137_value = r1_ex(r137_form[r137_j][1], r137_env);
            _r137_t1 = r137_key;
            if (Array.isArray(_r137_t1) && _r137_t1.length === 2 && '.quote' === _r137_t1[0])
                r137_x = _r137_t1[1];
            else
                r137_allKeysAreQuotes = false;
            r137_a.push([
                r137_key,
                r137_value
            ]);
        }
        if (r137_allKeysAreQuotes)
            return ['.hash'].concat(r137_a.map(function (r138_pair) {
                return [
                    r138_pair[0][1],
                    r138_pair[1]
                ];
            }));
        else {
            _r137_t35 = r137_env.newt();
            return function (_r137_leti2) {
                var r139_t = _r137_leti2;
                return [
                    '.begin',
                    [
                        '.set',
                        r139_t,
                        ['.hash']
                    ]
                ].concat(r137_a.map(function (r140_pair) {
                    return [
                        '.set',
                        [
                            '.',
                            r139_t,
                            r140_pair[0]
                        ],
                        r140_pair[1]
                    ];
                }).concat([r139_t]));
            }(_r137_t35);
        }
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.hash' === _r137_t0[0]) {
        r137_args = _r137_t0.slice(1);
        r137_a = [];
        r137_j = 1;
        for (; r137_j < r137_form.length; r137_j = r137_j + 1)
            r137_a.push([
                r137_form[r137_j][0],
                r1_ex(r137_form[r137_j][1], r137_env)
            ]);
        return ['.hash'].concat(r137_a);
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.conslist' === _r137_t0[0]) {
        r137_items = _r137_t0.slice(1);
        return [
            [
                '.',
                r1_ex(['.list'].concat(r137_form.slice(1, -1)), r137_env),
                [
                    '.quote',
                    'concat'
                ]
            ],
            r1_ex(r137_form[r137_form.length - 1], r137_env)
        ];
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1 && '.operatorPiece' === _r137_t0[0])
        return r137_items = _r137_t0.slice(1), r1_ex(r1_opSegToRegular(r137_items, r137_env), r137_env);
    else if (Array.isArray(_r137_t0) && _r137_t0.length === 3 && '.local' === _r137_t0[0]) {
        r137_x = _r137_t0[1];
        r137_constQ = _r137_t0[2];
        r137_env.declare(r137_x, r137_constQ ? 2 : 0);
        return r137_env.use(r137_x);
    } else if (Array.isArray(_r137_t0) && _r137_t0.length === 2 && '.local' === _r137_t0[0]) {
        r137_x = _r137_t0[1];
        r137_env.declare(r137_x);
        return r137_env.use(r137_x);
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 3 && '.revcall' === _r137_t0[0]) {
        r137_callee = _r137_t0[1];
        r137_arg0 = _r137_t0[2];
        r137_args1 = _r137_t0.slice(3);
        if (r1_atom(r137_callee) && r137_env.macros.has(r137_callee) && r137_env.macros.get(r137_callee) instanceof Function)
            return r137_env.macros.get(r137_callee)(r137_form.slice(1), r137_env);
        r137_t = r137_env.newt();
        return [
            '.begin',
            [
                '.set',
                r137_t,
                r1_ex(r137_arg0, r137_env)
            ],
            r1_ex([
                r137_callee,
                r137_t
            ].concat(r137_args1), r137_env)
        ];
    } else if (Array.isArray(_r137_t0) && _r137_t0.length >= 1) {
        r137_callee = _r137_t0[0];
        r137_args = _r137_t0.slice(1);
        if (r1_atom(r137_callee) && r137_env.macros.has(r137_callee) && r137_env.macros.get(r137_callee) instanceof Function)
            return r137_env.macros.get(r137_callee)(r137_form, r137_env);
        if (!r1_prim(r137_callee))
            r137_callee = r1_ex(r137_callee, r137_env);
        r137_a = [r137_callee];
        r137_j = 1;
        for (; r137_j < r137_form.length; r137_j = r137_j + 1)
            r137_a[r137_j] = r1_ex(r137_form[r137_j], r137_env);
        return r137_a;
    } else {
        r137_x = _r137_t0;
        if (r1_atom(r137_x) && r137_env.macros.has(r137_x) && r137_env.macros.get(r137_x).invokeAsAtom)
            return r137_env.macros.get(r137_x).invokeAsAtom(r137_env);
        else {
            r137_x = _r137_t0;
            if (r1_atom(r137_x) && r137_env.macros.has(r137_x) && !(r137_env.macros.get(r137_x) instanceof Function))
                return r137_env.macros.get(r137_x);
            else {
                r137_x = _r137_t0;
                if (r1_atom(r137_x) && r137_env.macros.has(r137_x)) {
                    if (r137_env.options.warn)
                        r137_env.options.warn(new r1_FormInvalidError(r1_findform(r137_form), 'You are using macro [' + r137_x + '] as an atom.'));
                    return r137_env.use(r137_x);
                } else {
                    r137_x = _r137_t0;
                    if (r1_prim(r137_x))
                        return r137_x;
                    else {
                        r137_x = _r137_t0;
                        if (r1_atom(r137_x))
                            return r137_env.use(r137_x);
                        else {
                            r137_any = _r137_t0;
                            return r137_any;
                        }
                    }
                }
            }
        }
    }
});
var r1_checkEvaluated = function (r143_form) {
    if (r143_form && r143_form instanceof Array && r143_form.length > 0) {
        if (r143_form.unevaluated)
            throw new r1_FormInvalidError(r143_form, 'Unevaluated subform');
        return r143_form.forEach(r1_checkEvaluated);
    } else
        return void 0;
};
_s0_t1 = r1_pass = function (r145_form, r145_globalScope) {
    return r1_ex(r145_form, r145_globalScope);
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
