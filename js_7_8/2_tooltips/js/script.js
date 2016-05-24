$(document).ready(function () {
	
	var $parent,
		windowWidth,
		windowHeight;

	//ф-я, с помощью коорой мы получим размеры окна
	//get window size
	function winSize() {
		windowWidth = $(window).width();  // сохраняем значение окна
		windowHeight = $(window).height();
	}
	// вызываем ф-ю как только документ загрузится
	winSize();
	//используя метод resize вызываем ф-ю как пользователь изменит размеры окна

	$(window).resize(winSize);
	
	//подсказка пр наведении на кнопку - HOVER
	//1я ф-я когда наводят
	//2я когда мышка покидает пределы документа
	$('.tooltip').each(function() {

	//находим близжайший родительский элемент и добавляем событие hover
		$(this).parent().hover(function() {
			//this - это уже родительский эл
			//с помощью  метода fadeIn он будет плавно появляться
			//fadeOut - прячется
			$(this).find('.tooltip').fadeIn('fast');
		},function() {
			$(this).find('.tooltip').fadeOut('fast');
		} );

	});

	// ф-я tooltip position чтобы правильно позицонировать подсказку	
	//спозиционируем подсказку  1)ищем блоки = 
	$(document).mousemove(function(e) {
		var mouseY = e.clientY,
			mouseX = e.clientX,
			tooltipHeight,
			tooltipWidth;
		//по каждой подсказке отдельно
		//к каждому элементу с классом tooltip привязываем анонимную ф-ю
		$('.tooltip').each(function() {
			var $tooltip = $(this);
			//сохраняем родительский элемент
			$parent = $tooltip.parent();
			tooltipHeight = $tooltip.outerHeight();
			tooltipWidth = $tooltip.outerWidth(); // вкл рачеты ширины и высоты
		
			//позиционируем подсказку по умолчанию
			$tooltip.css({
				'left':mouseX+40,
				'top':mouseY-10
			});


			//reposition
			if (tooltipWidth + mouseX > windowWidth) {
				$tooltip.css({
					'left':mouseX - tooltipWidth - 20
				});
			}
			if (tooltipHeight + mouseY + 20 > windowHeight) {
				$tooltip.css({
					'top':mouseY - tooltipHeight - 20
				});
			}
		}); //end each

	}); //end mousemove

}); // ready