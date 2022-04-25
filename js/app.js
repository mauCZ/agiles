import { preguntas, Pregunta } from "./preguntas.js";

let indRandom,
  preguntaActual,
  answered = false;


$(function () {
  showRandomQuestion();
  let answer_options = $(".answer");



  answer_options.on("click", function (ev) {
    if (!answered) {
      let icon = $(this).find("i");

      let respuesta = ev.target.innerText;

      if (preguntaActual.esRespuestaCorrecta(respuesta)) {

        $(this).toggleClass("correct-answer");
        icon.toggleClass("fa-check");
        setTimeout(showRandomQuestion, 2000);

      } else {

        $(this).toggleClass("incorrect-answer");
        icon.toggleClass("fa-xmark");
        markCorrectAnswer();
        setTimeout(showRandomQuestion, 2000);

      }
      answered = true;
    } else {
    }
  });
});

function markCorrectAnswer(){
  let respuestaActual = preguntaActual['respuestas'][preguntaActual.ind]
  console.log(respuestaActual)
  let answers = $('.answer')
  answers.each(function(){
    if($(this).text() == respuestaActual){
      $(this).toggleClass('correct-answer')
      $(this).append("<i class='fa-solid fa-check  fa-2x'></i>")
    }
  })
}

function answersDefaultStyle() {
  let answer_options = $(".answer");
  answer_options.each(function () {
    $(this).removeClass("correct-answer");
    $(this).removeClass("incorrect-answer");
  });
}

function showRandomQuestion() {
  answered = false
  answersDefaultStyle();
  let randInd = numeroAleatorio(0, 11);
  preguntaActual = preguntas[randInd];
  showQuestion(randInd);
}

function showQuestion(ind) {
  let selectedQuest = preguntas[ind];
  let questionElem = $(".question");
  let answersElems = $(".answer");

  questionElem.text(selectedQuest.pregunta);
  let answers = selectedQuest.respuestas;
  let i = 0;
  answersElems.each(function () {
    $(this).text(answers[i]);
    $(this).append("<i class='fa-solid fa-normal fa-2x'></i>")
    i += 1;
  });
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
