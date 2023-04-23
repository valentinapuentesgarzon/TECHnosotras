import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cursos from '../pages/cursos/Cursos'


function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cursos" element={<Cursos/>} />
    </Routes>
    </>
  )
}

export default AllRoutes