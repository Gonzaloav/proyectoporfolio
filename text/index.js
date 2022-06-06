
suma.addEventLinstener (
  "click", ()=>{
mostrador.value= parseInt(mostrador.value)+1;
}
);



/**
// sincrono
const sizeOf = require('image-size')
const dimensions = sizeOf('images/funny-cats.png')
console.log(dimensions.width, dimensions.height)

// Asincrono

const sizeOf = require('image-size')
sizeOf('images/funny-cats.png', 
function (err, dimensions) {
    console.log(dimensions.width, dimensions.height)
  })


  Multi-size =  Si el archivo de destino es un icono (.ico) o un cursor (.cur),
 el ancho y alto serán los de la primera imagen encontrada.

Una matriz de imágenes adicional está disponible y devuelve las dimensiones de
 todas las imágenes disponibles 

  const sizeOf = require('image-size')
const images = sizeOf('images/multi-size.ico').images
for (const dimensions of images) {
  console.log(dimensions.width, dimensions.height)
} 
*/


/*let imagen = new Image();
imagen.src ="./img/Peru/Asaincas_13.jpg";
console.log ("Anchura", imagen.naturalWidth);
console.log ("Altura", imagen.naturalHeight);*/

