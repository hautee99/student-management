import React, { useState } from "react";
import InputSearch from "../content/head/InputSearch";
import ModalAdd from "../content/head/ModalAdd";
import { useHandleInput } from "../hooks/useHandleInput";
import { useModalClose } from "../hooks/useModalClose";
import Button from "../modal/Button";
import Modal from "../modal/Modal";

const HeadContainer = () => {
  const [id, setId] = useState("");
  const { values, handleInputValue } = useHandleInput({
    id: "",
    fullname: "",
    address: "",
    phone: "",
    email: "",
  });
  const { modal, handleModalClose } = useModalClose();

  return (
    <div className="w-full h-48 bg-blue-400">
      <Modal
        open={modal}
        onClick={handleModalClose}
        onChange={handleInputValue}
      ></Modal>
      <h3 className="text-5xl mb-5 text-white font-semibold text-center">
        Student Management
      </h3>
      <div className="flex justify-center items-center ">
        <InputSearch></InputSearch>
        <ModalAdd onClick={handleModalClose}></ModalAdd>
      </div>
    </div>
  );
};

export default HeadContainer;
