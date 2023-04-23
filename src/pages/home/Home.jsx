import React from 'react'
import Testimonios from './Testimonios'
import Preguntas from './Preguntas'
import Banner from './Banner'
import Info from './Info'


function Home() {
  return (
    <div>
      <Banner/>
      <Info/>
      <Testimonios />
      <Preguntas />
    </div>
  )
}

export default Home
