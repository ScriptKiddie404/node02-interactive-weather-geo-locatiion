const inquirer = require('inquirer');
require('colors');

const readInput = async (message = '') => {

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

    const { description } = await inquirer.prompt(question)

    return description;

}

const menu = async () => {

    console.clear();
    console.log(`====================`.blue);
    console.log(`= ${`Select an option`.white} ${'='.blue}`.blue);
    console.log(`====================`.blue);

    const questions = [
        {
            type: 'list',
            name: 'option',
            message: 'Select an option',
            choices: [
                {
                    value: 1,
                    name: `${'1. '.blue} Option 1`,
                },
                {
                    value: 2,
                    name: `${'2. '.blue} Option 2`
                },
                {
                    value: 3,
                    name: `${'3. '.blue} Option 3`
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

module.exports = {
    readInput,
    pause,
    menu

}