import React from "react";
import BtnAddUser from "../header/BtnAddUser";
import InputSearch from "../header/InputSearch";

const Header = ({ onClickModal }) => {
  return (
    <div>
      <div className="w-full h-48 bg-blue-400">
        <h3 className="text-5xl mb-5 text-white font-semibold text-center">
          Student Management
        </h3>
        {/* <UserTable students={studentList} onClick={handleModalClose}></UserTable> */}

        <div className="flex justify-center items-center ">
          <InputSearch></InputSearch>
          <BtnAddUser onClick={onClickModal}></BtnAddUser>
        </div>
      </div>
    </div>
  );
};

export default Header;
