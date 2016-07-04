var users = []; // будет наш массив
var user; // имя пользователя

for (var i = 0; i < 5; i++) { 
// ПРОВЕРКА на то, что б было введено имя пользователя - хотя бы что-то
	
	while ( true ) {
		user = prompt('введите ' + (i + 1) + ' имя');
		
		if ( (user !== null) && ( user !== '') ) {
			break;  //выходим из цикла
		} 
		
		alert(' Введите имя!'); // если все сработало как мы хотели
	}

		users[i] = user; // и так 5 раз подряд
}

var currentUser = prompt('Введите имя пользователя: ');

// ПРОВЕРКА НА НАЛИЧИЕ

var flag = false; // по умолчанию

for (var i = 0; i < users.length; i++) {
	if ( currentUser === users[i] ) {
		flag = true;
		break; // выходим из цикла
	}
}

if ( flag ) { //тоесть true...true писать не обязательно
	alert(currentUser + ' вы успешно вошли');
} else {
	alert('Пользователь не найден');
}

