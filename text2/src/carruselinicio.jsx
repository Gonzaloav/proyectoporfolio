import React, { useEffect, useState } from "react";
import retrato from "./imagenes/Inicio/retrato.jpg";
import paisaje from "./Imagenes/Inicio/paisaje.jpg";
import conceptual from "./Imagenes/Inicio/conceptual.jpg";
import fauna from "./Imagenes/Inicio/fauna.jpg";
import styled from "styled-components";

//npm install --save styled-components
/** opacidad para que empiece en negro.  Transition modificación temporal. Pasara de negro a verse. */
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

// Como crear tipos. Pasamos las imagenes.  Creamos una autoPlay. showButtons = ocultar botones.
class Carrusel {
  constructor({ images, autoPlay, showButtons }) {
    this.images = String;
    this.autoPlay = Boolean;
    this.showButtons = Boolean;
  }
}
// añadimos la clase Carrusel.
const Carruselinicio = (props, constructor) => {
  const images = [retrato, paisaje, fauna, conceptual];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(constructor.images[0]);
  /** La imagen no esta cargada al prinpipio. Esta en negro */
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (constructor.autoPlay || !constructor.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, constructor.images);
      }, 3000);
      return () => clearInterval(interval);
    }
  });

  /** Creamos un método para simplificar. 2 parámetros, un selectedIndex que va a ser un número y dos una imagen es un strig.    Ponemos una propiedad sin parámetro. (next=true) que nos pregunta si vas al siguiente o al otro.*/

  const selectNewImage = (selectedIndex, images, next = true) => {
    /** Cada vez que llamemos a una nueva imagen vamos a decir que no está cargada  */
    setLoaded(false);

    /** Poner temporizador de 3 segundos */
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;

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
    selectNewImage(selectedIndex, constructor.images, false);
    /*console.log('images: ',images)*/
  };

  // no se pone false porque voy al siguiente.
  const next = () => {
    selectNewImage(selectedIndex, constructor.images);
    /*console.log('images: ',images)*/
  };

  /*console.log('images[0] : ',images[0])*/
  return (
    <>
      {/**  Propiedad onLoad de Imagenes = cuando terminan de cargar llama a un método poniendolo en true. (19:40)
       * className =  ¿Está cargada la imagen?  le pones la clase loaded y sino nada.
       */}

      <CarruselImg
        height="45%"
        width="65%"
        src={selectedImage}
        alt="paisaje"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <CarruselBotonContenedor>
        {constructor.showButtons ? (
          <>
            <CarruselBoton onClick={previous}> {"<"} </CarruselBoton>
            <CarruselBoton onClick={next}> {">"} </CarruselBoton>
          </>
        ) : (
          <> </>
        )}
      </CarruselBotonContenedor>
    </>
  );
};
export default Carruselinicio;

/**
 * Dentro de WhoAmi =  colocar const images =[paisaje, retrato, fauna, conceptual]
 * antes de return
 *  y dentro de Routes <MainContainer>
 * <Carruselinicio images = {images}  autoPlay = {true} showButtons = {false}/>
 * https://github.com/AppleLAN/carousel
 * */
