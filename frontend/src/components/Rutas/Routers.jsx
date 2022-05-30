
import { Route, Routes } from "react-router-dom";

const Routers = () => {

    const Inicio = () => <h3> Inicio </h3>;
    const Porfolio = ()=> <h3> Porfolio </h3>;
    const Sobremi = ()=> <h3> Sobre mi </h3>;
    const Contacto = () => <h3> Contacto </h3>;

    return (
        <div>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route index element={<Inicio />} />
  
         
  
          <Route path="/porfolio/" element={<Porfolio />} />
          <Route path="/sobremi/" element={<Sobremi />} />
          <Route path="/contacto/" element={<Contacto />} />
  
          <Route path="*" element={<h1>404</h1>}/>
  
        </Routes>
      </div>

    );
}
/** <Route path='/etiquetas/:galeria' element={<Porfolio/>}/>
        <Route path='/galerias/:id_galerias'  element={<Galerias/>}/>
        <Route path='/fotos/:id_galerias'  element={<Fotos/>}/>
        */
export default Routers;