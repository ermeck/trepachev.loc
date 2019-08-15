outputH2('Заполнение массивов');

outputH4('Task 1');
var arr = [], num = 4, s = '';
for (var i = 0; i < num; i++) {
    s += 'x';
    arr[i] = s;
}
outputArray(arr);

outputH4('Task 2');
var arr = [], num = 5;
for (var i = 1; i <= 9; i++) {
    var s = '';
    for (var j = 0; j < i; j++) {
        s += i;
    }
    arr[i - 1] = s;
}
outputArray(arr);

outputH4('Task 3');
function arrayFill(elem, l) {
    var a = [];
    for (var i = 0; i < l; i++) {
        a[i] = elem;
    }
    return a;
}
console.log(arrayFill('x', 4));

outputH4('Task 4');
var arr = [1, 3, 2, 6, 4, 8], sum = 0, i = 0;
while (sum < 10) {
    sum += arr[i];
    i++;
}
document.write(i);

outputH2('Переворот массива');
var arr = [1, 3, 5, 7];
var arr2 = [];
for (var i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
}
outputArray(arr2);

outputH2('Многомерные массивы');

outputH4('Task 6');
var arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
document.write(sum);
