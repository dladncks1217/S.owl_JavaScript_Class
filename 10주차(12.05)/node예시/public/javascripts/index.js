document.querySelector('#button').addEventListener('click',()=>{ // 1, 2주차에 했던 내용들입니다. 콜백부분에 arrowFunction만 써준것.
    console.log('눌림');
    document.querySelector('#button').value = "나는 눌린 버튼";
});
document.querySelector('#move').addEventListener('click',()=>{
    location.href = "/movepage";
})