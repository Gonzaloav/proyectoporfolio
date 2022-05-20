import "./App.css";
import { useState } from "react/cjs/react.production.min";
import { botonGenerico  } from "./components/boton.jsx";

function App() {
  const [imagen, setImagen] = useState([]);

  function atrasHandler(event) {
    setImagen(event.target.value);
  }

  function adelanteHandler(event) {
    setImagen(event.target.value);
  }

  return (
    <div>
      <button onClick={atrasHandler} value="<">
      <img alt="Tortugas_1" src="./components/fauna/Tortugas_rune_21.jpeg" />  
      </button>
      
      <button onClick={adelanteHandler} value=">">
      <img alt="Tortugas_1" src="./components/fauna/Tortugas_rune_21.jpeg" />  
      </button>
    </div>
  );
}

export default App;
