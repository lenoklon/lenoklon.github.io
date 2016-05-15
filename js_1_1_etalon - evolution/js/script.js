// получаем наши данные
// подключить js hint

var x = prompt('enter your number');
var n = prompt('enter degree');

// введем проверку на NaN - сообщение об ошибке - ПРОВЕРКА НА ЧИСЛО

function isNumeric(n) {
	// если есть число и это не бесконечность,запускаем нашу 
	// то запускаем нашу ф-ю
	return !isNaN(parseInt(n)) &&  isFinite(n);
}

function pow(x, n) {
	//  0 в любой степени = 0
	if (x === 0) {
		return 0;
	}
			// ПРОВЕРКА НА ЧИСЛО
	if (!isNumeric(x) ) {
		alert('x is not a number');
		return; // выход из ф-и
	}

	if (!isNumeric(n) ) {
		alert('n is not a number');
		return; // выход из ф-и
	}

	var result = 1; // default

	if (n === 0) {
		return 1;   // если степень равна 0

	} else if (n < 0) {
		n = -1 * n; // делаем его положительным

		for (var i = 0; i < n; i++) {
			result *= x; // result = result * x возводим его в степень
		}
		result = 1 / result; 
	} else {
		for (var i = 0; i < n; i++) {
			result *= x;
		}
	}
	
	return result;
}

var involution = pow(x, n); // числа полученные через промпт

console.log("x в степени n = " + involution);



