const path = require("path");

//Import express module
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
//정적파일 임포트
app.use(express.static(path.join(__dirname, "public")));

// 순서를 잘 생각해야 함
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // 상태와 같이 response 할 떄
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8080);
