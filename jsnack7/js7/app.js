console.log('ciao')

// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.

// Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.


// scrivo la tabellina del 2 all'interno del ciclo for perchè la moltiplicazione si deve ripetere fino ad arrivare al risultato 1000:
/*
for (let i = 1; i < 501; i++){
    const tabellina = 2 * i
    console.log(tabellina)
} 
*/

// chiedo all'utente fino a che numero vuole che venga calcolata e stampata la tabellina:

const numero = parseInt(prompt('Inserisci il numero massimo consentito'))
console.log("L'utente vuole che la tabellina venga calcolata fino al: " + numero)

// scrivo la tabellina del 2 all'interno del ciclo for perchè la moltiplicazione si deve calcolare tante volte quante il numero scelto dall'utente:

for (let i = 0; i < (numero+1); i++){
    const tabellina = 2 * i
    console.log('2 * ' + i + ' = ' + tabellina)
}
