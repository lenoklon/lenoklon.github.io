// создаем обьект
var test = {
    header: '<h3>Тест по программированию</h3>',
    question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
    cboxID: ['cbox1', 'cbox2', 'cbox3' ],
    answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
}

// CONTAINER
var container = document.createElement('div');
container.classList.add('container');
//ищем родителя и передает туда элемент
var body = document.querySelector('body');
body.appendChild(container);

// ROW
var row = document.createElement('div');
row.classList.add('row');
// var container = document.querySelector('.container');
container.appendChild(row);

// SPAN12
var span12 = document.createElement('div');
span12.classList.add('span12');
// var row = document.querySelector('.row');
row.appendChild(span12);

// HEADER h3
var header = document.createElement('header');
header.innerHTML = test.header;
span12.appendChild(header);

// SPAN12(2)
var span12 = document.createElement('div');
span12.classList.add('span12');
row.appendChild(span12);     // как вставлять второй по счету span12??

//form
var form = document.createElement('form');
var span12 = document.querySelector('.span12:nth-child(2)');
span12.appendChild(form);

var list = document.createElement('ol');
list.classList.add('test');
form.appendChild(list);

//перебираем массив test.question[i]
for (i = 0; i < test.question.length; i++) {
	var li = document.createElement('li');
	li.innerHTML = test.question[i];
	list.appendChild(li);
	var ul = document.createElement('ul');
	ul.classList.add('sub_list');
	li.appendChild(ul);
					// внутренние li
	for (j = 0; j < test.question.length; j++) {
		var li = document.createElement('li');
		ul.appendChild(li);	
		var input = document.createElement('input');
		input.type = 'checkbox';
		input.id = test.cboxID[j]
		li.appendChild(input);
		var label = document.createElement('label');
		label.innerHTML = test.answers[j];
		li.appendChild(label);
	}
	
}
var divBtn = document.createElement('div');
divBtn.classList.add('btn');
form.appendChild(divBtn);
var button = document.createElement('button');
button.innerHTML = ('Проверить мои результаты');
divBtn.appendChild(button);

