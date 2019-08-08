document.write('<h2>Работа с %</h2>');

document.write('<h4>Task 1</h4>');
var a = 12, b = 3;
document.write(a % b);

document.write('<h4>Task 2</h4>');

if (a % b == 0) {
    document.write(a + ' делится на ' + b + ' без остатка');
} else {
    document.write(a + ' не делится на ' + b + '. Остаток: ' + a % b);
}

////////////////////////////////////////////////////////////////////////

document.write('<h2>Работа со степенью</h2>');

document.write('<h4>Task 3</h4>');
var st = Math.pow(2, 10);
document.write(st);

document.write('<h4>Task 4</h4>');
document.write(Math.sqrt(256));

document.write('<h4>Task 5</h4>');
var a = [4, 2, 5, 19, 13, 0, 10];
var sum = 0;
for (var i = 0; i < a.length; i++) {
    sum += Math.pow(a[i], 3);
}
document.write(Math.sqrt(sum));

/////////////////////////////////////////////////////////////////////////

document.write('<h2>Работа с функциями округления</h2>');

document.write('<h4>Task 6</h4>');
document.write(Math.sqrt(379) + '<br>');
document.write((Math.sqrt(379)).toFixed(2) + '<br>');
document.write((Math.sqrt(379)).toFixed(1) + '<br>');
document.write(Math.round(Math.sqrt(379)) + '<br>');

document.write('<h4>Task 7</h4>');
var sq = Math.sqrt(587);
document.write(sq + '<br>');
var fl = Math.floor(sq);
var cl = Math.ceil(sq);
document.write(fl + '<br>');
document.write(cl + '<br>');
var obj = {
    floor: fl,
    ceil: cl
}

/////////////////////////////////////////////////////////////////////

document.write('<h2>Нахождение максимального и минимального</h2>');

document.write('<h4>Task 8</h4>');

document.write(Math.max(4, -2, 5, 19, -130, 0, 10) + '<br>');
document.write(Math.min(4, -2, 5, 19, -130, 0, 10));

/////////////////////////////////////////////////////////////////

document.write('<h2>Работа с рандомом</h2>');

document.write('<h4>Task 9</h4>');
document.write(Math.floor(Math.random() * 100 + 1));

document.write('<h4>Task 10</h4>');
var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100 +1);
    document.write(arr[i] + '<br>');
}

////////////////////////////////////////////////////////////////////

document.write('<h2>Работа с модулем</h2>');

document.write('<h4>Task 11</h4>');
var a = 10, b = 15;
document.write(Math.abs(a - b));

document.write('<h4>Task 12</h4>');
var c = a - b;
document.write(Math.abs(c));

////////////////////////////////////////////////////////////

document.write('<h2>Задачи</h2>');

document.write('<h4>Task 13</h4>');
var arr = [10, 15, 20], sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

document.write(sum / i);

document.write('<h4>Task 14</h4>');

var n = 4, fact = 1;
for (var i = 1; i <= n; i++) {
    fact *= i;
}
document.write(fact);