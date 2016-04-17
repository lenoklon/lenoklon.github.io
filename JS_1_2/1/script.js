var x = +prompt('add the number', '');
var n = +prompt ('add the extent', '');
function pow(x, n) {
	var result = 1; 
	
	for (var i = 0; i < n; i++) {
		result *= x;
	}		
	return result;
}
alert('result is = ' + pow(x, n));
 


