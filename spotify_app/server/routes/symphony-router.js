const express = require('express')

const SymphonyCtrl = require('../controllers/symphony-ctrl')

const router = express.Router()

router.post('/symphony', SymphonyCtrl.createSymphony)
router.put('/symphony/:id', SymphonyCtrl.updateSymphony)
router.delete('/symphony/:id', SymphonyCtrl.deleteSymphony)
router.get('/symphony/:id', SymphonyCtrl.getSymphonyById)
router.get('/symphonies', SymphonyCtrl.getSymphonies)

module.exports = router

