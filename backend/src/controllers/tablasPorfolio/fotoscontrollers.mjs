import { db } from "../../sqlModels/db.mjs";
import {
  getAllFotosSQL,
  postFotosSQL,
  putFotosSQL,
  deleteFotosSQL,
} from "../../sqlModels/fotosSqlModels.mjs";

// Mostar fotos
export function getAllFotosController(request, response) {
  db.all(getAllFotosSQL, (err, data) => {
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
  const { id_fotos, file, galeria } = request.body;
  db.run(postFotosSQL, (err) => {
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
  db.run(putFotosSQL, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}

// Eliminar fotos
export function deleteFotosController(request, response) {
  db.run(deleteFotosSQL, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}
