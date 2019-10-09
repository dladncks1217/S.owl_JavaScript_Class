/*
객체(Object)란 단지 이름이 지정된 프로퍼티(property)의 모음이며, 키(key) : 값(value)의 쌍으로 이루어진 목록이다.
자바스크립트에서 기본 데이터타입은 하나의 값만을 가지는 데 비해, 참조 타입인 객체는 여러 개의 프로퍼티를 포함할 수 있다.
여기서 참조 타입이라 함은 객체의 실제 위치를 가리키는 포인터이다.
*/
// 객체생성법1
var object1 = {
    property1: "value1",
    property2: 2,
    property3: function(){
        console.log("I'm property3.");
        console.log('my name is method');
    },
    property4:true,
};

console.log(typeof object1);
console.log(object1);
//for in 문
for(property in object1){
    console.log("프로퍼티 이름은 "+property+"프로퍼티 값은 "+object1[property]);
}
object1.property3();

// 객체생성법2
var object2 = new Object();
object2.property1 = "hello!";
object2.property2 = "I'm property value";
object2.property3 = function(){
    console.log("my name is method");
};
for(i in object2){
    console.log("프로퍼티 이름은 "+i+" 프로퍼티 값은 "+object2[i]);
}

// 객체생성법3
var Object3 = function(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}
var usesaeng = new Object3(1,"property value",function(){
    console.log('hi');
});
for(property in usesaeng){
    console.log(property+"이건 프로퍼티    이건 프로퍼티값"+usesaeng[property]);
}