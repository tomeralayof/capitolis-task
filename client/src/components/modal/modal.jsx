import React from "react";
import NewTrans from "./newTranc";
import Modal from "react-modal";
import utils from "../../services/utils";

const ModalBoard = ({ setModal }) => {
  return (
    <React.Fragment>
      <Modal ariaHideApp={false} style={utils.customStyles} isOpen={true}>
        <button onClick={() => setModal(0)}>X</button>
        <NewTrans setModal={setModal} />
      </Modal>
    </React.Fragment>
  );
};

export default ModalBoard;
