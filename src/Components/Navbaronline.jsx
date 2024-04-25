import React from 'react'
import { SiAirbnb } from "react-icons/si";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (

    <div className="flex flex-col items-center mt-8 mb-5 ">
      <div className="flex items-center w-[76%] justify-between h-16 rounded-t-lg bg-orange-600 font-extrabold font-mono">
       <div className="flex items-center">
         <SiAirbnb size={28} className="ml-10 text-white"/>
         <h1 className="ml-2 text-2xl text-white ">airbnb</h1>
       </div>
        <div className="flex items-center text-white text-xl">
        <NavLink to="/" className="mr-5 ">Travel</NavLink> 
        <NavLink to={"/OnlinePage"} className="mr-5 ">Online</NavLink> 
        <NavLink to={"/QuizPage"} className="mr-5 ">Quiz</NavLink> 
        <NavLink  className="mr-5 ">Login</NavLink> 
        </div>
      </div>
      </div>

  )
}

export default Navbar
