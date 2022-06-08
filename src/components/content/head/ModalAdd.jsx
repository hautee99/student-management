import React, { useState } from "react";
import Modal from "../../modal/Modal";

const ModalAdd = ({ onClick = () => {} }) => {

  return (
    <div>
      <button
        onClick={onClick}
        className="p-5 mx-6 bg-blue-500 font-bold text-white rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default ModalAdd;
