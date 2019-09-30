var a = 0;
while(a<5){
  if(a==2){
    console.log("지금 while문 a==2에서 조건문걸림");
  }else{
    console.log("조건문 안걸리는중");
  }
  console.log("while문 "+a);
  a++;
}
for(var i = 0;i<10;i++){
  if(i==5){
    console.log("지금 for문 i==5에서 조건문걸림");
  }
  console.log("for문 "+i);
}
