const express = require('express'); // 익스프레스를 가져옵니다.
const router = express.Router();  // express 안의 Router()을 가져와 router 변수에 넣어줍니다.

router.get('/',(req,res,next)=>{ // '/' 경로에 도달했을 경우에 이 미들웨어가 실행됩니다.
    res.render('index',{a:'안녕'}); // app.js에 기본 파일확장자가 ejs이므로 .ejs는 생략 가능
});

module.exports = router;