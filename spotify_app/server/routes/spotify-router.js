const express = require('express')

const SpotifyCtrl = require('../controllers/spotify-ctrl')

const router = express.Router()

router.post('/spotify', SpotifyCtrl.createSpotify)
router.put('/spotify/:id', SpotifyCtrl.updateSpotify)
router.delete('/spotify/:id', SpotifyCtrl.deleteSpotify)
router.get('/spotify/:id', SpotifyCtrl.getSpotifyById)
router.get('/spotify', SpotifyCtrl.getSpotify)

module.exports = router
