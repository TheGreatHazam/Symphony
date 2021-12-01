import React, {useEffect, useState} from "react"
import axios from "axios"
import {Button} from "@material-ui/core";

const playlists_endpoint = "https://api.spotify.com/v1/me/playlists/";
let playlistList = " ";
let playlistEndpointArray = [];
let listOfSongs = " ";

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
            console.log(r.data.items);
            playlistList = " ";
            playlistList += "User's playlists: ";
            const playlistLength = r.data.items.length;
            for (let i = 0; i < playlistLength; i++) {
                playlistList += r.data.items[i].name + ", ";
            }

            for (let i = 0; i < playlistLength; i++) {
                let playlistID = r.data.items[i].id;
                playlistEndpointArray[i] = "https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";
            }
        })
            .catch((error) => {
                console.log(error);
        })

        listOfSongs = " ";
        listOfSongs += "List of songs: ";
        for (let i = 0; i < playlistEndpointArray.length; i++) {
            axios.get(playlistEndpointArray[i], {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }).then(r => {
                console.log(r.data);
                let totalSong = r.data.total;

                for (let i = 0; i < totalSong; i++) {
                    listOfSongs += r.data.items[i].track.name + ", ";
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <>
            <Button variant="info" type="submit" onClick={handleGetPlaylist}>Get Playlists</Button>
            <div>
                {playlistList}
            </div>
            <div>
                {listOfSongs}
            </div>
        </>
    );

}

export default SpotifyGetPlaylist;