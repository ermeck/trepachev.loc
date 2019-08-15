outputH2('Задачи для решения');

outputH4('Task 1');
function isNumberInRange(num) {
    var boo = false;
    if (num > 0 && num < 10)
        boo = true;
    return boo;
}
document.write(isNumberInRange(3));

outputH4('Task 2');
var arr = [-3, 7, 5, 15];
var result = [];
for (var i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i]))
        result.push(arr[i]);
}
outputArray(result);

outputH4('Task 3');
function getDigitsSum(num) {
    var str = String(num);
    var arr = str.split('');
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
document.write(getDigitsSum(234));

outputH4('Task 4');
var k = 0;
for (var i = 1; i <= 2019; i++) {
    if (getDigitsSum(i) == 13) {
        k++;
        document.write(i + '<br>');
    }
}
document.write(k + ' чисел от 1 до 2019 дают в сумме 13');

outputH4('Task 5');
function isEven(num) {
    return num % 2 == 0;
}

outputH4('Task 6');
var arr = [1, 2, 3, 4, 5, 6];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    if (isEven(arr[i]))
        arr2.push(arr[i]);
}
outputArray(arr2);

outputH4('Task 7');
function getDivisors(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            console.log(i);
    }
}
getDivisors(30);