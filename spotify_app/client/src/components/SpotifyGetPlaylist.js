import React, {useEffect, useState} from "react"
import axios from "axios"
import {Button} from "@material-ui/core";
import {getParamValues} from "../utils/functions";

const playlists_endpoint = "https://api.spotify.com/v1/me/playlists/";

const SpotifyGetPlaylist = () => {
    const [token, setToken] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setToken(localStorage.getItem('access_token'));
        }
    }, [])

    const handleGetPlaylist = () => {
        console.log("Token: " + token);
        axios.get(playlists_endpoint, {
            headers: {
                Authorization: "Bearer " + token,
            }
        }).then(r => {
            setData(r.data);
            console.log(r.data.items[0].tracks);
            return(
                <>
                    <Button variant="info" type="submit" onClick={handleGetPlaylist}>Get Playlists</Button>
                    {r.data.items ? r.data.items.map((items) => <p>(item.name)</p>) : null}
                </>
            )
        })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Button variant="info" type="submit" onClick={handleGetPlaylist}>Get Playlists</Button>
            {data?.items ? data.items.map((item) => <p>(item.name)</p>) : null}
        </>
    )
}

export default SpotifyGetPlaylist;