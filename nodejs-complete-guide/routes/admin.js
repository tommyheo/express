const express = require("express");

//Router 받는 방법
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    // console.log("In another middleware!");
    res.send(
        "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
    );
});

//POST 요청만 받게 하는 방법
router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
