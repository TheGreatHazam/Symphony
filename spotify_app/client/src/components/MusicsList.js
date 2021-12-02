import React from 'react';
import {Dropdown, Table} from 'react-bootstrap'

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

const createNewPlaylist = (music) => {
    let playListName = " ";
    let listOfMusic = [];
    let playlist = {playListName, listOfMusic};

    listOfMusic.push(music);
    playListName = 'Playlist' + playlistID.toString();

    playlist.playListName = playListName;
    playlist.listOfMusic = listOfMusic;

    listOfPlayList.push(playlist);

    playlistID += 1;

    console.log(listOfPlayList);

    postToDB();
}

const addToExistingPlaylist = (music, i) => {
    listOfPlayList[i].listOfMusic.push(music);
    postToDB();
}

const postToDB = () => {
    //send the whole list of playlist to database
}

const getFromDB = () => {
    //set list of playlist to retrieved from database
}

const Musics = ({ musics }) => {
    getFromDB();
    return(
        <>
            <React.Fragment>
                {Object.keys(musics).length > 0 && (
                    <div className = "musics" >
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

                                return(
                                    <tr>
                                    <React.Fragment key = {index}>
                                        <td>
                                            <a href = {music.album.external_urls.spotify}>
                                                {music.album.name}
                                            </a>
                                        </td>

                                        <td>
                                            <a href = {music.external_urls.spotify}>
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