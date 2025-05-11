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

app.listen(8080);
