import React from "react";
import "./App.css";
//import Miniaturas from "./views/Miniaturas";
//import Barrabotones from "./components/Barrabotones/Barrabotones";
import HeaderLink from "./components/HeaderLink/HeaderLink";
import Routers from "./components/Rutas/Routers";
import { PorfolioLink, RoutersPorfolio} from "./components/Porfolio/Porfolio";


/** <div style={{
      backgroundImage: "url(/background.jpg)",
      height: "300px",
      backgroundRepeat: "no-repeat"
    }} >
      <h1>Hello</h1>
    </div>
 * 
 * <div className="fotosinicio">
            </div>*/

function App() {
  return (
    <div>
     
      <PorfolioLink/>
    
      <RoutersPorfolio/>
     
    </div>
  );
}

export default App;
