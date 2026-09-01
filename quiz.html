// Utility: decode HTML entities in API text (OpenTDB returns encoded text)
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Shuffle helper
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// DOM refs
const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");
const typeSelect = document.getElementById("type-select");
const amountInput = document.getElementById("amount");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const quizTop = document.getElementById("quiz-top");
const qIndexEl = document.getElementById("q-index");
const progressBar = document.getElementById("progress-bar");
const scoreEl = document.getElementById("score");
const questionCard = document.getElementById("question-card");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const metaEl = document.getElementById("meta");
const nextBtn = document.getElementById("next-btn");
const revealBtn = document.getElementById("reveal-btn");
const endCard = document.getElementById("end-card");
const endTitle = document.getElementById("end-title");
const endText = document.getElementById("end-text");
const playAgain = document.getElementById("play-again");
const apiNote = document.getElementById("api-note");

let state = {
  questions: [],
  current: 0,
  score: 0,
  answered: false,
};

// Fetch categories from Open Trivia DB
async function loadCategories() {
  try {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();
    // data.trivia_categories is an array
    data.trivia_categories.forEach((cat) => {
      const opt = document.createElement("option");
      opt.value = cat.id;
      opt.textContent = cat.name;
      categorySelect.appendChild(opt);
    });
    apiNote.textContent = "Categories loaded";
  } catch (err) {
    console.error("Failed loading categories", err);
    apiNote.textContent = "Failed loading categories — using All Categories";
  }
}

// Build API URL and fetch questions
async function fetchQuestions() {
  const amount = Math.max(1, Math.min(50, parseInt(amountInput.value) || 10));
  const category = categorySelect.value;
  const difficulty = difficultySelect.value;
  const type = typeSelect.value;

  const params = new URLSearchParams({ amount });
  if (category && category !== "any") params.set("category", category);
  if (difficulty && difficulty !== "any") params.set("difficulty", difficulty);
  if (type) params.set("type", type);

  const url = "https://opentdb.com/api.php?" + params.toString();

  try {
    const res = await fetch(url);
    const data = await res.json();
    // handle response codes: 0 success, 1 no results, 2 invalid param etc
    if (data.response_code !== 0) {
      throw new Error("API response code: " + data.response_code);
    }
    // Normalize questions: decode entities, build options
    const questions = data.results.map((item) => {
      const correct = decodeHtml(item.correct_answer);
      const incorrect = item.incorrect_answers.map((a) => decodeHtml(a));
      const all = shuffle([correct, ...incorrect]);
      return {
        question: decodeHtml(item.question),
        correct_answer: correct,
        options: all,
        category: item.category,
        difficulty: item.difficulty,
        type: item.type,
      };
    });
    return questions;
  } catch (err) {
    console.error("Failed fetching questions", err);
    throw err;
  }
}

function renderQuestion() {
  const q = state.questions[state.current];
  if (!q) return;

  quizTop.style.display = "flex";
  questionCard.style.display = "block";
  endCard.style.display = "none";

  qIndexEl.textContent = `${state.current + 1} / ${state.questions.length}`;
  const percent = Math.round((state.current / state.questions.length) * 100);
  progressBar.style.width = percent + "%";
  scoreEl.textContent = `Score: ${state.score}`;

  questionText.innerHTML = q.question;
  optionsList.innerHTML = "";

  q.options.forEach((optText, idx) => {
    const opt = document.createElement("button");
    opt.className = "option";
    opt.setAttribute("type", "button");
    opt.setAttribute("data-value", optText);
    opt.setAttribute("aria-pressed", "false");
    // ensure readable text color
    opt.innerHTML = `<span class="label">${String.fromCharCode(
      65 + idx
    )}.</span>&nbsp;<span class="text">${optText}</span>`;

    opt.addEventListener("click", () => handleAnswer(opt, optText));
    optionsList.appendChild(opt);
  });

  metaEl.textContent = `${q.category} • ${q.difficulty}`;

  // reset next/reveal
  nextBtn.style.display = "none";
  revealBtn.style.display = "none";
  state.answered = false;
}

function handleAnswer(buttonEl, value) {
  if (state.answered) return;
  state.answered = true;

  const currentQ = state.questions[state.current];
  const correct = currentQ.correct_answer;

  // disable all options
  Array.from(optionsList.children).forEach((btn) =>
    btn.classList.add("disabled")
  );

  if (value === correct) {
    buttonEl.classList.add("correct");
    state.score += 1;
    scoreEl.textContent = `Score: ${state.score}`;
  } else {
    buttonEl.classList.add("wrong");
    // highlight the correct one
    Array.from(optionsList.children).forEach((btn) => {
      if (btn.getAttribute("data-value") === correct) {
        btn.classList.add("correct");
      }
    });
  }

  // show reveal/next buttons
  if (state.current < state.questions.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "none";
  }
  revealBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  state.current += 1;
  if (state.current >= state.questions.length) {
    showEnd();
  } else {
    renderQuestion();
    // tiny focus for accessibility
    questionText.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

revealBtn.addEventListener("click", () => {
  const cur = state.questions[state.current];
  Array.from(optionsList.children).forEach((btn) => {
    if (btn.getAttribute("data-value") === cur.correct_answer) {
      btn.classList.add("correct");
    }
    btn.classList.add("disabled");
  });
  revealBtn.style.display = "none";
  if (state.current < state.questions.length - 1)
    nextBtn.style.display = "inline-block";
});

function showEnd() {
  quizTop.style.display = "none";
  questionCard.style.display = "none";
  endCard.style.display = "block";
  endTitle.textContent = "Quiz Completed";
  endText.innerHTML = `You scored <strong>${state.score}</strong> out of <strong>${state.questions.length}</strong>.`;
}

startBtn.addEventListener("click", async () => {
  startBtn.disabled = true;
  startBtn.textContent = "Loading...";
  try {
    const qs = await fetchQuestions();
    if (!qs || !qs.length) {
      alert(
        "No questions found for the selected options. Try changing category/difficulty."
      );
      startBtn.disabled = false;
      startBtn.textContent = "Start Quiz";
      return;
    }
    state.questions = qs;
    state.current = 0;
    state.score = 0;
    renderQuestion();
    startBtn.textContent = "Restart";
    startBtn.disabled = false;
  } catch (err) {
    alert("Failed to start quiz. See console for details.");
    startBtn.disabled = false;
    startBtn.textContent = "Start Quiz";
  }
});

resetBtn.addEventListener("click", () => {
  // reset UI
  state.questions = [];
  state.current = 0;
  state.score = 0;
  quizTop.style.display = "none";
  questionCard.style.display = "none";
  endCard.style.display = "none";
  startBtn.textContent = "Start Quiz";
  apiNote.textContent = "";
});

playAgain.addEventListener("click", () => {
  // simply restart with same filters
  startBtn.click();
});

// initialize
(function init() {
  loadCategories();
  // show last update timestamp
  document.getElementById("last-update").textContent =
    new Date().toLocaleString();
})();
