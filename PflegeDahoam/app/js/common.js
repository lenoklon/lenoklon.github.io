$(function() {

	//mmenu
	$('#my-menu').mmenu({
		extensions: ['theme-dark', 'effect-menu-slide','pagedim-black', "position-back","position-right"],
		navbar: {
			//title: '<img src="img/logo/Pflege.png" alt="PflegeDahoam">'
			title: '<img src="img/logo/logo2.png" alt="PflegeDahoam">'
		}
	});

	//вешаем событие на гамбургер
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

});

// *************LOADER************
$(window).load(function() {
  $(".loader-inner").fadeOut();
  $(".loader").delay(400).fadeOut("4");
});
