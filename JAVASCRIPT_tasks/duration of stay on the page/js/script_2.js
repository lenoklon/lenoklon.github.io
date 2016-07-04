var counter = 0;

function timer() {
	counter++;
	document.getElementById("count").innerHTML = counter;
	setTimeout("timer()", 1000); // setTimeout вызвается единожды определенное время один раз (1с)
}