import React from 'react';
import {Button} from "react-bootstrap";
import SpotifyGetPlaylist from "./SpotifyGetPlaylist";

const UserProfile = (props) => {
    const{history} = props;

    const goToSearch = () => {
        history.push('/dashboard')
    }

    return(
        <div>
            <Button variant="info" type="submit" onClick = {goToSearch}>
                Return to Music Search
            </Button>
            <div>
                <SpotifyGetPlaylist/>
            </div>
        </div>
    )
};
export default UserProfile;