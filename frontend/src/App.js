import React, { useState, useEffect } from "react";
import "./App.css";
import Miniaturas from "./views/Miniaturas";
import Barrabotones from "./components/Barrabotones/Barrabotones";
import { Link, Route, Routes } from "react-router-dom";

const Inicio = () => <h2> Inicio </h2>;

function App() {
  return (
    <div>
      <Miniaturas />;
      <Barrabotones />;
      <header>
        <h1>Zalo Aller</h1>
        <nav>
          <Link to={"/"}>
            <button>Inicio</button>
          </Link>
          <Link to={"/porfolio/"}>
            <button>Porfolio</button>
          </Link>
          <Link to={"/sobreMi/"}>
            <button>SobreMi</button>
          </Link>
          <Link to={"/contacto/"}>
            <button>Contacto</button>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route index element={<Inicio />} />
        <Route path="/porfolio/" element={<Porfolio />} />
        <Route path="/sobreMi/" element={<SobreMi />} />
        <Route path="/contacto/" element={<Contacto />} />
      </Routes>
    </div>
  );
}
/**<div className="fotosinicio">
            </div>*/
export default App;
