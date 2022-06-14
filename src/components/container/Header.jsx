import React from "react";
import BtnAddUser from "../header/BtnAddUser";
import InputSearch from "../header/InputSearch";
import { useModalClose } from "../hooks/useModalClose";
import Modal from "../modal/Modal";

const Header = ({ handleSubmitValue, handleInputValue }) => {
  const { modal, handleModalClose } = useModalClose();
  return (
    <div>
      <div className="w-full h-48 bg-blue-400">
        <h3 className="text-5xl mb-5 text-white font-semibold text-center">
          Student Management
        </h3>
        {/* <UserTable students={studentList} onClick={handleModalClose}></UserTable> */}

        <div className="flex justify-center items-center ">
          <InputSearch handleInputValue={handleInputValue}></InputSearch>
          <BtnAddUser onClick={handleModalClose}></BtnAddUser>
        </div>
      </div>
      <Modal
        open={modal}
        onClick={handleModalClose}
        onSubmitValue={handleSubmitValue}
        type="submit"
        typeModal="submit"
      ></Modal>
    </div>
  );
};

export default Header;
