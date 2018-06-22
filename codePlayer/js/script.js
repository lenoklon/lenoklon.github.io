$(function () {
	function updateOutput(){
		$('iframe').contents().find('html').
	  	html("<html><head><style type='text/css'>"+$('#cssPanel')
	  		.val()+"</style></head><body>"+ $('#htmlPanel').val()+"</body></html>");
		
	  	document.getElementById('outputPanel').contentWindow.eval($('#jsPanel').val());

		

	}

	$('.header__buttons-togglebtn').hover(function () {
		$(this).addClass('highlighted');
	}, function() {
		$(this).removeClass('highlighted');
	});


	$('.header__buttons-togglebtn').click(function() {
		$(this).toggleClass('active');
		$(this).removeClass('highlighted'); 
		var panelID = $(this).attr('id')+'Panel';
		$('#'+panelID).toggleClass('hidden');
		var numOfActivePanels = 4 - $('.hidden').length;
		$('.panel').width(($(window).width() / numOfActivePanels)-10);
	}); 

	$('.panel').height($(window).height() - $('header').height() - 20);
	$('.panel').width(($(window).width() / 2) - 10);

	updateOutput();


	$('textarea').on('change keyup paste', function(){
		updateOutput();
	});
});