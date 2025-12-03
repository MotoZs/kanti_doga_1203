import db from "./db.js";

db.prepare(
  `CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name STRING,
    price NUMBER,
    amount NUMBER
    )`
).run();

export const GetP = () => db.prepare(`SELECT * FROM products`).all();

export const PostP = () =>
  db.prepare(`INSERT INTO product (id, name, price, amount)`).run();

export const PutP = () =>
  db.prepare(`UPDATE cars SET ( name, price, amount)`).run();
