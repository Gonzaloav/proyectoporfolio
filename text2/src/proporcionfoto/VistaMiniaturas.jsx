import React, {useState,useEffect} from "react";
import Proporcionfoto from "./Proporcionfoto";


const VistaMiniaturas= () => {

 const [contador, setContador] = useState (0);   
 
 /*suma.addEventLinstener (
    "click", ()=>{
  mostrador.value= parseInt(mostrador.value)+1;
  }
  );
*/
const Suma = () =>{
    let cont = contador + 1;
    setContador(cont);
}
 return(
        <div>
        <input onChange={()=>{Suma()}} type="number" />
        <Proporcionfoto num={contador}/>
        </div>
    );
}

export default VistaMiniaturas;
