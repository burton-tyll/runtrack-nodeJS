const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose;
const port = 80

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
//----------Lancement du serveur
//---------

app.listen(port, () => {
    console.log(`Le serveur est lancé sur http://localhost:${port}`)
})

// Middleware pour analyser les requêtes JSON
app.use(express.json());

//---------
//----------Schemas
//---------

const userSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    students_number: Number,
    year_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Year'  // Référence à la collection "Year"
    }
}, {versionKey: false});

const yearSchema = mongoose.Schema({
    cursus: String
}, {versionKey: false});

const User = mongoose.model('User', userSchema, 'student');
const Year = mongoose.model('Year', yearSchema, 'year');

//---------
//----------Routes
//---------

app.get('/etudiants', async (req, res) => {
    try{
        const students = await User.find();
        res.json(students)
    } catch (error){
        console.error('Erreur lors de la récupération des étudiants')
    }
})

app.get('/etudiants/:id', async (req, res) => {
    const studentId = req.params.id;
    const students = await User.find({'_id': studentId})
    res.json(students)
})

app.post('/etudiants', async (req, res) => {
    const newStudent = new User(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
})

app.delete('/etudiants/:id', async (req, res) => {
    const studentId = req.params.id;
    const studentToRemove = await User.findByIdAndDelete({'_id': studentId});
    res.send(studentToRemove+'\n\na bien été supprimé');
})



