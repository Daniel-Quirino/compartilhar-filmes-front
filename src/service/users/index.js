const axios = require('axios');

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
console.log(process.env.REACT_APP_BACKEND_URL)

export const createUser = async (newUser) => {
    return await axios.post('/users', newUser)
                .then(function (response) {
                    return response;
                })
}

export const getUserById = async (id) => {
    return await axios.get(`/users/${id}`)
                .then(function (response) {
                    return response;
                })
}

export const getAllUsers = async() => {
    return await axios.get('/users')
                .then(function (res){
                    return res;
                })
}

export const watchMovie = async(userId, movie) => {
    return await axios.patch(`/users/watch/movie/${userId}`, movie)
}
    

export default createUser;
