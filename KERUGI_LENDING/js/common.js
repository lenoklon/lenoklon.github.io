$(document).ready(function() {

	$("video").prop("volume", 0);

	$(".main_mnu_button").click(function() {
		$(".headertop__menu ul").slideToggle();
	});

	if(document.documentElement.clientWidth < 768) {
		$('.headertop__menu').insertAfter('.headertop__btn');
		$('.headertop__menu ul').hide();
	} else {
		$('.headertop__menu ul').show();
	}
	// window.onresize = function(){
		
	// }

	$('.train wrap img').click(function() {
		$('.service_toggle_hidden').fadeToggle(400);
	})

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

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/

	// if(document.documentElement.clientWidth <1100) {
	// 	$(".carousel").owlCarousel({
	// 	loop:true,
	// 	responsive : {
	// 		0 : {
	// 			items : 3,
	// 			nav : true
	// 		}
	// 	},
	// 	navText : ""
	// });
	// } else {
	// 	$(".carousel").owlCarousel({
	// 		loop:true,
	// 		responsive : {
	// 			0 : {
	// 				items : 4,
	// 				nav : true
	// 			}
	// 		},
	// 		navText : ""
	// 	});
	// }
	


	$(".carousel").owlCarousel({
		loop:true,
		responsive : {
			1200 : {
				items : 4,
				nav : true
			},
			1000 : {
				items : 3,
				nav : true
			},
			480 : {
				items : 2,
				nav : true
			},
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	$(".carousel__feedback").owlCarousel({
		loop:true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			},
			480 : {
				items : 2,
				nav : true
			}
		},
		navText : ""
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

	// **********My PLAGIN to SLIDER - TABS**********

	$('.train__wrap:first').addClass('active');
	$('.service_toggle_hidden').hide();
	$('.service_toggle_hidden:first').fadeIn('slow');
	$('.train__wrap').on('click',function(){
		$('.train__wrap').removeClass('active');
		$(this).addClass('active');
		$('.service_toggle_hidden').hide();
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn('slow');
		return false;
	});

});

$(window).load(function() {
	$("li.awards__item").animated("fadeInRight", "fadeOut");
	$("h2, h3").animated("fadeInRight", "fadeOut");
	$("h1").animated("fadeInUp", "fadeOut");
	$(".content__info p").animated("fadeInRight", "fadeOut");
	// $(".descr__item").animated("fadeInRight", "fadeOut");
	// $(".trainer_apply form").animated("fadeInRight", "fadeOut");
	$(".trainers h4").animated("flipInY", "fadeOut");
});
