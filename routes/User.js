const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router
    .post("/olustur", jsonParser, async (req, res) => {
        const { username, password } = req.body;

    })



module.exports = router;