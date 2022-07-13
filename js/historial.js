let cerrarSesion = document.getElementById('cerrarSesion');
$(function () {
  let contenidoDeLaTablaHistorial = $(".table_body");
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

