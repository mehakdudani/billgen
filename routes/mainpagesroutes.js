//all required modules
let express = require("express");
let router = express.Router();

//router to index(main page)
router.get("/", (req, res) => {
    res.status(200).render("../view/mainpages/index.ejs", { data: "" });
})

router.get("/index", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs", { data: "" });
});

router.get("/*", (req, res) => {
    res.status(404).render("../view/mainpages/error404.ejs", { data: "" });
});

router.post("/Generate", (req, res) => {
    let userdata = {
        c_name: req.body.cname,
        p_name: req.body.pname,
        p_price: req.body.pprice,
        qty: req.body.qty
    }
    console.log(userdata);
    res.status(200).render("../view/bill/bill.ejs", { data: userdata });
})
module.exports = router;