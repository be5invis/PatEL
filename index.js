var parse = require('./src/syntax').parse;
var fs = require('fs');
var util = require('util');
var patrisika = require('../patrisika');
var escodegen = require('escodegen');
var ex = require('./src/ex.js').pass

try {
	var st = new Date();
	var input = fs.readFileSync(process.argv[2], 'utf-8');
	var ast = parse(input);
	var et = new Date();
	console.log(et - st)

	var externs = patrisika.DefaultExterns();

	function trace(s){ process.stderr.write(s + '\n') }

	externs.castName = function(name){ return name };
	externs.declare('require');
	externs.declare('exports');
	externs.declare('true');
	externs.declare('false');
	externs.declare('null');
	externs.declare('undefined');
	externs.declare('Error');


	var operatorRename = function(op){
		return function(ex, form, env){
			return ex([op].concat(form.slice(1)), env)
		}
	}
	externs.macros.put('lambda', operatorRename('.lambda'));
	externs.macros.put('begin', operatorRename('.begin'));
	externs.macros.put('if', operatorRename('.if'));
	externs.macros.put('while', operatorRename('.while'));
	externs.macros.put('try', operatorRename('.try'));
	externs.macros.put('set', operatorRename('.set'));
	externs.macros.put('local', function(ex, form, env){
		if(form.length === 2){
			return ex(['.local', form[1]], env)
		} else {
			return ex(['.set', ['.local', form[1]], form[2]], env)
		}
	});
	externs.macros.put('is', operatorRename('.is'));
	externs.macros.put('new', operatorRename('.new'));
	externs.macros.put('this', operatorRename('.thisp'));
	externs.macros.put('arguments', operatorRename('.argsp'));
	externs.macros.put('and', operatorRename('&&'));
	externs.macros.put('or', operatorRename('||'));
	externs.macros.put('not', operatorRename('!'));
	externs.macros.put('return', operatorRename('.return'));
	externs.macros.put('throw', operatorRename('.throw'));
	externs.macros.put('list', operatorRename('.list'));
	externs.macros.put('.conslist', function(ex, form, env){
		return [['.', ex(['.list'].concat(form.slice(1, -1)), env), ['.quote', 'concat']], ex(form[form.length - 1], env)]
	});
	externs.macros.put('let', function(ex, form, env){
		var pairs = form.slice(1, -1);
		var args = pairs.map(function(pair){ return pair[0] })
		var paras = pairs.map(function(pair){ return pair[1] })
		return ex(['.beta', args, form[form.length - 1]].concat(paras), env)
	});
	externs.macros.put('object', function(ex, form, env){
		var pairs = form.slice(1).map(function(pair){
			return [pair[0], ex(pair[1], env)]
		})
		return ['.hash'].concat(pairs)
	});
	externs.macros.put('define', function(ex, form, env){
		var term = form[1], value = form[2];
		if(typeof term === 'string') return ex(['.set', ['.local', term], value], env);
		else if(term instanceof Array && typeof term[0] === 'string') return ex(['.set', ['.local', term[0]], ['.lambda', term.slice(1), value]], env)
		else if(term instanceof Array) return ex(['.set', term[0], ['.lambda', term.slice(1), value]], env);
		else throw new SyntaxError("Wrong [define] Node.")
	});
	externs.macros.put('piecewise', function(ex, form, env){
		var pairs = form.slice(1);
		var f = ['.unit']
		for(var j = pairs.length - 1; j >= 0; j--) {
			f = ['.if', pairs[j][0], pairs[j][1], f]
		};
		return ex(f, env)
	});
	externs.macros.put('inc', function(ex, form, env){
		return ['.set', ex(form[1], env), ['+', ex(form[1], env), ['.quote', 1]]];
	});
	externs.macros.put('for', function(ex, form, env){
		var init = form[1], test = form[2], step = form[3], body = form[4];
		return ['.begin',
			ex(init, env),
			['.while', ex(test, env), ['.begin', ex(body, env), ex(step, env)]]
		]
	});
	externs.macros.put('foreach', function(ex, form, env){
		var itv = form[1], range = ex(form[2], env), body = form[3];
		env.declare(itv);
		var tRg = env.newt();
		var tn = env.newt()
		return ['.begin',
			['.set', tRg, range],
			['.while', ['!', ['.', ['.set', tn, [['.', tRg, ['.quote', 'next']]]], ['.quote', 'done']]], ['.begin', 
				['.set', ex(itv, env), ['.', tn, ['.quote', 'value']]],
				ex(body, env)
			]]
		]
	});
	function boole(x){ return !!x }
	externs.macros.put('match', function(ex, form, env){
		var val = ex(form[1], env);
		var pairs = form.slice(2);
		var t = env.newt();

		function matchesQ(pattern){
			if(typeof pattern === 'string') {
				return { 
					whether: function(x){ return null }, 
					assign: function(x){ return ['.set', ex(pattern, env), x] } 
				};
			} else if(pattern instanceof Array){
				if(pattern[0] === '.quote') {
					return {
						whether: function(x){ return ['===', x, pattern] },
						assign: function(x){ return ['.unit'] }
					}
				} else if(pattern[0] === '.list') {
					var subpatterns = pattern.slice(1).map(matchesQ);
					return {
						whether: function(x){
							return ['&&', ['.is', x, externs.use('Array')], ['===', ['.', x, ['.quote', 'length']], ['.quote', subpatterns.length]]].concat(subpatterns.map(function(p, j){ return p.whether(['.', x, ['.quote', j]]) })
							).filter(boole)
						},
						assign: function(x){
							return ['.begin'].concat(subpatterns.map(function(p, j){ return p.assign(['.', x, ['.quote', j]]) }))
						}
					}
				} else if(pattern[0] === '.conslist') {
					var subpatterns = pattern.slice(1, -1).map(matchesQ);
					var finalSubPattern = matchesQ(pattern[pattern.length - 1]);
					return {
						whether: function(x){
							return ['&&', ['.is', x, externs.use('Array')], ['>=', ['.', x, ['.quote', 'length']], ['.quote', subpatterns.length]]].concat(
								subpatterns.map(function(p, j){ return p.whether(['.', x, ['.quote', j]]) }),
								[finalSubPattern.whether([['.', x, ['.quote', 'slice']], ['.quote', subpatterns.length]])]
							).filter(boole)
						},
						assign: function(x){
							return ['.begin'].concat(
								subpatterns.map(function(p, j){ return p.assign(['.', x, ['.quote', j]]) }),
								[finalSubPattern.assign([['.', x, ['.quote', 'slice']], ['.quote', subpatterns.length]])]
							)
						}
					}
				} else {
					var subpatterns = pattern.slice(1).map(matchesQ);
					var t = env.newt();
					return {
						whether: function(x){
							return ['&&', ['.set', t, [['.', ex(pattern[0], env), ['.quote', 'unapply']], x, ['.quote', subpatterns.length]]]].concat(subpatterns.map(function(p, j){ return p.whether(['.', t, ['.quote', j]]) })
							).filter(boole)
						},
						assign: function(x){
							return ['.begin'].concat(subpatterns.map(function(p, j){ return p.assign(['.', t, ['.quote', j]]) }))
						}
					}
				}
			}
		};

		var f = ['.unit']
		for(var j = pairs.length - 1; j >= 0; j--){
			var pat = matchesQ(pairs[j][0]), cond = pat.whether(t);
			if(pairs[j].length === 2){
				// unguarded
				if(cond) {
					f = ['.if', pat.whether(t) || ['.quote', true], ['.begin', pat.assign(t), ex(pairs[j][1], env)], f]
				} else {
					f = ['.begin', pat.assign(t), ex(pairs[j][1], env)]
				}
			} else {
				// guarded
				if(cond){
					var tc = env.newt();
					f = ['.begin',
						['.if', cond || ['.quote', true], 
							['.begin', pat.assign(t), ['.if', ex(pairs[j][1], env), ['.set', tc, ['.quote', true]], ['.set', tc, ['.quote', false]]]], 
							['.set', tc, ['.quote', false]]],
						['.if', tc, ex(pairs[j][2], env), f]
					]
				} else {
					f = ['.begin', pat.assign(t), ['.if', ex(pairs[j][1], env), ex(pairs[j][2], env), f]]
				}
			}
		};
		return ['.begin', ['.set', t, val], f]
	});
	externs.macros.put('regex', function(ex, form, env){
		if(form[1] instanceof Array && form[1][0] === '.quote') return ['.quote', new RegExp(form[1][1], form[1][2])]
		else return ['.new', externs.use("RegExp")].concat(form.slice(1))
	});

	var globals = new patrisika.Scope(externs);

	var xast = ex(ast, globals);
	//trace(util.inspect(xast, {depth: null}))
	//trace('##############################################')

	var rast = patrisika.generate(xast, globals);
	//console.log(util.inspect(rast, {depth: null}))

	console.log(escodegen.generate(rast));
}catch(ex){
	console.log(ex)
}