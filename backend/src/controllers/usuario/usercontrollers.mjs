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
      response.sendStatus(500);
    } else {
      response.json(data);
    }
  });
}

// Añadir Usuarios.
export function postUsersController(request, response) {
  const { name, password } = request.body
  db.run(postUsersSQL, [name, password], (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
}

// Modificar Usurios.
export function putUsersController(request, response) {
  db.run(putUsersSQL, 
    [
     
     request.body.name,
     request.body.users_id
  ],
    (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}

// Eliminar Usuarios.
export function deleteUsersController(request, response) {
  db.run(deleteUsersSQL,
    [ 
      request.body.users_id
    ], 
    (err) => {
    if (err) {
      console.error(err); 
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}



