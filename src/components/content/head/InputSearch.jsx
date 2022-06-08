import React from "react";

const InputSearch = (onChange = (e) => {}) => {
  return (
    <div>
      <input
        type="text"
        className="p-5 w-[800px]  rounded-md outline-none bg-white"
        // onChange={onChange}
        placeholder="Please input value..."
      />
    </div>
  );
};

export default InputSearch;
