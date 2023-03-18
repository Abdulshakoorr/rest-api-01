const dotenv = require("dotenv").config();
const connectDB = require("./db/connectDB");
const products = require("./models/product");
const productsData = require("./products.json");



const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await products.deleteMany();
        await products.create(productsData);

        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

start();