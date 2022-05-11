import express from "express";
import  { db } from "./sqlModels/db.mjs";
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


import { requestLog } from "./middeware/requestsLog.mjs"; 
import { authMiddleware } from "./middeware/authorization.mjs";   
import { errorsHandler } from "./middeware/errorsHandler.mjs";


const PATH_FREFIX = "http://Localhost:3000/api/v0.0/";


try { 
    const app = express ();
    const jsonParser = express.json ();

    app.use (requestLog);


    app.get (PATH_FREFIX + "/porfolio/",  authMiddleware, getAllEtiquetasController );
    app.get (PATH_FREFIX + "/porfolio/:id", authMiddleware, getOneEtiquetasController);
    app.post (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, postEtiquetasController );
    app.put (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, putEtiquetasController ); 
    app.delete (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, deleteEtiquetasController );

    app.get (PATH_FREFIX + "/porfolio/",  authMiddleware, getAllGaleriasController );
    app.get (PATH_FREFIX + "/porfolio/:id", authMiddleware, getOneGaleriasController);
    app.post (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, postGaleriasController );
    app.put (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, putGaleriasController ); 
    app.delete (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, deleteGaleriasController );
   
    app.get (PATH_FREFIX + "/porfolio/",  authMiddleware, getAllFotosController );
    app.get (PATH_FREFIX + "/porfolio/:id", authMiddleware, getOneFotosController);
    app.post (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, postFotosController );
    app.put (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, putFotosController ); 
    app.delete (PATH_FREFIX + "/porfolio/", jsonParser, authMiddleware, deleteFotosController );
    
    
    app.use (errorsHandler);

    app.listen (process.env.PORT || 3000, ()=>{
        console.log ("Express funcionando...");
    });
}   catch (err) {
        console.error ("Error del servicio:", err);
}