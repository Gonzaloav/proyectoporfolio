export const newGaleriaSchema = {
  $id: "/galeriaNueva",
  type: "object",
  properties: {
    description: {
      description: "Descripción de la galería",
      type: "string",
    },
  },
  additionalProperties: false,
  required: ["description"],
};

export const galeriaSchema = {
  $id_galeria: "/galerias",
  type: "object",
  properties: {
    $id_galeria: {
      description: "Identificador único de la galeria",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
    description: {
      description: "Descripción de la galeria",
      type: "string",
    },
  },
  additionalProperties: false,
  required: ["id_galeria", "description"],
};

export const deleteGaleriaSchema = {
  $id_galeria: "/deleteGaleria",
  type: "object",
  properties: {
    $id_galeria: {
      description: "Identificador único de cada galeria",
      type: "integer",
      not: {
        exclusiveMaximum: 0,
      },
    },
  },
  additionalProperties: false,
  required: ["id_galeria"],
};
