const ApiRequests = require('./mapboxapi');
const WeatherRequests = require('./weatherapi');

class Search {

    searchHistory = [];
    mapBoxApi;
    weatherApi;

    constructor() {
        this.mapBoxApi = new ApiRequests();
        this.weatherApi = new WeatherRequests();
    }

    async getCities(city = '') {

        try {

            const response = await this.mapBoxApi.fetchCity(city);

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

    async getWeather(latitude = 0, longitude = 0) {

        try {
            this.weatherApi.setLatitudeLongitude(latitude, longitude);
            const response = await this.weatherApi.fetchWeather();
            return response.data;

        } catch (error) {
            throw error;
        }

    }

}

module.exports = Search;