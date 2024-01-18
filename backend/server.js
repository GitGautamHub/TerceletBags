const app = require('./app')

const connectDatabase = require("./config/database");

const dotenv = require('dotenv');

//config
dotenv.config({ path: "backend/config/config.env" })

//connection to database
connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`server is working on https://localhost:${process.env.PORT}`)
})