window.onload = function () { //ждем загрузки страницы
	// нам нужен обьект с методами но мы сделаем ф-ю



	var div = DOMCreator.createElement('div', document.body, 'header');
	DOMCreator.createElement('h3', div, '', 'Тест по программированию');

	var content = DOMCreator.createElement('ul', document.body, 'content');

				// ***li***
	for (var i = 1; i <= 3; i++) {
		var li = DOMCreator.createElement('li', content, '');
		DOMCreator.createElement('h4', li, '', i+'.'+'Вопрос №' + i); // он не имеет детей, поэтому ссылку на него не надо....без var
		var ul = DOMCreator.createElement('ul', li);
		for (var j = 1; j <= 3; j++) {
			var li_sub = DOMCreator.createElement('li', ul);
			DOMCreator.createCheckbox(li_sub, 'Вариант '+j);
		}
	} 

	var button = DOMCreator.createElement('div', document.body, 'button');
	var btn = DOMCreator.createElement('button', button, 'btn btn-primary', 'Проверить результат');
	btn.type = 'button';



	// var div = document.createElement('div');
	// div.className = 'header';
	// document.body.appendChild(div);

	// var h3 = document.createElement('h3');
	// h3.innerHTML = 'Тест по программированию';
	// div.appendChild(h3);

};