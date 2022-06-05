import React, { useEffect, useState } from "react";
import retrato from "./imagenes/Inicio/retrato.jpg";
import paisaje from "./imagenes/Inicio/paisaje.jpg";
import conceptual from "./imagenes/Inicio/conceptual.jpg";
import fauna from "./imagenes/Inicio/fauna.jpg";
// import styled from "styled-components";

//npm install --save styled-components
/** opacidad para que empiece en negro.  Transition modificación temporal. Pasara de negro a verse. 
const CarruselImg = styled.img`
  max-width: 800px;
  width: auto;
  height: 100%;
  opacity: 0;
  transition: 1s; // modificación temporal
  &.louded: {
    opacity: 1;
  } // pasará de negro a verse
`;

// centrado, uno al lado del otro, con un poco de margen.
const CarruselBotonContenedor = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  marigin-top: 15px;
`;

const CarruselBoton = styled.button`
  color: orange;
  blackground-color: #eb118a;
  padding: 8px;
  margin: 0 5 px;
`;
*/

const Carruselinico = () => {
  const images = [retrato, paisaje, fauna, conceptual];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect((props) => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(interval);
  });

  /** Creamos un método para simplificar. 2 parámetros, un selectedIndex que va a ser un número y dos una imagen es un strig.    Ponemos una propiedad sin parámetro. (next=true) que nos pregunta si vas al siguiente o al otro.*/

  const selectNewImage = (selectedIndex, images, next = true) => {
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
      <img height="45%" width="65%" src={selectedImage} alt="paisaje" />

      <button onClick={previous}> {"<"} </button>
      <button onClick={next}> {">"} </button>
    </>
  );
};
export default Carruselinico;
