import { useState} from "react";
import  avanzar  from "./Imagenes/imgbotones/flechaadelante.png";
import  atrasar  from "./Imagenes/imgbotones/flechaatras.png";


export function botonflecha() {
  
  const [flecha, setFlecha] = useState([]);
  
  // función flecha ">" o "<"
  function flechaHandler(event) {
    setFlecha (event.target.value);
  }
 // función flecha anterior "<"
 function restaHandler(event) {
    flechaHandler = (setFlecha --);
  } 
  // función flecha posterior ">"
  function sumaHandler(event) {
    flechaHandler = (setFlecha ++);  
  }

  return (
    <div>
      <button onClick={restaHandler} value = "-"> 
          <img src= {atrasar}/> 
      </button>
      
      <button onClick={sumaHandler} value = "+">  
          <img src= {avanzar}/>
      </button> 
    </div>
  );

}

export default botonflecha; 
