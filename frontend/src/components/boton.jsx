/**

import { useState } from "react";



export const [flecha, setFlecha] = useState([]);

export function flechaHandler(event) {
    setFlecha (event.target.value);
  }

export function restaHandler(event) {
    flechaHandler = (setFlecha --);
  } 
  
export function sumaHandler(event) {
    flechaHandler = (setFlecha ++);  
  }






 
  function botonGenerico({children, action}) {
    return (
        <button onClick={action} value = " "></button>
    );  
}





export default boton; 
*/