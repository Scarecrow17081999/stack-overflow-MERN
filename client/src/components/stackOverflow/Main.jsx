import React from "react";
import "./css/Main.css";
import { Link } from "react-router-dom";
import { FilterList } from "@mui/icons-material";
import AllQuestionsComponent from "./AllQuestionsComponent.jsx";
const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button>Ask Questions</button>
          </Link>
        </div>
        <div className="main-desc">
          <p>All questions syat</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link to="/questions/all">Newest</Link>
              </div>
              <div className="main-tab">
                <Link to="/questions/all">Active</Link>
              </div>
              <div className="main-tab">
                <Link to="/questions/all">More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterList />
              <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="questions">
          <div className="question">
            <AllQuestionsComponent />
            <AllQuestionsComponent />
            <AllQuestionsComponent />
            <AllQuestionsComponent />
            <AllQuestionsComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
