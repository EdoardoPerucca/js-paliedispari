/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


/*
- creo le costanti collegate all'html
- creo la funzione button
- creo la variabile reverse
- creo il flusso if
- creo la funzione che mi restituisce la parola inversa
*/



// creo le costanti collegate all'html
const buttonInputEl = document.getElementById('button-input');
const inputEL = document.getElementById('input');
const outputEl = document.getElementById('output');


// creo la funzione button
buttonInputEl.addEventListener('click', function () {
    
// creo la variabile reverse
let reverseWord = palindroma(input.value);

// creo il flusso if
if(input.value == reverseWord){
    outputEl.innerText = 'la parola è palindroma';
  } else {
    outputEl.innerText = 'la parola non è palindroma';
  }
  

// creo la funzione che mi restituisce la parola inversa
function palindroma(str){
  let strReverse = str.split('').reverse().join('');  
  return strReverse;
}

});


// --------------- Lancio dadi ----------------------------



function lancia() {
  let pcNumero1El = Math.floor(Math.random() * 5 + 1);
   
  document.getElementById("pc-dado1").innerHTML ="Il computer ha totalizzato " + pcNumero1El;
  
  let pctotaleEl = pcNumero1El;
  
  
  

  let utenteNumero1El = Math.floor(Math.random() * 5 + 1);
    
  document.getElementById("utente-dado1").innerHTML ="Tu hai ottenuto " + utenteNumero1El; 
 
  let utenteTotaleEl= utenteNumero1El;
  

  
  
  sommaEl = (pcNumero1El + utenteNumero1El);

  if (sommaEl % 2 == 0) {
    document.getElementById('somma').innerHTML = 'La somma è pari';
  } else {
    document.getElementById('somma').innerHTML = 'La somma è dispari';
  }


  if(utenteTotaleEl > pctotaleEl) {
    document.getElementById("vinto").innerHTML = "hai vinto!";

  } else {
    document.getElementById("vinto").innerHTML = "Mi dispiace, hai perso";

  }
}
