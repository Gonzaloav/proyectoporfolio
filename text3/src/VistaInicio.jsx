import React from "react";
import Carruselinicio from "./carruselinicio";
import Barrabotones from "./Barrabotonesinicio";

const VistaInicio = () => {
  return (
    <>
      <nav>
        <Barrabotones />
      </nav>
      <main>
        <Carruselinicio />
      </main>
    </>
  );
};

export default VistaInicio;
