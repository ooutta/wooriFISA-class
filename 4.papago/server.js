// Node.js, Express 패키지를 활용하여 간단한 서버 구성

// express 모듈을 설치해다고 해서 바로 사용할 수 있는 것은 아님
// server.js에서 사용하려면 해당 모듈을 import 해야 함
const express = require('express'); // express 모듈 불러오기
const app = express(); // express app 인스턴스 생성
const httpRequest = require('request');

// TODO: .dotenv
require('dotenv').config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// 미들웨어 설정
app.use(express.static('public')) // 정적인 자원(staticc)은 public 폴더에 
app.use(express.json()); //역직렬화 처리용 모듈

// 127.0.0.1:3000/ 경로(Root)로 접근했을 때 동작시킬 핸들러
app.get('/', (request, response) => {
    response.sendFile('index.html');
})

// TODO: 그 외에 언어 감지, 언어 번역 요청 시 동작할 핸들러

// 127.0.0.1:3000/detect 경로로 브라우저가 접근 시 동작할 핸들러
app.post('/detect', (request, response) => {
    console.log(request.body);

    // 언어 감지 요청을 위한 요청 메시지 구성정보
    // 1. URL
    const url = 'https://openapi.naver.com/v1/papago/detectLangs';

    // 2. Body, Header 등 데이터
    const options = {
        url,
        form: request.body,
        headers:{
            'Content-Type': 'application/json',
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret,
        }
    }
    httpRequest.post(options, (error, httpResponse, body) => {
        if(!error && response.statusCode === 200) {
            response.send(body); // 서버가 클라이언트로 데이터를 응답
        }
    });
});

app.post('/translate', (request, response) => {
    const url = 'https://openapi.naver.com/v1/papago/n2mt';

    // 번역
    const options2 = {
        url,
        form: request.body,
        headers:{
            'Content-Type': 'application/json',
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret,
        }
    }
    console.log(options2.form);
    httpRequest.post(options2, (error, httpResponse, body) => {
        if(!error && response.statusCode === 200) {
            response.send(body); // 서버가 클라이언트로 데이터를 응답
        } else {
            console.log(error);
        }
    });
});

const port = 3000;
app.listen(port, () => console.log(`http://127.0.0.1:3000/ app listening on port ${port}`));
