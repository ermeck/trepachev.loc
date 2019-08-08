document.write('<h2>Регистр символов</h2>');

document.write('<h4>Task 1</h4>');
var str = 'js';

document.write(str.toUpperCase());

document.write('<h4>TAsk 2</h4>');

document.write('JS'.toLowerCase());

//////////////////////////////////////////////////////////

document.write('<h2>length, substr, substring, slice. IndexOf</h2>');

document.write('<h4>Task 3</h4>');
document.write('я учу javascript'.length);

document.write('<h4>Task 4</h4>');
var str = 'я#учу#javascript!';
document.write(str.substr(2, 3) + ' ' + str.substr(6, 10) + '<br>');
document.write(str.substring(2, 5) + ' ' + str.substring(6, 16) + '<br>');
document.write(str.slice(2, 5) + ' ' + str.slice(6, 16));

document.write('<h4>Task 5</h4>');
document.write(str.indexOf('учу'));

document.write('<h4>Task 6</h4>');
var n = 25, result = '';
if (str.length > n) {
    result = str.substr(0, n) + '...';
} else {
    result = str;
}
document.write(result);

//////////////////////////////////////////////////////////////

document.write('<h2>replace</h2>');

document.write('<h4>Task 7</h4>');
var str = 'Я-учу-javascript';
document.write(str.replace(/-/g, '!'));

///////////////////////////////////////////////////////

document.write('<h2>split</h2>');

document.write('<h4>Task 8</h4>');
var str = 'я учу javascript';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}

document.write('<h4>Task 9</h4>');
var arr = str.split('');
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}

document.write('<h4>Task 10</h4>');
var date = '2025-12-31';
var arr = date.split('-');
document.write(arr[2] + '.' + arr[1] + '.' + arr[0]);

//////////////////////////////////////////////

document.write('<h2>join</h2>');
document.write('<h4>TAsk 11</h4>');
var arr = ['я', 'учу', 'javascript', '!'];
document.write(arr.join('+'));

/////////////////////////////////////////////////

document.write('<h2>Задачи</h2>');

document.write('<h4>Task 12</h4>');
var str = 'per aspera ad astra';
var arr = str.split('');
arr[0] = arr[0].toUpperCase();
str = arr.join('');
document.write(str);


document.write('<h4>Task 12</h4>')
var str = 'per aspera ad astra';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
    var tmp = arr[i].split('');
    tmp[0] = tmp[0].toUpperCase();
    arr[i] = tmp.join('');
}
str = arr.join(' ');

document.write('<h4></h4>');
var str = 'var_test_text';
var arr = str.split('_');
for (var i = 0; i < arr.length; i++) {
    if (i != 0) {
        var tmp = arr[i].split('');
        tmp[0] = tmp[0].toUpperCase();
        arr[i] = tmp.join('');
    }
}
str = arr.join('');
console.log(str);