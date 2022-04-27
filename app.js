const { readInput, menu, pause } = require("./helpers/inquirer");

const axios = require('axios').default;



(async () => {

    let option;

    do {

        option = await menu();

        // if (option !== 3) await pause(); //Hacer una pausa sólo si la opción seleccionada no es la de salida.

        switch (option) {

            case 1:
                // TODO: Mostrar mensaje (read input)
                const city = await readInput('Enter the city: ');
                
                await pause();

                // TODO: Buscar los lugares.

                // TODO: Seleccionar un lugar.

                // TODO: Clima

                // TODO: Mostrar resultados

                // 
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