import React from 'react'

import{Container} from 'react-bootstrap'

//authorization url. need client id, response type, redirect url, and tags that user can access (scope). add more tags to allow user to make more changes.
const Auth_URL = "https://accounts.spotify.com/authorize?client_id=3e13f2e9e17d478e8228d3773e8ed170&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login(){
    return(
        <container>
            <a className = "btn btn-success btn-lg" href={Auth_URL}>Login with Spotify</a>
        </container>
    )
}