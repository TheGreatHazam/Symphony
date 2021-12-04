const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Spotify = new Schema(
    {
        playlistname: { type: String, required: true },
        listofsong: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('spotifies', Spotify)
