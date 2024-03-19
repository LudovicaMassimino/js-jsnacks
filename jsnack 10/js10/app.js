console.log('ciao')

/* consegna: Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare. */



// for( let i = 0; i === numero; ){
//     const numero = (prompt('Inserisci un numero'))
//     console.log(numero)
// }

let prev, next

do{
    prev = next
    next = prompt('Inserisci un numero')

} while( prev !== next )

console.log('Hai inserito due volte consecutive il numero: ' + next)