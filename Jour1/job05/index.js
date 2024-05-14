const path = require('path');

const name = path.basename('C:/Users/burto/OneDrive/Bureau/LaPlateforme/Exercices/runtrack-nodeJS/Jour1/job04/index.js')
const extension = path.extname('C:/Users/burto/OneDrive/Bureau/LaPlateforme/Exercices/runtrack-nodeJS/Jour1/job04/index.js')
const cd = path.dirname('C:/Users/burto/OneDrive/Bureau/LaPlateforme/Exercices/runtrack-nodeJS/Jour1/job04/index.js')
const parent = path.basename(cd)

console.log(`nom du fichier: ${name}\n
extension: ${extension}\n
parent: ${parent}`)