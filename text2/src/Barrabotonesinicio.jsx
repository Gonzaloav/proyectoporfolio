import React from "react";
import styled from "styled-components";
import { PrincipalLink } from "./Link";

const Navnombre = styled.nav`
  background-color: #d78c0efa;
  display: flex;
  justify-content: space-around;
  width: 99vw;
  height: 8vh;
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
