import React from 'react';
import logo from './logo.svg';
import './App.css';
import CabeceraPrincipal from './componentes/general/CabeceraPrincipal/CabeceraPrincipal';
import MiSuperComponente from './componentes/MiSuperComponente/MiSuperComponente';

function App() {
  return (
    <div className="App">
      <CabeceraPrincipal/>

      <main>
        <MiSuperComponente/>
      </main>

    </div>
  );
}

export default App;
