import { db } from "../../sqlModels/db.mjs";
import {
    getAllUsersSQL,
    postUsersSQL,
    putUsersSQL,
    deleteUsersSQL,
} from "../../sqlModels/usuarioSQL/userSqlModels.mjs"

// Mostrar Usuarios .
export function getAllUsersController(request, response) {
  db.all(getAllUsersSQL, (err, data) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.json(data);
    }
  });
}

// Añadir Usuarios.
export function postUsersController(request, response) {
  const { users_id, name, password } = request.body;
  db.run(postUsersSQL, [(users_id, name, password)], (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.sendStatus(201).send ('Hola Mundo');
    }
  });
}

// Modificar Usurios.
export function putUsersController(request, response) {
  db.run(putUsersSQL, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.sendStatus(200).send ('Hola Mundo');
    }
  });
}

// Eliminar Usuarios.
export function deleteUsersController(request, response) {
  db.run(deleteUsersSQL, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.sendStatus(200).send ('Hola Mundo');
    }
  });
}



