import React from "react";
// import Link from "react-router-dom";
import styled from "styled-components";
import { RoutersInicio, RoutersPorfolio } from "./Routers";
import { PrincipalLink, PorfolioLink } from "./Link";

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
    <> 
    <nav>
      <Minombre> Zalo Aller </Minombre>
      <NombreLinks>
        <PrincipalLink/>
        <PorfolioLink/>
      </NombreLinks>
    </nav> 
    <main> 
      <RoutersInicio/>
      <RoutersPorfolio/>
    </main>
  </>
  );
};

export default Barrabotones;