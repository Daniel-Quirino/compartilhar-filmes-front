const axios = require('axios');

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
console.log(process.env.REACT_APP_BACKEND_URL)

const getMovies = async () => {
    return await axios.get('/movies')
        .then(function (response) {
         return response.data;
        })
}

export default getMovies;


