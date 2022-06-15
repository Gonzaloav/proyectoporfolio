import React from "react";
import Carruselinicio from "./carruselinicio1";
import BarrabotonesPrinciapal from "./Barrabotonesprincipal";

const VistaInicio = () => {
  return (
    <>
      <nav>
        <BarrabotonesPrinciapal />
      </nav>
      <main>
        <Carruselinicio />
      </main>
    </>
  );
};

export default VistaInicio;
