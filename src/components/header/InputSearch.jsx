import React, { useRef, useState } from "react";

const InputSearch = ({ handleInputValue }) => {
  const [inputValue, setInputValue] = useState("");
  const OnChangeInput = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
    handleInputValue(e.target.value, inputValue);
  };
  return (
    <div>
      <input
        onChange={OnChangeInput}
        value={inputValue}
        type="text"
        className="p-5 w-[800px]  rounded-md outline-none bg-white"
        placeholder="Search student..."
      />
    </div>
  );
};

export default InputSearch;
