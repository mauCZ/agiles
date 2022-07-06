
let categoryButton = $(".cat");
let open = document.getElementById('sesion')
let form = document.getElementById('box-form')
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
  let userName = document.getElementById('username').value
  let password = document.getElementById('pass').value
  const data = new FormData(form);
  data.append('email', userName);
  data.append('password', password);
  localStorage.setItem('id', 124215)
  fetch('http://tis-server2.herokuapp.com/api/login', {
    method: 'POST',
    body: data
  }).then((res) => res.json()).then((json) => {
    //console.log(res.body)
    localStorage.setItem('name', JSON.stringify(res.body.id))

    /*sessionStorage.setItem('token',json.token);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('ge', json.nombre);*/
    //location.replace('/');
  });
});