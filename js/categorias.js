let categoryButton = $(".cat");
let open = document.getElementById("sesion");
let form = document.getElementById("form-in");
let formBox = document.getElementById("box-form");
let close = document.getElementById("close");
let submit = document.getElementById("submit");
let errorAuthentication = document.getElementById("err");
let messageError = document.getElementById("error");
$(function () {
  localStorage.clear();
  categoryButton.on("click", function (e) {
    let idSelected = $(this).attr("id");
    if (idSelected == "cat-deporte") {
      localStorage.setItem("category", "deporte");
    } else if (idSelected == "cat-historia") {
      localStorage.setItem("category", "historia");
    } else if (idSelected == "cat-arte") {
      localStorage.setItem("category", "arte");
    } else if (idSelected == "cat-ciencias") {
      localStorage.setItem("category", "ciencias");
    } else if (idSelected == "cat-variado") {
      localStorage.setItem("category", "variado");
    }
    let difficult = $(".difficult").val();
    localStorage.setItem("difficult", difficult);
    let questionsNumber = $(".cantidad").val();
    localStorage.setItem("questionsNumber", questionsNumber);
  });
});

open.addEventListener("click", () => {
  formBox.classList.add("show");
});

close.addEventListener("click", () => {
  formBox.classList.remove("show");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const pass = document.getElementById("pass").value;
  const data = { username: username, password: pass };
  console.log(data);
  fetch("http://agiles-server.herokuapp.com/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.successful);

      if (res.successful) {
        sessionStorage.setItem("id", res.id);
        sessionStorage.setItem("username", res.username);
        sessionStorage.setItem("sesionExist", JSON.stringify(res.successful));
        loadDate()
      } else {
        showError(res.successful);
      }
    });
});

function showError(message) {
  if (message) {
    messageError.classList.add("show");
  } else {
    messageError.classList.add("show");
  }
  //messageError.className='show'
}

function loadDate() {
  const sesionExist = sessionStorage.getItem("sesionExist");
  if (sesionExist == "true") {
    const userName = sessionStorage.getItem('username')
    const templateUser = `<i class="user-name">${userName}</i> 
                      <button id="cerrarSesion">Cerrar Sesion</button>`;
    const sesion = document.getElementById("box-sesion")
    sesion.innerHTML=templateUser;
    formBox.classList.remove("show");
    console.log(sesion)
    const showHistory = document
      .getElementById("btn-history")
      .classList.add("show");
  }
}
let closeSesion = document.getElementById("cerrarSesion")
console.log(closeSesion)

/*function closeSesion(){
  sessionStorage.clear()
  window.location.reload()
}*/



window.onload = () => {
  loadDate();
};
