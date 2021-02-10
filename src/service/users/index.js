const axios = require('axios');

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
console.log(process.env.REACT_APP_BACKEND_URL)

export const createUser = async (newUser) => {
    return await axios.post('/users', newUser)
                .then(function (response) {
                    return response;
                })
}

export default createUser;
