import { Link } from "react-router-dom";

export const HeaderLink = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <h3>Zalo Aller</h3>
          <Link to="/"> Inicio </Link>
          <Link to="/porfolio/"> Porfolio </Link>
          <Link to="/sobremi/"> Sobre Mi</Link>
          <Link to="/contacto/"> Contacto </Link>
        </nav>
      </header>
    </div>
  );
};

export const PorfolioLink = () => {
  return (
    <div className="porfolioLink">
      <header>
        <nav>
          <h3>Zalo Aller</h3>
          <Link to="/porfolio/"> Porfolio</Link>
          <Link to="/porfolio/vistaportada/"> VistaPortada</Link>
          <Link to="/porfolio/vistaminiaturas/"> VistaMiniaturas</Link>
          <Link to="/porfolio/vistacarrusel/"> VistaCarrusel</Link>
          <Link to="/porfolio/vistafotoampliada/"> VistaFotoAmpliada </Link>
        </nav>
      </header>
    </div>
  );
};
