const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose;
const port = 80

//---------
//----------Lancement du serveur
//---------

app.listen(port, () => {
    console.log(`Le serveur est lancé sur http://localhost:${port}`)
})


//---------
//----------Connexion de la base de données
//---------
app.listen(async () => {
    try {
        await mongoose.connect("mongodb://localhost/LaPlateforme");
        console.log('Connexion avec la base de données établie');
    } catch (error) {
        console.error("Erreur lors de la connexion à la base de données :", error.message);
        }
})

//---------
//----------Routes
//---------

app.use(express.static(path.join(__dirname, 'public')));

//Récupérer page d'accueil
app.get('/', (req, res) => {
    console.log('Page d\'accueil chargée avec succès!');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

//Récupérer page à propos
app.get('/about', (req, res) => {
    console.log('Page à propos chargée avec succès!');
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
})

//Récupérer page 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'errors', '404.html'))
})


//---------
//----------Exportation des modules pour l'API
//---------

module.exports = {app, port, mongoose}
