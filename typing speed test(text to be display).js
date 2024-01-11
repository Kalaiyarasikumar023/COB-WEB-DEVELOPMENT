function updateQuote() { 
quote_text.textContent = null; 
current_quote = quotes_array[quoteNo]; 

// separate each character and make an element 
// out of each of them to individually style them 
current_quote.split('').forEach(char => { 
	const charSpan = document.createElement('span') 
	charSpan.innerText = char 
	quote_text.appendChild(charSpan) 
}) 

// roll over to the first quote 
if (quoteNo < quotes_array.length - 1) 
	quoteNo++; 
else
	quoteNo = 0; 
} 
