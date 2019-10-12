function func1(){
	console.log("this is func1");
}
var a = function(){
	console.log("this is anonymous function");
}
// 변수에도 값으로 함수 할당 가능.
console.log(typeof(func1));
console.log(typeof(a));