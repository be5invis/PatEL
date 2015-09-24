var fs = require('fs');
var sy = require('./syntax-019');
var input = fs.readFileSync(process.argv[2], 'utf-8');
var level = 1;
function indent(level){
	return (new Array(level)).join('\t')
}
var join = function(a){
	if(a && a.enclosed){
		level += 1;
		a.enclosed = false;
		var s = join(a);
		level -= 1;
		return (a.indented ? '\n' + indent(level + 1) : '') + s + (a.indented && level === 1 || a.contained ? '\n' + indent(level) : '');
	} else if(a instanceof Array) {
		return a.map(join).join('');
	} else if(a) {
		var s =  '' + a;
		return s.replace(/\n[ \t]*$/, '\n' + indent(level))
	} else {
		return ''
	}
};
fs.writeFileSync(process.argv[3], join(sy.parse(input)))