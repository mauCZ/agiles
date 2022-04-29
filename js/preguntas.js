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

let preguntas = []

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
preguntas.push(pregunta0)

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
preguntas.push(pregunta1)

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
preguntas.push(pregunta2)

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
preguntas.push(pregunta3)

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
preguntas.push(pregunta4)

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
preguntas.push(pregunta5)

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
preguntas.push(pregunta6)

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
preguntas.push(pregunta7)

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
preguntas.push(pregunta8)

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
preguntas.push(pregunta9)

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
preguntas.push(pregunta10)

let pregunta11 = new Pregunta(
  "El nombre completo del libertador Simon Bolivar fue:",
  [
    "Simón José Antonio de Trinidad Bolívar Palacios Ponte y Blanco",
    "Simón José Antonio de la Santísima Trinidad Bolívar",
    "Simón José Antonio de la Santísima Trinidad Ponte y Blanco",
    "Simón José Antonio de la Santísima Trinidad Bolívar Palacios Ponte y Blanco"
  ],
  3,
  "historia"
)
preguntas.push(pregunta11)

let pregunta12 = new Pregunta(
  "La guerra del Pacifico se llevo a cabo el año:",
  [
    "1789",
    "1781",
    "1798",
    "1790"
  ],
  0,
  "historia"
)
preguntas.push(pregunta12)

let pregunta13 = new Pregunta(
  "Quien fue el ultimo emperador Inca antes de la llegada de los españoles:",
  [
    "Atahualpa",
    "Huascar",
    "Huayca Capac",
    "Tupac Katari"
  ],
  0,
  "historia"
)
preguntas.push(pregunta13)

let pregunta14 = new Pregunta(
  "La guerra del Chaco fue los anhos:",
  [
    "1929-1932",
    "1928-1931",
    "1879-1891",
    "1932-1935"
  ],
  3,
  "historia"
)
preguntas.push(pregunta14)

let pregunta15 = new Pregunta(
  "La dictadura que mas personas mato en Bolivia fue:",
  [
    "Natush Busch",
    "Hugo Banzer Suarez",
    "Garcia Meza",
    "General Barrientos"
  ],
  2,
  "historia"
)
preguntas.push(pregunta15)

let pregunta16 = new Pregunta(
  "Bolivia fue fundada el año",
  [
    "1823",
    "1824",
    "1825",
    "1826"
  ],
  2,
  "historia"
)
preguntas.push(pregunta16)

let pregunta17 = new Pregunta(
  "El Presidente que mas tiempo goberno el pais de manera continua fue",
  [
    "Evo Morales",
    "Mariano Melgarejo",
    "Andres de Santa Cruz",
    "Victor Paz Estensoro"
  ],
  0,
  "historia"
)
preguntas.push(pregunta17)

let pregunta18 = new Pregunta(
  "Cuantas lenguas tiene Bolivia?",
  [
    "Menos de 10",
    "Cerca de 40",
    "Alrededor de 20",
    "Solamente 4, castellano y 3 originarios"
  ],
  1,
  "historia"
)
preguntas.push(pregunta18)

let pregunta19 = new Pregunta(
  "Segun la Constitucion Politica del Estado el nombre oficial de Bolivia es:",
  [
    "Estado Plurinacional de Bolivia",
    "Republica Democratica de Bolivia",
    "Republica de Bolivia",
    "Estado Indigenista de Bolivia"
  ],
  0,
  "historia"
)
preguntas.push(pregunta19)

let pregunta20 = new Pregunta(
  "Quien es la primera mujer que ha gobernado Bolivia?",
  [
    "Lilly Gabriela Montaño",
    "Eva Gonzales Lafuente",
    "Lidia Gueiler Tejada",
    "Adriana Salvatierra"
  ],
  3,
  "historia"
)
preguntas.push(pregunta20)

let pregunta21 = new Pregunta(
  "Los Gobiernos Autonomos Municipales establecidos en el Estado Plurinacional son:",
  [
    "112 municipios",
    "312 municipios",
    "239 municipios",
    "339 municipios"
  ],
  3,
  "historia"
)
preguntas.push(pregunta21)

let pregunta22 = new Pregunta(
  "El Gobernador/a, maxima autoridad ejecutiva en un departamento dura en sus funciones por:",
  [
    "4 años",
    "5 años",
    "3 años",
    "Ninguno de las anteriores"
  ],
  1,
  "historia"
)
preguntas.push(pregunta22)

let pregunta23 = new Pregunta(
  "Ciertas partes del territorio nacional, por su biodiversidad, sus ecosistemas y recursos naturales deben cuidarse y se las designa como:",
  [
    "Areas protegidas",
    "Reservas de la biosfera",
    "Areas prohibidas",
    "Areas de desarrollo"
  ],
  0,
  "historia"
)
preguntas.push(pregunta23)

let pregunta24 = new Pregunta(
  "El pasaporte nacional se obtiene en:",
  [
    "La policia nacional",
    "La gobernacion departamental",
    "El servicio nacional de migracion",
    "La cancilleria"
  ],
  2,
  "historia"
)
preguntas.push(pregunta24)

let pregunta25 = new Pregunta(
  "¿Con que paises limita Bolivia?",
  [
    "Brasil, Paraguay, Argentina, Chile y Perú",
    "Perú, Chile, Argentina y Uruguay",
    "Brasil, Uruguay, Argentina, Chile y Perú",
    "Paraguay, Argentina, Chile, Perú, Brasil y Venezuela"
  ],
  0,
  "historia"
)
preguntas.push(pregunta25)

let pregunta26 = new Pregunta(
  "¿Cual fue el primer Presidente de Bolivia nacido en Bolivia?",
  [
    "José Miguel de Velasco",
    "José Maria Pérez de Urdininea",
    "Mariano Melgarejo",
    "Simón Bolivar"
  ],
  1,
  "historia"
)
preguntas.push(pregunta26)

let pregunta27 = new Pregunta(
  "¿Cuántos escudos ha tenido Bolivia?",
  [
    "2",
    "3",
    "1",
    "4"
  ],
  1,
  "historia"
)
preguntas.push(pregunta27)

let pregunta28 = new Pregunta(
  "El nevado mas alto de Bolivia con una altitud de 6542 msnm es el:",
  [
    "Illimani",
    "Sajama",
    "Illampu",
    "Tunari"
  ],
  1,
  "historia"
)
preguntas.push(pregunta28)

let pregunta29 = new Pregunta(
  "¿Con cuantos departamentos originalmente tuvo Bolivia cuando fue fundada?",
  [
    "Con 6, Santa Cruz, La Paz, Potosí, Cochabamba y Chuquisaca",
    "Con cinco: Oruro, La Paz, Potosí, Cochabamba y Chuquisaca",
    "Con cinco: Santa Cruz, La Paz, Potosí, Cochabamba y Chuquisaca",
    "Con cuatro: La Paz, Potosí, Cochabamba y Chuquisaca"
  ],
  2,
  "historia"
)
preguntas.push(pregunta29)

let pregunta30 = new Pregunta(
  "¿Cuál es la superficie actual y la superficie con la que nacio Bolivia?",
  [
    "1098550 km² - 2450000 km²",
    "1098500 km² - 3420124 km²",
    "1098581 km² - 2363769 km²",
    "1098560 km² - 2769363 km²"
  ],
  2,
  "historia"
)
preguntas.push(pregunta30)





let p31 = new Pregunta(
  "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
  [
    "Tejido",
    "Partícula",
    "Atomo",
    "Célula"
  ],
  3,
  "ciencias"
)
preguntas.push(p31);

let p32 = new Pregunta(
  "El proceso por el que una célula se divide para formar dos células hijas se llama:",
  [
    "Segregación",
    "Mitosis",
    "Simbiotica",
    "Meiosis"
  ],
  1,
  "ciencias"
)
preguntas.push(p32)

let p33 = new Pregunta(
  "La información genética en las células se localiza:",
  [
    "En el nucleo",
    "En la membrana",
    "En el nucleolo",
    "En el citoplasma"
  ],
  0,
  "ciencias"
)
preguntas.push(p33)

let p34 = new Pregunta(
  "¿Con qué respira una ballena?",
  [
    "Por la piel",
    "Pulmones",
    "Branquias",
    "Nariz"
  ],
  1,
  "ciencias"
)
preguntas.push(p34)

let p35 = new Pregunta(
  "Los cromosomas están formados por:",
  [
    "ADN (ácido desoxirribonucleico)",
    "Proteínas",
    "ARN (ácido ribonucleico)",
    "Acidos"
  ],
  0,
  "ciencias"
)
preguntas.push(p35)

let p36 = new Pregunta(
  "Al descendiente del cruce de un asno y una yegua se le conoce como:",
  [
    "Asno",
    "Burro",
    "Mini asno",
    "Mulo"
  ],
  3,
  "ciencias"
)
preguntas.push(p36)

let p37 = new Pregunta(
  "Para los botánicos, el tomate es una:",
  [
    "Verdura",
    "Hortaliza",
    "Crucifera",
    "Fruta"
  ],
  3,
  "ciencias"
)
preguntas.push(p37)

let p38 = new Pregunta(
  "La fuerza física que la tierra ejerce sobre los cuerpos hacia su centro es la:",
  [
    "Gravedad",
    "Normal",
    "Rozamiento",
    "Energia"
  ],
  0,
  "ciencias"
)
preguntas.push(p38)

let p39 = new Pregunta(
  "¿Cómo se llama la teoría que considera que todos los organismos descendemos del mismo ancestro?",
  [
    "Creacionismo",
    "Darwinismo",
    "Lamarckismo",
    "Gradualismo"
  ],
  1,
  "ciencias"
)
preguntas.push(p39)

let p40 = new Pregunta(
  "El proceso mediante el cual se generan moléculas orgánicas a partir de sustancias inorgánicas usando como fuente de energía el sol es:",
  [
    "La fotosíntesis",
    "El catabolismo",
    "El anabolismo",
    "Metastasis"
  ],
  0,
  "ciencias"
)
preguntas.push(p40)

let p41 = new Pregunta(
  "Las bacterias son organismos",
  [
    "Procariotes",
    "Eucariotes",
    "Vegetales",
    "Animales"
  ],
  0,
  "ciencias"
)
preguntas.push(p41)

let p42 = new Pregunta(
  "¿Cuál de las siguientes características espropia de los seres vivos?",
  [
    "Son perennes",
    "Su adaptabilidad es nula",
    "Responden a estímulos",
    "Carecen de procesos metabólicos"
  ],
  2,
  "ciencias"
)
preguntas.push(p42)

let p43 = new Pregunta(
  "El embrión se diferencia en tres capasgerminales, éstas son:",
  [
    "Gastrulación, segmentación y blastulación.",
    "Ectodermo, mesodermo y endodermo.",
    "Digestivo, circulatorio y muscular.",
    "Mórula, blástula y gástrula."
  ],
  1,
  "ciencias"
)
preguntas.push(p43)

let p44 = new Pregunta(
  "A partir del ectodermo se forman:",
  [
    "El sistema digestivo",
    "La vejiga urinaria y parte de la uretra",
    "Los músculos de la cara.",
    "El sistema nervioso, la piel y sus anexos."
  ],
  3,
  "ciencias"
)
preguntas.push(p44)

let p45 = new Pregunta(
  "El esquema de la figura adjuntarepresenta:",
  [
    "La estructura primaria de una proteína",
    "La estructura secundaria de una proteína.",
    "La estructura terciaria de una proteína.",
    "La estructura cuaternaria de una proteína."
  ],
  1,
  "ciencias"
)
preguntas.push(p45)

let pd1 = new Pregunta(
  "Como se llama la anotacion de un tanto en futbol americano?",
  [
    "Gol de campo.",
    "Safety.",
    "El touchdown.",
    "Conversion (TRY)"
  ],
  2,
  "deporte"
)
preguntas.push(pd1)

let pd2 = new Pregunta(
  "Que pais gano la primera Copa Mundial de futbol en 1930?",
  [
    "Brasil",
    "Uruguay",
    "Alemania",
    "Italia"
  ],
  1,
  "deporte"
)
preguntas.push(pd2)

let pd3 = new Pregunta(
  "Quien gano cinco mundiales consecutivos de Formula 1?",
  [
    "Lewis Hamilton, piloto Ingles",
    "Sebastian Vettel, piloto aleman",
    "Nelson Piquet,piloto brasileño",
    "Michael Schumacher,piloto aleman"
  ],
  3,
  "deporte"
)
preguntas.push(pd3)

let pd4 = new Pregunta(
  "Como se llama el deporte en el cual se levantan pesas?",
  [
    "Halterofilia",
    "Hockey",
    "Atletismo",
    "Squash"
  ],
  0,
  "deporte"
)
preguntas.push(pd4)

let pd5 = new Pregunta(
  "Cuanto dura un partido de futbol?",
  [
    "90 minutos repartidos en dos partes de 45 minutos cada una.",
    "40 minutos repartidos en dos partes de 20 minutos cada una.",
    "100 minutos repartidos en dos partes de 50 minutos cada una.",
    "90 minutos repartidos en dos partes de 45 minutos cada una."
  ],
  0,
  "deporte"
)
preguntas.push(pd5)

let pd6 = new Pregunta(
  "Cuando se celebro el primer mundial de futbol?",
  [
    "El 27 de mayo de 1934 en Italia",
    "El 21 de mayo de 1904 en Suiza",
    "El 13 de julio de 1930 en Uruguay",
    "El 12 de octubre de 1926 en Santiago de Chile"
  ],
  2,
  "deporte"
)
preguntas.push(pd6)

let pd7 = new Pregunta(
  "Que seleccion de futbol ha ganado mas Mundiales?",
  [
    "España",
    "Brasil",
    "Italia",
    "Alemania"
  ],
  1,
  "deporte"
)
preguntas.push(pd7)

let pd8 = new Pregunta(
  "Michael Phelps es ...",
  [
    "Basketbolista",
    "Tenista",
    "Futbolista",
    "Nadador"
  ],
  3,
  "deporte"
)
preguntas.push(pd8)

let pd9 = new Pregunta(
  "Cuanto dura la prorroga en un partido de futbol?",
  [
    "Segun el reglamento dura 30 minutos repartidos en dos tiempos de 15 minutos cada uno",
    "Segun el reglamento dura 40 minutos repartidos en dos tiempos de 20 minutos cada uno",
    "Segun el reglamento dura 60 minutos repartidos en dos tiempos de 30 minutos cada uno",
    "Segun el reglamento dura 20 minutos repartidos en dos tiempos de 10 minutos cada uno"
  ],
  0,
  "deporte"
)
preguntas.push(pd9)

let pd10 = new Pregunta(
  "Cuantos jugadores tiene un equipo de futbol en el campo de juego?",
  [
    "10",
    "11",
    "13",
    "12"
  ],
  1,
  "deporte"
)
preguntas.push(pd10)
let pd11 = new Pregunta(
  "Quien es el maximo goleador del FC Barcelona?",
  [
    "Cristiano Ronaldo",
    "Cesar Rodriguez",
    "Lionel Messi",
    "Pele"
  ],
  2,
  "deporte"
)
preguntas.push(pd11)
let pd12 = new Pregunta(
  "En que club italiano jugo Diego Maradona?",
  [
    "En Napoli",
    "En Palermo",
    "En Modena",
    "En Juventus"
  ],
  0,
  "deporte"
)
preguntas.push(pd12)

let pd13 = new Pregunta(
  "Quien se considera el mejor jugador de baloncesto de todos los tiempos?",
  [
    "Karl Malone",
    "Kareem Abdul-Jabbar",
    "Micheal Jordan",
    "LeBron James"
  ],
  2,
  "deporte"
)
preguntas.push(pd13)

let pd14 = new Pregunta(
  "Como se llama la zona de hierba sobre la cual se ubica el hoyo en golf?",
  [
    "El aspero",
    "La calle",
    "El tee de salida",
    "El green"
  ],
  3,
  "deporte"
)
preguntas.push(pd14)

let pd15 = new Pregunta(
  "Como se llama el lugar donde se realizan las carreras de caballos?",
  [
    "Hipodromo",
    "Campo",
    "Pista",
    "Canodromo"
  ],
  0,
  "deporte"
)
preguntas.push(pd15)


let pa1 = new Pregunta(
  "La mona lisa es obra de: ",
  [
    "Leonardo Da Vinci",
    "Leonardo Di Caprio",
    "Miguel Angel",
    "Van Gogh"
  ],
  0,
  "arte"
)
preguntas.push(pa1)

let pa2 = new Pregunta(
  "En que museo se encuentra la Mona Lisa",
  [
    "Museo del Prado",
    "Brittish Museum",
    "Louvre",
    "Galeria Uffizi"
  ],
  2,
  "arte"
)
preguntas.push(pa2)

let pa3 = new Pregunta(
  "En que siglo nacio Van Gogh?",
  [
    "Siglo XIX",
    "Siglo XX",
    "Siglo XVII",
    "Siglo XVIII"
  ],
  0,
  "arte"
)
preguntas.push(pa3)

let pa4 = new Pregunta(
  "Pregunta de arte 1",
  [
    "Respuesta 1",
    "Respuesta 2",
    "Respuesta 3",
    "Respuesta 4"
  ],
  0,
  "arte"
)
preguntas.push(pa4)
let pa5 = new Pregunta(
  "Pregunta de arte 1",
  [
    "Respuesta 1",
    "Respuesta 2",
    "Respuesta 3",
    "Respuesta 4"
  ],
  0,
  "arte"
)
preguntas.push(pa5)
let pa6 = new Pregunta(
  "Pregunta de arte 1",
  [
    "Respuesta 1",
    "Respuesta 2",
    "Respuesta 3",
    "Respuesta 4"
  ],
  0,
  "arte"
)
preguntas.push(pa6)
let pa7 = new Pregunta(
  "Pregunta de arte 1",
  [
    "Respuesta 1",
    "Respuesta 2",
    "Respuesta 3",
    "Respuesta 4"
  ],
  0,
  "arte"
)
preguntas.push(pa7)
let pa8 = new Pregunta(
  "Pregunta de arte 1",
  [
    "Respuesta 1",
    "Respuesta 2",
    "Respuesta 3",
    "Respuesta 4"
  ],
  0,
  "arte"
)
preguntas.push(pa8)
let pa9 = new Pregunta(
  "Pregunta de arte 1",
  [
    "Respuesta 1",
    "Respuesta 2",
    "Respuesta 3",
    "Respuesta 4"
  ],
  0,
  "arte"
)
preguntas.push(pa9)
let pa10 = new Pregunta(
  "Pregunta de arte 1",
  [
    "Respuesta 1",
    "Respuesta 2",
    "Respuesta 3",
    "Respuesta 4"
  ],
  0,
  "arte"
)
preguntas.push(pa10)

export {preguntas,Pregunta}