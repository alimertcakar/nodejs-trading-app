import pool from "../db.mjs";
import sql from '@databases/sql';


async function ara(term) {
    console.log(term)
    try {
        const result = await pool.query(sql`SELECT * FROM listing WHERE title ILIKE '%${term}%' OR description ILIKE '%${term}%'`);
        return result;
    }
    catch (e) {
        return e;
    }
}


export { ara }