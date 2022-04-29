
$(function(){
  let correctasElem = $('#correctas')
  let incorrectasElem = $('#incorrectas')

  let preguntasCorrectas = localStorage.getItem('correctos')
  let preguntasIncorrectas = localStorage.getItem('incorrectos')

  correctasElem.text(preguntasCorrectas)
  incorrectasElem.text(preguntasIncorrectas)

  let mensajeElem = $('#mensaje')
  if(preguntasIncorrectas > preguntasCorrectas){
    mensajeElem.css({
          "color":"darkred",
          "font-weight":"bold"
    })
    // mensajeElem.css("color","darkgreen")
    mensajeElem.text('VUELVE A INTENTARLO :(')
  } 
  else{
    mensajeElem.css({
          "color":"darkgreen",
          "font-weight":"bold"
    })
    // mensajeElem.css("color","darkred")
    mensajeElem.text('¡BUEN TRABAJO!')
  }

})