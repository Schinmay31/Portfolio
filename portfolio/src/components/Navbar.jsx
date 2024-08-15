import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'



export default function Navbar() {
  return (
    <div className='w-18 h-screen 2xl:w-24 bg-gray-100 fixed flex flex-col items-center    justify-center' style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <h2 className='  mb-12 md:ml-2   font-extrabold text-gray-700 md:text-4xl ml-4 2xl:text-5xl cus-link'>C.</h2>
        <ul className="space-y-16 2xl:space-y-20 w-20 h-fit">
            <li className="transform rotate-90 2xl:text-xl md:text-md 2xl:ml-3 md:mt-10 2xl:mt-28 ml-1 text-gray-500 origin-center">
              <Link to="/" className='hover:text-gray-700 transition-colors duration-400 '>Home</Link>
            </li>
            <li className="transform rotate-90 ml-1 2xl:text-xl 2xl:ml-2 text-gray-500 origin-center">
              <Link to="/projects" className='hover:text-gray-700 transition-colors duration-400'>Work</Link>    
            </li>
            <li className="transform rotate-90 ml-1 2xl:text-xl  2xl:ml-2 text-gray-500 origin-center">
              <Link to="/about" className='hover:text-gray-700 transition-colors duration-400'>About</Link>
            </li>
            <li className="transform rotate-90 ml-1 2xl:text-xl 2xl:ml-2 text-gray-500 origin-center">
              <Link to="/contact" className='hover:text-gray-700 transition-colors duration-400'>Contact</Link>    
            </li>
          </ul>
    </div>
  )
}
