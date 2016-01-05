var r1_Scope, r1_atom, r1_identifier, r1_prim, r1_FormInvalidError, r1_NodeTranslation, r1_deQuasiquote, r1_ASSOC_LEFT, r1_ASSOC_NEVER, r1_ASSOC_RIGHT, r1_getOperatorInfo, r1_opSegToRegular, r1_ex, r1_checkEvaluated, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9;
r1_Scope = require('patrisika').Scope, r1_atom = function _r1_t0(r61_x) {
    var r61_x;
    return typeof r61_x === 'string';
}, r1_identifier = function _r1_t1(r62_x) {
    var r62_x;
    return r1_atom(r62_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r62_x);
}, r1_prim = function _r1_t2(r63_x) {
    var r63_x;
    return r1_atom(r63_x) && !r1_identifier(r63_x);
}, r1_FormInvalidError = require('patrisika').FormInvalidError, r1_NodeTranslation = function _r1_t3(r64_fn) {
    var r64_fn;
    return function _r64_t2(r65_form) {
        var r65_form, r65_res, _r65_t0, _r65_t1;
        return _r65_t0 = this, _r65_t1 = arguments, r65_res = r64_fn.apply(_r65_t0, _r65_t1), r65_form && r65_res && r65_form.begins >= 0 && (r65_res.begins = r65_form.begins), r65_form && r65_res && r65_form.ends >= 0 && (r65_res.ends = r65_form.ends), r65_form && r65_res && r65_form.within && (r65_res.within = r65_form.within), r65_res;
    };
}, r1_deQuasiquote = function _r1_t4(r66_form, r66_level, r66_env) {
    var r66_form, r66_level, r66_env, r66_otherwise, r66_xs, r66_x, r66_commonParts, r66_items, r66_c, r66_decLevel, _r66_t0, _r66_t1;
    return _r66_t0 = r66_form, Array.isArray(_r66_t0) && _r66_t0.length === 2 && '.unquote' === _r66_t0[0] ? (r66_c = _r66_t0[1], r66_level ? [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r66_c, r66_level - 1, r66_env)
    ] : r66_c) : Array.isArray(_r66_t0) && _r66_t0.length === 3 && '.unquote' === _r66_t0[0] && Array.isArray(_r66_t0[2]) && _r66_t0[2].length === 2 && '.quote' === _r66_t0[2][0] ? (r66_c = _r66_t0[1], r66_decLevel = _r66_t0[2][1], _r66_t0[2], r66_decLevel = Math.max(1, Math.floor(r66_decLevel)), r66_level - r66_decLevel < 0 ? r66_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r66_c, r66_level - r66_decLevel, r66_env)
    ]) : Array.isArray(_r66_t0) && _r66_t0.length === 2 && '.quasiquote' === _r66_t0[0] ? (r66_c = _r66_t0[1], [
        '.list',
        [
            '.quote',
            '.quasiquote'
        ],
        r1_deQuasiquote(r66_c, r66_level + 1, r66_env)
    ]) : Array.isArray(_r66_t0) && _r66_t0.length >= 1 && '.operatorPiece' === _r66_t0[0] ? (r66_items = _r66_t0.slice(1), r1_deQuasiquote(r1_opSegToRegular(r66_items, r66_env), r66_level, r66_env)) : Array.isArray(_r66_t0) && _r66_t0.length >= 0 ? (r66_xs = _r66_t0.slice(0), _r66_t1 = r66_xs[r66_xs.length - 1], Array.isArray(_r66_t1) && _r66_t1.length === 2 && '.sliceunquote' === _r66_t1[0] ? (r66_x = _r66_t1[1], r66_commonParts = r66_xs.slice(0, -1).map(function _r66_t4(r68_c) {
        var r68_c;
        return r1_deQuasiquote(r68_c, r66_level, r66_env);
    }), r66_level ? ['.list'].concat(r66_commonParts, [[
            '.list',
            [
                '.quote',
                '.sliceunquote'
            ],
            r1_deQuasiquote(r66_x, r66_level - 1, r66_env)
        ]]) : ['.conslist'].concat(r66_commonParts, [r66_x])) : (r66_otherwise = _r66_t1, ['.list'].concat(r66_xs.map(function _r66_t5(r67_c) {
        var r67_c;
        return r1_deQuasiquote(r67_c, r66_level, r66_env);
    })))) : (r66_otherwise = _r66_t0, [
        '.quote',
        r66_otherwise
    ]);
}, r1_ASSOC_LEFT = 'left', r1_ASSOC_NEVER = 'never', r1_ASSOC_RIGHT = 'right', r1_getOperatorInfo = function _r1_t5(r69_operator, r69_env) {
    var r69_operator, r69_env, r69_priority, r69_associvity, _r69_t0, _r69_t1;
    if (r69_env.macros.has(r69_operator) && r69_env.macros.get(r69_operator).opInfo)
        return r69_env.macros.get(r69_operator).opInfo;
    for (; r69_operator[0] === '<' && r69_operator[r69_operator.length - 1] === '>';)
        r69_operator = r69_operator.slice(1, -1);
    return r69_priority = 1000, r69_associvity = r1_ASSOC_RIGHT, r69_operator && r69_operator !== '=' && (_r69_t0 = r69_operator[0], r69_priority = '?' === _r69_t0 ? 100 : '^' === _r69_t0 ? 100 : '*' === _r69_t0 ? 200 : '/' === _r69_t0 ? 200 : '%' === _r69_t0 ? 200 : '+' === _r69_t0 ? 300 : '-' === _r69_t0 ? 300 : '=' === _r69_t0 ? 400 : '!' === _r69_t0 ? 400 : '<' === _r69_t0 ? 500 : '>' === _r69_t0 ? 500 : '&' === _r69_t0 ? 600 : '|' === _r69_t0 ? 700 : 1000, r69_associvity = r69_operator.length > 1 && r69_operator[r69_operator.length - 1] === '>' ? r1_ASSOC_RIGHT : (_r69_t1 = r69_operator[0], '!' === _r69_t1 ? r1_ASSOC_NEVER : '=' === _r69_t1 ? r1_ASSOC_NEVER : '<' === _r69_t1 ? r1_ASSOC_NEVER : '>' === _r69_t1 ? r1_ASSOC_NEVER : r1_ASSOC_LEFT)), {
        'priority': r69_priority,
        'associvity': r69_associvity
    };
}, r1_opSegToRegular = function _r1_t6(r70_items, r70_env) {
    var r70_items, r70_env, r70_uber, r70_j, r70_operator, r70_operand, r70_nbp, r70_assoc, r70_node, r70_n, r70_form, _r70_t0;
    for (r70_uber = [
            '.OG',
            void 0,
            r70_items[0]
        ], r70_uber.bp = 65535, r70_j = 1; r70_j < r70_items.length;)
        if (r70_operator = r70_items[r70_j], r70_operand = r70_items[r70_j + 1], r70_j += 2, _r70_t0 = r1_getOperatorInfo(r70_operator, r70_env), r70_nbp = _r70_t0.priority, r70_assoc = _r70_t0.associvity, r70_node = [
                r70_operator,
                void 0,
                r70_operand
            ], r70_node.bp = r70_nbp, r70_n = r70_uber, r70_assoc === r1_ASSOC_LEFT || r70_assoc === r1_ASSOC_NEVER) {
            for (; r70_n[2].bp > r70_nbp;)
                r70_n = r70_n[2];
            if (r70_assoc === r1_ASSOC_NEVER && r70_n[2].bp === r70_nbp)
                throw new r1_FormInvalidError(r70_form, 'Attempting to combine uncombinable operator ' + r70_operator);
            r70_node[1] = r70_n[2], r70_n[2] = r70_node;
        } else if (r70_assoc === r1_ASSOC_RIGHT) {
            for (; r70_n[2].bp >= r70_nbp;)
                r70_n = r70_n[2];
            r70_node[1] = r70_n[2], r70_n[2] = r70_node;
        }
    return r70_uber[2];
}, r1_ex = r1_NodeTranslation(function _r1_t7(r71_form, r71_env) {
    var r71_form, r71_env, r71_any, r71_x, r71_callee, r71_args, r71_a, r71_j, r71_arg0, r71_args1, r71_t, r71_items, r71_allKeysAreQuotes, r71_key, r71_value, r71_block, r71_param, r71_handler, r71_body, r71_params, r71_derived, r71_c, r71_e, _r71_t0, _r71_t1, _r71_t27;
    if (_r71_t0 = r71_form, Array.isArray(_r71_t0) && _r71_t0.length === 2 && '.preserve' === _r71_t0[0])
        return r71_x = _r71_t0[1], r71_x;
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1 && '.quote' === _r71_t0[0])
        return r71_x = _r71_t0.slice(1), ['.quote'].concat(r71_x);
    else if (Array.isArray(_r71_t0) && _r71_t0.length === 2 && '.quasiquote' === _r71_t0[0])
        return r71_x = _r71_t0[1], r1_ex(r1_deQuasiquote(r71_x, 0, r71_env), r71_env);
    else if (Array.isArray(_r71_t0) && _r71_t0.length === 2 && '.unquote' === _r71_t0[0])
        return r71_x = _r71_t0[1], r1_ex(r71_x, r71_env);
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1 && '.id' === _r71_t0[0])
        return r71_x = _r71_t0.slice(1), ['.id'].concat(r71_x);
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1 && '.t' === _r71_t0[0])
        return r71_x = _r71_t0.slice(1), ['.t'].concat(r71_x);
    else if (Array.isArray(_r71_t0) && _r71_t0.length === 3 && '.lambda' === _r71_t0[0] && Array.isArray(_r71_t0[1]) && _r71_t0[1].length >= 0) {
        for (r71_args = _r71_t0[1].slice(0), _r71_t0[1], r71_body = _r71_t0[2], r71_derived = new r1_Scope(r71_env), r71_j = 0; r71_j < r71_args.length; r71_j += 1)
            r71_derived.declare(r71_args[r71_j], !0), r71_args[r71_j] = r71_derived.use(r71_args[r71_j]);
        return [
            '.lambda.scoped',
            r71_args,
            r1_ex(r71_body, r71_derived),
            r71_derived
        ];
    } else if (Array.isArray(_r71_t0) && _r71_t0.length === 3 && '.syntactic-closure' === _r71_t0[0])
        return r71_c = _r71_t0[1], r71_e = _r71_t0[2], r1_ex(r71_c, r71_e);
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 3 && '.beta' === _r71_t0[0] && Array.isArray(_r71_t0[1]) && _r71_t0[1].length >= 0) {
        for (r71_args = _r71_t0[1].slice(0), _r71_t0[1], r71_body = _r71_t0[2], r71_params = _r71_t0.slice(3), r71_derived = new r1_Scope(r71_env), r71_j = 0; r71_j < r71_args.length; r71_j += 1)
            r71_derived.declare(r71_args[r71_j], !0), r71_args[r71_j] = r71_derived.use(r71_args[r71_j]);
        for (r71_j = 0; r71_j < r71_args.length; r71_j += 1)
            r71_params[r71_j] = r1_ex(r71_params[r71_j], r71_env);
        return [
            '.beta.scoped',
            r71_args,
            r1_ex(r71_body, r71_derived),
            r71_derived
        ].concat(r71_params);
    } else if (Array.isArray(_r71_t0) && _r71_t0.length === 4 && '.try' === _r71_t0[0] && Array.isArray(_r71_t0[2]) && _r71_t0[2].length === 1)
        return r71_block = _r71_t0[1], r71_param = _r71_t0[2][0], _r71_t0[2], r71_handler = _r71_t0[3], r71_env.declare(r71_param), [
            '.try',
            r1_ex(r71_block, r71_env),
            [r71_env.use(r71_param)],
            r1_ex(r71_handler, r71_env)
        ];
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1 && '.xhash' === _r71_t0[0]) {
        for (r71_args = _r71_t0.slice(1), r71_a = [], r71_allKeysAreQuotes = !0, r71_j = 1; r71_j < r71_form.length; r71_j += 1)
            r71_key = r1_ex(r71_form[r71_j][0], r71_env), r71_value = r1_ex(r71_form[r71_j][1], r71_env), _r71_t1 = r71_key, Array.isArray(_r71_t1) && _r71_t1.length === 2 && '.quote' === _r71_t1[0] ? r71_x = _r71_t1[1] : r71_allKeysAreQuotes = !1, r71_a.push([
                r71_key,
                r71_value
            ]);
        return r71_allKeysAreQuotes ? ['.hash'].concat(r71_a.map(function _r71_t26(r72_pair) {
            var r72_pair;
            return [
                r72_pair[0][1],
                r72_pair[1]
            ];
        })) : (_r71_t27 = r71_env.newt(), function (r73_t, _r73_t0) {
            return [
                '.begin',
                [
                    '.set',
                    r73_t,
                    ['.hash']
                ]
            ].concat(r71_a.map(function _r73_t0(r74_pair) {
                var r74_pair;
                return [
                    '.set',
                    [
                        '.',
                        r73_t,
                        r74_pair[0]
                    ],
                    r74_pair[1]
                ];
            }).concat([r73_t]));
        }(_r71_t27));
    } else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1 && '.hash' === _r71_t0[0]) {
        for (r71_args = _r71_t0.slice(1), r71_a = [], r71_j = 1; r71_j < r71_form.length; r71_j += 1)
            r71_a.push([
                r71_form[r71_j][0],
                r1_ex(r71_form[r71_j][1], r71_env)
            ]);
        return ['.hash'].concat(r71_a);
    } else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1 && '.conslist' === _r71_t0[0])
        return r71_items = _r71_t0.slice(1), [
            [
                '.',
                r1_ex(['.list'].concat(r71_form.slice(1, -1)), r71_env),
                [
                    '.quote',
                    'concat'
                ]
            ],
            r1_ex(r71_form[r71_form.length - 1], r71_env)
        ];
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1 && '.operatorPiece' === _r71_t0[0])
        return r71_items = _r71_t0.slice(1), r1_ex(r1_opSegToRegular(r71_items, r71_env), r71_env);
    else if (Array.isArray(_r71_t0) && _r71_t0.length === 2 && '.local' === _r71_t0[0])
        return r71_x = _r71_t0[1], r71_env.declare(r71_x), r71_env.use(r71_x);
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 3 && '.revcall' === _r71_t0[0])
        return r71_callee = _r71_t0[1], r71_arg0 = _r71_t0[2], r71_args1 = _r71_t0.slice(3), r1_atom(r71_callee) && r71_env.macros.has(r71_callee) && r71_env.macros.get(r71_callee) instanceof Function ? r71_env.macros.get(r71_callee)(r71_form.slice(1), r71_env) : (r71_t = r71_env.newt(), [
            '.begin',
            [
                '.set',
                r71_t,
                r1_ex(r71_arg0, r71_env)
            ],
            r1_ex([
                r71_callee,
                r71_t
            ].concat(r71_args1), r71_env)
        ]);
    else if (Array.isArray(_r71_t0) && _r71_t0.length >= 1) {
        if (r71_callee = _r71_t0[0], r71_args = _r71_t0.slice(1), r1_atom(r71_callee) && r71_env.macros.has(r71_callee) && r71_env.macros.get(r71_callee) instanceof Function)
            return r71_env.macros.get(r71_callee)(r71_form, r71_env);
        for (r1_prim(r71_callee) || (r71_callee = r1_ex(r71_callee, r71_env)), r71_a = [r71_callee], r71_j = 1; r71_j < r71_form.length; r71_j += 1)
            r71_a[r71_j] = r1_ex(r71_form[r71_j], r71_env);
        return r71_a;
    } else
        return r71_x = _r71_t0, r1_atom(r71_x) && r71_env.macros.has(r71_x) && r71_env.macros.get(r71_x).invokeAsAtom ? r71_env.macros.get(r71_x).invokeAsAtom() : (r71_x = _r71_t0, r1_atom(r71_x) && r71_env.macros.has(r71_x) && !(r71_env.macros.get(r71_x) instanceof Function) ? r71_env.macros.get(r71_x) : (r71_x = _r71_t0, r1_prim(r71_x) ? r71_x : (r71_x = _r71_t0, r1_atom(r71_x) ? r71_env.use(r71_x) : (r71_any = _r71_t0, r71_any))));
}), r1_checkEvaluated = function _r1_t8(r75_form) {
    var r75_form;
    if (r75_form && r75_form instanceof Array && r75_form.length > 0) {
        if (r75_form.unevaluated)
            throw new r1_FormInvalidError(r75_form, 'Unevaluated subform');
        return r75_form.forEach(r1_checkEvaluated);
    } else
        return void 0;
}, exports.pass = function _r1_t9(r76_form, r76_globalScope) {
    var r76_form, r76_globalScope;
    return r1_ex(r76_form, r76_globalScope);
}, exports.ex = r1_ex, exports.checkEvaluated = r1_checkEvaluated, exports.deQuasiquote = r1_deQuasiquote, exports.opSegToRegular = r1_opSegToRegular;
