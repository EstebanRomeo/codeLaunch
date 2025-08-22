import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './componentes/Banner'
import QueEs from './componentes/QueEs'
import Objetivos from './componentes/Objetivos'
import Proyectos from './componentes/Proyectos'
import Equipo from './componentes/Equipo'
import Grupo from './componentes/Grupo';
import Impacto from './componentes/Impacto';


const Inicio = () => {
  return (
    <div>
        <Banner />
        <QueEs />
        <Objetivos />
        <Impacto />
        <Grupo />
        <Proyectos />
        <Equipo />
    </div>
  )
}

export default Inicio