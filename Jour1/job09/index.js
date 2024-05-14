const {writeFile} = require('fs/promises')

async function writeThisFile(file, data){
    await writeFile(file, data);
}

writeThisFile('./data.txt', 'Je manipule les fichiers avec un module node!')