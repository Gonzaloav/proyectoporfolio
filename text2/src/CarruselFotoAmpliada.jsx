import React, { useState } from "react";
import retrato from "./imagenes/Inicio/retrato.jpg";
import paisaje from "./imagenes/Inicio/paisaje.jpg";
import conceptual from "./imagenes/Inicio/conceptual.jpg";
import fauna from "./imagenes/Inicio/fauna.jpg";
import styled from "styled-components";
//npm install --save styled-components

/**centrado, uno al lado del otro, con un poco de margen.*/
const CarruselContenedor = styled.div`
  display: flex;
  flex-direction: row;
  flex-row: 1;
`;

const Carruselbotonderecho = styled.button`
  background: none;
  position: fixed;
  min-width: 80%;
  min-height: 100%;
  border: none;
  margin-left: 50%;
  user-select: none;
  cursor: pointer;
`;

const Carruselbotonizquierdo = styled.button`
background: none;
position: fixed;
min-width: 80%
min-height: 100%;
border: none;
margin-right: 50%;
user-select: none;
cursor: pointer;
`;

const CarruselFotoAmpliada = () => {
  const images = [paisaje, fauna, retrato, conceptual];

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
  };

  // no se pone false porque voy al siguiente.
  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <>
      <CarruselContenedor>
        <Carruselbotonizquierdo onClick={previous}></Carruselbotonizquierdo>

        <img height="65%" width="85%" src={selectedImage} alt="paisaje" />

        <Carruselbotonderecho onClick={next}> </Carruselbotonderecho>
      </CarruselContenedor>
    </>
  );
};
export default CarruselFotoAmpliada;

/** Carruselbotonderecho = 
  background: none.- Lo vuelve transparente.
  position: fixed.- El elemento es removido del flujo normal del documento, sin 
                    crearse espacio alguno para el elemento en el esquema de la 
                    página.
  min-width: 50%.- Determinar la anchura mínima de un elemento.
  min-height: 100%.- Determinar la anchura mínima de un elemento.
  border: none.- Borde transparente.
  margin-left: 50%.- Margen derecho.
  user-select: none.-  Controla si el usuario puede seleccionar el texto.*/
