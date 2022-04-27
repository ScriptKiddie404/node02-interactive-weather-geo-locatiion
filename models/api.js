const axios = require('axios').default;
require('dotenv').config();

class ApiRequests {

    baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

    params = {
        'access_token': process.env.MAPBOX_KEY,
        'limit': 10,
        'language': 'es'
    }

    instance; // !! Instance for axios.

    constructor(params) {

        this.instance = axios.create({
            baseURL: this.baseURL,
            params: params ? params : this.params //!! Los parámetros para axios son los que se mandan en el constructor o los default de clase.
        });

    }

    // !! Recordar que get de axios retorna una promesa, usar esta función en un scope async.
    fetchCity(city) {
        return this.instance.get(`${city}.json`)
    }


}

module.exports = ApiRequests;