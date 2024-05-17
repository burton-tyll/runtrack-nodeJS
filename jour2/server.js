import http from 'http';
import { request } from './routes.js'

export default function server(){

    const host = 'localhost';
    const port = 8000;

    const serverRequest = http.createServer((req, res) => {
        request(req, res); // Appeler la fonction request pour gérer la requête
    });

    serverRequest.listen(port, () => {
        console.log(`Le serveur est lancé sur l'adresse: ${host}:${port}`);
    });
}
