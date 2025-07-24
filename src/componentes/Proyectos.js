import React from 'react'
import burger from "./img/BurgerApp4.PNG"
import "./EstilosBanner.css"

const Proyectos = () => {
  return (
    <div className='containerProyectos'>
        <div className='containerImgProy'>
            <img src={burger} className='imgBurger'></img>
        </div>
        <div className='containerInfoProyectos'>
            <h2>PROYECTOS EN MARCHA</h2>
            <h4>SISTEMA DE PEDIDOS DE HAMBURGUESAS</h4>
            <p>App web con login, carrito, personalizacion de pedidos, sistema de tickets.</p>
            <p>REACT JS - NODE JS - SQLITE</p>
        </div>
    </div>
  )
}

export default Proyectos