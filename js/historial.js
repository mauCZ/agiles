let cerrarSesion=document.getElementById('cerrarSesion');
$(function () {
  let contenidoDeLaTablaHistorial = $(".table_body");
  const userName = sessionStorage.getItem("username");
  const templateUser = `
                        <i>${userName}</i>
                      `;
  const createTemplateUser = (document.getElementById("box-sesion").innerHTML =
    templateUser);
  
  contenidoDeLaTablaHistorial.each(function () {
    for (let i = 0; i < 50; i++) {
      $(this).append(
        `<tr><td>ronda 1</td><td>2027-05-02</td><td>Facil</td> <td>${i}</td><td>15</td> </tr>`
      );
    }
  });
});

cerrarSesion.addEventListener('click',() => {
  console.log('cerando sesion')
  window.location.replace("../index.html");
  sessionStorage.clear()
})

