var arrUsers = [];
var user;

var i = 0;

while (i<5) {
	var user = prompt('add the ' + (i + 1) + ' name', '');
	arrUsers.push(user);
	i++;
}

console.log(arrUsers); // выведем наш массив имен

var yourName = prompt('type your name here', '');

var flag = false; // default

// проходимся по массиву
for (var i = 0; i < arrUsers.length; i++) {

	if (arrUsers[i] === yourName) {
		flag = true;
		break;
	} 
}

if ( flag ) {
	alert('welcome to your profile ' + yourName);
} else {
	alert('sorry, first you should make registration');
}

	




	
	

