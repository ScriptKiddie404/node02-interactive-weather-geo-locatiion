const { readInput, menu, pause, menuOfCities } = require("./helpers/inquirer");
const { printInformation } = require("./helpers/print");
const Search = require("./models/Search");


(async () => {

    let option;
    const search = new Search();

    do {

        option = await menu();

        switch (option) {

            case 1:

                // TODO: Buscar las ciudades en Mapbox
                const city = await readInput('Enter the city name: ');
                const cities = await search.getCities(city);

                // TODO: Seleccionar una ciudad a través del menú → obtener id
                const selectedID = await menuOfCities(cities);

                //!! obtener la latitud y la longitud de la ciudad seleccionada:
                const citySelected = cities.find(city => city.id === selectedID);
                const { latitude, longitude } = citySelected;

                // !! Obtener información del clima;
                const weatherResponse = await search.getWeather(latitude, longitude);
                
                
                // !! Mostrar resultados
                printInformation(cities, selectedID, weatherResponse);



                await pause();


                break;
            case 2:
                break;

            case 3:
                break;

            default:
                break;

        }

    } while (option !== 3);

    console.clear();

})();