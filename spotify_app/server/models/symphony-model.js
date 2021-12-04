const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Symphony = new Schema(
    {
        playlistname: { type: String, required: true },
        listofsong: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('symphonies', Symphony)

