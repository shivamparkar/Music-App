import React from "react";
import Header from "../components/header/Header";
import "./mainlayout.css";
import Library from "../components/library/Library";

const Mainlayout = () => {
  return (
    <>
      <div className="main-layout">
        <Header />
      </div>

      <div className="wrapper">
        <div className="left">
          <Library />
        </div>
        <div className="right">this is the content from right</div>
      </div>
    </>
  );
};

export default Mainlayout;
