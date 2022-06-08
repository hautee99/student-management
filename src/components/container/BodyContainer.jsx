import React, { useState } from "react";
import UserTable from "../content/table/UserTable";
import { useHandleInput } from "../hooks/useHandleInput";
import { useHandleSubmit } from "../hooks/useHandleSubmit";
import { useModalClose } from "../hooks/useModalClose";
import Modal from "../modal/Modal";

const BodyContainer = ({ studentList }) => {
  const [id, setId] = useState("");

  const { values, handleInputValue } = useHandleInput({
    id: "",
    fullname: "",
    address: "",
    phone: "",
    email: "",
  });
  const { handleSubmitForm } = useHandleSubmit();
  const { modal, handleModalClose } = useModalClose();

  return (
    <div className="w-full h-full ">
      <UserTable students={studentList} onClick={handleModalClose}></UserTable>
      <Modal
        open={modal}
        onClick={handleModalClose}
        onChange={handleInputValue}
      ></Modal>
    </div>
  );
};

export default BodyContainer;
