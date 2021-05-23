import pool from "../db.mjs";
import sql from '@databases/sql';


async function ara(term) {
    console.log(term)
    const _term = `%${term}%`
    try {

        console.log(sql`SELECT * FROM listing WHERE title ILIKE ${_term}  OR description ILIKE ${_term}`)
        const result = await pool.query(sql`SELECT * FROM listing WHERE title ILIKE ${_term}  OR description ILIKE ${_term} `);
        return result;
    }
    catch (e) {
        return e;
    }
}


export { ara }