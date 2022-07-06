
let categoryButton = $(".cat");
let open = document.getElementById('sesion')
let form = document.getElementById('form-in')
let close = document.getElementById('close')
let submit = document.getElementById('submit')

let userID = localStorage.getItem('id');
$(function () {
  if (userID != null) {
    let btnEvaluacion = document.getElementById("btn-history");
    btnEvaluacion.style.display = 'block';
  };
  localStorage.clear();
  categoryButton.on("click", function (e) {
    let idSelected = $(this).attr('id')
    if (idSelected == 'cat-deporte') {
      localStorage.setItem('category', 'deporte')
    } else if (idSelected == 'cat-historia') {
      localStorage.setItem('category', 'historia')
    } else if (idSelected == 'cat-arte') {
      localStorage.setItem('category', 'arte')
    } else if (idSelected == 'cat-ciencias') {
      localStorage.setItem('category', 'ciencias')
    } else if (idSelected == 'cat-variado') {
      localStorage.setItem('category', 'variado')
    }
    let difficult = $(".difficult").val()
    localStorage.setItem('difficult', difficult);
    let questionsNumber = $('.cantidad').val()
    localStorage.setItem('questionsNumber', questionsNumber);
  });
});

open.addEventListener('click', () => {
  form.classList.add('show')
})


close.addEventListener('click', () => {
  form.classList.remove('show')
})

submit.addEventListener('click', () => {
  form.onsubmit = async (e) => {
    e.preventDefault()
    const dataForm = new FormData(form)
    const data = Object.fromEntries(dataForm.entries)
    const res = await fetch('',{
      method: 'POST',
      body: JSON.stringify(data),
      Headers: {
        'Content-Type': 'application/json',
      }
    })
  }
  
});