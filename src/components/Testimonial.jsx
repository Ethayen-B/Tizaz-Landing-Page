import React from 'react'
import Tony from '../../src/assets/images/tony.jpg'
import Steve from '../../src/assets/images/steve.jpg'
import Natasha from '../../src/assets/images/natasha.jpg'
import { delay, motion } from 'framer-motion'
import { SlideUp } from '../animation/animate'

const TestimonialsData = [
    {
        id: 1,
        name: "Mr. Tony Stark",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure!",
        position: "CEO",
        img: Tony,
        delay: 0.2
    },
    {
        id: 2,
        name: "Mr. Steve Rogers",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure! amet consectetur adipisicing elit. Delectus, iure!",
        position: "Head Director",
        img: Steve,
        delay: 0.4
    },
    {
        id: 3,
        name: "Miss. Natsha Romanoff",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure!",
        position: "Human Resource",
        img: Natasha,
        delay: 0.6
    },
]
const Testimonial = () => {
  return (
    <div className="mt-10 mb-5">
        <div className="">
            <div className="text-center mb-5 ">
                <h1 className='text-4xl font-bold text-primary underline'>
                    Testimonials
                </h1>
            </div>

            <div className="">
                {/* testimonial card */}
                <div className="bg-gray-50 p-12 ">
                    <div 
                    className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 duration-300'>
                        {
                            TestimonialsData.map((card) => {
                                return(
                                    <motion.div                                    
                                    variants={SlideUp(card.delay)}
                                    initial= "initial"
                                    animate= "animate" 
                                    key={card.id} className='border-[2px] rounded bg-white hover:shadow-lg border-primary p-5 group hover:scale-110 duration-300'>
                                        <div className="flex flex-row items-center gap-5">
                                            <img src={card.img} alt="" className='w-[70px] h-[70px] rounded-full'/>
                                            <div className="">
                                                <p className='text-sm font-bold font-serif'>{card.name}</p>
                                                <p className='text-gray-500 text-xs'>{card.position}</p>
                                                <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                                            </div>
                                        </div>
                                        <div className="mt-5 border-t-2 border-gray-500 pt-5 ">
                                            <p className='text-sm text-gray-500'>{card.text}</p>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div> 
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Testimonial