var server = require('./server');
var router = require('./router');
var fs = require('fs');
var httpResponse = require('./http_response');

server.start();

router.addRoute('/', function (request, response) {
	fs.readFile('./views/index.html', function (error, data) {
		httpResponse.html(response, data);
	});
});

router.addRoute('/execution/model/', function (request, response) {
	httpResponse.json(response, [
		'Single threaded',
		'Event driven programming',
		'Make use of asynchronous programming and promises to prevent blocking'
	]);
});

router.addRoute('/what/is/node/', function (request, response) {
	httpResponse.json(response, [
		'Command line tool used to run javascript (node app.js in the command prompt)',
		'Javascript code is executed by the V8 Javascript engine (same one google chrome uses)',
		'Javascript API provided for networking and filesystem',
		'No DOM API (node is decoupled from the browser)'
	]);
});

router.addRoute('/sources/', function (request, response) {
	httpResponse.json(response, [
		{ name: 'NodeJS', url: 'http://nodejs.org/'},
		{ name: 'npm', url: 'https://www.npmjs.com/'},
		{ name: 'Understanding node js', url: 'http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb'},
		{ name: 'The Node Beginner Book', url: 'http://www.nodebeginner.org/'}
	]);
});

router.addRoute('/js/client.js', function (request, response) {
	fs.readFile('./client_js/client.js', function (error, data) {
		httpResponse.javascript(response, data);
	});
});

router.addRoute('/js/jquery.js', function (request, response) {
	fs.readFile('./node_modules/jquery/dist/jquery.js', function (error, data) {
		httpResponse.javascript(response, data);
	});
});