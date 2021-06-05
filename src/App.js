import './App.css';
import React from "react";
import Header from "./componentes/layout/header/header.jsx";
import CapaInicio from "./componentes/layout/CapaInicio/CapaInicio"
import MenuJogos from "./componentes/layout/MenuJogos/MenuJogos"
import Conteudo from "./componentes/layout/Conteudo/Conteudo"


export function App() {
  return (
    <div className="App">
      <div className="body">
        <Header/>
        <CapaInicio/>
        <MenuJogos/>  
        <Conteudo/>
      </div>
    </div>
  );
}

export default App;