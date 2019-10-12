
setTimeout(function(){
  console.log("setTimeout으로 5초 지났음");
},5000);
var a = 1;
setInterval(function(){
  console.log(a);
  a++;
},1000)
