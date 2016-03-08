require('../less/style.less');
let demoDom = document.getElementById('demo');
demoDom.innerHTML = 'innerHTML 123DDD String !!';
setTimeout(function() {
	// require('../less/demo2.less');
	require.ensure([], function() {
		require('./demo2.js');
	});
	demoFun("es6!!");
	let demo = new DemoClass('cain');
	demo.log("hello");
}, 3000);

let demoFun = (str)=>{
	console.log(str);
}

class DemoClass {
	constructor(args) {
		this.name = args;
	}
	log(mess){
		console.log(mess +" " + this.name);
	}
	// methods
}

import ModeView from './mod_demo.js';
// var ModeView = require('./mod_demo.js');
new ModeView('mod_a',$);
// console.log(ModeView.default);