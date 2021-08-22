import React from "react";
import { UseApi } from "../../services/contextApi";
import PayingTableRow from "./payingTableRow";

const PayingTable = () => {
  const { api } = UseApi();
  const { transactions } = api;
  let count = 0;

  return (
    <div className="table-container2">
      <div className="item item1">
        <p>Counterparty Name</p>
      </div>
      <div className="item item2">
        <p>Amount</p>
      </div>
      {transactions.map((val, idx) => {
        count++;
        return <PayingTableRow count={count} key={idx} val={val} />;
      })}
    </div>
  );
};

export default PayingTable;
