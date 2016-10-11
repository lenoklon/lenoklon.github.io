$(document).ready(function() {

	$("video").prop("volume", 0);

	// var w = $(window).width();
	// if (w<=768) {
	// 	$('.headertop__menu').insertAfter('.headertop__btn');
	// }
	if(window.matchMedia('(max-width: 768px)').matches) {
		$('.headertop__menu ul').hide();
	}

	$(".main_mnu_button").click(function() {
		$(".headertop__menu ul").slideToggle();
	});

	if(window.matchMedia('(max-width: 768px)').matches) {
		$('.headertop__menu').insertAfter('.headertop__btn');
		// $('.video__bg>video').hide();

	}

	// video.addEventListener('canplay', function(e) {
	// 	this.volume = 0.4;
	// 	this.currentTime = 10;
	// 	this.play();
	// }, false



	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	$(".fancybox").fancybox();

	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});

		//Magnific Popup Plugin
	//Documentation: http://dimsemenov.com/plugins/magnific-popup
	$(".popup").magnificPopup({type:"image"});
	// $(".popup_c").magnificPopup();

	// Аякс отправка форм
	// Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.DE",
			data: $("form").serialize()
		}).done(function() {
			alert("Danke für Ihre Anmeldung!");
			setTimeout(function() {
			}, 1000);
		});
		return false;
	});

});

		$(window).load(function() {
	//animate-css.js Plugin. Animate Elements on Scroll
// 	//Example: $(".element").animated("zoomInUp", "zoomOutDown");
$(".top_content h1").animated("fadeInDown", "fadeOut");
$(".top_content h2").animated("fadeInUp", "fadeOut");
$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
$(".profi_item").animated("fadeInRight", "fadeOut");
$(".profi form").animated("zoomInRight", "fadeOut");
$(".verbesser p").animated("fadeInUp", "fadeOut");
$("footer").animated("fadeIn", "fadeOut");
$("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
});