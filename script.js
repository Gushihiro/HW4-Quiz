var currentQuestion = document.querySelector(".question");
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var timeLeft = 120;

var highScore = JSON.parse(window.localStorage.getItem("Score"))

console.log(highScore)
    if (!highScore) {
        console.log("setting high score")
        highScore = [];
    }
var questionsArray = [
    {
       question: "What is the first summon you obtain in Final Fantasy X?", 
       answer1: "Bahamut", 
       answer2: "Pikachu", 
       answer3: "Chocobo", 
       answer4: "Valefor", 
       correctAnswer: "Valefor"
    },
    {
        question: "Which installments of Final Fantasy are categorized as an MMORPG (Massive Multiplayer Online Roleplaying Game)?",
        answer1: "Final Fantasy 13 and Final Fantasy 8",
        answer2: "Final Fantasy 11 and Final Fantasy 14",
        answer3: "Final Fantasy 15 and Final Fantasy 9",
        answer4: "Final Fantasy 7 and Final Fantasy 12",
        correctAnswer: "Final Fantasy 11 and Final Fantasy 14"
    },
    {
        question: "In Final Fantasy 7, the main protagonist is ______ Strife, and he partners with  _______ to overtake a corrupt government.",
        answer1: "Cloud, Avalanche",
        answer2: "Sephiroth, Meteor",
        answer3: "Cloud, Typhoon",
        answer4: "Zanzibar, Earthquake",
        correctAnswer: "Cloud, Avalanche"
    },
    {
        question: "What is the name of the intro song to the Square Enix game featuring Disney characters?",
        answer1: "Down and Dirty",
        answer2: "Beep Beep Boogie",
        answer3: "Simple and Clean",
        answer4: "My Heart Will Go On",
        correctAnswer: "Simple and Clean"
    },
    {
        question: "What character name makes an appearance in every installment of Final Fantasy?",
        answer1: "Tifa",
        answer2: "Tidus",
        answer3: "Cid",
        answer4: "Sora",
        correctAnswer: "Cid"
    }
]



var currentIndex = 0;
var questionEl = document.querySelector(".question");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var answerButtons = document.querySelectorAll(".answer")

function displayQuestion(i) {
    questionEl.textContent = questionsArray[currentIndex].question
    answer1El.textContent = questionsArray[currentIndex].answer1
    answer2El.textContent = questionsArray[currentIndex].answer2
    answer3El.textContent = questionsArray[currentIndex].answer3
    answer4El.textContent = questionsArray[currentIndex].answer4
}

function show(element) {
    element.style.display = "block"
}

function hide(element) {
    element.style.display = "none"
}

function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds until quiz closes."

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Sorry, the time alotted for this quiz has ended.");
            hide(questionEl);
            hide(answer1El);
            hide(answer2El);
            hide(answer3El);
            hide(answer4El);
            hide(timeEl);
            show(startQuiz);
            currentIndex = 0;
        }
    }, 1000);
}


startQuiz.addEventListener("click", function(event) {
    timeLeft = 120;
    displayQuestion();
    hide(event.target);
    setTime();
    show(questionEl);
    show(answer1El);
    show(answer2El);
    show(answer3El);
    show(answer4El);
    show(timeEl);
}),
console.log(answerButtons)
    


for (i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function (event) {
        var userGuess = event.target.textContent
        
        if (userGuess === questionsArray[currentIndex].correctAnswer) {
            console.log("You got it right")
            console.log(userGuess)
            if (currentIndex >= 4) {
                alert("Congratulations you've completed the quiz.")
                var hiName = prompt("Whatchoname")
                console.log(hiName)
                if (highScore.length < 10) {
                    highScore.push([hiName, timeLeft])
                    console.table(highScore)
                    console.log(highScore)
            
                    window.localStorage.setItem("Score", JSON.stringify(highScore))
                    
                    var deletef = confirm("Clear High Score?");
                    if (deletef) {
                        window.localStorage.clear();
                    }
                }
            }
            else {
                currentIndex++
                console.log(questionsArray[currentIndex].question)
                displayQuestion()
            }
            
            
        }
        
        else {
            alert("WRONG")
            timeLeft = timeLeft - 10;
        }
        

})}



