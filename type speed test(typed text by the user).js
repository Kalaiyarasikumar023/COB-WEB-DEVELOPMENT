function processCurrentText() { 

// get current input text and split it 
curr_input = input_area.value; 
curr_input_array = curr_input.split(''); 

// increment total characters typed 
characterTyped++; 

errors = 0; 

quoteSpanArray = quote_text.querySelectorAll('span'); 
quoteSpanArray.forEach((char, index) => { 
	let typedChar = curr_input_array[index] 

	// character not currently typed 
	if (typedChar == null) { 
	char.classList.remove('correct_char'); 
	char.classList.remove('incorrect_char'); 

	// correct character 
	} else if (typedChar === char.innerText) { 
	char.classList.add('correct_char'); 
	char.classList.remove('incorrect_char'); 

	// incorrect character 
	} else { 
	char.classList.add('incorrect_char'); 
	char.classList.remove('correct_char'); 

	// increment number of errors 
	errors++; 
	} 
}); 

// display the number of errors 
error_text.textContent = total_errors + errors; 

// update accuracy text 
let correctCharacters = (characterTyped - (total_errors + errors)); 
let accuracyVal = ((correctCharacters / characterTyped) * 100); 
accuracy_text.textContent = Math.round(accuracyVal); 

// if current text is completely typed 
// irrespective of errors 
if (curr_input.length == current_quote.length) { 
	updateQuote(); 

	// update total errors 
	total_errors += errors; 

	// clear the input area 
	input_area.value = ""; 
} 
} 
