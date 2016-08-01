
$(document).ready(function () {
	$('.container__slider').slick();
	$('.slider_main').slick({
		slidesToShow: 4,
	  slidesToScroll: 1
	});


	$('.header__list').slicknav({
		prependTo:'.header__mobile_menu'
	});

});