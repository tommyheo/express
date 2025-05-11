//request를 받기 위해서 http 모듈 가져오기
const http = require("http");

//서버 생성
// createServer Callback function
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});

// 서버가 종료되지 않고 계속 실행되어 요청을 듣게 하는 메서드
// 인자 -  포트번호
server.listen(8080);
