const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const symphonyRouter = require('./routes/symphony-router')

const app = express()
const hostname = 'http://ec2-3-143-218-228.us-east-2.compute.amazon.com';
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', symphonyRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
