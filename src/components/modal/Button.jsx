import React from "react";

const Button = ({ children, className, onClick, type }) => {
  return (
    <div>
      <button
        className={` p-4 mx-2 rounded-md text-white ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
