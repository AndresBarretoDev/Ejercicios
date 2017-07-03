var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var fondo = { url:"img/tile.png",cargaOK: false};
var vaca = { url:"img/vaca.png", cargaOK: false};
var cerdo = {url:"img/cerdo.png", cargaOK: false};
var pollo = { url:"img/pollo.png",cargaOK: false};
var teclas = {UP:38, DOWN:40, LEFT:37, RIGHT:39 };

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
var cantidadVaca = aleatorio(0,15);
var xVaca = new Array();
var yVaca = new Array();

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
var cantidadPollo = aleatorio(0,15);
var xPollo = new Array();
var yPollo = new Array();

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
document.addEventListener("keydown", moverCerdo);
var xMover = 150;
var yMover = 200;

function cargarFondo()
{
fondo.cargaOK = true;
dibujar();
}
function cargarVacas()
{
vaca.cargaOK = true;
for (i = 0; i < cantidadVaca; i++)
{
  var x = aleatorio(0,7);
  var y = aleatorio(0,7);
  var x = x * 60;
  var y = y * 60;
  xVaca[i] = x;
  yVaca[i] = y;
}
dibujar();
}
function cargarPollos()
{
pollo.cargaOK = true;
for (i = 0; i < cantidadPollo; i++)
{
  var x = aleatorio(0,7);
  var y = aleatorio(0,7);
  var x = x * 60;
  var y = y * 60;
  xPollo[i] = x;
  yPollo[i] = y;
}
dibujar();
}
function cargarCerdos()
{
cerdo.cargaOK = true;
dibujar();
}

function dibujar()
{
  if (fondo.cargaOK)
  {
  papel.drawImage(fondo.imagen, 0,0);
  }
  if (vaca.cargaOK)
  {
    for( i = 0; i < cantidadVaca;i++)
    {
      papel.drawImage(vaca.imagen, xVaca[i],yVaca[i])
      console.log("vaca");
    }
    if (cerdo.cargaOK)
    {
      papel.drawImage(cerdo.imagen, xMover, yMover);
      console.log("cerdo");
      }
    if (pollo.cargaOK)
    {
      for( i = 0; i < cantidadPollo;i++)
      {
        papel.drawImage(pollo.imagen, xPollo[i],yPollo[i]);
        console.log("pollo");
      }

    }
  }
}
function moverCerdo(evento)
{
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
    yMover = yMover - movimiento;
    dibujar(xMover, yMover);
      console.log("arriba");
    break;
    case teclas.DOWN:
      dibujar(xMover, yMover);
    yMover = yMover +movimiento;
      console.log("abajo");
    break;
    case teclas.LEFT:
    dibujar(xMover, yMover);
    xMover = xMover -movimiento;
      console.log("izquierda");
      break;
      case teclas.RIGHT:
      dibujar(xMover, yMover);
    xMover = xMover +movimiento;
      console.log("derecha");
      break;
}

}
function aleatorio (min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min ;
  return resultado;
}
