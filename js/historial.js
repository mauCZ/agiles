

$(function () {
  let contenido = $(".table_body");
  console.log(contenido);
  contenido.each(function () {
    $(this).append("<tr><td>ronda 1</td><td>2027-05-02</td><td>Facil</td> <td>10</td><td>8</td> </tr>");
  });
});


