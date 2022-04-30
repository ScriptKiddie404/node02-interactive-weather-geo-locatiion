const axios = require('axios').default;
const ApiRequests = require('./api');

class Search {

    searchHistory = [];
    api;

    constructor() {
        this.api = new ApiRequests();
    }

    async getCities(city = '') {

        try {

            const response = await this.api.fetchCity(city);

            // !! Hacemos un retorno de objeto implícito en el map (usar ({}) en el map. )

            return response.data.features.map(city => ({
                id: city.id,
                name: city.place_name,
                longitude: city.center[0], // !! En mapbox la longitud es el primer elemento del array
                latitude: city.center[1] // !! La latitud es el segundo elemento del arreglo.
            }));

        } catch (error) {
            throw error;
        }

    }

}

module.exports = Search;