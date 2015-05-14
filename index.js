// To build a runnable version, do
// browserify index.js -o index.packed.js

var patel = require('../index');
// var inspect = require('./inspect').inspect;
// var ansiup = require('./ansi-up');
var showup = require('./show-up').showup;

var xs = patel.globals();
var gs = new patel.Scope(xs);
gs.declare('trace');
gs.declare('print');
gs.declare('trace_here');
gs.declare('print_here');
gs.declare('$$GLOBALSCOPE$$');
gs.declare('dump-globals');
gs.declare('create-panel');
gs.declare('$');

var sandbox = {
	'dump-globals' : function(){ return sandbox },
	'$' : $
};

function clamp(x, l, h){
	if(x < l) return l;
	if(x > h) return h;
	return x;
}

function evaluate(ast){
	var resultInfo = {};
	var xast = patel.ex(ast, gs);

	var wrap = ['.begin'];
	gs.declarations.forEachOwn(function(id, decl){
		if(id !== '$$GLOBALSCOPE$$') wrap.push(['.set', gs.use(id), ['.', gs.use('$$GLOBALSCOPE$$'), ['.quote', id]]])
	});

	xast = wrap.concat([xast]);

	patel.checkEvaluated(xast);
	var rast = patel.regularize(xast, gs, function(ret){
		var wrap = ['.begin'];
		gs.declarations.forEachOwn(function(id, decl){
			if(id !== '$$GLOBALSCOPE$$') wrap.push(['.set', ['.', gs.use('$$GLOBALSCOPE$$'), ['.quote', id]], gs.use(id)])
		});
		return wrap.concat([['.return', ret]])
	}, true);
	console.log(rast);
	var tast = patel.pat2esc(rast, gs);
	var result = patel.generateCode(tast);
	console.log(result)
	return new Function(gs.castName('$$GLOBALSCOPE$$'), result).call(sandbox, sandbox)
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
	var pendingExecution  = false;
	var inputAreaContentModified = false;

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
			insertAtCaret(inputArea, "\n" + getCurrentLineBlanks(inputArea));
		} else if(e.key === 'Tab' || e.keyCode === 9){
			e.preventDefault();
			insertAtCaret(inputArea, '    ');
		};
		heightResizer.tick();
	}, false);

	inputArea.addEventListener('keyup', function(e){
		// Execution handler mechanism
		pendingExecution  = false;
		if(!inputAreaContentModified && (e.key === "Up Arrow" || e.keyIdentifier === "Up Arrow" || e.keyCode === 38)){
			e.preventDefault();
			inputArea.value = inputHistory[(historyIndex = clamp(historyIndex - 1, 0, inputHistory.length - 1))];
			heightResizer.tick();
		} else if(!inputAreaContentModified && (e.key === "Down Arrow" || e.keyIdentifier === "Down Arrow" || e.keyCode === 40)){
			e.preventDefault();
			inputArea.value = inputHistory[(historyIndex = clamp(historyIndex + 1, 0, inputHistory.length - 1))];
			heightResizer.tick();
		} else if(!inputAreaContentModified && (e.key === "Home" || e.keyIdentifier === "Home" || e.keyCode === 36)){
			e.preventDefault();
			inputArea.value = inputHistory[(historyIndex = 0)];
			heightResizer.tick();
		} else if(!inputAreaContentModified && (e.key === "End" || e.keyIdentifier === "End" || e.keyCode === 35)){
			e.preventDefault();
			inputArea.value = inputHistory[(historyIndex = inputHistory.length - 1)];
			heightResizer.tick();
		} else if(e.key === "Enter" || e.keyIdentifier === "Enter" || e.keyCode === 13) {
			if(getCaretPos(inputArea) >= inputArea.value.length) {
				e.preventDefault();
				if(!prepareExecution(inputArea)){
					inputArea.value = '';
				}
			}
		} else if(!(
			e.key === "Alt" || e.keyIdentifier === "Alt" || e.keyCode === 18 ||
			e.key === 'Shift' || e.keyIdentifier === 'Shift' || e.keyCode === 16 ||
			e.key === 'Control' || e.keyIdentifier === 'Control' || e.keyCode === 17
		)){
			inputAreaContentModified = true;
		}
	}, false);

	var inputHistory = [];
	var historyIndex = 0;
	function prepareExecution(inputArea){
		pendingExecution = true;
		var input = inputArea.value.trimRight();
		try {
			$('#incomingSyntaxError').removeClass('active');
			var ast = patel.parse(input + '\n\n\n');
			setTimeout(function(){ 
				if(inputHistory[inputHistory.length - 1] !== input) inputHistory.push(input);
				resetInput();
				run(input, ast)
			}, 0);
		} catch(e) {
			console.log(e)
			if(!e.found) return true;	// Parser throws error at the end of the input
			                         	// indicates incomplete input
			// Otherwise, report a syntax error
			$('#incomingSyntaxError').addClass('active');
			$('#incomingSyntaxError').css({top: ((e.line - 1) * 1.5 + 0.5) + 'em'})
			return true;
		}
	};
	function resetInput(){
		pendingExecution = false;
		inputAreaContentModified = false;
		historyIndex = inputHistory.length;
	}
	// EXECUTION AND REPORTING

	var n = 0;
	var runningReport = null;
	function traceInto(report, content, cls){
		report.append($('<pre>').append($('<div>').append(showup(content, 3)).addClass('trace')).addClass(cls));
	}
	function printInto(report, content, cls){
		report.append($('<pre>').text(content).addClass(cls));
	}

	function run(input, ast){
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
		sandbox['create-panel'] = function(){ 
			var div = $('<div>');
			runningReport.append(div);
			return div
		};

		// evaluate pass
		try {
			result = evaluate(ast);
		} catch(e) {
			correct = false;
			err = e;
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