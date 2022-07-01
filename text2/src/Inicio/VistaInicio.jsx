import React from "react";
import Carruselinicio from "./carruselinicio";
import Barrabotones from "./Barrabotonesinicio";
import CarruselFotoAmpliada from "./CarruselFotoAmpliada";
const VistaInicio = () => {

  return (
    <>
    <nav>
        <Barrabotones/>
    </nav>  
    <main> 
        <CarruselFotoAmpliada/>
    </main>
    </>
  );
}

export default VistaInicio;
