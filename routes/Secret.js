const express = require("express");
const router = express.Router();


//sadece test amaçlı. auth control yapılmadı.
router.get("/", (req, res) => {
    if (req.session.passport) {
        res.send("Gizli sayfa.")
    }
    else {
        res.send("Giriş yapmadınız.")
    }
})



module.exports = router;