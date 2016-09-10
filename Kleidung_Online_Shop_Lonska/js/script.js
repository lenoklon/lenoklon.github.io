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
