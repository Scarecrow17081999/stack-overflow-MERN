import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./AskQuestion.css";
import { TagsInput } from "react-tag-input-component";
const AskQuestion = () => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState([]);
  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask Question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="question-title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine your're asking a question to another
                  person.
                </small>
                <input type="text" placeholder="Add Question Title." />
              </div>
            </div>
            <div className="question-option">
              <div className="question-title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer you
                  question.
                </small>
                {/* <input type="text" placeholder="Add Question Title." /> */}
                <ReactQuill
                  className="react-quill"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
            <div className="question-option">
              <div className="question-title">
                <h3>Tags</h3>
                <small>
                  Add upto 5 tags to describe what your queation is about.
                </small>
                <TagsInput
                  style={{ margin: "50px" }}
                  value={selected}
                  onChange={setSelected}
                  placeHolder="Add Tags..."
                />
              </div>
            </div>
          </div>
        </div>
        <button className="button">Add Your Question</button>
      </div>
    </div>
  );
};

export default AskQuestion;
