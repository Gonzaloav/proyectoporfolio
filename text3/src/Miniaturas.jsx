import React from "react";
// ------------------3 : 4 -------------------
import cinco34 from "./imagenes/34/5.jpg";
import seis34 from "./imagenes/34/6.jpg";
import siete34 from "./imagenes/34/7.jpg";
import ocho34 from "./imagenes/34/8.jpg";
// --------------- 4: 3 ------------------------
import uno43 from "./imagenes/43/1.jpg";
import dos43 from "./imagenes/43/2.jpg";
import tres43 from "./imagenes/43/3.jpg";
import cuatro43 from "./imagenes/43/4.jpg";

import styled from "styled-components";

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    margin: 0px;
`;

const ContenedorMiniatura = styled.div`
display: flex;
flex-direction: row;
`;

const Wrapper34 = styled.div`
width:  calc(20% * 3 / 4);
margin: 2px;
`;

const Wrapper43 = styled.div`
width:  calc(20% * 4 / 3);
margin: 2px;
`;

const Img = styled.img`
height: 100%;
width: 100%;
border-radius: 5px;
`;

const Miniaturas = () => {
    const imagenesprueba = [uno43,dos43,tres43,cuatro43,cinco34,seis34,siete34,ocho34];
    return (
      <> 
<Body> 
    <ContenedorMiniatura > 

        <Wrapper43> 
        <Img>  < img src = {cuatro43}/>  </Img>
        </Wrapper43>

        <Wrapper43>
        <Img> <img src={uno43}/> </Img>
        </Wrapper43>

        <Wrapper43>
        <Img> <img src={dos43}/>  </Img>
        </Wrapper43>

        <Wrapper34>
        <Img> <img src={seis34}/>  </Img>
        </Wrapper34>

        <Wrapper34>
        <Img> <img src={cinco34}/>  </Img>
        </Wrapper34>

    </ContenedorMiniatura>
   
    <ContenedorMiniatura > 

        <Wrapper34>
           <Img>  <img src={seis34}/> </Img>
        </Wrapper34>

        <Wrapper34>
        <Img> <img src={cinco34}/>  </Img>
        </Wrapper34>

        <Wrapper43>
        <Img> <img src={uno43}/>  </Img>
        </Wrapper43>

        <Wrapper43>
        <Img>  <img src={dos43}/>  </Img>
        </Wrapper43>

        <Wrapper43>
        <Img> <img src={cuatro43}/> </Img>
        </Wrapper43>

    </ContenedorMiniatura > 

    <ContenedorMiniatura > 

    <Wrapper43>
    <Img> <img src={tres43}/> </Img>
    </Wrapper43>

    <Wrapper43>
    <Img>   <img src={uno43}/> </Img>
    </Wrapper43>

    </ContenedorMiniatura > 
</Body>

    </>
    );
  };
  
  export default Miniaturas;