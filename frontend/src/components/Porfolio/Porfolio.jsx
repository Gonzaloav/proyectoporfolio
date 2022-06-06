import { Link, Route, Routes } from "react-router-dom";

export const PorfolioLink = () => {
    return (
      <div className="porfolioLink">
        <header>
          <nav>
            <h3>Zalo Aller</h3>
            <Link to="/porfolio/"> Portada </Link>
            <Link to="/porfolio/vistaminiaturas/"> VistaMiniaturas</Link>
            <Link to="/porfolio/vistacarrusel/"> VistaCarrusel</Link>
            <Link to="/porfolio/vistafotoampliada/"> VistaFotoAmpliada </Link>  
          </nav>
        </header>
      </div>
    );
  };



export const RoutersPorfolio = () => {

    const Portada = () => <h1> Portada </h1>;
    const VistaMiniaturas = ()=> <h2> VistaMiniaturas </h2>;
    const VistaCarrusel = ()=> <h3> VistaCarrusel </h3>;
    const VistaFotoAmpliada = () => <h3> VistaFotoAmpliada </h3>;

    return (
        <div>
            <Routes> 
                    
                    <Route path="/porfolio/" element={<Portada />} />
                    <Route index element={<Portada />} />

                    <Route path="/porfolio/vistaminiaturas/" element={<VistaMiniaturas />} />
                    <Route path="/porfolio/vistacarrusel/" element={<VistaCarrusel />} />
                    <Route path="/porfolio/vistafotoampliada/" element={<VistaFotoAmpliada />} /> 

                    <Route path="*" element={<h1>404</h1>}/>        
            </Routes>
        </div>
    );
}

