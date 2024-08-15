import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'



export default function Navbar() {
  return (
    <div className='w-18 h-screen lg:w-24   bg-gray-100 fixed flex flex-col items-center    justify-center' style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <h2 className='  mb-12 ml-2   font-extrabold text-gray-700 text-4xl lg:ml-4 lg:text-5xl cus-link'>C.</h2>
        <ul className="space-y-16 lg:space-y-20 w-20 h-fit">
            <li className="transform rotate-90 lg:text-xl lg:ml-3 mt-10 lg:mt-28 ml-1 text-gray-500 origin-center">
              <Link to="/" className='hover:text-gray-700 transition-colors duration-400 '>Home</Link>
            </li>
            <li className="transform rotate-90 ml-1 lg:text-xl lg:ml-2 text-gray-500 origin-center">
              <Link to="/projects" className='hover:text-gray-700 transition-colors duration-400'>Work</Link>    
            </li>
            <li className="transform rotate-90 ml-1 lg:text-xl  lg:ml-2 text-gray-500 origin-center">
              <Link to="/about" className='hover:text-gray-700 transition-colors duration-400'>About</Link>
            </li>
            <li className="transform rotate-90 ml-1 lg:text-xl lg:ml-2 text-gray-500 origin-center">
              <Link to="/contact" className='hover:text-gray-700 transition-colors duration-400'>Contact</Link>    
            </li>
          </ul>
    </div>
  )
}
