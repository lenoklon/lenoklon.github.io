// $(function(){
// 	$('.header__menu').slicknav();
// });


$(document).ready(function() {

			// ***slider***
	$('.slider__wrap').slick({
		dots:false
	});

			// ***adaptive menu***

	$('.header__menu').slicknav({
		prependTo: '.mobile__menu'
	});

	// $('.slicknav_menu').addClass('clearfix');

	$('.slicknav_btn').append('<i class="fa fa-bars" aria-hidden="true"></i>');

});


