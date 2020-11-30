import { useState } from "react";
import "./App.css"

function App() {

  const [localCounter, setLocalCounter] = useState(0);
  const [visitorCounter, setVisitorCounter] = useState(0);

  function incrementLocalCounter() {
    if (localCounter < 9) setLocalCounter(localCounter+1);
  }

  function decrementLocalCounter() {
    if (localCounter > 0) setLocalCounter(localCounter-1);
  }

  function incrementVisitorCounter() {
    if (visitorCounter < 9) setVisitorCounter(visitorCounter+1);
  }

  function decrementVisitorCounter() {
    if (visitorCounter > 0) setVisitorCounter(visitorCounter-1);
  }

  return (
    <div className="contenedor-app">
      <div className="resultados">
        <div className="contenedor-contador">
          <div className="contador">{localCounter}</div>
          <p>Local</p>
        </div>
        <div className="contenedor-contador">
          <div className="contador">{visitorCounter}</div>
          <p>Visitante</p>
        </div>
      </div>
      <div className="botonera-app">
        <div>
          <p>L</p>
          <button className="boton-app" onClick={incrementLocalCounter}>Aumentar</button>
          <button className="boton-app" onClick={decrementLocalCounter}>Disminuir</button>
        </div>
        <div>
          <p>V</p>
          <button className="boton-app" onClick={incrementVisitorCounter}>Aumentar</button>
          <button className="boton-app" onClick={decrementVisitorCounter}>Disminuir</button>
        </div>
      </div>
    </div>
  );
}

export default App;