function outerFunc(){
    var local = 8;
    function innerFunc(innerArg){
        console.log(innerArg+local);
    }
    return innerFunc(2);
}
outerFunc();

