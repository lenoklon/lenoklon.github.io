window.onload = function () {   //ждем когда загрузится наша страница
	timer.init();		// timer.init - как вход во всю логику.		
}

var Timer = function () {	//УПРАВЛЕНИЕ ПРОИСХОДИТ ТУТ

	var hoursTimezone = new Date(0).getHours();

	this.stops = 0;
	this.splits = 0;

	this.init = function () {
		document.getElementById('start').onclick = this.start;   // ВЕШАЕМ ЛИСТНЕРЫ НА КНОПКИ
		document.getElementById('reset').onclick = this.reset;	// три одноименные ф-и обьявляем	
		document.getElementById('split').onclick = this.split;
	}

// ВОЗМОЖНОСТЬ ПРОЧИТАТЬ ТЕКУЩИЕ ЗНАЧЕНИЯ ТАЙМЕРА

	this.getHours = function () {
		return parseInt(document.getElementById('hours').innerHTML);
	};

	this.getMinutes = function () {
		return parseInt(document.getElementById('minutes').innerHTML);
	};

	this.getSeconds = function () {
		return parseInt(document.getElementById('seconds').innerHTML);
	};

	this.getMS = function () {
		return parseInt(document.getElementById('milliseconds').innerHTML);
	};

	this.formatted = function(num, length) {
		return ('00'.substring(0, length-1)+num).substr(String(num).length-1);
	};

	// УСТАНОВКА ТАЙМЕРУ НОВЫХ ЗНАЧЕНИЙ
	this.setTimer = function (time) {
		//СОЗДАЕМ ОБЬЕКТ ТИПА ДАТА
		var date = new Date(time);
		var hours = this.formatted(date.getHours() - hoursTimezone, 2);
		var minutes = this.formatted(date.getMinutes(), 2);
		var seconds = this.formatted(date.getSeconds(), 2);
		var milliseconds = this.formatted(date.getMilliseconds(), 3);

		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
		document.getElementById('milliseconds').innerHTML = milliseconds;
	};


// ПОЛУЧЕНИЕ ЗНАЧЕНИЯ ТЕКУЩЕГО ТАЙМЕРА В ВИДЕ МИЛИСЕКУНД
	this.getTime = function () {  
		return new Date(this.getMS() + this.getSeconds() * 1000 + this.getMinutes() * 1000 * 60 + this.getHours() * 1000 * 60 * 60).getTime();
	};



	this.start = function () {
		document.getElementById('start').innerHTML = 'STOP';
		//this.innerHTML = 'STOP' - МЕНЯЕТ НАЗВАНИЕ КНОПКИ НА СТОП
		// вешаем на эту кнопку другой слушатель-листнер - stop
		document.getElementById('start').onclick = timer.stop;
		//this.onclick = timer.stop;
		// каждый раз запуская setinterval - мы проверяем сколько секунд прошло с предыдущего запуска stinterval
		//сколько прошло и сколько нужно добавить текущему таймеру
		timer.lastTimeStamp = new Date().getTime();
		timer.timer = window.setInterval(function () {
			var newTimeStamp = new Date().getTime();
			var toAdd = newTimeStamp - timer.lastTimeStamp;
			console.log(toAdd);
			//РАССЧИТЫВАЕМ НОВОЕ ВРЕМЯ ТАЙМЕРА
			var newTime = timer.getTime() + toAdd; //СКОЛЬКО ПРОШЛО НУЖНО ДОБАВИТЬ ТЕКУЩЕМУ ТАЙМЕРУ
			timer.setTimer(newTime);
			//ЗАПИСЫВАЕМ ПОЛЕ ОБЬЕКТА ТАЙМЕРА НОВЫМ ЗНЧЕНИЕМ
			timer.lastTimeStamp = newTimeStamp;
		}, 1); // 1 - это интервал - 5 милисекунд
	};

	//ВТОРОЙ РАЗ КАК НАЖИМАЕМ У НАС - КНОПКА СТОП
	//И ПОТОМ ОБРАТНО МЕНЯЕМ СТОП НА СТАРТ
	this.stop = function() {
		document.getElementById('start').onclick = timer.start; //document.getElementById('start') = THIS
		//this.onclick = timer.start;
		document.getElementById('start').innerHTML = 'START';
		//this.innerHTML = 'STSRT';

		//ОЧИЩАЕМ ИНТЕРВАЛ
		window.clearInterval(timer.timer);
		timer.addInfo('stop');
	};

	this.reset = function() {
		timer.stop();
		timer.setTimer(0);
		timer.clearInfo();
	};

	this.split = function() {
		//если название кнопочки - STOP
		if (document.getElementById('start').innerHTML == 'STOP') {
			timer.addInfo('split');
		}
	};

	this.addInfo = function(field) {
		var info = field +' '+ (++this[field+'s'])+': '+this.formatted(this.getHours(), 2)
			+'-'+this.formatted(this.getMinutes(),2)+'-'+this.formatted(this.getSeconds(),2)
			+'-'+this.formatted(this.getMS(),3);
		var p = document.createElement('p');
		p.innerHTML = info;
		document.querySelector('.info').appendChild(p);
	};


	//УДАЛЯЕТ ВСЕ ЭЛЕМЕНТЫ ИЗ ЭЛЕМЕНТА INFO
	this.clearInfo = function() {
		var info = document.querySelectorAll('.info p');
		for (var i = 0; i < info.length; i++) {
			// info[i].remove(); //УДАЛЯЕТ
			info[i].parentNode.removeChild(info[i]);  //БОЛЕЕ НАДЕЖНЫЙ ВАРИАНТ ВЫЗОВА ЭТОЙ ЖЕ Ф-И
		}
		this.stops = 0;
		this.splits = 0;
	};

};


//экземпляр этого конструктора
var timer = new Timer();


