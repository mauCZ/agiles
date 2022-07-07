$(function () {
    let contenido = $(".table_body");
    console.log(contenido);
    contenido.each(function () {
      for (let i = 0; i < 50; i++) {
        $(this).append(
          `<tr><td>Usuario</td> <td>${i}</td> </tr>`
        );
      }
    });
  });
  