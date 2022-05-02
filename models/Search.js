const ApiRequests = require('./mapboxapi');
const WeatherRequests = require('./weatherapi');

class Search {

    searchHistory = [];
    mapBoxApi;
    // weatherApi;

    constructor() {
        this.mapBoxApi = new ApiRequests();
        // this.weatherApi = new WeatherRequests();
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

            const weatherApi = new WeatherRequests(latitude, longitude);
            const response = await (await weatherApi.fetchWeather()).data;
            const { main, weather } = response;
            return {
                description: weather[0].description,
                temperature: main.temp,
                termic_sensation: main.feels_like,
                temperature_min: main.temp_min,
                temperature_max: main.temp_max,
                pressure: main.pressure,
                humidity: main.humidity
            }

        } catch (error) {
            throw error;
        }

    }

}

module.exports = Search;