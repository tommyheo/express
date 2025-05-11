//Import express module
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// 순서를 잘 생각해야 함
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // 상태와 같이 response 할 떄
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(8080);
