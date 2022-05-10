import { db } from "../../sqlModels/db.mjs";
import {
  getAllGaleriasSQl,
  postGaleriasSQl,
  putGaleriasSQL,
  deleteGaleriasSQL,
} from "../../sqlModels/porfolioSQL/galeriasSqlModels.mjs";

// Mostrar Galerias
export function getAllGaleriasController(request, response) {
  db.all(getAllGaleriasSQl, (err, data) => {
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
  const { id_galeiras, description } = request.body;
  db.run(postGaleriasSQl, (err) => {
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
  db.run(putGaleriasSQL, (err) => {
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
  db.run(deleteGaleriasSQL, (err) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
}
