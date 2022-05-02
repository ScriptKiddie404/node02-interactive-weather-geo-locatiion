const ApiRequests = require('./mapboxapi');
const WeatherRequests = require('./weatherapi');
const db = require('../helpers/database');

class Search {

    searchHistory = [];
    mapBoxApi;

    constructor() {
        this.mapBoxApi = new ApiRequests();
        // !! En caso de que haya algo en la BD lo leemos.
        this.searchHistory = db.readDB();
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

    saveHistory(cities = [], selectedID = '') {

        const city = cities.find(city => city.id === selectedID);
        this.searchHistory.unshift(city.name);
        //!! Guardamos el historial en la BD.

        db.saveDB(this.searchHistory);


    }

    get history() {
        return this.searchHistory;
    }

}

module.exports = Search;