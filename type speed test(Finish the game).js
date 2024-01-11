function finishGame() { 
// stop the timer 
clearInterval(timer); 

// disable the input area 
input_area.disabled = true; 

// show finishing text 
quote_text.textContent = "Click on restart to start a new game."; 

// display restart button 
restart_btn.style.display = "block"; 

// calculate cpm and wpm 
cpm = Math.round(((characterTyped / timeElapsed) * 60)); 
wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60)); 

// update cpm and wpm text 
cpm_text.textContent = cpm; 
wpm_text.textContent = wpm; 

// display the cpm and wpm 
cpm_group.style.display = "block"; 
wpm_group.style.display = "block"; 
} 
