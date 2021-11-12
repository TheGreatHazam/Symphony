//start server: npm run devStart
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '3e13f2e9e17d478e8228d3773e8ed170',
        clientSecret: '12cd651795814814b32e37caaeb37a6e',
        refreshToken
    })

    spotifyApi.refreshAccessToken().then(
        (data) => {
            console.log(data.body)
        }).catch(() => {
        res.sendStatus(400)
    })
})

app.post('/login', (req,res) => {
    //pass the return URL as authorization code
    const code = req.body.code;

    //create an object of API as handler with different tags in the constructor (TODO: HARDCODED FOR NOW)
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '3e13f2e9e17d478e8228d3773e8ed170',
        clientSecret: '12cd651795814814b32e37caaeb37a6e'
    });

    //return from API using the code passed
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(()=>{
        res.sendStatus(400)
    })

    //logging in console
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);

    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);

    app.listen(3001)
})