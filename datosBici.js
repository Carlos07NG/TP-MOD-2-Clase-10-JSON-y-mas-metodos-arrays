const fs=require('fs');
const bicisJSON=fs.readFileSync('./bicicletas.json', 'utf-8');
const bicisARRAY=JSON.parse(bicisJSON);

module.exports=bicisARRAY;