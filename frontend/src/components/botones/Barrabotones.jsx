import { Link } from "react-router-dom";

const Barrabotones = () => {
  return (
    <nav>
      <ul>
        <h3> Zalo Aller </h3>
        <Link to="/">Inicio</Link>
        <Link to="/porfolio/"> Porfolio </Link>
        <Link to="/sobremi/"> Sobre Mi</Link>
        <Link to="/contacto/"> Contacto </Link>
        <Link to="/porfolio/vistaportada/"> VistaPortada</Link>
        <Link to="/porfolio/vistaminiaturas/"> VistaMiniaturas</Link>
        <Link to="/porfolio/vistacarrusel/"> VistaCarrusel</Link>
        <Link to="/porfolio/vistafotoampliada/"> VistaFotoAmpliada </Link>
      </ul>
    </nav>
  );
};

export default Barrabotones;
