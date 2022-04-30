const { readInput, menu, pause, menuOfCities } = require("./helpers/inquirer");
const { printInformation } = require("./helpers/print");
const Search = require("./models/Search");

const axios = require('axios').default;


(async () => {

    let option;
    const search = new Search();

    do {

        option = await menu();

        // if (option !== 3) await pause(); //Hacer una pausa sólo si la opción seleccionada no es la de salida.

        switch (option) {

            case 1:

                // TODO: Buscar las ciudades en Mapbox
                const city = await readInput('Enter the city: ');
                const cities = await search.getCities(city);

                // TODO: Seleccionar una ciudad a través del menú.
                const selectedCity = await menuOfCities(cities);




                // TODO: Clima

                // TODO: Mostrar resultados

                printInformation(cities, selectedCity);
                await pause();

                break;
            case 2:
                console.log(option);
                break;
            case 3:
                console.log(option);
                break;

            default:
                break;

        }

    } while (option !== 3);

    console.clear();

})();