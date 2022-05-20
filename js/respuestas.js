import { preguntas, Pregunta } from "./preguntas.js";

let preguntasSeleccionadas;
let preguntasRespondidas = new Map();
$(function () {
    preguntasSeleccionadas = filterQuestions(localStorage.getItem("category"));
    for (let pregunta of preguntasSeleccionadas) {
            preguntasRespondidas.set(pregunta, 'correcto');
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
        if (value == 'correcto') {
            $(answersElems[i]).append("<i class='fa-solid fa-check fa-2x'></i>");
            //$(answersElems[i]).append("<i class='fa-solid fa-text-width fa-2x'></i>");
        }
        else {
            if (value == 'incorrecto') {
                $(answersElems[i]).append("<i class='fa-solid fa-xmark fa-2x'></i>");
            }
            else {
                $(answersElems[i]).append("<i class='fa-solid fa-text-width fa-2x'></i>");
            }
        }
        j += 1;
        i += 1;
    }
    answersElems.each(function () {

    });
});

function filterQuestions(category) {
    preguntasSeleccionadas = preguntas.filter(function (pregunta) {
        if (pregunta.obtenerCategoria() == category) return true;
        return false;
    });
    return preguntasSeleccionadas;
}