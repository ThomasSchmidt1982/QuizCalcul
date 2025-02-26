const http = require('node:http');
const createServer = http.createServer;
const hostname = '127.0.0.1';
const port = 3000;

const mongoose = require('mongoose');
const { type } = require('node:os');

import { saisieForm, utilisateur } from './script.js';

// Connexion à MongoDB
mongoose.connect('mongodb+srv://thomasmichelschmidt:3X6OvWadsb5nZVVS@clusterthomas.2rqg7.mongodb.net/QuizCalcul?retryWrites=true&w=majority',
    {})
    .then(() => console.log('Connecté à MongoDB !'))
    .catch((err) => console.error('Erreur de connexion :', err));

// Définition du schéma
const utilisateurSchema = new mongoose.Schema({
    prenom: { type: String, required: true },
    nom: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true }
});

// Création du modèle
const Utilisateur = mongoose.model('User', utilisateurSchema);

// Création d'un nouvel utilisateur
const nouvelUtilisateur = new Utilisateur({
    prenom: utilisateur.prenom,
    nom: utilisateur.nom,
    age: utilisateur.age,
    email: utilisateur.email
});


// Enregistrement de l'utilisateur dans la base de données
nouvelUtilisateur.save()
    .then(() => console.log('Utilisateur enregistré !'))
    .catch((err) => console.error('Erreur lors de l\'enregistrement :', err));



const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server en fonctionnement');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
