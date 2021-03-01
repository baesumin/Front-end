var pattern1 = /a/;
var pattern2 = new RegExp('a');
console.log(pattern1.exec('abcde'));
console.log(pattern1.test('abcde'));
console.log('abcdef'.match(pattern1));
console.log('abcdef'.replace(pattern1,'A'));

var xi = /a/;
var oi = /a/i; //대문자,소문자 구분 x
console.log("Abcde".match(xi));
console.log("Abcde".match(oi));

var xg = /a/;
var og = /a/g; //중복포함
console.log("abcdea".match(xg));
console.log("abcdea".match(og));

var ig = /a/ig;