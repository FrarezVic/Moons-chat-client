import React, { useState } from 'react';
import socket from './componentes/socket';
import Chat from './componentes/chat';

import './App.css';
function App() {

  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    if(nombre !== ""){
      setRegistrado(true);
    }
  }

  return (
    <div className="App">
      {
        !registrado &&
        <div className="App">
          <form on onSubmit={registrar}>
            <label htmlFor="">Introduzca su nombre: </label>
            <input value={nombre} onChange={e => setNombre(e.target.value)}/>
            <button>Ir al chat</button>
          </form>
        </div>
      }
      {
        registrado &&
        <Chat nombre={nombre}/>
      }
    </div>
  );
}

export default App;
