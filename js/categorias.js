let btns = $(".cat");
let dificult =$(".dificult")


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
  });

  dificult.on("click",function(){
    let idDificult = $(this).val()
    console.log(idDificult)
    if(typeof idDificult){
    if(idDificult=='Facil'){
      localStorage.setItem('dificult','Facil')
    }else{
      localStorage.setItem('dificult','Dificil')
    }
  }
  });

});

