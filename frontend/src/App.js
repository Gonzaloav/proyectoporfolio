import "./App.css";
import { useState } from "react/cjs/react.production.min";

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
        {" "}
      </button>
      <imagen alt="Tortugas_1" src="./components/fauna/Tortugas_rune_21.jpeg" />

      <button onClick={adelanteHandler} value=">">
        {" "}
      </button>
    </div>
  );
}

export default App;
