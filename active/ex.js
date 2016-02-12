var r1_Scope, r1_atom, r1_identifier, r1_prim, r1_FormInvalidError, r1_trace, r1_NodeTranslation, r1_deQuasiquote, r1_ASSOC_LEFT, r1_ASSOC_NEVER, r1_ASSOC_RIGHT, r1_getOperatorInfo, r1_opSegToRegular, r1_ex, r1_checkEvaluated, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9;
r1_Scope = require('patrisika').Scope, r1_atom = function _r1_t0(r113_x) {
    var r113_x;
    return typeof r113_x === 'string';
}, r1_identifier = function _r1_t1(r114_x) {
    var r114_x;
    return r1_atom(r114_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r114_x);
}, r1_prim = function _r1_t2(r115_x) {
    var r115_x;
    return r1_atom(r115_x) && !r1_identifier(r115_x);
}, r1_FormInvalidError = require('patrisika').FormInvalidError, r1_trace = [], r1_NodeTranslation = function _r1_t3(r116_fn) {
    var r116_fn;
    return function _r116_t2(r117_form, r117_env) {
        var r117_form, r117_env, r117_res, r117_found, r117_j, _r117_t0, _r117_t1;
        if (_r117_t0 = this, _r117_t1 = arguments, r1_trace.push(r117_form), r117_res = r116_fn.apply(_r117_t0, _r117_t1), r117_env.options.trace && typeof r117_form === 'string' && r117_res[0] === '.id')
            for (r117_found = !1, r117_j = r1_trace.length - 1; r117_j >= 0 && !r117_found; r117_j -= 1)
                r1_trace[r117_j] && r1_trace[r117_j].within && r1_trace[r117_j].begins >= 0 && r1_trace[r117_j].ends >= 0 && (r117_found = !0, r117_res.begins = r1_trace[r117_j].begins, r117_res.ends = r1_trace[r117_j].ends, r117_res.within = r1_trace[r117_j].within);
        else
            r117_form && r117_res && r117_form.begins >= 0 && (r117_res.begins = r117_form.begins), r117_form && r117_res && r117_form.ends >= 0 && (r117_res.ends = r117_form.ends), r117_form && r117_res && r117_form.within && (r117_res.within = r117_form.within);
        return r1_trace.pop(r117_form), r117_res;
    };
}, r1_deQuasiquote = function _r1_t4(r118_form, r118_level, r118_env) {
    var r118_form, r118_level, r118_env, r118_otherwise, r118_xs, r118_x, r118_commonParts, r118_items, r118_c, r118_decLevel, _r118_t0, _r118_t1;
    return _r118_t0 = r118_form, Array.isArray(_r118_t0) && _r118_t0.length === 2 && '.unquote' === _r118_t0[0] ? (r118_c = _r118_t0[1], r118_level ? [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r118_c, r118_level - 1, r118_env)
    ] : r118_c) : Array.isArray(_r118_t0) && _r118_t0.length === 3 && '.unquote' === _r118_t0[0] && Array.isArray(_r118_t0[2]) && _r118_t0[2].length === 2 && '.quote' === _r118_t0[2][0] ? (r118_c = _r118_t0[1], r118_decLevel = _r118_t0[2][1], _r118_t0[2], r118_decLevel = Math.max(1, Math.floor(r118_decLevel)), r118_level - r118_decLevel < 0 ? r118_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r118_c, r118_level - r118_decLevel, r118_env)
    ]) : Array.isArray(_r118_t0) && _r118_t0.length === 2 && '.quasiquote' === _r118_t0[0] ? (r118_c = _r118_t0[1], [
        '.list',
        [
            '.quote',
            '.quasiquote'
        ],
        r1_deQuasiquote(r118_c, r118_level + 1, r118_env)
    ]) : Array.isArray(_r118_t0) && _r118_t0.length >= 1 && '.operatorPiece' === _r118_t0[0] ? (r118_items = _r118_t0.slice(1), r1_deQuasiquote(r1_opSegToRegular(r118_items, r118_env), r118_level, r118_env)) : Array.isArray(_r118_t0) && _r118_t0.length >= 0 ? (r118_xs = _r118_t0.slice(0), _r118_t1 = r118_xs[r118_xs.length - 1], Array.isArray(_r118_t1) && _r118_t1.length === 2 && '.sliceunquote' === _r118_t1[0] ? (r118_x = _r118_t1[1], r118_commonParts = r118_xs.slice(0, -1).map(function _r118_t4(r120_c) {
        var r120_c;
        return r1_deQuasiquote(r120_c, r118_level, r118_env);
    }), r118_level ? ['.list'].concat(r118_commonParts, [[
            '.list',
            [
                '.quote',
                '.sliceunquote'
            ],
            r1_deQuasiquote(r118_x, r118_level - 1, r118_env)
        ]]) : ['.conslist'].concat(r118_commonParts, [r118_x])) : (r118_otherwise = _r118_t1, ['.list'].concat(r118_xs.map(function _r118_t5(r119_c) {
        var r119_c;
        return r1_deQuasiquote(r119_c, r118_level, r118_env);
    })))) : (r118_otherwise = _r118_t0, [
        '.quote',
        r118_otherwise
    ]);
}, r1_ASSOC_LEFT = 'left', r1_ASSOC_NEVER = 'never', r1_ASSOC_RIGHT = 'right', r1_getOperatorInfo = function _r1_t5(r121_operator, r121_env) {
    var r121_operator, r121_env, r121_priority, r121_associvity, _r121_t0, _r121_t1;
    if (r121_env.operatorInfo.has(r121_operator))
        return r121_env.operatorInfo.get(r121_operator);
    for (; r121_operator[0] === '<' && r121_operator[r121_operator.length - 1] === '>';)
        r121_operator = r121_operator.slice(1, -1);
    return r121_priority = 1000, r121_associvity = r1_ASSOC_RIGHT, r121_operator && r121_operator !== '=' && (_r121_t0 = r121_operator[0], r121_priority = '?' === _r121_t0 ? 100 : '^' === _r121_t0 ? 100 : '*' === _r121_t0 ? 200 : '/' === _r121_t0 ? 200 : '%' === _r121_t0 ? 200 : '+' === _r121_t0 ? 300 : '-' === _r121_t0 ? 300 : '=' === _r121_t0 ? 400 : '!' === _r121_t0 ? 400 : '<' === _r121_t0 ? 500 : '>' === _r121_t0 ? 500 : '&' === _r121_t0 ? 600 : '|' === _r121_t0 ? 700 : 1000, r121_associvity = r121_operator.length > 1 && r121_operator[r121_operator.length - 1] === '>' ? r1_ASSOC_RIGHT : (_r121_t1 = r121_operator[0], '!' === _r121_t1 ? r1_ASSOC_NEVER : '=' === _r121_t1 ? r1_ASSOC_NEVER : '<' === _r121_t1 ? r1_ASSOC_NEVER : '>' === _r121_t1 ? r1_ASSOC_NEVER : r1_ASSOC_LEFT)), {
        'priority': r121_priority,
        'associvity': r121_associvity
    };
}, r1_opSegToRegular = function _r1_t6(r122_items, r122_env) {
    var r122_items, r122_env, r122_uber, r122_j, r122_operator, r122_operand, r122_nbp, r122_assoc, r122_node, r122_n, _r122_t0;
    for (r122_uber = [
            '.OG',
            void 0,
            r122_items[0]
        ], r122_uber.bp = 65534, r122_j = 1; r122_j < r122_items.length;)
        if (r122_operator = r122_items[r122_j], r122_operand = r122_items[r122_j + 1], r122_j += 2, _r122_t0 = r1_getOperatorInfo(r122_operator, r122_env), r122_nbp = _r122_t0.priority, r122_assoc = _r122_t0.associvity, r122_nbp > 65534 && (r122_nbp = 65534), r122_node = [
                r122_operator,
                void 0,
                r122_operand
            ], r122_node.bp = r122_nbp, r122_n = r122_uber, r122_assoc === r1_ASSOC_LEFT || r122_assoc === r1_ASSOC_NEVER) {
            for (; r122_n[2].bp > r122_nbp;)
                r122_n = r122_n[2];
            if (r122_assoc === r1_ASSOC_NEVER && r122_n[2].bp === r122_nbp)
                throw new r1_FormInvalidError(r122_operand, 'Attempting to combine uncombinable operator ' + r122_operator + '.');
            r122_node[1] = r122_n[2], r122_n[2] = r122_node;
        } else if (r122_assoc === r1_ASSOC_RIGHT) {
            for (; r122_n[2].bp >= r122_nbp;)
                r122_n = r122_n[2];
            r122_node[1] = r122_n[2], r122_n[2] = r122_node;
        } else
            throw new r1_FormInvalidError(r122_operand, 'Invalid associvity denotion \'' + r122_assoc + '\' for ' + r122_operator + '.');
    return r122_uber[2];
}, r1_ex = r1_NodeTranslation(function _r1_t7(r123_form, r123_env) {
    var r123_form, r123_env, r123_any, r123_x, r123_callee, r123_args, r123_a, r123_j, r123_arg0, r123_args1, r123_t, r123_items, r123_allKeysAreQuotes, r123_key, r123_value, r123_block, r123_param, r123_handler, r123_body, r123_params, r123_derived, r123_c, r123_e, _r123_t0, _r123_t1, _r123_t28;
    if (_r123_t0 = r123_form, Array.isArray(_r123_t0) && _r123_t0.length === 2 && '.preserve' === _r123_t0[0])
        return r123_x = _r123_t0[1], r123_x;
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.quote' === _r123_t0[0])
        return r123_x = _r123_t0.slice(1), ['.quote'].concat(r123_x);
    else if (Array.isArray(_r123_t0) && _r123_t0.length === 2 && '.quasiquote' === _r123_t0[0])
        return r123_x = _r123_t0[1], r1_ex(r1_deQuasiquote(r123_x, 0, r123_env), r123_env);
    else if (Array.isArray(_r123_t0) && _r123_t0.length === 2 && '.unquote' === _r123_t0[0])
        return r123_x = _r123_t0[1], r1_ex(r123_x, r123_env);
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.id' === _r123_t0[0])
        return r123_x = _r123_t0.slice(1), ['.id'].concat(r123_x);
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.t' === _r123_t0[0])
        return r123_x = _r123_t0.slice(1), ['.t'].concat(r123_x);
    else if (Array.isArray(_r123_t0) && _r123_t0.length === 3 && '.lambda' === _r123_t0[0] && Array.isArray(_r123_t0[1]) && _r123_t0[1].length >= 0) {
        for (r123_args = _r123_t0[1].slice(0), _r123_t0[1], r123_body = _r123_t0[2], r123_derived = new r1_Scope(r123_env), r123_j = 0; r123_j < r123_args.length; r123_j += 1)
            r123_derived.declare(r123_args[r123_j], !0), r123_args[r123_j] = r123_derived.use(r123_args[r123_j]);
        return [
            '.lambda.scoped',
            r123_args,
            r1_ex(r123_body, r123_derived),
            r123_derived
        ];
    } else if (Array.isArray(_r123_t0) && _r123_t0.length === 3 && '.syntactic-closure' === _r123_t0[0])
        return r123_c = _r123_t0[1], r123_e = _r123_t0[2], r1_ex(r123_c, r123_e);
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 3 && '.beta' === _r123_t0[0] && Array.isArray(_r123_t0[1]) && _r123_t0[1].length >= 0) {
        for (r123_args = _r123_t0[1].slice(0), _r123_t0[1], r123_body = _r123_t0[2], r123_params = _r123_t0.slice(3), r123_derived = new r1_Scope(r123_env), r123_j = 0; r123_j < r123_args.length; r123_j += 1)
            r123_derived.declare(r123_args[r123_j], !0), r123_args[r123_j] = r123_derived.use(r123_args[r123_j]);
        for (r123_j = 0; r123_j < r123_args.length; r123_j += 1)
            r123_params[r123_j] = r1_ex(r123_params[r123_j], r123_env);
        return [
            '.beta.scoped',
            r123_args,
            r1_ex(r123_body, r123_derived),
            r123_derived
        ].concat(r123_params);
    } else if (Array.isArray(_r123_t0) && _r123_t0.length === 4 && '.try' === _r123_t0[0] && Array.isArray(_r123_t0[2]) && _r123_t0[2].length === 1)
        return r123_block = _r123_t0[1], r123_param = _r123_t0[2][0], _r123_t0[2], r123_handler = _r123_t0[3], r123_env.declare(r123_param), [
            '.try',
            r1_ex(r123_block, r123_env),
            [r123_env.use(r123_param)],
            r1_ex(r123_handler, r123_env)
        ];
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.xhash' === _r123_t0[0]) {
        for (r123_args = _r123_t0.slice(1), r123_a = [], r123_allKeysAreQuotes = !0, r123_j = 1; r123_j < r123_form.length; r123_j += 1)
            r123_key = r1_ex(r123_form[r123_j][0], r123_env), r123_value = r1_ex(r123_form[r123_j][1], r123_env), _r123_t1 = r123_key, Array.isArray(_r123_t1) && _r123_t1.length === 2 && '.quote' === _r123_t1[0] ? r123_x = _r123_t1[1] : r123_allKeysAreQuotes = !1, r123_a.push([
                r123_key,
                r123_value
            ]);
        return r123_allKeysAreQuotes ? ['.hash'].concat(r123_a.map(function _r123_t27(r124_pair) {
            var r124_pair;
            return [
                r124_pair[0][1],
                r124_pair[1]
            ];
        })) : (_r123_t28 = r123_env.newt(), function (r125_t, _r125_t0) {
            return [
                '.begin',
                [
                    '.set',
                    r125_t,
                    ['.hash']
                ]
            ].concat(r123_a.map(function _r125_t0(r126_pair) {
                var r126_pair;
                return [
                    '.set',
                    [
                        '.',
                        r125_t,
                        r126_pair[0]
                    ],
                    r126_pair[1]
                ];
            }).concat([r125_t]));
        }(_r123_t28));
    } else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.hash' === _r123_t0[0]) {
        for (r123_args = _r123_t0.slice(1), r123_a = [], r123_j = 1; r123_j < r123_form.length; r123_j += 1)
            r123_a.push([
                r123_form[r123_j][0],
                r1_ex(r123_form[r123_j][1], r123_env)
            ]);
        return ['.hash'].concat(r123_a);
    } else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.conslist' === _r123_t0[0])
        return r123_items = _r123_t0.slice(1), [
            [
                '.',
                r1_ex(['.list'].concat(r123_form.slice(1, -1)), r123_env),
                [
                    '.quote',
                    'concat'
                ]
            ],
            r1_ex(r123_form[r123_form.length - 1], r123_env)
        ];
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1 && '.operatorPiece' === _r123_t0[0])
        return r123_items = _r123_t0.slice(1), r1_ex(r1_opSegToRegular(r123_items, r123_env), r123_env);
    else if (Array.isArray(_r123_t0) && _r123_t0.length === 2 && '.local' === _r123_t0[0])
        return r123_x = _r123_t0[1], r123_env.declare(r123_x), r123_env.use(r123_x);
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 3 && '.revcall' === _r123_t0[0])
        return r123_callee = _r123_t0[1], r123_arg0 = _r123_t0[2], r123_args1 = _r123_t0.slice(3), r1_atom(r123_callee) && r123_env.macros.has(r123_callee) && r123_env.macros.get(r123_callee) instanceof Function ? r123_env.macros.get(r123_callee)(r123_form.slice(1), r123_env) : (r123_t = r123_env.newt(), [
            '.begin',
            [
                '.set',
                r123_t,
                r1_ex(r123_arg0, r123_env)
            ],
            r1_ex([
                r123_callee,
                r123_t
            ].concat(r123_args1), r123_env)
        ]);
    else if (Array.isArray(_r123_t0) && _r123_t0.length >= 1) {
        if (r123_callee = _r123_t0[0], r123_args = _r123_t0.slice(1), r1_atom(r123_callee) && r123_env.macros.has(r123_callee) && r123_env.macros.get(r123_callee) instanceof Function)
            return r123_env.macros.get(r123_callee)(r123_form, r123_env);
        for (r1_prim(r123_callee) || (r123_callee = r1_ex(r123_callee, r123_env)), r123_a = [r123_callee], r123_j = 1; r123_j < r123_form.length; r123_j += 1)
            r123_a[r123_j] = r1_ex(r123_form[r123_j], r123_env);
        return r123_a;
    } else
        return r123_x = _r123_t0, r1_atom(r123_x) && r123_env.macros.has(r123_x) && r123_env.macros.get(r123_x).invokeAsAtom ? r123_env.macros.get(r123_x).invokeAsAtom(r123_env) : (r123_x = _r123_t0, r1_atom(r123_x) && r123_env.macros.has(r123_x) && !(r123_env.macros.get(r123_x) instanceof Function) ? r123_env.macros.get(r123_x) : (r123_x = _r123_t0, r1_atom(r123_x) && r123_env.macros.has(r123_x) ? (r123_env.options.warn && r123_env.options.warn(new r1_FormInvalidError(r123_form, 'Attempt to use macro ' + r123_x + ' as an atom')), r123_env.use(r123_x)) : (r123_x = _r123_t0, r1_prim(r123_x) ? r123_x : (r123_x = _r123_t0, r1_atom(r123_x) ? r123_env.use(r123_x) : (r123_any = _r123_t0, r123_any)))));
}), r1_checkEvaluated = function _r1_t8(r127_form) {
    var r127_form;
    if (r127_form && r127_form instanceof Array && r127_form.length > 0) {
        if (r127_form.unevaluated)
            throw new r1_FormInvalidError(r127_form, 'Unevaluated subform');
        return r127_form.forEach(r1_checkEvaluated);
    } else
        return void 0;
}, exports.pass = function _r1_t9(r128_form, r128_globalScope) {
    var r128_form, r128_globalScope;
    return r1_ex(r128_form, r128_globalScope);
}, exports.ex = r1_ex, exports.checkEvaluated = r1_checkEvaluated, exports.deQuasiquote = r1_deQuasiquote, exports.opSegToRegular = r1_opSegToRegular;
