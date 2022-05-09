import { db } from "../sqlModels/db.mjs";
import {
  deleteEtiquetasSql,
  getAllEtiquetasSql,
  postEtiquetasSql,
  putEtiquetasSql,
} from "../sqlModels/etiquetasSqlModels.mjs";

// Mostrar Etiquetas .
export function getAllEtiquetasController(request, response) {
  db.all(getAllEtiquetasSql, (err, data) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.json(data);
    }
  });
}

// Añadir Etiquetas.
export function postEtiquetasController(request, response) {
  const { id, description, ref, galeria } = request.body;
  db.run(postEtiquetasSql, [(id, description, ref, galeria)], (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(201);
    }
  });
}

// Modificar Etiquetas.
export function putEtiquetasController(request, response) {
  db.run(putEtiquetasSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}

// Eliminar Etiquetas
export function deleteEtiquetasController(request, response) {
  db.run(putEtiquetasSql, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
