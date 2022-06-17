import styled from "styled-components";

const container2 = styled.ul`
display: flex;
flex-direction: row;
`;

const Img = styled.img`
height: 100%;
width: 100%;
border-radius: 5px;   `;


function FotosMiniatura({images}){

return(
   <>
   <ul className="container2">{images.map(
         (item)=>
        <li>
            <img className={item.style +" imgs"} 
            src={"http://localhost:4000/images/"+item.name} alt="hola" />
        </li>
    )}
    </ul>
</> 
)
}
export default FotosMiniatura;

/** const Body = styled.div`
    width: 100vw;                   height: 100vh;
    background-color: black;        margin: 0px;    `;

const Contenedor = styled.div`
  display: flex;                    flex-direction: column;    `;

const Wrapper34 = styled.div`
width:  calc(20% * 3 / 4);          margin: 2px;    `;

const Wrapper43 = styled.div`
width:  calc(20% * 4 / 3);          margin: 2px;    `;  */