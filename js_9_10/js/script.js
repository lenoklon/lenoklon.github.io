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

// ***$.color***используем функцию animate, например при наведении мыши


$(".menu a").mouseenter(
  function () {
	$(this).animate({
		color:"#03C",
    }, 500 );
});

$(".menu a").mouseleave(function() {
	$(this).animate({
		color:"#66ff33",
    }, 500 );
});


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