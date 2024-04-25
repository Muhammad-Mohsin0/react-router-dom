import React from "react";
import Quiz from "../Components/Quiz";
import mcqsData from "../json/Mcqs";


const QuizApp = () => {
  return (
    <div className="min-h-screen bg-rose-300 ">
      <Quiz questions={mcqsData}/>
    </div>
  );
};

export default QuizApp;
