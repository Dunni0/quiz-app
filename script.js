alert("you can't skip any question, goodluck!")

const questionData = [
    {
        question: "What tag is used for an unordered list?",
        a: "<p>",
        b: "<ul>",
        c: "<ol>",
        d: "<i>",
        correct : "b"
    },
    {
       question: "What does the </br> tag signify?",
       a: "Push",
       b: "Underline",
       c: "Before",
       d: "Break",
       correct : "d"
    },
    {
        question: "What is the full meaning of CSS?",
        a: "Cascade Styling Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading of Style Sheet",
        d: "Cascading Style Sheets",
        correct : "d"
    },
    {
        question: "What was the most used programming language in 2019?",
        a: "JavaScript",
        b: "Java",
        c: "C",
        d: "Python",
        correct : "b"
    },
    {
        question: "Which is the the most popular programming language?",
        a: "JavaScript",
        b: "HTML",
        c: "C++",
        d: "go",
        correct : "a"
    },
    {
        question: "Javascript was invented when?",
        a: "2020",
        b: "1998",
        c: "2002",
        d: "1995",
        correct : "d"
    },
]

   let currentQuiz = 0;
   let score = 0;

   const quiz = document.getElementById("quiz")

   const questionEl = document.getElementById("question");
    
   const a_text = document.getElementById("a_text");
   const b_text = document.getElementById("b_text");
   const c_text = document.getElementById("c_text");
   const d_text = document.getElementById("d_text");
   const submitBtn = document.getElementById("submit")

   const answerEls = document.querySelectorAll(".answer")
   
   // to show quiz & answer options

function showQuiz(){
    deselectAnswers();

    const currentQuizData = questionData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
showQuiz();

  //to select answers

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });

         return answer;
}

   // to deselect 

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    
    });
}

  //button's action

submitBtn.addEventListener("click",function(){


    const answer = getSelected();

    // check for correct answer & add score & reload
    
    if (answer === questionData[currentQuiz].correct){
        score++;
    }

    if (answer){
    currentQuiz++;
    if( currentQuiz < questionData.length ){
        showQuiz();
        } else{
            quiz.innerHTML = "<h3>" + "You answered " + score + "/"+ questionData.length + " questions correctly." + "</h3>" + 
           
            "<button onClick= location.reload()>" + "Play again" + "</button>";
        }
    }
});
