function Hello(){

}
var a = new Hello();
console.dir(a);

//  프로토타입 객체를 변경
Hello.prototype = {
    a:1,
    b:1,
}

var b = new Hello();
console.dir(b);