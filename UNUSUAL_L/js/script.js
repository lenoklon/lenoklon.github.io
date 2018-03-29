'use strict';

		
$(document).ready(function () {
	$('.go__to').click(function(){
		var scroll_El = $(this).attr('href');
		if( $(scroll_El).length != 0) {
			$('html, body').animate( { scrollTop: $(scroll_El).offset().top }, 500);
		}
		return false;
	});


}); 
