function outerFunc(){
    var local = 8;
    function innerFunc(innerArg){
        console.log(innerArg+local);
        console.log("이미 생명주기가 끝난 외부 함수의 변수를 참조하는");
        console.log("나는 클로저 함수");
    }
    return innerFunc(2);
}
outerFunc();