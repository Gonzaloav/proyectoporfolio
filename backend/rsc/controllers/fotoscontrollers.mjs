

export function getAllFotosController (request, response) {
    db.all(
        `SELECT id, file, galeria FROM fotos`,
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

export function postFotosController (request, response) {
    const { id, file, galeria } = request.body;
    db.run(
        `INSERT INTO fotos (id, file, galeria) VALUES (${id}), "${file}", (${galeria})  `,
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

export function putFotosController (request, response) {
    const updatedFotos = request.body;
    const oldFotosIdx = fotos.findIndex(
        item => item.id === updatedFotos.id
    )
    fotos[oldFotosIdx] = updatedFotos;
    response.sendStatus(200);
}

export function deleteFotosController (request, response) {
    const updatedFotos = request.body;
    const oldFotosIdx = fotos.findIndex(
        item => item.id === updatedFotos.id
    )
    fotos.splice(oldFotosIdx,1);
    response.sendStatus(200)
}