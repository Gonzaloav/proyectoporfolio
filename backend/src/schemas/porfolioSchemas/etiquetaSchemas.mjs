export const newEtiquetaSchema = {
  $galeria: "/etiquetaNueva",
  type: "object",
  properties: {
    id_etiqueta: {
      description: "identificador  único de Etiqueta",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
    description: {
      description: "Nombre de la galeria",
      type: "string",
    },
    ref: {
      description: "Numero a la etiqueta que pertenece ",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
  },
  additionalProperties: false,
  required: ["id_etiqueta", "description", "ref"],
};

export const etiquetaSchema = {
  $galeria: "/etiqueta",
  type: "object",
  properties: {
    id_etiqueta: {
      description: "Idendificador único de la etiqueta",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
    description: {
      description: "Numero a la etiqueta  que pertenece ",
      type: "string",
    },
    ref: {
      description: "Numero a la etiqueta que pertenece",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
    $galeria: {
      description: "Identificador único de cada galeria",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
  },
  additionalProperties: false,
  required: ["id_Etiquetas", "description", "ref", "galeria"],
};

export const deleteEtiquetaSchema = {
  $galeria: "/deleteEtiqueta",
  type: "object",
  properties: {
    $galeria: {
      description: "Identificador único de cada galeria",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
  },
  additionalProperties: false,
  required: ["galeria"],
};
