

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
    //--- attente de clic sur le bouton valider pour 
    btnValiderCalcul.addEventListener("click", () => {
        if (inputEcriture.value == tabRes[i]) {
            score++
        }
        i++
        zoneDuScore.innerText = score
        inputEcriture.value = ''
        //--- remet la barre dans la zone de saisie ---/
        inputEcriture.focus()
        //--- nouvelle question ---/
        zoneQuestion.innerText = tabValAl[0][i] + " x " + tabValAl[1][i] + " =  ? "
        if (i === tabRes.length) {
            zoneQuestion.innerText = "jeu terminé, Retentez votre chance !"
            // On désactive le bouton valider
            btnValiderCalcul.disabled = true
        }
    })
}


//--- prog principal ---//
function main() {
    let tabVal = generateRandomTable();
    let tabR = computeAnswers(tabVal);
    lancerJeu(tabVal, tabR);
}

main();