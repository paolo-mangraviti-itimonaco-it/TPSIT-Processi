onmessage = (e) => 
{
	console.log("Worker: Message received from main script");
	if ( isNaN(e.data[0]) || isNaN(e.data[1]) ) 
	{ postMessage("Scrivi due numeri, per favore!!"); } 
	else 
	{
		console.log("Worker: Posting message back to main script");
		postMessage( "Risultato: " + (e.data[0] * e.data[1]) );
	}
};
