class Pregunta {
  constructor(pregunta, respuestas, indCorrecto,categoria) {
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.ind = indCorrecto;
    this.categoria = categoria;
  }
  obtenerCategoria(){
    return this.categoria;
  }
  esRespuestaCorrecta(respuesta) {
    return this.respuestas[this.ind] == respuesta;
  }
  obtenerRespuestaCorrecta(){
    return this.respuestas[this.ind]
  }
}


let pregunta0 = new Pregunta(
  "¿En qué se especializa la cartografía?",
  [
    "Es la ciencia que estudia los mapas.",
    "Es la ciencia que estudia los volcanes.",
    "Es la ciencia que estudia los minerales.",
    "Es la ciencia que estudia los oceanos.",
  ],
  0,
  "variado"
);

let pregunta1 = new Pregunta(
  "Quien fue el primer presidente de Bolivia?",
  [
    "Antonio Jose de Sucre",
    "Simon Bolivar",
    "Andres de Santa Cruz",
    "Jose Ballivian",
  ],
  1,
  "historia"
);

let pregunta2 = new Pregunta(
  "En que anhos empezo y termino la segunda guerra mundial?",
  [
    "1940 - 1945",
    "1938 - 1944",
    "1939 - 1944",
    "1939 - 1945"
  ],
  3,
  "variado"
)
let pregunta3 = new Pregunta(
  "Cual es el rio mas largo del mundo?",
  [
    "Rio Amazonas",
    "Rio Mississipi",
    "Rio Nilo",
    "Rio Yangtze"
  ],
  2,
  "ciencias"
)
let pregunta4 = new Pregunta(
  "Cuantos huesos tiene el ser humano?",
  [
    "204",
    "205",
    "206",
    "207"
  ],
  1,
  "variado"
)
let pregunta5 = new Pregunta(
  "Cual es el resultado de la operacion 6 / 2 * (1 + 2)?",
  [
    "5",
    "9",
    "1",
    "2"
  ],
  2,
  "variado"
)
let pregunta6 = new Pregunta(
  "Cual es la capital de Bolivia?",
  [
    "Cochabamba",
    "Chuquisaca",
    "La Paz",
    "Santa Cruz de la Sierra"
  ],
  1,
  "historia"
)
let pregunta7 = new Pregunta(
  "Cual es el planeta mas grande del sistema solar?",
  [
    "Saturno",
    "Jupiter",
    "Sol",
    "Tierra"
  ],
  1,
  "variado"
)
let pregunta8 = new Pregunta(
  "Cual es la rama de la biologia que estudia los insectos?",
  [
    "Zoologia",
    "Entomologia",
    "Ictiologia",
    "Mastozoologia"
  ],
  1,
  "ciencias"
)
let pregunta9 = new Pregunta(
  "Cual de los siguientes animales es el mas veloz?",
  [
    "Leopardo",
    "Pez Vela",
    "Vencejo",
    "Kanguro"
  ],
  2,
  "ciencias"
)
let pregunta10 = new Pregunta(
  "En que anho llego el ser humano a la luna?",
  [
    "1968",
    "1969",
    "1970",
    "1971"
  ],
  1,
  "ciencias"
)

let preguntas = [pregunta0,pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,
                pregunta7,pregunta8,pregunta9,pregunta10]
export {preguntas,Pregunta}