import axios from 'axios';

//extract value of tokens from the given URL
export const getParamValues = (url) => {
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

//add extracted token to every axios API request
export const setAuthHeader = () => {
    try {
        const params = JSON.parse(localStorage.getItem('params'));
        if (params) {
            axios.defaults.headers.common[
                'Authorization'
                ] = `Bearer ${params.access_token}`;
        }
    } catch (error) {
        console.log('Error setting auth', error);
    }
};