import pool from "../db.mjs";
import sql from '@databases/sql';

pool.query(sql`CREATE TABLE IF NOT EXISTS listing(
    id SERIAL PRIMARY KEY,
    title varchar(120) NOT NULL,
    description varchar(240) NOT NULL,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES user_account(id),
    created_at timestamp NOT NULL DEFAULT NOW()
    )`).catch(e => console.log(e))



async function publishListing(title, description, price, stock, publisherId) {
    try {
        const result = await pool.query(sql`INSERT INTO listing(title,description,price,stock,user_id) 
    VALUES (${title}, ${description},${price},${stock},${publisherId})`);
        return "İlan başarıyla eklendi";
    }
    catch (e) {
        return e;
    }
}

async function updateListingPrice(price, listingId) {
    try {
        const result = await pool.query(sql`UPDATE listing
        SET price=${price} where id =${listingId}`);
        return "İlan fiyatı başarıyla güncellendi";
    }
    catch (e) {
        return e;
    }
}

async function updateListingStock(stock, listingId) {
    try {
        const result = await pool.query(sql`UPDATE listing
        SET stock=${stock} where id =${listingId}`);
        return "İlan stoğu başarıyla güncellendi";
    }
    catch (e) {
        return e;
    }
}

async function getAllListings() {
    try {
        // const result = await pool.query(sql`SELECT * FROM listing`);
        const result = await pool.query(sql`SELECT listing.*, user_account.username from listing join user_account on user_account.id = listing.user_id`);
        console.log(result)
        return result;
    }
    catch (e) {
        return e;
    }
}

async function getSingleListing(id) {
    console.log(id)
    try {
        // const result = await pool.query(sql`SELECT listing.*, user_account.username from listing join user_account on user_account.id = listing.user_id`);
        const result = await pool.query(sql`SELECT listing.*, to_char( listing.created_at, 'DD/MM/YYYY HH24:MI') as created_at_formatted, user_account.* from listing JOIN user_account on user_account.id = listing.user_id WHERE listing.id = ${id}`);
        return result;
    }
    catch (e) {
        return e;
    }
}

export { publishListing, updateListingPrice, updateListingStock, getAllListings, getSingleListing }