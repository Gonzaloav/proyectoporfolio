export const getAllEtiquetasSQL = 
  `SELECT id_etiquetas, description, ref, galeria FROM etiquetas WHERE user_id = ?`;

export const postEtiquetasSQL = 
  `INSERT INTO etiquetas (id_etiquetas, description, ref, galeria)   VALUES (?, ?, ?, ?)`;

export const putEtiquetasSQL = 
  `UPDATE etiquetas SET id_etiquetas, description = ?, ref = ? WHERE galerias = ? AND user_id = ?`;

export const deleteEtiquetasSQL =
  `DELETE FROM etiquetas WHERE galeria = ? AND user_id = ?`;
