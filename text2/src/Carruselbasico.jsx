import React, { useState } from "react";
import retrato from "./img/Inicio/retrato.jpg";
import paisaje from "./img/Inicio/paisaje.jpg";
import fauna from "./img/Inicio/fauna.jpg";
import conceptual from "./img/Inicio/conceptual.jpg";

const Carruselbasico = (props) => {
  const images = [retrato, paisaje, fauna, conceptual];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  /** Creamos un método para simplificar. 2 parámetros, un selectedIndex que va a ser un número y dos una imagen es un strig.    Ponemos una propiedad sin parámetro. (next=true) que nos pregunta si vas al siguiente o al otro.*/

  const selectNewImage = (selectedIndex, images, next = true) => {
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

  /*console.log('images[0] : ',images[0])  (19:40) */
  return (
    <>
      

      <button  onClick={previous}> {"<"} </button>
      
      <img height="auto" width="90%" src={selectedImage} alt="paisaje" />

      <button onClick={next}> {">"} </button>
    </>
  );
};
export default Carruselbasico;
