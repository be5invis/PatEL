var r1_Scope, r1_atom, r1_identifier, r1_prim, r1_FormInvalidError, r1_NodeTranslation, r1_deQuasiquote, r1_ASSOC_LEFT, r1_ASSOC_NEVER, r1_ASSOC_RIGHT, r1_getOperatorInfo, r1_opSegToRegular, r1_ex, r1_checkEvaluated, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9;
r1_Scope = require('patrisika').Scope, r1_atom = function _r1_t0(r71_x) {
    var r71_x;
    return typeof r71_x === 'string';
}, r1_identifier = function _r1_t1(r72_x) {
    var r72_x;
    return r1_atom(r72_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r72_x);
}, r1_prim = function _r1_t2(r73_x) {
    var r73_x;
    return r1_atom(r73_x) && !r1_identifier(r73_x);
}, r1_FormInvalidError = require('patrisika').FormInvalidError, r1_NodeTranslation = function _r1_t3(r74_fn) {
    var r74_fn;
    return function _r74_t2(r75_form) {
        var r75_form, r75_res, _r75_t0, _r75_t1;
        return _r75_t0 = this, _r75_t1 = arguments, r75_res = r74_fn.apply(_r75_t0, _r75_t1), r75_form && r75_res && r75_form.begins >= 0 && (r75_res.begins = r75_form.begins), r75_form && r75_res && r75_form.ends >= 0 && (r75_res.ends = r75_form.ends), r75_form && r75_res && r75_form.within && (r75_res.within = r75_form.within), r75_res;
    };
}, r1_deQuasiquote = function _r1_t4(r76_form, r76_level, r76_env) {
    var r76_form, r76_level, r76_env, r76_otherwise, r76_xs, r76_x, r76_commonParts, r76_items, r76_c, r76_decLevel, _r76_t0, _r76_t1;
    return _r76_t0 = r76_form, Array.isArray(_r76_t0) && _r76_t0.length === 2 && '.unquote' === _r76_t0[0] ? (r76_c = _r76_t0[1], r76_level ? [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r76_c, r76_level - 1, r76_env)
    ] : r76_c) : Array.isArray(_r76_t0) && _r76_t0.length === 3 && '.unquote' === _r76_t0[0] && Array.isArray(_r76_t0[2]) && _r76_t0[2].length === 2 && '.quote' === _r76_t0[2][0] ? (r76_c = _r76_t0[1], r76_decLevel = _r76_t0[2][1], _r76_t0[2], r76_decLevel = Math.max(1, Math.floor(r76_decLevel)), r76_level - r76_decLevel < 0 ? r76_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r76_c, r76_level - r76_decLevel, r76_env)
    ]) : Array.isArray(_r76_t0) && _r76_t0.length === 2 && '.quasiquote' === _r76_t0[0] ? (r76_c = _r76_t0[1], [
        '.list',
        [
            '.quote',
            '.quasiquote'
        ],
        r1_deQuasiquote(r76_c, r76_level + 1, r76_env)
    ]) : Array.isArray(_r76_t0) && _r76_t0.length >= 1 && '.operatorPiece' === _r76_t0[0] ? (r76_items = _r76_t0.slice(1), r1_deQuasiquote(r1_opSegToRegular(r76_items, r76_env), r76_level, r76_env)) : Array.isArray(_r76_t0) && _r76_t0.length >= 0 ? (r76_xs = _r76_t0.slice(0), _r76_t1 = r76_xs[r76_xs.length - 1], Array.isArray(_r76_t1) && _r76_t1.length === 2 && '.sliceunquote' === _r76_t1[0] ? (r76_x = _r76_t1[1], r76_commonParts = r76_xs.slice(0, -1).map(function _r76_t4(r78_c) {
        var r78_c;
        return r1_deQuasiquote(r78_c, r76_level, r76_env);
    }), r76_level ? ['.list'].concat(r76_commonParts, [[
            '.list',
            [
                '.quote',
                '.sliceunquote'
            ],
            r1_deQuasiquote(r76_x, r76_level - 1, r76_env)
        ]]) : ['.conslist'].concat(r76_commonParts, [r76_x])) : (r76_otherwise = _r76_t1, ['.list'].concat(r76_xs.map(function _r76_t5(r77_c) {
        var r77_c;
        return r1_deQuasiquote(r77_c, r76_level, r76_env);
    })))) : (r76_otherwise = _r76_t0, [
        '.quote',
        r76_otherwise
    ]);
}, r1_ASSOC_LEFT = 'left', r1_ASSOC_NEVER = 'never', r1_ASSOC_RIGHT = 'right', r1_getOperatorInfo = function _r1_t5(r79_operator, r79_env) {
    var r79_operator, r79_env, r79_priority, r79_associvity, _r79_t0, _r79_t1;
    if (r79_env.operatorInfo.has(r79_operator))
        return r79_env.operatorInfo.get(r79_operator);
    for (; r79_operator[0] === '<' && r79_operator[r79_operator.length - 1] === '>';)
        r79_operator = r79_operator.slice(1, -1);
    return r79_priority = 1000, r79_associvity = r1_ASSOC_RIGHT, r79_operator && r79_operator !== '=' && (_r79_t0 = r79_operator[0], r79_priority = '?' === _r79_t0 ? 100 : '^' === _r79_t0 ? 100 : '*' === _r79_t0 ? 200 : '/' === _r79_t0 ? 200 : '%' === _r79_t0 ? 200 : '+' === _r79_t0 ? 300 : '-' === _r79_t0 ? 300 : '=' === _r79_t0 ? 400 : '!' === _r79_t0 ? 400 : '<' === _r79_t0 ? 500 : '>' === _r79_t0 ? 500 : '&' === _r79_t0 ? 600 : '|' === _r79_t0 ? 700 : 1000, r79_associvity = r79_operator.length > 1 && r79_operator[r79_operator.length - 1] === '>' ? r1_ASSOC_RIGHT : (_r79_t1 = r79_operator[0], '!' === _r79_t1 ? r1_ASSOC_NEVER : '=' === _r79_t1 ? r1_ASSOC_NEVER : '<' === _r79_t1 ? r1_ASSOC_NEVER : '>' === _r79_t1 ? r1_ASSOC_NEVER : r1_ASSOC_LEFT)), {
        'priority': r79_priority,
        'associvity': r79_associvity
    };
}, r1_opSegToRegular = function _r1_t6(r80_items, r80_env) {
    var r80_items, r80_env, r80_uber, r80_j, r80_operator, r80_operand, r80_nbp, r80_assoc, r80_node, r80_n, _r80_t0;
    for (r80_uber = [
            '.OG',
            void 0,
            r80_items[0]
        ], r80_uber.bp = 65534, r80_j = 1; r80_j < r80_items.length;)
        if (r80_operator = r80_items[r80_j], r80_operand = r80_items[r80_j + 1], r80_j += 2, _r80_t0 = r1_getOperatorInfo(r80_operator, r80_env), r80_nbp = _r80_t0.priority, r80_assoc = _r80_t0.associvity, r80_nbp > 65534 && (r80_nbp = 65534), r80_node = [
                r80_operator,
                void 0,
                r80_operand
            ], r80_node.bp = r80_nbp, r80_n = r80_uber, r80_assoc === r1_ASSOC_LEFT || r80_assoc === r1_ASSOC_NEVER) {
            for (; r80_n[2].bp > r80_nbp;)
                r80_n = r80_n[2];
            if (r80_assoc === r1_ASSOC_NEVER && r80_n[2].bp === r80_nbp)
                throw new r1_FormInvalidError(r80_operand, 'Attempting to combine uncombinable operator ' + r80_operator + '.');
            r80_node[1] = r80_n[2], r80_n[2] = r80_node;
        } else if (r80_assoc === r1_ASSOC_RIGHT) {
            for (; r80_n[2].bp >= r80_nbp;)
                r80_n = r80_n[2];
            r80_node[1] = r80_n[2], r80_n[2] = r80_node;
        } else
            throw new r1_FormInvalidError(r80_operand, 'Invalid associvity denotion \'' + r80_assoc + '\' for ' + r80_operator + '.');
    return r80_uber[2];
}, r1_ex = r1_NodeTranslation(function _r1_t7(r81_form, r81_env) {
    var r81_form, r81_env, r81_any, r81_x, r81_callee, r81_args, r81_a, r81_j, r81_arg0, r81_args1, r81_t, r81_items, r81_allKeysAreQuotes, r81_key, r81_value, r81_block, r81_param, r81_handler, r81_body, r81_params, r81_derived, r81_c, r81_e, _r81_t0, _r81_t1, _r81_t27;
    if (_r81_t0 = r81_form, Array.isArray(_r81_t0) && _r81_t0.length === 2 && '.preserve' === _r81_t0[0])
        return r81_x = _r81_t0[1], r81_x;
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.quote' === _r81_t0[0])
        return r81_x = _r81_t0.slice(1), ['.quote'].concat(r81_x);
    else if (Array.isArray(_r81_t0) && _r81_t0.length === 2 && '.quasiquote' === _r81_t0[0])
        return r81_x = _r81_t0[1], r1_ex(r1_deQuasiquote(r81_x, 0, r81_env), r81_env);
    else if (Array.isArray(_r81_t0) && _r81_t0.length === 2 && '.unquote' === _r81_t0[0])
        return r81_x = _r81_t0[1], r1_ex(r81_x, r81_env);
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.id' === _r81_t0[0])
        return r81_x = _r81_t0.slice(1), ['.id'].concat(r81_x);
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.t' === _r81_t0[0])
        return r81_x = _r81_t0.slice(1), ['.t'].concat(r81_x);
    else if (Array.isArray(_r81_t0) && _r81_t0.length === 3 && '.lambda' === _r81_t0[0] && Array.isArray(_r81_t0[1]) && _r81_t0[1].length >= 0) {
        for (r81_args = _r81_t0[1].slice(0), _r81_t0[1], r81_body = _r81_t0[2], r81_derived = new r1_Scope(r81_env), r81_j = 0; r81_j < r81_args.length; r81_j += 1)
            r81_derived.declare(r81_args[r81_j], !0), r81_args[r81_j] = r81_derived.use(r81_args[r81_j]);
        return [
            '.lambda.scoped',
            r81_args,
            r1_ex(r81_body, r81_derived),
            r81_derived
        ];
    } else if (Array.isArray(_r81_t0) && _r81_t0.length === 3 && '.syntactic-closure' === _r81_t0[0])
        return r81_c = _r81_t0[1], r81_e = _r81_t0[2], r1_ex(r81_c, r81_e);
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 3 && '.beta' === _r81_t0[0] && Array.isArray(_r81_t0[1]) && _r81_t0[1].length >= 0) {
        for (r81_args = _r81_t0[1].slice(0), _r81_t0[1], r81_body = _r81_t0[2], r81_params = _r81_t0.slice(3), r81_derived = new r1_Scope(r81_env), r81_j = 0; r81_j < r81_args.length; r81_j += 1)
            r81_derived.declare(r81_args[r81_j], !0), r81_args[r81_j] = r81_derived.use(r81_args[r81_j]);
        for (r81_j = 0; r81_j < r81_args.length; r81_j += 1)
            r81_params[r81_j] = r1_ex(r81_params[r81_j], r81_env);
        return [
            '.beta.scoped',
            r81_args,
            r1_ex(r81_body, r81_derived),
            r81_derived
        ].concat(r81_params);
    } else if (Array.isArray(_r81_t0) && _r81_t0.length === 4 && '.try' === _r81_t0[0] && Array.isArray(_r81_t0[2]) && _r81_t0[2].length === 1)
        return r81_block = _r81_t0[1], r81_param = _r81_t0[2][0], _r81_t0[2], r81_handler = _r81_t0[3], r81_env.declare(r81_param), [
            '.try',
            r1_ex(r81_block, r81_env),
            [r81_env.use(r81_param)],
            r1_ex(r81_handler, r81_env)
        ];
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.xhash' === _r81_t0[0]) {
        for (r81_args = _r81_t0.slice(1), r81_a = [], r81_allKeysAreQuotes = !0, r81_j = 1; r81_j < r81_form.length; r81_j += 1)
            r81_key = r1_ex(r81_form[r81_j][0], r81_env), r81_value = r1_ex(r81_form[r81_j][1], r81_env), _r81_t1 = r81_key, Array.isArray(_r81_t1) && _r81_t1.length === 2 && '.quote' === _r81_t1[0] ? r81_x = _r81_t1[1] : r81_allKeysAreQuotes = !1, r81_a.push([
                r81_key,
                r81_value
            ]);
        return r81_allKeysAreQuotes ? ['.hash'].concat(r81_a.map(function _r81_t26(r82_pair) {
            var r82_pair;
            return [
                r82_pair[0][1],
                r82_pair[1]
            ];
        })) : (_r81_t27 = r81_env.newt(), function (r83_t, _r83_t0) {
            return [
                '.begin',
                [
                    '.set',
                    r83_t,
                    ['.hash']
                ]
            ].concat(r81_a.map(function _r83_t0(r84_pair) {
                var r84_pair;
                return [
                    '.set',
                    [
                        '.',
                        r83_t,
                        r84_pair[0]
                    ],
                    r84_pair[1]
                ];
            }).concat([r83_t]));
        }(_r81_t27));
    } else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.hash' === _r81_t0[0]) {
        for (r81_args = _r81_t0.slice(1), r81_a = [], r81_j = 1; r81_j < r81_form.length; r81_j += 1)
            r81_a.push([
                r81_form[r81_j][0],
                r1_ex(r81_form[r81_j][1], r81_env)
            ]);
        return ['.hash'].concat(r81_a);
    } else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.conslist' === _r81_t0[0])
        return r81_items = _r81_t0.slice(1), [
            [
                '.',
                r1_ex(['.list'].concat(r81_form.slice(1, -1)), r81_env),
                [
                    '.quote',
                    'concat'
                ]
            ],
            r1_ex(r81_form[r81_form.length - 1], r81_env)
        ];
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1 && '.operatorPiece' === _r81_t0[0])
        return r81_items = _r81_t0.slice(1), r1_ex(r1_opSegToRegular(r81_items, r81_env), r81_env);
    else if (Array.isArray(_r81_t0) && _r81_t0.length === 2 && '.local' === _r81_t0[0])
        return r81_x = _r81_t0[1], r81_env.declare(r81_x), r81_env.use(r81_x);
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 3 && '.revcall' === _r81_t0[0])
        return r81_callee = _r81_t0[1], r81_arg0 = _r81_t0[2], r81_args1 = _r81_t0.slice(3), r1_atom(r81_callee) && r81_env.macros.has(r81_callee) && r81_env.macros.get(r81_callee) instanceof Function ? r81_env.macros.get(r81_callee)(r81_form.slice(1), r81_env) : (r81_t = r81_env.newt(), [
            '.begin',
            [
                '.set',
                r81_t,
                r1_ex(r81_arg0, r81_env)
            ],
            r1_ex([
                r81_callee,
                r81_t
            ].concat(r81_args1), r81_env)
        ]);
    else if (Array.isArray(_r81_t0) && _r81_t0.length >= 1) {
        if (r81_callee = _r81_t0[0], r81_args = _r81_t0.slice(1), r1_atom(r81_callee) && r81_env.macros.has(r81_callee) && r81_env.macros.get(r81_callee) instanceof Function)
            return r81_env.macros.get(r81_callee)(r81_form, r81_env);
        for (r1_prim(r81_callee) || (r81_callee = r1_ex(r81_callee, r81_env)), r81_a = [r81_callee], r81_j = 1; r81_j < r81_form.length; r81_j += 1)
            r81_a[r81_j] = r1_ex(r81_form[r81_j], r81_env);
        return r81_a;
    } else
        return r81_x = _r81_t0, r1_atom(r81_x) && r81_env.macros.has(r81_x) && r81_env.macros.get(r81_x).invokeAsAtom ? r81_env.macros.get(r81_x).invokeAsAtom() : (r81_x = _r81_t0, r1_atom(r81_x) && r81_env.macros.has(r81_x) && !(r81_env.macros.get(r81_x) instanceof Function) ? r81_env.macros.get(r81_x) : (r81_x = _r81_t0, r1_prim(r81_x) ? r81_x : (r81_x = _r81_t0, r1_atom(r81_x) ? r81_env.use(r81_x) : (r81_any = _r81_t0, r81_any))));
}), r1_checkEvaluated = function _r1_t8(r85_form) {
    var r85_form;
    if (r85_form && r85_form instanceof Array && r85_form.length > 0) {
        if (r85_form.unevaluated)
            throw new r1_FormInvalidError(r85_form, 'Unevaluated subform');
        return r85_form.forEach(r1_checkEvaluated);
    } else
        return void 0;
}, exports.pass = function _r1_t9(r86_form, r86_globalScope) {
    var r86_form, r86_globalScope;
    return r1_ex(r86_form, r86_globalScope);
}, exports.ex = r1_ex, exports.checkEvaluated = r1_checkEvaluated, exports.deQuasiquote = r1_deQuasiquote, exports.opSegToRegular = r1_opSegToRegular;
