import React from "react";

const TransactionButton = ({ onClick }) => {
  return (
    <div className="btn">
      <button onClick={onClick}>Add new Transaction</button>
    </div>
  );
};

export default TransactionButton;
