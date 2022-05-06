

export function getAllGaleriasController (request, response) {
    db.all(
        `SELECT id, description, FROM galerias`,
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

export function postGaleriasController (request, response) {
    const { id, description } = request.body;
    db.run(
        `INSERT INTO galerias (id, description) VALUES (${id}), "${description}" `,
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

export function putGaleriasController (request, response) {
    const updatedGalerias = request.body;
    const oldGaleriasIdx = galerias.findIndex(
        item => item.id === updatedGalerias.id
    )
    galerias[oldGaleriasIdx] = updatedGalerias;
    response.sendStatus(200);
}

export function deleteGaleriasController (request, response) {
    const updatedGalerias = request.body;
    const oldGaleriasIdx = galerias.findIndex(
        item => item.id === updatedGalerias.id
    )
    galerias.splice(oldGaleriasIdx,1);
    response.sendStatus(200)
}