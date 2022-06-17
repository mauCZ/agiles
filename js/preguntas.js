class Pregunta {
  constructor(pregunta, respuestas, indCorrecto, categoria, dificultad) {
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.ind = indCorrecto;
    this.categoria = categoria;
    this.dificultad = dificultad;
  }
  obtenerPregunta() {
    return this.pregunta;
  }
  obtenerCategoria() {
    return this.categoria;
  }
  esRespuestaCorrecta(respuesta) {
    return this.respuestas[this.ind] == respuesta;
  }
  obtenerRespuestaCorrecta() {
    return this.respuestas[this.ind];
  }
  obtenerDificultad() {
    return this.dificultad;
  }
}

let preguntas = [];

let pregunta0 = new Pregunta(
  "¿En qué se especializa la cartografía?",
  [
    "Es la ciencia que estudia los mapas.",
    "Es la ciencia que estudia los volcanes.",
    "Es la ciencia que estudia los minerales.",
    "Es la ciencia que estudia los oceanos.",
  ],
  0,
  "ciencias",
  "dificil"
);
preguntas.push(pregunta0);

let pregunta1 = new Pregunta(
  "Quien fue el primer presidente de Bolivia?",
  [
    "Antonio Jose de Sucre",
    "Simon Bolivar",
    "Andres de Santa Cruz",
    "Jose Ballivian",
  ],
  1,
  "historia",
  "facil"
);
preguntas.push(pregunta1);

let pregunta2 = new Pregunta(
  "En que anhos empezo y termino la segunda guerra mundial?",
  ["1940 - 1945", "1938 - 1944", "1939 - 1944", "1939 - 1945"],
  3,
  "ciencias",
  "dificil"
);
preguntas.push(pregunta2);

let pregunta3 = new Pregunta(
  "Cual es el rio mas largo del mundo?",
  ["Rio Amazonas", "Rio Mississipi", "Rio Nilo", "Rio Yangtze"],
  2,
  "ciencias",
  "facil"
);
preguntas.push(pregunta3);

let pregunta4 = new Pregunta(
  "Cuantos huesos tiene el ser humano?",
  ["204", "205", "206", "207"],
  1,
  "ciencias",
  "facil"
);
preguntas.push(pregunta4);

let pregunta5 = new Pregunta(
  "El producto final de la glucolisis es:",
  [
  "Glucosa",
  "Glucógeno",
  "CO2 y H2O",
  "Ácido pirúvico"
  ],
  4,
  "ciencias",
  "dificil"
);
preguntas.push(pregunta5);

let pregunta6 = new Pregunta(
  "Cual es la capital de Bolivia?",
  ["Cochabamba", "Chuquisaca", "La Paz", "Santa Cruz de la Sierra"],
  1,
  "historia",
  "facil"
);
preguntas.push(pregunta6);

let pregunta7 = new Pregunta(
  "Cual es el planeta mas grande del sistema solar?",
  ["Saturno", "Jupiter", "Sol", "Tierra"],
  1,
  "ciencias",
  "facil"
);
preguntas.push(pregunta7);

let pregunta8 = new Pregunta(
  "Cual es la rama de la biologia que estudia los insectos?",
  ["Zoologia", "Entomologia", "Ictiologia", "Mastozoologia"],
  1,
  "ciencias",
  "dificil"
);
preguntas.push(pregunta8);

let pregunta9 = new Pregunta(
  "Cual de los siguientes animales es el mas veloz?",
  ["Leopardo", "Pez Vela", "Vencejo", "Kanguro"],
  2,
  "ciencias",
  "dificil"
);
preguntas.push(pregunta9);

let pregunta10 = new Pregunta(
  "En que anho llego el ser humano a la luna?",
  ["1968", "1969", "1970", "1971"],
  1,
  "ciencias",
  "dificil"
);
preguntas.push(pregunta10);

let pregunta11 = new Pregunta(
  "El nombre completo del libertador Simon Bolivar fue:",
  [
    "Simón José Antonio de Trinidad Bolívar Palacios Ponte y Blanco",
    "Simón José Antonio de la Santísima Trinidad Bolívar",
    "Simón José Antonio de la Santísima Trinidad Ponte y Blanco",
    "Simón José Antonio de la Santísima Trinidad Bolívar Palacios Ponte y Blanco",
  ],
  3,
  "historia",
  "dificil"
);
preguntas.push(pregunta11);

let pregunta12 = new Pregunta(
  "La guerra del Pacifico se llevo a cabo el año:",
  ["1789", "1781", "1798", "1790"],
  0,
  "historia",
  "dificil"
);
preguntas.push(pregunta12);

let pregunta13 = new Pregunta(
  "Quien fue el ultimo emperador Inca antes de la llegada de los españoles:",
  ["Atahualpa", "Huascar", "Huayca Capac", "Tupac Katari"],
  0,
  "historia",
  "dificil"
);
preguntas.push(pregunta13);

let pregunta14 = new Pregunta(
  "La guerra del Chaco fue los anhos:",
  ["1929-1932", "1928-1931", "1879-1891", "1932-1935"],
  3,
  "historia",
  "dificil"
);
preguntas.push(pregunta14);

let pregunta15 = new Pregunta(
  "La dictadura que mas personas mato en Bolivia fue:",
  ["Natush Busch", "Hugo Banzer Suarez", "Garcia Meza", "General Barrientos"],
  2,
  "historia",
  "dificil"
);
preguntas.push(pregunta15);

let pregunta16 = new Pregunta(
  "Bolivia fue fundada el año",
  ["1823", "1824", "1825", "1826"],
  2,
  "historia",
  "facil"
);
preguntas.push(pregunta16);

let pregunta17 = new Pregunta(
  "El Presidente que mas tiempo goberno el pais de manera continua fue",
  [
    "Evo Morales",
    "Mariano Melgarejo",
    "Andres de Santa Cruz",
    "Victor Paz Estensoro",
  ],
  0,
  "historia",
  "dificil"
);
preguntas.push(pregunta17);

let pregunta18 = new Pregunta(
  "Cuantas lenguas se habla en Bolivia?",
  [
    "Menos de 10",
    "Cerca de 40",
    "Alrededor de 20",
    "Solamente 4, castellano y 3 originarios",
  ],
  1,
  "historia",
  "dificil"
);
preguntas.push(pregunta18);

let pregunta19 = new Pregunta(
  "Segun la Constitucion Politica del Estado el nombre oficial de Bolivia es:",
  [
    "Estado Plurinacional de Bolivia",
    "Republica Democratica de Bolivia",
    "Republica de Bolivia",
    "Estado Indigenista de Bolivia",
  ],
  0,
  "historia",
  "facil"
);
preguntas.push(pregunta19);

let pregunta20 = new Pregunta(
  "Quien es la primera mujer que ha gobernado Bolivia?",
  [
    "Lilly Gabriela Montaño",
    "Eva Gonzales Lafuente",
    "Lidia Gueiler Tejada",
    "Adriana Salvatierra",
  ],
  3,
  "historia",
  "facil"
);
preguntas.push(pregunta20);

let pregunta21 = new Pregunta(
  "Los Gobiernos Autonomos Municipales establecidos en el Estado Plurinacional son:",
  ["112 municipios", "312 municipios", "239 municipios", "339 municipios"],
  3,
  "historia",
  "dificil"
);
preguntas.push(pregunta21);

let pregunta22 = new Pregunta(
  "El Gobernador/a, maxima autoridad ejecutiva en un departamento dura en sus funciones por:",
  ["4 años", "5 años", "3 años", "Ninguno de las anteriores"],
  1,
  "historia",
  "dificil"
);
preguntas.push(pregunta22);

let pregunta23 = new Pregunta(
  "Ciertas partes del territorio nacional, por su biodiversidad, sus ecosistemas y recursos naturales deben cuidarse y se las designa como:",
  [
    "Areas protegidas",
    "Reservas de la biosfera",
    "Areas prohibidas",
    "Areas de desarrollo",
  ],
  0,
  "historia",
  "facil"
);
preguntas.push(pregunta23);

let pregunta24 = new Pregunta(
  "El pasaporte nacional se obtiene en:",
  [
    "La policia nacional",
    "La gobernacion departamental",
    "El servicio nacional de migracion",
    "La cancilleria",
  ],
  2,
  "historia",
  "facil"
);
preguntas.push(pregunta24);

let pregunta25 = new Pregunta(
  "¿Con que paises limita Bolivia?",
  [
    "Brasil, Paraguay, Argentina, Chile y Perú",
    "Perú, Chile, Argentina y Uruguay",
    "Brasil, Uruguay, Argentina, Chile y Perú",
    "Paraguay, Argentina, Chile, Perú, Brasil y Venezuela",
  ],
  0,
  "historia",
  "facil"
);
preguntas.push(pregunta25);

let pregunta26 = new Pregunta(
  "¿Cual fue el primer Presidente de Bolivia nacido en Bolivia?",
  [
    "José Miguel de Velasco",
    "José Maria Pérez de Urdininea",
    "Mariano Melgarejo",
    "Simón Bolivar",
  ],
  1,
  "historia",
  "dificil"
);
preguntas.push(pregunta26);

let pregunta27 = new Pregunta(
  "¿Cuántos escudos ha tenido Bolivia?",
  ["2", "3", "1", "4"],
  1,
  "historia",
  "dificil"
);
preguntas.push(pregunta27);

let pregunta28 = new Pregunta(
  "El nevado mas alto de Bolivia con una altitud de 6542 msnm es el:",
  ["Illimani", "Sajama", "Illampu", "Tunari"],
  1,
  "historia",
  "facil"
);
preguntas.push(pregunta28);

let pregunta29 = new Pregunta(
  "¿Con cuantos departamentos originalmente tuvo Bolivia cuando fue fundada?",
  [
    "Con 6, Santa Cruz, La Paz, Potosí, Cochabamba y Chuquisaca",
    "Con cinco: Oruro, La Paz, Potosí, Cochabamba y Chuquisaca",
    "Con cinco: Santa Cruz, La Paz, Potosí, Cochabamba y Chuquisaca",
    "Con cuatro: La Paz, Potosí, Cochabamba y Chuquisaca",
  ],
  2,
  "historia",
  "dificil"
);
preguntas.push(pregunta29);

let pregunta30 = new Pregunta(
  "¿Cuál es la superficie actual y la superficie con la que nacio Bolivia?",
  [
    "1098550 km² - 2450000 km²",
    "1098500 km² - 3420124 km²",
    "1098581 km² - 2363769 km²",
    "1098560 km² - 2769363 km²",
  ],
  2,
  "historia",
  "dificil"
);
preguntas.push(pregunta30);

let p31 = new Pregunta(
  "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
  ["Tejido", "Partícula", "Atomo", "Célula"],
  3,
  "ciencias",
  "facil"
);
preguntas.push(p31);

let p32 = new Pregunta(
  "El proceso por el que una célula se divide para formar dos células hijas se llama:",
  ["Segregación", "Mitosis", "Simbiotica", "Meiosis"],
  1,
  "ciencias",
  "dificil"
);
preguntas.push(p32);

let p33 = new Pregunta(
  "La información genética en las células se localiza:",
  ["En el nucleo", "En la membrana", "En el nucleolo", "En el citoplasma"],
  0,
  "ciencias",
  "dificil"
);
preguntas.push(p33);

let p34 = new Pregunta(
  "¿Con qué organo respira una ballena?",
  ["Por la piel", "Pulmones", "Branquias", "Nariz"],
  1,
  "ciencias",
  "facil"
);
preguntas.push(p34);

let p35 = new Pregunta(
  "Los cromosomas están formados por:",
  [
    "ADN (ácido desoxirribonucleico)",
    "Proteínas",
    "ARN (ácido ribonucleico)",
    "Acidos",
  ],
  0,
  "ciencias",
  "dificil"
);
preguntas.push(p35);

let p36 = new Pregunta(
  "Al descendiente del cruce de un asno y una yegua se le conoce como:",
  ["Asno", "Burro", "Mini asno", "Mulo"],
  3,
  "ciencias",
  "dificil"
);
preguntas.push(p36);

let p37 = new Pregunta(
  "Para los botánicos, el tomate es una:",
  ["Verdura", "Hortaliza", "Crucifera", "Fruta"],
  3,
  "ciencias",
  "facil"
);
preguntas.push(p37);

let p38 = new Pregunta(
  "La fuerza física que la tierra ejerce sobre los cuerpos hacia su centro es la:",
  ["Gravedad", "Normal", "Rozamiento", "Energia"],
  0,
  "ciencias",
  "facil"
);
preguntas.push(p38);

let p39 = new Pregunta(
  "¿Cómo se llama la teoría que considera que todos los organismos descendemos del mismo ancestro?",
  ["Creacionismo", "Darwinismo", "Lamarckismo", "Gradualismo"],
  1,
  "ciencias",
  "dificil"
);
preguntas.push(p39);

let p40 = new Pregunta(
  "El proceso mediante el cual se generan moléculas orgánicas a partir de sustancias inorgánicas usando como fuente de energía el sol es:",
  ["La fotosíntesis", "El catabolismo", "El anabolismo", "Metastasis"],
  0,
  "ciencias",
  "dificil"
);
preguntas.push(p40);

let p41 = new Pregunta(
  "Las bacterias son organismos",
  ["Procariotes", "Eucariotes", "Vegetales", "Animales"],
  0,
  "ciencias",
  "dificil"
);
preguntas.push(p41);

let p42 = new Pregunta(
  "¿Cuál de las siguientes características espropia de los seres vivos?",
  [
    "Son perennes",
    "Su adaptabilidad es nula",
    "Responden a estímulos",
    "Carecen de procesos metabólicos",
  ],
  2,
  "ciencias",
  "dificil"
);
preguntas.push(p42);

let p43 = new Pregunta(
  "El embrión se diferencia en tres capasgerminales, éstas son:",
  [
    "Gastrulación, segmentación y blastulación.",
    "Ectodermo, mesodermo y endodermo.",
    "Digestivo, circulatorio y muscular.",
    "Mórula, blástula y gástrula.",
  ],
  1,
  "ciencias",
  "dificil"
);
preguntas.push(p43);

let p44 = new Pregunta(
  "A partir del ectodermo se forman:",
  [
    "El sistema digestivo",
    "La vejiga urinaria y parte de la uretra",
    "Los músculos de la cara.",
    "El sistema nervioso, la piel y sus anexos.",
  ],
  3,
  "ciencias",
  "facil"
);
preguntas.push(p44);

let p45 = new Pregunta(
  "El esquema de la figura adjunta representa:",
  [
    "La estructura primaria de una proteína",
    "La estructura secundaria de una proteína.",
    "La estructura terciaria de una proteína.",
    "La estructura cuaternaria de una proteína.",
  ],
  1,
  "ciencias",
  "facil"
);
preguntas.push(p45);

let pd1 = new Pregunta(
  "Como se llama la anotacion de un tanto en futbol americano?",
  ["Gol de campo.", "Safety.", "El touchdown.", "Conversion (TRY)"],
  2,
  "deporte",
  "facil"
);
preguntas.push(pd1);

let pd2 = new Pregunta(
  "Que pais gano la primera Copa Mundial de futbol en 1930?",
  ["Brasil", "Uruguay", "Alemania", "Italia"],
  1,
  "deporte",
  "facil"
);
preguntas.push(pd2);

let pd3 = new Pregunta(
  "Quien gano cinco mundiales consecutivos de Formula 1?",
  [
    "Lewis Hamilton, piloto Ingles",
    "Sebastian Vettel, piloto aleman",
    "Nelson Piquet,piloto brasileño",
    "Michael Schumacher,piloto aleman",
  ],
  3,
  "deporte",
  "dificil"
);
preguntas.push(pd3);

let pd4 = new Pregunta(
  "Como se llama el deporte en el cual se levantan pesas?",
  ["Halterofilia", "Hockey", "Atletismo", "Squash"],
  0,
  "deporte",
  "dificil"
);
preguntas.push(pd4);

let pd5 = new Pregunta(
  "Cuanto dura un partido de futbol?",
  [
    "90 minutos repartidos en dos partes de 45 minutos cada una.",
    "40 minutos repartidos en dos partes de 20 minutos cada una.",
    "100 minutos repartidos en dos partes de 50 minutos cada una.",
    "90 minutos repartidos en dos partes de 45 minutos cada una.",
  ],
  0,
  "deporte",
  "facil"
);
preguntas.push(pd5);

let pd6 = new Pregunta(
  "Cuando se celebro el primer mundial de futbol?",
  [
    "El 27 de mayo de 1934 en Italia",
    "El 21 de mayo de 1904 en Suiza",
    "El 13 de julio de 1930 en Uruguay",
    "El 12 de octubre de 1926 en Santiago de Chile",
  ],
  2,
  "deporte",
  "dificil"
);
preguntas.push(pd6);

let pd7 = new Pregunta(
  "Que seleccion de futbol ha ganado mas Mundiales?",
  ["España", "Brasil", "Italia", "Alemania"],
  1,
  "deporte",
  "facil"
);
preguntas.push(pd7);

let pd8 = new Pregunta(
  "Michael Phelps es ...",
  ["Basketbolista", "Tenista", "Futbolista", "Nadador"],
  3,
  "deporte",
  "dificil"
);
preguntas.push(pd8);

let pd9 = new Pregunta(
  "Cuanto dura la prorroga en un partido de futbol?",
  [
    "Segun el reglamento dura 30 minutos repartidos en dos tiempos de 15 minutos cada uno",
    "Segun el reglamento dura 40 minutos repartidos en dos tiempos de 20 minutos cada uno",
    "Segun el reglamento dura 60 minutos repartidos en dos tiempos de 30 minutos cada uno",
    "Segun el reglamento dura 20 minutos repartidos en dos tiempos de 10 minutos cada uno",
  ],
  0,
  "deporte",
  "dificil"
);
preguntas.push(pd9);

let pd10 = new Pregunta(
  "Cuantos jugadores tiene un equipo de futbol en el campo de juego?",
  ["10", "11", "13", "12"],
  1,
  "deporte",
  "facil"
);
preguntas.push(pd10);
let pd11 = new Pregunta(
  "Quien es el maximo goleador del FC Barcelona?",
  ["Cristiano Ronaldo", "Cesar Rodriguez", "Lionel Messi", "Pele"],
  2,
  "deporte",
  "dificil"
);
preguntas.push(pd11);
let pd12 = new Pregunta(
  "En que club italiano jugo Diego Maradona?",
  ["En Napoli", "En Palermo", "En Modena", "En Juventus"],
  0,
  "deporte",
  "dificil"
);
preguntas.push(pd12);

let pd13 = new Pregunta(
  "Quien se considera el mejor jugador de baloncesto de todos los tiempos?",
  ["Karl Malone", "Kareem Abdul-Jabbar", "Micheal Jordan", "LeBron James"],
  2,
  "deporte",
  "facil"
);
preguntas.push(pd13);

let pd14 = new Pregunta(
  "Como se llama la zona de hierba sobre la cual se ubica el hoyo en golf?",
  ["El aspero", "La calle", "El tee de salida", "El green"],
  3,
  "deporte",
  "dificil"
);
preguntas.push(pd14);

let pd15 = new Pregunta(
  "Como se llama el lugar donde se realizan las carreras de caballos?",
  ["Hipodromo", "Campo", "Pista", "Canodromo"],
  0,
  "deporte",
  "facil"
);
preguntas.push(pd15);

let pa1 = new Pregunta(
  "La mona lisa es obra de: ",
  ["Leonardo Da Vinci", "Leonardo Di Caprio", "Miguel Angel", "Van Gogh"],
  0,
  "arte",
  "facil"
);
preguntas.push(pa1);

let pa2 = new Pregunta(
  "En que museo se encuentra la Mona Lisa",
  ["Museo del Prado", "Brittish Museum", "Louvre", "Galeria Uffizi"],
  2,
  "arte",
  "facil"
);
preguntas.push(pa2);

let pa3 = new Pregunta(
  "En que siglo nacio Van Gogh?",
  ["Siglo XIX", "Siglo XX", "Siglo XVII", "Siglo XVIII"],
  0,
  "arte",
  "facil"
);
preguntas.push(pa3);

let pa4 = new Pregunta(
  "A qué compositor debemos 'Las bodas de Fígaro'",
  ["Ludwig van Beethoven.", "Amadeus Mozart.", "Johann Sebastian Bach.", "antonio salieri"],
  1,
  "arte",
  "facil"
);
preguntas.push(pa4);
let pa5 = new Pregunta(
  "A quién pertenece el famoso mural 'Niña con globo'",
  ["Banksy.", "Robert Del Naja.", "Jean-Michel Basquiat.", "ninguno"],
  0,
  "arte",
  "facil"
);
preguntas.push(pa5);
let pa6 = new Pregunta(
  "En qué arte destacó Anna Pavlova a comienzos del siglo XX",
  ["Danza.", "Escultura.", "Pintura.", "ninguno"],
  0,
  "arte",
  "facil"
);
preguntas.push(pa6);
let pa7 = new Pregunta(
  "Qué se conoce como el séptimo arte",
  ["Arquitectura.", "Danza.", " Cine.", "musica"],
  2,
  "arte",
  "facil"
);
preguntas.push(pa7);
let pa8 = new Pregunta(
  "Qué autor firmó la ópera Rigoletto",
  ["Giuseppe Verdi.", "Antonio Vivaldi.", "Giacomo Puccini.", "ninguno"],
  0,
  "arte",
  "facil"
);
preguntas.push(pa8);
let pa9 = new Pregunta(
  "Además de Velázquez, quién pintó también Meninas.",
  ["Salvador Dalí.", "Joan Miró.", "Pablo Ruiz Picasso.", "ninguno"],
  2,
  "arte",
  "facil"
);
preguntas.push(pa9);

let pa10 = new Pregunta(
  "A qué famoso escultor pertenece la obra 'El pensador'.",
  ["Auguste Rodin.", "Miguel Angel.", "Gian Lorenzo Bernini.", "ninguno"],
  0,
  "arte",
  "facil"
);
preguntas.push(pa10);

let pa11 = new Pregunta(
  "A qué estilo corresponde la Catedral de Notre Dame de París",
  ["Románico.", "Barroco.", " Gótico.", "ninguno"],
  2,
  "arte",
  "facil"
);
preguntas.push(pa11);

let pa12 = new Pregunta(
  "Quién pintó 'Los fusilamientos del 3 de mayo'",
  ["Goya.", "Velázquez.", "Rembrandt.", "ninguno"],
  0,
  "arte",
  "facil"
);
preguntas.push(pa12);

let pa13 = new Pregunta(
  "Qué civilización nos dejó como legado la Dama de Elche",
  ["Los sumerios.", "Los cretenses.", "Los íberos.", "ninguno"],
  2,
  "arte",
  "facil"
);
preguntas.push(pa13);

let pa14 = new Pregunta(
  "Cuál sería el equivalente al Nobel en Arquitectura",
  ["Pulitzer.", "Pretzel.", "Pritzker.", "ninguno"],
  2,
  "arte",
  "facil"
);
preguntas.push(pa14);

let pa15 = new Pregunta(
  "Quién pintó el cuadro 'El matrimonio Arnolfini'.",
  ["El Bosco.", "Jan Van Eyck.", "Roger van der Wayden.", "ninguno"],
  1,
  "arte",
  "facil"
);
preguntas.push(pa15);

let pa16 = new Pregunta(
  "Cuáles son los tres órdenes clásicos de la arquitectura clásica",
  ["Dórico, jónico y corintio.", "Mudéjar, neomudéjar y mozárabe.", "Masamento, fuste y capitel.", "ninguno"],
  0,
  "arte",
  "dificil"
);
preguntas.push(pa16);

let pa17 = new Pregunta(
  "En qué país surgió el art decó",
  ["En Francia.", "En Estados Unidos.", "En Reino Unido.", "Alemania"],
  1,
  "arte",
  "dificil"
);
preguntas.push(pa17);

let pa18 = new Pregunta(
  "Cuál es la pinacoteca más grande de España",
  ["Museo del Prado.", "Museo Thyssen.", "Museo Nacional de Arte de Cataluña.", "ninguno"],
  0,
  "arte",
  "dificil"
);
preguntas.push(pa18);

let pa19 = new Pregunta(
  "Cuál es la basílica más grande de la cristiandad",
  ["La Catedral de Milán.", " San Pedro de El Vaticano.", "La Catedral de Sevilla.", "ninguno"],
  1,
  "arte",
  "facil"
);
preguntas.push(pa19);

let pa20 = new Pregunta(
  "Cuál es la única construcción religiosa en España que tiene 19 naves",
  ["La Sagrada Familia.", "La Mezquita de Córdoba.", "La catedral de Santiago de Compostela.", "ninguno"],
  1,
  "arte",
  "dificil"
);
preguntas.push(pa20);

let pa21 = new Pregunta(
  "Quién es el arquitecto del Museo Guggenheim de Bilbao",
  ["Frank Gehry.", "Norman Foster.", "Frank Lloyd Wright.", "ninguno"],
  0,
  "arte",
  "dificil"
);
preguntas.push(pa21);

let pa22 = new Pregunta(
  "En qué museo puedes contemplar la mayor colección de obras de Kandinsky",
  ["En el Louvre de París.", "En el Hermitage.", "En el Museo de Arte Moderno de Nueva York.", "ninguno"],
  2,
  "arte",
  "dificil"
);
preguntas.push(pa22);

let pa23 = new Pregunta(
  "Cuántas mujeres aparecen en el cuadro Las señoritas de Avignon",
  ["Cinco.", "Tres.", "Cuatro.", "ninguno"],
  0,
  "arte",
  "dificil"
);
preguntas.push(pa23);

let pa24 = new Pregunta(
  "Qué parte de la capilla sixtina pintó Miguel Ángel",
  ["Las paredes.", "El techo.", "Las columnas.", "ninguno"],
  1,
  "arte",
  "dificil"
);
preguntas.push(pa24);

let pa25 = new Pregunta(
  "En qué arte destacó Isadora Duncan",
  ["Pintura.", "Escultura.", "Danza.", "arquitectura"],
  2,
  "arte",
  "dificil"
);
preguntas.push(pa25);

let pa26 = new Pregunta(
  "Qué personaje de cómic creó Bob Kane cuando tenía 18 años",
  ["Spiderman.", "Dardervil.", "Batman.", "iron man"],
  2,
  "arte",
  "dificil"
);
preguntas.push(pa26);

let pa27 = new Pregunta(
  "¿Cuáles son las flores más famosas pintadas por Van Gogh?",
  ["Flor de loto.", "Girasoles.", "Margaritas.", "claveles"],
  1,
  "arte",
  "facil"
);
preguntas.push(pa27);

let pa28 = new Pregunta(
  "Cual fue el proposio principal de la torre eiffel",
  ["Monumento arquetectonico", "Atraer turistas", "Antena de comunicaciones", "ninguno"],
  2,
  "arte",
  "dificil"
);
preguntas.push(pa28);

let pa29 = new Pregunta(
  "Con que apodo fue conocido Niccolo Paganini",
  ["EL Violinista", "Violinista del Diablo", "El Violinista Feroz", "ninguno"],
  1,
  "arte",
  "facil"
);
preguntas.push(pa29);

let pa30 = new Pregunta(
  "Con que otro nombre se le conoce a la Monalisa",
  ["La Gioconda", "La Alejandra", "La Benedicta", "ninguno"],
  0,
  "arte",
  "dificil"
);
preguntas.push(pa30);

let pc10 = new Pregunta(
  " Con que otro nombre se le conoce a la Monalisa",
  [
    "Son indispensables para la formación de las biomoléculas orgánicas ",
    "Respuesta 2Pueden ser variables o indispensables y constituyen el  96% de la materia viva ",
    "Son C, H, O, N, S, P, Fe, Ca, Na, K y Mg",
    "Incluyen, entre otros, los oligoelementos, cuya proporción es inferior al 0,1% ",
  ],
  3,
  "ciencias",
  "facil"
);
preguntas.push(pc10);

let pc11 = new Pregunta(
  "Algunas células animales poseen vacuolas características como es el caso de las vacuolas pulsátiles presentes en: ",
  [
    "Respuesta 1Los protozoos de agua dulce.",
    "El corazón de los moluscos",
    "Las células contráctiles de los anélidos ",
    "Las células de las esponjas",
  ],
  0,
  "ciencias",
  "facil"
);

preguntas.push(pc11);

let pc12 = new Pregunta(
  " Las mitocondrias son orgánulos celulares cuya función principal es",
  [
    "La fotosíntesis",
    "La respiración celular",
    "La mitosis",
    "La síntesis de proteínas",
  ],
  1,
  "ciencias",
  "facil"
);

preguntas.push(pc12);

let pc13 = new Pregunta(
  "La formación de los ribosomas está ligada a la actividad de",
  ["el nucleolo", "el aparato de Golgi", "los cloroplastos", "el centrosoma "],
  0,
  "ciencias",
  "facil"
);

preguntas.push(pc13);

let pc14 = new Pregunta(
  "La cromatina es",
  [
    "El componente esencial del nucleolo",
    "Cada una de las partes de un cromosoma ",
    "Fibras de ARN asociadas a proteínas ",
    "Fibras de ADN empaquetadas con histonas ",
  ],
  3,
  "ciencias",
  "facil"
);

preguntas.push(pc14)

let pc15 = new Pregunta(
  "La siguiente microfotografía corresponde a",
  [
  "El corte transversal de un centriolo",
  "El corte transversal de la raiz de un flagelo",
  "El corte transversal del tallo de un cilio ",
  "El corte transversal de un microtúbulo"
  ],
  2,
  "ciencias",
  "facil"
);

preguntas.push(pc15)

let pc16 = new Pregunta(
  "Cuantas patas tiene una araña?",
  [
    "6",
    "7",
    "8",
    "9"
  ],
  2,
  "ciencias",
  "facil"
);
preguntas.push(pc16);

let pc17 = new Pregunta(
  "Cuantos años llegan a vivir en libertad los elefantes?",
  [
    "20-40 años",
    "40-60 años",
    "60-80 años",
    "80-100 años"
  ],
  1,
  "ciencias",
  "dificil"
);
preguntas.push(pc17);

let pc18 = new Pregunta(
  "Cual es el animal que mas personas mata en un año en el mundo?",
  [
    "mosquito",
    "serpiente",
    "araña",
    "cocodrilo"
  ],
  0,
  "ciencias",
  "facil"
);
preguntas.push(pc18);

let pc19 = new Pregunta(
  "Que año fallecio Albert Einstein?",
  [
    "1953",
    "1954",
    "1955",
    "1956"
  ],
  2,
  "ciencias",
  "dificil"
);
preguntas.push(pc19);

let pc20 = new Pregunta(
  "Cual es la edad aproximada de la tierra?",
  [
    "3.5 billones de años",
    "4.5 billones de años",
    "5.5 billones de años",
    "6.5 billones de años"
  ],
  1,
  "ciencias",
  "facil"
);
preguntas.push(pc20);

let pc21 = new Pregunta(
  "Cual es la edad aproximada del universo?",
  [
    "6.000 millones de aos",
    "10.000 millones de aos",
    "14.000 millones de aos",
    "16.000 millones de aos"
  ],
  2,
  "ciencias",
  "facil"
);
preguntas.push(pc21);


let pd16 = new Pregunta(
  "¿Cuántos Km de distancia mide una maratón?",
  [
  "41.85 km",
  "42.16 km",
  "43.77 km",
  "43.45 km"
  ],
  1,
  "deporte",
  "dificil"
);

preguntas.push(pd16)

let pd17 = new Pregunta(
  "¿Cuáles son los cinco colores del anillo de los Juegos Olímpicos?",
  [
  "Azul, rojo, amarillo, verde y negro",
  "Azul, rojo, amarillo, verde y violeta",
  "índigo, rojo, morado, verde y negro",
  "Azul, rojo, amarillo, naranja y verde"
  ],
  0,
  "deporte",
  "facil"
);

preguntas.push(pd17)

let pd18 = new Pregunta(
  "¿Qué deporte tiene un equipo llamado foil?",
  [
  "polo",
  "golf",
  "Esgrima",
  "boxeo"
  ],
  2,
  "deporte",
  "dificil"
);

let pd19 = new Pregunta(
  "¿Qué deporte de los Juegos Olímpicos implica pliegues y picas?",
  [
  "natacion",
  "bolos",
  "Esgrima",
  "polo"
  ],
  0,
  "deporte",
  "dificil"
);

preguntas.push(pd19)

let pd20 = new Pregunta(
  "¿Manny Pacquiao es un boxeador legendario de qué país?",
  [
  "corea",
  "filipinas",
  "mexico",
  "china"
  ],
  1,
  "deporte",
  "facil"
);

preguntas.push(pd20)


let pd21 = new Pregunta(
  "¿Cuánto dura un round típico de boxeo para hombres?",
  [
  "2 minutos",
  "3 minutos",
  "4 minutos",
  "5 minutos"
  ],
  1,
  "deporte",
  "facil"
);

preguntas.push(pd21)

let pd22 = new Pregunta(
  "¿Cuántos puntos vale un tiro libre en baloncesto?",
  [
  "3 puntos",
  "5 puntos",
  "2 puntos",
  "1 punto"
  ],
  3,
  "deporte",
  "facil"
);

preguntas.push(pd22)

let pd23 = new Pregunta(
  "¿Qué parte de tu cuerpo no debe tocar el balón en el fútbol?",
  [
  "cabeza",
  "pierna",
  "mano",
  "espalda"
  ],
  2,
  "deporte",
  "facil"
);
preguntas.push(pd23)

let pd24 = new Pregunta(
  "¿Cuál de los siguientes deportes no usa una pelota?",
  [
  "golf",
  "tenis",
  "hockey",
  "polo"
  ],
  2,
  "deporte",
  "dificil"
);
preguntas.push(pd24)

let pd25 = new Pregunta(
  "¿Cuántos jugadores hay en un equipo de béisbol?",
  [
  "10",
  "9",
  "8",
  "7"
  ],
  1,
  "deporte",
  "dificil"
);
preguntas.push(pd25)

let pd26 = new Pregunta(
  "¿Cuál es el significado de NBA?",
  [
  "Administración Nacional de Canasta",
  "Administración Nacional de Baloncesto",
  "Asociación Nacional de Basquetbol",
  "Administración Nacional de Canasta"
  ],
  2,
  "deporte",
  "dificil"
);
preguntas.push(pd26)

let pd27 = new Pregunta(
  "En baloncesto, el jugador que trae la pelota al otro lado de la cancha y corre la ofensiva se llama:",
  [
  "pivot",
  "delantero",
  "alero",
  "base"
  ],
  3,
  "deporte",
  "dificil"
);
preguntas.push(pd27)


let pd28 = new Pregunta(
  "¿Cómo llamas a la cancha de fútbol?",
  [
  "terreno de juego",
  "corte",
  "campo",
  "bol"
  ],
  0,
  "deporte",
  "facil"
);
preguntas.push(pd28)

let pd29 = new Pregunta(
  "¿Cuántos rounds hay en un solo juego de boxeo profesional?",
  [
  "6",
  "8",
  "12",
  "15"
  ],
  2,
  "deporte",
  "facil"
);
preguntas.push(pd29)

let pd30 = new Pregunta(
  "¿En el boxeo, TKO significa?",
  [
  "Imitación técnica",
  "Expulsión técnica",
  "Krankout Técnico",
  "Noqueo técnico"
  ],
  3,
  "deporte",
  "dificil"
);
preguntas.push(pd30)

let pd31 = new Pregunta(
  "Es el único deporte en el que los competidores corren hacia la meta, pero nunca la cruzan. ¿Qué es?",
  [
  "atletismo",
  "lanzamiento de jabalina",
  "natación",
  "carrera de 800 metros"
  ],
  2,
  "deporte",
  "dificil"
);
preguntas.push(pd31)

let pd32 = new Pregunta(
  "¿Cuál era el nombre del primer caballo ganador en la carrera de caballos Grand National en 1839?",
  [
  "Afortunado",
  "Campeon",
  "Loteria",
  "Jugador"
  ],
  2,
  "deporte",
  "dificil"
);
preguntas.push(pd32)

let pd33 = new Pregunta(
  "¿Cuál era el nombre de los deportes ficticios en Harry Potter?",
  [
  "Quidditch",
  "Torneo de los tres magos",
  "Greenwich",
  "Fidditch"
  ],
  0,
  "deporte",
  "facil"
);
preguntas.push(pd33)

export { preguntas, Pregunta };
