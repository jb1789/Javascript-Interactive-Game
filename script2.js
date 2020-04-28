const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let countRightAnswers = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame, startCountDown)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

function startGame() {
    console.log('Started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function startCountDown() {
    var time = 300;
    var interval = setInterval(function () {
        time -= 1;
        if (time >= 0) {
            var minutes = Math.floor(time / 60);
            var seconds = time - (minutes * 60);
            var display = minutes + ' : ' + seconds;
            $("#timer").html(display);
        }
        else {
            clearInterval(interval);
        }
    }, 1000);
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)


    });
}
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)

    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex +1)
    nextButton.classList.remove('hide')

}
    nextButton.classList.remove('hide')

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Choose the client-side JavaScript object?',
        answers: [
            { text: 'FileUpLoad', correct: true },
            { text: 'Database', correct: false },
            { text: 'Cursor', correct: false },
            { text: 'Client', correct: false },
        ]
    },
    {
        question: 'Can you pass a anonymous function as an argument to another function?',
        answers: [
            { text: 'true', correct: true },
            { text: 'false', correct: false },
            
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<scripting>', correct: false },
            { text: '<script>', correct: true },
            { text: '<js>', correct: false },
            { text: '<javascript>', correct: false },
        ]
    },
    {
        question: 'Where is the correct place to insert a Javascript?',
        answers: [
            { text: 'The <head> section', correct: false },
            { text: 'The <body> section', correct: true },
            { text: 'Both the <head> and the <body section', correct: false },
            { text: 'neither', correct: false },
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'msg("Hello World");', correct: false },
            { text: 'alert("Hello World");', correct: true },
            { text: 'msgBox("Hello World");', correct: false },
            { text: 'alertBox("Hello World");', correct: false },
    ]
}]

