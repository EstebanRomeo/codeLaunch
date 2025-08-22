import React from 'react'
import logo from "./img/code.png"

const Grupo = () => {
  return (
    <div className='containerGrupo'>
        <div className='containerInfoGrupo'>
                    <div className="equipoCard">
            <div className="equipoImg">
                <img src={logo} alt="" />
            </div>
            <h3>GRUPO 1</h3>
            <p className='pGrupo'>GRUPO COMPLETO</p>
            <div className='infoGrupo'>
                <p><strong>Estado: Challenge de nivelación</strong></p>
                <p><strong>Proyecto: Plataforma De Turismo </strong></p>
                <p><strong>Integrantes:</strong> 10</p>
            </div>

            </div>

            <div className="equipoCard">
                <div className="equipoImg">
                    <img src={logo} alt="" />
                </div>
                <h3>GRUPO 2</h3>
                <div className='infoGrupo'>
                    <p><strong>Estado: ---</strong></p>
                    <p><strong>Proyecto: --- </strong></p>
                    <p><strong>Integrantes:</strong> 6</p>
                </div>
                <a href='https://forms.gle/BF6P9heuG7nKTbtJ8'>
                <button className="btnVer">Unirme</button>
                </a>
                </div>

            <div className="equipoCard">
                <div className="equipoImg">
                    <img src={logo} alt="" />
                </div>
                <h3>GRUPO UX/UI</h3>
                <div className='infoGrupo'>
                    <p><strong>Estado: ---</strong></p>
                    <p><strong>Proyecto: --- </strong></p>
                    <p><strong>Integrantes:</strong> 3</p>
                </div>
                <a href='https://forms.gle/BF6P9heuG7nKTbtJ8'>
                <button className="btnVer">Unirme</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Grupo