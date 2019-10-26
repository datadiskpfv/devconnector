const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true, useFindAndModify: false});
        console.log("MongoDB connected!!!")
    } catch(err) {
        // Exit it out of the application
        process.on('exit', function() {
            return console.log(`Application stopped due to unable to connect to Db - ${err}`)
        })
    }
}

module.exports = connectDB;
