// call 사용 형식
var a = {
    a:1,
    b:function(){
        console.log(this.a);
    },
    c:function(a,b,c){
        console.log(a,b,c);
    }
}
var b = {
    a:123,
}
a.b();
a.b.call(b);
a.c.call(null,3,2,1);

// 예시 2
var hi = {
    a:'histring',
    b:function(){
        console.log(this.a);
    }
};
var good = {
    a:'goodstring',
};

hi.b.call(good);

// call을 이용한 Array에서만 쓸수있는 sort()메서드를 유사배열객체인 arguments객체에 바인딩.
function hello(a,b,c){
    console.log(Array.prototype.sort.call(arguments));
}
hello(13,97,52,22,0,60);
