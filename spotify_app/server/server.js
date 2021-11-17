const express = require('express')
const cors = require('cors')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()
const port = 8000

app.use(cors()) // To handle cross-origin requests
app.use(express.json()); // To parse JSON bodies

const credentials = {
  clientId: '3e13f2e9e17d478e8228d3773e8ed170',
  clientSecret: '12cd651795814814b32e37caaeb37a6e',
  redirectUri: 'http://localhost:3000/',
};

app.get('/', (req, res) => {
  console.log('Hello World!')
})

app.post('/login', (req,res) => {
//  setup
  let spotifyApi = new spotifyWebApi(credentials)

//  Get the "code" value posted from the client-side and get the user's accessToken from the spotify api
  const code = req.body.code

  // Retrieve an access token
  spotifyApi.authorizationCodeGrant(code).then((data) => {

    // Returning the User's AccessToken in the json formate
    res.json({
        accessToken : data.body.access_token,
        refreshToken : data.body.refresh_token,
        expiresIn: data.body.expires_in,
    })
  })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400)
      })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})