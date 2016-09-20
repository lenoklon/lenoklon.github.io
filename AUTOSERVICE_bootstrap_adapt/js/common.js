$(document).ready(function() {

	//ВСПЛЫВАШКА С КАРТИНКАМИ
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	// ЧТО Б КАРТИНКИ ЛИСТАЛИСЬ
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



	/*добавляем новый div (after) в DOM*/
	$('.service_item_wrap ul').each(function() {
		$(this).after('<div class="service_item_wrap_after"></div>');
	});

	 /*добавляем треугольник*/
	$('li .service_toggle').click(function() {

		if($(this).parent().parent().children('.service_toggle_hidden').is(':visible')) {
			$(this).parent().parent().children('.service_toggle_hidden').slideUp();
			$(this).parent().parent().children('.service_item_wrap_after').hide();
		} else {

			 $('.service_toggle_hidden, .service_item_wrap_after').hide();
			 $('.service_item_wrap').removeClass('active');
			 $(this).parent().parent().addClass('active');
			 $(this).parent().parent().children('.service_toggle_hidden').slideDown();
			$(this).parent().parent().children('.service_item_wrap_after').show(0);
		}
	});


	// ВЫРАВНИВАНИЕ ВСЕХ ЭЛЕМЕНТОВ ПОД ОДНУ ВЫСОТУ
	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".home_item_wrap, .rep_content>div"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});



	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Danke für Ihre Bewerbung!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});

