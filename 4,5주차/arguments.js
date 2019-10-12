function check(a,b){
    console.log(a,b);
    console.dir(arguments);
}
check(1,2); // 맞게 호출
check(1);  // 정의된 인자보다 적으면 넘겨주지 않은 인자는 undefined
check();  // 정의된 인자보다 적으면 넘겨주지 않은 인자는 undefined
check(1,2,3);   //초과된 인자는 무시
// 이럴 때 호출된 인자의 개수를 확인하고 이에 따라 동작을 다르게 해줄 수 있도록 해주는 것이 arguments 객체이다.
console.log(check.arguments);

//사용 예시
function example(){
    var result = 0;
    for(var i = 0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}
console.log(example(1,2,3));
console.log(example(1,2,3,4,5,6,7,8,9,10));
