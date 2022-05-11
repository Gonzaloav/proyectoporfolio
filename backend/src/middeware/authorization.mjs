import { db } from "../sqlModels/db.mjs";
import { authenticateUserSQL } from "../sqlModels/usuarioSQL/userSqlModels.mjs";

function decodeAuthBasic(headerContent) {
  try {
    const [method, token] = headerContent.split(" ");
    const tokenString = atob(token);
    const [username, password] = tokenString.split(":");
    return { method, username, password };
  } catch (error) {
    throw "Autenticación mal formada";
  }
}

export function authMiddleware(request, response, next) {
  try {
    const { method, username, password } = decodeAuthBasic(
      request.headers.authorization
    );

    if (method != "Basic")
      throw "Método de autorización no válido. Use Básico, en su lugar.";

    db.get(authenticateUserSQL, [username, password], (err, data) => {
      if (err) throw err;
      if (data) {
        // Guardar los datos que se van a ir resolviendo en los middeware. Linea 28
        response.locals.authorization = { name: data.name, id: data.id };
        next();
      } else throw "Error en la autorización.";
    });
  } catch (err) {
    console.error(err);
    response.sendStatus(401);
    return;
  }
}
