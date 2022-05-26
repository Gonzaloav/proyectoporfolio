import React from "react";
import { useState } from "react";
import avanzar from "./components/Imagenes/botones/flechaadelante.png";
import atrasar from "./components/Imagenes/botones/flechaatras.png";

function App() {
  const carruselinicio = () => {
    return (
      <div
        style={{
          backgroundImage:
            'url("https://media.geeksforgeeks.org/' +
            'wp-content/uploads/20201221222410/download3.png")',
          height: "300px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1> HELLO </h1>
      </div>
    );
  };
}

export default App;
