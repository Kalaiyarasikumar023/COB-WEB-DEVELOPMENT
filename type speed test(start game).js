function startGame() { 

resetValues(); 
updateQuote(); 

// clear old and start a new timer 
clearInterval(timer); 
timer = setInterval(updateTimer, 1000); 
} 

function resetValues() { 
timeLeft = TIME_LIMIT; 
timeElapsed = 0; 
errors = 0; 
total_errors = 0; 
accuracy = 0; 
characterTyped = 0; 
quoteNo = 0; 
input_area.disabled = false; 

input_area.value = ""; 
quote_text.textContent = 'Click on the area below to start the game.'; 
accuracy_text.textContent = 100; 
timer_text.textContent = timeLeft + 's'; 
error_text.textContent = 0; 
restart_btn.style.display = "none"; 
cpm_group.style.display = "none"; 
wpm_group.style.display = "none"; 
} 
