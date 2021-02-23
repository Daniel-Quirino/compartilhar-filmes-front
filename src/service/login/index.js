const axios = require('axios');

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

export const doLogin = async (credentials) => {
    return await axios.post('/login', credentials)
                .then(function (response) {
                    return response;
                })
}

export default doLogin;
