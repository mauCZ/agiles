
let categoryButton = $(".cat");

$(function () {
  localStorage.clear()
  categoryButton.on("click", function (e) {
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
    let difficult = $(".difficult").val()
    localStorage.setItem('difficult',difficult);
    let questionsNumber =$('.cantidad').val()
    localStorage.setItem('questionsNumber',questionsNumber);
  });
});

