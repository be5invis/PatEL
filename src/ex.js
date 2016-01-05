var r1_Scope, r1_atom, r1_identifier, r1_prim, r1_FormInvalidError, r1_NodeTranslation, r1_deQuasiquote, r1_ex, r1_checkEvaluated, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
r1_Scope = require('patrisika').Scope, r1_atom = function _r1_t0(r52_x) {
    var r52_x;
    return typeof r52_x === 'string';
}, r1_identifier = function _r1_t1(r53_x) {
    var r53_x;
    return r1_atom(r53_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r53_x);
}, r1_prim = function _r1_t2(r54_x) {
    var r54_x;
    return r1_atom(r54_x) && !r1_identifier(r54_x);
}, r1_FormInvalidError = require('patrisika').FormInvalidError, r1_NodeTranslation = function _r1_t3(r55_fn) {
    var r55_fn;
    return function _r55_t2(r56_form) {
        var r56_form, r56_res, _r56_t0, _r56_t1;
        return _r56_t0 = this, _r56_t1 = arguments, r56_res = r55_fn.apply(_r56_t0, _r56_t1), r56_form && r56_res && r56_form.begins >= 0 && (r56_res.begins = r56_form.begins), r56_form && r56_res && r56_form.ends >= 0 && (r56_res.ends = r56_form.ends), r56_form && r56_res && r56_form.within && (r56_res.within = r56_form.within), r56_res;
    };
}, r1_deQuasiquote = function _r1_t4(r57_form, r57_level) {
    var r57_form, r57_level, r57_otherwise, r57_xs, r57_x, r57_commonParts, r57_c, r57_decLevel, _r57_t0, _r57_t1;
    return _r57_t0 = r57_form, Array.isArray(_r57_t0) && _r57_t0.length === 2 && '.unquote' === _r57_t0[0] ? (r57_c = _r57_t0[1], r57_level ? [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r57_c, r57_level - 1)
    ] : r57_c) : Array.isArray(_r57_t0) && _r57_t0.length === 3 && '.unquote' === _r57_t0[0] && Array.isArray(_r57_t0[2]) && _r57_t0[2].length === 2 && '.quote' === _r57_t0[2][0] ? (r57_c = _r57_t0[1], r57_decLevel = _r57_t0[2][1], _r57_t0[2], r57_decLevel = Math.max(1, Math.floor(r57_decLevel)), r57_level - r57_decLevel < 0 ? r57_c : [
        '.list',
        [
            '.quote',
            '.unquote'
        ],
        r1_deQuasiquote(r57_c, r57_level - r57_decLevel)
    ]) : Array.isArray(_r57_t0) && _r57_t0.length === 2 && '.quasiquote' === _r57_t0[0] ? (r57_c = _r57_t0[1], [
        '.list',
        [
            '.quote',
            '.quasiquote'
        ],
        r1_deQuasiquote(r57_c, r57_level + 1)
    ]) : Array.isArray(_r57_t0) && _r57_t0.length >= 0 ? (r57_xs = _r57_t0.slice(0), _r57_t1 = r57_xs[r57_xs.length - 1], Array.isArray(_r57_t1) && _r57_t1.length === 2 && '.sliceunquote' === _r57_t1[0] ? (r57_x = _r57_t1[1], r57_commonParts = r57_xs.slice(0, -1).map(function _r57_t4(r59_c) {
        var r59_c;
        return r1_deQuasiquote(r59_c, r57_level);
    }), r57_level ? ['.list'].concat(r57_commonParts, [[
            '.list',
            [
                '.quote',
                '.sliceunquote'
            ],
            r1_deQuasiquote(r57_x, r57_level - 1)
        ]]) : ['.conslist'].concat(r57_commonParts, [r57_x])) : (r57_otherwise = _r57_t1, ['.list'].concat(r57_xs.map(function _r57_t5(r58_c) {
        var r58_c;
        return r1_deQuasiquote(r58_c, r57_level);
    })))) : (r57_otherwise = _r57_t0, [
        '.quote',
        r57_otherwise
    ]);
}, r1_ex = r1_NodeTranslation(function _r1_t5(r60_form, r60_env) {
    var r60_form, r60_env, r60_any, r60_x, r60_callee, r60_args, r60_a, r60_j, r60_arg0, r60_args1, r60_t, r60_items, r60_allKeysAreQuotes, r60_key, r60_value, r60_block, r60_param, r60_handler, r60_body, r60_params, r60_derived, r60_c, r60_e, _r60_t0, _r60_t1, _r60_t26;
    if (_r60_t0 = r60_form, Array.isArray(_r60_t0) && _r60_t0.length === 2 && '.preserve' === _r60_t0[0])
        return r60_x = _r60_t0[1], r60_x;
    else if (Array.isArray(_r60_t0) && _r60_t0.length >= 1 && '.quote' === _r60_t0[0])
        return r60_x = _r60_t0.slice(1), ['.quote'].concat(r60_x);
    else if (Array.isArray(_r60_t0) && _r60_t0.length === 2 && '.quasiquote' === _r60_t0[0])
        return r60_x = _r60_t0[1], r1_ex(r1_deQuasiquote(r60_x, 0), r60_env);
    else if (Array.isArray(_r60_t0) && _r60_t0.length === 2 && '.unquote' === _r60_t0[0])
        return r60_x = _r60_t0[1], r1_ex(r60_x, r60_env);
    else if (Array.isArray(_r60_t0) && _r60_t0.length >= 1 && '.id' === _r60_t0[0])
        return r60_x = _r60_t0.slice(1), ['.id'].concat(r60_x);
    else if (Array.isArray(_r60_t0) && _r60_t0.length >= 1 && '.t' === _r60_t0[0])
        return r60_x = _r60_t0.slice(1), ['.t'].concat(r60_x);
    else if (Array.isArray(_r60_t0) && _r60_t0.length === 3 && '.lambda' === _r60_t0[0] && Array.isArray(_r60_t0[1]) && _r60_t0[1].length >= 0) {
        for (r60_args = _r60_t0[1].slice(0), _r60_t0[1], r60_body = _r60_t0[2], r60_derived = new r1_Scope(r60_env), r60_j = 0; r60_j < r60_args.length; r60_j += 1)
            r60_derived.declare(r60_args[r60_j], !0), r60_args[r60_j] = r60_derived.use(r60_args[r60_j]);
        return [
            '.lambda.scoped',
            r60_args,
            r1_ex(r60_body, r60_derived),
            r60_derived
        ];
    } else if (Array.isArray(_r60_t0) && _r60_t0.length === 3 && '.syntactic-closure' === _r60_t0[0])
        return r60_c = _r60_t0[1], r60_e = _r60_t0[2], r1_ex(r60_c, r60_e);
    else if (Array.isArray(_r60_t0) && _r60_t0.length >= 3 && '.beta' === _r60_t0[0] && Array.isArray(_r60_t0[1]) && _r60_t0[1].length >= 0) {
        for (r60_args = _r60_t0[1].slice(0), _r60_t0[1], r60_body = _r60_t0[2], r60_params = _r60_t0.slice(3), r60_derived = new r1_Scope(r60_env), r60_j = 0; r60_j < r60_args.length; r60_j += 1)
            r60_derived.declare(r60_args[r60_j], !0), r60_args[r60_j] = r60_derived.use(r60_args[r60_j]);
        for (r60_j = 0; r60_j < r60_args.length; r60_j += 1)
            r60_params[r60_j] = r1_ex(r60_params[r60_j], r60_env);
        return [
            '.beta.scoped',
            r60_args,
            r1_ex(r60_body, r60_derived),
            r60_derived
        ].concat(r60_params);
    } else if (Array.isArray(_r60_t0) && _r60_t0.length === 4 && '.try' === _r60_t0[0] && Array.isArray(_r60_t0[2]) && _r60_t0[2].length === 1)
        return r60_block = _r60_t0[1], r60_param = _r60_t0[2][0], _r60_t0[2], r60_handler = _r60_t0[3], r60_env.declare(r60_param), [
            '.try',
            r1_ex(r60_block, r60_env),
            [r60_env.use(r60_param)],
            r1_ex(r60_handler, r60_env)
        ];
    else if (Array.isArray(_r60_t0) && _r60_t0.length >= 1 && '.xhash' === _r60_t0[0]) {
        for (r60_args = _r60_t0.slice(1), r60_a = [], r60_allKeysAreQuotes = !0, r60_j = 1; r60_j < r60_form.length; r60_j += 1)
            r60_key = r1_ex(r60_form[r60_j][0], r60_env), r60_value = r1_ex(r60_form[r60_j][1], r60_env), _r60_t1 = r60_key, Array.isArray(_r60_t1) && _r60_t1.length === 2 && '.quote' === _r60_t1[0] ? r60_x = _r60_t1[1] : r60_allKeysAreQuotes = !1, r60_a.push([
                r60_key,
                r60_value
            ]);
        return r60_allKeysAreQuotes ? ['.hash'].concat(r60_a.map(function _r60_t25(r61_pair) {
            var r61_pair;
            return [
                r61_pair[0][1],
                r61_pair[1]
            ];
        })) : (_r60_t26 = r60_env.newt(), function (r62_t, _r62_t0) {
            return [
                '.begin',
                [
                    '.set',
                    r62_t,
                    ['.hash']
                ]
            ].concat(r60_a.map(function _r62_t0(r63_pair) {
                var r63_pair;
                return [
                    '.set',
                    [
                        '.',
                        r62_t,
                        r63_pair[0]
                    ],
                    r63_pair[1]
                ];
            }).concat([r62_t]));
        }(_r60_t26));
    } else if (Array.isArray(_r60_t0) && _r60_t0.length >= 1 && '.hash' === _r60_t0[0]) {
        for (r60_args = _r60_t0.slice(1), r60_a = [], r60_j = 1; r60_j < r60_form.length; r60_j += 1)
            r60_a.push([
                r60_form[r60_j][0],
                r1_ex(r60_form[r60_j][1], r60_env)
            ]);
        return ['.hash'].concat(r60_a);
    } else if (Array.isArray(_r60_t0) && _r60_t0.length >= 1 && '.conslist' === _r60_t0[0])
        return r60_items = _r60_t0.slice(1), [
            [
                '.',
                r1_ex(['.list'].concat(r60_form.slice(1, -1)), r60_env),
                [
                    '.quote',
                    'concat'
                ]
            ],
            r1_ex(r60_form[r60_form.length - 1], r60_env)
        ];
    else if (Array.isArray(_r60_t0) && _r60_t0.length === 2 && '.local' === _r60_t0[0])
        return r60_x = _r60_t0[1], r60_env.declare(r60_x), r60_env.use(r60_x);
    else if (Array.isArray(_r60_t0) && _r60_t0.length >= 3 && '.revcall' === _r60_t0[0])
        return r60_callee = _r60_t0[1], r60_arg0 = _r60_t0[2], r60_args1 = _r60_t0.slice(3), r1_atom(r60_callee) && r60_env.macros.has(r60_callee) && r60_env.macros.get(r60_callee) instanceof Function ? r60_env.macros.get(r60_callee)(r60_form.slice(1), r60_env) : (r60_t = r60_env.newt(), [
            '.begin',
            [
                '.set',
                r60_t,
                r1_ex(r60_arg0, r60_env)
            ],
            r1_ex([
                r60_callee,
                r60_t
            ].concat(r60_args1), r60_env)
        ]);
    else if (Array.isArray(_r60_t0) && _r60_t0.length >= 1) {
        if (r60_callee = _r60_t0[0], r60_args = _r60_t0.slice(1), r1_atom(r60_callee) && r60_env.macros.has(r60_callee) && r60_env.macros.get(r60_callee) instanceof Function)
            return r60_env.macros.get(r60_callee)(r60_form, r60_env);
        for (r1_prim(r60_callee) || (r60_callee = r1_ex(r60_callee, r60_env)), r60_a = [r60_callee], r60_j = 1; r60_j < r60_form.length; r60_j += 1)
            r60_a[r60_j] = r1_ex(r60_form[r60_j], r60_env);
        return r60_a;
    } else
        return r60_x = _r60_t0, r1_atom(r60_x) && r60_env.macros.has(r60_x) && r60_env.macros.get(r60_x).invokeAsAtom ? r60_env.macros.get(r60_x).invokeAsAtom() : (r60_x = _r60_t0, r1_atom(r60_x) && r60_env.macros.has(r60_x) && !(r60_env.macros.get(r60_x) instanceof Function) ? r60_env.macros.get(r60_x) : (r60_x = _r60_t0, r1_prim(r60_x) ? r60_x : (r60_x = _r60_t0, r1_atom(r60_x) ? r60_env.use(r60_x) : (r60_any = _r60_t0, r60_any))));
}), r1_checkEvaluated = function _r1_t6(r64_form) {
    var r64_form;
    if (r64_form && r64_form instanceof Array && r64_form.length > 0) {
        if (r64_form.unevaluated)
            throw new r1_FormInvalidError(r64_form, 'Unevaluated subform');
        return r64_form.forEach(r1_checkEvaluated);
    } else
        return void 0;
}, exports.pass = function _r1_t7(r65_form, r65_globalScope) {
    var r65_form, r65_globalScope;
    return r1_ex(r65_form, r65_globalScope);
}, exports.ex = r1_ex, exports.checkEvaluated = r1_checkEvaluated, exports.deQuasiquote = r1_deQuasiquote;
