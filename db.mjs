import createConnectionPool from '@databases/pg';
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production" || true) { //or true <- kaldırılcak
    dotenv.config();
}

// const { Pool } = require('pg')
// const connectionString = process.env.connectionString;
// const pool = new Pool({
//     connectionString, ssl: {
//         rejectUnauthorized: false
//     }
// })

// pool.on('error', (err, client) => {
//     console.error('Unexpected error on idle client', err)
//     process.exit(-1)
// })


// //çalışıyor mu testi 2+2
// pool.query("select 2+2").then(res => console.log(res.rows[0]))


// module.exports = pool;


const connectionString = process.env.connectionString;


const db = createConnectionPool(connectionString);
export default db;
