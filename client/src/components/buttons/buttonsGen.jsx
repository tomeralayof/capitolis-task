import React, { useEffect, useState } from "react";
import TransactionButton from "./transactionButton";
import CompressButton from "./compressButton";
import ModalBoard from "../modal/modal";
import trans from "../../services/ajaxCall";
import { UseApi } from "../../services/contextApi";
import utils from "../../services/utils";

const Buttons = () => {
  const [modal, setModal] = useState(0);
  const { api, setApi } = UseApi();
  const [repoToExport, setRepoToEXport] = useState(utils.report);
  const [isClicked, setisclicked] = useState(false);

  let csvLinkEl = React.createRef();

  useEffect(() => {
    if (isClicked === true) csvLinkEl.current.link.click();
    setTimeout(() => {
      utils.report.data = [];
      setRepoToEXport(utils.report);
      setisclicked(false);
    });
  }, [repoToExport]);

  const onClick = async (type) => {
    if (type === "trans") setModal(1);
    if (type === "comp") {
      const { data } = await trans.getCompress();
      let newApi = { ...api };
      newApi.compress = data;
      setApi(newApi);
      const repoToExport1 = utils.reportData(data);
      setRepoToEXport(repoToExport1);
      setisclicked(true);
    }
  };
  return (
    <div className="buttons">
      <TransactionButton onClick={() => onClick("trans")} />
      <CompressButton
        repoToExport={repoToExport}
        csvLinkEl={csvLinkEl}
        onClick={() => onClick("comp")}
      />
      {modal !== 0 ? <ModalBoard setModal={setModal} modal={modal} /> : null}
    </div>
  );
};

export default Buttons;
