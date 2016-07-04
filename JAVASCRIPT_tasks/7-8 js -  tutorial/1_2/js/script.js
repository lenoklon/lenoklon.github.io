$(function () {
	$('input')
			.on('mouseover', function() {
// tooltip, который является sibling для this - добавляем клас show
// позиционируем на нашем элементе, добавляем и удаляем класс
				$(this).siblings('.tooltip').addClass('show');
			})
			.on('mouseout', function() {
				$(this).siblings('.tooltip').removeClass('show');
			});
	$('.button').on('click', function (e) { // на клик батон мы делаем addClass
			e.preventDefault(); // передаем ивент(е) и передаем ему preventdefaultпотому что button перезагружает страницу
			$('.tooltip').addClass('show');
	});
});