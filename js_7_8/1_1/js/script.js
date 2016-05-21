var delay = 500;

$(function () {  

	$('.tab_item').not(':first').hide(); // прячем все tab_item в начале - кроме первого

	$('.wrap .tab').click(function() { //вешаем событие на tab 

		$('.wrap .tab').removeClass('active').eq($(this).index()).addClass('active');  // у текущего элемента добавляем .active - (у одного убирается, а у текущего добавляется)
		
		$('.tab_item').hide().eq($(this).index()).fadeIn()  // содержимое таба прячется кроме элемента у которого такой же индекс как вкладка на которую мы кликаем
	}).eq(0).addClass('active');    //у текущей вкладки появляется .active

	$('.tab_content p').hide();

	var title = $('.tab_item h1');

	$(title).click(function(e) {
		var parent = $(event.target).parent(); // получаем доступ к парент...тоесть tab_item
		var p = parent.find('p');

		if ($(p).is(':visible')) $(p).slideUp(delay);
		
		else $(p).slideDown(delay) ;
		
	});

});

