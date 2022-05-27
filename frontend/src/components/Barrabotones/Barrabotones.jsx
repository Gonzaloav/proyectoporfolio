import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Barrabotones = () => {
  const backendURL = "http://localhost:3000/api/v0.0/";

  const [porfolio, setPorfolio] = useState([]);

  async function fetchPorfolio() {
    const response = await fetch(backendURL + "porfolio/");
    const data = await response.json();
    setPorfolio(data);
  }

  useEffect(() => {
    fetchPorfolio();
  }, []);

  return (
    <div class="container">
      <div class="porfolio">
        <img src="paisaje.jpg" className="logo" alt="Main Logo" />
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {porfolio.map((item) => (
            <li>
              <Link to={"/profolio/" + item.galeria}>{item.description}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Barrabotones;
