import "./App.css"

function App(props) {

  function incrementLocalCounter() {
    if (props.localCounter < 10) props.incrementLocalCounter();
  }

  function decrementLocalCounter() {
    if (props.localCounter > 0) props.decrementLocalCounter();
  }

  function incrementVisitorCounter() {
    if (props.visitorCounter < 10) props.incrementVisitorCounter();
  }

  function decrementVisitorCounter() {
    if (props.visitorCounter > 0) props.decrementVisitorCounter();
  }

  return (
    <div className="contenedor-app">
      <div className="resultados">
        <div className="contenedor-contador">
          <div className="contador">{props.localCounter}</div>
          <div className="bandera" id="san-lorenzo">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="contenedor-contador">
          <div className="contador">{props.visitorCounter}</div>
          <div className="bandera" id="boca">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="botonera-app">
        <div>
          <p>Local</p>
          <button className="boton-app" onClick={incrementLocalCounter}>Aumentar</button>
          <button className="boton-app" onClick={decrementLocalCounter}>Disminuir</button>
        </div>
        <div>
          <p>Visitante</p>
          <button className="boton-app" onClick={incrementVisitorCounter}>Aumentar</button>
          <button className="boton-app" onClick={decrementVisitorCounter}>Disminuir</button>
        </div>
      </div>
    </div>
  );
}

export default App;