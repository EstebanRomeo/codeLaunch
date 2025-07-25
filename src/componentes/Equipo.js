import React from 'react'
import "./EstilosBanner.css"
import { Link } from 'react-router-dom';
import DecryptedText from './DecryptedText';
import RotatingText from './RotatingText'


const Equipo = () => {
  return (
    <div className='containerEquipo'>
        <div className='infoEquipo'>
          
            <h1><DecryptedText text="¿QUERES SUMARTE?" /></h1>
                    <div className="Rotating">
            <span className="creative">Suma</span>
            <RotatingText
            texts={[
              'Experiencia!',
              'Confianza!',
              'Creatividad!',
              'Crecimiento!',
              'Aprendizaje!',
              'Organización!',
              'Liderazgo!',
              'Autonomía!',
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#6a4dff] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            rotationInterval={2000}
          />
        </div>
            <a href='https://forms.gle/BF6P9heuG7nKTbtJ8'>
            <button className='btnUnirme'>UNIRME</button>
            </a>
            
        </div>


    </div>
  )
}

export default Equipo