var delay = 500;

$(function() {

	//скрываем все контенты
	$('.tab_item').hide();

	//показываем наш 1й контент
	$('.tab_item:first').show();
	
	//активируем нашу первую вкладку (таб)
	$('.tabs li:first').addClass('active');

	// вешаем jQuery пр клике на tab
	$('.tabs li').click(function(e) {

		// удаляем все активные элементы в наших кнопках li
		$('.tabs li').removeClass('active');   //без этого у нас будет несколько активных элементов

		//делаем активный элемент только на который мы кликнули
		$(this).addClass('active');

		$('.tab_item').hide();

		//записываем в переменную значение нашего атрибута href
		var selectTab = $(this).find('a').attr('href');

		// вешаем на эту переменную метод fadeIn - исчезновение и появление нашего контента
		$(selectTab).slideToggle();

	});
		$('.tab_content p').hide(); // прячем все p

		var titels = $('.tab_item h1');

		$(titels).click(function(e) {
			var parent = $(event.target).parent(); // получаем доступ к парент...тоесть tab_item
			var p = parent.find("p");

		if ($(p).is(":visible")) $(p).slideUp(delay);
		// РАССКРЫВАЕМ
		else $(p).slideDown(delay) ;
			
		});


});