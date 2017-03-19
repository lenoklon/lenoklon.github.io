;
$(document).ready(function () {
	/*подключение bxSlider*/
	$('.js-articles__slider').bxSlider({
		hideControlOnEnd: true,
		infiniteLoop: false,
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 360,
		slideMargin: 10,
		responsive:true,
		nextText: '',
		prevText: '',
		nextSelector: '.articles-slider__next',
		prevSelector: '.articles-slider__prev'
	});

	$('.js-clients__slider').bxSlider({
		hideControlOnEnd: true,
		infiniteLoop: false,
		minSlides: 1,
		maxSlides: 6,
		slideWidth: 180,
		slideMargin: 10,
		responsive:true,
		nextText: '',
		prevText: '',
		nextSelector: '.clients-slider__next',
		prevSelector: '.clients-slider__prev'
	});

	$('.js-portfolio-slider ').bxSlider({
		hideControlOnEnd: true,
		infiniteLoop: false,
		minSlides: 1,
		maxSlides: 4,
		slideWidth: 430,
		responsive:true,
		controls: false,
		ticker: true, 
		speed: 30000
	});

	/*MxItUp*/
	//var mixer = mixitup('.js-portfolio-slider');

	$('.filter li:not(.active)').on('click', function() {
		var slider = $('.js-filter-slider');
		var current = $(this).attr('data-filter');

		if (slider.hasClass('slick-initialized')) {
			slider.slick('unslick');
		} 
		slider.empty();
		if (current !== 'all') {
			$('.filter-slider__content [data-filter="' + current + '"]').each(function() {
				$(this).clone().appendTo(slider);
			});
		} else {
			slider.html($('.filter-slider__content').html());
		}
		slider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			dots: true
		});
		$(this).addClass('active').siblings().removeClass('active');
	}).filter('[data-filter="all"]').click();

	$('.js-articles_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: '.articles-slider_prev',
		nextArrow: '.articles-slider_next'
	});
	$('.header-nav__tooggle').click(function(){
		$('.header-nav').toggleClass('active');
	})

});
