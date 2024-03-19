console.log('ciao')

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.





// creo un array vuoto
let sum = 0;
const numeri = [];

// uso ciclo for per chiedere per 10 volte all'utente di inserire un numero parseInt((prompt)):
for(let i = 0; i < 3; i++){
    const numero = parseInt(prompt('inserisci un numero'));
    
    numeri.push(numero)
    // console.log(numero, typeof numero)
    console.log(numeri)
}  
// sommo i numeri all'interno dell'array:
for(let i = 0; i < numeri.length; i++){
    const numero = numeri[i]
    console.log(numero)
    sum += numero
}
console.log('La somma dei numeri che hai inserito è: ' + sum)
    
   