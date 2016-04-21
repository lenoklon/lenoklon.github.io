var x = +prompt('add the number', '');
var n = +prompt ('add the extent', '');

function pow(x, n) {
	var nAbs = Math.abs(n); //берем модуль числа n

	if (n == 0) {
		return 1;
	}

	var result = x;

	for (var i = 1; i < nAbs; i++) {
		result *= x;
	}	

	if (n < 0) {
		return 1/result;
	} else if (n > 0) {
		return result;
	}	
}

alert('result is = ' + pow(x, n));




