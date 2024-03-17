console.log('ciao')

// consegna: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// scrivo un array con i nomi degli invitati:
const invitati = ["Andrea"  ,  "Eleonora" ,  "Lucia"  ,  "Francesco"  ,  "Anna"  ,  "Enrico"  ,  "Lorenzo"];
console.log('Nomi invitati: ' + invitati)


const nomeUtente = prompt('Inserisci il tuo nome')
console.log('Nome utente: ' + nomeUtente)

const cercaNome = invitati.indexOf(nomeUtente)
console.log(cercaNome)


if(cercaNome > 0) {
    console.log('Puoi partecipare!')
}else{
    console.log('Non puoi partecipare')
}
