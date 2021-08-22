import React from "react";
import { CSVLink } from "react-csv";

const CompressButton = ({ onClick, repoToExport, csvLinkEl }) => {
  return (
    <div className="btn">
      <button onClick={onClick}>Compress Transaction</button>

      <CSVLink
        headers={repoToExport.headers}
        filename={repoToExport.filename}
        data={repoToExport.data}
        ref={csvLinkEl}
      ></CSVLink>
    </div>
  );
};

export default CompressButton;
