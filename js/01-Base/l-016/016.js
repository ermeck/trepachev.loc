outputH2('Практика на работу с пользовательскими функциями');

outputH4('Task 1');
function ucfirst(str) {
    var arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    str = arr.join('');
    return str;
}
console.log(ucfirst('this is'));

outputH4('Task 2');
var str = 'var_text_hello';
var arr = str.split('_');
for (var i = 1; i < arr.length; i++) {
    arr[i] = ucfirst(arr[i]);
}
str = arr.join('');
console.log(str);

outputH4('Task 3');
function inArray(value, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value)
            return true;
    }
    return false;
}
var arr = [1, 2, 3];
console.log(inArray(4, arr));

outputH4('Task 4');
function reverseEven(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i += 2) {
        var tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
    }
    str = arr.join('');
    return str;
}
console.log(reverseEven('12345678'));