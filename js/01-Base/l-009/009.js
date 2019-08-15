document.write('<h4>Task 1</h4>');
var str = "hello world!";
str1 = str.slice(0, 1);
str2 = str.slice(1);
str1 = str1.toUpperCase();
str = str1 + str2;
console.log(str);

var str = "hello world!";
str1 = str[0];
str2 = str.slice(1);
str1 = str1.toUpperCase();
str = str1 + str2;
console.log(str);


document.write('<h4>Task 2</h4>');
var str = '123456';
var arr = str.split('').reverse();
str = arr.join('');
console.log(str);

document.write('<h4>Task 3</h4>');
var str = 'http://ermeck.com';
if (str.substring(0, 7) == 'http://') {
	console.log('yep');
} else {
	console.log('no');
}

document.write('<h4>Task 4</h4>');
var str = 'filenamestr.html';
if (str.slice(-5) == '.html') {
	console.log('yep');
} else {
	console.log('no');
}