// Task 1
var a = 1;
var output = document.getElementById('task1');

output.innerHTML = 'a = 1<br>';
output.innerHTML += 'равна ли перемення "a" нулю?<br>';

if (a == 0) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}


// Task 2
var a = 1;
var output = document.getElementById('task2');

output.innerHTML = 'a = 1<br>';
output.innerHTML += '"a"> нуля?<br>';

if (a > 0) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}


// Task 3
var a = 1;
var output = document.getElementById('task3');

output.innerHTML = 'a = 1<br>';
output.innerHTML += '"a" < нуля?<br>';

if (a < 0) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}

// Task 4
var a = 1;
var output = document.getElementById('task4');

output.innerHTML = 'a = 1<br>';
output.innerHTML += '"a" >= нуля?<br>';

if (a >= 0) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}

// Task 5
var a = 1;
var output = document.getElementById('task5');

output.innerHTML = 'a = 1<br>';
output.innerHTML += '"a" <= нуля?<br>';

if (a <= 0) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}

// Task 6
var a = 1;
var output = document.getElementById('task6');

output.innerHTML = 'a = 1<br>';
output.innerHTML += '"a" не равна нулю?<br>';

if (a != 0) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}

// Task 6
var a = 1;
var output = document.getElementById('task7');

output.innerHTML = 'a = 1<br>';
output.innerHTML += '"a" равна "test"<br>';

if (a == 'test') {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}

// Task 8
var a = 1;
var output = document.getElementById('task8');

output.innerHTML = 'a = 1<br>';
output.innerHTML += '"a" равна 1 и по значению и по типу?<br>';

if (a === 1) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}

////////////////////////////////////////////


// Task 9

var test = true;
var output = document.getElementById('task9');
output.innerHTML = "'test' = true<br>";
output.innerHTML += "Переменная равна логическому 'true'?<br>";

if (test) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}


// Task 10

var test = true;
var output = document.getElementById('task10');
output.innerHTML = "'test' = true<br>";
output.innerHTML += "Переменная не равна логическому 'true'?<br>";

if (!test) {
    output.innerHTML += 'Верно';
} else {
    output.innerHTML += 'Неверно';
}

////////////////////////////////////////////

// Task 11

var a = 5;
var output = document.getElementById('task11');
output.innerHTML = "var a = 5;<br>";
output.innerHTML += "'a' > 0, 'a' < 5<br>";

if (a > 0 && a <5) {
    output.innerHTML += "True";
} else {
    output.innerHTML += "False";
}

// Task 12

var a = 5;
var output = document.getElementById('task12');
output.innerHTML = "var a = 5;<br>";
output.innerHTML += "'a' = 0, 'a' = 2<br>";

if (a == 0 || a == 2) {
    output.innerHTML += "True";
} else {
    output.innerHTML += "False";
}

// Task 13

var a = 1, b = 6;
var output = document.getElementById('task13');
output.innerHTML = "a = 1; b = 6;<br>";
output.innerHTML += "a <= 1; b >= 3;<br>";

if (a <= 1 && b >= 6) {
    output.innerHTML += "True";
} else {
    output.innerHTML += "False";
}

// Task 14

var a = 1, b = 6;
var output = document.getElementById('task14');
output.innerHTML = "a = 1; b = 6;<br>";
output.innerHTML += "a > 2; a < 11; b >= 6; b < 14;<br>";

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    output.innerHTML += "True";
} else {
    output.innerHTML += "False";
}



////////////////////////////////////////////////////////

// Task 15

var num = 3;
var season = '';

switch (num) {
    case 1:
        season = "Winter";
        break;
    case 2:
        season = "Spring";
        break;
    case 3:
        season = "Summer";
        break;
    case 4:
        season = "Outumn";
        break;
}

document.getElementById('task15').innerHTML = season;


////////////////////////////////////////////////////////////

// Task 16

var day = 23, decade = '';
if (day >=1 && day <= 10) {
    decade = "первая";
} else if (day > 10 && day <= 20) {
    decade = "вторая";
} else {
    decade = "третья";
}

document.getElementById('task16').innerHTML = "Число " + day + " - декада " + decade;


// Task 17

var month = 11, season = '';
if ((month >=1 && month <= 2) || (month == 12)) {
    season = "Зима";
} else if (month > 2 && month <= 5) {
    season = "Весна";
} else if (month > 6 && month <= 8) {
    season = "Лето";
} else {
    season = "Осень";
}
 
document.getElementById('task17').innerHTML = month + "-й месяц - сезон " + season;

// Task 18

var str = "abcde";

if (str[0] == "a") {
    document.getElementById('task18').innerHTML = 'yes';
} else {
    document.getElementById('task18').innerHTML = 'no';
}


// Task 19

var str = "12345";

if (str[0] == "1" || str[0] == "2" || str[0] == "3") {
    document.getElementById('task19').innerHTML = 'yes';
} else {
    document.getElementById('task19').innerHTML = 'no';
}


// Task 20
var str = "123";
document.getElementById('task20').innerHTML = Number(str[0]) + Number(str[1]) + Number(str[2]);


// Task 21
var str = '135342', output = '';
var sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
var sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (sum1 == sum2) {
    output = 'yes';
} else {
    output = 'no';
}

document.getElementById('task21').innerHTML = output;