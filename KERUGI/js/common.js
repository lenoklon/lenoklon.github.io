$(document).ready(function() {

	$("video").prop("volume", 0);

	


	// if(window.matchMedia('(max-width: 768px)').matches) {
	// 	$('.headertop__menu ul').hide();
	// }

	$(".main_mnu_button").click(function() {
		$(".headertop__menu ul").slideToggle();
	});

	// window.onresize = function(){
	// 	if(document.documentElement.clientWidth < 768) 
	// 		$('.headertop__menu').insertAfter('.headertop__btn'); 
	// }

	window.onresize = function(){
		if(document.documentElement.clientWidth < 768) { 
			$('.headertop__menu').insertAfter('.headertop__btn'); 
			$('.headertop__menu ul').hide(); 
		} else {
			$('.headertop__menu ul').show(); 
		}}









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
// $(".content__awards").animated("fadeInUp", "fadeOut");
// $(".tabs_header .wrapper").animated("flipInY", "fadeOut");
// $(".profi_item").animated("fadeInRight", "fadeOut");


// $(".content__info h1").animated("zoomInRight", "fadeOut");
// $(".verbesser p").animated("fadeInUp", "fadeOut");
// $("footer").animated("fadeIn", "fadeOut");
// $("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
});