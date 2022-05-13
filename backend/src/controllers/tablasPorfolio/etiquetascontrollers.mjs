import { db } from "../../sqlModels/db.mjs";
import { requestError } from "../error500.mjs";
import {
  getAllEtiquetasSQL,
  postEtiquetasSQL,
  getOneEtiquetasByIdSQL,
  putEtiquetasSQL,
  deleteEtiquetasSQL,
} from "../../sqlModels/porfolioSQL/etiquetasSqlModels.mjs";

// Mostrar Etiquetas .
export function getAllEtiquetasController(request, response) {
  try {
    db.all(
      getAllEtiquetasSQL, response.locals.authorization.id_etiquetas,
        (err,data)=>{
            if ( err ) throw err
            else response.json(data)
        }
    )
  } catch (err) {
      requestError(err, response)
    }
} 

export function getOneEtiquetasController (request, response) {
  try {
      db.get(
        getOneEtiquetasByIdSQL,
          [request.params.id_etiquetas, response.locals.authorization.id_etiquetas ],
          (err, data) => {
              if ( err ) throw err
              else if ( data ) response.json(data)
              else response.sendStatus(404)
          }
      )
  } catch (err) {
      requestError(err, response)
  }
}

// Añadir Etiquetas.
export function postEtiquetasController(request, response) {
  try {
    db.run(
      postEtiquetasSQL,
        [
            request.body.id_etiquetas,
            request.body.description,
            request.body.ref,
            request.body.galeria,
            response.locals.authorization.id_etiquetas
        ],
        (err)=>{
            if (err) throw err
            else response.sendStatus(201);
        }
    )
} catch (err) {
    requestError(err, response)
}
}

// Modificar Etiquetas.
export function putEtiquetasController(request, response) {
  try {
    // Comprobar que la tara existe con getOneTaskByIdSQL.
    db.get(getOneEtiquetasByIdSQL,
        [request.body.id_etiquetas, response.locals.authorization.id_etiquetas],
        (err, data)=>{
            if (err) throw err;
            else if (data) db.run(
              putEtiquetasSQL,
                [
                    request.body.id_etiquetas,
                    request.body.description,
                    request.body.ref,
                    request.body.galeria,
                    response.locals.authorization.id_etiquetas,
                ],
                (err)=>{
                    if (err) throw err
                    else {
                        response.sendStatus(200);
                    }
                }
            )
            else response.sendStatus(404);
        }
    )
} catch (err) {
    requestError(err, response)
}
}

// Eliminar Etiquetas
export function deleteEtiquetasController(request, response) {
  try {
    db.run(deleteEtiquetasSQL,
        [
            request.body.id_etiquetas,
            response.locals.authorization.id_etiquetas
        ],
        (err)=>{
            if (err) throw err
            else response.sendStatus(200);
        })
} catch (err) {
    requestError(err, response)
}
}
  


