import React from "react";
import ReactDOM from "react-dom";
import MainBox from "./container/MainBox";

window.onload = () => {
  ReactDOM.render(
    <MainBox/>,
    document.getElementById("app")
  );
}
