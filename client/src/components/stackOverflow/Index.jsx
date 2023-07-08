import React from "react";
import "./css/Index.css";
import Sidebar from "./Sidebar";
import Main from "./Main.jsx";
import { useSelector } from "react-redux";
import LoaderFunc from "../loader/Loader";
const Index = () => {
  const { loading } = useSelector((state) => state.user);
  return (
    <>
      {loading ? (
        <LoaderFunc />
      ) : (
        <div className="stack-index">
          <div className="stack-index-content">
            <Sidebar />
            <Main />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
