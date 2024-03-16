console.log('ciao')

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo all'utente due parole:
const parola1 = prompt('Scrivi una parola');
console.log('la prima parola è: ' + parola1)
const parola2 = prompt("Scrivi un'altra parola");
console.log('la seconda parola è: ' + parola2)

// misuro le lunghezze delle due parole:
const lunghezza1 = parola1.length;
console.log('la prima parola è lunga: ' + lunghezza1);

const lunghezza2 = parola2.length;
console.log('la seconda parola è lunga: ' + lunghezza2);

if(lunghezza1 < lunghezza2){
    console.log('la parola più corta: ' + parola1)
    console.log('la parola più lunga: ' + parola2)

}else if(lunghezza2 < lunghezza1) {
    console.log('la parola più corta: ' + parola2)
    console.log('la parola più lunga: ' + parola1)
}