import React from "react";
import "./css/AllQuestions.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
const AllQuestionsComponent = () => {
  return (
    <div className="allQuestions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small> 0 Views</small>
            </div>
          </div>
        </div>
        <div className="all-questions-middle">
          <div className="questions-answer">
            <Link to="/question">THis is question title</Link>
            <div style={{ width: "90%" }}>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                impedit quo illum earum minima ex ab error, vitae, recusandae
                tempora maiores fugiat libero nesciunt, totam pariatur placeat
                iure quia aperiam.
              </div>
            </div>
            <div style={{ display: "flex" }} className="question-tags">
              <span className="question-tag">react</span>
              <span className="question-tag">react</span>
              <span className="question-tag">react</span>
            </div>
          </div>
          <div className="author">
            <small>Timestamp</small>
            <div className="author-details">
              <Avatar />
              <p>Username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestionsComponent;
