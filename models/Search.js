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
            console.log(response.data.features);

        } catch (error) {
            throw error;
        }

        return [];

    }

}

module.exports = Search;