// App.js
import React from "react";
import Card from "../Components/Cardonline";
import onlineData from "../json/OnlineData";


function OnlinePage() {
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
    </div>
    </>
  );
}

export default OnlinePage;
