const mongoose = require('mongoose')

mongoose
    .connect('mongodb://3.143.218.228:3000/api/spotify', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
