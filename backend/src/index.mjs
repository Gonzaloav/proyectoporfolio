import express from "express";




const PATH_FREFIX = "/api/v0.0"

try { 
    const app = express ();
    const jsonParser = express.json ();

    app.use (requestLog);

    app.get (PATH_FREFIX + "/porfolio/", );
    app.post (PATH_FREFIX + "/porfolio/", );
    app.put (PATH_FREFIX + "/porfolio/", );
    app.delete (PATH_FREFIX + "/porfolio/", );

    app.listen (process.env.PORT || 3000, ()=>{
        console.log ("Express running...");
    });
}   catch (err) {
        console.error ("Error starting service:", err);
}