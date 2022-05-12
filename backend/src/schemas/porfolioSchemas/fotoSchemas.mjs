export const newFotoSchema = {
  $galeria_fotos: "/fotosNuevas",
  type: "object",
  properties: {
    file: {
      description: "descripción dentro de file",
      type: "string",
    },
    id_fotos: {
      description: "id de cada foto",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
  },
  additionalProperties: false,
  required: ["file", "id_fotos"],
};

export const fotoSchema = {
  $galeria_fotos: "/fotos",
  type: "object",
  properties: {
    id_fotos: {
      description: "Identificador único de cada foto",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
    file: {
      description: "descripción de la foto",
      type: "string",
    },
    $galeria_fotos: {
      description: "Identificador único de cada galeria",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
  },
  additionalProperties: false,
  required: ["galeria_fotos", "id_fotos", "file"],
};

export const deleteFotosSchema = {
  $galeria_fotos: "/deleteFotos",
  type: "object",
  properties: {
    $galeria_fotos: {
      description: "Identificador único de cada galeria",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
  },
  additionalProperties: false,
  required: ["galeria_fotos"],
};
