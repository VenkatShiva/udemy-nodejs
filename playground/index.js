const fs = require('fs');

const stringData = fs.readFileSync('data.json').toString();

// console.log

const dataJson = JSON.parse(stringData);

dataJson.name = 'Shiva';
dataJson.age = 23;

fs.writeFileSync('data.json', JSON.stringify(dataJson))