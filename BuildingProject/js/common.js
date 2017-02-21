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
	// $(function () {
	// 	$('.fotorama').fotorama();
	// });
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

	//Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));


	//Tabs Elements
	// $(".tab:first-child").addClass("active");
	// $(".tab").click(function() {
	// 	var dt = $(this).data("tabs");
	// 	$(".tab[data-tabs=" + dt + "]").removeClass("active").eq($(this).index()).addClass("active");
	// 	$(".tab_item[data-tabs=" + dt + "]").hide().eq($(this).index()).show()
	// }).eq(0).addClass("active");



	//Magnific Popup Plugin
	//Documentation: http://dimsemenov.com/plugins/magnific-popup
	// $(".popup").magnificPopup({type:"image"});
	// $(".popup_c").magnificPopup();

	//Stellar Plugin
	//Documentation: https://github.com/markdalgleish/stellar.js
	// $.stellar({
	// 	responsive: true,
	// 	horizontalOffset: 60
	// });



	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	// $.stellar({
	// 	horizontalScrolling: false,
	// 	verticalOffset: 40
	// });

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".element";
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	// function carousel_1() {
	// 	var owl = $(".carousel");
	// 	owl.owlCarousel({
	// 		items : 1,
	// 		loop : true,
	// 		autoHeight : true,
	// 		dots : true,
	// 		singleItem : true
	// 	});
	// 	owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 		if (e.deltaY > 0) {
	// 			owl.trigger("owl.prev");
	// 		} else {
	// 			owl.trigger("owl.next");
	// 		}
	// 		e.preventDefault();
	// 	});
	// 	$(".next_button").click(function() {
	// 		owl.trigger("owl.next");
	// 	});
	// 	$(".prev_button").click(function() {
	// 		owl.trigger("owl.prev");
	// 	});
	// 	owl.on("resized.owl.carousel", function(event) {
	// 		var $this = $(this);
	// 		$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
	// 	});
	// 	setTimeout(function() {
	// 		owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
	// 	}, 5000);
	// };
	// carousel_1();


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

//Ajax Forms
	//Documentation: http://api.jquery.com/jquery.ajax/
	//$("form").submit(function(e) {
		//var ths = $(this);
		//e.preventDefault;
		//$.ajax({
		//	type: "POST",
		//	url: "mail.php",
		//	data: $(this).serialize()
	//	}).done(function() {
		//	alert("Thank You!");
		//	setTimeout(function() {
		//		var magnificPopup = $.magnificPopup.instance; 
		//		magnificPopup.close();
		//		ths.trigger("reset");
		//	}, 1000);
	//	});
	//	return false;
	//});



	$(".s_contacts .tab").click(function() {
		init();
	});

	//End Google Maps settings

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

	


//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$(".profi_item .row").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});


$(window).load(function() {

	//Preloader
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	//animate-css.js Plugin. Animate Elements on Scroll
	//Example: $(".element").animated("zoomInUp", "zoomOutDown");
	$(".top_header h1").animated("fadeInDown", "fadeOut");
	$(".top_header h2").animated("fadeInUp", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s_pofi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$(".other_langs").animated("fadeIn", "fadeOut");
	$("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");

});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);