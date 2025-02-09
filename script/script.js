
//--- Fonction valeur aleatoire entiere entre min et max ---//
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//--- Calcul donnant 2 valeurs aléatoires entre min et max ---//
let valeurAleatoire1 = getRandomIntInclusive(1, 9)
let valeurAleatoire2 = getRandomIntInclusive(1, 9)

//--- génération d'un tableau de 2 colonnes de 10 valeurs aléatoires ---//
let tabValAl =
    [[getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9)],
    [getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9),
    getRandomIntInclusive(1, 9)]]

//--- génération d'un tableau de resultat par rapport aux 2 valeurs aleatoire précedentes ---//
let tabResultat =
    [(tabValAl[0][0] * tabValAl[1][0]),
    (tabValAl[0][1] * tabValAl[1][1]),
    (tabValAl[0][2] * tabValAl[1][2]),
    (tabValAl[0][3] * tabValAl[1][3]),
    (tabValAl[0][4] * tabValAl[1][4]),
    (tabValAl[0][5] * tabValAl[1][5]),
    (tabValAl[0][6] * tabValAl[1][6]),
    (tabValAl[0][7] * tabValAl[1][7]),
    (tabValAl[0][8] * tabValAl[1][8]),
    (tabValAl[0][9] * tabValAl[1][9])]

// fonction lancer jeu ---///
let i = 0
score = 0
btnPartager.disabled = true

//--- affiche dans la zoneQuestion le calcul a effectuer ---//
let zoneQuestion = document.querySelector(".zoneQuestion")
//--- récupérer saisie utilisateur quand appui sur valider ---//
let inputEcriture = document.getElementById("inputEcriture")
let btnValiderCalcul = document.getElementById("btnValiderCalcul")
let zoneDuScore = document.getElementById("zoneDuScore")

//--- met le focus(la barre) actif dans la zone de saisie ---//
inputEcriture.focus()

//--- Concaténer les valeurs aléatoires a partir du tableau 2 dimensions de val aleatoires ---//
zoneQuestion.innerText = tabValAl[0][i] + " x " + tabValAl[1][i] + " =  ? "
zoneDuScore.innerText = score


btnValiderCalcul.addEventListener("click", () => {
    console.log(inputEcriture.value)
    console.log(tabResultat[i])

    if (inputEcriture.value == tabResultat[i]) {
        score++
    }
    i++
    zoneDuScore.innerText = score
    inputEcriture.value = ''
    //--- remet la barre dans la zone de saisie ---/
    inputEcriture.focus()
    //--- nouvelle question ---/
    zoneQuestion.innerText = tabValAl[0][i] + " x " + tabValAl[1][i] + " =  ? "
    if (i === tabResultat.length) {
        zoneQuestion.innerText = "jeu terminé, Retentez votre chance !"
        // On désactive le bouton valider
        btnValiderCalcul.disabled = true
        // On désactive les boutons radios
        //for (let indexBtnRadio = 0; indexBtnRadio < listeBtnRadio.length; indexBtnRadio++) {
        //    listeBtnRadio[indexBtnRadio].disabled = true
    }
})
