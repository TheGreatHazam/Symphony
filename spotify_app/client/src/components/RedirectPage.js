import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }

      const paramObj = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + paramObj.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(paramObj));
      localStorage.setItem('expiry_time', expiryTime);
      localStorage.setItem('access_token', paramObj.access_token);
      localStorage.setItem('token_type', paramObj.token_type);
      setExpiryTime(expiryTime);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }

  render() {
    return null;
  }
}
