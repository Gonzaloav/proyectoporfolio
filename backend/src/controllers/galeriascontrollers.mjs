import { db } from "../sqlModels/db.mjs";
import {
  getAllGaleriasSql,
  postGaleriasSql,
  putGaleriasSql,
  deleteGaleriasSql,
} from "../sqlModels/fotosSqlModels.mjs";

// Mostrar Galerias
export function getAllGaleriasController(request, response) {
  db.all(getAllGaleriasSql, (err, data) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.json(data);
    }
  });
}

// Añadir Galerias
export function postGaleriasController(request, response) {
  const { id, description } = request.body;
  db.run(postGaleriasSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
}

// Modificar Galerias
export function putGaleriasController(request, response) {
  db.run(putGaleriasSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}

// Eliminar Galerias
export function deleteGaleriasController(request, response) {
  db.run(putGaleriasSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}
