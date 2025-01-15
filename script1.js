const questions = [
    {
        question: "Who built the ark?",
        options: ["Moses", "Noah", "David", "Abraham"],
        answer: 1
    },
    {
        question: "What is the first book of the Bible?",
        options: ["Exodus", "Leviticus", "Genesis", "Numbers"],
        answer: 2
    },
    {
        question: "Who was swallowed by a great fish?",
        options: ["Jonah", "Peter", "Paul", "Samuel"],
        answer: 0
    },
    {
        question: "What is the longest book in the Bible?",
        options: ["Psalms", "Isaiah", "Genesis", "Job"],
        answer: 0
    },
    {
        question: "Who led the Israelites out of Egypt?",
        options: ["Joshua", "Moses", "Aaron", "Joseph"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let results = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    resultElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === correctIndex) {
        score++;
        results.push(`Correct: ${currentQuestion.question}`);
    } else {
        results.push(
            `Incorrect: ${currentQuestion.question} - Correct Answer: ${
                currentQuestion.options[correctIndex]
            }`
        );
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    resultElement.innerHTML = results
        .map((result) => `<p>${result}</p>`)
        .join("");
    scoreElement.textContent = `Your final score is ${score} out of ${questions.length}.`;
    restartButton.style.display = "block";
}

restartButton.onclick = () => {
    score = 0;
    currentQuestionIndex = 0;
    results = [];
    scoreElement.textContent = "";
    restartButton.style.display = "none";
    loadQuestion();
};

loadQuestion();
