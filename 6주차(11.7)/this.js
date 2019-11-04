var a = 1;
// 1번 경우
function ex1(){
    var a = 123;
    console.log(this.a);
}
ex1(); // 1

// 2번 경우
var b = {
    a:123,
    b:function(){
        console.log(this.a);
    }
}
b.b(); // 123

// 3번 경우
function Hello(a){
    this.a = a;
}
var ex3 = new Hello(12);
console.log(ex3.a);  //12


// 문제
var ex1 = 1;
var ex = {
    a:function(){
        var ex1 = 123;
        function hello(){
            console.log(this.ex1); // 메서드 안의 "일반함수" 에 있으므로 전역에 바인딩.
        }
        hello();
    }
}
ex.a();
// 결과: 1