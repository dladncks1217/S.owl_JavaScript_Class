let a = () =>{
    console.log('나는 arrowFunction');
}
// 와 같이 사용
// new 연산자와 함께 사용 시 에러가 발생한다.
// 인터넷 익스플로러는 호환 안됨 (진짜 익스플로러 쓰지 마세요 화나니까)

// 콜백으로 예시
document.querySelector('#hello').addEventListener('click',()=>{
    document.querySelector('#hello').textContent = "hello";
});