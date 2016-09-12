
			// 1.***showing numbers***

$('.subnumbers').hide(); 
var mob_click = $('.header__contacts a');

$(mob_click).click(function(e) {
		if ($('.subnumbers').is(":visible")) $(".subnumbers").slideUp(200);
		// open
		else $(".subnumbers").slideDown(200) ;
});

// *************TOOLTIP*************

$('.tooltip').each(function() {
	$(this).hide();
	$(this).parent().hover(function() {
		$(this).find('.tooltip').fadeIn(1000);
	}, function() {
		$(this).find('.tooltip').fadeOut(200);
	});
});

// *************ACTIVE_BUTTON****************

$(".size_active").click(function() {
	 $(this).addClass("active").siblings().removeClass("active");
});






// ****pop-up information block****

$(".products__list_link_more").click(function () {
	$(".window__popup").fadeIn(400);
});

$(".close-details").click(function() {
	$(".window__popup").fadeOut(300);
});

// ****pop-up information block (tablet)****

$(".products__list_img_click").click(function(){
	$(".container-pop-up").fadeIn(400);
});

$(".close-details").click(function(){
	$(".container-pop-up").fadeOut(300);
});

// pop-up block with socials

$(".more").click(function(){
	$(".popup__details-socials").slideDown(400);
});

$(".close-socials").click(function(){
	$(".popup__details-socials").slideUp(400);
});
