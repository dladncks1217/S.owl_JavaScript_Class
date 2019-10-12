var domid = document.getElementById('buttonid');
domid.addEventListener('click',function(){
  if(domid.value == "버튼클릭함!"){
    domid.value = "버튼";
  }else{
    domid.value = "버튼클릭함!"
  }
});
domid.addEventListener('dblclick',function(){
  if(domid.value == "버튼 더블클릭함!"){
    domid.value = "버튼";
  }else{
    domid.value = "버튼 더블클릭함!"
  }
})
var domclass = document.getElementsByClassName('buttonclass')[0];

domclass.addEventListener('mouseover',function(){
  domclass.style.background = "red";
});
domclass.addEventListener('mouseout',function(){
  domclass.style.background = "white";
})
