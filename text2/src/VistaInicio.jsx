import React from "react";
import Carruselinicio from "./carruselinicio";
import Barrabotones from "./Barrabotones";
// import { RoutersInicio, RoutersPorfolio } from "./Routers";

const VistaInicio = () => {

  return (
    <>
    <nav>
        <Barrabotones/>
    </nav>  
    <main> 
        <Carruselinicio/>
    </main>
    </>
  );
}

export default VistaInicio;
