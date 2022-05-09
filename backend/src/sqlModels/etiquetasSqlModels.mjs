export const getAllEtiquetasSql = `SELECT id, description, ref, galeria FROM etiquetas`;
export const postEtiquetasSql = `INSERT INTO etiquetas (id, description, ref, galeria)   VALUES (?, ?, ?, ?)`;
export const putEtiquetasSql = `UPDATE etiquetas SET galeria = "${request.body.galeria}"  WHERE id = "${request.body.id}"`;
export const deleteEtiquetasSql =
  `DELETE FROM etiquetas WHERE id =` + request.body.id;
