const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

let questions = [];
let currentQuestion = 0;
let score = 0;

async function fetchQuestions() {

    try {

        const response = await fetch(
            "https://opentdb.com/api.php?amount=5&type=multiple"
        );

        const data = await response.json();

        questions = data.results;

        showQuestion();

    } catch (error) {
        console.log(error);
    }
}

function showQuestion() {

    let q = questions[currentQuestion];

    questionEl.innerHTML = q.question;

    optionsEl.innerHTML = "";

    let answers = [...q.incorrect_answers, q.correct_answer];

    answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {

        let btn = document.createElement("button");

        btn.innerHTML = answer;

        btn.classList.add("option");

        btn.addEventListener("click", () => {

            if (answer === q.correct_answer) {
                score++;
            }

            document
                .querySelectorAll(".option")
                .forEach(btn => btn.disabled = true);
        });

        optionsEl.appendChild(btn);
    });
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        localStorage.setItem("quizScore", score);

        questionEl.innerHTML = "Quiz Finished!";

        optionsEl.innerHTML = "";

        scoreEl.innerHTML =
            "Your Score: " +
            localStorage.getItem("quizScore") +
            "/" +
            questions.length;

        nextBtn.style.display = "none";
    }
});

fetchQuestions();