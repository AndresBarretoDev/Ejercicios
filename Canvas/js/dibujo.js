var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo");
var ancho = d.width;

var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick()
 {
   var lineas = parseInt(texto.value);
   var l=0;
   var yi, xf;
   var color = "#cc0000"
   var color2 = "#cc0000"; 
   var espacio = ancho / lineas;
   d.width = d.width;

   for(l = 0;l < lineas; l++ )
   {
   yi = espacio * l;
   xf = espacio * (l + 1);
   dibujarLinea(color, 0, yi, xf, 300);
   console.log("linea " + l);
   }
    dibujarLinea(color2, 1,1,1,300);
    dibujarLinea(color, 1,299,299,299);
}
