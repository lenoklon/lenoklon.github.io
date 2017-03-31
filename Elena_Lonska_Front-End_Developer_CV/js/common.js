$(document).ready(function() {
	// H header = H screen
	function heightDetect() {
		$('.main-head').css('height', $(window).height());
	};

	// height = 100 vh; - высота монитора
	// min-height указывать
	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

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

				// ****animation****
	$('.top-text h1, .section-header').animated('fadeInDown', 'fadeOutUp');
	$('.section-header').animated('zoomIn', 'zoomIn');
	$('.animation_left').animated('fadeInLeft', 'fadeOutLeft');
	$('.animation_up').animated('fadeInUp', 'fadeOutUp');
	$('.animation_right').animated('fadeInRight', 'fadeOutRight');
	// $('.work-item').animated('fadeInLeft', 'fadeOutLeft');
	$('.top-text p').animated('fadeInUp', 'fadeOutDown');

					// ****form validation****
	$(" input, textarea").jqBootstrapValidation();

	$(".top-menu ul li a").mPageScroll2id();

	// *************SLIP-HOVER**************
	// $(".top-menu li").sliphover({
	// 	target: 'a',
	// 	backgroundColor: 'rgba(255, 255, 255, .1)',
	// 	reverse: false
	// }
	// );
	//Попап менеджер FancyBox
	$(".fancybox").fancybox();

});

// *************LOADER************
$(window).load(function() {
  $(".loader-inner").fadeOut();
  $(".loader").delay(400).fadeOut("4");
});