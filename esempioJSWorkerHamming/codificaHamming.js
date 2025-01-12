onmessage = (e) => 
{
	console.log("Worker: Message received from main script");
	if ( isNaN(e.data[0]) ) 
	   { postMessage("Scrivi i dati, per favore!!"); } 
	else 
    	{
            console.log("Worker: Posting message back to main script");
            
            // Matrice Generatrice di Hamming (trasposta)
            GT = 
                    [
                        [1,1,0,1],
                        [1,0,1,1],
                        [1,0,0,0],
                        [0,1,1,1],
                        [0,1,0,0],
                        [0,0,1,0],
                        [0,0,0,1]
                    ];
            
            // Array dei dati
            dati = [0,0,0,0];
            
            
            for (i = 0; i<dati.length; i++) { dati[i] = parseInt(e.data[0].substring(i,i+1),2); }
            
            // Array del codice ottenuto dalla codifica di Hamming
            codice = [0,0,0,0,0,0,0];
            
            // Algoritmo della codifica di Hamming
            for (i = 0; i<codice.length; i++)
                for (j = 0; j<dati.length; j++)
                    codice[i] += dati[j] * GT[i][j];
            
            for (i = 0; i<codice.length; i++) codice[i] = codice[i]%2;
            
            postMessage( " Risultato: " + codice.toString().replaceAll(","," ") );
    	}
};
