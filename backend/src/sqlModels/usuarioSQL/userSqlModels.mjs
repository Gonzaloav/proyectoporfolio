export const getAllUsersSQL = `SELECT ALL users_id, name FROM users `;

export const postUsersSQL = `INSERT INTO users (name, password ) VALUES ( ?, ?)`;

export const putUsersSQL = `UPDATE users SET users_id = ?, password = ?  WHERE name = ? AND users_id = ?`;

export const deleteUsersSQL = `DELETE FROM users WHERE users_id= ? `;



export const authenticateUserSQL = `SELECT id, name FROM users WHERE name=? AND password=?`;

// export const addUserSQL = `INSERT INTO users(name, password) VALUES (?, ?)`;
