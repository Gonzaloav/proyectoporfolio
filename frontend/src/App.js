import "./App.css";
import { useState } from "react/cjs/react.production.min";
import { botonGenerico  } from "./components/boton.jsx";

function App() {
  const [flechaanterior, setFlechaanterior] = useState([]);
  const [flechaposterior, setFlechaposterior] = useState ([]);

  function flechaAtrasHandler(event) {
    setFlechaanterior (parseFloat(event.target.value));
  }

  function flechaAdelanteHandler(event) {
    setFlechaposterior (parseFloat(event.target.value));
  }

  return (
    <div>
      <button onClick={flechaAtrasHandler} value="<">
      <img alt="Tortugas_1" src="./components/fauna/Tortugas_rune_21.jpeg" />  
      </button>
      
      <button onClick={flechaAdelanteHandler} value=">">
      <img alt="Tortugas_1" src="./components/fauna/Tortugas_rune_21.jpeg" />  
      </button>
    </div>
  );
}

export default App;
