const { readInput, menu, pause, menuOfCities } = require("./helpers/inquirer");
const { printInformation, printHistory } = require("./helpers/print");
const Search = require("./models/Search");


(async () => {

    let option;
    const search = new Search();

    do {

        option = await menu();

        switch (option) {

            case 1:

                //!! Buscar las ciudades en Mapbox
                const city = await readInput('Enter the city name: ');
                const cities = await search.getCities(city);

                //!! Seleccionar una ciudad a través del menú → obtener id
                const selectedID = await menuOfCities(cities);

                if (selectedID === 9) continue; //!! 9 es el valor de salida cuando selecciona "Go Back."

                //!! obtener la latitud y la longitud de la ciudad seleccionada:
                const citySelected = cities.find(city => city.id === selectedID);
                const { latitude, longitude } = citySelected;

                //!! guardar en la base de datos:
                search.saveHistory(cities, selectedID);

                //!! Obtener información del clima;
                const weatherResponse = await search.getWeather(latitude, longitude);


                //!! Mostrar resultados
                printInformation(cities, selectedID, weatherResponse);

                await pause();
                break;

            case 2: //!! Leer el historial de búsqueda.
                printHistory(search.history);
                await pause();
                break;

            default:
                break;

        }

    } while (option !== 3);

    console.clear();

})();