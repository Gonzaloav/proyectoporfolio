 import React, {useState,useEffect} from "react";
import Proporcionfoto from "./Proporcionfoto";


const VistaMiniaturas= () => {

 const [contador, setContador] = useState (4);   
 
 /*suma.addEventLinstener (
    "click", ()=>{
  mostrador.value= parseInt(mostrador.value)+1;
  }
  );
*/
const Suma = (event) =>{
  setContador(event.target.value);
}
 return(
        <div>
        <input onChange={Suma} value={contador} type="number" min="4"/>
        <Proporcionfoto num={contador}/>
        </div>
    );
}

export default VistaMiniaturas;
