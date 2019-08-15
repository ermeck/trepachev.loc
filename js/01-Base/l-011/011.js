document.write('<h2>Flags</h2>');

document.write('<h4>Task 1</h4>')
function hasElem(arr) {
    var f = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
            f = true;
        }
    }
    return f;
}
var arr = [2, 3, 5, 7];
if (hasElem(arr)) {
    document.write('Yes');
} else {
    document.write('No');
}

document.write('<h4>Task 2</h4>');
var boo = false, num = 30;
for (var i = 2; i < num - 1; i++) {
    if (num % i == 0) {
        boo = true;
        break;
    }
}
if (boo) {
    console.log('число не простое');
} else {
    console.log('число простое');
}

document.write('<h4>Task 3</h4>');
function twoNumbers(arr) {
    var boo = false;
    for (var i = 0; i < arr.length - 1; i++) {
        if (a[i] == a[i + 1]) {
            boo = true;
            break;
        }
    }
    return boo;
}

var a = [1, 2, 3, 4, 5];
if (twoNumbers(a)) {
    document.write('yes');
} else {
    document.write('no');
}