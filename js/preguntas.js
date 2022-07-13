class Question {
  constructor(pregunta, respuestas, indCorrecto, categoria, dificultad) {
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.ind = indCorrecto;
    this.categoria = categoria;
    this.dificultad = dificultad;
  }
  getQuestion() {
    return this.pregunta;
  }
  getCategory() {
    return this.categoria;
  }
  isCorrectAnswer(respuesta) {
    return this.respuestas[this.ind] == respuesta;
  }
  getCorrectAnswer() {
    return this.respuestas[this.ind];
  }
  getDifficult() {
    return this.dificultad;
  }
}

let questionArray = [];

let pregunta0 = new Question(
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
questionArray.push(pregunta0);

let pregunta1 = new Question(
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
questionArray.push(pregunta1);

let pregunta2 = new Question(
  "En que anhos empezo y termino la segunda guerra mundial?",
  ["1940 - 1945", "1938 - 1944", "1939 - 1944", "1939 - 1945"],
  3,
  "ciencias",
  "dificil"
);
questionArray.push(pregunta2);

let pregunta3 = new Question(
  "Cual es el rio mas largo del mundo?",
  ["Rio Amazonas", "Rio Mississipi", "Rio Nilo", "Rio Yangtze"],
  2,
  "ciencias",
  "facil"
);
questionArray.push(pregunta3);

let pregunta4 = new Question(
  "Cuantos huesos tiene el ser humano?",
  ["204", "205", "206", "207"],
  1,
  "ciencias",
  "facil"
);
questionArray.push(pregunta4);

let pregunta5 = new Question(
  "El producto final de la glucolisis es:",
  ["Glucosa", "Glucógeno", "CO2 y H2O", "Ácido pirúvico"],
  4,
  "ciencias",
  "dificil"
);
questionArray.push(pregunta5);

let pregunta6 = new Question(
  "Cual es la capital de Bolivia?",
  ["Cochabamba", "Chuquisaca", "La Paz", "Santa Cruz de la Sierra"],
  1,
  "historia",
  "facil"
);
questionArray.push(pregunta6);

let pregunta7 = new Question(
  "Cual es el planeta mas grande del sistema solar?",
  ["Saturno", "Jupiter", "Sol", "Tierra"],
  1,
  "ciencias",
  "facil"
);
questionArray.push(pregunta7);

let pregunta8 = new Question(
  "Cual es la rama de la biologia que estudia los insectos?",
  ["Zoologia", "Entomologia", "Ictiologia", "Mastozoologia"],
  1,
  "ciencias",
  "dificil"
);
questionArray.push(pregunta8);

let pregunta9 = new Question(
  "Cual de los siguientes animales es el mas veloz?",
  ["Leopardo", "Pez Vela", "Vencejo", "Kanguro"],
  2,
  "ciencias",
  "dificil"
);
questionArray.push(pregunta9);

let pregunta10 = new Question(
  "En que anho llego el ser humano a la luna?",
  ["1968", "1969", "1970", "1971"],
  1,
  "ciencias",
  "dificil"
);
questionArray.push(pregunta10);

let pregunta11 = new Question(
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
questionArray.push(pregunta11);

let pregunta12 = new Question(
  "La guerra del Pacifico se llevo a cabo el año:",
  ["1789", "1781", "1798", "1790"],
  0,
  "historia",
  "dificil"
);
questionArray.push(pregunta12);

let pregunta13 = new Question(
  "Quien fue el ultimo emperador Inca antes de la llegada de los españoles:",
  ["Atahualpa", "Huascar", "Huayca Capac", "Tupac Katari"],
  0,
  "historia",
  "dificil"
);
questionArray.push(pregunta13);

let pregunta14 = new Question(
  "La guerra del Chaco fue los anhos:",
  ["1929-1932", "1928-1931", "1879-1891", "1932-1935"],
  3,
  "historia",
  "dificil"
);
questionArray.push(pregunta14);

let pregunta15 = new Question(
  "La dictadura que mas personas mato en Bolivia fue:",
  ["Natush Busch", "Hugo Banzer Suarez", "Garcia Meza", "General Barrientos"],
  2,
  "historia",
  "dificil"
);
questionArray.push(pregunta15);

let pregunta16 = new Question(
  "Bolivia fue fundada el año",
  ["1823", "1824", "1825", "1826"],
  2,
  "historia",
  "facil"
);
questionArray.push(pregunta16);

let pregunta17 = new Question(
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
questionArray.push(pregunta17);

let pregunta18 = new Question(
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
questionArray.push(pregunta18);

let pregunta19 = new Question(
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
questionArray.push(pregunta19);

let pregunta20 = new Question(
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
questionArray.push(pregunta20);

let pregunta21 = new Question(
  "Los Gobiernos Autonomos Municipales establecidos en el Estado Plurinacional son:",
  ["112 municipios", "312 municipios", "239 municipios", "339 municipios"],
  3,
  "historia",
  "dificil"
);
questionArray.push(pregunta21);

let pregunta22 = new Question(
  "El Gobernador/a, maxima autoridad ejecutiva en un departamento dura en sus funciones por:",
  ["4 años", "5 años", "3 años", "Ninguno de las anteriores"],
  1,
  "historia",
  "dificil"
);
questionArray.push(pregunta22);

let pregunta23 = new Question(
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
questionArray.push(pregunta23);

let pregunta24 = new Question(
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
questionArray.push(pregunta24);

let pregunta25 = new Question(
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
questionArray.push(pregunta25);

let pregunta26 = new Question(
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
questionArray.push(pregunta26);

let pregunta27 = new Question(
  "¿Cuántos escudos ha tenido Bolivia?",
  ["2", "3", "1", "4"],
  1,
  "historia",
  "dificil"
);
questionArray.push(pregunta27);

let pregunta28 = new Question(
  "El nevado mas alto de Bolivia con una altitud de 6542 msnm es el:",
  ["Illimani", "Sajama", "Illampu", "Tunari"],
  1,
  "historia",
  "facil"
);
questionArray.push(pregunta28);

let pregunta29 = new Question(
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
questionArray.push(pregunta29);

let pregunta30 = new Question(
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
questionArray.push(pregunta30);

let p31 = new Question(
  "¿Cómo se llama el componente mínimo que forma a los seres vivos?",
  ["Tejido", "Partícula", "Atomo", "Célula"],
  3,
  "ciencias",
  "facil"
);
questionArray.push(p31);

let p32 = new Question(
  "El proceso por el que una célula se divide para formar dos células hijas se llama:",
  ["Segregación", "Mitosis", "Simbiotica", "Meiosis"],
  1,
  "ciencias",
  "dificil"
);
questionArray.push(p32);

let p33 = new Question(
  "La información genética en las células se localiza:",
  ["En el nucleo", "En la membrana", "En el nucleolo", "En el citoplasma"],
  0,
  "ciencias",
  "dificil"
);
questionArray.push(p33);

let p34 = new Question(
  "¿Con qué organo respira una ballena?",
  ["Por la piel", "Pulmones", "Branquias", "Nariz"],
  1,
  "ciencias",
  "facil"
);
questionArray.push(p34);

let p35 = new Question(
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
questionArray.push(p35);

let p36 = new Question(
  "Al descendiente del cruce de un asno y una yegua se le conoce como:",
  ["Asno", "Burro", "Mini asno", "Mulo"],
  3,
  "ciencias",
  "dificil"
);
questionArray.push(p36);

let p37 = new Question(
  "Para los botánicos, el tomate es una:",
  ["Verdura", "Hortaliza", "Crucifera", "Fruta"],
  3,
  "ciencias",
  "facil"
);
questionArray.push(p37);

let p38 = new Question(
  "La fuerza física que la tierra ejerce sobre los cuerpos hacia su centro es la:",
  ["Gravedad", "Normal", "Rozamiento", "Energia"],
  0,
  "ciencias",
  "facil"
);
questionArray.push(p38);

let p39 = new Question(
  "¿Cómo se llama la teoría que considera que todos los organismos descendemos del mismo ancestro?",
  ["Creacionismo", "Darwinismo", "Lamarckismo", "Gradualismo"],
  1,
  "ciencias",
  "dificil"
);
questionArray.push(p39);

let p40 = new Question(
  "El proceso mediante el cual se generan moléculas orgánicas a partir de sustancias inorgánicas usando como fuente de energía el sol es:",
  ["La fotosíntesis", "El catabolismo", "El anabolismo", "Metastasis"],
  0,
  "ciencias",
  "dificil"
);
questionArray.push(p40);

let p41 = new Question(
  "Las bacterias son organismos",
  ["Procariotes", "Eucariotes", "Vegetales", "Animales"],
  0,
  "ciencias",
  "dificil"
);
questionArray.push(p41);

let p42 = new Question(
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
questionArray.push(p42);

let p43 = new Question(
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
questionArray.push(p43);

let p44 = new Question(
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
questionArray.push(p44);

let p45 = new Question(
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
questionArray.push(p45);

let pd1 = new Question(
  "Como se llama la anotacion de un tanto en futbol americano?",
  ["Gol de campo.", "Safety.", "El touchdown.", "Conversion (TRY)"],
  2,
  "deporte",
  "facil"
);
questionArray.push(pd1);

let pd2 = new Question(
  "Que pais gano la primera Copa Mundial de futbol en 1930?",
  ["Brasil", "Uruguay", "Alemania", "Italia"],
  1,
  "deporte",
  "facil"
);
questionArray.push(pd2);

let pd3 = new Question(
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
questionArray.push(pd3);

let pd4 = new Question(
  "Como se llama el deporte en el cual se levantan pesas?",
  ["Halterofilia", "Hockey", "Atletismo", "Squash"],
  0,
  "deporte",
  "dificil"
);
questionArray.push(pd4);

let pd5 = new Question(
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
questionArray.push(pd5);

let pd6 = new Question(
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
questionArray.push(pd6);

let pd7 = new Question(
  "Que seleccion de futbol ha ganado mas Mundiales?",
  ["España", "Brasil", "Italia", "Alemania"],
  1,
  "deporte",
  "facil"
);
questionArray.push(pd7);

let pd8 = new Question(
  "Michael Phelps es ...",
  ["Basketbolista", "Tenista", "Futbolista", "Nadador"],
  3,
  "deporte",
  "dificil"
);
questionArray.push(pd8);

let pd9 = new Question(
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
questionArray.push(pd9);

let pd10 = new Question(
  "Cuantos jugadores tiene un equipo de futbol en el campo de juego?",
  ["10", "11", "13", "12"],
  1,
  "deporte",
  "facil"
);
questionArray.push(pd10);
let pd11 = new Question(
  "Quien es el maximo goleador del FC Barcelona?",
  ["Cristiano Ronaldo", "Cesar Rodriguez", "Lionel Messi", "Pele"],
  2,
  "deporte",
  "dificil"
);
questionArray.push(pd11);
let pd12 = new Question(
  "En que club italiano jugo Diego Maradona?",
  ["En Napoli", "En Palermo", "En Modena", "En Juventus"],
  0,
  "deporte",
  "dificil"
);
questionArray.push(pd12);

let pd13 = new Question(
  "Quien se considera el mejor jugador de baloncesto de todos los tiempos?",
  ["Karl Malone", "Kareem Abdul-Jabbar", "Micheal Jordan", "LeBron James"],
  2,
  "deporte",
  "facil"
);
questionArray.push(pd13);

let pd14 = new Question(
  "Como se llama la zona de hierba sobre la cual se ubica el hoyo en golf?",
  ["El aspero", "La calle", "El tee de salida", "El green"],
  3,
  "deporte",
  "dificil"
);
questionArray.push(pd14);

let pd15 = new Question(
  "Como se llama el lugar donde se realizan las carreras de caballos?",
  ["Hipodromo", "Campo", "Pista", "Canodromo"],
  0,
  "deporte",
  "facil"
);
questionArray.push(pd15);

let pa1 = new Question(
  "La mona lisa es obra de: ",
  ["Leonardo Da Vinci", "Leonardo Di Caprio", "Miguel Angel", "Van Gogh"],
  0,
  "arte",
  "facil"
);
questionArray.push(pa1);

let pa2 = new Question(
  "En que museo se encuentra la Mona Lisa",
  ["Museo del Prado", "Brittish Museum", "Louvre", "Galeria Uffizi"],
  2,
  "arte",
  "facil"
);
questionArray.push(pa2);

let pa3 = new Question(
  "En que siglo nacio Van Gogh?",
  ["Siglo XIX", "Siglo XX", "Siglo XVII", "Siglo XVIII"],
  0,
  "arte",
  "facil"
);
questionArray.push(pa3);

let pa4 = new Question(
  "A qué compositor debemos 'Las bodas de Fígaro'",
  [
    "Ludwig van Beethoven.",
    "Amadeus Mozart.",
    "Johann Sebastian Bach.",
    "antonio salieri",
  ],
  1,
  "arte",
  "facil"
);
questionArray.push(pa4);
let pa5 = new Question(
  "A quién pertenece el famoso mural 'Niña con globo'",
  ["Banksy.", "Robert Del Naja.", "Jean-Michel Basquiat.", "ninguno"],
  0,
  "arte",
  "facil"
);
questionArray.push(pa5);
let pa6 = new Question(
  "En qué arte destacó Anna Pavlova a comienzos del siglo XX",
  ["Danza.", "Escultura.", "Pintura.", "ninguno"],
  0,
  "arte",
  "facil"
);
questionArray.push(pa6);
let pa7 = new Question(
  "Qué se conoce como el séptimo arte",
  ["Arquitectura.", "Danza.", " Cine.", "musica"],
  2,
  "arte",
  "facil"
);
questionArray.push(pa7);
let pa8 = new Question(
  "Qué autor firmó la ópera Rigoletto",
  ["Giuseppe Verdi.", "Antonio Vivaldi.", "Giacomo Puccini.", "ninguno"],
  0,
  "arte",
  "facil"
);
questionArray.push(pa8);
let pa9 = new Question(
  "Además de Velázquez, quién pintó también Meninas.",
  ["Salvador Dalí.", "Joan Miró.", "Pablo Ruiz Picasso.", "ninguno"],
  2,
  "arte",
  "facil"
);
questionArray.push(pa9);

let pa10 = new Question(
  "A qué famoso escultor pertenece la obra 'El pensador'.",
  ["Auguste Rodin.", "Miguel Angel.", "Gian Lorenzo Bernini.", "ninguno"],
  0,
  "arte",
  "facil"
);
questionArray.push(pa10);

let pa11 = new Question(
  "A qué estilo corresponde la Catedral de Notre Dame de París",
  ["Románico.", "Barroco.", " Gótico.", "ninguno"],
  2,
  "arte",
  "facil"
);
questionArray.push(pa11);

let pa12 = new Question(
  "Quién pintó 'Los fusilamientos del 3 de mayo'",
  ["Goya.", "Velázquez.", "Rembrandt.", "ninguno"],
  0,
  "arte",
  "facil"
);
questionArray.push(pa12);

let pa13 = new Question(
  "Qué civilización nos dejó como legado la Dama de Elche",
  ["Los sumerios.", "Los cretenses.", "Los íberos.", "ninguno"],
  2,
  "arte",
  "facil"
);
questionArray.push(pa13);

let pa14 = new Question(
  "Cuál sería el equivalente al Nobel en Arquitectura",
  ["Pulitzer.", "Pretzel.", "Pritzker.", "ninguno"],
  2,
  "arte",
  "facil"
);
questionArray.push(pa14);

let pa15 = new Question(
  "Quién pintó el cuadro 'El matrimonio Arnolfini'.",
  ["El Bosco.", "Jan Van Eyck.", "Roger van der Wayden.", "ninguno"],
  1,
  "arte",
  "facil"
);
questionArray.push(pa15);

let pa16 = new Question(
  "Cuáles son los tres órdenes clásicos de la arquitectura clásica",
  [
    "Dórico, jónico y corintio.",
    "Mudéjar, neomudéjar y mozárabe.",
    "Masamento, fuste y capitel.",
    "ninguno",
  ],
  0,
  "arte",
  "dificil"
);
questionArray.push(pa16);

let pa17 = new Question(
  "En qué país surgió el art decó",
  ["En Francia.", "En Estados Unidos.", "En Reino Unido.", "Alemania"],
  1,
  "arte",
  "dificil"
);
questionArray.push(pa17);

let pa18 = new Question(
  "Cuál es la pinacoteca más grande de España",
  [
    "Museo del Prado.",
    "Museo Thyssen.",
    "Museo Nacional de Arte de Cataluña.",
    "ninguno",
  ],
  0,
  "arte",
  "dificil"
);
questionArray.push(pa18);

let pa19 = new Question(
  "Cuál es la basílica más grande de la cristiandad",
  [
    "La Catedral de Milán.",
    " San Pedro de El Vaticano.",
    "La Catedral de Sevilla.",
    "ninguno",
  ],
  1,
  "arte",
  "facil"
);
questionArray.push(pa19);

let pa20 = new Question(
  "Cuál es la única construcción religiosa en España que tiene 19 naves",
  [
    "La Sagrada Familia.",
    "La Mezquita de Córdoba.",
    "La catedral de Santiago de Compostela.",
    "ninguno",
  ],
  1,
  "arte",
  "dificil"
);
questionArray.push(pa20);

let pa21 = new Question(
  "Quién es el arquitecto del Museo Guggenheim de Bilbao",
  ["Frank Gehry.", "Norman Foster.", "Frank Lloyd Wright.", "ninguno"],
  0,
  "arte",
  "dificil"
);
questionArray.push(pa21);

let pa22 = new Question(
  "En qué museo puedes contemplar la mayor colección de obras de Kandinsky",
  [
    "En el Louvre de París.",
    "En el Hermitage.",
    "En el Museo de Arte Moderno de Nueva York.",
    "ninguno",
  ],
  2,
  "arte",
  "dificil"
);
questionArray.push(pa22);

let pa23 = new Question(
  "Cuántas mujeres aparecen en el cuadro Las señoritas de Avignon",
  ["Cinco.", "Tres.", "Cuatro.", "ninguno"],
  0,
  "arte",
  "dificil"
);
questionArray.push(pa23);

let pa24 = new Question(
  "Qué parte de la capilla sixtina pintó Miguel Ángel",
  ["Las paredes.", "El techo.", "Las columnas.", "ninguno"],
  1,
  "arte",
  "dificil"
);
questionArray.push(pa24);

let pa25 = new Question(
  "En qué arte destacó Isadora Duncan",
  ["Pintura.", "Escultura.", "Danza.", "arquitectura"],
  2,
  "arte",
  "dificil"
);
questionArray.push(pa25);

let pa26 = new Question(
  "Qué personaje de cómic creó Bob Kane cuando tenía 18 años",
  ["Spiderman.", "Dardervil.", "Batman.", "iron man"],
  2,
  "arte",
  "dificil"
);
questionArray.push(pa26);

let pa27 = new Question(
  "¿Cuáles son las flores más famosas pintadas por Van Gogh?",
  ["Flor de loto.", "Girasoles.", "Margaritas.", "claveles"],
  1,
  "arte",
  "facil"
);
questionArray.push(pa27);

let pa28 = new Question(
  "Cual fue el proposio principal de la torre eiffel",
  [
    "Monumento arquetectonico",
    "Atraer turistas",
    "Antena de comunicaciones",
    "ninguno",
  ],
  2,
  "arte",
  "dificil"
);
questionArray.push(pa28);

let pa29 = new Question(
  "Con que apodo fue conocido Niccolo Paganini",
  ["EL Violinista", "Violinista del Diablo", "El Violinista Feroz", "ninguno"],
  1,
  "arte",
  "facil"
);
questionArray.push(pa29);

let pa30 = new Question(
  "Con que otro nombre se le conoce a la Monalisa",
  ["La Gioconda", "La Alejandra", "La Benedicta", "ninguno"],
  0,
  "arte",
  "dificil"
);
questionArray.push(pa30);

let pc10 = new Question(
  " Con que otro nombre se le conoce a la Monalisa",
  [
    "Son indispensables para la formación de las biomoléculas orgánicas ",
    "Pueden ser variables o indispensables y constituyen el  96% de la materia viva ",
    "Son C, H, O, N, S, P, Fe, Ca, Na, K y Mg",
    "Incluyen, entre otros, los oligoelementos, cuya proporción es inferior al 0,1% ",
  ],
  3,
  "ciencias",
  "facil"
);
questionArray.push(pc10);

let pc11 = new Question(
  "Algunas células animales poseen vacuolas características como es el caso de las vacuolas pulsátiles presentes en: ",
  [
    "Los protozoos de agua dulce.",
    "El corazón de los moluscos",
    "Las células contráctiles de los anélidos ",
    "Las células de las esponjas",
  ],
  0,
  "ciencias",
  "facil"
);

questionArray.push(pc11);

let pc12 = new Question(
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

questionArray.push(pc12);

let pc13 = new Question(
  "La formación de los ribosomas está ligada a la actividad de",
  ["el nucleolo", "el aparato de Golgi", "los cloroplastos", "el centrosoma "],
  0,
  "ciencias",
  "facil"
);

questionArray.push(pc13);

let pc14 = new Question(
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

questionArray.push(pc14);

let pc15 = new Question(
  "La siguiente microfotografía corresponde a",
  [
    "El corte transversal de un centriolo",
    "El corte transversal de la raiz de un flagelo",
    "El corte transversal del tallo de un cilio ",
    "El corte transversal de un microtúbulo",
  ],
  2,
  "ciencias",
  "facil"
);

questionArray.push(pc15);

let pc16 = new Question(
  "Cuantas patas tiene una araña?",
  ["6", "7", "8", "9"],
  2,
  "ciencias",
  "facil"
);
questionArray.push(pc16);

let pc17 = new Question(
  "Cuantos años llegan a vivir en libertad los elefantes?",
  ["20-40 años", "40-60 años", "60-80 años", "80-100 años"],
  1,
  "ciencias",
  "dificil"
);
questionArray.push(pc17);

let pc18 = new Question(
  "Cual es el animal que mas personas mata en un año en el mundo?",
  ["mosquito", "serpiente", "araña", "cocodrilo"],
  0,
  "ciencias",
  "facil"
);
questionArray.push(pc18);

let pc19 = new Question(
  "Que año fallecio Albert Einstein?",
  ["1953", "1954", "1955", "1956"],
  2,
  "ciencias",
  "dificil"
);
questionArray.push(pc19);

let pc20 = new Question(
  "Cual es la edad aproximada de la tierra?",
  [
    "3.5 billones de años",
    "4.5 billones de años",
    "5.5 billones de años",
    "6.5 billones de años",
  ],
  1,
  "ciencias",
  "facil"
);
questionArray.push(pc20);

let pc21 = new Question(
  "Cual es la edad aproximada del universo?",
  [
    "6.000 millones de años",
    "10.000 millones de años",
    "14.000 millones de años",
    "16.000 millones de años",
  ],
  2,
  "ciencias",
  "facil"
);
questionArray.push(pc21);

let pd16 = new Question(
  "¿Cuántos Km de distancia mide una maratón?",
  ["41.85 km", "42.16 km", "43.77 km", "43.45 km"],
  1,
  "deporte",
  "dificil"
);

questionArray.push(pd16);

let pd17 = new Question(
  "¿Cuáles son los cinco colores del anillo de los Juegos Olímpicos?",
  [
    "Azul, rojo, amarillo, verde y negro",
    "Azul, rojo, amarillo, verde y violeta",
    "índigo, rojo, morado, verde y negro",
    "Azul, rojo, amarillo, naranja y verde",
  ],
  0,
  "deporte",
  "facil"
);

questionArray.push(pd17);

let pd18 = new Question(
  "¿Qué deporte tiene un equipo llamado foil?",
  ["polo", "golf", "Esgrima", "boxeo"],
  2,
  "deporte",
  "dificil"
);

let pd19 = new Question(
  "¿Qué deporte de los Juegos Olímpicos implica pliegues y picas?",
  ["natacion", "bolos", "Esgrima", "polo"],
  0,
  "deporte",
  "dificil"
);

questionArray.push(pd19);

let pd20 = new Question(
  "¿Manny Pacquiao es un boxeador legendario de qué país?",
  ["corea", "filipinas", "mexico", "china"],
  1,
  "deporte",
  "facil"
);

questionArray.push(pd20);

let pd21 = new Question(
  "¿Cuánto dura un round típico de boxeo para hombres?",
  ["2 minutos", "3 minutos", "4 minutos", "5 minutos"],
  1,
  "deporte",
  "facil"
);

questionArray.push(pd21);

let pd22 = new Question(
  "¿Cuántos puntos vale un tiro libre en baloncesto?",
  ["3 puntos", "5 puntos", "2 puntos", "1 punto"],
  3,
  "deporte",
  "facil"
);

questionArray.push(pd22);

let pd23 = new Question(
  "¿Qué parte de tu cuerpo no debe tocar el balón en el fútbol?",
  ["cabeza", "pierna", "mano", "espalda"],
  2,
  "deporte",
  "facil"
);
questionArray.push(pd23);

let pd24 = new Question(
  "¿Cuál de los siguientes deportes no usa una pelota?",
  ["golf", "tenis", "hockey", "polo"],
  2,
  "deporte",
  "dificil"
);
questionArray.push(pd24);

let pd25 = new Question(
  "¿Cuántos jugadores hay en un equipo de béisbol?",
  ["10", "9", "8", "7"],
  1,
  "deporte",
  "dificil"
);
questionArray.push(pd25);

let pd26 = new Question(
  "¿Cuál es el significado de NBA?",
  [
    "Administración Nacional de Canasta",
    "Administración Nacional de Baloncesto",
    "Asociación Nacional de Basquetbol",
    "Administración Nacional de Canasta",
  ],
  2,
  "deporte",
  "dificil"
);
questionArray.push(pd26);

let pd27 = new Question(
  "En baloncesto, el jugador que trae la pelota al otro lado de la cancha y corre la ofensiva se llama:",
  ["pivot", "delantero", "alero", "base"],
  3,
  "deporte",
  "dificil"
);
questionArray.push(pd27);

let pd28 = new Question(
  "¿Cómo llamas a la cancha de fútbol?",
  ["terreno de juego", "corte", "campo", "bol"],
  0,
  "deporte",
  "facil"
);
questionArray.push(pd28);

let pd29 = new Question(
  "¿Cuántos rounds hay en un solo juego de boxeo profesional?",
  ["6", "8", "12", "15"],
  2,
  "deporte",
  "facil"
);
questionArray.push(pd29);

let pd30 = new Question(
  "¿En el boxeo, TKO significa?",
  [
    "Imitación técnica",
    "Expulsión técnica",
    "Krankout Técnico",
    "Noqueo técnico",
  ],
  3,
  "deporte",
  "dificil"
);
questionArray.push(pd30);

let pd31 = new Question(
  "Es el único deporte en el que los competidores corren hacia la meta, pero nunca la cruzan. ¿Qué es?",
  ["atletismo", "lanzamiento de jabalina", "natación", "carrera de 800 metros"],
  2,
  "deporte",
  "dificil"
);
questionArray.push(pd31);

let pd32 = new Question(
  "¿Cuál era el nombre del primer caballo ganador en la carrera de caballos Grand National en 1839?",
  ["Afortunado", "Campeon", "Loteria", "Jugador"],
  2,
  "deporte",
  "dificil"
);
questionArray.push(pd32);

let pd33 = new Question(
  "¿Cuál era el nombre de los deportes ficticios en Harry Potter?",
  ["Quidditch", "Torneo de los tres magos", "Greenwich", "Fidditch"],
  0,
  "deporte",
  "facil"
);
questionArray.push(pd33);

let ph01 = new Question(
  "La contienda bélica que tuvo como consecuencia final la pérdida de la salida soberana al mar fue:",
  [
    "Guerra del Pacifico",
    "Guerra del Chaco",
    "Guerra del acre",
    "Guerra del estaño",
  ],
  0,
  "historia",
  "facil"
);
questionArray.push(ph01);

export { questionArray, Question };
