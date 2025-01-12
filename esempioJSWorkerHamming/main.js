const elementoDati = document.querySelector("#dati");
const elementoRisultato = document.querySelector(".risultato");

if (window.Worker) {
    const codifica = new Worker("codificaHamming.js");
    
    elementoDati.addEventListener("change", ()=>codifica.postMessage([dati.value]));
    
    codifica.addEventListener("message",(e)=>{          elementoRisultato.textContent = e.data;
                                                        console.log("Message received from worker");
                                                   });
  
} else { console.log("Your browser doesn't support web workers."); }

