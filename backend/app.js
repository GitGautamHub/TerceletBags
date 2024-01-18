const express = require('express');
const app = express();
const errorMiddle = require("./middleware/error")

app.use(express.json());


//Route Imports
const product = require("./routes/productRoute");


//Middleware for Errors
app.use(errorMiddle);
app.use("/api/v1",product)







module.exports = app