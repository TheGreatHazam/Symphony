import React from 'react';
import {Table} from 'react-bootstrap'

const Musics = ({ musics }) => {
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