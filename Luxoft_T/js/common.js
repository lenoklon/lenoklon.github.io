$(document).ready(function() {

	$(".sandwich, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	// $('.toggle-menu').click(function() {
	// 	$('.top-menu').toggleClass('active');
	// })
					// sandwich
	$('.top-menu ul a').click(function() {
		$('.top-menu').fadeOut(600);
		$('.sandwich').toggleClass('active');
	}).append('<span>');

					// top-menu
	$('.toggle-menu').click(function() {
		if ($('.top-menu').is(':visible')) {
			// $('body').addClass('overflow');
			$('.top-menu').fadeOut(600);
			$('.top-menu li a').removeClass('rotateIn animated');
		} else {
			$('.top-menu').fadeIn(600);
			// $('body').removeClass('overflow');
			$('.top-menu li a').addClass('rotateIn animated');
		}
	});


});