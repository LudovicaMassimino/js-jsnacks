console.log('ciao')

// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// chiedo all'utente due numeri:
const numero1 = parseInt(prompt('Inserisci un numero'));
const numero2 = parseInt(prompt('Inserisci un altro numero'));

// stampo il numero maggiore
if(numero1 > numero2) {
    console.log(numero1)

} else if(numero2 > numero1) {
    console.log(numero2)
}