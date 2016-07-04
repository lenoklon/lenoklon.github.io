$(function () {
	
	var html = $('#test').html(); //берем содержимое этого тега
	var data = {    
		title: 'Hello World'
	};

	var content = tmpl(html, data); 

	$('body').append(content);

});





