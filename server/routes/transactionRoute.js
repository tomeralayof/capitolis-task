const express = require("express");
const router = express.Router();

const transactions = [];

router.get("/transaction",(req,res)=>{
  res.json(transactions);
})

router.post("/transaction",(req,res)=>{
  const {data} = req.body;
  transactions.push(data);
  res.send(data);
})

router.get("/compress",(req,res)=>{
  let data = merge();
  res.send(data);
})

function merge(){
  let lookUp = {};
  for( let i = 0; i<transactions.length;i++){
      let amount = parseInt(transactions[i].amount);
      let counterparty = transactions[i].counterparty;
      lookUp[counterparty] ?  lookUp[counterparty]+=amount : lookUp[counterparty]=amount;
  }
  return lookUp;
}

module.exports = router;