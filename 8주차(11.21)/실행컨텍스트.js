// 실행 컨텍스트: 콜 스택에 차곡차곡 쌓이는 것들이라고 생각하면 됨
// ES에서 말하는 실행컨텍스트 : 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념
// 콜 스택이란? : 자바스크립트 코드블록이 실행되는 환경
/*
그럼 실행 컨텍스트는 언제생기는가?
    1. 전역코드 실행
    2. eval()함수를 통한 호출
    3. 함수 호출
*/
/*
    첫 번째로 활성 객체(변수 객체) 가 생긴다.
    실행컨텍스트 생기면 js엔진은 해당 컨텍스트에서 실행에 필요한 여러가지 정보를 담은 객체를 생성.
    이 객체 이름이 활성객체(변수객체).

    두 번째로 arguments객체 생성(없으면 안생김)

    세 번째로 스코프 정보 생성
    이 스코프는 현재 컨텍스트의 유효범위를 나타냄
    다른 스코프의 특정 변수에 접근해야 할 경우 이 스코프를 타고 현재 컨텍스트에서 상위 컨텍스트로 이동 가능

    네 번째는 변수 생성이다.
    주의할 점은 초기화는 각 변수나 함수에 해당하는 표현식이 실행되기 전까지는 이루어지지 않는다는 점이다.

    다섯 번째가 this바인딩이다.
    this가 어느 객체를 참조하는지를 나타낸다.
*/
function hello(param1,param2){
    var a = 1,b=2;
    function func(){
        return a+b;
    }
    return param1 + param2 + func();
}
hello(3,4);

// 10