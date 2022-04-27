const { readInput, menu, pause } = require("./helpers/inquirer");





(async () => {

    let option;

    do {

        option = await menu();

        if (option !== 3) await pause(); //Hacer una pausa sólo si la opción seleccionada no es la de salida.

        switch (option) {

            case 1:
                console.log(option);
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