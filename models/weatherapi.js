const axios = require('axios').default;
require('dotenv').config();

class WeatherRequests {

    baseURL = 'https://api.openweathermap.org/data/2.5/weather';

    params = {
        lat: null,
        lon: null,
        appid: process.env.WEATHER_KEY,
        units: 'metric',
        lang: 'es'
    }

    instance; //!! Instance de axios.

    constructor(latitude, longitude) {

        this.params.lat = latitude;
        this.params.lon = longitude;

        this.instance = axios.create({
            baseURL: this.baseURL,
            params: this.params
        });

    }


    fetchWeather() {
        return this.instance.get();
    }

}


module.exports = WeatherRequests;