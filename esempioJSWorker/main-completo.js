const first = document.querySelector("#number1");
const second = document.querySelector("#number2");
const result = document.querySelector(".result");

if (window.Worker) {
  const moltiplicatore = new Worker("worker.js");
 
// Prima Tecnica
/*
  [first, second].forEach((input) => {
    input.onchange = () => {
      moltiplicatore.postMessage([first.value, second.value]);
      console.log("Message posted to worker");
    };
  });
*/

// Seconda tecnica
/*
	first.onchange = () => 
	{
      moltiplicatore.postMessage([first.value, second.value]);
      console.log("Message posted to worker");
    };
	second.onchange = () => 
	{
      moltiplicatore.postMessage([first.value, second.value]);
      console.log("Message posted to worker");
    };
*/

// Terza tecnica
first.addEventListener("change", ()=>moltiplicatore.postMessage([first.value, second.value]));
second.addEventListener("change", ()=>moltiplicatore.postMessage([first.value, second.value]));

// Elaborazione del messaggio ricevuto dal processo Moltiplicatore
// Prima Tecnica
/*
  moltiplicatore.onmessage = (e) => {
    result.textContent = e.data;
    console.log("Message received from worker");
  };
*/

// Seconda Tecnica
moltiplicatore.addEventListener("message",(e)=>{result.textContent = e.data;console.log("Message received from worker");});
  
} else {
  console.log("Your browser doesn't support web workers.");
}

