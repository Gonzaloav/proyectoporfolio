
import { useState } from "react";


function App() {


  const [flecha, setFlecha] = useState([]);
  
  // función flecha ">" o "<"
  function flechaHandler(event) {
    setFlecha (event.target.value);
  }
 // función flecha anterior "<"
 function restaHandler(event) {
    flechaHandler = (setFlecha --);
  } 
  // función flecha posterior ">"
  function sumaHandler(event) {
    flechaHandler = (setFlecha ++);  
  }

  return (
    <div>
      <button onClick={restaHandler} value = "-"> - </button>
      
      <button onClick={sumaHandler} value = "+">  +   </button>
    </div>
  );
}

// <img alt="Tortugas_1" src="./components/fauna/Tortugas_rune_21.jpeg" />  

export default App;
