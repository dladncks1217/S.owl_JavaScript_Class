// 변수 할당
var a = 100;
var b = function(){          // 변수 a는 값을 저장하고 있는 반면,  b 는 함수의 참조값을 저장하고 있다.
    return 100;
};
console.log(b());            // 이게 실행되는 이유는 변수b가 함수의 참조값을 저장하고 있기 때문에 호출이 가능한 것이다.

// 프로퍼티 값으로 할당
var c = {};
c.property = function(){ return 200; };
console.log(c.property());    // 객체의 프로퍼티나 배열의 원소에 할당 가능.

// 함수 인자로 전달
var d = function(func){
    func();
};
d(function(){
    console.log('함수도 인자로 사용 가능');
});

//리턴 값으로 활용
var e = function(){
    return function(){
        console.log('이 함수는 함수의 리턴값이다.');
    };
};
var f = e();              // e함수의 결과값으로 리턴되는 함수를 변수 f에 저장해준다.
f();