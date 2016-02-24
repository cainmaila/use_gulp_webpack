require('../less/style.less');
let demoDom = document.getElementById('demo');
demoDom.innerHTML = 'innerHTML 123DDD String !!';
setTimeout(function() {
	// require('../less/demo2.less');
	require.ensure([], function() {
		require('./demo2.js');
	});

}, 3000);