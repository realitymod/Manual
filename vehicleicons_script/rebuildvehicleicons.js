#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

icons = path.join(__dirname, '..', 'assets', 'asset_icons')

var files = fs.readdirSync(icons, {withFileTypes:true}).filter(item => item.isDirectory).map(item => item.name)
var classnames = {
    'ahe' : 'Attack Helicopters',
    'apc' : 'Armored Personnel Carriers',
    'box' : 'Crates and Boxes',
    'civ' : 'Civilian Vehicles',
    'ifv' : 'Infantry Fighting Vehicles',
    'jet' : 'Fixed Wing Aircraft',
    'jep' : 'Light Vehicles',
    'rec' : 'Reconaissance',
    'shp' : 'Ships and Boats',
    'tec' : 'Technicals',
    'the' : 'Transport Helicopters',
    'tnk' : 'Tanks',
    'trk' : 'Trucks',
}

var sorted = []
// console.log(files)
// #path.join(icons,item.name)


for (const file of files) {
    // console.log(file)
    let tokens= file.split('_')
    // console.log(tokens)
    let type = tokens[1]
    //let name = tokens.slice(2).join("_").split('.',1)[0]
    let name = tokens.slice(2).join("_")
    // console.log(name)
    let classname = classnames[type] ? classnames[type] : 'UNDEFINED'
    !sorted[classname] ? sorted[classname] = [] :
    sorted[classname].push([type, name].join('_'))
}
// console.log(sorted)

console.log(`<div style="text-align: center;">`)
for (const classname in sorted) {
    const vehicles = sorted[classname]
    console.log(`<h3>${classname}</h3>
<div class="row">`)
    vehicles.forEach(vehicle => {
        console.log(`    <img src="../assets/asset_icons/mini_${vehicle}" alt="${vehicle.split('.',1)}">`)

    })
    console.log(`</div>
`)
};
console.log(`</div>`)