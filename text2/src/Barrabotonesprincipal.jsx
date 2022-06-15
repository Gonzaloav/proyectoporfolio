import React from "react";
import styled from "styled-components";
import { PrincipalLink } from "./Link";

const HeaderbotonInico = styled.header`
  position: fixed;
  right: 7%;
  justify-content: center;
`;
const Navnombre = styled.nav`
  background-color: #d78c0e;
  display: flex;
  justify-content: space-around;
  width: 98vw;
  height: 8vh;
  align-items: center;
  margin: 2px;
  border-radius: 20px;
`;

const Minombre = styled.h1`
  justify-content: space-between;
  font-family: Vladimir Script;
  color: #10625a;
  font-size: 48pt;
`;

const NombreLinks = styled.h2`
  justify-content: space-between;
  font-family: Kunstler Script;
  font-size: 36pt;
  color: goldenrod;
`;

const BarrabotonesPrinciapal = () => {
  return (
    <>
      <HeaderbotonInico>
        <Navnombre>
          <Minombre> Zalo Aller </Minombre>
          <NombreLinks>
            <PrincipalLink />
          </NombreLinks>
        </Navnombre>
      </HeaderbotonInico>
    </>
  );
};

export default BarrabotonesPrinciapal;
