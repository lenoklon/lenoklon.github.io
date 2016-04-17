var arrName = [];

var i = 0;
while (i<5) {
	var Name = prompt('add the name', '');
	arrName.push(Name);
	i++;
}
console.log(arrName);

var yourName = prompt('type your name here', '');

for (var i = 0; i < arrName.length; i++) {
	if (arrName[i] == yourName) {
		alert('welcome to your profile' + yourName);
		break;
	} else {
		alert('sorry, first you should make registration');
	}
}

// else if ((i == arrName.length - 1) && (arrName[i] != yourName)){ //сводим вывод ошибки только до посл эл
// 		alert('sorry, first you should make registration');
// }