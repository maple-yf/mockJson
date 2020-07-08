const fs = require('fs');

const originLat = 22.547;
const originLon = 114.085947;

function generatorLatLon(ratio) {
    const pre = () => Math.random() > ratio;
    const diff = () => Math.random()/10;
    const lat = pre() ? originLat + diff() : originLat - diff();
    const lon = pre() ? originLon + diff() : originLon - diff();

    return [lon, lat, pre() ? 1 : 0];
}


function getMapJson() {
    let data = '';
    for(let i=0; i<20000; i++) {
        data += generatorLatLon(i/20000).join(',') + ',';
    }
    data = data.substring(0, data.length-1);
    fs.writeFile('./mapMockJson.json', `[${data}]`, (res)=>{
        console.log(res)
    });
}

module.exports = {
    getMapJson,
}