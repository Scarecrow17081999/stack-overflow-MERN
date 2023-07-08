import React from "react";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";

import { Public, Work } from "@mui/icons-material";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <p>Home</p>
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tags">
                <Public />
                <Link>Question</Link>
              </div>
              <div className="tags">
                <Link>Tags</Link>
                <Link>Users</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>Collectives</p>
            <div className="link">
              <div className="link-tags">
                <StarsSharpIcon />
                <Link>Explore Collections</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>Find a job</p>
            <div className="link">
              <div className="link-tags">
                <Link>Questions</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>Teams</p>
            <div className="link">
              <div className="link-tags">
                <Work />
                <Link>Companies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
