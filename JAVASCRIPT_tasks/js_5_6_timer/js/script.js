var time = 0; // we have nothing on the beginning

var running = 0; // true (1) - stopwatch is running, false (0) - stopped

function startPause() {
	if (running == 0) { // таймер стоит
		running = 1; // запускаем
		increment();
		document.getElementById("startPause").innerHTML = 'Pause'; // changing start to pause
	} else {
		running = 0; // останавливаем
		document.getElementById("startPause").innerHTML = 'Resume'; // возобновляем
	}

}

function reset() {
	running = 0; // stop running
	time = 0;
	document.getElementById("startPause").innerHTML = 'Start'; // меняем на старт
	document.getElementById("timer").innerHTML = '00:00:000';
}

// count
function increment() {
	if (running == 1) { // when it works
		setTimeout(function() {
			time++;
			var minutes = Math.floor(time/10/60); // The floor() method rounds a number DOWNWARDS  ??????
			var seconds = Math.floor(time/10 % 60);
			var hours = Math.floor(time/10/60/60);
			var tenths = time % 10;

			if (minutes < 10) {
				minutes = "0" + minutes;
			}

			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			// update
			document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + tenths + "0";
			increment(); // function in the function - it will do it over and over again
		}, 100)
	}
}