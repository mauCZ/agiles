
let categoryButton = $(".cat");
let open= document.getElementById('sesion')
let form = document.getElementById('box-form')
let close = document.getElementById('close')

localStorage.setItem('id',"127356");
let user = localStorage.getItem("id");


$(function () {
  if(user != null){
    let btnHistorial = document.getElementById("btn-history");
    btnHistorial.style.display = 'block';
  }
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

open.addEventListener('click',() => {
  form.classList.add('show')
})


close.addEventListener('click',() => {
  form.classList.remove('show')
})


