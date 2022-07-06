$(function () {
  let contenido = $(".table_body");
  console.log(contenido);
  contenido.each(function () {
    for (let i = 0; i < 50; i++) {
      $(this).append(
        `<tr><td>ronda 1</td><td>2027-05-02</td><td>Facil</td> <td>${i}</td><td>15</td> </tr>`
      );
    }
  });
});
