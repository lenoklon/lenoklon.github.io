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
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        speed: 300,
        slidesOffsetAfter: 17,
        slidesOffsetBefore: 17,
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        spaceBetween: 5,
//        centeredSlides: true,
        loop: true,
        breakpoints: {
            1980: {
                slidesPerView: 4,
                slidesOffsetBefore: 30,
                centeredSlides: false
            },
            1439: {
                slidesPerView: 3,
                slidesOffsetBefore: 30,
                centeredSlides: true
            },
            1200: {
                slidesPerView: 2,
                slidesOffsetBefore: 30
                , centeredSlides: false
            },
            991: {
                slidesPerView: 3,
                slidesOffsetBefore: 30,
                centeredSlides: false
            },
            426: {
                slidesPerView: 2,
                slidesOffsetBefore: 12,
                centeredSlides: false
            },
            376: {
                slidesPerView: 1,
                slidesOffsetBefore: 10,
                centeredSlides: true
            }
        }
    });
});
