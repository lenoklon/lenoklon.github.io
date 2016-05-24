var delay = 500; // for hiding next

$(function() {

	// creating our DOM element
	var $content = {
		tabName: ['Australia', 'Germany', 'Franse - Biarritz'],
		tabLink: ['tab1', 'tab2', 'tab3'],
		tabTitel: ["Surfer's Paradise - Australia", 'Das allerbeste Land - Deutschland', 'French Paradise'],
		tabInfo: ["AUSTRALIA! Energetic, enthusiastic, electric, eclectic! These are just some of the words that sum up the social scene that Surfers Paradise was built on. Surfers Paradise is the Gold Coast's entertainment and tourism centre and the suburbs high-rise buildings are the best known feature of the city's skyline.",
				"Bundesrepublik DEUTSCHLAND ist ein föderal verfasster Staat in Mitteleuropa, der aus den 16 deutschen Ländern gebildet wird. Die Bundesrepublik ist ein freiheitlich-demokratischer und sozialer Rechtsstaat[9] und stellt die jüngste Ausprägung des deutschen Nationalstaates dar. Bundeshauptstadt sowie bevölkerungsreichste Stadt ist Berlin.",
				"BIARRITZ  is a city on the Bay of Biscay, on the Atlantic coast in the Pyrénées-Atlantiques department in southwestern France, 35 kilometres from the border with Spain. It is a luxurious seaside tourist destination."],
		tabPic: ['<img src="img/australia.jpg" alt="australia">','<img src="img/berlin.jpg" alt="D">',
		 		'<img src="img/biarritz.jpg" alt="Fr">']
	};

	$('body').append('<div class="wrap">');   //.wrap

	var $wrap = $('.wrap');
	$wrap.append('<ul class="tabs">');

	for (var i = 0; i < 3; i++) {
		$('ul').append('<li><a href="#'+ $content.tabLink[i]+'">' + $content.tabName[i] + '</a></li>')
	}

	$wrap.append('<div class="tab_content">');

	for (var i = 0; i < 3; i++) {
		$('.tab_content').append('<div id="' + $content.tabLink[i] +'"  class="tab_item">')

	}
		//first tab
	$('#tab1').append('<h1>' + $content.tabTitel[0]);
	$('#tab1').append('<p>' + $content.tabInfo[0]);
	$('#tab1').append($content.tabPic[0]);

		//second tab
	$('#tab2').append('<h1>' + $content.tabTitel[1]);
	$('#tab2').append('<p>' + $content.tabInfo[1]);
	$('#tab2').append($content.tabPic[1]);

		//third tab
	$('#tab3').append('<h1>' + $content.tabTitel[2]);
	$('#tab3').append('<p>' + $content.tabInfo[2]);
	$('#tab3').append($content.tabPic[2]);
	
		
	//скрываем все контенты
	$('.tab_item').hide();

	//показываем наш 1й контент
	$('.tab_item:first').show();
	
	//активируем нашу первую вкладку 
	$('.tabs li:first').addClass('active');

	// событие при клике на tab
	$('.tabs li').click(function(e) {

			// удаляем все активные элементы в наших кнопках li
			$('.tabs li').removeClass('active');   //без этого у нас будет несколько активных элементов

			//делаем активный элемент только на который мы кликнули
			$(this).addClass('active');

			$('.tab_item').hide();

			//записываем в переменную значение нашего атрибута href
			var selectTab = $(this).find('a').attr('href');

			// вешаем на эту переменную метод fadeIn - исчезновение и появление нашего контента
			$(selectTab).slideToggle();

	});
	$('.tab_content p').hide(); // прячем все p

	var titels = $('.tab_item h1');

	$(titels).click(function(e) {
			var parent = $(event.target).parent(); // получаем доступ к парент...тоесть tab_item
			var p = parent.find("p");

			if ($(p).is(":visible")) $(p).slideUp(delay);
			// РАССКРЫВАЕМ
			else $(p).slideDown(delay) ;
			
	});

});