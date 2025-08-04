import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube, FaTelegram, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer>
        <motion.div 
        initial={{opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} className="container mx-auto px-20 py-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                <div className="space-y-4 max-w-[300px]">
                    <h1 className='text-2xl font-bold'>Tizaz</h1>
                    <p className="text-dark">
                      All right recived 2025.
                    </p>
                </div>
                    <div className="grid grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <h1 className='text-2xl font-bold'>Navigation</h1>
                          <div className="text-darker">
                            <ul className='space-y-2 text-lg'>
                              <li className="cursor-pointer hover:text-dark hover:underline duration-200" >Link 1</li>
                              <li className="cursor-pointer hover:text-dark hover:underline duration-200" >Link 2</li>
                              <li className="cursor-pointer hover:text-dark hover:underline duration-200" >Link 3</li>
                              <li className="cursor-pointer hover:text-dark hover:underline duration-200" >Link 4</li>
                            </ul>
                          </div>
                      </div>
                    </div>

                    <div className="space-y-4 max-w-[300px]">
                      <h1 className='text-2xl font-bold'>Contact us</h1>
                      <div className="flex items-center">
                        <input type="text" placeholder='Enter your email' className='p-3 border-primary border rounded-s-xl w-full py-4 focus:ring-0 focus:outline-none placeholder:text-darker ' />
                        <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl border-primary border'> Go</button>
                      </div>

                      <div className="flex space-x-6 py-3 text-3xl text-darker">
                        <a href="">
                          <FaInstagram className='cursor-pointer hover:scale-105 duration-200  hover:text-orange-800' />
                        </a>
                                               <a href="">
                          <FaYoutube className='cursor-pointer hover:scale-105 duration-200 hover:text-red-400'/>
                        </a>
                                               <a href="">
                          <FaFacebook className='cursor-pointer hover:scale-105 duration-200 hover:text-blue-800'/>
                        </a>
                                               <a href="">
                          <FaTelegram className='cursor-pointer hover:scale-105 duration-200 hover:text-blue-400'/>
                        </a>
                      </div>
                    </div>

                </div>
        </motion.div>
    </footer>
  )
}

export default Footer