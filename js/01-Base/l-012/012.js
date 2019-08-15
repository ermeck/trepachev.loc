document.write('<h2>Приемы работы с логическими значениями</h2>');

document.write('<h4>Task 1</h4>');
function comparison(a, b) {
    var boo = false;
    if (a == b)
        boo = true;
    return boo;
}

document.write(comparison(3, 4));

document.write('<h4>Task 2</h4>');
function sum(a, b) {
    var boo = false;
    if (a + b > 10)
        boo = true;
    return boo;
}

document.write(sum(7, 4));

document.write('<h4>Task 3</h4>');
function negative(a) {
    var boo = false;
    if (a < 0)
        boo = true;
    return boo;
}

document.write(negative(-8));