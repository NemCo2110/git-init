const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const resultText = document.getElementById('result-text');

const questions = [
 {
        question: "რომელი თეგი გამოიყენება ყველაზე დიდი სათაურისთვის HTML-ში?",
        answers: ["<h6>", "<h1>", "<h2>", "<p>"],
        correctAnswer: "<h1>"
 },
 
 {
    question: "როგორ ვპოულობთ ელემენტს ID-ით JavaScript-ში?",
    answers: ["querySelector()", "getElement()","getElementById()", "findId()"],
    correctAnswer: "getElementById()"
 },

  {
    question: "რომელი მეთოდით ვამატებთ ახალ ელემენტს HTML-ში JavaScript-ის მეშვეობით?",
    answers: ["appendChild()", "createNode()", "addElement()", "insertTag()"],
    correctAnswer: "appendChild()"
  },

  {
    question: "როგორ ვწერთ ტექსტს კონსოლში JavaScript-ში?",
    answers: ["console.show()", "log.console()", "console.log()", "print()"],
    correctAnswer: "console.log()"
  }
]

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion (){
      const current = questions[currentQuestionIndex];
      questionText.textContent = current.question;
      answersContainer.innerHTML = "";
      resultText.textContent = "";
      nextButton.style.display = "none";
      restartButton.style.display = "none";

        current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(button, current.correctAnswer));
        answersContainer.appendChild(button);
      });
}

function selectAnswer (button, correctAnswer) {
      const buttons = answersContainer.querySelectorAll("button");
      buttons.forEach(btn => btn.disabled = true);
            if (button.textContent === correctAnswer) {
        button.classList.add("correct");
        resultText.textContent = "სწორია!";
        score++;
      } else {
        button.classList.add("wrong");
        resultText.textContent = "არასწორია!";
        buttons.forEach(btn => {
          if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
          }
        });
      }

      nextButton.style.display = "inline-block";
    }

    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        showFinalResult();
      }
    });

    function showFinalResult() {
      questionText.textContent = "ვიქტორინა დასრულდა!";
      answersContainer.innerHTML = "";
      resultText.textContent = `თქვენი შედეგია ${score} / ${questions.length}`;
      nextButton.style.display = "none";
      restartButton.style.display = "inline-block"
    }

        restartButton.addEventListener('click', function() {
            currentQuestionIndex = 0;
            score = 0;
            restartButton.style.display = "none";
            displayQuestion();
        })
    

displayQuestion();
