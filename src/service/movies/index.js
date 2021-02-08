const axios = require('axios');

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
console.log(process.env.REACT_APP_BACKEND_URL)

const getMovies = async () => {
    return await axios.get('/movies')
        .then(function (response) {
         return response.data;
        })
}

export const likeMovieService = async (id, status) => {
    return await axios.put('/movies/like/'+ id, { likes: !status})
        .then(function (response) {
         return response.data;
        })
}

export default getMovies;

