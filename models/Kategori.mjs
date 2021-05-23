import pool from "../db.mjs";
import sql from '@databases/sql';

pool.query(sql`CREATE TABLE IF NOT EXISTS kategori(
    id SERIAL PRIMARY KEY,
    kategori_name varchar(120) NOT NULL
    )`).catch(e => console.log(e))



