import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Login from './pages/Login'


const App = () => {
  return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />
      </Routes>
  )
}

export default App