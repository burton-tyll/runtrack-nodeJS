const {readFile} = require('fs/promises')

async function readThisFile(file){
    let newLine = ''
    const data = await readFile(file)
    const line = data.toString()
    for(i=0; i<line.length; i++){
        const letter = line[i]
        if(i % 2 === 0){
            newLine += line[i]
        }
    }
    console.log(newLine)
}

readThisFile('./data.txt')