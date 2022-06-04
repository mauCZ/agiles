import { preguntas, Pregunta } from "./preguntas.js";

let preguntasSeleccionadas;
let preguntasRespondidas = new Map();
$(function () {
  preguntasSeleccionadas = filterQuestions(localStorage.getItem("category"));
  for (let pregunta of preguntasSeleccionadas) {
    preguntasRespondidas.set(pregunta, 'correctos');
  }
  let category = $(".category");
  let answersElems = $(".answer");
  let selectedCategory = localStorage.getItem("category");
  category.text(
    "Respuestas de la ronda categoria " + selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
  );
  let i = 0;
  let icon = $(this).find("i");
  let j = 1;
  for (let [key, value] of preguntasRespondidas) {
    $(answersElems[i]).text(j + ". " + key.pregunta + " \n R. " + key.obtenerRespuestaCorrecta());
    console.log(value);
    if (value == 'correcto') {
      $(answersElems[i]).append("<i class='fa-solid fa-check fa-2x'></i>");
      //$(answersElems[i]).append("<i class='fa-solid fa-text-width fa-2x'></i>");
    }
    else {
      if (value == 'incorrecto') {
        $(answersElems[i]).append("<i class='fa-solid fa-xmark fa-2x'></i>");
      }
      else {
        $(answersElems[i]).append("<i class='fa-solid fa-hourglass-end fa-2x'></i>");
      }
    }
    j += 1;
    i += 1;
  }
  answersElems.each(function () {

  });
});


$(function () {
  let correctasElem = $('#correctas')
  let incorrectasElem = $('#incorrectas')

  let preguntasCorrectas = localStorage.getItem('correctos')
  let preguntasIncorrectas = localStorage.getItem('incorrectos')

  correctasElem.text(preguntasCorrectas)
  incorrectasElem.text(preguntasIncorrectas)

  let mensajeElem = $('#mensaje')
  if (preguntasIncorrectas > preguntasCorrectas) {
    mensajeElem.css({
      "color": "darkred",
      "font-weight": "bold"
    })
    // mensajeElem.css("color","darkgreen")
    mensajeElem.text('VUELVE A INTENTARLO :(')
  }
  else {
    mensajeElem.css({
      "color": "darkgreen",
      "font-weight": "bold"
    })
    // mensajeElem.css("color","darkred")
    mensajeElem.text('¡BUEN TRABAJO!')
  }
});

function filterQuestions(category) {
  preguntasSeleccionadas = preguntas.filter(function (pregunta) {
    if (pregunta.obtenerCategoria() == category) return true;
    return false;
  });
  return preguntasSeleccionadas;
};

function respuestas() {
  var ocultar = document.getElementById("respuestas");
  ocultar.style.display = 'none';
  var mostrar = document.getElementById("evaluacion");
  mostrar.style.display = 'block';
};

function evaluacion() {
  var ocultar = document.getElementById("respuestas");
  ocultar.style.display = 'block';
  var mostrar = document.getElementById("evaluacion");
  mostrar.style.display = 'none';
};