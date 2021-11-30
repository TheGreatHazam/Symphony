const Spotify = require('../models/spotify-model')

createSpotify = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a spotify',
        })
    }

    const spotify = new Spotify(body)

    if (!spotify) {
        return res.status(400).json({ success: false, error: err })
    }

    spotify
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: spotify._id,
                message: 'Spotify created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Spotify not created!',
            })
        })
}

updateSpotify = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Spotify.findOne({ _id: req.params.id }, (err, spotify) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Spotify not found!',
            })
        }
        spotify.name = body.name
        spotify.listofplaylist = body.listofplaylist
        spotify.listofsongs = body.listofsongs
        spotify
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: spotify._id,
                    message: 'Spotify updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Spotify not updated!',
                })
            })
    })
}

deleteSpotify = async (req, res) => {
    await Spotify.findOneAndDelete({ _id: req.params.id }, (err, spotify) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!spotify) {
            return res
                .status(404)
                .json({ success: false, error: `Spotify not found` })
        }

        return res.status(200).json({ success: true, data: spotify })
    }).catch(err => console.log(err))
}

getSpotifyById = async (req, res) => {
    await Spotify.findOne({ _id: req.params.id }, (err, spotify) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!spotify) {
            return res
                .status(404)
                .json({ success: false, error: `Spotify not found` })
        }
        return res.status(200).json({ success: true, data: spotify })
    }).clone().catch(err => console.log(err))
}

getSpotifies = async (req, res) => {
    await Spotify.find({}, (err, spotifies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!spotifies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Spotify not found` })
        }
        return res.status(200).json({ success: true, data: spotifies })
    }).catch(err => console.log(err))
}

module.exports = {
    createSpotify,
    updateSpotify,
    deleteSpotify,
    getSpotifies,
    getSpotifyById,
}
