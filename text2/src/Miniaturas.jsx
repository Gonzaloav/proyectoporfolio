import React from "react";
// ------------------3 : 4 -------------------
import cinco34 from "../imagenes/34/1.jpg";
import seis34 from "../imagenes/34/2.jpg";
import siete34 from "../imagenes/34/3.jpg";
import ocho34 from "../imagenes/34/4.jpg";
// --------------- 4: 3 ------------------------
import uno43 from "../imagenes/43/5.jpg";
import dos43 from "../imagenes/43/6.jpg";
import tres43 from "../imagenes/43/7.jpg";
import cuatro43 from "../imagenes/43/8.jpg";

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
    const img = [uno43,dos43,tres43,cuatro43,cinco34,seis34,siete34,ocho34];
    return (
      <> 
<Body> 
    <ContenedorMiniatura > 

        <Wrapper43> 
            < img src = "cuatro43"/>
        </Wrapper43>

        <Wrapper43>
            <img src="uno43"/>
        </Wrapper43>

        <Wrapper43>
            <img src="dos43"/>
        </Wrapper43>

        <Wrapper34>
            <img src="seis34"/>
        </Wrapper34>

        <Wrapper34>
            <img src="cinco34"/>
        </Wrapper34>

    </ContenedorMiniatura>
   
    <ContenedorMiniatura > 
        <Wrapper34>
            <img src="seis34"/>
        <Wrapper34>

        <Wrapper34>
            <img src="cinco34"/>
        </Wrapper34>

        <Wrapper43>
            <img src="uno43"/>
        </Wrapper43>

        <Wrapper43>
            <img src="dos43"/>
        </Wrapper43>

        <Wrapper43>
            <img src="cuatro43"/>
        </Wrapper43>

    </ContenedorMiniatura > 

    <ContenedorMiniatura > 

    <Wrapper43>
            <img src="tres43"/>
    </Wrapper43>

    <Wrapper43>
            <img src="uno43"/>
    </Wrapper43>

    </ContenedorMiniatura > 
</Body>

    </>
    );
  };
  
  export default Miniaturas;