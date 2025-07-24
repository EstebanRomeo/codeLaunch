import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './componentes/Banner'
import QueEs from './componentes/QueEs'
import Objetivos from './componentes/Objetivos'
import Proyectos from './componentes/Proyectos'
import Equipo from './componentes/Equipo'


const Inicio = () => {
  return (
    <div>
        <Banner />
        <QueEs />
        <Objetivos />
        <Proyectos />
        <Equipo />
    </div>
  )
}

export default Inicio