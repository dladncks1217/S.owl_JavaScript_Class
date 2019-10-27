// 객체는 언제나 함수로 생성된다.
function Abc(a,b){
    console.dir(arguments.callee);
    console.log('이 안에 있는 prototype은 뭘까?');
}
var a = new Abc();  // 생성자 함수 Abc를 통해 a라는 객체를 만들었다.

// 그렇다면 이 객체 생성은?
var b = {
    1:1,
};

var c = new Object(); // 이것과 같다.
// 여기서 Object는 자바스크립트에서 기본적으로 제공해주는 함수이다.
console.dir(c);

function hello(){
    console.dir(arguments.callee.prototype);  // hello 라는 이름의 함수의 프로토타입 프로퍼티이다.
}
hello();

