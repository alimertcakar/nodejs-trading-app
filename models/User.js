const pool = require("../db");

pool.query(`CREATE TABLE IF NOT EXISTS user_accounts(
    id integer PRIMARY KEY,
    username varchar(15) NOT NULL UNIQUE,
    password varchar(30) NOT NULL
    )`).catch(e => console.log(e))



//module.exports = { userCreate }