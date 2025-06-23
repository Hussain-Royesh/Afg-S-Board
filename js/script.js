/*
const PI = 3.14;
let circomastence;
let radius;


    document.getElementById("calculate").onclick = function (){
        radius = document.getElementById("radius").value;
        circomastence = 2 * Math.PI * radius;
        document.getElementById("H3").textContent = "The circumference of the circle is: " + circomastence;
    }
        */

    /*
let number = 0;
document.getElementById("increase").onclick = function () {
    number++;
    document.getElementById("number").textContent = number;
}   
document.getElementById("decrease").onclick = function () {
    number--;
    document.getElementById("number").textContent = number;
}   
document.getElementById("reset").onclick = function () {
    number = 0;
    document.getElementById("number").textContent = number;
}   

let min = 90;
let max = 100;

let Random = Math.floor(Math.random()  * min - max ) + min;
console.log(Random);



document.getElementById("guessButton").onclick = function () {
    let guessInput = document.getElementById("guessInput").value;

    if (isNaN(guessInput)) {
        alert("Please enter a valid number.");
        return;
    }
    let randomNumber = Math.floor(Math.random() * 20) + 2; // Generates a number between 2 and 30   
    if (guessInput < 2 || guessInput > 30) {
        alert("Please enter a number between 2 and 30.");
        return;
    }
    document.getElementById("randomNumber").textContent = "Random Number: " + randomNumber;
    let resultMessage = document.getElementById("resultMessage");
    if (guessInput == randomNumber) {
        resultMessage.textContent = "Congratulations! You guessed the number!";
        resultMessage.style.color = "green";
    }
        
    
}
    


let age = 23;
if (age < 18) {
    console.log("You are a minor.");
}
else{
    console.log("You are an adult.");
}
    */

const myage= document.getElementById("age");
const submit = document .getElementById("msubmit");
const result = document.getElementById("result");
    // Function to check age and display result
   
  function checkAge() {
        const age = parseInt(myage.value);
        if (isNaN(age)) {
            result.textContent = "Please enter a valid number.";
            return;
        }
        if (age < 18) {
            result.textContent = "You are a minor.";
            result.style.color = "red";
        
        }
        else if (age < 60) {
            result.textContent = "You are an adult but not a senior.";
            result.style.color = "orange";
        }
        else {
            result.textContent = "You are an adult.";
            result.style.color = "green";
        }
    }

    // Add event listener to the submit button
submit.addEventListener("click", checkAge);



