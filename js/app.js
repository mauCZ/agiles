import { preguntas, Pregunta } from "./preguntas.js";

let preguntaActual,
  answered = false;
let preguntasRespondidas = 0,
  incorrectas = 0,
  correctas = 0;

let preguntasSeleccionadas,
  k = 0;
$(function () {
  preguntasSeleccionadas = filterQuestions(localStorage.getItem("category"));
  // k = numeroAleatorio(0,preguntasSeleccionadas.length)
  updateQuestionNumber(k);
  preguntaActual = preguntasSeleccionadas[k];
  window.preguntasSeleccionadas = preguntasSeleccionadas;
  showNextQuestion();
  let answer_options = $(".answer");
  answer_options.on("click", function (ev) {
    if (!answered) {
      let icon = $(this).find("i");
      let respuesta = ev.target.innerText;
      if (preguntaActual.esRespuestaCorrecta(respuesta)) {
        $(this).toggleClass("correct-answer");
        icon.toggleClass("fa-check");
        correctas += 1;
        setTimeout(update, 2000);
      } else {
        $(this).toggleClass("incorrect-answer");
        icon.toggleClass("fa-xmark");
        incorrectas += 1;
        markCorrectAnswer();
        setTimeout(update, 2000);
      }
      answered = true;
    }
  });
});

function update() {
  answered = false;
  answersDefaultStyle();
  // k = numeroAleatorio(0,preguntasSeleccionadas.length)
  k += 1;

  if (k == 10) {
    localStorage.setItem("correctos", correctas);
    localStorage.setItem("incorrectos", incorrectas);
    window.location.replace("../html/evaluacion.html");
    answered = true;
  } else {
    preguntaActual = preguntasSeleccionadas[k];
    updateQuestionNumber(k);
    showNextQuestion();
  }
}
function updateQuestionNumber(num) {
  let numbElem = $("#numero");
  numbElem.text(k + 1);
}
function answersDefaultStyle() {
  let answer_options = $(".answer");
  answer_options.each(function () {
    $(this).removeClass("correct-answer");
    $(this).removeClass("incorrect-answer");
  });
}

function showNextQuestion() {
  let category = $(".category");
  let questionElem = $(".question");
  let answersElems = $(".answer");
  let selectedCategory = localStorage.getItem("category");
  category.text(
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
  );
  questionElem.text(preguntaActual.pregunta);
  let answers = preguntaActual.respuestas;
  let i = 0;
  answersElems.each(function () {
    $(this).text(answers[i]);
    $(this).append("<i class='fa-solid fa-normal fa-2x'></i>");
    i += 1;
  });
}

function showQuestion(ind) {
  let category = $(".category");
  let selectedQuest = preguntas[ind];
  let questionElem = $(".question");
  let answersElems = $(".answer");
  let selectedCategory = localStorage.getItem("category");
  category.text(
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
  );
  questionElem.text(selectedQuest.pregunta);
  let answers = selectedQuest.respuestas;
  let i = 0;
  answersElems.each(function () {
    $(this).text(answers[i]);
    $(this).append("<i class='fa-solid fa-normal fa-2x'></i>");
    i += 1;
  });
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function filterQuestions(category) {
  preguntasSeleccionadas = preguntas.filter(function (pregunta) {
    if (pregunta.obtenerCategoria() == category) return true;
    return false;
  });
  return preguntasSeleccionadas;
}
function markCorrectAnswer() {
  let respuestaActual = preguntaActual["respuestas"][preguntaActual.ind];
  let answers = $(".answer");
  answers.each(function () {
    if ($(this).text() == respuestaActual) {
      $(this).toggleClass("correct-answer");
      $(this).append("<i class='fa-solid fa-check  fa-2x'></i>");
    }
  });
}

// function showRandomQuestion() {
//   answered = false
//   answersDefaultStyle();
//   let randInd = numeroAleatorio(0, 11);
//   preguntaActual = preguntasSeleccionadas[randInd];
//   showQuestion(randInd);
// }
