// To build a runnable version, do
// browserify index.js -o hindex.js

var patel = require('../index');
var inspect = require('./inspect').inspect;
var ansiup = require('./ansi-up');

var xs = patel.globals();
var gs = new patel.Scope(xs);
gs.declare('trace');
gs.declare('print');
gs.declare('globals');

var sandbox = {};

function evaluate(input){
	input += '\n\n\n';
	var resultInfo = {};
	var ast = patel.parse(input);
	var xast = patel.ex(ast, gs);

	var wrap = ['.begin'];
	gs.declarations.forEachOwn(function(id, decl){
		if(id !== 'globals') wrap.push(['.set', gs.use(id), ['.', gs.use('globals'), ['.quote', id]]])
	});

	xast = wrap.concat([xast]);

	patel.checkEvaluated(xast);
	var rast = patel.regularize(xast, gs, function(ret){
		var wrap = ['.begin'];
		gs.declarations.forEachOwn(function(id, decl){
			if(id !== 'globals') wrap.push(['.set', ['.', gs.use('globals'), ['.quote', id]], gs.use(id)])
		});
		return wrap.concat([['.return', ret]])
	}, true);
	console.log(rast);
	var tast = patel.pat2esc(rast, gs);
	var result = patel.generateCode(tast);
	console.log(result)
	return new Function(gs.castName('globals'), result).call(sandbox, sandbox)
};

(function(){

	var inputArea = $('#incoming')[0];
	var existingResults = $('#existing-results');

	function getCaretPos(txtarea){
		var strPos = 0;
		if (txtarea.selectionStart >= 0) { 
			strPos = txtarea.selectionStart 
		} else { 
			txtarea.focus();
			var range = document.selection.createRange();
			range.moveStart('character', -txtarea.value.length);
			strPos = range.text.length;
		};
		return strPos;
	}

	function insertAtCaret(txtarea, text) {
		var strPos = getCaretPos(txtarea);

		var front = txtarea.value.slice(0, strPos);  
		var back = txtarea.value.slice(strPos); 
		txtarea.value = front + text + back;
		strPos = strPos + text.length;
		if (txtarea.selectionStart >= 0) { 
			txtarea.selectionStart = strPos;
			txtarea.selectionEnd = strPos;
			txtarea.focus();
		} else {
			txtarea.focus();
			var range = document.selection.createRange();
			range.moveStart ('character', -txtarea.value.length);
			range.moveStart ('character', strPos);
			range.moveEnd ('character', 0);
			range.select();
		}
	}

	function getCurrentLineBlanks(obj) {
		var pos = getCaretPos(obj);
		var str = obj.value;
		var i = pos-1;
		while (i>=0) {
			if (str.charAt(i) == '\n')
				break;
			i--;
		}
		i++;
		var blanks = "";
		while (i < str.length) {
			var c = str.charAt(i);
			if (c == ' ' || c == '\t')
				blanks += c;
			else
				break;
			i++;
		}
		return blanks;
	}

	var resizeInput = function(){
		inputArea.style.height = (inputArea.scrollHeight - 16) + 'px';
	}

	var enterDown = false;
	var justExec  = false;

	var heightResizer = function(){
		var handler = null;
		var lRecord = 0;
		var doResize = function(){
			//var scrollPos = $('master').scrollTop;
			var ln = inputArea.value.length;
			if(ln < lRecord){
				inputArea.style.height = '0';
			};
			lRecord = ln;
			resizeInput();
			//$('master').scrollTop = scrollPos;
			handler = null
		}
		var tick = function(){
			if(handler){ clearTimeout(handler) }
			handler = setTimeout(doResize);
		}
		return {tick: tick}
	}();

	inputArea.addEventListener('keydown', function(e){
		// Input box resizing mechanism
		if(e.key === 'Enter' || e.keyCode === 13){
			e.preventDefault();
			if(!(e.shiftKey || e.ctrlKey) && !justExec){ // entering an ENTER
				insertAtCaret(inputArea, "\n" + getCurrentLineBlanks(inputArea));
			}
			enterDown = true;
		} else if(e.key === 'Tab' || e.keyCode === 9){
			e.preventDefault();
			insertAtCaret(inputArea, '\t');
		};
		heightResizer.tick();
	}, false);

	inputArea.addEventListener('keyup', function(e){
		// Execution handler mechanism
		justExec  = false;
		if(e.key === 'Enter' || e.keyIdentifier === 'Enter' || e.keyCode === 13){
			enterDown = false;
			if(e.shiftKey || e.ctrlKey) {
				e.preventDefault();
				setTimeout(run, 0);
				justExec = true
			}
		} else if(e.key === 'Shift' || e.keyIdentifier === 'Shift' || e.keyCode === 16 ||
		          e.key === 'Control' || e.keyIdentifier === 'Control' || e.keyCode === 17){
			if(enterDown) {
				e.preventDefault();
				setTimeout(run, 0);	
				justExec = true    		
			}
		}
	}, false);

	var n = 0;
	var runningReport = null;

	function traceInto(report, content, cls){
		report.append($('<pre>').html(ansiup.ansi_to_html(ansiup.escape_for_html(inspect(content, {colors: true})))).addClass(cls));
	}
	function printInto(report, content, cls){
		report.append($('<pre>').text(content).addClass(cls));
	}

	function run(){
		justExec = false;
		var input = inputArea.value;
		n++;
		var correct = true;
		var result, err;
		var report = $('<div>').addClass('report');
		runningReport = report;
		report.append($('<label>').text('In [' + n + ']:').addClass('input'));
		printInto(report, input, 'input');

		// reset print and trace for sandbox
		sandbox.print = function(x){
			if(runningReport) printInto(runningReport, x, 'output')
			return x
		};
		sandbox.trace = function(x){
			if(runningReport) traceInto(runningReport, x, 'output')
			return x;
		};
		sandbox.print_here = function(x){
			printInto(report, x, 'output')
			return x
		};
		sandbox.trace_here = function(x){
			traceInto(report, x, 'output')
			return x;
		};

		// evaluate pass
		try {
			result = evaluate(input);
			inputArea.value = '';
		} catch(e) {
			correct = false;
			err = e;
			inputArea.value = input;
		};
		
		report.append($('<label>').text('Out [' + n + ']:').addClass('output'));
		if(correct){
			traceInto(report, result, 'output');
		} else {
			traceInto(report, err, 'wrong');
		}
		existingResults.append(report);

		$('#label-for-input').text('In [' + (n + 1) + ']:')
	}
	
	window.onload = function(){
		resizeInput();
		inputArea.focus();
	};
})();

window.evaluate = evaluate