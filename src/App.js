import React from 'react';
import socket from './componentes/socket';

import './App.css';
function App() {

  socket.emit('conectado', "hola desde el cliente");

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
