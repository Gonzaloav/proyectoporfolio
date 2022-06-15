
import React from "react";


const Contacto = () => {

  return (
    <>
    <form>
        <h2> Contacto</h2>

        <form action="formulario contacto" method="get">
            <ul>
             <li>
               <label for="name"> Tu Nombre:* </label>
               <input type="text" id="name" name="user_name">
             </li>
             <li>
                <label for="text"> Asunto: </label>
                <input type="text" id="text" name="your-subject">
            </li>
            <li>
               <label for="mail"> Tu E-mail:* </label>
               <input type="email" id="mail" name="user_mail">
             </li>
             <li>
               <label for="msg"> Tu Mensaje: </label>
               <textarea id="msg" name="user_message"></textarea>
             </li>
             <li class="button">
                <button type="submit">Envíe su mensaje</button>
              </li>
            </ul>
        </form>
    </form>
    
    </>
  );
}

export default Contacto;
