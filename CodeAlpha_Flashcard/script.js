let flashcards = [

    {
        question: "What is the capital of India?",
        answer: "New Delhi"
    },

    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },

    {
        question: "Which is the national bird of India?",
        answer: "Peacock"
    },

    {
        question: "Which is the national animal of India?",
        answer: "Tiger"
    },

    {
        question: "Who invented the telephone?",
        answer: "Alexander Graham Bell"
    },

    {
        question: "What is the largest ocean in the world?",
        answer: "Pacific Ocean"
    },

    {
        question: "What is national tree of india?",
        answer: "Banyan tree"
    },

    {
        question: "How many days are there in a week?",
        answer: "7"
    },

    {
        question: "What is the full form of HTML?",
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What is the full form of CSS?",
        answer: "Cascading Style Sheets"
    },

    {
        question: "What is the capital of France?",
        answer: "Paris"
    },

    {
        question: "Which festival is known as the festival of lights?",
        answer: "Diwali"
    },

    {
        question: "How many colors are there in a rainbow?",
        answer: "7"
    },

    {
        question: "Which is the fastest land animal?",
        answer: "Cheetah"
    },

    {
        question: "How many months are there in a year?",
        answer: "12"
    },

    {
        question: "Which country is famous for the Eiffel Tower?",
        answer: "France"
    },

    {
        question: "What is the chemical symbol for oxygen?",
        answer: "O"
    },

    {
        question: "Which planet is closest to the Sun?",
        answer: "Mercury"
    },

    {
        question: "How many hours are there in a day?",
        answer: "24"
    },

    {
        question: "Which is the smallest continent?",
        answer: "Australia"
    }

];
let currentCard = 0;


function loadCard() {

    document.getElementById("question").innerText =
        (currentCard + 1) + ". " +
        flashcards[currentCard].question;

    document.getElementById("answer").innerText = "";

    document.getElementById("progressBar").style.width =
        ((currentCard + 1) / flashcards.length) * 100 + "%";

    const card = document.querySelector(".card");

    card.classList.remove("animate-card");

    void card.offsetWidth;   // Animation ni restart chestundi

    card.classList.add("animate-card");
}
function showAnswer() {

    document.getElementById("answer").innerText =
        flashcards[currentCard].answer;
}

function nextCard(){

    if(currentCard === flashcards.length - 1){

        document.getElementById("popup").classList.add("show");

        return;
    }

    currentCard++;

    loadCard();
}

function previousCard() {

    if (currentCard === 0) {


        return;
    }

    currentCard--;

    loadCard();
}

function addFlashcard() {

    let question = prompt("Enter Question");

    let answer = prompt("Enter Answer");

    if (question && answer) {

        flashcards.push({

            question: question,

            answer: answer

        });

        currentCard = flashcards.length - 1;

        loadCard();

        alert("Flashcard Added Successfully!");

    }

}
function deleteFlashcard() {

    if (flashcards.length == 1) {

        alert("Cannot delete the last flashcard.");

        return;

    }

    flashcards.splice(currentCard, 1);

    if (currentCard >= flashcards.length) {

        currentCard = flashcards.length - 1;

    }

    loadCard();

    alert("Flashcard Deleted!");

}
function closePopup(){

    document.getElementById("popup").classList.remove("show");

    currentCard = 0;

    loadCard();
}

function restartQuiz() {
    currentCard = 0;
    closePopup();
    loadCard();
}
function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }
}

loadCard();