const questions = [
    {
        question : "Quel est le Chef-Lieu de la Province de l'Equateur?",
        answers : [
            {text: "Gemena" , correct: false},
            {text: "Gbadolite" , correct: false},
            {text: "Lisala" ,  correct: false},
            {text: "Mbandaka" , correct : true},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Nord-Ubangi?",
        answers : [
            {text: "Bunia" , correct: false},
            {text: "Matadi" , correct: false},
            {text: "Lisala" ,  correct: false},
            {text: "Gbadolite" , correct : true},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Sud-Ubangi?",
        answers : [
            {text: "Kananga" , correct: false},
            {text: "Gemena" , correct: true},
            {text: "Kabinda" ,  correct: false},
            {text: "Goma" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Bas-Uele?",
        answers : [
            {text: "Buta" , correct: true},
            {text: "Isiro" , correct: false},
            {text: "Bunia" ,  correct: false},
            {text: "Inongo" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province de l'Ituri?",
        answers : [
            {text: "Goma" , correct: false},
            {text: "Isiro" , correct: false},
            {text: "Bunia" ,  correct: true},
            {text: "Matadi" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province de la Mongala?",
        answers : [
            {text: "Lisala" , correct: true},
            {text: "Boende" , correct: false},
            {text: "Lusambo" ,  correct: false},
            {text: "MbujiMayi" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Kongo Central?",
        answers : [
            {text: "Matadi" , correct: true},
            {text: "Kinshasa" , correct: false},
            {text: "Kenge" ,  correct: false},
            {text: "Kisangani" , correct : false},
        ]
    },
    {
        question : " Quel est le Chef-Lieu de la Province de la Tshopo?",
        answers : [
            {text: "Goma" , correct: false},
            {text: "Isiro" , correct: false},
            {text: "Kisangani" ,  correct: true},
            {text: "Beni" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Nord-Kivu?",
        answers : [
            {text: "Bukavu" , correct: false},
            {text: "Lusambo" , correct: false},
            {text: "Boende" ,  correct: false},
            {text: "Goma" , correct : true},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Kasaï?",
        answers : [
            {text: "Kamina" , correct: false},
            {text: "Tshikapa" , correct: true},
            {text: "kolwezi" ,  correct: false},
            {text: "Lubumbashi" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Sud-Kivu?",
        answers : [
            {text: "Kindu" , correct: false},
            {text: "Isiro" , correct: false},
            {text: "Bukavu" ,  correct: true},
            {text: "Kenge" , correct : false},
        ]
    },
    
    {
        question : "Quel est le Chef-Lieu de la Province du Tanganyika?",
        answers : [
            {text: "Goma" , correct: false},
            {text: "Isiro" , correct: false},
            {text: "Bukavu" ,  correct: false},
            {text: "Kalemi" , correct : true},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Haut-Katanga?",
        answers : [
            {text: "Lubumashi" , correct: true},
            {text: "Isiro" , correct: false},
            {text: "Goma" ,  correct: false},
            {text: "Kananga" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Lualaba?",
        answers : [
            {text: "Bukavu" , correct: false},
            {text: "Kolwezi" , correct: true},
            {text: "Kalemi" ,  correct: false},
            {text: "Bunia" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Haut-Lomami?",
        answers : [
            {text: "Gemena" , correct: false},
            {text: "Lisala" , correct: false},
            {text: "Kamina" ,  correct: true},
            {text: "Mbandaka" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Maniema?",
        answers : [
            {text: "Kananga" , correct: false},
            {text: "Kabinda" , correct: false},
            {text: "Kalemi" ,  correct: false},
            {text: "Kindu" , correct : true},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Sankuru?",
        answers : [
            {text: "Lusambo" , correct: true},
            {text: "Kisangani" , correct: false},
            {text: "Boende" ,  correct: false},
            {text: "MbujiMayi" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province de la Tshuapa?",
        answers : [
            {text: "Boende" , correct: true},
            {text: "Bandundu" , correct: false},
            {text: "Inongo" ,  correct: false},
            {text: "Buta" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province de Kinshasa?",
        answers : [
            {text: "Gbadolite" , correct: false},
            {text: "Gemena" , correct: false},
            {text: "Lusambo" ,  correct: false},
            {text: "Kinshasa" , correct : true},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Kasaï-Oriental?",
        answers : [
            {text: "MbujiMayi" , correct: true},
            {text: "Kisangani" , correct: false},
            {text: "Kenge" ,  correct: false},
            {text: "Bandundu" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Kwilu?",
        answers : [
            {text: "Bandundu" , correct: true},
            {text: "Lisala" , correct: false},
            {text: "Isiro" ,  correct: false},
            {text: "Bunia" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province de Mai-Ndombe?",
        answers : [
            {text: "Inongo" , correct: true},
            {text: "Lusambo" , correct: false},
            {text: "Goma" ,  correct: false},
            {text: "Kalemi" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province de Kwango ?",
        answers : [
            {text: "Kinshasa" , correct: false},
            {text: "Kenge" , correct: true},
            {text: "Bunia" ,  correct: false},
            {text: "Gbadolite" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Haut-Uele?",
        answers : [
            {text: "Gemena" , correct: false},
            {text: "Matadi" , correct: false},
            {text: "Isiro" ,  correct: true},
            {text: "Bandundu" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Kasaï-Central?",
        answers : [
            {text: "Kananga" , correct: true},
            {text: "Lusambo" , correct: false},
            {text: "Kenge" ,  correct: false},
            {text: "Bunia" , correct : false},
        ]
    },
    {
        question : "Quel est le Chef-Lieu de la Province du Lomami?",
        answers : [
            {text: "Matadi" , correct: false},
            {text: "Gemena" , correct: false},
            {text: "Kabinda" ,  correct: true},
            {text: "Isiro" , correct : false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

// index for the current question 
let currentQuestionIndex= 0;
// index for the score accumalated by the user
let score = 0;

// Basically this function reset everrything as it was.
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
// This function remove the button answer that we have already set in the HTML
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// This functions shows the questions 
function showQuestion(){
    resetState();
    // Displaying the current question 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Displaying the answers 
    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

         //The interaction with the click button
         if(answer.correct){
            // it will add the true or false state into that buttondataset
             button.dataset.correct = answer.correct;
         }
         button.addEventListener("click",selectAnswer);

    })
}
// this function will check if the answer is correct or not 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    // This part here making sure one a button is selected , change color and shows the next button
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}

nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
//This function handle what the next button shoudl be doing
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}
// This function calculate the score 
function showScore(){
    resetState();
    questionElement.innerHTML = `Vous avez eu ${score} bonnes reponses sur ${questions.length} ! N'oubliez pas, 
    la Tshopo est la plus grande province et le Kasaï-Oriental est la plus petite. `;
    nextButton.innerHTML = "Rejouez encore!";
    nextButton.style.display = "block";
}
startQuiz();

