
$(document).ready(function () {
	$('.container__slider').slick();
	$('.slider_main').slick({
		slidesToShow: 3,
	  slidesToScroll: 2,
	  responsive:[
	  	{
	  		breakpoint:489,
	  		settings: {
	  			slidesToShow:2
	  		}
	  	},

	  	{
	  		breakpoint:700,
	  		settings: {
	  			slidesToShow:3
	  		}
	  	}
	  	
	  ]
	});


	$('.header__list').slicknav({
		prependTo:'.header__mobile_menu'
	});

});