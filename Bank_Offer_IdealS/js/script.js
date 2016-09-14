
 $(function() {

 	$('.transfer_hide').hide();
	
	$('.item__bank').click(function(e) {
	
		$('.transfer_hide').fadeToggle(400);

	});

	$('.card_hide').hide();
	
	$('.item__card').click(function(e) {
	
		$('.card_hide').fadeToggle(400);

	});

	

});





