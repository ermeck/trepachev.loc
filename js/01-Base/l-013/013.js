document.write('<h2>Пирамидки</h2>');

document.write('<h4>Task 1</h4>');
var s = '';
for (var i = 1; i <= 9; i++) {
    s += i;
}
document.write(s);

document.write('<h4>Task 2</h4>');
var s = '';
for (var i = 9; i >= 1; i--) {
    s += i;
}
document.write(s);

document.write('<h4>Task 3</h4>');
var s = '-';
for (var i = 1; i <= 9; i++) {
    s += i + '-';
}
document.write(s);

document.write('<h4>Task 4</h4>');
var s = '';
for (var i = 0; i < 20; i++) {
    s += 'x';
    document.write(s + '<br>');
}

document.write('<h4>Task 5</h4>');
for (var i = 1; i <= 9; i++) {
    var s = '';
    for (var j = 0; j < i; j++) {
        s += i;
    }
    document.write(s + 'i <br>');
}

document.write('<h4>Task 6</h4>');
var s = '';
for (var i = 0; i < 5; i++) {
    s += 'xx';
    document.write(s + '<br>');
}
