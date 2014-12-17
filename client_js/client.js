$(function () {
	function populateList(listSelector, items) {
		items.forEach(function (item) {
			$(listSelector).append('<li>' + item + '</li>');
		});
	}

	$.get('/what/is/node/', function (result) {
		populateList('#what-is-node', result);
	});

	$.get('/execution/model/', function (result) {
		populateList('#execution-model', result);
	});

	$.get('/sources/', function (result) {
		result.forEach(function (item) {
			$('#sources').append('<li><a href="' + item.url +'">' + item.name + '</a>');
		});
	});
});