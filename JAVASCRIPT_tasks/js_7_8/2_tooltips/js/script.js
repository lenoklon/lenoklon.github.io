$(function () {
	
	$('.tooltip').each(function() {
		$(this).hide();
		$(this).parent().hover(function() {
			$(this).find('.tooltip').fadeIn(500);
		}, function() {
			$(this).find('.tooltip').fadeOut(500);
		});

		$('.btn').click(function() {
			$('.tooltip').fadeToggle(500);
			$(this).toggleClass('btn-click');
		});
	});
}); 