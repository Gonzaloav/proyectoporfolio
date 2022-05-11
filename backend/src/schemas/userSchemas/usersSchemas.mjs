export const userSchema = {
  $id: "/user",
  type: "object",
  properties: {
    name: {
      description: "Nombre del Usuario",
      type: "string",
    },
    password: {
      description: "Contraseña del Usuario",
      type: "string",
    },
  },
  additionalProperties: false,
  required: ["name", "password"],
};
