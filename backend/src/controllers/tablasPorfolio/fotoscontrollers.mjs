import { db } from "../../sqlModels/db.mjs";
import { requestError } from "../error500.mjs";
import {
  getAllFotosSQL,
  postFotosSQL,
  getOneFotosByIdSQL,
  putFotosSQL,
  deleteFotosSQL,
} from "../../sqlModels/porfolioSQL/fotosSqlModels.mjs";

// Mostar fotos
export function getAllFotosController(request, response) {
  try {
    db.all(
      getAllFotosSQL, response.locals.authorization.id_fotos,
        (err,data)=>{
            if ( err ) throw err
            else response.json(data)
        }
    )
  } catch (err) {
      requestError(err, response)
    }
} 

export function getOneFotosController (request, response) {
  try {
      db.get(
        getOneFotosByIdSQL,
          [
           request.params.id_galerias, 
           response.locals.authorization.id_galerias
          ],
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

// Añadir fotos
export function postFotosController(request, response) {
  try {
    db.run(
      postFotosSQL,
        [
            request.body.id_fotos,
            request.body.file,
            request.body.galeria_fotos,
            response.locals.authorization.id_fotos
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
//  Modificar Fotos
export function putFotosController(request, response) {
  try {
    // Comprobar que la tara existe con getOneTaskByIdSQL.
    db.get(getOneFotosByIdSQL,
        [request.body.id_fotos, response.locals.authorization.id_fotos],
        (err, data)=>{
            if (err) throw err;
            else if (data) db.run(
              putFotosSQL,
                [
                    request.body.id_fotos,
                    request.body.file,
                    request.body.galeria_fotos,
                    response.locals.authorization.id_fotos,
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


// Eliminar fotos
export function deleteFotosController(request, response) {
  try {
    db.run(deleteFotosSQL,
        [
            request.body.id_fotos,
            response.locals.authorization.id_fotos
        ],
        (err)=>{
            if (err) throw err
            else response.sendStatus(200).send ('Hola Mundo');
        })
} catch (err) {
    requestError(err, response)
}
}
