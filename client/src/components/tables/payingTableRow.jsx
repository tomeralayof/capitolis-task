import React from "react";
import utils from "../../services/utils";

const PayingTableRow = ({ val, count }) => {
  let { counterparty, amount } = val;
  counterparty = utils.capitalLetter(counterparty);
  return (
    <React.Fragment>
      <div className="item item3">
        <p>
          {count}. {counterparty}
        </p>
      </div>
      <div className="item item4">
        <p>${amount}</p>
      </div>
    </React.Fragment>
  );
};

export default PayingTableRow;
