import React, { useState } from "react";
import retrato from "./Imagenes/Inicio/retrato";
import paisaje from "./Imagenes/Inicio/paisaje.jpg";
import conceptual from "./Imagenes/Inicio/conceptual.jpg";
import fauna from "./Imagenes/Inicio/fauna.jpg";

const Carruselinicio = (props) => {
  const images = [retrato, paisaje, fauna, conceptual];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  /** Creamos un método para simplificar. 2 parámetros, un selectedIndex que va a ser un número y dos una imagen es un strig.    Ponemos una propiedad sin parámetro. (next=true) que nos pregunta si vas al siguiente o al otro.*/

  const selectNewImage = (selectedIndex, images, next = true) => {
    /** Poner temporizador de 3 segundos */
    setTimeout(() => {
      /** En caso de ir adelante comprobamos next ? ( selectedIndex < images.lenth -1)
 y si no (:)  unificamos las dos condiciones  */
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;

      /** ¿es next? ¿Se cumple la condición?  Hacemos la condición del sigiente index next.
         * y si no, ponemos la condición del previews (:)  si no, (:) ¿Se cumple la condición?  
         Es como escribir if(next){if(condition){return selectedIndex +1;}else{return 0}}*/
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
      console.log(
        "nextIndex , selectedIndex ,selectedImage",
        selectedIndex,
        nextIndex,
        selectedImage,
        setSelectedImage(images[nextIndex])
      );
    }, 3000);
  };

  /**  previous es directamente llamar a  selectNewImage () Pasarle selectedIndex,  
        conjunto images, y  previous que no es next  y por ello, se le pone false.*/
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
    /*console.log('images: ',images)*/
  };

  // no se pone false porque voy al siguiente.
  const next = () => {
    selectNewImage(selectedIndex, images);
    /*console.log('images: ',images)*/
  };

  /*console.log('images[0] : ',images[0])*/
  return (
    <>
      {/** (19:40)*/}

      <img height="45%" width="65%" src={selectedImage} alt="paisaje" />

      <button onClick={previous}> {"<"} </button>
      <button onClick={next}> {">"} </button>
    </>
  );
};
export default Carruselinicio;
