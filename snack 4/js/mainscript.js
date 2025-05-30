// crea un array vuoyo. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseirscilo nell array


let odd = [];

for (let i = 0; i < 6; i ++) {
    let userPick = Number(prompt("scegli un numero"))

    if (userPick % 2 === 1) {

        odd.push(userPick);


    }
} console.log(odd);
