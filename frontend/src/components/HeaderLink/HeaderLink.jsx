import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <h2>Zalo Aller</h2>
          <Link to="/"> Inicio </Link>
          <Link to="/porfolio/"> Porfolio </Link>
          <Link to="/sobremi/"> Sobre Mi</Link>
          <Link to="/contacto/"> Contacto </Link>
        </nav>
      </header>
    </div>
  );
};

export default HeaderLink;
