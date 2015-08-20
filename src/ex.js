var r0_Scope, r0_atom, r0_identifier, r0_prim, r0_FormInvalidError, r0_NodeTranslation, r0_deQuasiquote, r0_ex, r0_checkEvaluated, _r0_t0, _r0_t1, _r0_t2, _r0_t3, _r0_t4, _r0_t5, _r0_t6, _r0_t7;

r0_Scope = require("patrisika").Scope, r0_atom = function(r1_x) {
    var r1_x;
    return "string" == typeof r1_x;
}, r0_identifier = function(r2_x) {
    var r2_x;
    return r0_atom(r2_x) && /^[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ_$][0-9A-Z_a-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-\u0487Ҋ-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06df-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௯\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൯ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༩\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135fᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔ⁱⁿₐ-ₔ\u20d0-\u20dc\u20e1\u20e5-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃ-ↄⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-〆\u302a-\u302f〱-〵〻-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua66f\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ\-_@$]*$/.test(r2_x);
}, r0_prim = function(r3_x) {
    var r3_x;
    return r0_atom(r3_x) && !r0_identifier(r3_x);
}, r0_FormInvalidError = require("patrisika").FormInvalidError, r0_NodeTranslation = function(r4_fn) {
    var r4_fn;
    return function(r5_form) {
        var r5_form, r5_res, _r5_t0, _r5_t1, _r5_t2, _r5_t3, _r5_t4;
        return _r5_t0 = this, _r5_t1 = arguments, r5_res = r4_fn.apply(_r5_t0, _r5_t1), 
        _r5_t2 = r5_form && r5_res && r5_form.begins >= 0 ? r5_res.begins = r5_form.begins : void 0, 
        _r5_t3 = r5_form && r5_res && r5_form.ends >= 0 ? r5_res.ends = r5_form.ends : void 0, 
        _r5_t4 = r5_form && r5_res && r5_form.within ? r5_res.within = r5_form.within : void 0, 
        r5_res;
    };
}, r0_deQuasiquote = function(r6_form, r6_level) {
    var r6_form, r6_level, r6_otherwise, r6_xs, r6_x, r6_commonParts, r6_c, r6_decLevel, _r6_t0, _r6_t1;
    return _r6_t0 = r6_form, _r6_t0 instanceof Array && 2 === _r6_t0.length && ".unquote" === _r6_t0[0] ? (r6_c = _r6_t0[1], 
    r6_level ? [ ".list", [ ".quote", ".unquote" ], r0_deQuasiquote(r6_c, r6_level - 1) ] : r6_c) : _r6_t0 instanceof Array && 3 === _r6_t0.length && ".unquote" === _r6_t0[0] && _r6_t0[2] instanceof Array && 2 === _r6_t0[2].length && ".quote" === _r6_t0[2][0] ? (r6_c = _r6_t0[1], 
    r6_decLevel = _r6_t0[2][1], r6_decLevel = Math.max(1, Math.floor(r6_decLevel)), 
    0 > r6_level - r6_decLevel ? r6_c : [ ".list", [ ".quote", ".unquote" ], r0_deQuasiquote(r6_c, r6_level - r6_decLevel) ]) : _r6_t0 instanceof Array && 2 === _r6_t0.length && ".quasiquote" === _r6_t0[0] ? (r6_c = _r6_t0[1], 
    [ ".list", [ ".quote", ".quasiquote" ], r0_deQuasiquote(r6_c, r6_level + 1) ]) : _r6_t0 instanceof Array && _r6_t0.length >= 0 ? (r6_xs = _r6_t0.slice(0), 
    _r6_t1 = r6_xs[r6_xs.length - 1], _r6_t1 instanceof Array && 2 === _r6_t1.length && ".sliceunquote" === _r6_t1[0] ? (r6_x = _r6_t1[1], 
    r6_commonParts = r6_xs.slice(0, -1).map(function(r8_c) {
        var r8_c;
        return r0_deQuasiquote(r8_c, r6_level);
    }), r6_level ? [ ".list" ].concat(r6_commonParts, [ [ ".list", [ ".quote", ".sliceunquote" ], r0_deQuasiquote(r6_x, r6_level - 1) ] ]) : [ ".conslist" ].concat(r6_commonParts, [ r6_x ])) : (r6_otherwise = _r6_t1, 
    [ ".list" ].concat(r6_xs.map(function(r7_c) {
        var r7_c;
        return r0_deQuasiquote(r7_c, r6_level);
    })))) : (r6_otherwise = _r6_t0, [ ".quote", r6_otherwise ]);
}, r0_ex = r0_NodeTranslation(function(r9_form, r9_env) {
    var r9_form, r9_env, r9_any, r9_x, r9_callee, r9_args, r9_a, r9_j, r9_arg0, r9_args1, r9_t, r9_allKeysAreQuotes, r9_key, r9_value, r9_otherwise, r9_block, r9_param, r9_handler, r9_body, r9_params, r9_derived, r9_c, r9_e, _r9_t0, _r9_t1, _r9_t20, _r9_t22, _r9_t24, _r9_t27;
    if (_r9_t0 = r9_form, _r9_t0 instanceof Array && 2 === _r9_t0.length && ".preserve" === _r9_t0[0]) return r9_x = _r9_t0[1];
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1 && ".quote" === _r9_t0[0]) return r9_x = _r9_t0.slice(1), 
    [ ".quote" ].concat(r9_x);
    if (_r9_t0 instanceof Array && 2 === _r9_t0.length && ".quasiquote" === _r9_t0[0]) return r9_x = _r9_t0[1], 
    r0_ex(r0_deQuasiquote(r9_x, 0), r9_env);
    if (_r9_t0 instanceof Array && 2 === _r9_t0.length && ".unquote" === _r9_t0[0]) return r9_x = _r9_t0[1], 
    r0_ex(r9_x, r9_env);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1 && ".id" === _r9_t0[0]) return r9_x = _r9_t0.slice(1), 
    [ ".id" ].concat(r9_x);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1 && ".t" === _r9_t0[0]) return r9_x = _r9_t0.slice(1), 
    [ ".t" ].concat(r9_x);
    if (_r9_t0 instanceof Array && 3 === _r9_t0.length && ".lambda" === _r9_t0[0] && _r9_t0[1] instanceof Array && _r9_t0[1].length >= 0) {
        for (r9_args = _r9_t0[1].slice(0), r9_body = _r9_t0[2], r9_derived = new r0_Scope(r9_env), 
        r9_j = 0; r9_j < r9_args.length; r9_j += 1) r9_derived.declare(r9_args[r9_j], !0), 
        r9_args[r9_j] = r9_derived.use(r9_args[r9_j]);
        return [ ".lambda.scoped", r9_args, r0_ex(r9_body, r9_derived), r9_derived ];
    }
    if (_r9_t0 instanceof Array && 3 === _r9_t0.length && ".syntactic-closure" === _r9_t0[0]) return r9_c = _r9_t0[1], 
    r9_e = _r9_t0[2], r0_ex(r9_c, r9_e);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 3 && ".beta" === _r9_t0[0] && _r9_t0[1] instanceof Array && _r9_t0[1].length >= 0) {
        for (r9_args = _r9_t0[1].slice(0), r9_body = _r9_t0[2], r9_params = _r9_t0.slice(3), 
        r9_derived = new r0_Scope(r9_env), r9_j = 0; r9_j < r9_args.length; r9_j += 1) r9_derived.declare(r9_args[r9_j], !0), 
        r9_args[r9_j] = r9_derived.use(r9_args[r9_j]);
        for (r9_j = 0; r9_j < r9_args.length; r9_j += 1) r9_params[r9_j] = r0_ex(r9_params[r9_j], r9_env);
        return [ ".beta.scoped", r9_args, r0_ex(r9_body, r9_derived), r9_derived ].concat(r9_params);
    }
    if (_r9_t0 instanceof Array && 4 === _r9_t0.length && ".try" === _r9_t0[0] && _r9_t0[2] instanceof Array && 1 === _r9_t0[2].length) return r9_block = _r9_t0[1], 
    r9_param = _r9_t0[2][0], r9_handler = _r9_t0[3], r9_env.declare(r9_param), [ ".try", r0_ex(r9_block, r9_env), [ r9_env.use(r9_param) ], r0_ex(r9_handler, r9_env) ];
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1 && ".hash" === _r9_t0[0]) {
        for (r9_args = _r9_t0.slice(1), r9_a = [], r9_allKeysAreQuotes = !0, r9_j = 1; r9_j < r9_form.length; r9_j += 1) r9_key = r0_ex(r9_form[r9_j][0], r9_env), 
        r9_value = r0_ex(r9_form[r9_j][1], r9_env), _r9_t1 = r9_key, _r9_t1 instanceof Array && 2 === _r9_t1.length && ".quote" === _r9_t1[0] ? r9_x = _r9_t1[1] : (r9_otherwise = _r9_t1, 
        r9_allKeysAreQuotes = !1), r9_a.push([ r9_key, r9_value ]);
        return r9_allKeysAreQuotes ? [ ".hash" ].concat(r9_a.map(function(r10_pair) {
            var r10_pair;
            return [ r10_pair[0][1], r10_pair[1] ];
        })) : (_r9_t27 = r9_env.newt(), function(r11_t) {
            var r11_t;
            return [ ".begin", [ ".set", r11_t, [ ".hash" ] ] ].concat(r9_a.map(function(r12_pair) {
                var r12_pair;
                return [ ".set", [ ".", r11_t, r12_pair[0] ], r12_pair[1] ];
            }).concat([ r11_t ]));
        }(_r9_t27));
    }
    if (_r9_t0 instanceof Array && 2 === _r9_t0.length && ".local" === _r9_t0[0]) return r9_x = _r9_t0[1], 
    r9_env.declare(r9_x), r9_env.use(r9_x);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 3 && ".revcall" === _r9_t0[0]) return r9_callee = _r9_t0[1], 
    r9_arg0 = _r9_t0[2], r9_args1 = _r9_t0.slice(3), r0_atom(r9_callee) && r9_env.macros.has(r9_callee) ? r9_env.macros.get(r9_callee)(r9_form.slice(1), r9_env) : (_r9_t24 = void 0, 
    r9_t = r9_env.newt(), [ ".begin", [ ".set", r9_t, r0_ex(r9_arg0, r9_env) ], r0_ex([ r9_callee, r9_t ].concat(r9_args1), r9_env) ]);
    if (_r9_t0 instanceof Array && _r9_t0.length >= 1) {
        if (r9_callee = _r9_t0[0], r9_args = _r9_t0.slice(1), r0_atom(r9_callee) && r9_env.macros.has(r9_callee)) return r9_env.macros.get(r9_callee)(r9_form, r9_env);
        for (_r9_t20 = void 0, _r9_t22 = r0_prim(r9_callee) ? void 0 : r9_callee = r0_ex(r9_callee, r9_env), 
        r9_a = [ r9_callee ], r9_j = 1; r9_j < r9_form.length; r9_j += 1) r9_a[r9_j] = r0_ex(r9_form[r9_j], r9_env);
        return r9_a;
    }
    return r9_x = _r9_t0, r0_atom(r9_x) && r9_env.macros.has(r9_x) && r9_env.macros.get(r9_x).invokeAsAtom ? r9_env.macros.get(r9_x).invokeAsAtom() : (r9_x = _r9_t0, 
    !r0_atom(r9_x) || !r9_env.macros.has(r9_x) || r9_env.macros.get(r9_x) instanceof Function ? (r9_x = _r9_t0, 
    r0_prim(r9_x) ? r9_x : (r9_x = _r9_t0, r0_atom(r9_x) ? r9_env.use(r9_x) : r9_any = _r9_t0)) : r9_env.macros.get(r9_x));
}), r0_checkEvaluated = function(r13_form) {
    var r13_form, _r13_t3;
    if (r13_form && r13_form instanceof Array && r13_form.length > 0) {
        if (r13_form.unevaluated) throw new r0_FormInvalidError(r13_form, "Unevaluated subform");
        return _r13_t3 = void 0, r13_form.forEach(r0_checkEvaluated);
    }
    return void 0;
}, exports.pass = function(r14_form, r14_globalScope) {
    var r14_form, r14_globalScope;
    return r0_ex(r14_form, r14_globalScope);
}, exports.ex = r0_ex, exports.checkEvaluated = r0_checkEvaluated, exports.deQuasiquote = r0_deQuasiquote;