import React from 'react'
import "./styles/info.css"
import Person from "../../assets/Imagenes/Home/infoIcons/Person.svg"
import Flag from "../../assets/Imagenes/Home/infoIcons/Flag.svg"
import Smile from "../../assets/Imagenes/Home/infoIcons/Smile.svg"
import Logro from "../../assets/Imagenes/Home/infoIcons/Logro.svg"

const Info = () => {
  return (
    <div className='info'>
        <div className='text-center'>
            <h3>Empodera tu voz</h3>
            <h4>Todas tenemos algo que enseñar y aprender.</h4>
            <p>Dentro de nuestra comunidad podrás encontrar</p>
        </div>

        <div className='beneficios d-flex justify-content-center'>
            <div className='d-flex'>
                <img src={Person} className='mb-2'/>
                <p>Enseñar y <br/>aprender</p>
            </div>
            <div className='d-flex'>
                <img src={Flag} className='mb-2'/>
                <p>Una guía de <br/> empoderamiento</p>
            </div>
            <div className='d-flex'>
                <img src={Smile} className='mb-2'/>
                <p>Networking <br/> co-creativo</p>
            </div>
            <div className='d-flex'>
                <img src={Logro} className='mb-2'/>
                <p>Economía <br/> Sostenible</p>
            </div>
        </div>

        <div className='stats d-flex justify-content-center w-75 mx-auto'>
            <div>
                <p>+350</p>
                <p>Mentores en línea</p>
            </div>
            <div>
                <p>+2500</p>
                <p>Estudiantes</p>
            </div>
            <div>
                <p>32</p>
                <p>Departamentos</p>
            </div>
        </div>
        
    </div>
  )
}

export default Info