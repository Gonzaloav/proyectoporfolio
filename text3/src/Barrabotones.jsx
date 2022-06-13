import React from "react";
import styled from "styled-components";
import { PrincipalLink } from "./Link";

const Navnombre = styled.nav`
  background-color: salmon;
  display: flex;
  justify-content: left;
  align-content: left;
  width: 100%;
`;

const Minombre = styled.p`
  top: 0%;
  left: 0%;
  justify-content: space-between;
  font-family: Vladimir Script;
  align-items: start;
  font-size: 36pt;
`;

const NombreLinks = styled.div`
  justify-content: space-between;
  top: 0%;
  right: 0%;
  font-family: Kunstler Script;
  align-items: start;
  font-size: 24pt;
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
