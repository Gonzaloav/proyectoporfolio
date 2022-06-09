import React from "react";
import { Route, Routes } from "react-router-dom";




export const RoutersInicio = () => {
  const Inicio = () => <h3> Inicio </h3>;
  const Porfolio = () => <h3> Porfolio </h3>;
  const Sobremi = () => <h3> Sobre mi </h3>;
  const Contacto = () => <h3> Contacto </h3>;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route index element={<Inicio />} />

        <Route path="/porfolio/" element={<Porfolio />} />
        <Route path="/sobremi/" element={<Sobremi />} />
        <Route path="/contacto/" element={<Contacto />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

// Rutas de vistas porfolio.-
export const RoutersPorfolio = () => {
  const Porfolio = () => <h2> Porfolio </h2>;
  const VistaPortada = () => <h1> VistaPortada </h1>;
  const VistaMiniaturas = () => <h2> VistaMiniaturas </h2>;
  const VistaCarrusel = () => <h3> VistaCarrusel </h3>;
  const VistaFotoAmpliada = () => <h3> VistaFotoAmpliada </h3>;

  return (
    <div>
      <Routes>
        <Route path="/porfolio/" element={<Porfolio />} />
        <Route index element={<Porfolio />} />

        <Route path="/porfolio/vistaportada/" element={<VistaPortada />} />
        <Route path="/porfolio/vistaminiaturas/" element={<VistaMiniaturas />}/>
        <Route path="/porfolio/vistacarrusel/" element={<VistaCarrusel />} />
        <Route path="/porfolio/vistafotoampliada/" element={<VistaFotoAmpliada />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};
/** <Route path='/etiquetas/:galeria' element={<Porfolio/>}/>
        <Route path='/galerias/:id_galerias'  element={<Galerias/>}/>
        <Route path='/fotos/:id_galerias'  element={<Fotos/>}/>
        */
