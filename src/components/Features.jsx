import { motion } from 'framer-motion'
import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { TbReport, TbReportAnalytics, TbTableDashed, TbWorldWww } from 'react-icons/tb'

const FeaturesData = [
    {
        id: 1,
        title: "Real time oreder tracking",
        link: "#",
        icon: <FaMapLocationDot />,
        delay: 0.2
    },
        {
        id: 2,
        title: "Search by Location",
        link: "#",
        icon: <FaSearchLocation />,
        delay: 0.3
    },
        {
        id: 3,
        title: "Outlet Performance report",
        link: "#",
        icon: <TbReportAnalytics />,
        delay: 0.4
    },
        {
        id: 4,
        title: "Order Report",
        link: "#",
        icon: <TbReport />,
        delay: 0.5
    },
        {
        id: 5,
        title: "Table Managment",
        link: "#",
        icon: <TbTableDashed />,
        delay: 0.6
    }
]

const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}

const Features = () => {
  return (
    <section className='bg-[#f1f1f1] px-30'>
        <div className="container pb-14 pt-16 mx-auto">
            <h1 className="text-4xl font-bold text-left pb-5 text-primary">Features</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 mx-auto">
                {
                    FeaturesData.map((feature) => (
                        <motion.div
                        variants= {SlideLeft(feature.delay)}
                        initial= "initial"
                        whileInView={'animate'}
                        // viewport={{once: true}}
                        className='bg-primary text-white hover:text-primary rounded-2xl flex flex-col shadow gap-3 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-xl'>
                            <div className="text-5xl mb-4"> { feature.icon }</div>
                            <h1 className='text-lg font-semibold text-center px-3'>{ feature.title } </h1>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Features