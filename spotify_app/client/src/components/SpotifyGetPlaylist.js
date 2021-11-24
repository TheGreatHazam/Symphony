import React, {useEffect, useState} from "react"
import axios from "axios"
import {Button} from "@material-ui/core";

const playlists_endpoint = "http://api.spotify.com/v1/me/playlists";

const SpotifyGetPlaylist = () => {
    const [token, setToken] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        if(localStorage.getItem('param')){
            setToken(localStorage.getItem('param'));
        }
    }, [])

    const handleGetPlaylist = () => {
        axios.get(playlists_endpoint, {
            headers: {
                Authorization: "Bearer " + token,
            }
        }).then(r => {
            setData(r.data);
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