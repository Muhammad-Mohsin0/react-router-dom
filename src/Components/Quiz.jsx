import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [inputs, setInputs] = useState(Array(5).fill(''));
  const [answer, setAnswer] = useState((false));
  const [score,   setScore] = useState(0)
  

  const handleOptionClick = (questionkey, selectedOption) => {
    setInputs((prev) => ({
      ...prev,
     [questionkey]:selectedOption
    }));
  };

const handleSubmit =()=>{
   setAnswer(true)

   let score=0;
   questions.forEach((question) => {
    if(question.Ans === inputs[question.key]){
    score++;

   }
   })
   setScore(score)
};

  
  return (
   <div className="flex justify-center ">
     <div className="w-[50%]  bg-gray-100 p-8 rounded-md shadow-md mt-3 mb-7"> 
          {questions.map((question) => (
           <div key={question.key} className="mb-3 ">
              <h2 className="text-lg text-blue-900 font-semibold mb-2">
              <ul>
                <li>
                {question.Ques}
                </li>
              </ul>
             
              </h2>
              
              <div className="flex gap-8 ml-3">
              {["a", "b", "c", "d"].map((option) => (
              <button
              key={option}
              className={`py-1 px-4 border rounded-full hover:bg-gray-200  active:bg-gray-400 ${
                !answer && inputs[question.key] === question[option] ? "bg-cyan-200" :""
              } ${ 
                answer && 
              ( 
              question.Ans === question[option]
              ?"bg-green-200"
              :inputs[question.key] === question[option]
              ? "bg-red-200"
              : "")
              }`}
              onClick={() =>
              !answer &&
              handleOptionClick(question.key, question[option])}>
              {question[option]}
              </button>
              ))}
             
              </div> <hr className="mt-4"/>
              </div>
              ))}
      
              <div className="flex justify-center items-center gap-6">
              {answer ? (
              <div className="text-black-700 font-sans text-2xl">
              Your scored {score}/{questions.length} correct answer
              </div>
              ) : (
                <button className="w-52 bg-blue-300 rounded-full py-1.5 px-4 hover:bg-green-500 hover:text-white" 
              onClick={handleSubmit}>
              Submit
              </button>
              )}

           
             {answer && (
              <button className="w-52 bg-blue-300 rounded-full py-1.5 px-4 hover:bg-amber-500 hover:text-white" 
              onClick={()=>window.location.reload()}>
              Play again
              </button>
             )}
              
          </div>
       </div>
    </div>
  );
};

export default Quiz;
