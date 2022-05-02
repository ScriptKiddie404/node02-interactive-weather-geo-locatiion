const fs = require('fs');


const path = './db/database.json'

const saveDB = (history = []) => {

    const payload = {
        history
    }

    fs.writeFileSync(path, JSON.stringify(payload));

}

const readDB = () => {

    const info = fs.readFileSync(path, { encoding: 'utf-8' });
    const data = JSON.parse(info);

    return data.history;

}


module.exports = {
    saveDB,
    readDB
}