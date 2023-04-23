import React from 'react'
import testimonio from '../../assets/Imagenes/testimonios/usuario.png'
import comillas from '../../assets/Imagenes/testimonios/comillas.png'
import estrellas from '../../assets/Imagenes/testimonios/estrellas.png'
import '../home/styles/testimonios.css'
import Carousel from 'react-bootstrap/Carousel';

function Testimonios() {
    return (
        <div className="testimonio">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div className='container'>
                        <div className="imagen">
                            <img src={testimonio} alt="testimonioUno" />
                        </div>
                        <div className="inf">
                            <img src={comillas} alt="comillas" />
                            <p>La comunidad de Tecnosotras me ha ayudado a fortalecer mis habilidades y en crecer con mi emprendimiento, aprecio los mentores que tienen.</p>
                            <img id='estrellas' src={estrellas} alt="Calificación" />
                            <h4>Paula Vélez</h4>
                            <p id='rol'>Estudiante de Marketing Digital</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div className='container'>
                        <div className="imagen">
                            <img src={testimonio} alt="testimonioUno" />
                        </div>
                        <div className="inf">
                            <img src={comillas} alt="comillas" />
                            <p>La comunidad de Tecnosotras me ha ayudado a fortalecer mis habilidades y en crecer con mi emprendimiento, aprecio los mentores que tienen.</p>
                            <img id='estrellas' src={estrellas} alt="Calificación" />
                            <h4>Paula Vélez</h4>
                            <p id='rol'>Estudiante de Marketing Digital</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container'>
                        <div className="imagen">
                            <img src={testimonio} alt="testimonioUno" />
                        </div>
                        <div className="inf">
                            <img src={comillas} alt="comillas" />
                            <p>La comunidad de Tecnosotras me ha ayudado a fortalecer mis habilidades y en crecer con mi emprendimiento, aprecio los mentores que tienen.</p>
                            <img id='estrellas' src={estrellas} alt="Calificación" />
                            <h4>Paula Vélez</h4>
                            <p id='rol'>Estudiante de Marketing Digital</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Testimonios
