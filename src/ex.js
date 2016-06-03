﻿'use strict';
var _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_leti6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t12, _r1_t13, _r1_t14, _r1_tag15, _r1_t16, _r1_t17, _r1_t18, _r1_t19, _r1_t20, _r1_t21, _r1_t22, r1_Scope = require('patrisika').Scope, r1_atom = function _r1_t7(r113_x) {
        return typeof r113_x === 'string';
    }, r1_identifier = function _r1_t8(r114_x) {
        return r1_atom(r114_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r114_x);
    }, r1_prim = function _r1_t9(r115_x) {
        return r1_atom(r115_x) && !r1_identifier(r115_x);
    }, r1_trace = [], r1_findform = function _r1_t10(r116_form) {
        if (r116_form && r116_form.within && r116_form.begins >= 0 && r116_form.ends >= 0)
            return r116_form;
        var r116_j = r1_trace.length - 1;
        for (; r116_j >= 0; r116_j -= 1)
            if (r1_trace[r116_j] && r1_trace[r116_j].within && r1_trace[r116_j].begins >= 0 && r1_trace[r116_j].ends >= 0)
                return r1_trace[r116_j];
        return r116_form;
    }, _r1_t11 = require('patrisika').FormInvalidError, r1_FormInvalidError = function (_r1_leti6, _r117_t0, r117_raw) {
        return r117_raw = _r1_leti6, _r1_t14 = function _r117_t0(r118_form, r118_reason) {
            return new r117_raw(r1_findform(r118_form), r118_reason);
        };
    }(_r1_t11), r1_NodeTranslation = function _r1_t16(r119_fn) {
        return function _r119_t2(r120_form, r120_env) {
            var r120_found, r120_j, _r120_t0 = this, _r120_t1 = arguments;
            r1_trace.push(r120_form);
            var r120_res = r119_fn.apply(_r120_t0, _r120_t1);
            if (r120_env.options.trace && typeof r120_form === 'string' && r120_res[0] === '.id')
                for (r120_found = !1, r120_j = r1_trace.length - 1; r120_j >= 0 && !r120_found; r120_j -= 1)
                    r1_trace[r120_j] && r1_trace[r120_j].within && r1_trace[r120_j].begins >= 0 && r1_trace[r120_j].ends >= 0 && (r120_found = !0, r120_res.begins = r1_trace[r120_j].begins, r120_res.ends = r1_trace[r120_j].ends, r120_res.within = r1_trace[r120_j].within);
            else
                r120_form && r120_res && r120_form.begins >= 0 && (r120_res.begins = r120_form.begins), r120_form && r120_res && r120_form.ends >= 0 && (r120_res.ends = r120_form.ends), r120_form && r120_res && r120_form.within && (r120_res.within = r120_form.within);
            return r1_trace.pop(r120_form), r120_res;
        };
    }, r1_deQuasiquote = function _r1_t17(r121_form, r121_level, r121_env) {
        var r121_otherwise, r121_xs, r121_x, r121_commonParts, r121_items, r121_c, r121_decLevel, _r121_t1, _r121_t0 = r121_form;
        return Array.isArray(_r121_t0) && _r121_t0.length === 2 && '.unquote' === _r121_t0[0] ? (r121_c = _r121_t0[1], r121_level ? [
            '.list',
            [
                '.quote',
                '.unquote'
            ],
            r1_deQuasiquote(r121_c, r121_level - 1, r121_env)
        ] : r121_c) : Array.isArray(_r121_t0) && _r121_t0.length === 3 && '.unquote' === _r121_t0[0] && Array.isArray(_r121_t0[2]) && _r121_t0[2].length === 2 && '.quote' === _r121_t0[2][0] ? (r121_c = _r121_t0[1], r121_decLevel = _r121_t0[2][1], _r121_t0[2], r121_decLevel = Math.max(1, Math.floor(r121_decLevel)), r121_level - r121_decLevel < 0 ? r121_c : [
            '.list',
            [
                '.quote',
                '.unquote'
            ],
            r1_deQuasiquote(r121_c, r121_level - r121_decLevel, r121_env)
        ]) : Array.isArray(_r121_t0) && _r121_t0.length === 2 && '.quasiquote' === _r121_t0[0] ? (r121_c = _r121_t0[1], [
            '.list',
            [
                '.quote',
                '.quasiquote'
            ],
            r1_deQuasiquote(r121_c, r121_level + 1, r121_env)
        ]) : Array.isArray(_r121_t0) && _r121_t0.length >= 1 && '.operatorPiece' === _r121_t0[0] ? (r121_items = _r121_t0.slice(1), r1_deQuasiquote(r1_opSegToRegular(r121_items, r121_env), r121_level, r121_env)) : Array.isArray(_r121_t0) && _r121_t0.length >= 0 ? (r121_xs = _r121_t0.slice(0), _r121_t1 = r121_xs[r121_xs.length - 1], Array.isArray(_r121_t1) && _r121_t1.length === 2 && '.sliceunquote' === _r121_t1[0] ? (r121_x = _r121_t1[1], r121_commonParts = r121_xs.slice(0, -1).map(function _r121_t4(r123_c) {
            return r1_deQuasiquote(r123_c, r121_level, r121_env);
        }), r121_level ? ['.list'].concat(r121_commonParts, [[
                '.list',
                [
                    '.quote',
                    '.sliceunquote'
                ],
                r1_deQuasiquote(r121_x, r121_level - 1, r121_env)
            ]]) : ['.conslist'].concat(r121_commonParts, [r121_x])) : (r121_otherwise = _r121_t1, ['.list'].concat(r121_xs.map(function _r121_t5(r122_c) {
            return r1_deQuasiquote(r122_c, r121_level, r121_env);
        })))) : (r121_otherwise = _r121_t0, [
            '.quote',
            r121_otherwise
        ]);
    }, r1_ASSOC_LEFT = 'left', r1_ASSOC_NEVER = 'never', r1_ASSOC_RIGHT = 'right', r1_getOperatorInfo = function _r1_t18(r124__operator, r124_env) {
        var _r124_t0, _r124_t1, r124_operator = r124__operator;
        if (r124_env.operatorInfo.has(r124_operator))
            return r124_env.operatorInfo.get(r124_operator);
        for (; r124_operator[0] === '<' && r124_operator[r124_operator.length - 1] === '>';)
            r124_operator = r124_operator.slice(1, -1);
        var r124_priority = 1000, r124_associvity = r1_ASSOC_RIGHT;
        return r124_operator && r124_operator !== '=' && (_r124_t0 = r124_operator[0], r124_priority = '?' === _r124_t0 ? 100 : '^' === _r124_t0 ? 100 : '*' === _r124_t0 ? 200 : '/' === _r124_t0 ? 200 : '%' === _r124_t0 ? 200 : '+' === _r124_t0 ? 300 : '-' === _r124_t0 ? 300 : '=' === _r124_t0 ? 400 : '!' === _r124_t0 ? 400 : '<' === _r124_t0 ? 500 : '>' === _r124_t0 ? 500 : '&' === _r124_t0 ? 600 : '|' === _r124_t0 ? 700 : 1000, r124_associvity = r124_operator.length > 1 && r124_operator[r124_operator.length - 1] === '>' ? r1_ASSOC_RIGHT : (_r124_t1 = r124_operator[0], '!' === _r124_t1 ? r1_ASSOC_NEVER : '=' === _r124_t1 ? r1_ASSOC_NEVER : '<' === _r124_t1 ? r1_ASSOC_NEVER : '>' === _r124_t1 ? r1_ASSOC_NEVER : r1_ASSOC_LEFT)), {
            'priority': r124_priority,
            'associvity': r124_associvity
        };
    }, r1_opSegToRegular = function _r1_t19(r125_items, r125_env) {
        var r125_operator, r125_operand, r125_nbp, r125_assoc, r125_node, r125_n, _r125_t0, r125_uber = [
                '.OG',
                void 0,
                r125_items[0]
            ];
        r125_uber.bp = 65534;
        var r125_j = 1;
        for (; r125_j < r125_items.length;)
            if (r125_operator = r125_items[r125_j], r125_operand = r125_items[r125_j + 1], r125_j += 2, _r125_t0 = r1_getOperatorInfo(r125_operator, r125_env), r125_nbp = _r125_t0.priority, r125_assoc = _r125_t0.associvity, r125_nbp > 65534 && (r125_nbp = 65534), r125_node = [
                    r125_operator,
                    void 0,
                    r125_operand
                ], r125_node.bp = r125_nbp, r125_n = r125_uber, r125_assoc === r1_ASSOC_LEFT || r125_assoc === r1_ASSOC_NEVER) {
                for (; r125_n[2].bp > r125_nbp;)
                    r125_n = r125_n[2];
                if (r125_assoc === r1_ASSOC_NEVER && r125_n[2].bp === r125_nbp)
                    throw new r1_FormInvalidError(r125_operand, 'Attempting to combine uncombinable operator ' + r125_operator + '.');
                r125_node[1] = r125_n[2], r125_n[2] = r125_node;
            } else if (r125_assoc === r1_ASSOC_RIGHT) {
                for (; r125_n[2].bp >= r125_nbp;)
                    r125_n = r125_n[2];
                r125_node[1] = r125_n[2], r125_n[2] = r125_node;
            } else
                throw new r1_FormInvalidError(r125_operand, 'Invalid associvity denotion \'' + r125_assoc + '\' for ' + r125_operator + '.');
        return r125_uber[2];
    }, r1_ex = r1_NodeTranslation(function _r1_t20(r126_form, r126_env) {
        var r126_any, r126_x, r126_callee, r126_args, r126_a, r126_j, r126_arg0, r126_args1, r126_t, r126_constQ, r126_items, r126_allKeysAreQuotes, r126_key, r126_value, r126_block, r126_param, r126_handler, r126_body, r126_params, r126_c, r126_e, _r126_t1, _r126_t27, _r126_t30, _r126_t34, _r126_t35, _r126_t0 = r126_form;
        if (Array.isArray(_r126_t0) && _r126_t0.length === 2 && '.preserve' === _r126_t0[0])
            return r126_x = _r126_t0[1], r126_x;
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.quote' === _r126_t0[0])
            return r126_x = _r126_t0.slice(1), ['.quote'].concat(r126_x);
        else if (Array.isArray(_r126_t0) && _r126_t0.length === 2 && '.quasiquote' === _r126_t0[0])
            return r126_x = _r126_t0[1], r1_ex(r1_deQuasiquote(r126_x, 0, r126_env), r126_env);
        else if (Array.isArray(_r126_t0) && _r126_t0.length === 2 && '.unquote' === _r126_t0[0])
            return r126_x = _r126_t0[1], r1_ex(r126_x, r126_env);
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.id' === _r126_t0[0])
            return r126_x = _r126_t0.slice(1), ['.id'].concat(r126_x);
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.t' === _r126_t0[0])
            return r126_x = _r126_t0.slice(1), ['.t'].concat(r126_x);
        else if (Array.isArray(_r126_t0) && _r126_t0.length === 3 && '.lambda' === _r126_t0[0] && Array.isArray(_r126_t0[1]) && _r126_t0[1].length >= 0)
            return r126_args = _r126_t0[1].slice(0), _r126_t0[1], r126_body = _r126_t0[2], function (r131_derived, r131_j) {
                for (r131_derived = new r1_Scope(r126_env), r131_j = 0; r131_j < r126_args.length; r131_j += 1)
                    r1_atom(r126_args[r131_j]) && (r131_derived.declare(r126_args[r131_j], !0), r126_args[r131_j] = r131_derived.use(r126_args[r131_j]));
                return _r126_t27 = [
                    '.lambda.scoped',
                    r126_args,
                    r1_ex(r126_body, r131_derived),
                    r131_derived
                ], _r126_t27;
            }();
        else if (Array.isArray(_r126_t0) && _r126_t0.length === 3 && '.syntactic-closure' === _r126_t0[0])
            return r126_c = _r126_t0[1], r126_e = _r126_t0[2], r1_ex(r126_c, r126_e);
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 3 && '.beta' === _r126_t0[0] && Array.isArray(_r126_t0[1]) && _r126_t0[1].length >= 0)
            return r126_args = _r126_t0[1].slice(0), _r126_t0[1], r126_body = _r126_t0[2], r126_params = _r126_t0.slice(3), function (r130_derived, r130_j) {
                for (r130_derived = new r1_Scope(r126_env), r130_j = 0; r130_j < r126_args.length; r130_j += 1)
                    r1_atom(r126_args[r130_j]) && (r130_derived.declare(r126_args[r130_j], !0), r126_args[r130_j] = r130_derived.use(r126_args[r130_j]));
                for (r130_j = 0; r130_j < r126_args.length; r130_j += 1)
                    r126_params[r130_j] = r1_ex(r126_params[r130_j], r126_env);
                return _r126_t30 = [
                    '.beta.scoped',
                    r126_args,
                    r1_ex(r126_body, r130_derived),
                    r130_derived
                ].concat(r126_params), _r126_t30;
            }();
        else if (Array.isArray(_r126_t0) && _r126_t0.length === 4 && '.try' === _r126_t0[0] && Array.isArray(_r126_t0[2]) && _r126_t0[2].length === 1)
            return r126_block = _r126_t0[1], r126_param = _r126_t0[2][0], _r126_t0[2], r126_handler = _r126_t0[3], r126_env.declare(r126_param), [
                '.try',
                r1_ex(r126_block, r126_env),
                [r126_env.use(r126_param)],
                r1_ex(r126_handler, r126_env)
            ];
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.xhash' === _r126_t0[0]) {
            for (r126_args = _r126_t0.slice(1), r126_a = [], r126_allKeysAreQuotes = !0, r126_j = 1; r126_j < r126_form.length; r126_j += 1)
                r126_key = r1_ex(r126_form[r126_j][0], r126_env), r126_value = r1_ex(r126_form[r126_j][1], r126_env), _r126_t1 = r126_key, Array.isArray(_r126_t1) && _r126_t1.length === 2 && '.quote' === _r126_t1[0] ? r126_x = _r126_t1[1] : r126_allKeysAreQuotes = !1, r126_a.push([
                    r126_key,
                    r126_value
                ]);
            return r126_allKeysAreQuotes ? ['.hash'].concat(r126_a.map(function _r126_t33(r127_pair) {
                return [
                    r127_pair[0][1],
                    r127_pair[1]
                ];
            })) : (_r126_t34 = r126_env.newt(), function (_r126_leti2, _r128_t0, r128_t) {
                return r128_t = _r126_leti2, _r126_t35 = [
                    '.begin',
                    [
                        '.set',
                        r128_t,
                        ['.hash']
                    ]
                ].concat(r126_a.map(function _r128_t0(r129_pair) {
                    return [
                        '.set',
                        [
                            '.',
                            r128_t,
                            r129_pair[0]
                        ],
                        r129_pair[1]
                    ];
                }).concat([r128_t]));
            }(_r126_t34));
        } else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.hash' === _r126_t0[0]) {
            for (r126_args = _r126_t0.slice(1), r126_a = [], r126_j = 1; r126_j < r126_form.length; r126_j += 1)
                r126_a.push([
                    r126_form[r126_j][0],
                    r1_ex(r126_form[r126_j][1], r126_env)
                ]);
            return ['.hash'].concat(r126_a);
        } else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.conslist' === _r126_t0[0])
            return r126_items = _r126_t0.slice(1), [
                [
                    '.',
                    r1_ex(['.list'].concat(r126_form.slice(1, -1)), r126_env),
                    [
                        '.quote',
                        'concat'
                    ]
                ],
                r1_ex(r126_form[r126_form.length - 1], r126_env)
            ];
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.operatorPiece' === _r126_t0[0])
            return r126_items = _r126_t0.slice(1), r1_ex(r1_opSegToRegular(r126_items, r126_env), r126_env);
        else if (Array.isArray(_r126_t0) && _r126_t0.length === 3 && '.local' === _r126_t0[0])
            return r126_x = _r126_t0[1], r126_constQ = _r126_t0[2], r126_env.declare(r126_x, r126_constQ ? 2 : 0), r126_env.use(r126_x);
        else if (Array.isArray(_r126_t0) && _r126_t0.length === 2 && '.local' === _r126_t0[0])
            return r126_x = _r126_t0[1], r126_env.declare(r126_x), r126_env.use(r126_x);
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 3 && '.revcall' === _r126_t0[0])
            return r126_callee = _r126_t0[1], r126_arg0 = _r126_t0[2], r126_args1 = _r126_t0.slice(3), r1_atom(r126_callee) && r126_env.macros.has(r126_callee) && r126_env.macros.get(r126_callee) instanceof Function ? r126_env.macros.get(r126_callee)(r126_form.slice(1), r126_env) : (r126_t = r126_env.newt(), [
                '.begin',
                [
                    '.set',
                    r126_t,
                    r1_ex(r126_arg0, r126_env)
                ],
                r1_ex([
                    r126_callee,
                    r126_t
                ].concat(r126_args1), r126_env)
            ]);
        else if (Array.isArray(_r126_t0) && _r126_t0.length >= 1) {
            if (r126_callee = _r126_t0[0], r126_args = _r126_t0.slice(1), r1_atom(r126_callee) && r126_env.macros.has(r126_callee) && r126_env.macros.get(r126_callee) instanceof Function)
                return r126_env.macros.get(r126_callee)(r126_form, r126_env);
            for (r1_prim(r126_callee) || (r126_callee = r1_ex(r126_callee, r126_env)), r126_a = [r126_callee], r126_j = 1; r126_j < r126_form.length; r126_j += 1)
                r126_a[r126_j] = r1_ex(r126_form[r126_j], r126_env);
            return r126_a;
        } else
            return r126_x = _r126_t0, r1_atom(r126_x) && r126_env.macros.has(r126_x) && r126_env.macros.get(r126_x).invokeAsAtom ? r126_env.macros.get(r126_x).invokeAsAtom(r126_env) : (r126_x = _r126_t0, r1_atom(r126_x) && r126_env.macros.has(r126_x) && !(r126_env.macros.get(r126_x) instanceof Function) ? r126_env.macros.get(r126_x) : (r126_x = _r126_t0, r1_atom(r126_x) && r126_env.macros.has(r126_x) ? (r126_env.options.warn && r126_env.options.warn(new r1_FormInvalidError(r1_findform(r126_form), 'You are using macro [' + r126_x + '] as an atom.')), r126_env.use(r126_x)) : (r126_x = _r126_t0, r1_prim(r126_x) ? r126_x : (r126_x = _r126_t0, r1_atom(r126_x) ? r126_env.use(r126_x) : (r126_any = _r126_t0, r126_any)))));
    }), r1_checkEvaluated = function _r1_t21(r132_form) {
        if (r132_form && r132_form instanceof Array && r132_form.length > 0) {
            if (r132_form.unevaluated)
                throw new r1_FormInvalidError(r132_form, 'Unevaluated subform');
            return r132_form.forEach(r1_checkEvaluated);
        } else
            return void 0;
    };
exports.pass = function _r1_t22(r133_form, r133_globalScope) {
    return r1_ex(r133_form, r133_globalScope);
}, exports.ex = r1_ex, exports.checkEvaluated = r1_checkEvaluated, exports.deQuasiquote = r1_deQuasiquote, exports.opSegToRegular = r1_opSegToRegular, exports.FormInvalidError = r1_FormInvalidError;
