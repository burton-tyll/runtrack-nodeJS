const mongoose = require('mongoose');
const { Types: { ObjectId } } = mongoose;

//-------------
//--------------Etablissement de la connexion à la base de données
//-------------

(async () => {
    try {
        await mongoose.connect("mongodb://localhost/LaPlateforme");
        console.log('Connexion avec la base de données établie');
    } catch (error) {
        console.error("Erreur lors de la connexion à la base de données :", error.message);
        }
})();


//-------------
//--------------Schemas
//-------------

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

//-------------
//--------------Constantes
//-------------

const User = mongoose.model('User', userSchema, 'student');

const Year = mongoose.model('Year', yearSchema, 'year')


//-------------
//--------------Fonctions
//-------------

async function createUser(nom, prenom, nbEleve, cursus){
    try{
        const anneeID = await chooseYearId(cursus)
        const newUser = await User.create({
            lastname: nom,
            firstname: prenom,
            students_number: nbEleve,
            year_id: anneeID
        })
        console.log(newUser)
        console.log(`Utilisateur créé avec succès: ${newUser.firstname} ${newUser.lastname}` )
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur!")
    }
}

async function addYear(cursus){
    try{
        const newYear = await Year.create({
            cursus: cursus
        })
        console.log(newYear)
        console.log('Le cursus a bien été ajouté à la base de données!')
    } catch (error) {
        console.error('Erreur lors de la création du cursus')
    }
}

async function chooseYearId(cursus){
    const years = await Year.find()
    for (const year of years) {
        if (cursus === year.cursus) {
            return year._id;
        }
    }
}

async function getAllStudents(){
    try {
        const students = await User.find().populate('year_id');
        return students
    } catch (error) {
        console.error("Erreur lors de la récupération des étudiants :", error.message);
    }
}

async function getStudentsWithGreaterNumber(nb){
    const students = await getAllStudents()
    students.forEach(student => {
        if (student.students_number > nb){
            console.log(student)
        } else{
            console.error('Aucun étudiant ne correspond à votre requête!')
        }
    })
}




//-------------
//--------------Script
//-------------


//POUR CREER UN UTILSATEUR ENTREZ: createUser(nom, prenom, nbEleve, cursus)

// createUser("LeBricoleur", "Bob", 15, 'Bachelor 1')
// createUser('Doe', 'John', 12, 'Bachelor 2')
// createUser('Dupont', 'Marie', 16, 'Bachelor 3')





