import React from "react";
import styled from "styled-components";

const Contenedorcontac = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  right: 50%;
  margin-top: 10%;
  justify-content: space-between;
`;

const Palabra = styled.p`
  font-family: Kunstler Script;
  font-weight: 600;
  color: #063a35;
  font-size: 36pt;
`;
const Contacto = () => {
  return (
    <>
      <Contenedorcontac>
        <form>
          <h1> CONTACTO </h1>
          <form action="formulario contacto" method="get">
            <Palabra>
              <label for="name"> Tu Nombre:* </label>
              <input type="text" id="name" name="user_name" />

              <label for="text"> Asunto: </label>
              <input type="text" id="text" name="your-subject" />
            </Palabra>
            <Palabra>
              <label for="mail"> Tu E-mail:* </label>
              <input type="email" id="mail" name="user_mail" />

              <label for="msg"> Tu Mensaje: </label>
              <textarea id="msg" name="user_message"></textarea>
            </Palabra>

            <h3> * Campos obligatorios </h3>

            <button type="submit">Envíe su mensaje</button>
          </form>
        </form>
      </Contenedorcontac>
    </>
  );
};

export default Contacto;
