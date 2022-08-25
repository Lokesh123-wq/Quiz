const quizData=[
    {
        question: "Which type of Programming does Python support?",
        a: "object-oriented programming",
        b: "structured programming",
        c: "functional programming",
        d: "all of the mentioned",
        correct: "d"
    },
    {
        question: "Is Python case sensitive when dealing with identifiers?",
        a: " no",
        b: " yes",
        c: " machine dependent",
        d: " none of the mentioned",
        correct: "a"
    },
    {
        question: " Which of the following is used to define a block of code in Python language?",
        a: " Indentation",
        b: "Key",
        c: " Brackets",
        d: "all of the mentioned",
        correct: "a"
    },
    {
        question: "Which of the following character is used to give single-line comments in Python?",
        a: "//",
        b: "#",
        c: "!",
        d: "/*",
        correct: "b"
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl =  document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked= false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer =  answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click',() => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{ 
            quiz.innerHTML = `
            <h2>you answered ${score}/${quizData.length} questions correctly </h2>

            <button onclick="location.reload()">Realod</button>
            `
        }
    }
})