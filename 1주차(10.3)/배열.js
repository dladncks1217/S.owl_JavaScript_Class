var array1 = new Array(); // array1 = [];와 같다.
var array2 = [1,2,3,4,5,6,7,8,9,0];
var array3 = [1,"hello",true,];
var array4 = [[1,{a:1,b:2},[2,{a:3,b:4}]]];

var array5 = [1,,3];

var array6 = new Array(10);
var array7 = new Array(5,4,3,2,1,"hello","test");

console.log(array2.length);
console.log(array3[1]);
var i = 1;
console.log(array3[i+1]);
console.log(array5[1]);
console.log(array6[9]);
console.log(array7[5]);
