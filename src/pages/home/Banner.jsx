import React from 'react'
import bannerImg from "../../assets/Imagenes/Home/bannerIMG.svg"
import "./styles/banner.css"
import playIcon from "../../assets/Imagenes/Home/PlayIcon.svg"
import { Link } from 'react-router-dom'
import Aliados1 from "../../assets/Imagenes/Home/Aliados1.svg"
import Aliados2 from "../../assets/Imagenes/Home/Aliados2.svg"
import Aliados3 from "../../assets/Imagenes/Home/Aliados3.svg"
import Aliados4 from "../../assets/Imagenes/Home/Aliados4.svg"
import Aliados5 from "../../assets/Imagenes/Home/Aliados5.svg"

const Banner = () => {
  return (
    <>
        <div className="banner-body">
            <div>
                <h3>¿Qué deseas aprender o aportar <span>dentro de la comunidad?</span></h3>
                <div className='banner-butts'>
                    <Link to=""><button>Inicia ahora</button></Link>
                    <div>
                        <img src={playIcon}/>
                        <button>Ver video</button>
                    </div>
                </div>
            </div>
            <img src={bannerImg}/>
        </div>
        <div className="Aliados d-flex justify-content-center">
            <img src={Aliados1}/>
            <img src={Aliados2}/>
            <img src={Aliados3}/>
            <img src={Aliados4}/>
            <img src={Aliados5}/>
        </div>
    </>
  )
}

export default Banner