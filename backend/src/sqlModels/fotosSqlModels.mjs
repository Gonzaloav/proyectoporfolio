

export const getAllFotosSQL = 
    `SELECT galeria_fotos, id, file FROM fotos WHERE user_id = ?`

export const postFotosSQL = 
    `INSERT INTO fotos (galeria_fotos, id_fotos, file ) VALUES (?, ?, ?)`;

export const putFotosSQl = 
    `UPDATE galerias SET id_fotos = ?, file = ?  WHERE galeria_fotos = ? AND user_id = ?`;

export const deleteFotosSQL = 
    `DELETE FROM Fotos WHERE galeria_fotos = ? AND user_id = ?`;
    