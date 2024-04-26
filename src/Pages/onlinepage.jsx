// App.js
import React from "react";
import Card from "../Components/Cardonline";
import onlineData from "../json/OnlineData";
import { useNavigate } from "react-router-dom";


function OnlinePage() {
const navigate=useNavigate() 

  const signout =()=>{
    localStorage.setItem('LoginPage', false)
    navigate('/LoginPage')
  }
  return (
    <>

   
    <div className=" xm:w-[900px] sm:w-[900px] flex flex-col items-center mt-8 mb-5 ">
      <div className=" flex flex-wrap w-[76%] shadow-lg">
        <div className="flex flex-wrap  ">
         <div className="ml-16 mt-12 ">
           <p className=" text-3xl font-black font-mono ">Online Experiences
           </p>
           <p className="mt-3 text-lg font-sans mb-5">Joint unique interactive activities led by one-of-a-kind  hosts-all without leaving home.</p>
         </div>
       </div>

        <div className=" xm:w-[900px] flex flex-wrap justify-center md:">
        {onlineData.map((value) => (
          <div key={value.id}>
            <Card value={value}/>
          </div>
        ))}
        </div>
      
      </div>
      <button className="bg-gray-300 py-1 px-2 border border-solid rounded text-white bg-green-700 m-3" onClick={signout}>Jump-out</button>
    </div>
    </>
  );
}

export default OnlinePage;
