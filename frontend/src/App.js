<<<<<<< HEAD

import react, { useState, useEffect } from "react";
import { miniaturas } from "../src/views/miniaturas.jsx";
import {boton} from "./components/botones/boton.jsx";
import proporcionfoto from "./components/proporcionfoto/proporcionfoto.jsx";
import './App.css';



function App() {


  return (
    <>
    <div>
      <boton/>
      <miniaturas/>
      <proporcionfoto/>
            <div className="fotosinicio">
            </div>
              
    </div>
    </>
  );
=======
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
>>>>>>> 47dbba0253b5f64e7d866c117e80844118d9780d
}

export default App;
