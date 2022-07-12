import { questionArray, Question } from "./preguntas.js";

const userExist = sessionStorage.getItem("sesionExist");
if (userExist) {
  const userName = sessionStorage.getItem("username");
  const templateUser = `
                        <i>${userName}</i>
                        <button>cerrar sesion</button>
                      `;
  const createTemplateUser = (document.getElementById("box-sesion").innerHTML =
    templateUser);
}

let preg = [];
let question = [];
$(function () {
  preg = localStorage.getItem("preguntas").split(";");
  let category = $(".category");
  let questionsElems = $(".question");
  let answersElems = $(".answer");
  let selectedCategory = localStorage.getItem("category");
  category.text(
    "Respuestas de la ronda categoria " +
      selectedCategory.charAt(0).toUpperCase() +
      selectedCategory.slice(1)
  );
  let indice_elem_html = 0;
  let nro_pregunta = 1;
  for (let k = 1; k < preg.length; k++) {
    question = preg[k].split("/");
    $(questionsElems[indice_elem_html]).text(nro_pregunta + ". " + question[1]);
    $(answersElems[indice_elem_html]).text("R. " + question[2]);
    if (question[0] == "correcto") {
      $(questionsElems[indice_elem_html]).append(
        "<i class='fa-solid fa-check fa-2x'></i>"
      );
    } else {
      if (question[0] == "incorrecto") {
        $(questionsElems[indice_elem_html]).append(
          "<i class='fa-solid fa-xmark fa-2x'></i>"
        );
      } else {
        $(questionsElems[indice_elem_html]).append(
          "<i class='fa-solid fa-te fa-2x'>TE</i>"
        );
      }
    }
    nro_pregunta += 1;
    indice_elem_html += 1;
  }
});

$(function () {
  let correctasElem = $("#correctas");
  let incorrectasElem = $("#incorrectas");
  let difficult = $("#difficult");

  let difficultValue = localStorage.getItem("difficult");
  let preguntasCorrectas = localStorage.getItem("correctos");
  let preguntasIncorrectas = localStorage.getItem("incorrectos");

  correctasElem.text(preguntasCorrectas);
  incorrectasElem.text(preguntasIncorrectas);
  console.log(difficultValue);
  difficult.text(difficultValue);

  let mensajeElem = $("#mensaje");
  if (preguntasIncorrectas > preguntasCorrectas) {
    mensajeElem.css({
      color: "darkred",
      "font-weight": "bold",
    });
    
    mensajeElem.text("VUELVE A INTENTARLO :(");
  } else {
    mensajeElem.css({
      color: "darkgreen",
      "font-weight": "bold",
    });
    mensajeElem.text("¡BUEN TRABAJO!");
  }
});

function guardarInformacionRonda() {
  if (userExist) {
    const idUser = sessionStorage.getItem("id");
    console.log(idUser);
    const difficult = localStorage.getItem("difficult");
    const questionsNumber = localStorage.getItem("questionsNumber");
    const respuestasCorrectas = localStorage.getItem("correctos");
    const category = localStorage.getItem("category");
    const data = {
      puntaje: respuestasCorrectas,
      dificultad: difficult,
      cantidad_preguntas: questionsNumber,
      categoria: category,
    };
    console.log(data);
    fetch(`http://agiles-server.herokuapp.com/api/puntuaciones/${idUser}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  } else {
    console.log("no se guardo nada");
  }
}

window.onload = () => {
  guardarInformacionRonda();
};
