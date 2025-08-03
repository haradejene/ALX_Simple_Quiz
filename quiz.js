function checkAnswer(){
let correctAnswer = "4"; 


const selectedOption = document.querySelector('input[name="quiz"]:checked');
const feedbackDiv = document.getElementById("feedback");

    const userAnswer = selectedOption.value;

if(userAnswer === correctAnswer){
    feedbackDiv.textContent = "Correct! Well done.";
}
else{
   feedbackDiv.textContent = "That's incorrect. Try again!"; 
}}

document.getElementById("submit-answer").addEventListener("click",checkAnswer)