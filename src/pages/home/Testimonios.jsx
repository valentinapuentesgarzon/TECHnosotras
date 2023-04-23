import React from 'react'
import testimonio from '../../assets/Imagenes/testimonios/usuario.png'
import testimonio2 from '../../assets/Imagenes/testimonios/testimonio2.png'
import testimonio3 from '../../assets/Imagenes/testimonios/testimonio3.png'

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
                            <img src={testimonio2} alt="testimonioUno" />
                        </div>
                        <div className="inf">
                            <img src={comillas} alt="comillas" />
                            <p>Como emprendedora, siempre busco maneras de mejorar mi negocio y llegar a más clientes. Implementar tecnología ha sido una de las mejores decisiones que he tomado.</p>
                            <img id='estrellas' src={estrellas} alt="Calificación" />
                            <h4>Martina García</h4>
                            <p id='rol'>Emprendedora de textiles</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container'>
                        <div className="imagen">
                            <img src={testimonio3} alt="testimonioUno" />
                        </div>
                        <div className="inf">
                            <img src={comillas} alt="comillas" />
                            <p>Soy dueña de un pequeño negocio de ropa y accesorios, y he encontrado que implementar tecnología ha sido crucial para mantenerme competitiva en el mercado actual.</p>
                            <img id='estrellas' src={estrellas} alt="Calificación" />
                            <h4>Laura Méndez</h4>
                            <p id='rol'>Emprendedora de ropa</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default Testimonios
