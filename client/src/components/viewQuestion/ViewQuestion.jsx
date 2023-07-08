import React, { useState } from "react";
import "./ViewQuestion.css";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import {
  ArrowUpwardSharp,
  ArrowDownwardSharp,
  BookmarkAddSharp,
  HistorySharp,
} from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import ReactQuill from "react-quill";
const ViewQuestion = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="view-question">
      <div className="view-question-container">
        <div className="view-question-top">
          <h2 className="view-question-heading">This is question titile</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="view-question-desc">
          <div className="view-info">
            <p>Timestamp</p>
            <p>
              Active <span>Today</span>
            </p>
            <p>
              Viewed <span>100</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-question-container">
            <div className="all-questions-left">
              <div className="main-options">
                <p className="arrow">
                  <ArrowUpwardSharp />
                </p>
                <p style={{ marginLeft: "2px" }} className="arrow">
                  0
                </p>
                <p className="arrow">
                  <ArrowDownwardSharp />
                </p>
                <p>
                  <BookmarkAddSharp />
                </p>
                <p>
                  <HistorySharp />
                </p>
              </div>
            </div>

            <div className="question-answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                tempora doloremque ab, eaque dolorum vel nobis voluptate sed
                similique culpa voluptatum ipsam in sint nihil. Hic amet eos ab,
                impedit suscipit culpa illum aspernatur, sapiente rerum ullam
                iure corporis, soluta facilis? Ipsum laudantium placeat porro
                veritatis asperiores eaque quidem modi!
              </p>
              <div className="author">
                <small>Asked Timestamp</small>
                <div className="author-details">
                  <Avatar />
                  <p>Username</p>
                </div>
              </div>

              <div className="comments">
                <div className="comment">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus laboriosam nemo nam at obcaecati unde aspernatur
                    velit quidem dolorem mollitia.
                  </p>
                  <span>User commented</span>
                  <small>Timestamp</small>
                </div>
                <p
                  className="add-a-comment"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShow(!show)}
                >
                  Add a comment
                </p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        width: "100%",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      typeof="text"
                      placeholder="Add a comment..."
                      //   cols="30"
                      rows="5"
                    />
                    <button
                      style={{
                        maxWidth: "fit-content",
                      }}
                      className="button"
                    >
                      Add Comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Divider style={{ margin: "1rem 0" }} />
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            No. of answers
          </p>
          <div className="all-question-container">
            <div className="all-questions-left">
              <div className="main-options">
                <p className="arrow">
                  <ArrowUpwardSharp />
                </p>
                <p style={{ marginLeft: "2px" }} className="arrow">
                  0
                </p>
                <p className="arrow">
                  <ArrowDownwardSharp />
                </p>
                <p>
                  <BookmarkAddSharp />
                </p>
                <p>
                  <HistorySharp />
                </p>
              </div>
            </div>
            <div className="question-answer">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos consequatur rem minus totam alias illo aliquid omnis
                unde quia, iure et iusto itaque dolorem libero reiciendis
                tempora illum dolore officiis assumenda nobis cupiditate
                consequuntur natus deserunt ipsa. Perspiciatis, est. Maxime
                repudiandae fuga, blanditiis dicta molestias officia laudantium
                corporis quas illo, esse nemo fugiat deserunt et, earum dolor
                voluptas. Quis, ducimus.
              </p>
              <div className="author">
                <small>Asked Timestamp</small>
                <div className="author-details">
                  <Avatar />
                  <p>Username</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-answer">
        <h3>Your Answer</h3>
        <ReactQuill
          style={{ height: "200px" }}
          className="react-quill"
          theme="snow"
        />
        <button className="post-answer">Post Your Answer</button>
      </div>
    </div>
  );
};

export default ViewQuestion;
