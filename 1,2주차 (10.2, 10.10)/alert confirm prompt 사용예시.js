alert("이것은 alert창입니다.");
window.alert("window.alert와 같죠?");

if(confirm("확인 누르면 계속함")===true){
  var a = prompt("변수 a 입력");
  var b = prompt('변수 b 입력');
  document.write(parseInt(a)+parseInt(b));
}else{
  document.write('아니오를 눌렀음');
}
