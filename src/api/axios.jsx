import axios from "axios";

export default axios.create({
<<<<<<< HEAD
    baseURL: 'http://127.0.0.1:8000'
});
=======
    baseURL: 'http://127.0.0.1:8000',

    // token: '/checktoken?bearer=' + JSON.parse(localStorage.getItem('loggedAppUser')).accessToken.token,
})
>>>>>>> unificar
