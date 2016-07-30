

var number = 5;
var arr = []; 

for (var i = 0; i < number; i++) {
var userName = prompt('Введите имя', '');
arr.push(userName);
}

var nameAdmin = prompt('Ввести имя пользователя', '');

function globys(str) {
 for (var s = 0; s < str.length; s++ ) {
 if(nameAdmin == str[s]) {
 return nameAdmin + ", вы успешно вошли.";
  	} 
  }
 return 'Ошибка. Имени нет.';
}
 alert(globys(arr));
