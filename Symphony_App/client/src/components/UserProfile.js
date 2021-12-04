import React from 'react';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`
const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const UserProfile = (props) => {
    const{history} = props;

    const goToSearch = () => {
        history.push('/dashboard')
    }

    return(
        <Container>
            <Nav>
                <React.Fragment>
                    <Collapse>
                        <List>
                            <Item>
                                <Link to="/symphonies/list" className="btn btn-primary">
                                    Show all playlists
                                </Link>
                            </Item>
                            <Item>
                                <Link to="/symphonies/create" className="btn btn-primary">
                                    Create playlists
                                </Link>
                            </Item>
                            <Item>
                                <Button variant="info" type="submit" onClick = {goToSearch}>
                                    Return to Music Search
                                </Button>
                            </Item>
                        </List>
                    </Collapse>
                </React.Fragment>
            </Nav>
        </Container>
    )
};
export default UserProfile;