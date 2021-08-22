import React from "react";
import PayingTable from "./payingTable";
import RecevingTable from "./recevingTable";
import TableCategory from "./tableCategory";
const Tables = () => {
  return (
    <React.Fragment>
      <TableCategory />
      <div className="tables-gen-container">
        <PayingTable />
        <RecevingTable />
      </div>
    </React.Fragment>
  );
};

export default Tables;
