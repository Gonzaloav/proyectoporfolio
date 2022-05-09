

export function getAllEtiquetasController (request, response) {
    db.all(
        `SELECT id, description, ref, galeria FROM etiquetas`,
        (err,data)=>{
            if ( err ) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}

export function postEtiquetasController (request, response) {
    const { id, description, ref, galeria } = request.body;
    db.run(
        `INSERT INTO etiquetas (id, description, ref, galeria) 
        VALUES (${id}, "${description}", ${ref}, ${galeria}  )`,
        (err)=>{
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

export function putEtiquetasController (request, response) {
    const updatedEtiquetas = request.body;
    const oldEtiquetasIdx = etiquetas.findIndex(
        item => item.id === updatedEtiquetas.id
    )
    etiquetas[oldEtiquetasIdx] = updatedEtiquetas;
    response.sendStatus(200);
}

export function deleteEtiquetasController (request, response) {
    const updatedEtiquetas = request.body;
    const oldEtiquetasIdx = etiquetas.findIndex(
        item => item.id === updatedEtiquetas.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200)
}