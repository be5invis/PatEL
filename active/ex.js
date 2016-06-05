'use strict';
var _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_leti6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t12, _r1_t13, _r1_t14, _r1_tag15, _r1_t16, _r1_t17, _r1_t18, _r1_t19, _r1_t20, _r1_t21, _r1_t22, r1_Scope = require('patrisika').Scope, r1_atom = function _r1_t7(r118_x) {
        return typeof r118_x === 'string';
    }, r1_identifier = function _r1_t8(r119_x) {
        return r1_atom(r119_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r119_x);
    }, r1_prim = function _r1_t9(r120_x) {
        return r1_atom(r120_x) && !r1_identifier(r120_x);
    }, r1_trace = [], r1_findform = function _r1_t10(r121_form) {
        if (r121_form && r121_form.within && r121_form.begins >= 0 && r121_form.ends >= 0)
            return r121_form;
        var r121_j = r1_trace.length - 1;
        for (; r121_j >= 0; r121_j -= 1)
            if (r1_trace[r121_j] && r1_trace[r121_j].within && r1_trace[r121_j].begins >= 0 && r1_trace[r121_j].ends >= 0)
                return r1_trace[r121_j];
        return r121_form;
    }, _r1_t11 = require('patrisika').FormInvalidError, r1_FormInvalidError = function (_r1_leti6, _r122_t0, r122_raw) {
        return r122_raw = _r1_leti6, function _r122_t0(r123_form, r123_reason) {
            return new r122_raw(r1_findform(r123_form), r123_reason);
        };
    }(_r1_t11), r1_NodeTranslation = function _r1_t16(r124_fn) {
        return function _r124_t2(r125_form, r125_env) {
            var r125_found, r125_j, _r125_t0 = this, _r125_t1 = arguments;
            r1_trace.push(r125_form);
            var r125_res = r124_fn.apply(_r125_t0, _r125_t1);
            if (r125_env.options.trace && typeof r125_form === 'string' && r125_res[0] === '.id')
                for (r125_found = !1, r125_j = r1_trace.length - 1; r125_j >= 0 && !r125_found; r125_j -= 1)
                    r1_trace[r125_j] && r1_trace[r125_j].within && r1_trace[r125_j].begins >= 0 && r1_trace[r125_j].ends >= 0 && (r125_found = !0, r125_res.begins = r1_trace[r125_j].begins, r125_res.ends = r1_trace[r125_j].ends, r125_res.within = r1_trace[r125_j].within);
            else
                r125_form && r125_res && r125_form.begins >= 0 && (r125_res.begins = r125_form.begins), r125_form && r125_res && r125_form.ends >= 0 && (r125_res.ends = r125_form.ends), r125_form && r125_res && r125_form.within && (r125_res.within = r125_form.within);
            return r1_trace.pop(r125_form), r125_res;
        };
    }, r1_deQuasiquote = function _r1_t17(r126_form, r126_level, r126_env) {
        var r126_otherwise, r126_xs, r126_x, r126_commonParts, r126_items, r126_c, r126_decLevel, _r126_t1, _r126_t0 = r126_form;
        return Array.isArray(_r126_t0) && _r126_t0.length === 2 && '.unquote' === _r126_t0[0] ? (r126_c = _r126_t0[1], r126_level ? [
            '.list',
            [
                '.quote',
                '.unquote'
            ],
            r1_deQuasiquote(r126_c, r126_level - 1, r126_env)
        ] : r126_c) : Array.isArray(_r126_t0) && _r126_t0.length === 3 && '.unquote' === _r126_t0[0] && Array.isArray(_r126_t0[2]) && _r126_t0[2].length === 2 && '.quote' === _r126_t0[2][0] ? (r126_c = _r126_t0[1], r126_decLevel = _r126_t0[2][1], _r126_t0[2], r126_decLevel = Math.max(1, Math.floor(r126_decLevel)), r126_level - r126_decLevel < 0 ? r126_c : [
            '.list',
            [
                '.quote',
                '.unquote'
            ],
            r1_deQuasiquote(r126_c, r126_level - r126_decLevel, r126_env)
        ]) : Array.isArray(_r126_t0) && _r126_t0.length === 2 && '.quasiquote' === _r126_t0[0] ? (r126_c = _r126_t0[1], [
            '.list',
            [
                '.quote',
                '.quasiquote'
            ],
            r1_deQuasiquote(r126_c, r126_level + 1, r126_env)
        ]) : Array.isArray(_r126_t0) && _r126_t0.length >= 1 && '.operatorPiece' === _r126_t0[0] ? (r126_items = _r126_t0.slice(1), r1_deQuasiquote(r1_opSegToRegular(r126_items, r126_env), r126_level, r126_env)) : Array.isArray(_r126_t0) && _r126_t0.length >= 0 ? (r126_xs = _r126_t0.slice(0), _r126_t1 = r126_xs[r126_xs.length - 1], Array.isArray(_r126_t1) && _r126_t1.length === 2 && '.sliceunquote' === _r126_t1[0] ? (r126_x = _r126_t1[1], r126_commonParts = r126_xs.slice(0, -1).map(function _r126_t4(r128_c) {
            return r1_deQuasiquote(r128_c, r126_level, r126_env);
        }), r126_level ? ['.list'].concat(r126_commonParts, [[
                '.list',
                [
                    '.quote',
                    '.sliceunquote'
                ],
                r1_deQuasiquote(r126_x, r126_level - 1, r126_env)
            ]]) : ['.conslist'].concat(r126_commonParts, [r126_x])) : (r126_otherwise = _r126_t1, ['.list'].concat(r126_xs.map(function _r126_t5(r127_c) {
            return r1_deQuasiquote(r127_c, r126_level, r126_env);
        })))) : (r126_otherwise = _r126_t0, [
            '.quote',
            r126_otherwise
        ]);
    }, r1_ASSOC_LEFT = 'left', r1_ASSOC_NEVER = 'never', r1_ASSOC_RIGHT = 'right', r1_getOperatorInfo = function _r1_t18(r129__operator, r129_env) {
        var _r129_t0, _r129_t1, r129_operator = r129__operator;
        if (r129_env.operatorInfo.has(r129_operator))
            return r129_env.operatorInfo.get(r129_operator);
        for (; r129_operator[0] === '<' && r129_operator[r129_operator.length - 1] === '>';)
            r129_operator = r129_operator.slice(1, -1);
        var r129_priority = 1000, r129_associvity = r1_ASSOC_RIGHT;
        return r129_operator && r129_operator !== '=' && (_r129_t0 = r129_operator[0], r129_priority = '?' === _r129_t0 ? 100 : '^' === _r129_t0 ? 100 : '*' === _r129_t0 ? 200 : '/' === _r129_t0 ? 200 : '%' === _r129_t0 ? 200 : '+' === _r129_t0 ? 300 : '-' === _r129_t0 ? 300 : '=' === _r129_t0 ? 400 : '!' === _r129_t0 ? 400 : '<' === _r129_t0 ? 500 : '>' === _r129_t0 ? 500 : '&' === _r129_t0 ? 600 : '|' === _r129_t0 ? 700 : 1000, r129_associvity = r129_operator.length > 1 && r129_operator[r129_operator.length - 1] === '>' ? r1_ASSOC_RIGHT : (_r129_t1 = r129_operator[0], '!' === _r129_t1 ? r1_ASSOC_NEVER : '=' === _r129_t1 ? r1_ASSOC_NEVER : '<' === _r129_t1 ? r1_ASSOC_NEVER : '>' === _r129_t1 ? r1_ASSOC_NEVER : r1_ASSOC_LEFT)), {
            'priority': r129_priority,
            'associvity': r129_associvity
        };
    }, r1_opSegToRegular = function _r1_t19(r130_items, r130_env) {
        var r130_operator, r130_operand, r130_nbp, r130_assoc, r130_node, r130_n, _r130_t0, r130_uber = [
                '.OG',
                void 0,
                r130_items[0]
            ];
        r130_uber.bp = 65534;
        var r130_j = 1;
        for (; r130_j < r130_items.length;)
            if (r130_operator = r130_items[r130_j], r130_operand = r130_items[r130_j + 1], r130_j += 2, _r130_t0 = r1_getOperatorInfo(r130_operator, r130_env), r130_nbp = _r130_t0.priority, r130_assoc = _r130_t0.associvity, r130_nbp > 65534 && (r130_nbp = 65534), r130_node = [
                    r130_operator,
                    void 0,
                    r130_operand
                ], r130_node.bp = r130_nbp, r130_n = r130_uber, r130_assoc === r1_ASSOC_LEFT || r130_assoc === r1_ASSOC_NEVER) {
                for (; r130_n[2].bp > r130_nbp;)
                    r130_n = r130_n[2];
                if (r130_assoc === r1_ASSOC_NEVER && r130_n[2].bp === r130_nbp)
                    throw new r1_FormInvalidError(r130_operand, 'Attempting to combine uncombinable operator ' + r130_operator + '.');
                r130_node[1] = r130_n[2], r130_n[2] = r130_node;
            } else if (r130_assoc === r1_ASSOC_RIGHT) {
                for (; r130_n[2].bp >= r130_nbp;)
                    r130_n = r130_n[2];
                r130_node[1] = r130_n[2], r130_n[2] = r130_node;
            } else
                throw new r1_FormInvalidError(r130_operand, 'Invalid associvity denotion \'' + r130_assoc + '\' for ' + r130_operator + '.');
        return r130_uber[2];
    }, r1_ex = r1_NodeTranslation(function _r1_t20(r131_form, r131_env) {
        var r131_any, r131_x, r131_callee, r131_args, r131_a, r131_j, r131_arg0, r131_args1, r131_t, r131_constQ, r131_items, r131_allKeysAreQuotes, r131_key, r131_value, r131_block, r131_param, r131_handler, r131_body, r131_params, r131_c, r131_e, _r131_t1, _r131_t27, _r131_tag28, _r131_t30, _r131_tag31, _r131_t34, _r131_t0 = r131_form;
        if (Array.isArray(_r131_t0) && _r131_t0.length === 2 && '.preserve' === _r131_t0[0])
            return r131_x = _r131_t0[1], r131_x;
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1 && '.quote' === _r131_t0[0])
            return r131_x = _r131_t0.slice(1), ['.quote'].concat(r131_x);
        else if (Array.isArray(_r131_t0) && _r131_t0.length === 2 && '.quasiquote' === _r131_t0[0])
            return r131_x = _r131_t0[1], r1_ex(r1_deQuasiquote(r131_x, 0, r131_env), r131_env);
        else if (Array.isArray(_r131_t0) && _r131_t0.length === 2 && '.unquote' === _r131_t0[0])
            return r131_x = _r131_t0[1], r1_ex(r131_x, r131_env);
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1 && '.id' === _r131_t0[0])
            return r131_x = _r131_t0.slice(1), ['.id'].concat(r131_x);
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1 && '.t' === _r131_t0[0])
            return r131_x = _r131_t0.slice(1), ['.t'].concat(r131_x);
        else if (Array.isArray(_r131_t0) && _r131_t0.length === 3 && '.lambda' === _r131_t0[0] && Array.isArray(_r131_t0[1]) && _r131_t0[1].length >= 0)
            return r131_args = _r131_t0[1].slice(0), _r131_t0[1], r131_body = _r131_t0[2], _r131_tag28 = !1, function (r136_derived, r136_j) {
                for (r136_derived = new r1_Scope(r131_env), r136_j = 0; r136_j < r131_args.length; r136_j += 1)
                    r1_atom(r131_args[r136_j]) && (r136_derived.declare(r131_args[r136_j], !0), r131_args[r136_j] = r136_derived.use(r131_args[r136_j]));
                return _r131_tag28 = !0, _r131_t27 = [
                    '.lambda.scoped',
                    r131_args,
                    r1_ex(r131_body, r136_derived),
                    r136_derived
                ], _r131_t27;
            }(), _r131_tag28 ? _r131_t27 : _r131_t27;
        else if (Array.isArray(_r131_t0) && _r131_t0.length === 3 && '.syntactic-closure' === _r131_t0[0])
            return r131_c = _r131_t0[1], r131_e = _r131_t0[2], r1_ex(r131_c, r131_e);
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 3 && '.beta' === _r131_t0[0] && Array.isArray(_r131_t0[1]) && _r131_t0[1].length >= 0)
            return r131_args = _r131_t0[1].slice(0), _r131_t0[1], r131_body = _r131_t0[2], r131_params = _r131_t0.slice(3), _r131_tag31 = !1, function (r135_derived, r135_j) {
                for (r135_derived = new r1_Scope(r131_env), r135_j = 0; r135_j < r131_args.length; r135_j += 1)
                    r1_atom(r131_args[r135_j]) && (r135_derived.declare(r131_args[r135_j], !0), r131_args[r135_j] = r135_derived.use(r131_args[r135_j]));
                for (r135_j = 0; r135_j < r131_args.length; r135_j += 1)
                    r131_params[r135_j] = r1_ex(r131_params[r135_j], r131_env);
                return _r131_tag31 = !0, _r131_t30 = [
                    '.beta.scoped',
                    r131_args,
                    r1_ex(r131_body, r135_derived),
                    r135_derived
                ].concat(r131_params), _r131_t30;
            }(), _r131_tag31 ? _r131_t30 : _r131_t30;
        else if (Array.isArray(_r131_t0) && _r131_t0.length === 4 && '.try' === _r131_t0[0] && Array.isArray(_r131_t0[2]) && _r131_t0[2].length === 1)
            return r131_block = _r131_t0[1], r131_param = _r131_t0[2][0], _r131_t0[2], r131_handler = _r131_t0[3], r131_env.declare(r131_param), [
                '.try',
                r1_ex(r131_block, r131_env),
                [r131_env.use(r131_param)],
                r1_ex(r131_handler, r131_env)
            ];
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1 && '.xhash' === _r131_t0[0]) {
            for (r131_args = _r131_t0.slice(1), r131_a = [], r131_allKeysAreQuotes = !0, r131_j = 1; r131_j < r131_form.length; r131_j += 1)
                r131_key = r1_ex(r131_form[r131_j][0], r131_env), r131_value = r1_ex(r131_form[r131_j][1], r131_env), _r131_t1 = r131_key, Array.isArray(_r131_t1) && _r131_t1.length === 2 && '.quote' === _r131_t1[0] ? r131_x = _r131_t1[1] : r131_allKeysAreQuotes = !1, r131_a.push([
                    r131_key,
                    r131_value
                ]);
            return r131_allKeysAreQuotes ? ['.hash'].concat(r131_a.map(function _r131_t33(r132_pair) {
                return [
                    r132_pair[0][1],
                    r132_pair[1]
                ];
            })) : (_r131_t34 = r131_env.newt(), function (_r131_leti2, _r133_t0, r133_t) {
                return r133_t = _r131_leti2, [
                    '.begin',
                    [
                        '.set',
                        r133_t,
                        ['.hash']
                    ]
                ].concat(r131_a.map(function _r133_t0(r134_pair) {
                    return [
                        '.set',
                        [
                            '.',
                            r133_t,
                            r134_pair[0]
                        ],
                        r134_pair[1]
                    ];
                }).concat([r133_t]));
            }(_r131_t34));
        } else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1 && '.hash' === _r131_t0[0]) {
            for (r131_args = _r131_t0.slice(1), r131_a = [], r131_j = 1; r131_j < r131_form.length; r131_j += 1)
                r131_a.push([
                    r131_form[r131_j][0],
                    r1_ex(r131_form[r131_j][1], r131_env)
                ]);
            return ['.hash'].concat(r131_a);
        } else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1 && '.conslist' === _r131_t0[0])
            return r131_items = _r131_t0.slice(1), [
                [
                    '.',
                    r1_ex(['.list'].concat(r131_form.slice(1, -1)), r131_env),
                    [
                        '.quote',
                        'concat'
                    ]
                ],
                r1_ex(r131_form[r131_form.length - 1], r131_env)
            ];
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1 && '.operatorPiece' === _r131_t0[0])
            return r131_items = _r131_t0.slice(1), r1_ex(r1_opSegToRegular(r131_items, r131_env), r131_env);
        else if (Array.isArray(_r131_t0) && _r131_t0.length === 3 && '.local' === _r131_t0[0])
            return r131_x = _r131_t0[1], r131_constQ = _r131_t0[2], r131_env.declare(r131_x, r131_constQ ? 2 : 0), r131_env.use(r131_x);
        else if (Array.isArray(_r131_t0) && _r131_t0.length === 2 && '.local' === _r131_t0[0])
            return r131_x = _r131_t0[1], r131_env.declare(r131_x), r131_env.use(r131_x);
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 3 && '.revcall' === _r131_t0[0])
            return r131_callee = _r131_t0[1], r131_arg0 = _r131_t0[2], r131_args1 = _r131_t0.slice(3), r1_atom(r131_callee) && r131_env.macros.has(r131_callee) && r131_env.macros.get(r131_callee) instanceof Function ? r131_env.macros.get(r131_callee)(r131_form.slice(1), r131_env) : (r131_t = r131_env.newt(), [
                '.begin',
                [
                    '.set',
                    r131_t,
                    r1_ex(r131_arg0, r131_env)
                ],
                r1_ex([
                    r131_callee,
                    r131_t
                ].concat(r131_args1), r131_env)
            ]);
        else if (Array.isArray(_r131_t0) && _r131_t0.length >= 1) {
            if (r131_callee = _r131_t0[0], r131_args = _r131_t0.slice(1), r1_atom(r131_callee) && r131_env.macros.has(r131_callee) && r131_env.macros.get(r131_callee) instanceof Function)
                return r131_env.macros.get(r131_callee)(r131_form, r131_env);
            for (r1_prim(r131_callee) || (r131_callee = r1_ex(r131_callee, r131_env)), r131_a = [r131_callee], r131_j = 1; r131_j < r131_form.length; r131_j += 1)
                r131_a[r131_j] = r1_ex(r131_form[r131_j], r131_env);
            return r131_a;
        } else
            return r131_x = _r131_t0, r1_atom(r131_x) && r131_env.macros.has(r131_x) && r131_env.macros.get(r131_x).invokeAsAtom ? r131_env.macros.get(r131_x).invokeAsAtom(r131_env) : (r131_x = _r131_t0, r1_atom(r131_x) && r131_env.macros.has(r131_x) && !(r131_env.macros.get(r131_x) instanceof Function) ? r131_env.macros.get(r131_x) : (r131_x = _r131_t0, r1_atom(r131_x) && r131_env.macros.has(r131_x) ? (r131_env.options.warn && r131_env.options.warn(new r1_FormInvalidError(r1_findform(r131_form), 'You are using macro [' + r131_x + '] as an atom.')), r131_env.use(r131_x)) : (r131_x = _r131_t0, r1_prim(r131_x) ? r131_x : (r131_x = _r131_t0, r1_atom(r131_x) ? r131_env.use(r131_x) : (r131_any = _r131_t0, r131_any)))));
    }), r1_checkEvaluated = function _r1_t21(r137_form) {
        if (r137_form && r137_form instanceof Array && r137_form.length > 0) {
            if (r137_form.unevaluated)
                throw new r1_FormInvalidError(r137_form, 'Unevaluated subform');
            return r137_form.forEach(r1_checkEvaluated);
        } else
            return void 0;
    };
exports.pass = function _r1_t22(r138_form, r138_globalScope) {
    return r1_ex(r138_form, r138_globalScope);
}, exports.ex = r1_ex, exports.checkEvaluated = r1_checkEvaluated, exports.deQuasiquote = r1_deQuasiquote, exports.opSegToRegular = r1_opSegToRegular, exports.FormInvalidError = r1_FormInvalidError;
