const fs = require('fs')
const path = require('path')


function readFile(filename) {
    const filePath = path.join(process.cwd(), 'database', filename)
    let datas = fs.readFileSync(filePath, 'utf-8')
    datas = datas ? JSON.parse(datas) : []
    return datas
}

function writeFile(filename, datas) {
    const filePath = path.join(process.cwd(), 'database', filename)
    fs.writeFileSync(filePath, JSON.stringify(datas, null, 4))
    return true
}


module.exports = {
    readFile, writeFile
}