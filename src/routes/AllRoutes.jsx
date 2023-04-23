import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/home'


function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </>
  )
}

export default AllRoutes