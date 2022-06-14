import express from "express";

import { getAllEtiquetasController, postEtiquetasController, 
         putEtiquetasController, deleteEtiquetasController, 
         getOneEtiquetasController, } 
         from "./controllers/tablasPorfolio/etiquetascontrollers.mjs";
import { getAllFotosController, postFotosController, 
         putFotosController, deleteFotosController,
         getOneFotosController,  } 
        from "./controllers/tablasPorfolio/fotoscontrollers.mjs";
import { getAllGaleriasController, postGaleriasController, 
         putGaleriasController, deleteGaleriasController,
         getOneGaleriasController, } 
         from "./controllers/tablasPorfolio/galeriascontrollers.mjs";

import { getAllUsersController, postUsersController,
         putUsersController, deleteUsersController, }
         from "./controllers/usuario/usercontrollers.mjs";


// import { requestLog } from "./middeware/requestsLog.mjs"; 
// import { authMiddleware } from "./middeware/authorization.mjs";   
import { errorsHandler } from "./middeware/errorsHandler.mjs";


const PATH_FREFIX = "/api/v0.0";
const app = express ();
// http://Localhost:3000/api/v0.0

try { 
    
    const jsonParser = express.json ();

    //app.use (requestLog);
    app.use("/images/",express.static("src/imagenes/"))

                // Tabla Usuario
    app.get (PATH_FREFIX + "/users/", getAllUsersController );
    app.post (PATH_FREFIX + "/users/", jsonParser,  postUsersController );
    app.put (PATH_FREFIX + "/users/", jsonParser,  putUsersController ); 
    app.delete (PATH_FREFIX + "/users/", jsonParser,  deleteUsersController );
   
             // Tabla Porfolio Etiquetas.
    app.get (PATH_FREFIX + "/porfolio/etiqueta/",   getAllEtiquetasController );
   // app.get (PATH_FREFIX + "/porfolio/etiqueta/:id",  getOneEtiquetasController);
    app.post (PATH_FREFIX + "/porfolio/etiqueta/", jsonParser,  postEtiquetasController );
    app.put (PATH_FREFIX + "/porfolio/etiqueta/", jsonParser,  putEtiquetasController ); 
    app.delete (PATH_FREFIX + "/porfolio/etiqueta/", jsonParser,  deleteEtiquetasController );

                // Tabla Porfolio Galerias.
    app.get (PATH_FREFIX + "/porfolio/galeria/",   getAllGaleriasController );
    //app.get (PATH_FREFIX + "/porfolio/galeria/:id",  getOneGaleriasController);
    app.post (PATH_FREFIX + "/porfolio/galeria/", jsonParser,  postGaleriasController );
    app.put (PATH_FREFIX + "/porfolio/galeria/", jsonParser,  putGaleriasController ); 
    app.delete (PATH_FREFIX + "/porfolio/galeria/", jsonParser,  deleteGaleriasController );
   
                // Tabla Porfolio Fotos. 
    app.get (PATH_FREFIX + "/porfolio/foto/",   getAllFotosController );
    // app.get (PATH_FREFIX + "/porfolio/foto/:id",  getOneFotosController);
    app.post (PATH_FREFIX + "/porfolio/foto/", jsonParser,  postFotosController );
    app.put (PATH_FREFIX + "/porfolio/foto/", jsonParser,  putFotosController ); 
    app.delete (PATH_FREFIX + "/porfolio/foto/", jsonParser,  deleteFotosController );
    
    
    app.use (errorsHandler);

    app.listen (process.env.PORT || 4000, ()=>{
        console.log ("Express funcionando...");
    });
}   catch (err) {
        console.error ("Error del servicio:", err);
}