import React from 'react'
import './styles/Aprendo.css'
import bienvenida from '../../assets/Imagenes/Aprendo/bienvenida.png'
import enseno from '../../assets/Imagenes/Aprendo/yoenseno.png'
import card1 from '../../assets/Imagenes/Aprendo/card1.png'


function Aprender() {
  return (
    <>
        <div className="mi-componente">
        <div className="row offset-1">
            <div className="col-3 img_course">
                <img src={bienvenida}/>
                <h5 className="mt-2">Conocemos tu aprendizaje</h5>
            </div>
            <hr className="mt-3"></hr>
        </div>
        <div id='box' className="row offset-1">
            <div className="col-3">
                <img src={enseno}/>
            </div>
        </div>
        <div className="row offset-1 mt-3">
            <div className="col-4">
                <img src={card1}/>
            </div>
            <div className="col-4">
                <img src={card1}/>
            </div>
            <div className="col-4">
                <img src={card1}/>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Aprender