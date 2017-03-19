var initialheight = 0;
$(".alignHeight").each(function () {
    var blockheight = $(this).height();
    if (blockheight > initialheight) {
        initialheight = blockheight;
    }
});
$(".alignHeight").height(initialheight);
$(".alignHeight-2").height(initialheight);
$(".alignHeight-3").height(initialheight);

$('#stars').starrr({
    rating: 0
});
$('#stars2').starrr({
    rating: 0
});
$(".fancybox").fancybox({
    helpers: {
        overlay: {
            locked: false
        }
    }
});
$("#tab-label-category-1").owlCarousel({
    items: 5,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    autoWidth: true,
    dots: false,
    margin: 50
});
