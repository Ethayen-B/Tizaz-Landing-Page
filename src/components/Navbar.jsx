import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "Features",
        path: "/features"
    },
    {
        id: 3,
        title: "Testimonial",
        path: "/testimonial"
    },
    {
        id: 3,
        title: "Download",
        path: "/download"
    },
];

const Navbar = () => {
  return (
    <nav className='bg-white shadow-xl relative z-20'>
        <motion.div 
            initial={{ opacity:0, y: -50}}
            animate={{ opacity:1, y: 0 }} className="container mx-auto py-5 flex justify-between items-center sm:px-5">
            <div>
                <h1 className='font-bold text-3xl'>Tizaz</h1>
            </div>

        <div className="hidden lg:block ">
            <ul className='flex items-center gap-3 '>
                {NavbarMenu.map((menu) => (
                    <li key={menu.id}>
                        <a href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                            <div className='w-2 h-2 bg-secondary absolute mt-2  left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                            {menu.title}
                        </a>
                    </li>
                ))}

                <button className='primary-btn '>Get Started</button>
            </ul>
        </div>
        <div className="lg:hidden">
            <IoMdMenu className='text-3xl' />
        </div>
        </motion.div>
    </nav>
  )
}

export default Navbar