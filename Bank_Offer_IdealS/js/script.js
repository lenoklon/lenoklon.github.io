
 $(function() {

 	$('.transfer_hide').hide();
	$('.main__left_list_item').click(function(e) {
		$(this).children('.transfer_hide').fadeToggle(400);
	});
});





