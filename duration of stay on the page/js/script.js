var id = setInterval("myFunc_1()", 500); // 1 сек = 1000 милисек

var counter = 0;

function myFunc_1() { // каждую сек вызываем ф-ю
	counter++;
	alert("секунд прошло " + counter);

	if (counter == 3) {
		clearInterval(id); // оочищаем интервал и больше он не вызывается
	}
}