// PATRISIKA: Scoping and macro expansion.


var syntax_rule = require('../commons/match.js').syntax_rule;
var _ = require('../commons/match.js')._;
var atom = require('../commons/match.js').atom;
var empty = require('../commons/match.js').empty;
var any = require('../commons/match.js').any;
var prim = require('../commons/match.js').prim;

var Scope = require('../../patrisika').Scope;

var ex = syntax_rule(
	[['.quote', ',..x'], function(form, env){ return form }],
	[['.id', ',..x'], function(form, env){ return form }],
	[['.lambda', ',args', ',body'], function(form, env){
		var derived = new Scope(env);
		var args = [];
		for(var j = 0; j < this.args.length; j++){
			derived.declare(this.args[j], true)
			args[j] = derived.use(this.args[j]);
		}
		return ['.lambda.scoped', args, ex(this.body, derived), derived]
	}],
	[['.beta', ',args', ',body', ',..params'], function(form, env){
		var derived = new Scope(env);
		var args = [], params = [];
		for(var j = 0; j < this.args.length; j++){
			derived.declare(this.args[j], true)
			args[j] = derived.use(this.args[j]);
		};
		for(var j = 0; j < this.params.length; j++){
			params[j] = ex(this.params[j], env)
		}
		return ['.beta.scoped', args, ex(this.body, derived), derived].concat(params)
	}],
	[['.try', ',block', [_('param', atom)], ',handler'], function(form, env){
		env.declare(this.param);
		return ['.try', ex(this.block, env), env.use(this.param), ex(this.handler, env)]
	}],
	[['.hash', ',..args'], function(form, env){
		var a = ['.hash'];
		for(var j = 1; j < form.length; j++){
			a[j] = [form[j][0], ex(form[j][1], env)];
		};
		return a;
	}],
	[['.local', _('x', atom)], function(form, env){
		env.declare(this.x);
		return env.use(this.x);
	}],
	[[',..call'], function(form, env){
		if(atom(form[0]) && env.macros.has(form[0])){
			return env.macros.get(form[0])(ex, form, env)
		}
		var j0 = prim(form[0]) ? 1 : 0;
		var a = form.slice(0);
		for(var j = j0; j < form.length; j++){
			a[j] = ex(form[j], env)
		}
		return a;
	}],
	[atom, function(form, env){ 
		if(/^\W/.test(form)) return form
		else return env.use(form)
	}],
	[any, function(form){ return form }]
)

exports.pass = function(form, globalScope){
	return ex(form, globalScope);
}