console.log('ciao')

// consegna: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// scrivo un array con i nomi degli invitati:
const invitati = ["Andrea"  ,  "Eleonora" ,  "Lucia"  ,  "Francesco"  ,  "Anna"  ,  "Enrico"  ,  "Lorenzo"];
console.log('Nomi invitati: ' + invitati)

// chiedo all'utente il suo nome:
const nomeUtente = prompt('Inserisci il tuo nome')
console.log('Nome utente: ' + nomeUtente)

// cerco il nome che ha inserito l'utente all'interno dell'array 'invitati' utilizzando indexOf:
const cercaNome = invitati.indexOf(nomeUtente)
console.log(cercaNome)

//scrivo la condizione SE indexOf da un risultato >0 (cioè ha trovato il suo nome nell'array) allora comunico all'utente che può partecipare:
if(cercaNome > 0) {
    console.log('Puoi partecipare!')

    // ALTRIMENTI gli comunico che non può partecipare (indexOf restituisce -1, cioè non ha trovato il nome nell'array di nomi)
}else{
    console.log('Non puoi partecipare')
}
