import fs from 'fs';

// Définir la fonction pour récupérer les tâches depuis un fichier
async function getTasks(file) {
    const data = await fs.promises.readFile(file, 'utf8');
    const dataJSON = JSON.parse(data);
    const tasks = dataJSON.tasks;
    return tasks;
}

async function postTask(file, data){
    const writtenData = getTasks(file)
    const newData = writtenData + data
    fs.promises.writeFile(file, writtenData)
}

// Définir la fonction de traitement de la requête
export async function request(req, res) {
    // Vérifier le chemin de l'URL demandée
    if (req.method === 'GET' && req.url === '/tasks') {
        const tasks = await getTasks('./data.json'); // Appeler la fonction getTasks
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(tasks));
    }else if (req.method === 'POST' && req.url === '/tasks') {
        const tasks = await postTask('./data.json'); // Appeler la fonction getTasks
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(tasks));
    }
}

postTask('./data.json', 'coucou')
