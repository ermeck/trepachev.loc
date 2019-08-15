document.write('<h2>Простые функции</h2>');

document.write('<h4>TAsk 1</h4>');
function square(num) {
	return num * num;
}
var num = 2;
document.write(num + ' ^ 2 = ' + square(num));

document.write('<h4>TAsk 2</h4>');
function sum(a, b) {
	return a + b;
}
var num1 = 2, num2 = 23;
document.write(num1 + ' + ' + num2 + ' = ' + sum(num1, num2));

document.write('<h4>TAsk 3</h4>');
function task(a, b, c) {
	return (a - b)/c;
}
document.write(task(20, 5, 3));

document.write('<h4>TAsk 4</h4>');

function week(day) {
	switch (day) {
		case 1:
			return "Monday";
			break;
		case 2:
			return "Tuesday";
			break;
		case 3:
			return "Wednes­day";
			break;
		case 4:
			return "Thursday";
			break;
		case 5:
			return "Friday";
			break;
		case 6:
			return "Saturday";
			break;
		case 7:
			return "Sunday";
			break;
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var d = getRandomInt(1, 7);
document.write(d + '<br>');
document.write(week(d));