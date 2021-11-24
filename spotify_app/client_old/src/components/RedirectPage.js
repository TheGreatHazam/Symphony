import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';

export default class RedirectPage extends React.Component {
    componentDidMount() {
        const { setExpiryTime, history, location } = this.props;
        try {
            if (_.isEmpty(window.parent.location.hash)) {
                return window.location = "/dashboard";
            }
            const access_token = getParamValues(window.parent.location.hash);
            const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiry_time', expiryTime);
            window.location = "/dashboard"
        } catch (error) {
            window.location = "/"
            console.log(error);
        }
    }

    render() {
        return(
            <div>
                Redirecting...
            </div>
        )
    }
}