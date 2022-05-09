import { db } from "../sqlModels/db.mjs";
import {
  getAllFotosSql,
  postFotosSql,
  putFotosSql,
  deleteFotosSql,
} from "../sqlModels/fotosSqlModels.mjs";

// Mostar fotos
export function getAllFotosController(request, response) {
  db.all(getAllFotosSql, (err, data) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.json(data);
    }
  });
}

// Añadir fotos
export function postFotosController(request, response) {
  const { id, file, galeria } = request.body;
  db.run(postFotosSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
}
//  Modificar Fotos
export function putFotosController(request, response) {
  db.run(putFotosSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}

// Eliminar fotos
export function deleteFotosControllers(request, response) {
  db.run(deleteFotosSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}
