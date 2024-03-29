const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
    .then((data) => {
        console.log(`Mongodb connected with sever : ${data.connection.host}`);
    }).catch((err) => {
        console.error(err);
    })
}

module.exports = connectDatabase