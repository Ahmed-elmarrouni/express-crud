const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB conected : ${conn.connection.host}`.cyan.underline)
    } catch (Error) {
        console.log(Error)
        process.exit(1)
    }
}

module.exports = connectDB