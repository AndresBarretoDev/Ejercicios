var teclas = {UP:38, DOWN:40, LEFT:37, RIGHT:39 };

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath(); // Inicia el trazo
  lienzo.strokeStyle = color; // Es el estilo del trazo
  lienzo.lineWidth = 3; // ancho de la linea
  lienzo.moveTo(x_inicial, y_inicial); // es donde comienza la linea
  lienzo.lineTo(x_final,y_final); //traza la linea (ubica punto final)
  lienzo.stroke();// dibuja con el estilo de trazo
  lienzo.closePath(); //termina el dibujo
}
function dibujarTeclado(evento)
{
  var colorcito = "brown";
  var movimiento = 5;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
    y = y -movimiento;
      console.log("arriba");
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
    y = y +movimiento;
      console.log("abajo");
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
    x= x -movimiento;
      console.log("izquierda");
      break;
      case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
    x = x +movimiento;
      console.log("derecha");
      break;

  }
}
