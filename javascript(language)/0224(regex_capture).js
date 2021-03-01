// \w 모든문자, \w+ 하나이상 문자
// \s 공백
var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern,"$2, $1");
console.log(result);