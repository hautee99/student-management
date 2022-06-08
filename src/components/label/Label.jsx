import React from "react";

const Label = ({ chidlren, text }) => {
  return (
    <div>
      <label htmlFor="" className="text-sm font-medium">
        {text}
      </label>
    </div>
  );
};

export default Label;
