//modal styling
  const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "85vh",
    width:"95vw",
    position: "relative",
    transform: "translate(-50%, -50%)",
  },
};

//capital letter function
function capitalLetter(dataToRender) {
  return(
   dataToRender.replace(
    dataToRender[0].toLowerCase(),
    dataToRender[0].toUpperCase()
   )
  );
}

  const header = [
  { label: "counterparty", key: "counterparty" },
  { label: "Amount", key: "amount" },
  ];

  //csv file object  
  let report = {
    filename: "Report.csv",
    headers: header,
    data: [],
   } 

   //convert compress key value into array of objects.
   const convertCompress =(obj) => {
    const {data} = report;
   for(let key in obj) {
     data.push({counterparty: key, amount:obj[key]}) 
   }
   return data;
  }

  function reportData (obj) {
    let repo = {
      filename: "Report.csv",
      headers: header,
      data: convertCompress(obj)
     }
     return repo;
  }


const utils = {
  customStyles,
  capitalLetter,
  report,
  convertCompress,
  reportData
}

export default utils;