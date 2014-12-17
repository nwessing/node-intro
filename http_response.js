function html (response, htmlString) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(htmlString);
	response.end();
}

function notFound (response) {
	response.writeHead(404, {'Content-Type': 'text/html'});
	response.write("File not found");
	response.end();
}

function json (response, object) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.write(JSON.stringify(object));
	response.end();
}

function javascript (response, js) {
	response.writeHead(200, {'Content-Type': 'application/javascript'});
	response.write(js);
	response.end();
}

exports.html = html;
exports.notFound = notFound;
exports.json = json;
exports.javascript = javascript;