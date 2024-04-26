import React from "react";
import Quiz from "../Components/Quiz";
import mcqsData from "../json/Mcqs";
import { useNavigate } from "react-router-dom";


const QuizPage = () => {

  const navigate=useNavigate()

  const signout=()=>{
    localStorage.setItem('LoginPage', false)
    navigate('/LoginPage')
  }
  return (
    <div className="min-h-screen bg-white ">
      <Quiz questions={mcqsData}/>
      <div className="flex justify-center items-center">
        
      <button className="bg-gray-300 py-1 px-2 border border-solid rounded text-white bg-green-700 m-3" onClick={signout}>Jump-out</button>
      </div>
    </div>
  );
};

export default QuizPage;
