let btns = $(".cat");


$(function () {
  localStorage.clear()

  btns.on("click", function (e) {
    let idSelected = $(this).attr('id')
    if(idSelected=='cat-deporte'){
      localStorage.setItem('category', 'deporte')
    }else if(idSelected == 'cat-historia'){
      localStorage.setItem('category', 'historia')
    }else if(idSelected == 'cat-arte'){
      localStorage.setItem('category', 'arte')
    }else if(idSelected == 'cat-ciencias'){
      localStorage.setItem('category', 'ciencias')
    }else if(idSelected == 'cat-variado'){
      localStorage.setItem('category', 'variado')
    }
    let idDifficult = $(".difficult").val()
    
    if(idDifficult=='Facil'){
      localStorage.setItem('difficult','Facil')
    }else{
      localStorage.setItem('difficult','Dificil')
    }
  });

});

