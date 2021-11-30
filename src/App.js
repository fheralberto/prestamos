import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";

function App() {
  // Define el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");

  // Sólo se puede retornar un elemento
  return (
    <div className="app">
      <div className="container">
        <Header
          titulo="Cotizador de Préstamos"
        />
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
        />
      </div>
    </div>
  );
}

export default App;
