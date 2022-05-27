import React from "react";
import retrato from "../Imagenes/Inicio/retrato.jpg";
import paisaje from "../Imagenes/Inicio/paisaje.jpg";
import conceptual from "../Imagenes/Inicio/conceptual.jpg";
import fauna from "../Imagenes/Inicio/fauna.jpg";

let index = 0;
const listaimg = [paisaje, fauna, retrato, conceptual];

export function carruselinicio() {
  setInterval(cambioimagen, 7000);
}

function cambioimagen() {
  carruselinicio("body").css("background-image", "(" + listaimg[index] + ")");

  index++;

  if (index == 4) index = 0;
}

/**
 *var index = 0;
    var listaimg = ["http://i.imgur.com/1eHivZy.png", "http://images.neopets.com/template_images/acarabackground.gif", "http://i.imgur.com/cji4OHQ.jpg", "http://i.stack.imgur.com/jGlzr.png"];
$(function() {
    setInterval(changeImage, 2000);           });

function changeImage() {
   $('body').css("background-image", 'url(' + listaimg[index] + ')');
   index++;
   if(index == 4)            index = 0;          }     */

/**
 *<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<style>
body  {
    background-image: url("http://i.stack.imgur.com/jGlzr.png");
    background-color: #cccccc;
}
</style>
</head>
<body>
<h1>Hello World!</h1>       </body>     </html>       */

/**Enfoque 3: Establecer la imagen de fondo utilizando el método de URL relativa: si coloca su imagen, por ejemplo, el archivo background.jpg dentro de la carpeta public / en la aplicación react, puede acceder a ella en <su dirección de host> /background.jpg. 

Luego puede asignar la URL relativa a su dirección de host para configurar la imagen de fondo de esta manera:

Nombre de archivo: App.js

import React from "react";
  
const App = () => {
  return (
    <div style={{
      backgroundImage: "url(/background.jpg)",
      height: "300px",
      backgroundRepeat: "no-repeat"
    }} >
      <h1>Hello</h1>
    </div>
  );
};
  
export default App;

 */
