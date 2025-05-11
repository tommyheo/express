//Import express module
const express = require("express");

const app = express();

//middleware
//next => 다음 미들웨어로 이동하기 위한 인자, function
app.use((req, res, next) => {
    console.log("In the middleware!");
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log("In another middleware!");
    res.send("<h1>Hello from Express!</h1>");
});

app.listen(8080);
