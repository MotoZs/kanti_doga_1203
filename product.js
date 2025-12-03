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

export const PostP = (name, price, amount) =>
  db.prepare(`INSERT INTO products (id, name, price, amount) VALUES (?,?,?)`).run(name, price, amount);

export const PutP = (name, price, amount, id) =>
  db.prepare(`UPDATE cars SET name, price, amount WHERE id = ?`).run(name, price, amount, id);
