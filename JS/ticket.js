/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
*/

//Chiedo all'utente i km che deve percorrere
const customerKms = parseInt(prompt('Inserisci il kilometraggio'));
console.log(customerKms)

//Chiedo all'utente la sua età
const customerAge = parseInt(prompt ("Inserisci l'età"));
console.log(customerAge)

//Calcolo il prezzo standard del biglietto
const pricePerKm = 0.21;
const ticketBasePrice = customerKms * pricePerKm;
console.log(ticketBasePrice)

//Calcolo il prezzo scontato in base all'età
let ticketDiscount = 0;
let ticketDiscountPrice = 0;

if (customerAge < 18) {
    ticketDiscount = (ticketBasePrice / 100) * 20;
    ticketDiscountPrice = (ticketBasePrice - ticketDiscount);
    console.log(ticketDiscount)
} else if (customerAge > 65) {
    ticketDiscount = (ticketBasePrice / 100) * 40;
    ticketDiscountPrice = ticketBasePrice - ticketDiscount;
    console.log(ticketDiscount)
} else {
    ticketDiscountPrice = ticketBasePrice;
}
console.log(ticketDiscountPrice)

//Riduco a massimo 2 cifre decimali il prezzo finale
const formattedNumber = Math.round(ticketDiscountPrice * 100) / 100;
console.log(formattedNumber)

