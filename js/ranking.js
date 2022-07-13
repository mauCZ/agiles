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
    for (let i = 1; i < 5; i++) {
      $(this).append(
        `<tr><td>${i}</td><td>Mauricio</td> <td>50</td><td>30%</td> </tr>`
      );
    }

  });
});

cerrarSesion.addEventListener('click',() => {
  console.log('cerando sesion')
  window.location.replace("../index.html");
  sessionStorage.clear()
})

