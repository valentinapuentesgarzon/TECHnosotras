import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import mosaico from '../../../assets/Imagenes/Footer/mosaico.png'
import rich from '../../../assets/Imagenes/Footer/logo.png'
import redes from '../../../assets/Imagenes/Footer/redes.png'

function Footer() {
  return (
    <div className="mi-componente">
        <div className="row offset-1">
            <div className="col-3">
                <img src={rich}/>
                <p className="mt-3">Personalizamos tu carrera Tec/Nosotr@s en lo que mas te gusta, queremos conocerte y apoyarte en todo el camino para que logres tus propósitos personales y oportunidades</p>
                <img className="mt-1 img-fluid" src={redes} />
            </div>
            <div className="col-2">
                <strong>Enlaces</strong>
                <p className="mt-2">Home</p>
                <p className="mt-2">Quienes somos</p>
                <p className="mt-2">Nuestro talento</p>
                <p className="mt-2">Cursos</p>
            </div>
            <div className="col-2">
                <strong>Participa</strong>
                <p className="mt-2">Mentores</p>
                <p className="mt-2">Aprendices</p>
                <p className="mt-2">Eventos</p>
                <p className="mt-2">Mujeres en UX</p>
            </div>
            <div className="col-2">
                <strong>Aliados</strong>
                <p className="mt-2">Fundación Telefónica</p>
                <p className="mt-2">Google</p>
                <p className="mt-2">Mintic</p>
                <p className="mt-2">Platzi</p>
            </div>
            <div className="col-3">
                <strong>@Tecnosotras_col</strong><br></br>
                <img src={mosaico} className="img-fluid mt-1"/>
            </div>
   
        </div>
        <hr className="mt-5"></hr>
        <div className="row">
            <div className="col-12">
                <p className="mt-1 mx-auto d-flex justify-content-center">Todos los derechos reservados Tecnosotras © 2023 Empodera tu voz</p>
            </div>
        </div>
    </div>
  )
}

export default Footer