import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header/Header'
import Home from './componentes/Home/Home';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Elimina el componente Navbar */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Agrega más rutas aquí si es necesario */}
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
