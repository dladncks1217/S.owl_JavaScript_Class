function hello(num){
    if(num==0){
        return num;
    }else{
        return num+arguments.callee(num-1);
    }
}
console.log(hello(3));