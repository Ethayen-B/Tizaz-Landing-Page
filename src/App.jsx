import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Hero />

      <Footer />
    </main>
  )
}

export default App