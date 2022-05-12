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


import { requestLog } from "./middeware/requestsLog.mjs"; 
import { authMiddleware } from "./middeware/authorization.mjs";   
import { errorsHandler } from "./middeware/errorsHandler.mjs";


const PATH_FREFIX = "http://Localhost:3000/api/v0.0/";


try { 
    const app = express ();
    const jsonParser = express.json ();

    app.use (requestLog);

                // Tabla Usuario
    app.get (PATH_FREFIX + "/users/",  authMiddleware, getAllUsersController );
    app.post (PATH_FREFIX + "/users/", jsonParser, authMiddleware, postUsersController );
    app.post (PATH_FREFIX + "/users/", jsonParser, authMiddleware, postUsersController );
    app.put (PATH_FREFIX + "/users/", jsonParser, authMiddleware, putUsersController ); 
    app.delete (PATH_FREFIX + "/users/", jsonParser, authMiddleware, deleteUsersController );
                // Tabla Porfolio Etiquetas.
    app.get (PATH_FREFIX + "/porfolio/etiqueta/",  authMiddleware, getAllEtiquetasController );
    app.get (PATH_FREFIX + "/porfolio/etiqueta/:id", authMiddleware, getOneEtiquetasController);
    app.post (PATH_FREFIX + "/porfolio/etiqueta/", jsonParser, authMiddleware, postEtiquetasController );
    app.put (PATH_FREFIX + "/porfolio/etiqueta/", jsonParser, authMiddleware, putEtiquetasController ); 
    app.delete (PATH_FREFIX + "/porfolio/etiqueta/", jsonParser, authMiddleware, deleteEtiquetasController );

                // Tabla Porfolio Galerias.
    app.get (PATH_FREFIX + "/porfolio/galeria/",  authMiddleware, getAllGaleriasController );
    app.get (PATH_FREFIX + "/porfolio/galeria/:id", authMiddleware, getOneGaleriasController);
    app.post (PATH_FREFIX + "/porfolio/galeria/", jsonParser, authMiddleware, postGaleriasController );
    app.put (PATH_FREFIX + "/porfolio/galeria/", jsonParser, authMiddleware, putGaleriasController ); 
    app.delete (PATH_FREFIX + "/porfolio/galeria/", jsonParser, authMiddleware, deleteGaleriasController );
   
                // Tabla Porfolio Fotos. 
    app.get (PATH_FREFIX + "/porfolio/foto/",  authMiddleware, getAllFotosController );
    app.get (PATH_FREFIX + "/porfolio/foto/:id", authMiddleware, getOneFotosController);
    app.post (PATH_FREFIX + "/porfolio/foto/", jsonParser, authMiddleware, postFotosController );
    app.put (PATH_FREFIX + "/porfolio/foto/", jsonParser, authMiddleware, putFotosController ); 
    app.delete (PATH_FREFIX + "/porfolio/foto/", jsonParser, authMiddleware, deleteFotosController );
    
    
    app.use (errorsHandler);

    app.listen (process.env.PORT || 3000, ()=>{
        console.log ("Express funcionando...");
    });
}   catch (err) {
        console.error ("Error del servicio:", err);
}