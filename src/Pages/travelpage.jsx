import React from "react";
import travelData from "../json/Travel";
import Card from "../Components/CardTravel";
import { GiWorld } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function TravelPage() {
 const navigate=useNavigate()

  const signout =()=>{
   localStorage.setItem('LoginPage', false)
   navigate('/LoginPage')
  }
  return (
   <>

    <div className=" sm:w-[130%] flex justify-center">
      <div className="  flex flex-wrap rounded-xl text-black justify-center text-white w-[55%] bg-gray-600  mt-10 ">
      <div className=" "><h1 className="flex justify-center h-10 mt-3"><GiWorld size={25}/> Book Your Next Trip</h1></div>
      {travelData.map((destination) => (
      <div key={destination.key} className="">
      
      <Card destination={destination} />
      
      </div>
      ))}
      
      </div>
      
    </div>
        <div className="flex justify-center items-center">
        
        <button className="bg-gray-300 py-1 px-2 border border-solid rounded text-white bg-green-700 m-3" onClick={signout}>Jump-out</button>
        </div>
   </>
    
  );
}

export default TravelPage;