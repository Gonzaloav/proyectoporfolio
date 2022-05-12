import { db } from "../../sqlModels/db.mjs";
import { requestError } from "../error500.mjs";
import {
  getAllGaleriasSQl,
  postGaleriasSQl,
  getOneGaleriasByIdSQL,
  putGaleriasSQL,
  deleteGaleriasSQL,
} from "../../sqlModels/porfolioSQL/galeriasSqlModels.mjs";

// Mostrar Galerias
export function getAllGaleriasController(request, response) {
  try {
    db.all(
      getAllGaleriasSQl, response.locals.authorization.id_galerias,
        (err,data)=>{
            if ( err ) throw err
            else response.json(data)
        }
    )
  } catch (err) {
      requestError(err, response)
    }
} 

// 
export function getOneGaleriasController (request, response) {
  try {
      db.get(
        getOneGaleriasByIdSQL,
          [request.params.id_galerias, response.locals.authorization.id_galerias],
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

// Añadir Galerias
export function postGaleriasController(request, response) {
  try {
    db.run(
      postGaleriasSQl,
        [
            request.body.id_galerias,
            request.body.description,
            response.locals.authorization.id_galerias
        ],
        (err)=>{
            if (err) throw err
            else response.sendStatus(201).send ('Hola Mundo');
        }
    )
} catch (err) {
    requestError(err, response)
}
}


// Modificar Galerias
export function putGaleriasController(request, response) {
  try {
    // Comprobar que la tara existe con getOneGaleriasByIdSQL.
    db.get ( getOneGaleriasByIdSQL,
        [request.body.id_galerias, response.locals.authorization.id_galerias],
        (err, data)=>{
            if (err) throw err;
            else if (data) db.run(
              putGaleriasSQL,
                [
                    request.body.id_galerias,
                    request.body.description,
                    response.locals.authorization.id_galerias,
                ],
                (err)=>{
                    if (err) throw err
                    else {
                        response.sendStatus(200).send ('Hola Mundo');
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
// Eliminar Galerias
export function deleteGaleriasController(request, response) {
  try {
    db.run(deleteGaleriasSQL,
        [
            request.body.id_galerias,
            response.locals.authorization.id_galerias
        ],
        (err)=>{
            if (err) throw err
            else response.sendStatus(200).send ('Hola Mundo');
        })
} catch (err) {
    requestError(err, response)
}
}
