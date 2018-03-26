'use strict';

		//hide/show
$(document).ready(function () {
	$('.route__btn').on('click', function() {
		var text = $(this).siblings('.route__text')[0]; 
		$(text).find('.route__short, .route__full').toggle('100');
		
		if ($(this).html() === 'read more') {
			$(this).html('hide');
		} else {
			$(this).html('read more');
		}
	});
	$('.route__btn').hover(function() {
		$(this).closest('.route').css('background-color', '#fcc36e').find('.route__short').css('color', '#fff');

	}, function() {
		$(this).closest('.route').css('background-color', '#fff').find('.route__short').css('color', '#8b8b8b');
	});

	$('.hamburger').click(function() {
		$('.nav__menu').slideToggle(400);
	});
	
});

/*.route__btn:hover .route {
	background: #70d9d5important
	color: #fff;
}*/
			//attr
/*$(document).ready(function () {
	$('.route__btn').on('click', function() {
		var text = $(this).siblings('.route__text')[0];
		var attrbuteText = $(text).data('text'); //выбрали текст из атр
		var visibleText = $(text).html(); 
		$(text).html(attrbuteText);		// вставл текст из атр
		$(text).data('text', visibleText);  //меняем местами

		if ($(this).html() === 'read more') {
			$(this).html('hide');
		} else {
			$(this).html('read more');
		}
		
	});
});*/


		/***cutting height****/

 /* $(document).ready(function () {
	$('.route__btn').on('click', function() {
		var text = $(this).siblings('.route__text')[0];
		
		//if (textHeight === 'none') {
		//	textHeight = 47;
		//} else {
		//	textHeight = 'none';
		//}

		var textHeight = $(text).css('maxHeight') === 'none' ? 47 : 'none';
		$(text).css('maxHeight', textHeight).html();  
		//$(text).css('maxHeight', textHeight).css('whiteSpace', (textHeight === 'none') ? 'normal':'nowrap'); 

		if (textHeight === 'none') {
			$(this).html('hide');
		} else {
			$(this).html('read more');
		}
	});
}); */
