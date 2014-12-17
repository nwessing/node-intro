var httpResponse = require('./http_response');

var routes = {};

var route = function (pathname, request, response) {
	console.log('About to route a request for ' + pathname);
	var handler = routes[pathname];

	if (typeof handler !== 'function') {
		console.log('No handler found.');
		httpResponse.notFound(response);
		return;
	}

	handler(request, response);
};

var addRoute = function (pathname, handler) {
	routes[pathname] = handler;
};

exports.route = route;
exports.addRoute = addRoute;