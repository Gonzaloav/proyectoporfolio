import React from "react";
import styled from "styled-components";

const Formulario = styled.form`
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  margin-top: 1em;
`;

const Rectangulo = styled.label`
  display: inline-block;
  width: 70px;
  text-align: right;
`;

const Texto = styled.div`
  font: 1em sans-serif;
  width: 350px;
  box-sizing: border-box;
  border: 1px solid rgb(179, 177, 177);
  border-color: #000;
  vertical-align: top;
  height: 7em;
`;

const Boton = styled.button`
  padding-left: 90px;
  margin-left: 0.6em;
`;

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
              <tr>
                <th>
                  <label for="name"> Tu Nombre:* </label>
                </th>
                <th>
                  <label for="text"> Asunto: </label>
                </th>
              </tr>
              <tr>
                <td>
                  <input type="text" id="name" name="user_name" />
                </td>
                <td>
                  <input type="text" id="text" name="your-subject" />
                </td>
              </tr>
            </Palabra>
            <Palabra>
              <tr>
                <th>
                  <label for="mail"> Tu E-mail:* </label>
                </th>
                <th>
                  <label for="msg"> Tu Mensaje: </label>
                </th>
              </tr>
              <tr>
                <td>
                  <input type="email" id="mail" name="user_mail" />
                </td>
                <td>
                  <textarea id="msg" name="user_message"></textarea>
                </td>
              </tr>
            </Palabra>
            <tr>
              <td>
                <h3> * Campos obligatorios </h3>
              </td>
              <td>
                <button type="submit">Envíe su mensaje</button>
              </td>
            </tr>
          </form>
        </form>
      </Contenedorcontac>
    </>
  );
};

export default Contacto;
