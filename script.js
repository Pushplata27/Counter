const counterDisplay = document.getElementById("count");

const increment = document.getElementById("inc");
const decrement = document.getElementById("dec");
const reset = document.getElementById("reset");

let counter = 0;

function Increment() {
    counter++;
    counterDisplay.innerHTML = counter;
}

function Decrement(){
    if(counter > 0) {
        counter--;
    } else {
        counter = 0 ;
    }
   
    counterDisplay.innerHTML = counter;
}

function Reset() {
    counter = 0 ;
    counterDisplay.innerHTML = counter;
}