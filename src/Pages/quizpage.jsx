import React from "react";
import Quiz from "../Components/Quiz";
import mcqsData from "../json/Mcqs";


const QuizPage = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Quiz questions={mcqsData}/>
    </div>
  );
};

export default QuizPage;
