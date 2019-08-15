outputH2('Работа с рекурсией');
outputH4('Task 1');
var arr = [1 ,2 ,3, 4, 5];
function outputArrReq(arr) {
    document.write(arr.shift() + '<br>');
    if (arr.length != 0)
        outputArrReq(arr);
}
outputArrReq(arr);

outputH4('Task 2');
var num = 234567;
var sum = 0;
function sumMy(num) {
    str = String(num);
    arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    if (sum > 9)
        sumMy(num);
    return sum;
}
document.write(sumMy(num));