const express = require('express'); // npm 에서 설치했던 express 패키지를 가져오는 코드입니다. 자바에서 import 비슷한 느낌이라고 생각해도 될듯.
const path = require('path'); // 경로관련 모듈입니다. express 내장입니다.
const logger = require('morgan'); // 로그 찍어주는 모듈


const indexRouter = require('./routes/index'); // routes/index.js파일을 가져오는 코드입니다. 뒤에 index까지만 하더라도 어차피 js파일이라 .js는 안붙여도 됩니다.
const moveRouter = require('./routes/movepage'); // routes/movepage.js파일을 가져오는 코드입니다.
const app = express();

app.set('views',path.join(__dirname,'views')); // views관련 파일들은 기본적으로 경로를 'views' 라는 폴더에서 찾기 시작합니다.
app.set('view engine', 'ejs');  // view engine 은 템플릿 엔진 ejs를 사용합니다.



app.use(logger('dev'));  // npm 에서 받아온 morgan 모듈을 app.use를 통해 사용합니다.
app.use(express.static(path.join(__dirname,'public'))); // 정적 파일은 기본적으로 모두 'public'폴더를 기본 경로로 찾기 시작합니다.
app.use(express.json()); 
app.use(express.urlencoded({extended:false})); 


app.use('/',indexRouter); // '/' 경로로 이동했을 경우 정의된 indexRouter을 불러옵니다. 즉, ./routes/index.js 의 코드가 실행됩니다.
app.use('/movepage',moveRouter); // '/movepage' 경로로 이동했을 경우 정의된 moveRouter을 불러옵니다.

app.use((req,res,next)=>{  // http 404 에러처리 미들웨어입니다. 참고로 404는 not found 에러입니다.
    const err = new Error('NOT FOUND');
    err.status = 404;
    next(err);
});

app.use((err,req,res)=>{  // http 500 에러처리 미들웨어입니다.
    res.locals.message = err.message;
    res.locals.message = req.app.get('env') === 'development' ? err :{};
    res.status(err.status||500);
});

app.listen(8011,()=>{ // 포트번호 지정입니다.
    console.log('8011번 포트에서 서버 대기중입니다!');
});