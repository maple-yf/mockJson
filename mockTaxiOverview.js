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
    fs.writeFile('./mockdata/mapMockJson.json', `[${data}]`, (res)=>{
        console.log(res)
    });
}


// 箱型图
function getBoxJson() {
    const data = []
    for(let i=1; i<=24; i++) {
        const low = Math.floor(Math.random() * 1000);
        const diff = (gain) => Math.floor(Math.random() * gain);
        const q1 = low + diff(200);
        const median = q1 + diff(100);
        const q3 = median + diff(200);
        const high = q3 + diff(200);
        data.push({
            x: i,
            low,
            q1,
            median,
            q3,
            high
        })
    }
    fs.writeFile('./mockdata/boxData1.json', JSON.stringify(data), (res)=>{
        console.log(res)
    });
}

module.exports = {
    getMapJson,
    getBoxJson,
}