import React, { useEffect, useState } from "react";
import trans from "../../services/ajaxCall";
import { UseApi } from "../../services/contextApi";

const NewTrans = ({ setModal }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [unableBtn, setUnableBtn] = useState(false);
  const { api, setApi } = UseApi();

  useEffect(() => {
    data.counterparty &&
    data.amount &&
    data.counterparty !== "" &&
    data.amount !== "" &&
    error === ""
      ? setUnableBtn(true)
      : setUnableBtn(false);
  }, [data, error]);

  const handleChange = (e) => {
    let sign = e.target.value;
    sign = sign.trim().toLowerCase();
    const dataToSave = { ...data };
    dataToSave.counterparty = sign;
    setData(dataToSave);
  };

  const handleAmount = (e) => {
    let amount = e.target.value;
    amount <= 0 ? setError("amount must be grater then 0") : setError("");
    const dataToSave = { ...data };
    dataToSave.amount = amount;
    setData(dataToSave);
  };

  const toggleClick = async () => {
    try {
      setModal(0);
      let finalData = { ...data };
      finalData.tradingParty = "me";
      const dataToSave = await trans.sendTransaction(finalData);
      let newApi = { ...api };
      newApi.transactions.push(dataToSave.data);
      setApi(newApi);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-form">
      <p>counter party name</p>
      <input onChange={(e) => handleChange(e)} type="text" />
      <p>amount</p>
      <input onChange={(e) => handleAmount(e)} type="number" />
      {error ? <p style={{ color: "red" }}> {error}</p> : ""}
      <br />
      <button disabled={unableBtn ? false : true} onClick={() => toggleClick()}>
        {!unableBtn ? "Fulfil All" : "save"}
      </button>
    </div>
  );
};

export default NewTrans;
