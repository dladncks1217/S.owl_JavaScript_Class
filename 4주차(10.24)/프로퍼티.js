// 객체 프로퍼티 추가
var a = {
    property1:1,
};
console.log(a.property1);
a.property2 = 'hello';
console.log(a);

// 함수는?
function hello(){

};
hello.prototype1 = 1;
hello.prototype2 = "hello";
console.log(hello.prototype1);
console.log(hello.prototype2);
console.dir(hello);