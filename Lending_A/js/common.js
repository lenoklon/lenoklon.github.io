$(document).ready(function() {
	$(".slider-block").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items: 2
		
	});

});

// *************LOADER************
$(window).load(function() {
  $(".loader-inner").fadeOut();
  $(".loader").delay(400).fadeOut("4");
});