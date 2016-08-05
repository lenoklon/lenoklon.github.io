
$(document).ready(function () {
	// $('.header-menu').slicknav();
	$('.slider').slick({
		dots:true
	});

	$('.clients__slider').slick({
	  arrows:false,	
	  infinite: true,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive:[
	  	{
	  		breakpoint:1200,  /*ноу меня почему-то 1080 а не 1200*/
	  		settings: {
	  			slidesToShow:5
	  		}
	  	},
	  	{
	  		breakpoint:992,  
	  		settings: {
	  			slidesToShow:4
	  		}
	  	},
	  	{
	  		breakpoint:769,  
	  		settings: {
	  			slidesToShow:3
	  		}
	  	},
	  	{
	  		breakpoint:769,  
	  		settings: {
	  			slidesToShow:2
	  		}
	  	},

	  	{
	  		breakpoint:480,  
	  		settings: {
	  			slidesToShow:1
	  		}
	  	}

	  ]
	});

	$('.clients__prev').click(function(){
		$('.clients__slider').slick('slickPrev');
	});

	$('.clients__next').click(function(){
		$('.clients__slider').slick('slickNext');
	});

	$(function() {
    $('#dg-container').gallery();
    $('.header__nav_list').slicknav({
    	prependTo:'.header__nav'
    });
});

});

/*спросить по поводу центрирования блоков контента в слайдере....есть ли какие-то логичные методы, а не методом тыка*/