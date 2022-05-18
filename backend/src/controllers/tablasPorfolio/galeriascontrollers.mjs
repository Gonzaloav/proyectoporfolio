import { db } from "../../sqlModels/db.mjs";
import { requestError } from "../error500.mjs";
import {
  getAllGaleriasSQL,
  postGaleriasSQL,
  getOneGaleriasByIdSQL,
  putGaleriasSQL,
  deleteGaleriasSQL,
} from "../../sqlModels/porfolioSQL/galeriasSqlModels.mjs";

// Mostrar Galerias
export function getAllGaleriasController(request, response) {
  try {
    db.all(
      getAllGaleriasSQL, //response.locals.authorization.id_galerias,
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
          [request.params.id_galerias, //response.locals.authorization.id_galerias
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

// Añadir Galerias
export function postGaleriasController(request, response) {
  try {
    db.run(
      postGaleriasSQL,
        [  
           request.body.id_galerias,
           request.body.description   
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


// Modificar Galerias

export function putGaleriasController (request, response){
  db.run(
    putGaleriasSQL,
                [
                    request.body.id_galerias,
                    request.body.description,
                ],
    (err) => {
        if (err) {
            console.error(err);
            response.sendStatus(500)
        } else {
            response.sendStatus(200)
        }
    }
)
}


// Eliminar Galerias
export function deleteGaleriasController(request, response) {
  try {
    db.run(deleteGaleriasSQL,
        [
            request.body.id_galerias,
            // response.locals.authorization.id_galerias
        ],
        (err)=>{
            if (err) throw err
            else response.sendStatus(200);
        })
} catch (err) {
    requestError(err, response)
}
}


/**export function putGaleriasController(request, response) {
  try {
    // Comprobar que la tara existe con getOneGaleriasByIdSQL.
    db.get ( getOneGaleriasByIdSQL,
        [request.body.id_galerias, // response.locals.authorization.id_galerias ],
        (err, data)=>{     if (err) throw err;
            else if (data) db.run(   putGaleriasSQL,   [    request.body.id_galerias,
                    request.body.description,
                    response.locals.authorization.id_galerias ],
                (err)=>{    if (err) throw err      else {
                        response.sendStatus(200);   }  }  )
            else response.sendStatus(404);   }  )
} catch (err) {    requestError(err, response)  }   }  */