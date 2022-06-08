import Link from "react-router-dom";
import styled from "styled-components";

/** font-family: Vladimir Script;
  font-size: 48pt;
  font-family: Kunstler Script;  */

const Minombre = styled.h3`
  font-family: Vladimir Script;
  font-size: 48pt;
`;

const NombreLinks = styled.div`
  font-family: Kunstler Script;
  font-size: 48pt;
`;

const Barrabotones = () => {
  return (
    <nav>
      <Minombre> Zalo Aller </Minombre>
      <NombreLinks>
        <Link to="/">Inicio</Link>
        <Link to="/porfolio/"> Porfolio </Link>
        <Link to="/sobremi/"> Sobre Mi</Link>
        <Link to="/contacto/"> Contacto </Link>
        <Link to="/porfolio/vistaportada/"> VistaPortada</Link>
        <Link to="/porfolio/vistaminiaturas/"> VistaMiniaturas</Link>
        <Link to="/porfolio/vistacarrusel/"> VistaCarrusel</Link>
        <Link to="/porfolio/vistafotoampliada/"> VistaFotoAmpliada </Link>
      </NombreLinks>
    </nav>
  );
};

export default Barrabotones;
