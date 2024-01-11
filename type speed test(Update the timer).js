function updateTimer() { 
if (timeLeft > 0) { 
	// decrease the current time left 
	timeLeft--; 

	// increase the time elapsed 
	timeElapsed++; 

	// update the timer text 
	timer_text.textContent = timeLeft + "s"; 
} 
else { 
	// finish the game 
	finishGame(); 
} 
} 
