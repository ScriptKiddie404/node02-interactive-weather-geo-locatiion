const { readInput, menu, pause } = require("./helpers/inquirer");





(async () => {

    let option;

    do {

        option = await menu();

        switch (option) {

            case 1:
                console.log(option);
                await pause();
                break;
            case 2:
                console.log(option);
                await pause();
                break;
            case 3:
                console.log(option);
                await pause();
                break;

            default:
                break;

        }

    } while (option !== 3);


})();