import React from "react";
import travelData from "../json/Travel";
import Card from "../Components/CardTravel";
import { GiWorld } from "react-icons/gi";

function TravelApp() {
  return (
    <>
    <div className="flex justify-center">
      <div className=" absolute flex flex-wrap rounded-xl text-black justify-center text-white w-[55%] bg-gray-100  mt-10 ">
      <div className="  relative text-xl rounded-t-lg w-[100%] bg-red-500 text-white "><h1 className="flex justify-center h-10 mt-3"><GiWorld size={25}/> Book Your Next Trip</h1></div>
      {travelData.map((destination) => (
      <div key={destination.key} className="">
      
      <Card destination={destination} />
      
      </div>
      ))}
      </div>
    </div>
   
    </>
  );
}

export default TravelApp;