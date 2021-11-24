import React, {useEffect} from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: "3e13f2e9e17d478e8228d3773e8ed170",
});

const Dashboard_old = ({code})=>{
    const accessToken = useAuth(code);

    useEffect(() => {
        if(!accessToken) return;

        //setting up spotify api with access token
        spotifyApi.setAccessToken(accessToken);

        //get user detail using getMe (TODO: ADD MORE FUNCTIONS HERE)
        spotifyApi.getMe().then(data => {
            console.log(data);
        })
    }, [accessToken]);

    return(
        <div>
            {code}
        </div>
    )
}

export default Dashboard_old;