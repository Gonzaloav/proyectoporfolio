import React, { useEffect, useState } from "react";
import retrato from "../Imagenes/Inicio/retrato.jpg";
import paisaje from "../Imagenes/Inicio/paisaje.jpg";
import conceptual from "../Imagenes/Inicio/conceptual.jpg";
import fauna from "../Imagenes/Inicio/fauna.jpg";
import styled from "styled-components";

/** opacidad para que empiece en negro.  Transition modificación temporal. Pasara de negro a verse. 
const CarruselImg = styled.img`
  opacity: 0;
  transition: 1s; 
  &.louded: {
    opacity: 1;
  } 
`;*/

const CarruselContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  `;

const Carruselinico = () => {
  const images = [retrato, paisaje, fauna, conceptual];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Ocultar componente
  const [ocultar, setOcultar] = useState(false);

  useEffect((props) => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(interval);
  });

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
    setOcultar(true);
  };

  // no se pone false porque voy al siguiente.

  const next = () => {
    selectNewImage(selectedIndex, images);
    setOcultar(true);
  };

  return (
    <>
      <CarruselContenedor>  
        {ocultar && <button onClick={previous}> {"<"} </button>}

        <img height="auto" width="90%" src={selectedImage} />

        {ocultar && <button onClick={next}> {">"} </button>}
      </CarruselContenedor>
    </>
  );
};
export default Carruselinico;

/** TEMPORIZADOR IMAGENES.- useEffect (47 - 52)
 *
 * OCULTAR BOTON.-  linea 45,"const [ocultar, setOcultar] = useState(false);"
 * linea 90.- " const previous = () => {selectNewImage(selectedIndex, images, false); setOcultar(true);"
 * linea 97.- "const next = () => {selectNewImage(selectedIndex, images); setOcultar(true);"
 * Linea 104.- " {ocultar && <button onClick={previous}> {"<"} </button>}"
 * Linea 105 .- "{ocultar && <button onClick={next}> {">"} </button>}" */
