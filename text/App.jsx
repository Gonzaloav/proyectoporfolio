import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// instalar npm i bootstrap reactstrap
// import bootstrap/dist/css/bootstrap.min .css
const items = [
  {
    src: require("./img/Inicio/paisaje.jpg"),
  },
  {
    src: require("./img/Inicio/retrato.jpg"),
  },
  {
    src: require("./img/Inicio/fauna.jpg"),
  },
  {
    src: require("./img/Inicio/conceptual.jpg"),
  },
];

const App = (props) => {
  // estado para índice seleccionado

  const [activeIndex, setActiveIndex] = useState(0);

  // Para saber si está activada o no la animación.

  const [animating, setAnimating] = useState(false);

  // método para cambiar a siguiente imagen.

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  // Método para cambiar a la anterior imagen.
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };
  // Para ir a un índice exprecífico.
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // Almacenaremos el código que generaremos por cada una de las imágenes , que  generemos en el carrusel.
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}  width = "100%" height="750px" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
};

// Llamamos al componente Carrusel. 
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    );
  }
}

export default App;
