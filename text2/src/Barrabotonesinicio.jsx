import React from "react";
import styled from "styled-components";
import { PrincipalLink } from "./Link";

const HeaderbotonInico = styled.header`
display: flex;
margin-top: 55%;
justify-content: center;
`

const Navnombre = styled.nav`
  background-color: #d78c0e52;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 85vw;
  height: 30vh;
  align-items: center;
  margin: 2px;
  border-radius: 20px;
`;

const Minombre = styled.h1`
  justify-content: space-between;
  font-family: Vladimir Script;
  color: #04544df7;
  font-size: 48pt;
`;

const NombreLinks = styled.h2`
  justify-content: space-between;
  font-family: Kunstler Script;
  font-size: 36pt;
  color: goldenrod;
`;

const Barrabotones = () => {
  return (
    <>
      <Navnombre>
        <Minombre> Zalo Aller </Minombre>
        <NombreLinks>
          <PrincipalLink />
        </NombreLinks>
      </Navnombre>
    </>
  );
};

export default Barrabotones;
