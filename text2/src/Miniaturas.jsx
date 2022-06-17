
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
    const fotos=[]
    for (let i = 0; i < images34.length; i=i+4) {
        const fila = []
        for ( let foto= 0; foto< 4; foto++){
            if(images34.length>i+foto){
            fila.push(images34[i+foto]);}
        }
        fotos.push(fila)
    }
     return (
    <>    
    <ul className="container">{fotos.map(
        (item)=>
        <FotosMiniatura images={item}/> 
        
    )}</ul> 
    </>
    );
  };

export default Miniaturas;