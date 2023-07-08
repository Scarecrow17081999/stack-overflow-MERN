import React from "react";
import Sidebar from "../stackOverflow/Sidebar";
import ViewQuestion from "./ViewQuestion";
import "./Question.css";
const Questions = () => {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <ViewQuestion />
      </div>
    </div>
  );
};

export default Questions;
