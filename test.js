const { pause } = require("./helpers/inquirer");
const MapRequests = require("./models/mapboxapi");
const WeatherRequests = require("./models/weatherapi");

(async () => {

    const mapa = new MapRequests();
    const clima = new WeatherRequests();
    const respuesta1 = await mapa.fetchCity('camargo');
    clima.setLatitudeLongitude(28.63528, -106.08889);
    // const respuesta2 = await clima.fetchWeather(28.63528, -106.08889);
    console.log(clima);
    await pause();
})();