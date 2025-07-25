import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Formulario from './Formulario';
import { SpeedInsights } from "@vercel/speed-insights/react"




function App() {

  return (
    <Router>
      <SpeedInsights/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
