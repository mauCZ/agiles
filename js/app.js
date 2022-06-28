import { questionArray as importedQuestions, Question } from "./preguntas.js";

let questionToShow,
  timeToAnswerQuestion = 10,
  timer,
  answeredIncorrectly = 0,
  answeredCorrectly = 0,
  wasAnswered = false,
  questionsAnswered = "",
  selectedQuestionsCategory,
  roundNumberQuestions = 10,
  questionIndex = 0;

$(function () {
  selectedQuestionsCategory = filterQuestions(localStorage.getItem("category"), localStorage.getItem('difficult'));
  roundNumberQuestions = Math.min(localStorage.getItem('questionsNumber'), selectedQuestionsCategory.length);
  updateQuestionNumber(questionIndex);
  questionToShow = selectedQuestionsCategory[questionIndex];
  update()
  let answer_options = $(".answer");
  answer_options.on("click", function (ev) {
    if (!wasAnswered) {
      let icon = $(this).find("i");
      let respuesta = ev.target.innerText;
      if (questionToShow.isCorrectAnswer(respuesta)) {
        $(this).toggleClass("correct-answer");
        icon.toggleClass("fa-check");
        answeredCorrectly += 1;
        questionsAnswered = questionsAnswered + ";correcto/" + questionToShow.getQuestion() + "/" + questionToShow.getCorrectAnswer();
        clearInterval(timer)
        timer = null
        setTimeout(update, 1000);
      } else {
        $(this).toggleClass("incorrect-answer");
        icon.toggleClass("fa-xmark");
        answeredIncorrectly += 1;
        questionsAnswered = questionsAnswered + ";incorrecto/" + questionToShow.getQuestion() + "/" + questionToShow.getCorrectAnswer();
        markCorrectAnswer();
        clearInterval(timer)
        timer = null
        setTimeout(update, 1000);
      }
      wasAnswered = true;
    }
  });
});

function decrementSeconds() {
  let counterElem = $('.counter')
  counterElem.text(timeToAnswerQuestion)
  timeToAnswerQuestion -= 1
}
function resetSeconds() {
  timeToAnswerQuestion = 10
  let counterElem = $('.counter')
  counterElem.text(timeToAnswerQuestion)
}

function update() {

  timer = setInterval(() => {
    if (timeToAnswerQuestion == 0) {
      answeredIncorrectly += 1
      questionsAnswered = questionsAnswered + ";TE/" + questionToShow.getQuestion() + "/" + questionToShow.getCorrectAnswer();
      clearInterval(timer)
      timer = null
      update()
      resetSeconds()
    }
    decrementSeconds()
  }, 1000);

  wasAnswered = false;
  answersDefaultStyle();
  if (questionIndex == roundNumberQuestions) {
    localStorage.setItem("correctos", answeredCorrectly);
    localStorage.setItem("incorrectos", answeredIncorrectly);

    localStorage.setItem("preguntas", questionsAnswered);

    window.location.replace("../html/evaluacion.html");
    wasAnswered = true;
  } else {
    questionToShow = selectedQuestionsCategory[questionIndex];
    updateQuestionNumber(questionIndex);
    showNextQuestion();
  }
  questionIndex += 1
}

function updateQuestionNumber(num) {
  let numbElem = $("#numero");
  numbElem.text(questionIndex + 1);
}

function answersDefaultStyle() {
  let answer_options = $(".answer");
  answer_options.each(function () {
    $(this).removeClass("correct-answer");
    $(this).removeClass("incorrect-answer");
  });
}

function showNextQuestion() {
  resetSeconds()
  let category = $(".category");
  let questionElem = $(".question");
  let answersElems = $(".answer");
  let selectedCategory = localStorage.getItem("category");
  let counter = $(".counter")
  let questionsPerRound = $('#preguntasPorRonda')
  questionsPerRound.text(Math.min(localStorage.getItem("questionsNumber"), selectedQuestionsCategory.length))
  category.text(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1));
  questionElem.text(questionToShow.pregunta);
  let answers = questionToShow.respuestas;
  let i = 0;
  answersElems.each(function () {
    $(this).text(answers[i]);
    $(this).append("<i class='fa-solid fa-normal fa-2x'></i>");
    i += 1;
  });
}

function filterQuestions(category, difficult) {
  selectedQuestionsCategory = importedQuestions.filter(function (question) {
    if (category == "variado") {
      if (question.getDifficult() == difficult.toLowerCase()) return true;
      return false;
    }
    else if (question.getCategory() == category && question.getDifficult() == difficult.toLowerCase()) return true;
    return false;
  });
  return mix(selectedQuestionsCategory);
}
function mix(array) {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
function markCorrectAnswer() {
  let respuestaActual = questionToShow["respuestas"][questionToShow.ind];
  let answers = $(".answer");
  answers.each(function () {
    if ($(this).text() == respuestaActual) {
      $(this).toggleClass("correct-answer");
      $(this).append("<i class='fa-solid fa-check  fa-2x'></i>");
    }
  });
}
