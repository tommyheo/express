const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
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
        //특정 이벤트를 들을 수 있는 메서드 on() // data 변경이 있을 떄마다 리스닝
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            // 모든 데이터 수신이 끝났을 때 실행
            parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            // console.log(parsedBody);
            fs.writeFile("message.txt", message, (err) => {
                // 파일 쓰기가 완료되었을 때 실행
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    //response headers 설정
    res.setHeader("Content-Type", "text/html");
    //response html설정
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: "Some hard coded text",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

exports.handler = requestHandler;
exports.someText = "Some hard coded text";
