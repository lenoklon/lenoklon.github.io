var arrName = [];

var i = 0;

while (i<5) {
	var Name = prompt('add the ' + (i + 1) + 'name', '');
	arrName.push(Name);
	i++;
}
console.log(arrName);

var yourName = prompt('type your name here', '');

// var rightName = false; //создаем флаг

for (var i = 0; i < arrName.length; i++) {

	if (arrName[i] == yourName) {
		// rightName = true;
		alert('welcome to your profile ' + yourName);
		break;
	} else if ((i == arrName.length - 1) && (arrName[i] != yourName)){ // (!rightName) сводим вывод ошибки только до посл эл
		alert('sorry, first you should make registration');
	}
}
	




	
	

