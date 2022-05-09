export const getAllFotosSql = `SELECT id, file, galeria FROM fotos`;

export const postFotosSql = `INSERT INTO fotos (id, file, galeria) VALUES (?, ?, ?)`;

export const putFotosSql = `UPDATE fotos SET id = "${request.body.id}"  WHERE id = "${request.body.id}"`;

export const deleteFotosSql = `DELETE FROM Fotos WHERE id =` + request.body.id;
