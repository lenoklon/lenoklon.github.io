
 $(function() {
	$('.feedback__slide_wrap').slick({
		// arrows:false
	});

	$('.header__menu').click(function() {
		$('.header__top_nav-list').fadeToggle(400);
		// $('.header__top_nav-list').slideToggle(400);
	});


	$(".fa-search").click(function() {
		$("form").fadeToggle(400);
	});

});