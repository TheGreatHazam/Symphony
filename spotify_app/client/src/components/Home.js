import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  login: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    backgroundColor: 'black',

    '& img':{
      width: '50%'
    },

    '& a':{
      padding: '20px',
      borderRadius: '99px',
      backgroundColor: '#1db954',
      fontWeight: 600,
      color: 'white',
      textDecoration: 'none',
    },

    '& a:hover':{
      backgroundColor:' white',
      borderColor: '#1db954',
      color: '#1db954',
    }
  },
});

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const classes = useStyles()

  return (
      <div className={classes.login}>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify-Logo"/>
        <Header />
        <Button variant="info" type="submit" onClick={handleLogin}>
          Login to spotify
        </Button>
      </div>
  );
};
export default connect()(Home);

