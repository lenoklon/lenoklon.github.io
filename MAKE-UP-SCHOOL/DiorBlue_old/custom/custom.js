$(document).ready(function() {
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
    
});
