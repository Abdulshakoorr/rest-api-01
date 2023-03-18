const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const productsRoutes = require("./routes/products")
const connectDB = require("./db/connectDB.js");
// middle ware router 
app.use("/api/product",productsRoutes)



const start =async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=> console.log(`server listening on http://localhost:${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();