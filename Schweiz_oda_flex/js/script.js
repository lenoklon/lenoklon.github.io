$(document).ready(function() {
   	 /*toggle-menu*/

    $('.btn-menu, .hidden-menu ul a').click( function () {
    	
    	/*if($('.hidden-menu').is(':hidden')) {
    		$('.hidden-menu').show();
    	} else {
    		$('.hidden-menu').hide();
    	}*/

    	$('.hidden-menu').toggle();
    });
    
   		/*pagescroll2id*/
   	$("a[rel='m_PageScroll2id']").mPageScroll2id({
   		offset:30
   	});
    

   		/*owl-carousel*/
   	$('.carousel-wrap').owlCarousel({
   		autoPlay: 3000,
   		items: 3,
   		itemsDesktop: [1199,3],
   		itemsDesktopsmall: [979,3]
   	});

   		/*tabs*/
   		$('#responsiveTabsDemo').responsiveTabs({
   			startCollapsed: 'tabs'
   		});
});