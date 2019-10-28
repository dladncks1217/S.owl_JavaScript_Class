function func1(a){
    if(typeof a === "function"){
        a();
    }else{
        console.log(a);
    }
    console.log(typeof a)
}
var b = function(){
    console.log("i'm function B");
    
}

func1("hello i'm string");
func1(b);