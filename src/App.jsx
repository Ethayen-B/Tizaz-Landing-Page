import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Features from './components/Features'
import Download from './components/Download'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Hero />
      <Features />
      <Download />
      <Footer />
    </main>
  )
}

export default App