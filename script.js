// richiedere una parola all'utente
var parola = prompt("Inserici una parola");
var parolaInvertita ="";




parolaInvertita = invertiParola(parola);
// parte dell'if
if (parola == parolaInvertita) {
  console.log("parola palindroma");
}else {
  console.log("parola non palindroma");
}


function invertiParola(parola) {
  var parolaInvertita ="";
  
  for(i = parola.length -1; i<=0; --i){
    parolaInvertita += parola[i];
  }
  return parolaInvertita;

}
