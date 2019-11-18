console.log("전역");
function func1(){
    console.log("컨텍스트1");
}
function func2(){
    func1();
    console.log("컨텍스트2");
}
func2();