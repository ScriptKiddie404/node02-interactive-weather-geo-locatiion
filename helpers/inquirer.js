const inquirer = require('inquirer');
const { printHeader } = require('./print');
require('colors');

const readInput = async (message = '') => {

    console.clear()

    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value = '') {
                const error = 'Please enter a description.'
                return value.length === 0 ? error : true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);
    console.clear();

    return description;

}

const menu = async () => {

    printHeader('Select an option');

    const questions = [
        {
            type: 'list',
            name: 'option',
            choices: [
                {
                    value: 1,
                    name: `${'1. '.blue} Search city`,
                },
                {
                    value: 2,
                    name: `${'2. '.blue} Search history`
                },
                {
                    value: 3,
                    name: `${'3. '.blue} Exit`
                }
            ]
        }
    ]


    const { option } = await inquirer.prompt(questions);

    return option;
}

const pause = async () => {

    const question = {
        type: 'input',
        name: 'enter',
        message: `Press ${`enter`.blue} to continue...`
    }

    console.log(`\n`);
    await inquirer.prompt(question);
    console.clear();

}


const menuOfCities = async (cities = []) => {

    // !! Generamos las opciones para el prompt:
    const choices = cities.map((city, index) => {

        const actualIndex = `${index + 1}.`.blue;

        return {
            value: city.id,
            name: `${actualIndex} ${city.name}`
        }

    });

    // !! Agregar el push para la opción de salir = 9
    choices.push({
        value: 9,
        name: `${'9'.blue}. Go back`
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            pageSize: 9,
            message: 'Select an option',
            choices
        }
    ]


    const { id } = await inquirer.prompt(questions);

    console.clear();

    return id;


}

module.exports = {
    readInput,
    pause,
    menu,
    menuOfCities
}