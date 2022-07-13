let cerrarSesion = document.getElementById('cerrarSesion');
$(function () {
  let contenidoDeLaTablaHistorial = $(".table_body");

//  const userName = sessionStorage.getItem("username");
//  const templateUser = `
//                        <i>${userName}</i>
//                      `;
//  const createTemplateUser = (document.getElementById("box-sesion").innerHTML =
//    templateUser);
//  contenidoDeLaTablaHistorial.each(function () {
//    for (let i = 0; i < 3; i++) {
//      $(this).append(
//        `<tr><td>ronda </td><td>2027-05-02</td><td>Facil</td> <td>${i}</td><td>15</td> </tr>`
//      );
//    }
//  });
//});
//cerrarSesion.addEventListener('click',() => {

  let id = sessionStorage.getItem('id');
  fetch('http://agiles-2022.herokuapp.com/historial/' + id, {
    method: 'GET'
  }).then(res => res.json())
    .then(res => {
      contenidoDeLaTablaHistorial.each(function () {
        console.log(res);
        let j = 1;
        for (let i in res) {
          $(this).append(
            `<tr>
            <td>ronda ${j}</td>
            <td>${res[i].fecha}</td>
            <td>${res[i].dificultad}</td>
            <td>${res[i].cantidadpreguntas}</td>
            <td>${res[i].puntaje}</td> 
            </tr>`
          );
          j = j + 1;
        }
      });
    })
});
cerrarSesion.addEventListener('click', () => {

  console.log('cerando sesion')
  window.location.replace("../index.html");
  sessionStorage.clear()
})

