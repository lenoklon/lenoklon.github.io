
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
	  		breakpoint:1200,
	  		settings: {
	  			slidesToShow:5
	  		}
	  	},
	  	
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
});

});

/*спросить по поводу центрирования блоков контента в слайдере....есть ли какие-то логичные методы, а не методом тыка*/