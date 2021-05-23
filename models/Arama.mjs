import pool from "../db.mjs";
import sql from '@databases/sql';


async function ara(term) {
    try {
        const result = await pool.query(sql`SELECT * FROM listing WHERE title LIKE ${term} OR description LIKE ${term}`);
        return result;
    }
    catch (e) {
        return e;
    }
}


export { ara }