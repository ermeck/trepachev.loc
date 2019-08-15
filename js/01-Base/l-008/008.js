document.write('<h2>concat</h2>');

document.write('<h4>Task 1</h4>');
var a = [1, 2, 3], b = [4, 5, 6];
var c = a.concat(b);
for (var i = 0; i < c.length; i++) {
    document.write(c[i] + '<br>');
}

//////////////////////////////////////////////////////////////

document.write('<h2>reverse</h2>');

document.write('<h4>Task 2</h4>');
var a = [1, 2, 3];
a.reverse();
for (var i = 0; i < a.length; i++) {
    document.write(a[i] + '<br>');
}

//////////////////////////////////////////////////////////////


document.write('<h2>puhs, unshift</h2>');

document.write('<h4>Task 3</h4>');
var arr = [1, 2, 3];
arr.push(4, 5);
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + ', ');
}

document.write('<h4>Task 4</h4>');
var arr = [1, 2, 3];
arr.unshift(4, 5);
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + ', ');
}

//////////////////////////////////////////////////////////////

document.write('<h2>shift, pop</h2>');

document.write('<h4>Task 5</h4>');
var arr = ['js', 'css', 'jq'];
var elem = arr.shift();
document.write(elem);

document.write('<h4>Task 6</h4>');
var arr = ['js', 'css', 'jq'];
var elem = arr.pop();
document.write(elem);

/////////////////////////////////////////////////////////////

document.write('<h2>slice</h2>');

document.write('<h4>Task 7</h4>');
var arr = ['a', 'b', 'c', 'd', 'e'];
var arrNew = arr.slice(0, 3);
for (var i = 0; i < arrNew.length; i++) {
    document.write(arrNew[i] + ', ');
}

document.write('<h4>Task 8</h4>');
var arr = ['a', 'b', 'c', 'd', 'e'];
var arrNew = arr.slice(-2);
for (var i = 0; i < arrNew.length; i++) {
    document.write(arrNew[i] + ', ');
}

///////////////////////////////////////////////////////////////

document.write('<h2>splice</h2>');

document.write('<h4>Task 9</h4>');
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

document.write('<h4>Task 10</h4>');
var arr = [1, 2, 3, 4, 5];
arr.splice(0, 1);
arr.splice(-1, 1);
console.log(arr);

document.write('<h4>Task 11</h4>');
var arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

document.write('<h4>Task 12</h4>');
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.push('e');
console.log(arr);

//////////////////////////////////////////////////////////

document.write('<h2>sort</h2>');

document.write('<h4>Task 13</h4>');
var arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);

//////////////////////////////////////////////////////////

document.write('<h2>Object.keys</h2>');

document.write('<h4>Task 14</h4>');
var obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
}

var arr = Object.keys(obj);
console.log(arr);