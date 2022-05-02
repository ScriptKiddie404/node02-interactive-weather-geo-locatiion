require('colors');

const printHeader = (message = '') => {

    console.clear();

    const aditionalCharactersOnHeader = 4;
    const stringLength = message.length + aditionalCharactersOnHeader;

    console.log('='.repeat(stringLength).blue);
    console.log(`${'='.blue} ${message} ${'='.blue}`);
    console.log('='.repeat(stringLength).blue);

}

const printInformation = (cities = [], id = '', weatherResponse) => {

    printHeader('City information');

    const selectedCity = cities.find(city => city.id === id);
    const { name, longitude, latitude } = selectedCity;

    // !! Desestructurar info del clima:

    const { description, temperature, termic_sensation, temperature_min, temperature_max, pressure, humidity } = weatherResponse;


    console.log('City: ', name);
    console.log('Latitude: ', latitude);
    console.log('Longitude: ', longitude);
    console.log('Temperature: ', temperature);
    console.log('Minimum temperature: ', temperature_min);
    console.log('Maximum temperature: ', temperature_max);
    console.log('Thermal sensation: ', termic_sensation);
    console.log('Pressure: ', pressure);
    console.log('Humidity: ', humidity);
    console.log('Description: ', description);
}

const printHistory = (history = []) => {

    console.clear();
    printHeader('Search history');

    history.forEach((item, i) => {
        const actualIndex = `${i + 1}.`.blue;
        console.log(`${actualIndex} ${item}`);
    });

}

module.exports = {
    printInformation,
    printHeader,
    printHistory
}