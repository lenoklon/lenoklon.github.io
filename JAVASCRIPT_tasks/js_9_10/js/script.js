// ****jQuery****
$(function () {
	$('.menu li').hover (
		function () {
			$(this).children('ul').slideDown(150);
		},
		function () {
			$('ul', this).slideUp(150); // или так
		}

	);

$("ul.menu li a").hover(function(){
    $(this).animate({color : "#000",
					backgroundColor: "#66ff33"}, 100);
  }, function(){
    $(this).animate({color : "#66ff33",
					backgroundColor: "#000"}, 100);
  });


$('.bxslider').bxSlider({
	video: true,
	useCSS:false,
	auto: true, //автом пролистывание
	// autoControls:true, // возм управления
	// adaptiveHeight: true,  //какая картинка,такая высота
	mode: 'fade',
	captions:true 
});

 	$('#t1').typeIt({
     strings: ["Welcome to my dream!"],
     speed: 125,
     autoStart: false
	});



 	// СКРЫТИЕ LOGIN
	var delay = 500; 
 	$('.signIn form').hide();
 	var titel = $('.signIn h1');
 	$(titel).click(function(e) {
 		var parent = $(event.target).parent();
 		var form = parent.find('form');

 		if ($(form).is(':visible')) $(form).slideUp(delay);
 		else $(form).slideDown(delay);
 			
	});

	$('.select').fancySelect();
	// $("#selectbox").selectbox();

	// $("input[type='checkbox']").uniform();
});

// ****native JS **** doesn't work
// function menu () {
// 	var li = document.getElementByClassName('down');
// 	li.addEventListener('mouseenter', showMenu);
// 	li.addEventListener('mouseleave', hideMenu);

// 	function showMenu () {
// 		var listShow = this.getElementByClassName('submenu');

// 		if (listShow) {
// 			listShow.style.display = 'block';
// 			var nextLi = this.getElementByClassName('submenu');
// 		if (nextLi) {
// 			nextLi.addEventListener('mouseenter', showMenu);
// 		}
// 		}
// 	}

// 	function hideMenu () {
// 		var listHide = this.getElementByClassName('submenu');
// 			if (listHide) {
// 				var fps = 60;
// 				var interval = setInterval (function() {
// 					if (!listHide.style.opacity) {
// 						listHide.style.opacity = 1;
// 					}
// 					listHide.style.opacity = listHide.style.opacity - 0.05;
// 					if (listHide.style.opacity <= 0) {
// 						clearInterval(interval);
// 						listHide.style.opacity = 1;
// 						listHide.style.display = 'none';
// 					}
// 				}, 1000/fps)
// 			}
// 		var nextLi = this.getElementsByClassName('submenu');
// 			if (nextLi) {
// 				nextLi.addEventListener('mouseleave', hideMenu)
// 			}
// 	}

// };

// document.addEventListener('DOMContentLoaded', menu);