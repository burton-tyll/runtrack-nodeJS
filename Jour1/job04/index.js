const fs = require('fs');

fs.readdir('../', (err, files) =>{
    if(err){
        console.log('erreur')
    }else{
        files.forEach(file =>{
            console.log(file)
        })
    }
})