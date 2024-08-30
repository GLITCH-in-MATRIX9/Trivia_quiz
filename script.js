const quizContainer = document.getElementById('quiz-container');//taking elements from the html page
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');

//all the questions
const questions = [
    {
        question: 'What is the capital of India?',
        options:['Delhi','Paris','New Delhi','Chandi Chowk'],
        correctAnswer:'Delhi'
    },
    {
        question: 'Which planet has the most CHAAND in our solar system?',
        options: ['Earth', 'Pluto', 'Jupiter', 'Saturn'],
        correctAnswer: 'Saturn'

    },
    {
        question: 'Who was the first president of USA?',
        options: ['George Washington', 'Nana Pathekar', 'John Abraham ', 'George Washingmachine'],
        correctAnswer: 'George Washington'
    
    },
    {
        question: 'Which animal can be seen on the Porsche logo??',
        options: ['Peppa Pig', 'Jaguar', 'Horse', 'Dora'],
        correctAnswer: 'Horse'
    
    },
    {
        question: 'What is the smallest nation in the world?',
        options: ['Vatican Nation', 'My imagination', 'Greece ', 'Examination'],
        correctAnswer: 'Vatican Nation'
    
    },
    {
        question: 'What is the name of the world’s longest river?',
        options: ['Mere aansu:(', 'Nile', 'beta(son)', 'Arabian-sea'],
        correctAnswer: 'Nile'
    
    },
    {
        question: 'Johnny Depp is famously afraid of what?',
        options: ['His wife', 'Courts', 'Disney', 'Clowns'],
        correctAnswer: 'Clowns'
    
    },
    {
        question: 'In Texas, it’s illegal to swear in front of what?',
        options: ['Corpse', 'Mirror', 'Strawberry Tree', 'Obama'],
        correctAnswer: 'Corpse'
    
    },
    {
        question: 'It was illegal for women to wear what in 19th century Florence?',
        options: ['Buttons', 'Confidence', 'Skirts', 'Hats'],
        correctAnswer: 'Buttons'
    
    },
    {
        question: 'Who claimed he could “drive away the devil with a fart?”',
        options: ['Martin Luther', 'My Dad', 'Salmon bhai', 'Bhupendra Jogi'],
        correctAnswer: 'Martin Luther'
    
    },
];

//the question index will move ahead with  the questions
let currentQuestionIndex = 0; // Index of the current question

let score = 0;

function startQuiz() { 
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];//takes the question from index 1,2,3,...
    questionElement.textContent = currentQuestion.question;//gets the text element of that question

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('#options-container button');

    options.forEach((option) => {
        option.disabled = true; // Disable all options to prevent further clicks
        if (option.textContent === currentQuestion.correctAnswer) {
            option.style.backgroundColor = '#7e9468'; // Green for correct answer
        } else {
            option.style.backgroundColor = '#ae3736'; // Red for incorrect answers
        }
    });

    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = 'Correct!';
        
    } else {
        feedbackElement.textContent = `It's  ${currentQuestion.correctAnswer}.`;
        
    }
    
    nextButton.disabled = false;
    disableOptions();
}

function disableOptions() {
    const options = document.querySelectorAll('#options-container button');
    options.forEach((option) => option.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        feedbackElement.textContent = '';
        nextButton.disabled = true;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h2>Quiz Over!</h2><p>What a shame ! </p><p>Your Score: ${score} out of ${questions.length}</p>`;
}

// Start the quiz when the page loads
startQuiz();
