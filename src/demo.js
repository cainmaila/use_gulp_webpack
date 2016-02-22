require('../less/style.less');
let demoDom = document.getElementById('demo');
demoDom.innerHTML = 'innerHTML String !!';
setTimeout(function () {
	require('../less/demo2.less');
	require('./demo2.js');
},5000);