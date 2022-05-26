import React,{useEffect,useState} from "react";
import peru from "../Imagenes/Inicio/fauna.jpg"  // 34.jpg" ( foto vertical)


export function proporcionfoto() {
    
    const [novoWidth,setNovoWidth] = useState(null);

    let imagen = new Image ();
    imagen.src = peru;

    useEffect (()=>{
        let tg = (Math.tan(imagen.naturalHeight/imagen.naturalWidth));
        let novaAltura = 500;
        let conTg = novaAltura/tg;
        let relacion = imagen.naturalWidth/imagen.naturalHeight;
        let valorNovoWidth = novaAltura*relacion;
        const calculo = () => {  
    
            console.log ("anchura:", imagen.naturalWidth );
            console.log ("altura:", imagen.naturalHeight);
            console.log ("tangente:",valorNovoWidth);
            setNovoWidth(valorNovoWidth)
            console.log('novo width ....',relacion, valorNovoWidth, novoWidth)
        }
        calculo();
        console.log('novo width fora de calculo', novoWidth)
      },[]);

      return (
        <div className="proba">
          <img src = {peru} height = {500} width = {novoWidth}/>
          {/*<img src = {peru} height = {500} width = {novoWidth}/>*/}
        </div>
      );
}

export default proporcionfoto