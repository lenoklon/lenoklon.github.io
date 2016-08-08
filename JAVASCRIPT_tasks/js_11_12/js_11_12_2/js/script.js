$(function () {
	

	var template = $('#page').html();  /*creating template*/

	var info = {       /*our content*/

		
	        title: 'Australia',
	        pics: {
	            src: ['img/1.jpg',
		            'img/2.jpg',
		            'img/3.jpg'],

	            alt:['aus1','aus2', 'aus3']
	        },

	        item: "Reasons which make this country special:",

	        reasons: ['surfing;',
	            'Sydney;',
	            'surfing;:))'],


	        linkT: 'Watch more here:',
	        video: 'https://www.youtube.com/watch?v=Vgj70MSUFho',

	        addT: 'And here:',
	        addVideo: 'https://www.youtube.com/watch?v=42kpC3aMWgA',
	        conclusion: 'Welcome to Australia!'
   	 };

	
	 var content = tmpl(template, info);  /*adding info in tmpl in code*/

    $('.aus').append(content);


    /*LoDash*/

    var template = $('#page').html();
    var content = _.template(template)(info);
    var h2 = $('.aus').append('<h2>LoDash</h2>');

    h2.css("text-align", "center");
    $('.aus').append(content);

});
