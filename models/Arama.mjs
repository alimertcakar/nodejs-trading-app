import pool from "../db.mjs";
import sql from '@databases/sql';


pool.query(sql`CREATE TABLE IF NOT EXISTS eslestirmeler(
    id SERIAL PRIMARY KEY,
    terim varchar(120) NOT NULL,
    eslestirme varchar(120) NOT NULL
    )`).catch(e => console.log(e))




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

async function eslestirmeEkle(props) {
    const [terim, eslestirme] = props;
    try {
        const result = await pool.query(sql`INSERT INTO eslestirmeler (terim,eslestirme) values (${terim},${eslestirme}) `);
        return result;
    }
    catch (e) {
        return e;
    }
}

async function eslestirmeGetir(props) {
    try {
        const result = await pool.query(sql`select distinct terim,eslestirme from eslestirmeler`);
        console.log(result);
        return result;
    }
    catch (e) {
        return e;
    }
}





export { ara, eslestirmeEkle, eslestirmeGetir }