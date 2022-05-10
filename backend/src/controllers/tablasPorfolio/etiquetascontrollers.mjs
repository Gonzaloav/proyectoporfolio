import { db } from "../../sqlModels/db.mjs";
import {
   getAllEtiquetasSQL,
  postEtiquetasSQL,
  putEtiquetasSQL,
  deleteEtiquetasSQL,
} from "../../sqlModels/etiquetasSqlModels.mjs";

// Mostrar Etiquetas .
export function getAllEtiquetasController(request, response) {
  db.all(getAllEtiquetasSQL, (err, data) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.json(data);
    }
  });
}

// Añadir Etiquetas.
export function postEtiquetasController(request, response) {
  const { id, description, ref, galeria } = request.body;
  db.run(postEtiquetasSQL, [(id, description, ref, galeria)], (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.sendStatus(201).send ('Hola Mundo');
    }
  });
}

// Modificar Etiquetas.
export function putEtiquetasController(request, response) {
  db.run(putEtiquetasSQL, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.sendStatus(200).send ('Hola Mundo');
    }
  });
}

// Eliminar Etiquetas
export function deleteEtiquetasController(request, response) {
  db.run(deleteEtiquetasSQL, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500).send ('Error del servidor');
    } else {
      response.sendStatus(200).send ('Hola Mundo');
    }
  });
}

