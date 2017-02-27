$(document).ready(function() {
	// $('.fotorama').fotorama({ 
	// 	navposition: 'bottom', 
	// 	navwidth: '100%', 
	// 	nav: 'thumbs', 
	// 	width: '100%', 
	// 	maxheight: '300', 
	// 	allowfullscreen: true, 
	// 	loop: true, 
	// 	keyboard: true, 
	// 	thumbmargin: 5 
	// });
	$(".carousel").owlCarousel({
		loop:true,
		autoplay:true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".header__nav .header__nav_list").slideToggle();
		return false;
	});
	
	$(".sp__slider").owlCarousel({
		loop:true,
		responsive : {
			960 : {
				items : 6,
				nav : true
			}
		},
		navText : ""
	});
	$(".release__slider").owlCarousel({
		loop:true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});
	 $('.prop__nav a').click(function (e) {
	        e.preventDefault();
	        $('.prop__nav .active').removeClass('active');
	        $(this).addClass('active');
	        var tab = $(this).attr('href');
	        $('.tab').not(tab).css({'display': 'none'});
	        $(tab).fadeIn(400);
	 });

	//Попап менеджер FancyBox
	$(".fancybox").fancybox();

	$("video").prop("volume", 0);

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});



	//Header Window Full Size
	function wResize() {
		$("header.main_header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	//Google Analytics Goals
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		return true;
	}));

	

$(window).load(function() {
	//animate-css.js Plugin. Animate Elements on Scroll
	//Example: $(".element").animated("zoomInUp", "zoomOutDown");
	$("h1").animated("fadeInUp", "fadeInUp");
	$(".profi_item, h3").animated("fadeInRight", "fadeInRight");
	$(".adv__item, .catalog__wrap").animated("zoomInUp", "zoomInUp");
	$("footer,  .con-padding").animated("pulse", "pulse");

});

$(document).ready(function() {
	resizeWindow();
});