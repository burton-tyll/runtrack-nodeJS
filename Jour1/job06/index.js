const {readFile} = require('fs/promises')

function readThisFile(file){
    const data = (readFile(file))
    console.log(`Contenu du fichier data.txt: \n${data.toString()}`)
}

readThisFile('./data.txt')