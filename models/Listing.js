const pool = require("../db");
const sql = require('@databases/sql');

pool.query(sql`CREATE TABLE IF NOT EXISTS listing(
    id SERIAL PRIMARY KEY,
    title varchar(120) NOT NULL,
    description varchar(240) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user_account(id)
    )`).catch(e => console.log(e))



function publishListing(title, description, publisherId) {
    pool.query(sql`INSERT INTO listing(title,description,user_id) VALUES (${title}, ${description},${publisherId})`)
}




module.exports = { publishListing }