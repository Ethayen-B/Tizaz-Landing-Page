import { animate, scale } from 'framer-motion'
import React from 'react'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'



const Download = () => {
  return (
    <div>
        <div className="container px-20 py-10 mx-auto bg-primary md:py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <div className="">
                    <h1 className='text-4xl text-center text-white'>Tizaz is Available for Android and Ios</h1>
                </div>
                <div className="justify-center items-center">
                    <button className='w-100 hover:bg-white hover:scale-110 duration-300 shadow-blue-100 flex items-center justify-center bg-white my-2 py-2 rounded-full'>
                        <FaAppStoreIos className=' text-primary text-3xl  mx-2'/>
                        <p>Download for Ios</p>
                    </button>
                    
                    <button className='w-100 hover:bg-white hover:scale-110 duration-300 shadow-blue-100 flex items-center justify-center bg-white my-2 py-2 rounded-full'>
                        <FaGooglePlay className='text-3xl text-primary md:text-3xl  mx-2'/>
                        <p>Download for Ios</p>
                    </button>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download