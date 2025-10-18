import React from 'react'
// import Navbar from './components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Download from '../components/Download'
import Testimonial from '../components/Testimonial'
// import CallToAction from '../components/CallToAction'
const HomePage = () => {
  return (
    <main className='overflow-hidden bg-white text-dark'>
          <Hero />
          <Features />
          {/* <CallToAction /> */}
          <Testimonial />
          <Download />
          <Footer />
    </main>
  )
}

export default HomePage