//Question bank
//attributes in objects
const questionBank = [
    {
        question: "What is the capital of Singapore?",
        answers: ["Hillview", "Malaysia", "Singapore", "Christmas Island"],
        correctAnswer: 2
    },
    {
        question: "Who is the coordinator of NM2207?",
        answers: ["ChatGPT", "Jay", "Ron", "Venus"],
        correctAnswer: 0
    },
    {
        question: "What is 2 + 2?",
        answers: ["1", "2", "4", "5"],
        correctAnswer: 2
    },
    {
        question: "Which water body is the largest?",
        answers: ["Atlantic Ocean", "My Tears", "The Yellow River", "Arctic Ocean"],
        correctAnswer: 1
    },
    {
        question: "Which tutorial is the most time consuming in 24/25 S2?",
        answers: ["HSI2013", "SC2204", "NM2207", "NM3217"],
        correctAnswer: 2
    }
];

//displaying 1 question
let scoreDisplay = document.querySelector("#score");
let questionTracker = document.querySelector("#question-tracker");
let questionText = document.querySelector("#question");
let answerSection = document.querySelector("#answer");
let feedback = document.querySelector("#feedback");
let nextButton = document.querySelector("#next-button");
let resetButton = document.querySelector("#reset-button");

let buttonA = document.createElement("button");
let buttonB = document.createElement("button");
let buttonC = document.createElement("button");
let buttonD = document.createElement("button");

answerSection.appendChild(buttonA);
answerSection.appendChild(buttonB);
answerSection.appendChild(buttonC);
answerSection.appendChild(buttonD);


//append the buttons to the section element with the Id="answer"
answerSection.appendChild(buttonA);
answerSection.appendChild(buttonB);
answerSection.appendChild(buttonC);
answerSection.appendChild(buttonD);

//set attributes
buttonA.setAttribute("value", "0");
buttonB.setAttribute("value", "1");
buttonC.setAttribute("value", "2");
buttonD.setAttribute("value", "3");

//Function to display a question
function displayQuestion(index) {
    let questionObj = questionBank[index];

    questionText.textContent = questionObj.question;

    //update ans options
    buttonA.textContent = questionObj.answers[0];
    buttonB.textContent = questionObj.answers[1];
    buttonC.textContent = questionObj.answers[2];
    buttonD.textContent = questionObj.answers[3];

    //question tracker
    questionTracker.textContent = (index + 1) + " of " + questionBank.length + " questions ";
}
//This calls the function and passes 0 as the index, meaning:
//questionBank[0] is retrieved.
//The first question and answers are displayed.
// The function executes everything inside {} when called.
displayQuestion(0);

//check answer w 2 arguments
function checkAnswer(questionIndex, selectedAnswer) {
    let question = questionBank[questionIndex]; //shows current ques
    let correctAnswer = question.correctAnswer; //correct Ans
    return Boolean(selectedAnswer == correctAnswer); //true/false
}
//let result1 = checkAnswer(0,2);
//let result2 = checkAnswer(0,1);
//console.log(result1) //(shows true)
//console.log(result2) //(shows false)



// saved variables (to be used in updateScore)
let score = 0;
let attempts = 0;

//Update score
function updateScore(AnsIsCorrect) {
    if (AnsIsCorrect) {
        score++;

        feedback.textContent = "CORRECT!";
        feedback.style.color = "lightgreen";
        feedback.style.backgroundColor = "darkgreen";
    } else {
        feedback.textContent = "WRONG!";
        feedback.style.color = "lightpink";
        feedback.style.backgroundColor = "red";
    }
    attempts++;
    scoreDisplay.textContent = "Score: " + score + " out of " + attempts + " attempts";
    
    if (attempts < 5) {
        scoreDisplay.textContent += " (all is normal so far)";
    } else if (attempts > 5 && attempts <= 10) {
        scoreDisplay.textContent += " (but why are there more attempts than questions?!?!!)";
    } else {
        scoreDisplay.textContent += " (SUCH PERSISTENCE!)";
    }
}

//Tracking score
function ClickAnswer(buttonIsClicked) {
    let selectedAnswer = parseInt(buttonIsClicked.target.value); 
    let isCorrect = checkAnswer(currentQuestion, selectedAnswer);//currentQuestion: current question's index in questionBank, selectedAnswer: index of the answer the user clicked
    updateScore(isCorrect); 
}

buttonA.addEventListener("click", ClickAnswer);
buttonB.addEventListener("click", ClickAnswer);
buttonC.addEventListener("click", ClickAnswer);
buttonD.addEventListener("click", ClickAnswer);



//NEXT QUESTIONNNNNN
let currentQuestion = 0;

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questionBank.length) {
        displayQuestion(currentQuestion);
        feedback.textContent = "";
    } else {
        nextButton.style.display = "none"; //yay it disappeared
    }
}
nextButton.addEventListener("click", nextQuestion);

//reset Quiz
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    attempts = 0;
    displayQuestion(currentQuestion);
    feedback.textContent = "";
    scoreDisplay.textContent = "Score: 0";
    nextButton.style.display = "block";
}

resetButton.addEventListener("click", resetQuiz);
