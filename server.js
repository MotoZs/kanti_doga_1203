import * as products from "./product.js"
import express, { json } from "express"

export const app = express.Router();

app.get("/api/product", (req, res) => {
    const allP = products.GetP()
    return res.status(204).json(allP)
});

app.post("/api/product", (req, res) => {
    const (name, price, amount) = req.body;
    if (!name || !price || !amount){
        res.status(400),json("hiba")
    }
    const newProduct = products.PostP(name, price, amount)
    return res.status(204).json(newProduct)
})

app.put("/api/product", (req, res) => {
    const id = req.params.id
    const (name, price, amount) = req.body;
if (!name || !price || !amount){
        res.status(400),json("hiba")
    }

    const UpdatedP = products.PutP(name, price, amount, id)
    return res.status(204).json(UpdatedP)

})