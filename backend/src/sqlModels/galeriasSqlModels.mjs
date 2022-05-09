export const getAllGaleriasSql = `SELECT id, description FROM galerias`;

export const postGaleriasSql = `INSERT INTO productos(id, description) VALUES (?,?)`;

export const putGaleriasSql = `UPDATE galerias SET id = "${request.body.id}"  WHERE id = "${request.body.id}"`;

export const deleteGaleriasSql =
  `DELETE FROM galerias WHERE id =` + request.body.id;
