// Task 1

document.write('<h4>Task 1</h4>')
var a = 0, str = '';
while (a < 7) {
    a++;
    str += a + '<br>';
}
// var output = document.getElementById('task1');
// output.innerHTML = str;
document.write(str);


// Task 2

str = '';
for (var i = 11; i <= 19; i++) {
    str += i + '<br>';
}
document.write('<h4>Task 2</h4>');
document.write(str);


// Task 3
try {
    // statements
    str = '';
    for (var i = 0; i <= 10; i += 2) {
        str += i + '<br>';
    }
    document.write('<h4>Task 3</h4>');
    document.write(str);
} catch(e) {
    // statements
    console.log(e);
}


// Task 4

sum = 0;
for (var i = 0; i <= 5; i++) {
    sum += i;
}
document.write('<h4>Task 4</h4>');
document.write(sum);

document.write('<h2>Работа с for для массива</h2>');


// Task 5
document.write('<h4>Task 5</h4>');
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
    document.write(a[i]+'<br>');
}

// Task 6
document.write('<h4>Task 6</h4>');
var result = 0;
for (var i = 0; i < a.length; i++) {
    result += a[i];
}
document.write(result + '<br>');

document.write('<h2>Работа с for-in</h2>');

document.write('<h4>Task 7</h4>');
var obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
}

for (key in obj) {
    document.write(key + ': ' + obj[key] + '<br>');
}

// Task 8

var obj = {
    'Nicol': 200,
    'Basil': 300,
    'Piter': 400
}

document.write('<h4>Task 8</h4>')

for (key in obj) {
    document.write(key + '- salary $' + obj[key] + '<br>');
}

document.write('<h2>Задачи</h2>');


// Task 9
document.write('<h4>Task 9</h4>')
var arr = [2, 5, 9, 15, 0, 4];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        document.writeln(arr[i]);
    }
}


// Task 10
document.write('<h4>Task 10</h4>');
var arr = [-2, 3, -5, 6];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
document.write(sum);


// Task 11
document.write('<h4>Task 11</h4>');
var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        document.write('yea');
        break;
    }
}


// Task 12
document.write('<h4>Task 12</h4>');
var arr = [10, 20, 30, 50, 235, 3000];
for (var i = 0; i < arr.length; i++) {
    tmp = String(arr[i]);
    if (tmp[0] == '1' || tmp[0] == '2' || tmp[0] == '5') {
        document.write(arr[i] + '<br>');
    }
}

// Task 13
document.write('<h4>Task 13</h4>');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = '-';
for (var i = 0; i < arr.length; i++) {
    str += arr[i] + '-';
}
document.write(str);

// Task 14
document.write('<h4>Task 14</h4>');
var arr = ['mon', 'tue', 'the', 'thu', 'fri', 'set', 'sun'];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'set' || arr[i] == 'sun') {
        document.write('<b>' + arr[i] + '</b><br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}

// Task 15
document.write('<h4>Task 15</h4>');
var day = 'the';
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == day) {
        document.write('<i>' + arr[i] + '</i><br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}

// Task 16
document.write('<h4>Task 16</h4>');
var n = 1000, i = 0;
while (n > 50) {
    i++;
    n /= 2;
    document.write(n + '<br>');
}
document.write('Iteration count: ' + i);