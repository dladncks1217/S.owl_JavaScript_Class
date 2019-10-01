var box = document.querySelector('div');
var options = document.getElementById('options');

options.addEventListener('click',function(){
  box.style.background = options.value;
});
