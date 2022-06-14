import React from "react";
import { useEffect } from "react";
import FotosMiniatura from "./FotosMiniatura";

const Miniaturas = (props) => {
    const images34 =[
        {name:"5.jpg",
        style: "Wrapper34"},
        {name:"6.jpg",
        style: "Wrapper34"},
        {name:"7.jpg",
        style: "Wrapper34"},
        {name:"8.jpg",
        style: "Wrapper34"},
        {name:"1.jpg",
        style: "Wrapper43"},
        {name:"2.jpg",
        style: "Wrapper43"},
        {name:"3.jpg",
        style: "Wrapper43"},
        {name:"4.jpg",
        style: "Wrapper43"}
    ]
    useEffect(()=>{
    for (let i = 0; i < images34.length; i=i+3) {
        const fila = [];
        for ( let foto=0; foto< 3; foto++){
        fila.push (images34[i+foto]);
        }
        console.log(fila)
        
    }},[])
     /*for (let i = 0 ; i < fotos.length; i=i+2) {
        let fila = []
        console.log("fila");
        for ( let j=0 ; j < 2; j++) {
            fila.push(fotos[i+j]);
        }
        console.log("componente", fila);*/
    
     return (
    <> 
{/*     
        <FotosMiniatura images={images34}/> */}
        <p>hola</p>
    </>
    );
  };

export default Miniaturas;