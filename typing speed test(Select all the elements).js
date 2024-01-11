// define the time limit 
let TIME_LIMIT = 60; 

// define quotes to be used 
let quotes_array = [ 
"Push yourself, because no one else is going to do it for you.", 
"Failure is the condiment that gives success its flavor.", 
"Wake up with determination. Go to bed with satisfaction.", 
"It's going to be hard, but hard does not mean impossible.", 
"Learning never exhausts the mind.", 
"The only way to do great work is to love what you do."
]; 

// selecting required elements 
let timer_text = document.querySelector(".curr_time"); 
let accuracy_text = document.querySelector(".curr_accuracy"); 
let error_text = document.querySelector(".curr_errors"); 
let cpm_text = document.querySelector(".curr_cpm"); 
let wpm_text = document.querySelector(".curr_wpm"); 
let quote_text = document.querySelector(".quote"); 
let input_area = document.querySelector(".input_area"); 
let restart_btn = document.querySelector(".restart_btn"); 
let cpm_group = document.querySelector(".cpm"); 
let wpm_group = document.querySelector(".wpm"); 
let error_group = document.querySelector(".errors"); 
let accuracy_group = document.querySelector(".accuracy"); 

let timeLeft = TIME_LIMIT; 
let timeElapsed = 0; 
let total_errors = 0; 
let errors = 0; 
let accuracy = 0; 
let characterTyped = 0; 
let current_quote = ""; 
let quoteNo = 0; 
let timer = null; 
