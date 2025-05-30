// il software deve chiedere per 10 volte all utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti
let somma = 0

for (let i = 0; i < 10; i++) {

    let numbersPicked = Number(prompt("Scegli un numero"))
    somma += parseInt(numbersPicked, 10);
   

} console.log(somma);



//******************* */

let repeat = 10;
sum = null;

for (i = repeat; i < 10; i++)
    