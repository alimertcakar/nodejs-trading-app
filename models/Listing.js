const pool = require("../db");
const sql = require('@databases/sql');

pool.query(sql`CREATE TABLE IF NOT EXISTS listing(
    id SERIAL PRIMARY KEY,
    title varchar(120) NOT NULL,
    description varchar(240) NOT NULL,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user_account(id),
    created_at timestamp NOT NULL DEFAULT NOW()
    )`).catch(e => console.log(e))



function publishListing(title, description, price, stock, publisherId) {
    pool.query(sql`INSERT INTO listing(title,description,price,stock,user_id) 
    VALUES (${title}, ${description},${price},${stock},${publisherId})`)
}




module.exports = { publishListing }