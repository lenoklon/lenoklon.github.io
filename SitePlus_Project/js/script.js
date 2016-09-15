
 $(function() {
					// menu

	$('.header__menu').click(function() {
		$('.header__top_nav_list').fadeToggle(400);
	});

				  // search

	$(".fa-search").click(function() {
		$("form").fadeToggle(400);
	});

				// 3D GALLERY

	$('#dg-container').gallery();

				// slider__sponsor

	 $('.sponsors__list').slick({
	 		slidesToShow: 6,
	  		slidesToScroll:4,
	  		arrows:false,
	  		responsive:[
	  	{
	  		breakpoint:769,
	  		settings: {
	  			slidesToShow:3
	  		}
	  	}
	  	
	  ]
	 });


	 $('.gallery__slider').slick({
	 	slidesToShow: 2,
  		slidesToScroll:2,
  		arrows:false
  	 });

  	 $('.gal_prev').click(function(){
		$('.gallery__slider').slick('slickPrev');
	});

	$('.gal_next').click(function(){
		$('.gallery__slider').slick('slickNext');
	});

	$(window).resize(function(){
		var winwidth = $(window).innerWidth();
		if(winwidth < 768){
			$(".pagination").css("display", "none");
			$('.gallery__slider_text:last-child').css("display", "none");
		}
		// if(winwidth > 992){
		// 	$(".main-list").css("display", "inline-block")
		// }
});
	
});