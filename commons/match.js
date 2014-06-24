function Slot(id, subpattern){
	this.id = id;
	this.subpattern = subpattern;
}
function _(id, sp){
	return new Slot(id, sp)
}
function buildPattern(pattern){
	if(pattern instanceof Function) return pattern;
	else if(pattern instanceof Slot) {
		if(pattern.subpattern) pattern.subpattern = buildPattern(pattern.subpattern)
		return function(x, w){
			if(pattern.subpattern) {
				if(pattern.subpattern(x, w)) {
					if(w) w[pattern.id] = x;
					return true
				} else {
					return false
				}
			} else {
				if(w) w[pattern.id] = x;
				return true			
			}
		} 
	} else if(pattern instanceof Array) {
		var hasDots = ( typeof pattern[pattern.length - 1] === 'string' && pattern[pattern.length - 1].slice(0, 3) === ',..' );
		if(hasDots){
			var header = pattern.slice(0, pattern.length - 1).map(buildPattern);
			var rearid = pattern[pattern.length - 1].slice(3);
			return function(list, w){
				if(!(list instanceof Array) || list.length < header.length) return false;
				for(var j = 0; j < header.length; j++){
					if(!header[j](list[j], w)) return false;
				};
				if(w) w[rearid] = list.slice(header.length);
				return true;
			}
		} else {
			pattern = pattern.map(buildPattern);
			return function(list, w){
				if(!(list instanceof Array) || list.length !== pattern.length) return false;
				for(var j = 0; j < pattern.length; j++){
					if(!pattern[j](list[j], w)) return false;
				};
				return true;
			}
		}
	} else if(typeof pattern === 'string') {
		if(pattern[0] === ','){
			return buildPattern(_(pattern.slice(1)))
		} else {
			return function(x){ return x === pattern }
		}
	} else {
		return function(x){ return x === pattern }
	}
}

var syntax_rule = function(){
	var pairs = [].slice.call(arguments, 0).map(function(p){ return p.slice(0, -1).map(buildPattern).concat(p[p.length - 1]) });
	return function(node, __){
		for(var j = 0; j < pairs.length; j++){
			var pair = pairs[j];
			for(var k = 0; k < pair.length - 1; k++){
				var w = {};
				if(pair[k](node, w)) return pair[pair.length - 1].apply(w, arguments)
			}
		}
	}
}

exports.syntax_rule = syntax_rule;
exports._ = _;
exports.atom = function(x){ return typeof x === 'string' }
exports.variable = function(x){ return typeof x === 'string' || (x instanceof Array && (x[0] === '.id' || x[0] === '.t')) }
exports.empty = function(x){ return !x }
exports.any = function(x){ return true }
exports.prim = function(x){ return exports.atom(x) && (x[0] === '.' || /^\W+$/.test(x) ) && x != '&' && x != '&!' }