/*CLASS WORK*/

$(function () {
	/*--------from HTML------------
	var template = $('#test').html();

	console.log('template = ', template);

	$('body').append(template);*/


	/*------dynamically as object---

	var html = $('#test').html();

	var data = {

		title: 'hello'
	};

	var content = tmpl(html, data);

	$('body').append(content);*/

	/*adding object in HTML*/

	var html = $('#test').html();  /*сам шаблон*/

	var articles = [        /*инфо*/

		{
			
			title: 'Article 1',
			content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		
		},

		{
			title:'Article 2',
			content:'Lorem ipsumxpedita tenetur rerum, alias mollitia laborum quia eos vitae, perspiciatis quae. Ut quae, odio! Possimus, a?'
		},

		{
			title:'Article 3',
			content:'Lorem ipsum doloita tenetur rerum, alias mollitia laborum quia eos vitae, perspiciatis quae. Ut quae, odio! Possimus, a?'
		}
	];

	var content = tmpl(html, {    /*генерируем контент с помощью вызова шаблонизатора*/
		data:articles
	});

	$('body').append(content);

});
