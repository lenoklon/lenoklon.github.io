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
		}
	}

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
	$("li.awards__item").animated("fadeInRight", "fadeOut");
	$("h2, h3").animated("fadeInRight", "fadeOut");
	$("h1").animated("fadeInUp", "fadeOut");
	$(".content__info p").animated("fadeInRight", "fadeOut");
	$(".descr__item").animated("fadeInRight", "fadeOut");
	$(".trainer_apply form").animated("fadeInRight", "fadeOut");
	$("h4").animated("flipInY", "fadeOut");
});