import React, { useState } from "react";

export const useHandleInput = (initalValues) => {
  const [values, setValues] = useState(initalValues);
  const handleInputValue = (e) => {
    // console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);

  return { values, handleInputValue };
};
