import React from "react";
import logo from './logo.svg';
import './App.css';
import Generator from './Pages/Home';
import GeneratorBack from './Pages/Back';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    

      <div className="App">
        <div className="header"> 
          <nav> 
            <div>
             <a className="links"><Link to="/front" className="links" >Front-End</Link></a>
             <a className="links"><Link to="/back" className="links">Back-End</Link></a>
            </div>
          </nav>
        </div>
          <p className="descricao">Bem vindos ao Challenge Now, se você está aqui acredito que esteja buscando um desafio para você,<br/>
            e nos vamos lhe proporcionar os melhores desafios para você aprender, se testar e ver onde vai sua capacidade.<br/>
            Vamos la, dê o seu melhor!</p>
        <Routes>
          <Route path="/front" element={<Generator />} />
          <Route path="/back" element={<GeneratorBack />} />
        </Routes>
      </div>
    
  );
}

export default App;
