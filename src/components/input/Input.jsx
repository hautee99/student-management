import React from "react";

const Input = ({ type = "text", name, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        className="p-5 mt-2 w-[90%] bg-gray-300 rounded-md outline-none border-none"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
