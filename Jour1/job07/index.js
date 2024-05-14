const {readFile} = require('fs/promises')

async function readThisFile(file){
    const data = await (readFile(file))
    console.log(`Contenu du fichier data.txt: \n${data.toString()}`)
}

readThisFile('./data.txt')