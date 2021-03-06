const axios = require('axios');

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const getMovies = async () => {
    return await axios.get('/movies')
        .then(function (response) {
            console.log(response)
         return response.data;
        })
}

export const getMovie = async (movieId) => {
    return await axios.get(`/movies/${movieId}`)
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

export const rateMovieService = async (id, rate) => {
    return await axios.put('/movies/rate/'+ id, { rate: rate})
        .then(function (response) {
         return response.data;
        })
}

export const updateMovieComment = async (id, comment) => {
    return await axios.put('/movies/comment/'+ id, { comment: comment})
        .then(function (response) {
         return response.data;
        })
}


export default getMovies;


