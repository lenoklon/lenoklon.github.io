(function($) {
    $.fn.carousel = function() {
    var leftArrow = $('.carousel-arrow-left');
    var rightArrow = $('.carousel-arrow-right');
    var list = $('.carousel-list');
        
    var pixelsOffset = 175;
    var currentLeft = 0;
    var elementsCount = list.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
    
        
    leftArrow.click(function() {
    	if (currentLeft != maximumOffset) {
            currentLeft += 175;
            list.animate({ left : currentLeft + "px"}, 300);
        }        
    });
        
    rightArrow.click(function() {
    	if (currentLeft != minimumOffset) {
            currentLeft -= 175;
            list.animate({ left : currentLeft + "px"}, 300);
        }    
    });
        
    }
    
})(jQuery);
