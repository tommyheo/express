//request를 받기 위해서 http 모듈 가져오기
const http = require("http");
const fs = require("fs");

//서버 생성
// createServer Callback function
const server = http.createServer((req, res) => {
    //url 파싱
    const url = req.url;
    // method 파싱
    const method = req.method;

    if (url === "/") {
        //response html설정
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        //특정 이벤트를 들을 수 있는 메서드 on()
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            // console.log(parsedBody);
            fs.writeFileSync("message.txt", message);
        });
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
    //response headers 설정
    res.setHeader("Content-Type", "text/html");
    //response html설정
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
});

// 서버가 종료되지 않고 계속 실행되어 요청을 듣게 하는 메서드
// 인자 -  포트번호
server.listen(8080);
