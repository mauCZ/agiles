import { preguntas, Pregunta } from "./preguntas.js";

let  preguntaActual, answered = false

let preguntasSeleccionadas,k 

window.preguntas = preguntas


$(function () {

  preguntasSeleccionadas = filterQuestions(localStorage.getItem('category'))
  k = numeroAleatorio(0,preguntasSeleccionadas.length)
  preguntaActual = preguntasSeleccionadas[k]

  // showRandomQuestion();
  showNextQuestion()
  let answer_options = $(".answer");

  answer_options.on("click", function (ev) {
    console
    if (!answered) {
      let icon = $(this).find("i");

      let respuesta = ev.target.innerText;

      console.log(preguntaActual)
      console.log(respuesta)
      if (preguntaActual.esRespuestaCorrecta(respuesta)) {
        console.log(preguntaActual )
        console.log(respuesta)
        $(this).toggleClass("correct-answer");
        icon.toggleClass("fa-check");
        // setTimeout(showRandomQuestion, 2000);
        // setTimeout(showQuestion(),2000)
        setTimeout(showNextQuestion(),2000)

      } else {
        console.log(preguntaActual )
        console.log(respuesta)

        $(this).toggleClass("incorrect-answer");
        icon.toggleClass("fa-xmark");
        markCorrectAnswer();
        // setTimeout(showRandomQuestion, 2000);
        // setTimeout(showQuestion(),2000)
        setTimeout(showNextQuestion(),2000)

      }
      answered = true;
    } else {
    }
  });
});

function markCorrectAnswer(){
  let respuestaActual = preguntaActual['respuestas'][preguntaActual.ind]
  // console.log(respuestaActual)
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

// function showRandomQuestion() {
//   answered = false
//   answersDefaultStyle();
//   let randInd = numeroAleatorio(0, 11);
//   preguntaActual = preguntasSeleccionadas[randInd];
//   showQuestion(randInd);
// }

function showNextQuestion(){
  answered = false
  answersDefaultStyle()
  

  let category = $('.category')
  let questionElem = $('.question')
  let answersElems = $('.answer')
  let selectedCategory = localStorage.getItem('category')

  category.text(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1))
  questionElem.text(preguntaActual.pregunta)
  let answers = preguntaActual.respuestas
  let i = 0
  answersElems.each(function(){
    $(this).text(answers[i])
    $(this).append("<i class='fa-solid fa-normal fa-2x'></i>")
    i += 1;
  })
}

function showQuestion(ind) {
  let category = $('.category');
  let selectedQuest = preguntas[ind];
  let questionElem = $(".question");
  let answersElems = $(".answer");
  let selectedCategory = localStorage.getItem('category')

  category.text(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1))

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

function filterQuestions(category){
  preguntasSeleccionadas = preguntas.filter(function(pregunta){
    if(pregunta.obtenerCategoria() == category) return true;
    return false;
  })
  return preguntasSeleccionadas
}

