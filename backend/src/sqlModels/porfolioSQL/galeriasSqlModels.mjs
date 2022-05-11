export const getAllGaleriasSQL = 
  `SELECT id_galerias, description FROM galerias WHERE user_id = ?`;

export const postGaleriasSQL = 
  `INSERT INTO galerias (id_galerias, description) VALUES (?,?)`;

export const putGaleriasSQl = 
  `UPDATE galerias SET description = ? WHERE id_galerias = ? AND user_id = ?`;

export const deleteGaleriasSQL =
  `DELETE FROM galerias WHERE id_galerias = ? AND user_id = ?`;

export const getOneGaleriasByIdSQL =
  `SELECT id_galerias, description FROM galerias WHERE user_id = ? AND user_id = ?`;