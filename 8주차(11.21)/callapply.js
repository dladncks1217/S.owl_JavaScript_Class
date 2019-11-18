function hello(){
    console.log(Array.prototype.sort.call(arguments));
    
}
hello(1,3,2,5,1,2,3);
var a = hello(3,2,1);
function good(){
    Array.prototype.push.apply(arguments,["goodfunc",123]);
    console.log(arguments);
}
good();