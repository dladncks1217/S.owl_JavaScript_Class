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