const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// routes
const mentorRouter = require('./routes/mentor');
const menteeRouter = require('./routes/mentee');

/*
 * bodyparser.json() - body로 넘어온 데이터를 JSON 객체로 변환
 */
app.use(bodyParser.json());
/*
 * bodyParser.urlencoded({ extended }) - 중첩 객체를 허용할지 말지를 결정하는 옵션
 * 참고 링크(https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0/45690436#45690436)
 */
app.use(bodyParser.urlencoded({ extended: false }));
/*
 * cors() - CORS를 대응하기 위한 라이브러리 ( Access-Control-Allow-Origin: * )
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 */
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH'],
    credentials: true,
  }),
);

app.use('/mentor', mentorRouter);
app.use('/mentee', menteeRouter);

app.set('port', port);
app.listen(app.get('port'), () => {
  console.log(`app is listening in PORT ${app.get('port')}`);
});

// 나중 테스트 코드에서 쓰기 위해 export
module.exports = app;
