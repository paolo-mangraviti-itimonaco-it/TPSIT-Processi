const elementoPrimoNumero = document.querySelector("#primoNumero");
const elementoSecondoNumero = document.querySelector("#secondoNumero");
const elementoRisultato = document.querySelector(".risultato");

if (window.Worker) {
    const moltiplicatore = new Worker("moltiplicatore.js");
    
    elementoPrimoNumero.addEventListener("change", ()=>moltiplicatore.postMessage([elementoPrimoNumero.value, elementoSecondoNumero.value]));
    elementoSecondoNumero.addEventListener("change", ()=>moltiplicatore.postMessage([elementoPrimoNumero.value, elementoSecondoNumero.value]));
    
    moltiplicatore.addEventListener("message",(e)=>{    elementoRisultato.textContent = e.data;
                                                        console.log("Message received from worker");
                                                   });
  
} else { console.log("Your browser doesn't support web workers."); }
