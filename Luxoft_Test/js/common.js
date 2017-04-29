$(document).ready(function() {
	// $('.header-nav li a').hover(function(){
	// 	$(this).addClass('header-active');
	// }, function(){
	// 	$(this).removeClass('header-active');
	// })

	/******active_element*******/
	$('.header-nav li a').click(function(){
		if(!$(this).hasClass('header-active')){
			$('.header-nav li a').removeClass('header-active');
			$(this).addClass('header-active');
		}
	});

	/*load news from json-obg using ajax*/
	$.get('mock/news.json', function (data) { /*!!! $ что б заменить стр на обьект?*/
		if($.isArray(data)) {
			for(var i in data) {
				var newsItem = data[i];
			
				/*Cropping text*/
				if(newsItem.text.length > 350) {
					//cropping
					newsItem.croppedText = newsItem.text.substr(0, 350); /*!!! почему мы не обьявляем эту переменную cropped*/
					newsItem.croppedText += ' ...';
				} else {
					newsItem.croppedText = newsItem.text; /*to avoid deleting info*/
				}

				var template = $($('.news-template').html());
				template.find('.news-title').text(newsItem.title);
				template.find('.news-date').text(newsItem.date);
				template.find('.news-text').data('text', newsItem.text)
				.data('croppedText', newsItem.croppedText)
				.text(newsItem.croppedText);

				$('.main-news').append(template);
			}
		}
	});
	
});