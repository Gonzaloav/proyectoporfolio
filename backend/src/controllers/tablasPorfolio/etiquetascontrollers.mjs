import { db } from "../../sqlModels/db.mjs";
import {
   getAllEtiquetasSQL,
  postEtiquetasSQL,
  putEtiquetasSQL,
  deleteEtiquetasSQL,
} from "../../sqlModels/porfolioSQL/etiquetasSqlModels.mjs";

// Mostrar Etiquetas .
export function getAllEtiquetasController(request, response) {
  try {
    db.all(
      getAllEtiquetasSQL, response.locals.authorization.id,
        (err,data)=>{
            if ( err ) throw err
            else response.json(data)
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
            request.body.description,
            request.body.ref,
            request.body.galeria,
            response.locals.authorization.id
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

// Modificar Etiquetas.
export function putEtiquetasController(request, response) {
  try {
    // Comprobar que la tara existe con getOneTaskByIdSQL.
    db.get(getOneTaskByIdSQL,
        [request.body.id, response.locals.authorization.id],
        (err, data)=>{
            if (err) throw err;
            else if (data) db.run(
              putEtiquetasSQL,
                [
                    request.body.id,
                    request.body.description,
                    request.body.ref,
                    request.body.galeria,
                    response.locals.authorization.id
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

// Eliminar Etiquetas
export function deleteEtiquetasController(request, response) {
  try {
    db.run(deleteEtiquetasSQL,
        [
            request.body.id,
            response.locals.authorization.id
        ],
        (err)=>{
            if (err) throw err
            else response.sendStatus(200).send ('Hola Mundo');
        })
} catch (err) {
    requestError(err, response)
}
}
  


