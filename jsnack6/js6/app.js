console.log('ciao')

// consegna: Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.

// generare un numero random da 0 a 10
const numeroRandom = Math.floor(Math.random (0) * 10);
console.log(numeroRandom)

// chiedere all'utente di inserire un numero:
const numeroUtente = parseInt(prompt('Inserisci un numero'))
console.log("Il numero inserito dall'utente è: " + numeroUtente)

// condizione: SE numeroUtente === numeroRandom --> hai vinto
if(numeroUtente === numeroRandom){
    console.log('Hai vinto!')

    // ALTRIMENTI hai perso
}else {
    console.log('Hai perso')
}