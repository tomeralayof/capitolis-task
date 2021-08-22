import React from "react";
import { UseApi } from "../../services/contextApi";
import utils from "../../services/utils";

const RecevingTable = () => {
  const { api } = UseApi();
  const { compress } = api;
  let count = 0;

  return (
    <div className="table-container2">
      <div className="item item1">
        <p>Counterparty Name</p>
      </div>
      <div className="item item2">
        <p>Amount</p>
      </div>
      {Object.keys(compress).map((key) => {
        let cap = utils.capitalLetter(key);
        count++;
        return (
          <React.Fragment key={key}>
            <div className="item item3">
              <p>
                {count}. {cap}
              </p>
            </div>
            <div className="item item4">
              <p>${compress[key]}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RecevingTable;
