let utilisateur = {};

//--- génération valeur aleatoire entiere entre min et max ---//
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//---  génération dd'un tableau de valeur aléatoire de 2 colonnes 10 valeurs ---//
function generateRandomTable() {
    let tab = Array(2);
    for (let i = 0; i < 2; i++) {
        tab[i] = Array(10)
        for (let j = 0; j < 10; j++) {
            tab[i][j] = getRandomIntInclusive(1, 9);
        }
    }
    return tab
}

//--- calcul du resultat de la multiplication des val du tableau précédent ---// 
function computeAnswers(tab) {
    let res = Array(10);
    for (let i = 0; i < 10; i++) {
        res[i] = tab[0][i] * tab[1][i];
    }
    return res;
}

// fonction lancer jeu ---///
function lancerJeu(tabValAl, tabRes) {
    let i = 0
    score = 0
    let zoneQuestion = document.querySelector(".zoneQuestion")
    let inputEcriture = document.getElementById("inputEcriture")
    let btnValiderCalcul = document.getElementById("btnValiderCalcul")
    let zoneDuScore = document.getElementById("zoneDuScore")
    //--- met le focus(la barre) actif dans la zone de saisie ---//
    inputEcriture.focus()
    //--- Concaténer les valeurs aléatoires a partir du tableau 2 dimensions de val aleatoires ---//
    zoneQuestion.innerText = tabValAl[0][i] + " x " + tabValAl[1][i] + " =  ? "
    zoneDuScore.innerText = score
    // ré activation du bouton valider
    btnValiderCalcul.disabled = false
    //--- attente de clic sur le bouton valider pour 
    btnValiderCalcul.addEventListener("click", () => {
        if (inputEcriture.value == tabRes[i]) {
            score++
        }
        i++
        zoneDuScore.innerText = score
        //Réinitialisation du champ de saisi
        inputEcriture.value = ''
        //--- remet la barre dans la zone de saisie ---/
        inputEcriture.focus()
        //--- nouvelle question ---/
        zoneQuestion.innerText = tabValAl[0][i] + " x " + tabValAl[1][i] + " =  ? "
        if (i === tabRes.length) {
            zoneQuestion.innerText = "jeu terminé, Retentez votre chance !"
            // On désactive le bouton valider
            btnValiderCalcul.disabled = true;
            afficherForm();
            afficherInstructions();
            saisieForm();
        }
    })
}

function cacherForm() {
    document.getElementById("form").style.display = "none";
}
function afficherForm() {
    document.getElementById("form").style.display = "block";

}
function afficherInstructions() {
    document.querySelector(".zoneOptions").innerText = 'Inscrivez votre Nom ! ! !';
    document.querySelector(".zoneQuestion").innerText = 'Vous serez enregistré dans la base de données QuizCalcul !';
}
function saisieForm() {
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();

        let prenom = document.getElementById("prenom").value
        let nom = document.getElementById("nom").value
        let age = document.getElementById("age").value
        let email = document.getElementById("email").value

        utilisateur = { prenom, nom, age, email };

    })
}


//--- definition du prog principal ---//
function main() {
    cacherForm();
    let tabVal = generateRandomTable();
    let tabR = computeAnswers(tabVal);
    lancerJeu(tabVal, tabR);
}

//--- Lancement prog principal ---//
main();
export { saisieForm, utilisateur };

