import { preguntas, Pregunta } from "./preguntas.js";

let preguntaActual,
  answered = false,
  seconds = 10,
  preguntasRespondidas = 0,
  preguntasRespondidasCorrectamente = [],
  preguntasRespondidasIncorrectamente = [],
  preguntasNoRespondidasATiempo = [],
  timer,
  incorrectas = 0,
  correctas = 0,
  preguntasG = "",
  preguntasSeleccionadas,
  preguntasPorRonda = 10,
  puntaje = 0,
  k = 0;

$(function () {
  if(localStorage.getItem('difficult') == null){
    localStorage.setItem('difficult','Facil');
  }
  if(localStorage.getItem('questionsNumber') == null){
    console.log("gaa")
    localStorage.setItem('questionsNumber',10);
  }

  preguntasSeleccionadas = filterQuestions(localStorage.getItem("category"),localStorage.getItem('difficult'));

  preguntasPorRonda = Math.min(localStorage.getItem('questionsNumber'),preguntasSeleccionadas.length);

  // k = numeroAleatorio(0,preguntasSeleccionadas.length)
  updateQuestionNumber(k);
  preguntaActual = preguntasSeleccionadas[k];
  // showNextQuestion();
  update()
  let answer_options = $(".answer");
  answer_options.on("click", function (ev) {
    if (!answered) {
      let icon = $(this).find("i");
      let respuesta = ev.target.innerText;
      if (preguntaActual.esRespuestaCorrecta(respuesta)) {
        $(this).toggleClass("correct-answer");
        icon.toggleClass("fa-check");
        correctas += 1;
        preguntasG = preguntasG + ";correcto/" + preguntaActual.obtenerPregunta()+"/"+preguntaActual.obtenerRespuestaCorrecta();
        clearInterval(timer)
        timer = null
        setTimeout(update, 1000);
      } else {
        $(this).toggleClass("incorrect-answer");
        icon.toggleClass("fa-xmark");
        incorrectas += 1;
        preguntasG = preguntasG + ";incorrecto/" + preguntaActual.obtenerPregunta()+"/"+preguntaActual.obtenerRespuestaCorrecta();
        markCorrectAnswer();
        clearInterval(timer)
        timer = null
        setTimeout(update, 1000);
      }
      answered = true;
    }
  });
});

function decrementSeconds() {
  let counterElem = $('.counter')
  counterElem.text(seconds)
  seconds -= 1
}
function resetSeconds() {
  seconds = 10
  let counterElem = $('.counter')
  counterElem.text(seconds)
}

function update() {

  timer = setInterval(() => {
    if (seconds == 0) {
      incorrectas += 1
      preguntasG = preguntasG + ";TE/" + preguntaActual.obtenerPregunta()+"/"+preguntaActual.obtenerRespuestaCorrecta();
      clearInterval(timer)
      timer = null
      update()
      resetSeconds()
    }
    decrementSeconds()
  }, 1000);

  answered = false;
  answersDefaultStyle();
  // k = numeroAleatorio(0,preguntasSeleccionadas.length)
  if (k == preguntasPorRonda) {
    localStorage.setItem("correctos", correctas);
    localStorage.setItem("incorrectos", incorrectas);

    localStorage.setItem("preguntas", preguntasG);

    window.location.replace("../html/evaluacion.html");
    answered = true;
  } else {
    preguntaActual = preguntasSeleccionadas[k];
    updateQuestionNumber(k);
    showNextQuestion();
  }
  k += 1
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
  resetSeconds()
  let category = $(".category");
  let questionElem = $(".question");
  let answersElems = $(".answer");
  let selectedCategory = localStorage.getItem("category");
  let counter = $(".counter")
  let preguntasPorRonda = $('#preguntasPorRonda')
  preguntasPorRonda.text(Math.min(localStorage.getItem("questionsNumber"),preguntasSeleccionadas.length))
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

function filterQuestions(category,difficult) {
  preguntasSeleccionadas = preguntas.filter(function (pregunta) {
    if(category=="variado"){
      if(pregunta.obtenerDificultad()==difficult.toLowerCase())return true;
      return false;
    }
    else if (pregunta.obtenerCategoria() == category && pregunta.obtenerDificultad()==difficult.toLowerCase()) return true;
    return false;
  });
  return mezclar(preguntasSeleccionadas);
}
function mezclar(array) {
  let currentIndex = array.length,  randomIndex;
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
  let respuestaActual = preguntaActual["respuestas"][preguntaActual.ind];
  let answers = $(".answer");
  answers.each(function () {
    if ($(this).text() == respuestaActual) {
      $(this).toggleClass("correct-answer");
      $(this).append("<i class='fa-solid fa-check  fa-2x'></i>");
    }
  });
}
