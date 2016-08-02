
$(document).ready(function () {
	$('.container__slider').slick();
	$('.slider_main').slick({
		slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive:[
	  	{
	  		breakpoint:489,
	  		settings: {
	  			slidesToShow:2
	  		}
	  	},
	  	
	  ]
	});


	$('.header__list').slicknav({
		prependTo:'.header__mobile_menu'
	});

});