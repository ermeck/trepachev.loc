function outputH2(text) {
    document.write('<h2>' + text + '</h2>');
}

function outputH4(text) {
    document.write('<h4>' + text + '</h4>');
}

function outputArray(arr) {
    var num = arr.length;
    document.write('<pre>');
    document.write('Array(' + num + ') [');
    for (var i = 0; i < num; i++) {
        document.write('"' + arr[i] +'"');
        if (i != num - 1)
            document.write(", ");
    }
    document.write(']');
    document.write('</pre>');
}