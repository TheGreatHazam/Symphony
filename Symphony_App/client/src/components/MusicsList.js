import React from 'react';
import {Dropdown, Table} from 'react-bootstrap'
import api from "../api";

let listOfPlayList = [];
let playlistID = 0;

const addToPlaylist = (music) => {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Add to...
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => createNewPlaylist(music)}>New Playlist</Dropdown.Item>
                {listOfPlayList.length >= 1 ? (<Dropdown.Item onClick = {() => addToExistingPlaylist(music, 0)}>Playlist 1</Dropdown.Item>) : (<></>)}
                {listOfPlayList.length >= 2 ? (<Dropdown.Item onClick = {() => addToExistingPlaylist(music, 1)}>Playlist 2</Dropdown.Item>) : (<></>)}
                {listOfPlayList.length >= 3 ? (<Dropdown.Item onClick = {() => addToExistingPlaylist(music, 2)}>Playlist 3</Dropdown.Item>) : (<></>)}
                {listOfPlayList.length >= 4 ? (<Dropdown.Item onClick = {() => addToExistingPlaylist(music, 3)}>Playlist 4</Dropdown.Item>) : (<></>)}
                {listOfPlayList.length >= 5 ? (<Dropdown.Item onClick = {() => addToExistingPlaylist(music, 4)}>Playlist 5</Dropdown.Item>) : (<></>)}

            </Dropdown.Menu>
        </Dropdown>
    )
}

const createNewPlaylist = async (music) => {
    let playListName = " ";
    let listOfMusic = [];
    let id = " ";
    let playlist = {playListName, listOfMusic, id};

    listOfMusic.push(music.name + ", ");
    playListName = 'Playlist ' + playlistID.toString();

    playlist.playListName = playListName;
    playlist.listOfMusic = listOfMusic;

    listOfPlayList.push(playlist);

    console.log(listOfPlayList);

    let musicArray = listOfMusic

    const playlistname = playListName
    const payload = {playlistname, listofsong: musicArray}

    console.log(payload);

    await api.insertSpotify(payload).then(res => {
        window.alert(`Created new playlist: ` + playListName)
    })

}

const addToExistingPlaylist = async (music, i) => {
    let playListName = " ";
    let listOfMusic = [];
    let id = " "
    let playlist = {playListName, listOfMusic, id};

    playlist.playListName = listOfPlayList[i].playListName;
    playlist.listOfMusic = listOfPlayList[i].listOfMusic;
    playlist.id = listOfPlayList[i].id;

    playlist.listOfMusic.push(music.name + ", ");
    listOfPlayList[i] = playlist;

    let musicArray = playlist.listOfMusic;

    const playlistname = playlist.playListName;
    const payload = {playlistname, listofsong: musicArray}

    console.log(payload);

    await api.updateSpotifyById(playlist.id, payload).then(res => {
        window.alert(`Added song to playlist: ` + playlist.playListName)
    })
}

const pullFromSpotify = async () => {
    await api.getAllSpotifies().then(spotifies => {
        console.log(spotifies.data.data);
        listOfPlayList = [];

        for (let i = 0; i < spotifies.data.data.length; i++) {
            let playListName = " ";
            let listOfMusic = [];
            let id = " ";
            let playlist = {playListName, listOfMusic, id};

            playlist.id = spotifies.data.data[i]._id
            playlist.playListName = spotifies.data.data[i].playlistname
            playlist.listOfMusic = spotifies.data.data[i].listofsong

            listOfPlayList.push(playlist)
        }

        playlistID = listOfPlayList.length + 1;
    })
}

const Musics = ({musics}) => {
    pullFromSpotify()

    return (
        <>
            <React.Fragment>
                {Object.keys(musics).length > 0 && (
                    <div className="musics">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Album</th>
                                <th>Track name</th>
                                <th>Artist</th>
                                <th>Add to playlist</th>
                            </tr>
                            </thead>
                            <tbody>
                            {musics.items.map((music, index) => {

                                return (
                                    <tr>
                                        <React.Fragment key={index}>
                                            <td>
                                                <a href={music.album.external_urls.spotify}>
                                                    {music.album.name}
                                                </a>
                                            </td>

                                            <td>
                                                <a href={music.external_urls.spotify}>
                                                    {music.name}
                                                </a>
                                            </td>

                                            <td>{music.artists.map((artist) => artist.name).join(', ')}</td>

                                            <td>{addToPlaylist(music)}</td>
                                        </React.Fragment>
                                    </tr>
                                );

                            })}
                            </tbody>
                        </Table>
                    </div>

                )}
            </React.Fragment>
        </>

    )
}

export default Musics;