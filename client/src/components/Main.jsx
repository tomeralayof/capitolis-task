import React from "react";
import Tables from "./tables/tablesGen";
import Buttons from "./buttons/buttonsGen";

const Main = () => {
  return (
    <div className="main-container">
      <Tables />
      <Buttons />
    </div>
  );
};

export default Main;
