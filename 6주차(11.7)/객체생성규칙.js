function Hello(){ // 생성자 함수로 쓰는 함수는 함수 첫 이름을 대문자로 작성한다.(문법상 문제는 안되지만 암묵적으로 그렇게 한다.)
    a = 1;
    b = 2;
}
var c = new Hello();
var d = new Hello();
console.log(c);
console.log(d);
// 이와 같이 생성자 함수를 이용해서 객체를 생성한다.
// a와 b 가 가리키는 객체 모두 생성자함수 Hello로부터 파생된 객체이므로, a의a와 b의 a는 다르다.
// 그럼 Hello를 이용해 100개의 객체를 생성하면 a와b가 100개씩 생기는 것. 메모리낭비이다.
// 이 때 prototype이라는 것을 이용.
console.dir(Hello.prototype);
/* 
함수가 호출되면, 함수이름.prototype 이라는 객체가 동시에 생긴다.
이 함수에는 constructor 이라는 프로퍼티가 존재.
constructor은 다시 호출한 함수를 가리킴.
*/
console.dir(c.__proto__);
/* 
그렇게 생성된 객체 c를 console.dir로 찍어보면, __proto__라는것이 있다.
이것의 이름도 prototype이다.
다만, 객체 생성 시 생긴 prototype은 자신을 생성한 생성자 함수의 prototype객체를 가리긴다.
저 코드에서는 Hello.prototype을 가리키는 것이다.
*/
console.dir(c.__proto__.constructor);
/*
그렇다면 c.__proto__의 constructor을 찾았으므로, Hello.prototype의 constructor을 찾은 것이 되는 것이다.
따라서 Hello가 console.dir로 찍혀 나올 것이다.
*/