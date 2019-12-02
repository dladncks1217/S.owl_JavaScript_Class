npm init
main :(index.js) 부분 app.js로 바꿔줌 (app.js로 쓸거임)
npm i express express-generator (express)
npm i ejs (사용할 템플릿엔진)
npm i morgan(로그 찍어주는 모듈)
npm i dotenv (환경변수들을 지정해주는 모듈입니다.) // 그냥 안쓰기로함
npm i -g nodemon (실행해주는거임)
package.json에 가서 script 부분에 "start": "nodemon app"을 추가해줍시다.
app.js 생성.
public 디렉토리 생성(정적파일들) routes 디렉토리 생성(라우터 파일들) views 폴더 생성(ejs파일들 들어갈곳)
