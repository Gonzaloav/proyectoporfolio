import React, { useEffect, useState } from "react";
import retrato from "./imagenes/Inicio/retrato.jpg";
import paisaje from "./imagenes/Inicio/paisaje.jpg";
import conceptual from "./imagenes/Inicio/conceptual.jpg";
import fauna from "./imagenes/Inicio/fauna.jpg";
import styled from "styled-components";  
//npm install --save styled-components


// centrado, uno al lado del otro, con un poco de margen.
const CarruselBotonContenedor = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  marigin-top: 15px;
`;

const Carruselboton = styled.button`
  Box-sizing: 50% 
  
`;


const CarruselFotoAmpliada = () => {
    const images = [ paisaje, fauna, retrato, conceptual];

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

     <CarruselBotonContenedor>  

      <button  onClick={previous} margin-left= "50%"> {"<"} </button>
      
      <img height="auto" width="90%" src={selectedImage} />

      <button onClick={next} margin-rigth= "50%"> {">"}  </button>

    </CarruselBotonContenedor> 

    </>
  );
};
export default CarruselFotoAmpliada;


