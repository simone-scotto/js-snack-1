let word1 = prompt("inserisci una parola")


let word2 = prompt("inserisci una seconda parola")

if ( word1.length < word2.length) {
    console.log(word1);
    console.log(word2);    
} else if ( word1.length > word2.length ) {
    console.log(word2);
    console.log(word1);
    
    
} else {
    console.log("le due parole sono uguali");
    
}