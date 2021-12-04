const Symphony = require('../models/symphony-model')

createSymphony = (req, res) => {
    con
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Symphony',
        })
    }
    
    const symphony = new Symphony(body)

    if (!symphony) {
        return res.status(400).json({ success: false, error: err })
    }

    symphony
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: symphony._id,
                message: 'Symphony created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Symphony not created!',
            })
        })
}

updateSymphony= async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Symphony.findOne({ _id: req.params.id }, (err, symphony) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Symphony not found!',
            })
        }
        symphony.playlistname = body.playlistname
        symphony.listofsong = body.listofsong
        symphony
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: symphony._id,
                    message: 'Symphony updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Symphony not updated!',
                })
            })
    })
}

deleteSymphony = async (req, res) => {
    await Symphony.findOneAndDelete({ _id: req.params.id }, (err, symphony) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!symphony) {
            return res
                .status(404)
                .json({ success: false, error: `Symphony not found` })
        }

        return res.status(200).json({ success: true, data: symphony })
    }).clone().catch(err => console.log(err))
}

getSymphonyById = async (req, res) => {
    await Symphony.findOne({ _id: req.params.id }, (err, symphony) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!symphony) {
            return res
                .status(404)
                .json({ success: false, error: `Symphony not found` })
        }
        return res.status(200).json({ success: true, data: symphony })
    }).clone().catch(err => console.log(err))
}

getSymphonies = async (req, res) => {
    await Symphony.find({}, (err, symphonies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!symphonies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Symphony not found` })
        }
        return res.status(200).json({ success: true, data: symphonies })
    }).clone().catch(err => console.log(err))
}

getUrl = async (req, res) => {

}

module.exports = {
    createSymphony,
    updateSymphony,
    deleteSymphony,
    getSymphonies,
    getSymphonyById,
}

