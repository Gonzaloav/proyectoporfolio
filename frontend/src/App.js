
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
}



export default App;
