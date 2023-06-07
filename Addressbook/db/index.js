const mongoose = require('mongoose')

const url = 'mongodb+srv://gokul2k1:gokul123@cluster0.k9hfaua.mongodb.net/addressbook?retryWrites=true&w=majority'

const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URL || url, {
        useNewUrlParser: false
    },(err) => {
        console.log('mongo db connected successfully')
    })
}
module.exports = connectDB