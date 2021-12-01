const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Spotify = new Schema(
    {
        name: { type: String, required: true },
        listofsongs: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('spotifies', Spotify)
