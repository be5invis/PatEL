function span(s, type){
	return $('<span>').text(s).addClass(type)
}
function escapeString(s){
	return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'
}
function flex(e){
	if(e.text().length > 60) e.addClass('large');
}
function showupArray(obj, depth){
	var a = $('<span>').addClass('list');
	var braceLeft = $('<span>').addClass('braceleft').text('(');
	var braceRight = $('<span>').addClass('braceright').text(')');
	var items = $('<span>').addClass('items');
	for(var j = 0; j < obj.length; j++){
		if(j > 0) items.append(' ')
		items.append(showupValue(obj[j], depth - 1))
	}
	a.append(braceLeft, items, braceRight);
	flex(a);
	return a;
}
function showupObject(obj, depth){
	var a = $('<span>').addClass('hash');
	var braceLeft = $('<span>').addClass('braceleft').text('(');
	var braceRight = $('<span>').addClass('braceright').text(')');
	var items = $('<span>').addClass('items');
	var keys = Object.keys(obj);
	for(var j = 0; j < keys.length; j++){
		if(j > 0) items.append(' ')
		var pair = $('<span>').addClass('pair')
		if(typeof obj[keys[j]] === 'object') pair.addClass('struct-item')
		pair.append($('<span>').addClass('prop').text('.' + (/^[a-zA-Z]\w*$/.test(keys[j]) ? keys[j] : escapeString(keys[j]))), ' ')
		pair.append($('<span>').addClass('val').append(showupValue(obj[keys[j]], depth - 1)))
		items.append(pair)
	}
	a.append(braceLeft, items, braceRight);
	flex(a);
	return a;
}
function expander(obj){
	var el = $('<a>');
	var shown = false;
	el.text('...');
	el.on('click', function(){
		if(!shown) {
			$(this).empty().append(showupValue(obj, 1));
			shown = true
		}
		return false;
	})
	return el;
}
function showupValue(obj, depth){
	switch(typeof obj){
	 	case 'number' : return span(obj, 'number')
	 	case 'boolean' : return span(obj, 'boolean')
	 	case 'undefined' : return span('undefined', 'undefined')
	 	case 'string' : return span(escapeString(obj), 'string')
	 	case 'function' : return span((obj.name ? '[Function ' + obj.name + ']' : '[Function]'), 'function')
	 	case 'object' : {
	 		if(obj === null) return span('null', 'null')
	 		if(depth <= 0) return expander(obj)
	 		if(obj instanceof Array) return showupArray(obj, depth)
	 		else return showupObject(obj, depth)
	 	}
	}		
}
exports.showup = showupValue