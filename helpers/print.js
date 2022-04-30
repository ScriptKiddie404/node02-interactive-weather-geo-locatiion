require('colors');

const printHeader = (message = '') => {

    console.clear();

    const aditionalCharactersOnHeader = 4;
    const stringLength = message.length + aditionalCharactersOnHeader;

    console.log('='.repeat(stringLength).blue);
    console.log(`${'='.blue} ${message} ${'='.blue}`);
    console.log('='.repeat(stringLength).blue);

}

const printInformation = (cities = [], id = '') => {

    printHeader('City information');

    const selectedCity = cities.find(city => city.id === id);
    const { name, longitude, latitude } = selectedCity;

    console.log('City: ', name);
    console.log('Latitude: ', latitude);
    console.log('Longitude: ', longitude);

}

module.exports = {
    printInformation,
    printHeader
}