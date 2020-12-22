const pool = require("../db");
const sql = require('@databases/sql');

pool.query(sql`CREATE TABLE IF NOT EXISTS user_account(
    id SERIAL PRIMARY KEY,
    username varchar(15) NOT NULL UNIQUE,
    password varchar(30) NOT NULL
    )`).catch(e => console.log(e))



function createUser(username, pass) {
    pool.query(sql`INSERT INTO user_account(username,password) VALUES (${username}, ${pass})`)
}
function deleteUserByUsername(username) {
    pool.query(sql`DELETE FROM user_account WHERE username = ${username}`)
}
function updateUsernameByIdOrUsername(id = "null", username, newUserName) {
    pool.query(sql`UPDATE user_account SET username=${newUserName} WHERE 
    user_account.username = ${username} OR
    user_account.id = ${id}
    `)
}




module.exports = { createUser, deleteUserByUsername, updateUsernameByIdOrUsername }