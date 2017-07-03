var estado = 0;
var colorLinea = "blue";
var area = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");
var x;
var y;
  dibujarLinea("#111", 0,0,600,0,papel);
  dibujarLinea("#111", 600,0,600,600,papel);
  dibujarLinea("#111", 600,600,0,600,papel);
  dibujarLinea("#111", 0,600,0,0,papel);
  document.addEventListener("mouseup", soltarMouse);
  function soltarMouse(evento) { //cuando se suelta el click
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
}
  document.addEventListener("mousedown", presionarMouse);
  function presionarMouse(evento) { //cuando haces click
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}
  document.addEventListener("mousemove", dibujarMouse);
  function dibujarMouse(evento) { //cuando mueves el mouse
    if (estado == 1) {
      dibujarLinea(colorLinea, x, y,evento.layerX,evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}
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
