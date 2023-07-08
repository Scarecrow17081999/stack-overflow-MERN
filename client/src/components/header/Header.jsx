import React from "react";
import "./Header.css";
// import { Search } from "@mui/icons-material";

import { Search, Inbox, TableRows, Help } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderProfile from "./HeaderProfile";
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
              alt="logo"
            />
          </Link>
          <h4>Products</h4>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <Search />

            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            {/* <Avatar /> */}
            <HeaderProfile />
            <Inbox />
            <Help />
            <TableRows />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
