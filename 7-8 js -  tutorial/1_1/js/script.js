$(function () {
	$('.tabs li').on('click', function() {  // вешаем на li событие при клике
		$(this).addClass('active')			// this - тот элемент на который мы кликаем - добавляем ему класс active
			.siblings().removeClass('active'); // сиблингам текущего элемента - мы удаляем класс active
	$('.wrap .article')
		.removeClass('active')     // всем этим элементам удаляем класс
		.eq($(this).index()).addClass('active');  // eq - возможность обратится к элементу по его индексу
	});
});