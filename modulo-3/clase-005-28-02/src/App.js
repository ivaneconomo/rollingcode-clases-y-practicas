import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador/Contador';
import React, { useState } from "react";


function App() {
  const [boolean, setBoolean] = useState(false)
  console.log('Soy el App');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => setBoolean(!boolean)}>Cambiar Boolean</button>
      {boolean ? <Contador data={boolean}/> : 'No hay componente'}
    </div>
  );
}

export default App;
